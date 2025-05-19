import {sendRequest} from "@/shared/api";
import {GetListTeacherGroupsType} from "../types";

export async function getGroupsList(): Promise<GetListTeacherGroupsType | null> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + '/teachers/groups'
    const response = await sendRequest({url})
    return response?.ok ? await response.json() : null
}