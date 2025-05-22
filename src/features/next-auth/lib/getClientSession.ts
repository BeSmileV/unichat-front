'use client'

import {JWT} from "next-auth/jwt";
import {isTokenAvailable} from "@/shared/lib";
import {getTokenPromiseState, getTokenState, setTokenPromiseState, setTokenState} from "../assetes";
import {getSession} from "./getSession";
import {logToFile} from "@/shared/lib/loggers";

export async function getClientSession(): Promise<JWT | null> {
    const tokenState = getTokenState()
    logToFile(`token state ${JSON.stringify(tokenState)}`)
    if (tokenState === null || !isTokenAvailable(tokenState.access_token)) {
        logToFile(`token promise ${JSON.stringify(tokenState)}`)
        let tokenPromise = getTokenPromiseState()
        if (tokenPromise === null) {
            tokenPromise = getSession()
            setTokenPromiseState(tokenPromise)
        }
        try {
            let response = await tokenPromise
            setTokenState(response)
            return response
        } catch (e) {
        } finally {
            // По идее сравнение не нужно, так как пока промис существует,
            // то остальные клиенты функции должны получить его результат.
            // Следовательно промис меняться не будет, а значит проверять на равенство смысла нет.
            setTokenPromiseState(null)
        }
        return null
    } else {
        return tokenState
    }
}