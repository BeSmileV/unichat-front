import {UseIsErrorFieldIsErrorType} from "indicator-ui";
import {LoginRequestType} from "@/entities/Auth";

export type LoginFormPropsType = {
    onChangeFormData?: (data: LoginRequestType) => void,
    onChangeIsError?: (isError: UseIsErrorFieldIsErrorType) => void,
}