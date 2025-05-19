export type TeacherGroupsType = {
    id: number,
    name: string,
}

export type GetListTeacherGroupsType = {
    total_count: number,
    data: Array<TeacherGroupsType>,
}