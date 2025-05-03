'use client'

import {Button} from "indicator-ui";
import {AdminDetailPageStyle} from '@/features/Admin'
import {TeacherForm} from "@/features/AdminTeachers";

export function Content() {
    return (
        <div className={AdminDetailPageStyle.content}>
            <h3 className={AdminDetailPageStyle.header}>Данные преподавателя</h3>
            <TeacherForm/>
            <Button size={'large'}
                    hierarchy={'primary'}
                    text={'Сохранить'}
                    width={'fill'}/>
        </div>
    )
}