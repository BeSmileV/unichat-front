import {JWT} from "next-auth/jwt";

export type RefreshPromiseStateType = Promise<JWT | null> | null

let tokenPromiseState: RefreshPromiseStateType = null

export const setTokenPromiseState = (promise: RefreshPromiseStateType): void => {
    tokenPromiseState = promise
}

export const getTokenPromiseState = (): RefreshPromiseStateType => {
    return tokenPromiseState
}

let tokenState: JWT | null = null

export const setTokenState = (newTokenState: JWT | null): void => {
    tokenState = newTokenState
}
export const getTokenState = (): JWT | null => {
    return tokenState
}

let timeoutState: NodeJS.Timeout | null = null

export const setTimeoutState = (state: NodeJS.Timeout | null) => {
    timeoutState = state
}

export const getTimeoutState = (): NodeJS.Timeout | null => {
    return timeoutState
}