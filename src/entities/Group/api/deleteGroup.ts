import {sendRequest} from "@/shared/api";

export async function deleteGroup(id: number): Promise<boolean> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/university/departments/${id}`
    const response = await sendRequest({url, type: 'DELETE'});
    return !!response?.ok
}