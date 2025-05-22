import {RefreshTokenErrorResponseType, RefreshTokenRequestType, RefreshTokenResponseType} from "@/entities/Auth";

type FunResponseType =
    | { data: RefreshTokenResponseType, success: true }
    | { data: RefreshTokenErrorResponseType, success: false }

export async function rotateToken(...args: RefreshTokenRequestType): Promise<FunResponseType | null> {
    try {
        const [refresh_token] = args
        const url = process.env.NEXT_PUBLIC_BACKEND_API + `/auth/refresh?refresh_token=${refresh_token}`
        const response = await fetch(url, {method: 'POST'})
        return {success: response.ok, data: await response.json()}
    } catch (e) {
        return null
    }
}