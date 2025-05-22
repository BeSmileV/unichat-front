export type UploadChunkRequestBodyType = {
    chunk: File | Blob,
    chunkNumber: number,
    totalChunks: number,
    fileName: string,
    hashfile?: string | null | undefined
}
export type UploadChunkResponseGenericType<Complete extends boolean, Success extends boolean> = {
    success: Success,
    complete: Complete,
    path: string,
    original_name: string,
    size: Complete extends true ? Success extends true ? number : undefined : undefined,
}
export type UploadChunkResponseType =
    | UploadChunkResponseGenericType<true, false>
    | UploadChunkResponseGenericType<true, true>
    | UploadChunkResponseGenericType<false, false>