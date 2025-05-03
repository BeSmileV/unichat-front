'use client'

import {FormBuilder} from "indicator-ui";
import {inviteTeacherScheme} from "../schemes";

export function InviteTeacherForm() {
    return <FormBuilder schema={inviteTeacherScheme()}/>
}