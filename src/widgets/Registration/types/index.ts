import {
    registerStudent,
    registerTeacher,
    RegistrationQueryType,
    RegistrationStudentRequestType,
    RegistrationTeacherRequestType
} from "@/entities/Auth";

export type RegistrationPropsType = {
    inviteId?: RegistrationQueryType["invite_id"] | null;
}

export type UseRegistrationPropsType<T extends typeof registerStudent | typeof registerTeacher> = {
    inviteId?: RegistrationQueryType["invite_id"] | null;
    registrationRequest: T
}