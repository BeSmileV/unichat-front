'use client'

import {Button, FormBuilder} from "indicator-ui";
import {Trash01SVG} from "@/shared/assets";
import {GroupPatchType} from "@/entities/Group";
import {AdminDetailPageStyle} from "@/features/Admin";
import {groupsSchema} from "@/features/AdminGroups";
import {useDetailAdminGroup} from "../hooks";

export function AdminGroupsDetailPage({id}: { id: number }) {
    const {
        data,
        onChangeFormData,
        onUpdate,
        onDelete,
        instituteOptions,
        departmentOptions,
        instituteValue
    } = useDetailAdminGroup(id)

    if (data === undefined) {
        return 'Loading'
    }

    if (data === null) {
        return 'Error'
    }

    return (
        <div className={AdminDetailPageStyle.AdminDetailPage}>
            <div className={AdminDetailPageStyle.content}>
                <h3 className={AdminDetailPageStyle.header}>Данные группы</h3>
                <FormBuilder<GroupPatchType> formDataDefault={data}
                                             onChange={onChangeFormData}
                                             schema={groupsSchema({
                                                 instituteOptions,
                                                 departmentOptions,
                                                 instituteValue
                                             })}/>
                <Button size={'large'}
                        hierarchy={'primary'}
                        text={'Сохранить'}
                        onClick={onUpdate}
                        width={'fill'}/>
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