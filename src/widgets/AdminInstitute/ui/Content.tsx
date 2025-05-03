'use client'

import {Button} from "indicator-ui";
import {AdminDetailPageStyle} from '@/features/Admin'
import {InstituteForm} from "@/features/AdminInstitute";

export function Content() {
    return (
        <div className={AdminDetailPageStyle.content}>
            <h3 className={AdminDetailPageStyle.header}>Данные института</h3>
            <InstituteForm/>
            <Button size={'large'}
                    hierarchy={'primary'}
                    text={'Сохранить'}
                    width={'fill'}/>
        </div>
    )
}