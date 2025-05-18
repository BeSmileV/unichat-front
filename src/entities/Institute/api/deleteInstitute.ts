import {sendRequest} from "@/shared/api";

export async function deleteInstitute(id: number): Promise<boolean> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/university/institutes/${id}`
    const response = await sendRequest({url, type: 'DELETE'});
    return !!response?.ok
}