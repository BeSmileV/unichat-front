'use client'

import {useState} from "react";
import {Button} from "indicator-ui";
import {useSocket} from "@/shared/hooks";

export default function Home() {
    const [chat, setChat] = useState<Array<string>>([])
    type OnEvents = {
        test_answer: (data: string) => void,
    }
    type EmitEvents = {
        test: (data: string) => void,
    }

    const url = 'http://localhost:5000'
    const {emit, disconnect} = useSocket<OnEvents, EmitEvents>({
        url,
        onEvents: {
            test_answer: (data) => setChat(prevState => [...prevState, `from: ${data}`])
        }
    })

    const sendMessage = () =>{
        const message = 'test message send'
        setChat(prevState => [...prevState, `to: ${message}`])
        emit('test', message)
    }

    return (
        <main>
            <div>{chat.map((item, idx ) => <div key={idx}>{item}</div>)}</div>
            <Button onClick={sendMessage} text="Send"/>
            <Button onClick={disconnect} text="disconnect"/>
        </main>
    )
}
