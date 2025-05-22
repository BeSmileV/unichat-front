export enum UserRolesType {
    STUDENT = "STUDENT",
    TEACHER = "TEACHER",
    UNIVERSITY_ADMIN = "UNIVERSITY_ADMIN"
}

export type AdminType = {
    lastname: string,
    firstname: string,
    patronymic: string,
    role: UserRolesType.UNIVERSITY_ADMIN,
    university_name: string
}

export type TeacherType = {
    lastname: string,
    firstname: string,
    patronymic: string,
    role: UserRolesType.TEACHER,
    university_name: string,
    institute_name: string,
    department_name: string,
}

export type StudentType = {
    lastname: string,
    firstname: string,
    patronymic: string,
    role: UserRolesType.STUDENT,
    university_name: string,
    department_name: string,
    institute_name: string,
    group_name: string,
}

export type UserType = AdminType | TeacherType | StudentType