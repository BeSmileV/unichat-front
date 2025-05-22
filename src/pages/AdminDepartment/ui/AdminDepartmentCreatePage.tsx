'use client'

import {Button, FormBuilder} from "indicator-ui";
import {DepartmentPostType} from "@/entities/Department";
import {AdminDetailPageStyle} from "@/features/Admin";
import {departmentSchema} from "@/features/AdminDepartment";
import {useCreateAdminDepartment} from "../hooks";

export function AdminDepartmentCreatePage() {
    const {onChangeFormData, onSend} = useCreateAdminDepartment()

    return (
        <div className={AdminDetailPageStyle.AdminDetailPage}>
            <div className={AdminDetailPageStyle.content}>
                <h1 className={AdminDetailPageStyle.header}>Создание Кафедры</h1>
                <FormBuilder<DepartmentPostType> schema={departmentSchema({})} onChange={onChangeFormData}/>
                <Button onClick={onSend} text={'Создать'} size={'large'} width={'fill'}/>
            </div>
        </div>
    )
}