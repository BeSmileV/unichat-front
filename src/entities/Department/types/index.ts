export type DepartmentType = {
    id: number,
    name: string,
    institute: {
        id: number,
        name: string,
    }
}

export type DepartmentPostType = {
    institute_id: number,
    name: string,
}
export type DepartmentPatchType = Partial<DepartmentPostType>
export type DepartmentDetailType = DepartmentType
export type DepartmentsListFiltersType = {
    name__ilike?: string,
    institute_id?: number,
}
export type DepartmentsListType = {
    total_count: number,
    data: Array<DepartmentDetailType>
}
