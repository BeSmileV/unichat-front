'use client'

import {FormBuilder} from "indicator-ui";
import {LoginRequestType} from "@/entities/Auth";
import {schema} from "../schemes";
import {LoginFormPropsType} from "../types";

export function LoginForm({onChangeFormData, onChangeIsError}: LoginFormPropsType) {
    return <FormBuilder<LoginRequestType> schema={schema()}
                                          onChange={onChangeFormData}
                                          onChangeIsError={onChangeIsError}/>
}