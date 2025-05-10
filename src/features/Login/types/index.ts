import {UseIsErrorFieldIsErrorType} from "indicator-ui";
import {RegistrationUniversityRequestType} from "@/entities/Registration";
import {LoginRequestType} from "@/entities/Login";

export type LoginFormPropsType = {
    onChangeFormData?: (data: LoginRequestType) => void,
    onChangeIsError?: (isError: UseIsErrorFieldIsErrorType) => void,
}