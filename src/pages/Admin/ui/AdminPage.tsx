import {Table, TableRowType} from "@/shared/ui/Tables";

export function AdminPage() {
    const header:  TableRowType = [
        {label: 'ФИО', type: 'description'},
        {label: 'Email', type: 'description'},
        {label: 'Группа', type: 'description'},
        {label: 'Институт', type: 'description'},
        {label: 'Номер зачетки', type: 'description'},
    ]

    return (
        <div>
            <Table header={header}/>
        </div>
    )
}