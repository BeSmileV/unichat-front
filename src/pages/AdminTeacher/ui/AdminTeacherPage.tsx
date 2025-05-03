'use client'

import {useRouter} from "next/navigation";
import {Table, TableBodyType, TableHeaderType} from "@/shared/ui";
import {PaginationComponent} from "@/shared/ui/PaginationBar";
import {AdminListPageStyle} from "@/features/Admin";
import {ROUTES_CONFIG} from "@/features/Routing";

export function AdminTeacherPage() {
    const router = useRouter();

    const header: TableHeaderType = [
        {type: 'description', label: 'id'},
        {type: 'description', label: 'ФИО'},
        {type: 'description', label: 'email'},
        {type: 'description', label: 'Институт'},
        {type: 'description', label: 'Кафедра'},
        {type: 'description', label: 'Статус'},
    ]

    const body: TableBodyType = [
        [
            {type: 'field', label: '1'},
            {type: 'field', label: 'Притчин Иван Сергеевич'},
            {type: 'field', label: 'pritchin@mail.ru'},
            {type: 'field', label: 'ИТУС'}, {type: 'field', label: 'ПОВТАС'},
            {type: 'field', label: 'Действующий', status: "green"}
        ]
    ]

    const onClickRow = (idx: number) => {
        router.push(ROUTES_CONFIG.ADMIN_TEACHER_DETAIL_SLUG + `${idx}`)
    }

    return (
        <div className={AdminListPageStyle.AdminListPage}>
            <div className={AdminListPageStyle.table}>
                <Table header={header} body={body} onClickRow={onClickRow}/>
            </div>
            <PaginationComponent totalCount={100}/>
        </div>
    )
}