export type InviteStudentRequestBodyType = {
    email: string,
    role: "STUDENT",
    group: {
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
}
export type InviteTeacherRequestBodyType = {
    email: string,
    role: "TEACHER",
    department: {
        id: number,
        name: string,
        institute: {
            id: number,
            name: string,
        }
    }
}

export type InviteRequestType =
    | InviteTeacherRequestBodyType
    | InviteStudentRequestBodyType

export type InviteRequestBodyType = {
    register_url: string,
    invite_body: InviteRequestType
}
export type InviteResponseType = string
