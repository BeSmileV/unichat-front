import {Table, TableHeaderType} from "@/shared/ui";
import {PaginationComponent} from "@/shared/ui/PaginationBar";
import {AdminListPageStyle} from "@/features/Admin/styles";

export function AdminTeacherPage() {
    const header: TableHeaderType = [
        {type: 'description', label: 'id'},
        {type: 'description', label: 'ФИО'},
        {type: 'description', label: 'email'},
        {type: 'description', label: 'Институт'},
        {type: 'description', label: 'Кафедра'},
        {type: 'description', label: 'Статус'},
    ]
    return (
        <div className={AdminListPageStyle.AdminListPage}>
            <div className={AdminListPageStyle.table}>
                <Table header={header}/>
            </div>
            <PaginationComponent totalCount={100}/>
        </div>
    )
}