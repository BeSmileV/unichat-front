import {UseIsErrorFieldIsErrorType} from "indicator-ui";
import {RegistrationRequestType} from "@/entity/Registration";

export type RegistrationFormPropsType = {
    onChangeFormData?: (data: RegistrationRequestType) => void,
    onChangeIsError?: (isError: UseIsErrorFieldIsErrorType) => void,
}