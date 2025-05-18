'use client'

import {Button, FormBuilder} from "indicator-ui";
import {AdminDetailPageStyle} from "@/features/Admin";
import {instituteSchema} from "@/features/AdminInstitute";
import {CreateInstituteType} from "@/entities/Institute";
import {useCreateAdminInstitute} from "../hooks";

export function AdminInstituteCreatePage() {
    const {onChangeFormData, onSend} = useCreateAdminInstitute()

    return (
        <div className={AdminDetailPageStyle.AdminDetailPage}>
            <div className={AdminDetailPageStyle.content}>
                <h1 className={AdminDetailPageStyle.header}>Создание Института</h1>
                <FormBuilder<CreateInstituteType> schema={instituteSchema()} onChange={onChangeFormData}/>
            </div>
            <div className={AdminDetailPageStyle.action}>
                <Button onClick={onSend} text={'Создать'} size={'large'} width={'fill'}/>
            </div>
        </div>
    )
}