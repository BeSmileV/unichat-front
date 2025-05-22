import {Dispatch, SetStateAction, useRef, useState} from "react";
import {
    smartUploadFiles
} from "../lib";
import {
    UseFilesUploadDeleteFilesType,
    UseFilesUploadFilesItemReadyType,
    UseFilesUploadFilesItemType,
    UseFilesUploadFilesItemUploadingType,
    UseFilesUploadFilesType,
    UseFilesUploadIsReadyFileFileType,
    UseFilesUploadIsUploadingFileType,
    UseFilesUploadReturnType,
    UseFilesUploadUploadFilesType
} from "../types";

/**
 * Принимает файл, который может быть загружаемым или загруженным.
 *
 * Возвращает загруженный тип файла, если файл загружен, иначе - ```undefined```.
 * */
export function useFilesUploadGetFileReady(file: UseFilesUploadFilesItemType): UseFilesUploadFilesItemReadyType | undefined {
    if (!('type' in file) || file.type !== 'loading')
        return file as UseFilesUploadFilesItemReadyType
    return undefined
}
/**
 * Проверяет, загружается ли файл. Возвращает файл тип _loading_ - если загружается, иначе - ```false```
 *
 * Вернет ```undefined```, если файла не существует
 * */
export function useFilesUploadGetFileLoading(file: UseFilesUploadFilesItemType): UseFilesUploadFilesItemUploadingType | undefined {
    if ('type' in file && file.type === 'loading')
        return file as UseFilesUploadFilesItemUploadingType
    return undefined
}

export type UseFilesUploadType = (initFiles?: UseFilesUploadFilesType) => UseFilesUploadReturnType

/**
 * Хук для работы с загрузкой файлов.
 *
 * Позволяет отслеживать загрузку файлов.
 * */
export const useFilesUpload: UseFilesUploadType = (initFiles) => {
    const filesRef = useRef<UseFilesUploadFilesType>(initFiles || []);

    const _getFiles = () => {
        return filesRef.current
    }

    const [files, setFiles] = useState<UseFilesUploadFilesType>(_getFiles())

    const _setFiles: Dispatch<SetStateAction<UseFilesUploadFilesType>> = (value) => {
        const curAttachment = _getFiles()
        let newState
        if (typeof value === "function") {
            newState = value(curAttachment ?? [])
        } else {
            newState = value
        }
        filesRef.current = newState
        setFiles(newState)
    }

    const _deleteFile: UseFilesUploadDeleteFilesType = (deleteIdx) => {
        const resDeleteIdx = Array.isArray(deleteIdx) ? deleteIdx : [deleteIdx]
        _setFiles(prevState => prevState.filter((_, idx) => !resDeleteIdx.includes(idx)))
    }

    const _uploadFiles: UseFilesUploadUploadFilesType = async (files: Array<File>) => {
        await smartUploadFiles({
            files: files,
            getAttachment: _getFiles,
            setAttachment: _setFiles,
        })
    }

    const _isUploadingFile: UseFilesUploadIsUploadingFileType = (idx) => {
        const file = _getFiles()[idx]
        if (file === undefined) return undefined
        return useFilesUploadGetFileLoading(file) || false
    }

    const _isReadyFile: UseFilesUploadIsReadyFileFileType = (idx) => {
        const file = _getFiles()[idx]
        if (file === undefined) return undefined
        return useFilesUploadGetFileReady(file) || false
    }

    return {
        files: files,
        getFiles: _getFiles,
        setFiles: _setFiles,
        deleteFiles: _deleteFile,
        uploadFiles: _uploadFiles,
        isUploadingFile: _isUploadingFile,
        isReadyFile: _isReadyFile,
    }
}