import {SelectFieldPropsType} from "indicator-ui";
import {InstituteSelectPropsType} from "./InstituteSelectTypes";

export type DepartmentSelectValueType = number
export type DepartmentSelectPropsType = SelectFieldPropsType<DepartmentSelectValueType, false> & {
    instituteOptions?: InstituteSelectPropsType['options'],
    instituteValue?: InstituteSelectPropsType['value'],
    onChangeInstituteId?: InstituteSelectPropsType['onChange'],
}