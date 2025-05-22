import {sendRequest} from "@/shared/api";
import {UploadChunkRequestBodyType, UploadChunkResponseType} from "../types";

export async function uploadChunk({
                                      chunk,
                                      fileName,
                                      totalChunks,
                                      chunkNumber,
                                      hashfile
                                  }: UploadChunkRequestBodyType): Promise<UploadChunkResponseType | null> {
    const url = process.env.NEXT_PUBLIC_API_URL + '/file/chunked-upload'

    const formData = new FormData();
    formData.append('chunk_number', `${chunkNumber}`)
    formData.append('total_chunks', `${totalChunks}`)
    formData.append('file', chunk, fileName)

    if (hashfile)
        formData.append('hashfile', hashfile)


    const response = await sendRequest({url: url, data: formData, type: 'POST'})

    if (!response?.ok)
        return null

    return response?.json();
}