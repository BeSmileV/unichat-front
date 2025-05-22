import React, {Suspense} from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Кафедры",
};

export default function Layout({children}: Readonly<{ children: React.ReactNode }>) {
    return <Suspense fallback={'Suspense Loading'}>{children}</Suspense>
}
