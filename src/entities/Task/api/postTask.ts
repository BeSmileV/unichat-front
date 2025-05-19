import {sendRequest} from "@/shared/api";
import {TaskPostType} from "../types";

export async function postTask(data: TaskPostType): Promise<boolean> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/api/tasks`
    const response = await sendRequest({url, type: "POST", data: data})
    return !!response?.ok
}
