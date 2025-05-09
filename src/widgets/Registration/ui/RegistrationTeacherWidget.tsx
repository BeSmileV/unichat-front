'use client'

import {useRef, useState} from "react";
import {Button, UseIsErrorFieldIsErrorType} from "indicator-ui";
import {registerTeacher, RegistrationTeacherRequestType} from "@/entity/Registration";
import {RegistrationForm, teacherSchema} from "@/features/Registration";

export function RegistrationTeacherWidget() {
    const formDataRef = useRef<RegistrationTeacherRequestType | undefined>(undefined)
    const [isError, setIsError] = useState<UseIsErrorFieldIsErrorType>([])

    const onSubmit = async () => {
        const formData = formDataRef.current
        if (formData) {
            const response = await registerTeacher(formData)
            console.log(response)
        }
    }

    return (
        <>
            <RegistrationForm<RegistrationTeacherRequestType>
                schema={teacherSchema({password: formDataRef.current?.password})}
                onChangeFormData={(data) => formDataRef.current = data}
                onChangeIsError={setIsError}/>
            <Button size={'large'}
                    hierarchy={'primary'}
                    text={'Зарегистрироваться'}
                    disabled={isError.length > 0}
                    onClick={onSubmit}
                    width={'fill'}/>
        </>
    )
}