import {sendRequest} from "@/shared/api";
import {PatchGroupType} from "../types";

type PropsType = {
    data: PatchGroupType,
    id: number,
}

export async function patchGroup({id, data}: PropsType): Promise<boolean> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/university/departments/${id}`
    const response = await sendRequest({url, type: 'PATCH', data});
    return !!response?.ok
}