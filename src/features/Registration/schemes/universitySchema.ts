import {FORM_BUILDER_SCHEMA} from "indicator-ui";

export function universitySchema({password}:{ password?: string } = {}): FORM_BUILDER_SCHEMA {
    return [
        {
            type: 'input_field',
            props: {
                name: 'name',
                labelText: 'Название университета',
                required: true,
            }
        },
        {
            type: 'input_field',
            props: {
                name: 'contact',
                labelText: 'Контактное лицо (ФИО)',
                required: true,
            }
        },
        {
            type: 'input_field',
            props: {
                name: 'email',
                type: 'email',
                labelText: 'Email администрации университета',
                hintText: 'Используется для входа в Администраторскую панель',
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