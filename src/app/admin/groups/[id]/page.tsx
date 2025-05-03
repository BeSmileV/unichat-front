import {AdminGroupsDetailPage} from "@/pages/AdminGroups";

export default async function Page({params}: { params: Promise<{ id: number }> }) {
    const {id} = await params
    return <AdminGroupsDetailPage id={id}/>
}