export type ClassroomType = {
    id: number,
    name: string,
    description: string,
    group_id: number,
}

export type ClassroomPostType = Omit<ClassroomType, 'id'>
export type ClassroomPatchType = Partial<Omit<ClassroomPostType, 'group_id'>>
export type ClassroomDetailType = Omit<ClassroomType, 'group_id'> & {
    group: {
        id: number,
        name: string,
    },
    department: {
        id: number,
        name: string,
    },
    institute: {
        id: number,
        name: string,
    },
}
export type ClassroomListType = {
    total_count: number,
    data: Array<ClassroomDetailType>
}