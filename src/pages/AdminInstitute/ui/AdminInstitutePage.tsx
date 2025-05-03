'use client'

import {useRouter} from "next/navigation";
import {Table, TableBodyType, TableHeaderType} from "@/shared/ui";
import {PaginationComponent} from "@/shared/ui/PaginationBar";
import {AdminListPageStyle} from "@/features/Admin";
import {ROUTES_CONFIG} from "@/features/Routing";

export function AdminInstitutePage() {
    const router = useRouter()

    const header: TableHeaderType = [
        {type: 'description', label: 'id'},
        {type: 'description', label: 'Название'},
    ]

    const body: TableBodyType = [
        [{type: 'field', label: '1'}, {type: 'field', label: 'ИИТУС'}]
    ]

    const onClickRow = (idx: number) => {
        router.push(ROUTES_CONFIG.ADMIN_INSTITUTE_DETAIL_SLUG + `${idx}`)
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