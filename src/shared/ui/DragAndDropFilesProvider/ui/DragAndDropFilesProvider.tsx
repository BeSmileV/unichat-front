'use client'

import {DragEventHandler} from "react";
import {DragAndDropFilesProviderPropsType} from "../types";

export function DragAndDropFilesProvider({onDropFile, setIsDragging, ...props}: DragAndDropFilesProviderPropsType) {
    const onDragEnter: DragEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault()
        setIsDragging?.(true)
    }

    const onDragOver: DragEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault()
        setIsDragging?.(true)
    }

    const onDragLeave: DragEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault()
        setIsDragging?.(false)
    }

    const onDrop: DragEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault()
        setIsDragging?.(false)
        onDropFile?.(Array.from(event.dataTransfer.files))
    }

    return <div onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDragOver={onDragOver} onDrop={onDrop} {...props}/>
}