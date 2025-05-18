export type InviteStudentRequestBodyType = {
    email: string,
    group_id: number,
    role: "STUDENT",
}
export type InviteTeacherRequestBodyType = {
    email: string,
    department_id: number,
    role: "TEACHER",
}
export type InviteRequestBodyType = {
    register_url: string,
    invite_body:
        | InviteTeacherRequestBodyType
        | InviteStudentRequestBodyType
}