import {sendRequest} from "@/shared/api";
import {DepartmentPatchType, DepartmentDetailType} from "../types";

type PropsType = {
    data: DepartmentPatchType,
    id: number,
}

export async function patchDepartment({id, data}: PropsType): Promise<boolean> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/university/departments/${id}`
    const response = await sendRequest({url, type: 'PATCH', data});
    return !!response?.ok
}