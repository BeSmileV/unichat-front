export type RegistrationUniversityRequestType = {
    name: string,
    contact: string,
    email: string,
    password: string,
    repeat_password: string,
}

export type RegistrationTeacherRequestType = {
    fio: string,
    institute: string,
    department: string,
    email: string,
    password: string,
    repeat_password: string,
}

export type RegistrationStudentRequestType = {
    fio: string,
    group: string,
    record_number: string,
    student_number: string,
    email: string,
    password: string,
    repeat_password: string,
}