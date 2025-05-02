'use client'

import {useSearchParamsListener} from "@/shared/hooks";
import {LogoSVG} from "@/shared/assets";
import {REGISTRATION_TYPE_PARAM_NAME} from "@/features/Registration";
import {RegistrationTypesType} from "@/features/Registration/types";
import {
    RegistrationStudentWidget,
    RegistrationTeacherWidget,
    RegistrationUniversityWidget
} from "@/widgets/Registration";
import {RegistrationPageStyle} from "../styles";

export function RegistrationPage() {
    const {getSearchParams} = useSearchParamsListener()

    const getForm = () => {
        const type = getSearchParams(REGISTRATION_TYPE_PARAM_NAME) as RegistrationTypesType
        switch (type) {
            case "teacher":
                return <RegistrationTeacherWidget/>
            case "student":
                return <RegistrationStudentWidget/>
            case "university":
            default:
                return <RegistrationUniversityWidget/>
        }
    }

    return (
        <div className={RegistrationPageStyle.RegistrationPage}>
            <div className={RegistrationPageStyle.logo}>
                <div className={RegistrationPageStyle.icon}><LogoSVG/></div>
                <div className={RegistrationPageStyle.title}>Unichat</div>
            </div>
            <div className={RegistrationPageStyle.field}>
                <h1 className={RegistrationPageStyle.header}>Регистрация</h1>
                {getForm()}
            </div>
        </div>
    )
}