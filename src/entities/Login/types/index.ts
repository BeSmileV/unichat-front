export type LoginRequestType = {
    username: string,
    password: string,
}
export type LoginResponseType = {
    access_token: string,
    refresh_token: string,
    token_type: string,
}
export type LoginErrorResponseType = {
    detail: Array<{
        loc: Array<string>,
        msg: string,
        type: string,
    }>
}
export type RefreshTokenRequestType = {
    refresh_token: string,
}
export type RefreshTokenResponseType = LoginResponseType
export type RefreshTokenErrorResponseType = LoginErrorResponseType
export type JwtPayloadType = {
    user_id: number,
    exp: number,
}