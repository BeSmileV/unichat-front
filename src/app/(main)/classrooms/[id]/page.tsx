import {ClassroomDetailPage} from "@/pages/Classrooms";

export default async function Page({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    return <ClassroomDetailPage id={Number(id)}/>
}