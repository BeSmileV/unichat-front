import {InputField} from "indicator-ui";
import {DepartmentSelectValueType, GroupSelectPropsType} from "../types";
import {useGroupSelectField} from "../hooks";
import {DepartmentSelectField} from "./DepartmentSelectField";

export function GroupSelectField(props: GroupSelectPropsType) {
    const {pagination, searching, setDepartmentId, departmentId, groupOptions, setInstituteId} = useGroupSelectField({
        departmentValue: props.departmentValue,
        initGroupOptions: props.options,
    })

    return (
        <>
            <DepartmentSelectField disabled={props.disabled}
                                   value={departmentId}
                                   onChangeInstituteId={setInstituteId}
                                   options={props.departmentOptions}
                                   instituteValue={props.instituteValue}
                                   instituteOptions={props.instituteOptions}
                                   onChange={setDepartmentId}/>
            <InputField<DepartmentSelectValueType, false> {...props}
                                                          options={groupOptions}
                                                          type={'select'}
                                                          multiple={false}
                                                          pagination={pagination}
                                                          searching={searching}
                                                          labelText={'Группа'}
                                                          disabled={props.disabled}/>
        </>
    )
}
