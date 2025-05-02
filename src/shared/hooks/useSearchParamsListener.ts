'use client'

import {ReadonlyURLSearchParams, useRouter, useSearchParams} from "next/navigation";

export  type UseSearchParamsListenerParamsType = Record<string, string | string[] | undefined | null>
export type GetSearchParamFuncType = (name: string, options?: {
    isArray?: boolean,
    stringify?: boolean,
}) => string | string[] | null
export type DeleteSearchParamFuncType = (name: string | string[]) => void
export type SetSearchParamFuncOptionsType = { replace?: boolean, }
export type SetSearchParamFuncType = (params: UseSearchParamsListenerParamsType, options?: SetSearchParamFuncOptionsType) => void
export type UseSearchParamsListenerReturnType = {
    getSearchParams: GetSearchParamFuncType,
    setSearchParams: SetSearchParamFuncType,
    deleteSearchParams: DeleteSearchParamFuncType,
    searchParams: ReadonlyURLSearchParams | null,
}

export function useSearchParamsListener(): UseSearchParamsListenerReturnType {
    const searchParams = useSearchParams()
    const router = useRouter()

    const get: GetSearchParamFuncType = (name, options) => {
        const isArray = options?.isArray ?? false
        const stringify = options?.stringify ?? false
        const values = searchParams?.getAll(name)
        if (values?.length === 0) return null
        if (!isArray && values?.length === 1) {
            return values[0]
        }
        return stringify && values ? String(values) : values || null
    }

    const set: SetSearchParamFuncType = (params, options) => {
        const replace = options?.replace ?? false

        const newSearchParams = new URLSearchParams(replace ? undefined : window.location.search)
        Object.keys(params).map((key) => {
            const curParam = params[key]
            if (curParam === null) {
                newSearchParams.delete(key)
            } else if (curParam !== undefined) {
                if (Array.isArray(curParam)) {
                    newSearchParams.delete(key)
                    curParam.forEach(value => newSearchParams.append(key, value))
                } else {
                    newSearchParams.set(key, curParam)
                }
            }

        })
        const newUrl = window.location.pathname + '/?' + newSearchParams.toString()
        router.replace(newUrl)
    }

    const _delete: DeleteSearchParamFuncType = (name) => {
        const newSearchParams = new URLSearchParams(window.location.search)
        if (typeof name === 'string') {
            newSearchParams.delete(name)
        } else {
            name.forEach(item => newSearchParams.delete(item))
        }
        const newUrl = window.location.pathname + '/?' + newSearchParams.toString()
        router.replace(newUrl)
    }
    return {getSearchParams: get, setSearchParams: set, deleteSearchParams: _delete, searchParams: searchParams}
}



