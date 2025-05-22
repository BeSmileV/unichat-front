import {UploadFileByChunksResponseTypes, UploadFileByChunksUpdateStatusType} from "../types";
import {UPLOAD_FILE_CHUNK_SIZE_BYTES} from "../config";
import {uploadChunk} from "./uploadChunk";

type PropsType = [File, UploadFileByChunksUpdateStatusType]

export async function uploadFileByChunks(...args: PropsType): Promise<UploadFileByChunksResponseTypes | null> {
    const [file, updateStatus] = args
    const fileName = file.name
    const fileSize = file.size
    const totalChunks = Math.ceil(fileSize / UPLOAD_FILE_CHUNK_SIZE_BYTES)

    let hashfile = null
    let response = null
    for (let countChunks = 0; countChunks < totalChunks; countChunks++) {
        const start = countChunks * UPLOAD_FILE_CHUNK_SIZE_BYTES;
        const end = Math.min(start + UPLOAD_FILE_CHUNK_SIZE_BYTES, fileSize);
        const chunk = file.slice(start, end);

        response = await uploadChunk({
            chunk: chunk,
            fileName: fileName,
            totalChunks: totalChunks,
            chunkNumber: countChunks + 1,
            hashfile: hashfile
        })

        hashfile = response?.path

        if (!response) {
            return null
        }

        if (updateStatus) {
            const status = updateStatus(response)

            if (!status)
                return null
        }
    }

    return response
}