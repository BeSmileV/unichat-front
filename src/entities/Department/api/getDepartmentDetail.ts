import {sendRequest} from "@/shared/api";
import {DepartmentDetailType} from "../types";

export async function getDepartmentDetail(id: number): Promise<DepartmentDetailType | null> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/university/departments/${id}`
    const response = await sendRequest({url, type: 'GET'});
    return response?.ok ? response.json() : null
}