import {FORM_BUILDER_SCHEMA} from "indicator-ui";

export function inviteTeacherScheme(): FORM_BUILDER_SCHEMA {
    return [
        {
            type: 'input_field',
            props: {
                name: 'fio',
                labelText: 'ФИО',
            }
        },
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
    ]
}