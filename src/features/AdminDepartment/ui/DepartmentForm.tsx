'use client'

import {FormBuilder} from "indicator-ui";
import {departmentSchema} from "../schemes";

export function DepartmentForm() {
    return <FormBuilder schema={departmentSchema()}/>
}