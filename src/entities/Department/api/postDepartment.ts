import {sendRequest} from "@/shared/api";
import {DepartmentPostType} from "../types";

export async function postDepartment(data: DepartmentPostType): Promise<number | null> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + '/university/departments'
    const response = await sendRequest({url, type: 'POST', data});
    return response?.ok ? response.json() : null
}