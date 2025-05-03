import {FORM_BUILDER_SCHEMA} from "indicator-ui";

export function inviteStudentsScheme(): FORM_BUILDER_SCHEMA {
    return [
        {
            type: 'input_field',
            props: {
                type: 'select',
                name: 'institute',
                labelText: 'Институт',
            }
        },
        {
            type: 'input_field',
            props: {
                type: 'select',
                name: 'department',
                labelText: 'Кафедра',
            }
        },
        {
            type: 'input_field',
            props: {
                type: 'select',
                name: 'group',
                labelText: 'Группа',
            }
        },
    ]
}