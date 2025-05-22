import {FORM_BUILDER_SCHEMA} from "indicator-ui";
import {GroupSelectField, GroupSelectPropsType} from "@/features/Admin";

type PropsType = {
    instituteOptions?: GroupSelectPropsType['instituteOptions'],
    departmentOptions?: GroupSelectPropsType['departmentOptions'],
    instituteValue?: GroupSelectPropsType['instituteValue'],
    departmentValue?: GroupSelectPropsType['departmentValue'],
}

export function inviteStudentsScheme({
                                         instituteOptions,
                                         departmentOptions,
                                         departmentValue,
                                         instituteValue
                                     }: PropsType): FORM_BUILDER_SCHEMA {
    return [
        {
            type: 'input_field',
            props: {
                name: 'email',
                labelText: 'Email',
            }
        },
        {
            type: 'input_field',
            props: {
                name: 'group_id',
                ownerInputComponent: <GroupSelectField instituteValue={instituteValue}
                                                       instituteOptions={instituteOptions}
                                                       departmentOptions={departmentOptions}
                                                       departmentValue={departmentValue}/>,
            }
        },
    ]
}