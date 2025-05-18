export type CreateDepartmentType = {
    institute_id: number,
    name: string,
}
export type PatchDepartmentType = Partial<CreateDepartmentType>
export type DepartmentDetailType = Omit<CreateDepartmentType, 'institute_id'> & {
    institute: {
        id: number,
        name: string,
        university_id: number
    }
}
export type DepartmentsListItemType = Omit<CreateDepartmentType, 'institute_id'> & {
    institute_name: string
}
export type DepartmentsListType = {
    total_count: number,
    list: Array<DepartmentsListItemType>
}
