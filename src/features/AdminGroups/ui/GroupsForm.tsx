'use client'

import {FormBuilder} from "indicator-ui";
import {groupsSchema} from "../schemes";

export function GroupsForm() {
    return <FormBuilder schema={groupsSchema()}/>
}