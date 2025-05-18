import {FORM_BUILDER_SCHEMA} from "indicator-ui";

export function groupsSchema (): FORM_BUILDER_SCHEMA {
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
                name: 'department',
            }
        },
    ]
}