import {SelectDepartmentFieldPropsType} from "../types";
import {SelectField} from "indicator-ui";

export function SelectDepartmentField({value, onChange, ...props}: SelectDepartmentFieldPropsType) {

    return (
        <>
            <SelectField {...props}/>
            <SelectField {...props}/>
        </>
    )
}