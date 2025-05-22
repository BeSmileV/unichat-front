import {FORM_BUILDER_SCHEMA} from "indicator-ui";

export function classroomScheme(): FORM_BUILDER_SCHEMA {
    return [
        {
            type: 'input_field',
            props: {
                name: 'name',
                labelText: 'Название класса',
            }
        },
        {
            type: 'input_field',
            props: {
                type: 'textarea',
                name: 'description',
                labelText: 'Описание',
            }
        },
    ]
}