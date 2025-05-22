import {SelectFieldPropsType} from "indicator-ui";
import {DepartmentSelectPropsType} from "./DepartmentSelectTypes";

export type GroupSelectValueType = number
export type GroupSelectPropsType =
    SelectFieldPropsType<GroupSelectValueType, false>
    & Pick<DepartmentSelectPropsType, 'instituteValue' | 'instituteOptions'>
    & {
    departmentValue?: DepartmentSelectPropsType['value'],
    departmentOptions?: DepartmentSelectPropsType['options'],
}