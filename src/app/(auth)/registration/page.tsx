import {Metadata} from "next";
import {RegistrationPage} from "@/pages/Registration";

export const metadata: Metadata = {
    title: 'Регистрация'
}

export default function Page() {
    return <RegistrationPage/>
}