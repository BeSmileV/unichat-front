'use client'

import {useSearchParamsListener} from "@/shared/hooks";
import {LogoSVG} from "@/shared/assets";
import {RegistrationQueryType} from "@/entities/Auth";
import {
    REGISTRATION_INVITE_ID_PARAM_NAME,
    REGISTRATION_TYPE_PARAM_NAME,
    RegistrationTypesType
} from "@/features/Registration";
import {
    RegistrationStudentWidget,
    RegistrationTeacherWidget,
    RegistrationUniversityWidget
} from "@/widgets/Registration";
import {RegistrationPageStyle} from "../styles";

export function RegistrationPage() {
    const {getSearchParams} = useSearchParamsListener()

    const getInviteId = () => {
        const value = getSearchParams(REGISTRATION_INVITE_ID_PARAM_NAME)
        return value ? String(value) : null
    }

    const getForm = () => {
        const type = getSearchParams(REGISTRATION_TYPE_PARAM_NAME) as RegistrationTypesType
        const inviteId = getInviteId()
        switch (type) {
            case "teacher":
                return <RegistrationTeacherWidget inviteId={inviteId}/>
            case "student":
                return <RegistrationStudentWidget inviteId={inviteId}/>
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