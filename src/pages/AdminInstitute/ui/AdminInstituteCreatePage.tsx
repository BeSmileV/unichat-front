'use client'

import {Button, FormBuilder} from "indicator-ui";
import {AdminDetailPageStyle} from "@/features/Admin";
import {instituteSchema} from "@/features/AdminInstitute";
import {InstitutePostType} from "@/entities/Institute";
import {useCreateAdminInstitute} from "../hooks";

export function AdminInstituteCreatePage() {
    const {onChangeFormData, onSend} = useCreateAdminInstitute()

    return (
        <div className={AdminDetailPageStyle.AdminDetailPage}>
            <div className={AdminDetailPageStyle.content}>
                <h1 className={AdminDetailPageStyle.header}>Создание Института</h1>
                <FormBuilder<InstitutePostType> schema={instituteSchema()} onChange={onChangeFormData}/>
                <Button onClick={onSend} text={'Создать'} size={'large'} width={'fill'}/>
            </div>
        </div>
    )
}