'use client'

import {Button, FormBuilder} from "indicator-ui";
import {Trash01SVG} from "@/shared/assets";
import {InstitutePatchType} from "@/entities/Institute";
import {AdminDetailPageStyle} from "@/features/Admin";
import {instituteSchema} from "@/features/AdminInstitute";
import {useDetailAdminInstitute} from "../hooks";

export function AdminInstituteDetailPage({id}: { id: number }) {
    const {onUpdate, onDelete, onChangeFormData, data} = useDetailAdminInstitute(id)

    if (data === undefined) {
        return 'Loading'
    }

    if (data === null) {
        return 'Error'
    }

    return (
        <div className={AdminDetailPageStyle.AdminDetailPage}>
            <div className={AdminDetailPageStyle.content}>
                <h3 className={AdminDetailPageStyle.header}>Данные института</h3>
                <FormBuilder<InstitutePatchType> formDataDefault={data}
                                                 clearForm={true}
                                                 onChange={onChangeFormData}
                                                 schema={instituteSchema()}/>
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