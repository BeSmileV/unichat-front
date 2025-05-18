import {sendRequest} from "@/shared/api";
import {CreateInstituteType} from "../types";

export async function postInstitute(data: CreateInstituteType): Promise<boolean> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + '/university/institutes'
    const response = await sendRequest({url, type: 'POST', data});
    return !!response?.ok
}