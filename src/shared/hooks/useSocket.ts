'use client';

import {useCallback, useEffect, useRef, useState} from "react";
import {io, Socket} from "socket.io-client";

type EventsType = Record<string, (...args: any[]) => void>;

type PropsType<OnEvents extends EventsType> = {
    url: string;
    headers?: Record<string, string>;
    onEvents?: OnEvents;
};

type ReturnType<OnEvents extends EventsType, EmitEvents extends EventsType> = {
    emit: Socket<OnEvents, EmitEvents>["emit"];
    disconnect: () => void;
    reconnect: () => void;
    isConnected: boolean;
};

export function useSocket<OnEvents extends EventsType, EmitEvents extends EventsType>({
                                                                                          url,
                                                                                          headers,
                                                                                          onEvents,
                                                                                      }: PropsType<OnEvents>): ReturnType<OnEvents, EmitEvents> {
    type SocketType = Socket<OnEvents, EmitEvents>;

    const socketRef = useRef<SocketType | null>(null);
    const [isConnected, setIsConnected] = useState(false);

    const connectToSocket = useCallback(() => {
        const socket: SocketType = io(url, {
            extraHeaders: headers,
        });

        socket.on('connect', () => setIsConnected(true));
        socket.on('disconnect', () => setIsConnected(false));
        socket.on('connect_error', () => setIsConnected(false));

        if (onEvents) {
            Object.entries(onEvents).forEach(([event, handler]) => {
                socket.on(event as Extract<keyof OnEvents, string>, handler as OnEvents[keyof OnEvents]);
            });
        }

        socketRef.current = socket;
    }, [url, JSON.stringify(headers)]);

    useEffect(() => {
        connectToSocket();
        return () => {
            socketRef.current?.disconnect();
        };
    }, [connectToSocket]);

    const emit: Socket<OnEvents, EmitEvents>["emit"] = (...args) => {
        socketRef.current?.emit(...args);
        return {} as Socket<OnEvents, EmitEvents>
    };


    const disconnect = () => {
        socketRef.current?.disconnect();
    };

    const reconnect = () => {
        socketRef.current?.disconnect();
        connectToSocket();
    };

    return {
        emit,
        disconnect,
        reconnect,
        isConnected,
    };
}
