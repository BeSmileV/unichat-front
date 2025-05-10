'use client'

import {useRef, useState} from "react";
import {Button, UseIsErrorFieldIsErrorType} from "indicator-ui";
import {registerStudent, RegistrationStudentRequestType} from "@/entities/Registration";
import {RegistrationForm, studentSchema} from "@/features/Registration";

export function RegistrationStudentWidget() {
    const formDataRef = useRef<RegistrationStudentRequestType | undefined>(undefined)
    const [isError, setIsError] = useState<UseIsErrorFieldIsErrorType>([])

    const onSubmit = async () => {
        const formData = formDataRef.current
        if (formData) {
            const response = await registerStudent(formData)
            console.log(response)
        }
    }

    return (
        <>
            <RegistrationForm<RegistrationStudentRequestType>
                schema={studentSchema({password: formDataRef.current?.password})}
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