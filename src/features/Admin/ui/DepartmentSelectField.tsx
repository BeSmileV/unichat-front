import {InputField} from "indicator-ui";
import {DepartmentSelectPropsType, DepartmentSelectValueType} from "../types";
import {useDepartmentSelectField} from "../hooks";
import {InstituteSelectField} from "./InstituteSelectField";

export function DepartmentSelectField(props: DepartmentSelectPropsType) {
    const {pagination, searching, departmentOptions, instituteId, handleChangeInstituteId} = useDepartmentSelectField({
        instituteValue: props.instituteValue,
        initDepartmentOptions: props.options,
        onChangeInstituteId: props.onChangeInstituteId,
    })

    return (
        <>
            <InstituteSelectField disabled={props.disabled}
                                  value={instituteId}
                                  options={props.instituteOptions}
                                  onChange={handleChangeInstituteId}/>
            <InputField<DepartmentSelectValueType, false> {...props}
                                                          options={departmentOptions}
                                                          type={'select'}
                                                          multiple={false}
                                                          pagination={pagination}
                                                          searching={searching}
                                                          labelText={'Кафедра'}
                                                          disabled={props.disabled}/>
        </>
    )
}