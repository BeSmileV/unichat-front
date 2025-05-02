import {JWT} from "next-auth/jwt";
import {isTokenAvailable} from "@/shared/lib";
import {refreshToken} from "@/entity/Login";

export async function refreshingProcess(jwt: JWT): Promise<JWT> {
    if (jwt.refresh_token && isTokenAvailable(jwt.refresh_token)) {
        const refreshResponse = await refreshToken({refresh_token:jwt.refresh_token})
        if (refreshResponse?.success) {
            return refreshResponse.data
        } else {
            return {...jwt, error: {type: 'refresh-error'}}
        }
    } else {
        return {...jwt, error: {type: 'refresh-exp'}}
    }
}