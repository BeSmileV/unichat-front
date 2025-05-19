import {sendRequest} from "@/shared/api";
import {TaskListType} from "../types";

type PropsTyp = {
    filters?: string,
} | undefined

export async function getTasksList(props: PropsTyp = {}): Promise<TaskListType | null> {
    const url = process.env.NEXT_PUBLIC_BACKEND_API + '/api/classrooms'
    const response = await sendRequest({url})
    return response?.ok ? await response.json() : null
}
