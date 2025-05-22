'use client'

import {Table} from "@/shared/ui";
import {PaginationComponent} from "@/shared/ui";
import {AdminListPageStyle} from "@/features/Admin";
import {useListAdminDepartment} from "../hooks";

export function AdminDepartmentPage() {
    const {data, body, onClickRow, header} = useListAdminDepartment()

    if (data === undefined) {
        return 'Loading'
    }

    if (data === null) {
        return 'Error'
    }

    return (
        <div className={AdminListPageStyle.AdminListPage}>
            <div className={AdminListPageStyle.table}>
                <Table header={header} body={body} onClickRow={onClickRow}/>
            </div>
            <PaginationComponent totalCount={data.total_count}/>
        </div>
    )
}