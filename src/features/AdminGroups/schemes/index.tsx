import {FORM_BUILDER_SCHEMA} from "indicator-ui";
import {DepartmentSelectField} from "@/features/Admin/ui/DepartmentSelectField";
import {DepartmentSelectPropsType} from "@/features/Admin";

type PropsType = {
    instituteOptions?: DepartmentSelectPropsType['instituteOptions'],
    instituteValue?: DepartmentSelectPropsType['instituteValue'],
    departmentOptions?: DepartmentSelectPropsType['options'],
}

export function groupsSchema({instituteOptions, departmentOptions, instituteValue}: PropsType): FORM_BUILDER_SCHEMA {
    return [
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
                name: 'department_id',
                ownerInputComponent: <DepartmentSelectField instituteValue={instituteValue}
                                                            instituteOptions={instituteOptions}
                                                            options={departmentOptions}/>,
            }
        },
    ]
}