import type {Metadata} from "next";
import React, {Suspense} from "react";

export const metadata: Metadata = {
    title: "Регистрация",
};

export default function Layout({children}: Readonly<{ children: React.ReactNode }>) {
    return <Suspense fallback={null}>{children}</Suspense>
}
