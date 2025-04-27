import {UserActionsWidget, UserWidget} from "@/widgets/Admin";

export function AdminDetailPage({id}: {id: Number}) {
    return (
        <div>
            <UserWidget/>
            <UserActionsWidget/>
        </div>
    )
}