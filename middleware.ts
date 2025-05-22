import {NextRequest, NextResponse} from "next/server";
import {auth, getAccessTokenPayload} from "@/features/next-auth";
import {Session} from "next-auth";
import {isTokenAvailable} from "@/shared/lib/jwtToken";
import {ROUTES_CONFIG} from "@/features/Routing";

export default async function middleware(request: NextRequest) {
    const availableUrls = [
        '/public-assets',
        '/assets',
    ]
    const pathname = request.nextUrl.pathname
    if (availableUrls.find(item => pathname.startsWith(item)) || pathname === '/') {
        return NextResponse.next()
    }

    if (pathname === ROUTES_CONFIG.ADMIN_BASE) {
        const targetUrl = new URL(ROUTES_CONFIG.ADMIN_INSTITUTE, request.url)
        return NextResponse.redirect(targetUrl)
    }

    return NextResponse.next()

    // const session = await auth() as Session | undefined
    // const tokenPayload = getAccessTokenPayload(session?.user?.access_token)
    //
    // if (session?.user?.access_token && (isTokenAvailable(session?.user?.access_token) || isTokenAvailable(session?.user?.refresh_token)) && !session.user.error && tokenPayload) {
    //
    // }
    //
    // const searchParams = new URLSearchParams()
    //
    // const targetUrl = new URL(ROUTES_CONFIG.LOGIN_PAGE, request.url)
    // targetUrl.search = searchParams.toString()
    //
    // return NextResponse.redirect(targetUrl)
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|login|registration).*)"],
}