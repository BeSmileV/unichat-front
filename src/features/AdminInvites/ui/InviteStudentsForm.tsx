'use client'

import {FormBuilder} from "indicator-ui";
import {inviteStudentsScheme} from "../schemes";

export function InviteStudentsForm() {
    return <FormBuilder schema={inviteStudentsScheme()}/>
}