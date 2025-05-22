import {sendRequest} from "@/shared/api";
import {ClassroomListType} from "../types";

type PropsTyp = {
    skip: number,
    limit: number,
    filters?: string,
}

export async function getClassroomsList({skip, limit, filters}: PropsTyp): Promise<ClassroomListType | null> {
    const query = new URLSearchParams({skip: String(skip), limit: String(limit)})
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/api/classrooms?${query.toString()}`
    const response = await sendRequest({url})
    return response?.ok ? await response.json() : null
}
