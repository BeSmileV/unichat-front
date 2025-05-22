'use client'

import {Button, FormBuilder} from "indicator-ui";
import {Trash01SVG} from "@/shared/assets";
import {DepartmentPatchType} from "@/entities/Department";
import {AdminDetailPageStyle} from "@/features/Admin";
import {departmentSchema} from "@/features/AdminDepartment";
import {useDetailAdminDepartment} from "../hooks";

export function AdminDepartmentDetailPage({id}: { id: number }) {
    const {data, onChangeFormData, onUpdate, onDelete, instituteOptions} = useDetailAdminDepartment(id)

    if (data === undefined) {
        return 'Loading'
    }

    if (data === null) {
        return 'Error'
    }

    return (
        <div className={AdminDetailPageStyle.AdminDetailPage}>
            <div className={AdminDetailPageStyle.content}>
                <h3 className={AdminDetailPageStyle.header}>Данные Кафедры</h3>
                <FormBuilder<DepartmentPatchType> formDataDefault={data}
                                                  clearForm={true}
                                                  onChange={onChangeFormData}
                                                  schema={departmentSchema({instituteOptions})}/>
                <Button size={'large'}
                        hierarchy={'primary'}
                        text={'Сохранить'}
                        width={'fill'}
                        onClick={onUpdate}/>
            </div>
            <div className={AdminDetailPageStyle.action}>
                <h3 className={AdminDetailPageStyle.header}>Операции</h3>
                <Button size={'small'}
                        hierarchy={'primary'}
                        warning={true}
                        iconLeft={<Trash01SVG/>}
                        text={'Удалить'}
                        onClick={onDelete}
                        width={'fill'}/>
            </div>
        </div>
    )
}