import {useEffect, useRef, useState} from "react";
import {UseIsErrorFieldIsErrorType} from "indicator-ui";
import {signIn} from "next-auth/react";
import {
    getInviteInfo,
    InviteStudentRequestBodyType,
    InviteTeacherRequestBodyType,
    LoginRequestType,
    registerStudent,
    registerTeacher,
    RegistrationQueryType,
    RegistrationStudentRequestBodyType,
    RegistrationTeacherRequestBodyType
} from "@/entities/Auth";
import {UseRegistrationPropsType} from "../types";

export function useRegistrationStudentAndTeacher<T extends typeof registerTeacher | typeof registerStudent>({
                                                                                                                inviteId,
                                                                                                                registrationRequest,
                                                                                                            }: UseRegistrationPropsType<T>) {
    type FormDataType = Parameters<T>[1]
    type InviteBodyType = T extends typeof registerTeacher ? InviteTeacherRequestBodyType : InviteStudentRequestBodyType
    const formDataRef = useRef<Omit<FormDataType, 'invite_id'> | undefined>(undefined)
    const [isError, setIsError] = useState<UseIsErrorFieldIsErrorType>([])
    const [initData, setInitData] = useState<InviteBodyType | null | undefined>(undefined)

    useEffect(() => {
        const getInitData = async () => {
            let response
            if (inviteId) {
                response = await getInviteInfo({invite_id: inviteId}) as InviteBodyType
            } else {
                response = null
            }
            setInitData(response)
        }
        getInitData()
    }, [inviteId]);

    const onSubmit = async () => {
        const formData = formDataRef.current
        if (formData && inviteId) {
            // Пришлось заткнуть ts так как ему мозгов не хватает сопоставить тип T и функции,
            // а также из-за отсутствия полноценной типизации именно function
            const response = await registrationRequest({invite_id: inviteId}, {
                ...formData,
            } as unknown as (RegistrationQueryType & RegistrationTeacherRequestBodyType & RegistrationStudentRequestBodyType))

            if (response) {
                const loginData: LoginRequestType = {username: formData.email, password: formData.password}
                const loginResponse = await signIn("credentials", {
                    ...loginData,
                    redirect: false,
                })
                if (loginResponse.error) {
                    // Обработка ошибки аутентификации
                } else {
                    // Успешная аутентификации
                }
            }
        }
    }

    return {
        initData,
        onSubmit,
        isError,
        setIsError,
        formDataRef,
    }
}