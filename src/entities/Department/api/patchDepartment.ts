import {sendRequest} from "@/shared/api";
import {PatchDepartmentType} from "../types";

type PropsType = {
    data: PatchDepartmentType,
    id: number,
}

export async function patchDepartment({id, data}: PropsType): Promise<boolean> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/university/departments/${id}`
    const response = await sendRequest({url, type: 'PATCH', data});
    return !!response?.ok
}