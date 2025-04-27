import {Metadata} from "next";
import {LoginPage} from "@/pages/Login";

export const metadata: Metadata = {
    title: 'Вход'
}

export default function Page() {
    return <LoginPage/>
}