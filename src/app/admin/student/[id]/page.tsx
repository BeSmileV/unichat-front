import {AdminStudentsDetailPage} from "@/pages/AdminStudent";

export default async function Page({params}: { params: Promise<{ id: number }> }) {
    const {id} = await params
    return <AdminStudentsDetailPage id={id}/>
}