import {sendRequest} from "@/shared/api";
import {PatchInstituteType} from "../types";

type PropsType = {
    data: PatchInstituteType,
    id: number,
}

export async function patchInstitute({id, data}: PropsType): Promise<boolean> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/university/institutes/${id}`
    const response = await sendRequest({url, type: 'PATCH', data});
    return !!response?.ok
}