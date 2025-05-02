import {Metadata} from "next";
import {AdminWrapper} from "@/widgets/Admin";
import React, {Suspense} from "react";

export const metadata: Metadata = {
    title: 'Админ панель',
}

export default function Layout({children}: { children?: React.ReactNode }) {
    return <Suspense><AdminWrapper children={children}/></Suspense>
}