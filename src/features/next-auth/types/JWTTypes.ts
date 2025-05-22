import {UserRolesType} from "@/entities/User";

export type AuthJWTErrorTypes = 'refresh-exp' | 'refresh-error' | 'another'
export type AuthJWTErrorType = { type: AuthJWTErrorTypes, detail?: string } | null
export type TokenType = {
    access_token?: string,
    refresh_token?: string,
    token_type?: string,
}
export type ErrorResponseType = {
    detail: {
        msg: string,
        type: string
    }[]
}


export type AccessTokenPayloadType = {
    user_id: number,
    role: UserRolesType,
    university_id: number,
    exp: number
}
export type RefreshTokenResponseType = TokenType | ErrorResponseType
export type LoginResponseType = TokenType | ErrorResponseType