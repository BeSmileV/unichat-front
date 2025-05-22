import {UploadChunkResponseType} from "./UploadChunkTypes";

/**
 * При возврате false останавливает загрузку
 * */
export type UploadFileByChunksUpdateStatusType = (arg: UploadChunkResponseType) => boolean
export type UploadFileByChunksResponseTypes = UploadChunkResponseType