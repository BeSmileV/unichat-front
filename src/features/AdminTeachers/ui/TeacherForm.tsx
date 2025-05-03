'use client'

import {FormBuilder} from "indicator-ui";
import {teachersSchema} from "../schemes";

export function TeacherForm() {
    return <FormBuilder schema={teachersSchema()}/>
}