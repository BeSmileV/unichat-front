import {useRef, useState} from "react";
import {UseIsErrorFieldIsErrorType} from "indicator-ui";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";
import {LoginRequestType, registerUniversity, RegistrationUniversityRequestType} from "@/entities/Auth";
import {ROUTES_CONFIG} from "@/features/Routing";

export function useRegistrationUnivercity() {
    const formDataRef = useRef<RegistrationUniversityRequestType | undefined>(undefined)
    const [isError, setIsError] = useState<UseIsErrorFieldIsErrorType>([])

    const router = useRouter()

    const onSubmit = async () => {
        const formData = formDataRef.current
        if (formData) {
            const response = await registerUniversity(formData)

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
                    router.push(ROUTES_CONFIG.ADMIN_BASE)
                }
            }
        }
    }

    return {
        onSubmit,
        isError,
        setIsError,
        formDataRef,
    }
}