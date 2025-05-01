'use client'

import {Button, InputField} from "indicator-ui";
import {useState} from "react";

export default function Home() {
    const [response, setResponse] = useState(undefined)

    const testRequest = async () => {
        const message = 'World'
        const url = process.env.NEXT_PUBLIC_BACKEND_API + `/hello/${message}`
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
        setResponse(json)
    }

    return (
        <main>
            {response ? JSON.stringify(response) : "Ничего нет"}
            <InputField type={'test'}
                        mask={'HH:mm'}/>
            <Button onClick={testRequest} text={'send request'}/>
        </main>
    )
}
