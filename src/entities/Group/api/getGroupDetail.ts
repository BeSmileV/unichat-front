import {sendRequest} from "@/shared/api";
import {GroupDetailType} from "../types";

export async function getGroupDetail(id: number): Promise<GroupDetailType | null> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/university/groups/${id}`
    const response = await sendRequest({url, type: 'GET'});
    return response?.ok ? response.json() : null
}