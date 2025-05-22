import {sendRequest} from "@/shared/api";
import {ClassroomPostType} from "../types";

export async function postClassroom(data: ClassroomPostType): Promise<null | number> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/api/classrooms`
    const response = await sendRequest({url, type: "POST", data: data})
    return response?.ok ? response.json() : null
}
