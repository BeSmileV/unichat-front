import {AdminDetailPage} from "@/pages/Admin/ui/AdminDetailPage";

export default async function Page({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params
    return <AdminDetailPage id={Number(id)}/>
}