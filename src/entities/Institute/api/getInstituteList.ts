import {sendRequest} from "@/shared/api";
import {InstitutesListType} from "../types";

type PropsType = {
    skip: number,
    limit: number,
    filters?: string,
}

export async function getInstituteList({skip, limit, filters}: PropsType): Promise<InstitutesListType | null> {
    const queryParams = new URLSearchParams({skip: String(skip), limit: String(limit)});
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/university/institutes?${queryParams.toString()}`;
    const response = await sendRequest({url, type: 'GET'});
    return response?.ok ? response.json() : null
}