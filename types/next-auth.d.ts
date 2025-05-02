import {AuthJWTErrorType} from "@/features/next-auth/types";

export declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
    interface JWT {
        access_token?: string,
        refresh_token?: string,
        token_type?: string,
        error?: AuthJWTErrorType
    }
}

export declare module "next-auth" {
    interface Session {
        user: {
            access_token?: string,
            refresh_token?: string,
            token_type?: string,
            error?: AuthJWTErrorType
        };
    }
    interface User {
        access_token?: string,
        refresh_token?: string,
        token_type?: string,
    }
}
