import {FORM_BUILDER_SCHEMA} from "indicator-ui";
import {InstituteSelectField, InstituteSelectPropsType} from "@/features/Admin";

export function departmentSchema({instituteOptions}: {
    instituteOptions?: InstituteSelectPropsType['options']
}): FORM_BUILDER_SCHEMA {
    return [
        {
            type: 'input_field',
            props: {
                name: 'name',
                labelText: 'Название',
            }
        },
        {
            type: 'input_field',
            props: {
                name: 'institute_id',
                labelText: 'Институт',
                ownerInputComponent: <InstituteSelectField options={instituteOptions}/>,
            }
        },
    ]
}