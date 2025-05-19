import {sendRequest} from "@/shared/api";
import {TaskDetailType} from "../types";

export async function getTaskDetail(id: number): Promise<TaskDetailType | null> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/api/tasks/${id}`
    const response = await sendRequest({url})
    return response?.ok ? await response.json() : null
}
