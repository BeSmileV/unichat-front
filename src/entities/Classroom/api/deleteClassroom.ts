import {sendRequest} from "@/shared/api";

export async function deleteClassroom(id: number): Promise<boolean> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/api/classrooms/${id}`
    const response = await sendRequest({url, type: "DELETE"})
    return !!response?.ok
}
