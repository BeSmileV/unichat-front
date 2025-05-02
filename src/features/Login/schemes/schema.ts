import {FORM_BUILDER_SCHEMA} from "indicator-ui";

export function schema(): FORM_BUILDER_SCHEMA {
    return [
        {
            type: 'input_field',
            props: {
                name: 'username',
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
    ]
}