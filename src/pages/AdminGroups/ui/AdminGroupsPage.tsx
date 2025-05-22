'use client'

import {Table} from "@/shared/ui";
import {PaginationComponent} from "@/shared/ui";
import {AdminListPageStyle} from "@/features/Admin";
import {useListAdminGroups} from "../hooks";

export function AdminGroupsPage() {
    const {header, body, onClickRow, data} = useListAdminGroups()

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