import {LoginErrorResponseType, LoginResponseType} from "./LoginTypes";

export type RefreshTokenRequestType = [refresh_token: string]
export type RefreshTokenResponseType = LoginResponseType
export type RefreshTokenErrorResponseType = LoginErrorResponseType