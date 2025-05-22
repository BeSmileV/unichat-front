import {FORM_BUILDER_SCHEMA, UseIsErrorFieldIsErrorType} from "indicator-ui";
import {RegistrationUniversityRequestBodyType} from "@/entities/Auth";


export enum REGISTRATION_TYPE {
    UNIVERSITY = 'university',
    TEACHER = 'teacher',
    STUDENT = 'student',
}
export type RegistrationTypesType = REGISTRATION_TYPE
export type RegistrationFormPropsType<T> = {
    onChangeFormData?: (data: T) => void,
    formDataDefault?: T,
    onChangeIsError?: (isError: UseIsErrorFieldIsErrorType) => void,
    schema: FORM_BUILDER_SCHEMA,
}