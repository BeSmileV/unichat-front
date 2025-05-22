'use client'

import {Button, FormBuilder} from "indicator-ui";
import {AdminDetailPageStyle} from "@/features/Admin";
import {groupsSchema} from "@/features/AdminGroups";
import {useCreateAdminGroups} from "../hooks";

export function AdminGroupCreatePage() {
    const {onChangeFormData, onSend} = useCreateAdminGroups()

    return (
        <div className={AdminDetailPageStyle.AdminDetailPage}>
            <div className={AdminDetailPageStyle.content}>
                <h1 className={AdminDetailPageStyle.header}>Создание Группы</h1>
                <FormBuilder schema={groupsSchema({})} onChange={onChangeFormData}/>
                <Button onClick={onSend} text={'Создать'} size={'large'} width={'fill'}/>
            </div>
        </div>
    )
}