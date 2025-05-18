import {sendRequest} from "@/shared/api";
import {InviteRequestBodyType} from "../types";

export async function invite(data: InviteRequestBodyType): Promise<boolean> {
    try {
        const url = process.env.NEXT_PUBLIC_BACKEND_API + '/auth/invite'
        const response = await sendRequest({url, type: 'POST', data, dropJWT: true});
        return !!response?.ok
    } catch (e) {
        console.warn('invite()', e);
        return false;
    }
}