import {sendRequest} from "@/shared/api";
import {GroupPostType} from "../types";

export async function postGroup(data: GroupPostType): Promise<number | null> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + '/university/groups'
    const response = await sendRequest({url, type: 'POST', data});
    return response?.ok ? response.json() : null
}