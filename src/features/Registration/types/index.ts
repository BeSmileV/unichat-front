import {FORM_BUILDER_SCHEMA, UseIsErrorFieldIsErrorType} from "indicator-ui";
import {RegistrationUniversityRequestBodyType} from "@/entities/Auth";

export type RegistrationTypesType = 'university' | 'teacher' | 'student'
export type RegistrationFormPropsType<T> = {
    onChangeFormData?: (data: T) => void,
    formDataDefault?: T,
    onChangeIsError?: (isError: UseIsErrorFieldIsErrorType) => void,
    schema: FORM_BUILDER_SCHEMA,
}