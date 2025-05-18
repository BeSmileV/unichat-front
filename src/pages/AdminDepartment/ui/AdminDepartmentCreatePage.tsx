'use client'

import {Button, FormBuilder} from "indicator-ui";
import {AdminDetailPageStyle} from "@/features/Admin";
import {departmentSchema} from "@/features/AdminDepartment";
import {useCreateAdminDepartment} from "../hooks";

export function AdminDepartmentCreatePage() {
    const {onChangeFormData, onSend} = useCreateAdminDepartment()

    return (
        <div className={AdminDetailPageStyle.AdminDetailPage}>
            <div className={AdminDetailPageStyle.content}>
                <h1 className={AdminDetailPageStyle.header}>Создание Кафедры</h1>
                <FormBuilder schema={departmentSchema()} onChange={onChangeFormData}/>
            </div>
            <div className={AdminDetailPageStyle.action}>
                <Button onClick={onSend} text={'Создать'} size={'large'} width={'fill'}/>
            </div>
        </div>
    )
}