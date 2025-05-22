import {JWT} from "next-auth/jwt";
import {isTokenAvailable} from "@/shared/lib";
import {rotateToken} from "@/entities/Auth";
import {logToFile} from "@/shared/lib/loggers";

export async function refreshingProcess(jwt: JWT): Promise<JWT> {
    if (jwt.refresh_token && isTokenAvailable(jwt.refresh_token)) {
        logToFile(`REFRESHING TOKEN ${JSON.stringify(jwt)}`);
        const refreshResponse = await rotateToken(jwt.refresh_token)
        logToFile(`REFRESHING TOKEN ANSWER ${JSON.stringify(refreshResponse)}`);
        if (refreshResponse?.success) {
            return refreshResponse.data
        } else {
            return {...jwt, error: {type: 'refresh-error'}}
        }
    } else {
        return {...jwt, error: {type: 'refresh-exp'}}
    }
}