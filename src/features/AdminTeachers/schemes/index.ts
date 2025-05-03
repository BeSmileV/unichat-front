import {FORM_BUILDER_SCHEMA} from "indicator-ui";

export function teachersSchema (): FORM_BUILDER_SCHEMA {
    return [
        {
            type: 'input_field',
            props: {
                name: 'id',
                labelText: 'id',
                disabled: true,
            }
        },
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
                type: 'email',
                name: 'email',
                labelText: 'email',
            }
        },
        {
            type: 'input_field',
            props: {
                name: 'institute',
                labelText: 'Институт',
            }
        },
        {
            type: 'input_field',
            props: {
                name: 'department',
                labelText: 'Кафедра',
            }
        },
    ]
}