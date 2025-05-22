import {sendRequest} from "@/shared/api";
import {DepartmentsListFiltersType, DepartmentsListType} from "../types";
import {toURLSearchParams} from "@/shared/lib";

type PropsType = {
    skip: number,
    limit: number,
    filters?: DepartmentsListFiltersType | string,
}

export async function getDepartmentList({skip, limit, filters}: PropsType): Promise<DepartmentsListType | null> {
    let resFilers = {skip, limit}
    if (typeof filters !== 'string') {
        resFilers = {...resFilers, ...filters}
    }

    const queryParams = toURLSearchParams(resFilers);
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/university/departments?${queryParams.toString()}`;
    const response = await sendRequest({url, type: 'GET'});
    return response?.ok ? response.json() : null
}