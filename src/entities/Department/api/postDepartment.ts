import {sendRequest} from "@/shared/api";
import {CreateDepartmentType} from "../types";

export async function postDepartment(data: CreateDepartmentType): Promise<boolean> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + '/university/departments'
    const response = await sendRequest({url, type: 'POST', data});
    return !!response?.ok
}