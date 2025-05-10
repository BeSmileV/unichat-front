export type RegistrationUniversityRequestType = {
    first_name: string,
    last_name: string,
    patronymic: string,
    email: string,
    password: string,
    password_repeat: string,
    name: string,
}

export type RegistrationTeacherRequestType = {
    first_name: string,
    last_name: string,
    patronymic: string,
    email: string,
    password: string,
    password_repeat: string,
    department_id: number,
}

export type RegistrationStudentRequestType = {
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