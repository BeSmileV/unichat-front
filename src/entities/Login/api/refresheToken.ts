import {RefreshTokenErrorResponseType, RefreshTokenRequestType, RefreshTokenResponseType} from "@/entities/Login";

type FunResponseType =
    | { data: RefreshTokenResponseType, success: true }
    | { data: RefreshTokenErrorResponseType, success: false }

export async function refreshToken({refresh_token}: RefreshTokenRequestType): Promise<FunResponseType | null> {
    try {
        const url = process.env.NEXT_PUBLIC_BACKEND_API + `/auth/refresh?refresh_token=${refresh_token}`
        const response = await fetch(url, {method: 'POST'})
        return {success: response.ok, data: await response.json()}
    } catch (e) {
        return null
    }
}