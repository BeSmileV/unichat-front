'use client'

import {FormBuilder} from "indicator-ui";
import {instituteSchema} from "../schemes";

export function InstituteForm() {
    return <FormBuilder schema={instituteSchema()}/>
}