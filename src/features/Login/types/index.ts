import {UseIsErrorFieldIsErrorType} from "indicator-ui";
import {RegistrationUniversityRequestType} from "@/entity/Registration";
import {LoginRequestType} from "@/entity/Login";

export type LoginFormPropsType = {
    onChangeFormData?: (data: LoginRequestType) => void,
    onChangeIsError?: (isError: UseIsErrorFieldIsErrorType) => void,
}