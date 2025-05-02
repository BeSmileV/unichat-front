'use client'

import React from "react";
import {SessionProvider} from "next-auth/react";
import StoreProvider from "@/store/StoreProvider";

export function Providers({children}: { children?: React.ReactNode }) {
    return (
        <SessionProvider basePath={process.env.NEXT_PUBLIC_BASE_NEXTAUTH_URL}>
            <StoreProvider>
                {children}
            </StoreProvider>
        </SessionProvider>
    )
}