'use client'

import {Button} from "indicator-ui";
import {registerStudent, RegistrationStudentRequestBodyType} from "@/entities/Auth";
import {RegistrationForm, studentSchema} from "@/features/Registration";
import {RegistrationPropsType} from "../types";
import {useRegistrationStudentAndTeacher} from "@/widgets/Registration/hooks";

export function RegistrationStudentWidget({inviteId}: RegistrationPropsType) {
    const {initData, onSubmit, isError, setIsError, formDataRef} = useRegistrationStudentAndTeacher<typeof registerStudent>({
        inviteId,
        registrationRequest: registerStudent
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
            <RegistrationForm<RegistrationStudentRequestBodyType>
                formDataDefault={formDataRef.current}
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