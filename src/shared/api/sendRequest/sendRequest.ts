'use client'

type AdditionHeaderType = { [key: string]: string }
type SendRequestPropsType = {
    data?: any,
    url: string,
    type?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | "OPTIONS",
    header?: AdditionHeaderType,
    dropJWT?: boolean,
}

const getContentType = (data: any): { [key: string]: string } | undefined => {
    if (data instanceof FormData) {
        return {}
    }

    return {'Content-Type': 'application/json'}
}

const redirectToLogin = () => {
    if (typeof window !== 'undefined') {
        window.location.href = `/login`
    }
}

const getHeader = async (data: any, additionHeader: AdditionHeaderType, dropJWT: boolean): Promise<{
    [key: string]: string
}> => {
    let tokenData = {}
    if (!dropJWT) {

    }

    return {...getContentType(data), ...tokenData, ...additionHeader}
}

const getBody = (data: any) => {
    if (data instanceof FormData) {
        return data as FormData
    }

    return JSON.stringify(data)
}

export async function sendRequest({
                                      data = {},
                                      url,
                                      type = 'GET',
                                      header = {},
                                      dropJWT = false
                                  }: SendRequestPropsType) {
    try {
        const headers = await getHeader(data, header, dropJWT)
        const body = getBody(data)
        const response = await fetch(url, {
            method: type,
            headers: headers,
            ...(type !== 'GET' && data &&
                {
                    body: body
                }
            )
        })

        let UNAUTHORIZED_STATUS = 401;
        if (response.status === UNAUTHORIZED_STATUS) {
            redirectToLogin()
        }

        return response
    } catch (e) {
        console.error(e)
        return null
    }
}