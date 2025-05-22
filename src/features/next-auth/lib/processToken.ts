import {JWT} from "next-auth/jwt";
import {isTokenAvailable} from "@/shared/lib";
import {unstable_update} from "@/features/next-auth";
import {logToFile} from "@/shared/lib/loggers";

export async function processToken(jwt: JWT): Promise<JWT> {
    logToFile(`processToken jwt: ${JSON.stringify(jwt)}`)
    if (jwt.access_token) {
        if (isTokenAvailable(jwt.access_token)) {
            logToFile(`processToken token available`)
            return {...jwt, error: null}
        } else if (jwt) {
            const updateResponse = await unstable_update({})
            logToFile(`processToken token unstable update: ${JSON.stringify(updateResponse)}`)
            if (updateResponse) {
                return updateResponse.user
            }
        }
    }
    return {...jwt, error: {type: 'another'}}
}