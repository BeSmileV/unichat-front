'use client'

import {AdminDetailPageStyle} from "@/features/Admin";
import {Actions, Content} from "@/widgets/AdminStudents";

export function AdminStudentsDetailPage({id}: { id: number }) {
    return (
        <div className={AdminDetailPageStyle.AdminDetailPage}>
            <Content/>
            <Actions id={id}/>
        </div>
    )
}