'use client'

import {AdminDetailPageStyle} from "@/features/Admin";
import {Actions, Content} from "@/widgets/AdminGroups";

export function AdminGroupsDetailPage({id}: { id: number }) {
    return (
        <div className={AdminDetailPageStyle.AdminDetailPage}>
            <Content/>
            <Actions id={id}/>
        </div>
    )
}