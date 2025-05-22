import {Dispatch, SetStateAction} from "react";
import {uploadFileByChunks, uploadSmallFiles} from "../api";
import {SmartUploadFilesItemType, SmartUploadFilesType, UploadFileByChunksUpdateStatusType,} from '../types'

const MAX_FILE_SIZE = 1 * 1024 * 1024 * 1024
const MAX_SMALL_FILE_SIZE = 5 * 1024 * 1024

type SmartUploadFilesFunConnectType = {
    getAttachment?: () => SmartUploadFilesType,
    setAttachment?: Dispatch<SetStateAction<SmartUploadFilesType>>,
}
type SmartUploadFilesFunPropsType = {
    files?: Array<File>,
    maxFileSize?: number,
    maxSmallFileSize?: number,
} & SmartUploadFilesFunConnectType
type UploadFunType = (files: Array<File>, arg: SmartUploadFilesFunConnectType) => Promise<void>

const uploadOnlyBigFiles: UploadFunType = async (files, {getAttachment, setAttachment}) => {
    for (const file of files) {
        const _key = String(Date.now()) + file.name
        const attachment = getAttachment?.() || []
        const newIdx = attachment.length

        const updateStatus: UploadFileByChunksUpdateStatusType = (arg) => {
            const attachment = getAttachment?.() || []
            // Проверка наличия type, чтобы убедить ts в том что это фантомный файл, который еще не загружен
            // При отсутствие файла остановит загрузку, вернув ```false```.
            if (attachment[newIdx] && 'type' in attachment[newIdx] && attachment[newIdx]._key === _key) {
                setAttachment?.(prevState => {
                    const curFile = prevState[newIdx]
                    if (curFile) {
                        prevState[newIdx] = {...curFile, status: arg}
                        return [...prevState]
                    }
                    return prevState
                })
                return true
            }
            return false
        }

        setAttachment?.(prevState => [...prevState, {
            original_name: file.name,
            size: file.size,
            type: 'loading',
            _key: _key
        }])
        uploadFileByChunks(file, updateStatus).then((response) => {
            setAttachment?.(prevState => {
                if (prevState[newIdx] && response && response.success) {
                    prevState[newIdx] = response
                    return [...prevState]
                }
                return prevState
            })
        })
    }
}

const uploadOnlySmallFiles: UploadFunType = async (files, {setAttachment}) => {
    if (files.length > 0) {
        const _key = String(Date.now()) + String(files.length)
        const loadingFiles: SmartUploadFilesType = files.map(item => ({
            _key: _key,
            size: item.size,
            original_name: item.name,
            type: 'loading',
            status: null,
        }))
        setAttachment?.(prevState => [...prevState, ...loadingFiles])
        const response = await uploadSmallFiles(files)
        if (response) {
            setAttachment?.(prevState => {
                const newFiles: SmartUploadFilesType = response.data
                const condition = (item: SmartUploadFilesItemType) => 'type' in item && item.type === 'loading' && item._key === _key
                const startIdx = prevState.findIndex(item => condition(item))
                const lastIdx = prevState.findLastIndex(item => condition(item))

                if (startIdx === -1 || lastIdx === -1) {
                    return [...prevState, ...newFiles];
                }

                return [
                    ...prevState.slice(0, startIdx),
                    ...newFiles,
                    ...prevState.slice(lastIdx + 1)
                ];
            })
        }
    }
}

/**
 * Умная отправка файлов, нужна для отправки больших и маленьких файлов файлов.
 *
 * Также помогает отслеживать процесс отправки через ```getAttachment``` и ```setAttachment```.
 * */
export async function smartUploadFiles({
                                           files = [],
                                           maxFileSize = MAX_FILE_SIZE,
                                           maxSmallFileSize = MAX_SMALL_FILE_SIZE,
                                           getAttachment,
                                           setAttachment,
                                       }: SmartUploadFilesFunPropsType) {
    const checkedFiles = files.filter(item => item.size < maxFileSize)
    const bigFiles = checkedFiles.filter(item => item.size > maxSmallFileSize)
    const smallFiles = checkedFiles.filter(item => item.size <= maxSmallFileSize)
    await uploadOnlySmallFiles(smallFiles, {getAttachment, setAttachment})
    await uploadOnlyBigFiles(bigFiles, {getAttachment, setAttachment})
}