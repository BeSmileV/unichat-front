'use client'

import {useRef, useState} from "react";
import {Button, UseIsErrorFieldIsErrorType} from "indicator-ui";
import {LogoSVG} from "@/shared/assets/icons";
import {LoginForm} from "@/features/Login";
import {LoginRequestType} from "@/entity/Login";
import {LoginPageStyle} from "../styles";

export function LoginPage() {
    const formDataRef = useRef<LoginRequestType | undefined>(undefined)
    const [isError, setIsError] = useState<UseIsErrorFieldIsErrorType>([])

    return (
        <div className={LoginPageStyle.LoginPage}>
            <div className={LoginPageStyle.logo}>
                <div className={LoginPageStyle.icon}><LogoSVG/></div>
                <div className={LoginPageStyle.title}>Unichat</div>
            </div>
            <div className={LoginPageStyle.field}>
                <h1 className={LoginPageStyle.header}>Вход</h1>
                <LoginForm onChangeFormData={(data) => formDataRef.current = data} onChangeIsError={setIsError}/>
                <Button size={'large'}
                        hierarchy={'primary'}
                        text={'Войти'}
                        disabled={isError.length > 0}
                        width={'fill'}/>
            </div>
        </div>
    )
}