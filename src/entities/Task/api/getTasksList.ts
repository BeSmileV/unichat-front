import {sendRequest} from "@/shared/api";
import {TaskListType} from "../types";
import {ClassroomDetailType} from "@/entities/Classroom";

type PropsTyp = {
    classroomId: ClassroomDetailType['id'],
    limit: number,
    skip: number,
    filters?: string,
}

export async function getTasksList({classroomId, skip, limit, filters}: PropsTyp): Promise<TaskListType | null> {
    const query = new URLSearchParams({skip: String(skip), limit: String(limit), classroom_id: String(classroomId)})
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/api/tasks?${query.toString()}`;
    const response = await sendRequest({url})
    return response?.ok ? await response.json() : null
}
