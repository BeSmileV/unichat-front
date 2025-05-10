import {LoginErrorResponseType, LoginRequestType, LoginResponseType} from "@/entities/Login";

type FunResponseType =
    | { data: LoginResponseType, success: true }
    | { data: LoginErrorResponseType, success: false }

export async function login({username, password}: LoginRequestType): Promise<FunResponseType | null> {
    try {
        const url = process.env.NEXT_PUBLIC_BACKEND_API + '/auth/login'
        const formData = new FormData();
        formData.set("username", username)
        formData.set("password", password)
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        })
        return {success: response.ok, data: await response.json()}
    } catch (e) {
        return null
    }
}