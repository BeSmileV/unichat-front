import {jwtDecode} from "jwt-decode";
import {AccessTokenPayloadType} from "../types";

export function getAccessTokenPayload(accessToken: string | undefined): AccessTokenPayloadType | undefined {
    if (accessToken) {
        return jwtDecode(accessToken)
    }
    return undefined
}