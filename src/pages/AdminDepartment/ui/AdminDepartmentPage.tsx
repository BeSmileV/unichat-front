import {Table, TableHeaderType} from "@/shared/ui";
import {PaginationComponent} from "@/shared/ui/PaginationBar";
import {AdminListPageStyle} from "@/features/Admin/styles";

export function AdminDepartmentPage() {
    const header: TableHeaderType = [
        {type: 'description', label: 'id'},
        {type: 'description', label: 'Название'},
        {type: 'description', label: 'Институт'},
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