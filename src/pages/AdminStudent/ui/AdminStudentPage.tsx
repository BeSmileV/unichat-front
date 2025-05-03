'use client'

import {useRouter} from "next/navigation";
import {Table, TableBodyType, TableHeaderType} from "@/shared/ui";
import {PaginationComponent} from "@/shared/ui/PaginationBar";
import {AdminListPageStyle} from "@/features/Admin";
import {ROUTES_CONFIG} from "@/features/Routing";

export function AdminStudentPage() {
    const router = useRouter()

    const header: TableHeaderType = [
        {type: 'description', label: 'id'},
        {type: 'description', label: 'ФИО'},
        {type: 'description', label: 'email'},
        {type: 'description', label: 'Институт'},
        {type: 'description', label: 'Кафедра'},
        {type: 'description', label: 'Группа'},
        {type: 'description', label: 'Статус'},
    ]

    const body: TableBodyType = [
        [
            {type: 'field', label: '1'},
            {type: 'field', label: 'Бондаренко Сергей Владимирович'},
            {type: 'field', label: 'bondarenko@mail.ru'},
            {type: 'field', label: 'ИТУС'},
            {type: 'field', label: 'ПОВТАС'},
            {type: 'field', label: 'ПВ-212'},
            {type: 'field', label: 'Действующий', status: 'green'},
        ]
    ]

    const onClickRow = (idx: number) => {
        router.push(ROUTES_CONFIG.ADMIN_STUDENT_DETAIL_SLUG + `${idx}`)
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