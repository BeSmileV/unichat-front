import {InputField} from "indicator-ui";
import {InstituteSelectPropsType, InstituteSelectValueType} from "../types";
import {useInstituteSelectField} from "../hooks";

export function InstituteSelectField(props: InstituteSelectPropsType) {
    const {pagination, searching} = useInstituteSelectField()
    return <InputField<InstituteSelectValueType, false> type={'select'}
                                                        multiple={false}
                                                        pagination={pagination}
                                                        searching={searching}
                                                        labelText={'Институт'}
                                                        {...props}/>
}