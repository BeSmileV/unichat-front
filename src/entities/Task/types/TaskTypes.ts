export type TaskType = {
    id: number,
    name: string,
    description: string,
    classroom_id: number,
    deadline: string,
    attachments: [
        {
            original_name: number,
            path: number,
            size: number,
        }
    ],
    max_scores: number,
}

export type TaskPostType = Omit<TaskType, 'id'>
export type TaskPatchType = Partial<Omit<TaskPostType, 'classroom_id'>>
export type TaskDetailType = Omit<TaskType, 'classroom_id'>
export type TaskListType = {
    total_count: number,
    data: Array<TaskDetailType>
}