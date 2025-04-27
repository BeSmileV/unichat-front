'use client'

import {useState} from "react";
import {FormBuilder} from "indicator-ui";
import {RegistrationRequestType} from "@/entity/Registration";
import {schema} from "../schemes";
import {RegistrationFormPropsType} from "../types";

export function RegistrationForm({onChangeFormData, onChangeIsError}: RegistrationFormPropsType) {
    const [formData, setFormData] = useState<RegistrationRequestType>({} as RegistrationRequestType)

    const onChange = (data: RegistrationRequestType) => {
        onChangeFormData?.(data)
        setFormData?.(data)
    }

    return <FormBuilder<RegistrationRequestType> schema={schema({password: formData.password})}
                                                 onChange={onChange}
                                                 onChangeIsError={onChangeIsError}/>
}