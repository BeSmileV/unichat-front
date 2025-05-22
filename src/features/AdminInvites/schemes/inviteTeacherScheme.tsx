import {FORM_BUILDER_SCHEMA} from "indicator-ui";
import {DepartmentSelectField} from "@/features/Admin/ui/DepartmentSelectField";

export function inviteTeacherScheme(): FORM_BUILDER_SCHEMA {
    return [
        {
            type: 'input_field',
            props: {
                name: 'email',
                labelText: 'Email',
            }
        },
        {
            type: 'input_field',
            props: {
                type: 'select',
                name: 'department_id',
                ownerInputComponent: <DepartmentSelectField/>,
            }
        },
    ]
}