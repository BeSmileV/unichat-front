import {InviteRequestBodyType} from "@/entities/Auth";

export type InviteInfoResponseNotFoundType = null
export type InviteInfoResponseType = InviteRequestBodyType['invite_body'] | InviteInfoResponseNotFoundType
export type InviteInfoRequestQueryType = {
    invite_id: string
}