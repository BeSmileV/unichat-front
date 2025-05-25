'use client';

import {useEffect, useRef, useState} from "react";
import {io, Socket} from "socket.io-client";
import {getClientSession} from "@/features/next-auth";
import {useDeepCompareCallback} from "@/shared/hooks/useDeepCompareCallback";
import {clearTimeout} from "node:timers";

type EventsType = Record<string, (...args: any[]) => void>;

type PropsType<OnEvents extends EventsType> = {
    url?: string;
    headers?: Record<string, string>;
    onEvents?: Partial<OnEvents>;
};

type ReturnType<OnEvents extends EventsType, EmitEvents extends EventsType> = {
    emit: Socket<OnEvents, EmitEvents>["emit"];
    disconnect: () => void;
    connect: () => void;
    reconnect: () => void;
    isConnected: boolean;
};

export type UseSocketEmitType<EmitEvents extends EventsType> = Socket<never, EmitEvents>['emit'];
export type UseSocketOnType<OnEvents extends EventsType> = Socket<OnEvents, never>['on'];

type SessionType = typeof getClientSession extends () => Promise<infer T> ? T : never

const TOKEN_UPDATE_TIMEOUT = 3 * 60 * 1000;

export function useSocket<OnEvents extends EventsType, EmitEvents extends EventsType>({
                                                                                          url = process.env.NEXT_PUBLIC_API_URL_WEB_SOCKET || '',
                                                                                          headers,
                                                                                          onEvents,
                                                                                      }: PropsType<OnEvents>): ReturnType<OnEvents, EmitEvents> {
    type SocketType = Socket<OnEvents, EmitEvents>;

    const socketRef = useRef<SocketType | null>(null);
    const [isConnected, setIsConnected] = useState(false);

    const [token, setToken] = useState<SessionType | undefined>(undefined)

    const tokenTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const _clear = () => {
            if (tokenTimeoutRef.current) {
                clearTimeout(tokenTimeoutRef.current)
            }
        }

        const updateToken = () => {
            _clear()
            getClientSession().then(setToken)

        }
        updateToken()

        setTimeout(updateToken, TOKEN_UPDATE_TIMEOUT)
        return _clear
    }, []);

    const connectToSocket = useDeepCompareCallback(async () => {
        const socket: SocketType = io(url, {
            extraHeaders: {
                ...headers,
                Authorization: `Bearer: ${token?.access_token}`
            },
            // withCredentials: true,
            path: '/ws/socket.io',
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
    }, [url, token, headers]);

    useEffect(() => {
        connectToSocket();
        return () => {
            socketRef.current?.disconnect();
        };
    }, [connectToSocket]);

    const emit: Socket<OnEvents, EmitEvents>["emit"] = (...args) => {
        const socket = socketRef.current
        if (socket) {
            socket.emit(...args);
        }
        return {} as Socket<OnEvents, EmitEvents>
    };


    const disconnect = () => {
        socketRef.current?.disconnect();
    };

    const reconnect = () => {
        socketRef.current?.disconnect();
        connectToSocket();
    };
    const connect = () => {
        socketRef.current?.connect();
        connectToSocket();
    };

    return {
        emit,
        disconnect,
        reconnect,
        connect,
        isConnected,
    };
}
