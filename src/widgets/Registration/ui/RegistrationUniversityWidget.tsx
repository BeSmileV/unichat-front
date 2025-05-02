'use client'

import {useRef, useState} from "react";
import {Button, UseIsErrorFieldIsErrorType} from "indicator-ui";
import {RegistrationUniversityRequestType} from "@/entity/Registration";
import {RegistrationForm, universitySchema} from "@/features/Registration";

export function RegistrationUniversityWidget() {
    const formDataRef = useRef<RegistrationUniversityRequestType | undefined>(undefined)
    const [isError, setIsError] = useState<UseIsErrorFieldIsErrorType>([])

    return (
        <>
            <RegistrationForm<RegistrationUniversityRequestType>
                schema={universitySchema({password: formDataRef.current?.password})}
                onChangeFormData={(data) => formDataRef.current = data}
                onChangeIsError={setIsError}/>
            <Button size={'large'}
                    hierarchy={'primary'}
                    text={'Зарегистрировать университет'}
                    disabled={isError.length > 0}
                    width={'fill'}/>
        </>
    )
}