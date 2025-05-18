import {jwtDecode} from "jwt-decode";
import {JwtPayloadType} from "@/entities/Auth";
import {checkJwtLifeTime} from "./checkJwtLifeTime";

export function isTokenAvailable(token?: string, errorRateSeconds: number = 5) {
    if (token) {
        const parseToken: JwtPayloadType | null = jwtDecode(token as string)
        if (parseToken) {
            const exp = parseToken?.exp || '' as string
            return checkJwtLifeTime(Number(exp) - errorRateSeconds)
        }
    }
    return false
}