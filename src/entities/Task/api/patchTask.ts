import {sendRequest} from "@/shared/api";
import {TaskPostType} from "../types";

export async function patchTask(id: number, data: TaskPostType): Promise<boolean> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/api/tasks/${id}`
    const response = await sendRequest({url, type: "PATCH", data: data})
    return !!response?.ok
}
