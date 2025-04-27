import {FORM_BUILDER_SCHEMA} from "indicator-ui";

export function userSchema(): FORM_BUILDER_SCHEMA {
    return [
        {
            type: 'input_field',
            props: {
                type: 'text',
                name: 'fio',
                required: true,
                labelText: 'ФИО',
            }
        },
        {
            type: 'input_field',
            props: {
                type: 'email',
                name: 'email',
                required: true,
                labelText: 'Email',
            }
        },
        {
            type: 'input_field',
            props: {
                type: 'text',
                name: 'group',
                required: true,
                labelText: 'Группа',
            }
        },
        {
            type: 'input_field',
            props: {
                type: 'text',
                name: 'institute',
                required: true,
                labelText: 'Институт',
            }
        },
        {
            type: 'input_field',
            props: {
                type: 'text',
                name: 'credit_card_number',
                required: true,
                labelText: 'Номер зачетки',
            }
        },
    ]
}