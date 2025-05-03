'use client'

import {Button} from "indicator-ui";
import {AdminDetailPageStyle} from '@/features/Admin'
import {DepartmentForm} from "@/features/AdminDepartment";

export function Content() {
    return (
        <div className={AdminDetailPageStyle.content}>
            <h3 className={AdminDetailPageStyle.header}>Данные кафедры</h3>
            <DepartmentForm/>
            <Button size={'large'}
                    hierarchy={'primary'}
                    text={'Сохранить'}
                    width={'fill'}/>
        </div>
    )
}