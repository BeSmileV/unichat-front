'use client'

import {Button} from "indicator-ui";
import {registerTeacher, RegistrationTeacherRequestBodyType} from "@/entities/Auth";
import {RegistrationForm, teacherSchema} from "@/features/Registration";
import {useRegistrationStudentAndTeacher} from "@/widgets/Registration/hooks";
import {RegistrationPropsType} from "../types";

export function RegistrationTeacherWidget({inviteId}: RegistrationPropsType) {
    const {initData, onSubmit, isError, setIsError, formDataRef} = useRegistrationStudentAndTeacher<typeof registerTeacher>({
        inviteId,
        registrationRequest: registerTeacher
    })

    if (initData === undefined) {
        return 'Loading'
    }

    if (initData) {
        // Неверное приглашение или оно истекло
        return 'Error'
    }

    return (
        <>
            <RegistrationForm<RegistrationTeacherRequestBodyType>
                schema={teacherSchema({password: formDataRef.current?.password})}
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