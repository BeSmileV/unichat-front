import {FORM_BUILDER_SCHEMA} from "indicator-ui";

export function instituteSchema (): FORM_BUILDER_SCHEMA {
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
    ]
}