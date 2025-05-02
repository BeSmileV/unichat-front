import {FORM_BUILDER_SCHEMA} from "indicator-ui";

export function teacherSchema({password}:{ password?: string } = {}): FORM_BUILDER_SCHEMA {
    return [
        {
            type: 'input_field',
            props: {
                name: 'fio',
                labelText: 'ФИО',
                required: true,
            }
        },
        {
            type: 'input_field',
            props: {
                name: 'institute',
                labelText: 'Институт',
                type: 'select',
                options: [{value: 'ИТУС', label: 'ИТУС'}],
                required: true,
            }
        },
        {
            type: 'input_field',
            props: {
                name: 'department',
                labelText: 'Кафедра',
                type: 'select',
                options: [{value: 'ПОВТАС', label: 'ПОВТАС'}],
                required: true,
            }
        },
        {
            type: 'input_field',
            props: {
                name: 'email',
                type: 'email',
                labelText: 'Email',
                required: true,
            }
        },
        {
            type: 'input_field',
            props: {
                name: 'password',
                type: 'password',
                labelText: 'Пароль',
                required: true,
            }
        },
        {
            type: 'input_field',
            props: {
                name: 'repeat_password',
                type: 'password',
                labelText: 'Повтор пароля',
                required: true,
                onBlurValidation: {fun: (data) => password === undefined || password === data},
            }
        },
    ]
}