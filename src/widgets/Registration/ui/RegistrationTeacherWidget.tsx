'use client'

import {useRef, useState} from "react";
import {Button, UseIsErrorFieldIsErrorType} from "indicator-ui";
import {RegistrationTeacherRequestType} from "@/entity/Registration";
import {RegistrationForm, teacherSchema} from "@/features/Registration";

export function RegistrationTeacherWidget() {
    const formDataRef = useRef<RegistrationTeacherRequestType | undefined>(undefined)
    const [isError, setIsError] = useState<UseIsErrorFieldIsErrorType>([])

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
                    width={'fill'}/>
        </>
    )
}