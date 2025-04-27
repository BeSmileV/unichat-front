'use client'

import {Button, UseIsErrorFieldIsErrorType} from "indicator-ui";
import {RegistrationForm} from "@/features/Registration";
import {useRef, useState} from "react";
import {RegistrationRequestType} from "@/entity/Registration";
import {LogoSVG} from "@/shared/assets/icons";
import {RegistrationPageStyle} from "@/pages/Registration/styles";

export function RegistrationPage() {
    const formDataRef = useRef<RegistrationRequestType | undefined>(undefined)
    const [isError, setIsError] = useState<UseIsErrorFieldIsErrorType>([])

    return (
        <div className={RegistrationPageStyle.RegistrationPage}>
            <div className={RegistrationPageStyle.logo}>
                <div className={RegistrationPageStyle.icon}><LogoSVG/></div>
                <div className={RegistrationPageStyle.title}>Unichat</div>
            </div>
            <div className={RegistrationPageStyle.field}>
                <h1 className={RegistrationPageStyle.header}>Регистрация</h1>
                <RegistrationForm onChangeFormData={(data) => formDataRef.current = data} onChangeIsError={setIsError}/>
                <Button size={'large'}
                        hierarchy={'primary'}
                        text={'Зарегистрироваться'}
                        disabled={isError.length > 0}
                        width={'fill'}/>
            </div>
        </div>
    )
}