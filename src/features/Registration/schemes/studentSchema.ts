import {FORM_BUILDER_SCHEMA} from "indicator-ui";

export function studentSchema({password}:{ password?: string } = {}): FORM_BUILDER_SCHEMA {
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
                name: 'group',
                labelText: 'Группа',
                type: 'select',
                options: [{value: 'ПВ-212', label: 'ПВ-212'}],
                required: true,
            }
        },
        {
            type: 'input_field',
            props: {
                name: 'record_number',
                labelText: 'Номер зачетки',
                required: true,
            }
        },
        {
            type: 'input_field',
            props: {
                name: 'student_number',
                labelText: 'Номер студенческого',
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