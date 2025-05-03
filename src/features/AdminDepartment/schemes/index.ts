import {FORM_BUILDER_SCHEMA} from "indicator-ui";

export function departmentSchema (): FORM_BUILDER_SCHEMA {
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
                name: 'name',
                labelText: 'Название',
            }
        },
        {
            type: 'input_field',
            props: {
                name: 'institute',
                labelText: 'Институт',
            }
        },
    ]
}