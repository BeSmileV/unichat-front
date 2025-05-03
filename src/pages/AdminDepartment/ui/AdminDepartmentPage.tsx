'use client'

import {Table, TableBodyType, TableHeaderType} from "@/shared/ui";
import {PaginationComponent} from "@/shared/ui/PaginationBar";
import {AdminListPageStyle} from "@/features/Admin";
import {useRouter} from "next/navigation";
import {ROUTES_CONFIG} from "@/features/Routing";

export function AdminDepartmentPage() {
    const router = useRouter();

    const header: TableHeaderType = [
        {type: 'description', label: 'id'},
        {type: 'description', label: 'Название'},
        {type: 'description', label: 'Институт'},
    ]

    const body: TableBodyType = [
        [{type: 'field', label: '1'}, {type: 'field', label: 'ПОВТАС'}, {type: 'field', label: 'ИТУС'}],
    ]

    const onClickRow = (idx: number) => {
        router.push(ROUTES_CONFIG.ADMIN_DEPARTMENT_DETAIL_SLUG + `${idx}`)
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