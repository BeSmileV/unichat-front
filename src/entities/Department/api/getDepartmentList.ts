import {sendRequest} from "@/shared/api";
import {DepartmentsListType} from "../types";

type PropsType = {
    skip: number,
    limit: number,
    filters?: string,
}

export async function getDepartmentList({skip, limit, filters}: PropsType): Promise<DepartmentsListType | null> {
    const queryParams = new URLSearchParams({skip: String(skip), limit: String(limit)});
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/university/departments?${queryParams.toString()}`;
    const response = await sendRequest({url, type: 'GET'});
    return response?.ok ? response.json() : null
}