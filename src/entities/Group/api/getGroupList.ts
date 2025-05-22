import {sendRequest} from "@/shared/api";
import {GroupsListFiltersType, GroupsListType} from "../types";
import {toURLSearchParams} from "@/shared/lib";

type PropsType = {
    skip: number,
    limit: number,
    filters?: string | GroupsListFiltersType,
}

export async function getGroupList({skip, limit, filters}: PropsType): Promise<GroupsListType | null> {
    let resFilers = {skip, limit}
    if (typeof filters !== 'string') {
        resFilers = {...resFilers, ...filters}
    }

    const queryParams = toURLSearchParams(resFilers);
    const url = process.env.NEXT_PUBLIC_BACKEND_API + `/university/groups?${queryParams.toString()}`;
    const response = await sendRequest({url, type: 'GET'});
    return response?.ok ? response.json() : null
}