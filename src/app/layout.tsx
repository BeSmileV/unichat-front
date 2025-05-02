import React from "react";
import type {Metadata} from "next";
import {Providers} from "@/features/Providers";
import "./globals.scss";

export const metadata: Metadata = {
    title: "Unichat",
    description: "Диплом",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru">
        <body>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}
