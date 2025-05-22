import {CredentialsSignin, NextAuthConfig} from 'next-auth'
import {JWT} from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import {login} from "@/entities/Auth";
import {refreshingProcess} from "../lib";

export class InvalidLoginError extends CredentialsSignin {
    code = ""

    constructor(code: string) {
        super();
        this.code = code
    }
}

export const authConfig: NextAuthConfig = {
    basePath: process.env.BASE_NEXTAUTH_URL,
    debug: process.env.NODE_ENV !== "production",
    secret: process.env.AUTH_SECRET,
    trustHost: true,
    pages: {
        signIn: '/login',
    },
    jwt: {
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                username: {label: "Phone Number", type: "text", placeholder: "Enter your phone number"},
                password: {label: "Password", type: "password", placeholder: "Enter your password"},
            },
            async authorize(credentials, _req) {
                if (credentials.username && credentials.password) {
                    const userData = {
                        username: credentials.username as string,
                        password: credentials.password as string,
                    }

                    const authResponse = await login(userData);
                    if (authResponse?.success) {
                        return authResponse.data
                    } else {
                        throw new InvalidLoginError(`Backend server error: ${JSON.stringify(authResponse?.data)}`);
                    }
                }

                throw new InvalidLoginError('Unknown authentication error');
            }
        }),
    ],
    callbacks: {
        async jwt({token, trigger, user, session}): Promise<JWT> {
            if (trigger === 'signIn') {
                return {...user, error: null}
            }
            if (token == null) {
                return {...session?.user, error: 'another'} as JWT
            }

            if (trigger === 'update') {
                return await refreshingProcess(token)
            }

            return {...token, error: null}
        },
        async session({token, session}) {
            if (token) {
                session.user = {
                    access_token: token.access_token,
                    refresh_token: token.refresh_token,
                    token_type: token.token_type
                } as any
            }

            return session;
        },
    },
}