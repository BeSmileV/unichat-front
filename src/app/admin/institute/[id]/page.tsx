import {AdminInstituteDetailPage} from "@/pages/AdminInstitute";

export default async function Page({params}: { params: Promise<{ id: number }> }) {
    const {id} = await params
    return <AdminInstituteDetailPage id={id}/>
}