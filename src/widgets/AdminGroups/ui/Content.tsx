'use client'

import {Button} from "indicator-ui";
import {AdminDetailPageStyle} from '@/features/Admin'
import {GroupsForm} from "@/features/AdminGroups";

export function Content() {
    return (
        <div className={AdminDetailPageStyle.content}>
            <h3 className={AdminDetailPageStyle.header}>Данные группы</h3>
            <GroupsForm/>
            <Button size={'large'}
                    hierarchy={'primary'}
                    text={'Сохранить'}
                    width={'fill'}/>
        </div>
    )
}