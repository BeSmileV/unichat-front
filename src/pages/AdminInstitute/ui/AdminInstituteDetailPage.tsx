'use client'

import {AdminDetailPageStyle} from "@/features/Admin";
import {Actions, Content} from "@/widgets/AdminInstitute";

export function AdminInstituteDetailPage({id}: { id: number }) {
    return (
        <div className={AdminDetailPageStyle.AdminDetailPage}>
            <Content/>
            <Actions id={id}/>
        </div>
    )
}