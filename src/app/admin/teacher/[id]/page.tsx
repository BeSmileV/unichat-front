import {AdminTeachersDetailPage} from "@/pages/AdminTeacher";

export default async function Page({params}: { params: Promise<{ id: number }> }) {
    const {id} = await params
    return <AdminTeachersDetailPage id={id}/>
}