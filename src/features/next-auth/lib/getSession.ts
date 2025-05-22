'use server'

import {JWT} from "next-auth/jwt";
import {auth, processToken} from "@/features/next-auth";

export async function getSession(): Promise<JWT | null> {
    const session = await auth()
    if (session?.user) {
        return await processToken(session?.user)
    }
    return null
}