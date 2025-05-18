import {sendRequest} from "@/shared/api";
import {CreateGroupType} from "../types";

export async function postGroup(data: CreateGroupType): Promise<boolean> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + '/university/departments'
    const response = await sendRequest({url, type: 'POST', data});
    return !!response?.ok
}