'use client'

import {useRef, useState} from "react";
import {Button, UseIsErrorFieldIsErrorType} from "indicator-ui";
import {RegistrationStudentRequestType} from "@/entity/Registration";
import {RegistrationForm, studentSchema} from "@/features/Registration";

export function RegistrationStudentWidget() {
    const formDataRef = useRef<RegistrationStudentRequestType | undefined>(undefined)
    const [isError, setIsError] = useState<UseIsErrorFieldIsErrorType>([])

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
                    width={'fill'}/>
        </>
    )
}