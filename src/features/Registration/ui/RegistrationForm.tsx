'use client'

import {FormBuilder} from "indicator-ui";
import {RegistrationFormPropsType} from "../types";

export function RegistrationForm<T extends Record<string, any>>({
                                                                    onChangeFormData,
                                                                    onChangeIsError,
                                                                    schema
                                                                }: RegistrationFormPropsType<T>) {
    return <FormBuilder<T> schema={schema}
                           onChange={onChangeFormData}
                           onChangeIsError={onChangeIsError}/>
}