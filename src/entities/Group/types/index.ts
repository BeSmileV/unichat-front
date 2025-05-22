export type GroupType = {
    id: number,
    name: string,
    department: {
        id: number,
        name: string,
        institute: {
            id: number,
            name: string,
        }
    }
}

export type GroupPostType = {
    department_id: number,
    name: string,
}
export type GroupPatchType = Partial<GroupPostType>
export type GroupDetailType = GroupType
export type GroupsListType = {
    total_count: number,
    data: Array<GroupDetailType>
}
export type GroupsListFiltersType = {
    name__ilike?: string,
    institute_id?: number,
    department_id?: number,
}
