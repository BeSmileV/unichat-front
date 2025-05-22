'use client'

import {Button} from "indicator-ui";
import {registerStudent, RegistrationStudentRequestBodyType} from "@/entities/Auth";
import {RegistrationForm, studentSchema} from "@/features/Registration";
import {RegistrationPropsType} from "../types";
import {useRegistrationStudentAndTeacher} from "../hooks";
import {RegistrationWidgetsStyle} from "../styles";

export function RegistrationStudentWidget({inviteId}: RegistrationPropsType) {
    const {
        initData,
        onSubmit,
        isError,
        setIsError,
        formDataRef
    } = useRegistrationStudentAndTeacher<typeof registerStudent>({
        inviteId,
        registrationRequest: registerStudent
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
            <h5 className={RegistrationWidgetsStyle.inviteInfoHeader}>Институт: {initData.group.department.institute.name}</h5>
            <h5 className={RegistrationWidgetsStyle.inviteInfoHeader}>Кафедра: {initData.group.department.name}</h5>
            <h5 className={RegistrationWidgetsStyle.inviteInfoHeader}>Группа: {initData.group.name}</h5>
            <RegistrationForm<RegistrationStudentRequestBodyType>
                formDataDefault={initData as unknown as RegistrationStudentRequestBodyType}
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