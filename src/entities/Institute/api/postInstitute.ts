import {sendRequest} from "@/shared/api";
import {InstitutePostType} from "../types";

export async function postInstitute(data: InstitutePostType): Promise<number | null> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + '/university/institutes'
    const response = await sendRequest({url, type: 'POST', data});
    return response?.ok ? response.json() : null
}