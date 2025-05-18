import {sendRequest} from "@/shared/api";
import {InstituteDetailType} from "../types";

export async function getInstituteDetail(id: number): Promise<InstituteDetailType | null> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/university/institutes/${id}`
    const response = await sendRequest({url, type: 'GET'});
    return response?.ok ? response.json() : null
}