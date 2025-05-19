import {sendRequest} from "@/shared/api";
import {ClassroomDetailType} from "../types";

export async function getClassroomDetail(id: number): Promise<ClassroomDetailType | null> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/api/classrooms/${id}`
    const response = await sendRequest({url})
    return response?.ok ? await response.json() : null
}
