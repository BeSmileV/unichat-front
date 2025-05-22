import {FORM_BUILDER_SCHEMA} from "indicator-ui";

export function teacherSchema({password}: { password?: string } = {}): FORM_BUILDER_SCHEMA {
    return [
        {
            type: 'input_field',
            props: {
                name: 'last_name',
                labelText: 'Фамилия',
                required: true,
            }
        },
        {
            type: 'input_field',
            props: {
                name: 'first_name',
                labelText: 'Имя',
                required: true,
            }
        },
        {
            type: 'input_field',
            props: {
                name: 'patronymic',
                labelText: 'Отчество',
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
                disabled: true,
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
                name: 'password_repeat',
                type: 'password',
                labelText: 'Повтор пароля',
                required: true,
                onBlurValidation: {fun: (data) => password === undefined || password === data},
            }
        },
    ]
}