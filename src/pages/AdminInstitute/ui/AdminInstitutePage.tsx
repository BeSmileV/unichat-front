'use client'

import {Table} from "@/shared/ui";
import {PaginationComponent} from "@/shared/ui";
import {AdminListPageStyle} from "@/features/Admin";
import {useListAdminInstitute} from "../hooks";

export function AdminInstitutePage() {
    const {data, body, onClickRow, header} = useListAdminInstitute()

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