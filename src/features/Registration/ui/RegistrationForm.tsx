'use client'

import {FormBuilder} from "indicator-ui";
import {
    RegistrationStudentRequestBodyType,
    RegistrationTeacherRequestBodyType,
    RegistrationUniversityRequestBodyType
} from '@/entities/Auth'
import {RegistrationFormPropsType} from "../types";

export function RegistrationForm<T extends | RegistrationStudentRequestBodyType | RegistrationTeacherRequestBodyType | RegistrationUniversityRequestBodyType>({
                                                                                                                                                                  onChangeFormData,
                                                                                                                                                                  onChangeIsError,
                                                                                                                                                                  schema,
                                                                                                                                                                  formDataDefault,
                                                                                                                                                              }: RegistrationFormPropsType<T>) {
    return <FormBuilder<T> schema={schema}
                           formDataDefault={formDataDefault}
                           onChange={onChangeFormData}
                           clearForm={true}
                           onChangeIsError={onChangeIsError}/>
}