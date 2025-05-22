import {sendRequest} from "@/shared/api";
import {InviteInfoRequestQueryType, InviteInfoResponseType} from "../types";

export async function getInviteInfo(data: InviteInfoRequestQueryType): Promise<InviteInfoResponseType> {
    try {
        const url = process.env.NEXT_PUBLIC_BACKEND_API + `/auth/invite_info/${data.invite_id}`
        const response = await sendRequest({url, type: 'GET', dropJWT: true});
        return response?.ok ? response.json() : null
    } catch (e) {
        console.warn('inviteInfo()', e);
        return null;
    }
}