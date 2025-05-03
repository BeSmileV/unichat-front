'use client'

import {Button} from "indicator-ui";
import {AdminDetailPageStyle} from '@/features/Admin'
import {StudentForm} from "@/features/AdminStudents";

export function Content() {
    return (
        <div className={AdminDetailPageStyle.content}>
            <h3 className={AdminDetailPageStyle.header}>Данные студента</h3>
            <StudentForm/>
            <Button size={'large'}
                    hierarchy={'primary'}
                    text={'Сохранить'}
                    width={'fill'}/>
        </div>
    )
}