import {sendRequest} from "@/shared/api";
import {ClassroomPostType} from "../types";

export async function patchClassroom(id: number, data: ClassroomPostType): Promise<boolean> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/api/classrooms/${id}`
    const response = await sendRequest({url, type: "PATCH", data: data})
    return !!response?.ok
}
