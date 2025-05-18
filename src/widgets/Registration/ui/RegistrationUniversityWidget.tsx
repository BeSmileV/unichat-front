'use client'

import {Button} from "indicator-ui";
import {RegistrationUniversityRequestBodyType} from "@/entities/Auth";
import {RegistrationForm, universitySchema} from "@/features/Registration";
import {useRegistrationUnivercity} from "../hooks";

export function RegistrationUniversityWidget() {
    const {formDataRef, setIsError, isError, onSubmit} = useRegistrationUnivercity()

    return (
        <>
            <RegistrationForm<RegistrationUniversityRequestBodyType>
                schema={universitySchema({password: formDataRef.current?.password})}
                onChangeFormData={(data) => formDataRef.current = data}
                onChangeIsError={setIsError}/>
            <Button size={'large'}
                    hierarchy={'primary'}
                    text={'Зарегистрировать университет'}
                    disabled={isError.length > 0}
                    onClick={onSubmit}
                    width={'fill'}/>
        </>
    )
}