'use client'

import {FormBuilder} from "indicator-ui";
import {studentsSchema} from "../schemes";

export function StudentForm() {
    return <FormBuilder schema={studentsSchema()}/>
}