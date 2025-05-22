type BaseFieldType = string | number | boolean | null

export function toURLSearchParams(params: Record<string, BaseFieldType | Array<BaseFieldType> | undefined>): URLSearchParams {
    const searchParams = new URLSearchParams()

    for (const [key, value] of Object.entries(params)) {
        if (value !== undefined) {
            if (Array.isArray(value)) {
                value.forEach((item: unknown) => searchParams.append(key, String(item)))
            } else {
                searchParams.set(key, String(value))
            }
        }
    }

    return searchParams
}
