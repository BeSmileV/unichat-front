export type RegistrationUniversityRequestBodyType = {
    first_name: string,
    last_name: string,
    patronymic: string,
    email: string,
    password: string,
    password_repeat: string,
    name: string,
}
export type RegistrationTeacherRequestBodyType = {
    first_name: string,
    last_name: string,
    patronymic: string,
    email: string,
    password: string,
    password_repeat: string,
    department_id: number,
}
export type RegistrationStudentRequestBodyType = {
    first_name: string,
    last_name: string,
    patronymic: string,
    email: string,
    password: string,
    password_repeat: string,
    group_id: number,
    record_book_number: string,
    student_card: string,
}
export type RegistrationQueryType = {
    invite_id: string
}
export type RegistrationUniversityRequestType = RegistrationUniversityRequestBodyType
export type RegistrationTeacherRequestType = RegistrationQueryType & RegistrationTeacherRequestBodyType
export type RegistrationStudentRequestType = RegistrationQueryType & RegistrationStudentRequestBodyType