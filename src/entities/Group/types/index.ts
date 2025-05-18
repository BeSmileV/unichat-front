export type CreateGroupType = {
    department_id: number,
    name: string,
}
export type PatchGroupType = Partial<CreateGroupType>
export type GroupDetailType = Omit<CreateGroupType, 'department_id'> & {
    institute: {
        id: number,
        name: string,
    }
    department: {
        id: number,
        name: string,
    }
}
export type GroupsListItemType = Omit<CreateGroupType, 'department_id'> & {
    institute_name: string
    department_name: string
}
export type GroupsListType = {
    total_count: number,
    list: Array<GroupsListItemType>
}
