import {sendRequest} from "@/shared/api";
import {GroupDetailType, GroupPatchType} from "../types";

type PropsType = {
    data: GroupPatchType,
    id: number,
}

export async function patchGroup({id, data}: PropsType): Promise<boolean> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/university/groups/${id}`
    const response = await sendRequest({url, type: 'PATCH', data});
    return !!response?.ok
}