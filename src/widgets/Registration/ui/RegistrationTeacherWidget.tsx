'use client'

import {Button} from "indicator-ui";
import {registerTeacher, RegistrationTeacherRequestBodyType} from "@/entities/Auth";
import {RegistrationForm, teacherSchema} from "@/features/Registration";
import {useRegistrationStudentAndTeacher} from "@/widgets/Registration/hooks";
import {RegistrationPropsType} from "../types";
import {RegistrationWidgetsStyle} from "../styles";

export function RegistrationTeacherWidget({inviteId}: RegistrationPropsType) {
    const {initData, onSubmit, isError, setIsError, formDataRef} = useRegistrationStudentAndTeacher<typeof registerTeacher>({
        inviteId,
        registrationRequest: registerTeacher
    })

    if (initData === undefined) {
        return 'Loading'
    }

    if (initData === null) {
        // Неверное приглашение или оно истекло
        return 'Error'
    }

    return (
        <>
            <h5 className={RegistrationWidgetsStyle.inviteInfoHeader}>Институт: {initData.department.institute.name}</h5>
            <h5 className={RegistrationWidgetsStyle.inviteInfoHeader}>Кафедра: {initData.department.name}</h5>
            <RegistrationForm<RegistrationTeacherRequestBodyType>
                schema={teacherSchema({password: formDataRef.current?.password})}
                formDataDefault={initData as unknown as RegistrationTeacherRequestBodyType}
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