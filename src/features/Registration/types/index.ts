import {FORM_BUILDER_SCHEMA, UseIsErrorFieldIsErrorType} from "indicator-ui";
import {RegistrationUniversityRequestType} from "@/entity/Registration";

export type RegistrationTypesType = 'university' | 'teacher' | 'student'
export type RegistrationFormPropsType<T> = {
    onChangeFormData?: (data: T) => void,
    onChangeIsError?: (isError: UseIsErrorFieldIsErrorType) => void,
    schema: FORM_BUILDER_SCHEMA,
}