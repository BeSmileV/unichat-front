import {UseIsErrorFieldIsErrorType} from "indicator-ui";
import {RegistrationRequestType} from "@/entity/Registration";
import {LoginRequestType} from "@/entity/Login";

export type LoginFormPropsType = {
    onChangeFormData?: (data: LoginRequestType) => void,
    onChangeIsError?: (isError: UseIsErrorFieldIsErrorType) => void,
}