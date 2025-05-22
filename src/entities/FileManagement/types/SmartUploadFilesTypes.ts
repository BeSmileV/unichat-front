import {
    UploadChunkResponseGenericType,
    UploadChunkResponseType,
} from "./UploadChunkTypes";
import {UploadSmallFileResponseDataItemType} from "./UploadSmallFilesTypes";

export type SmartUploadFilesLoadingType = {
    type: 'loading',
    original_name: string,
    size: number,
    /**
     * ```null``` только в том случае, когда отслеживание статуса невозможно
     * */
    status?: UploadChunkResponseType | null,
    _key?: string | number,
}
export type SmartUploadFilesItemReadyType = UploadChunkResponseGenericType<true, true> | UploadSmallFileResponseDataItemType
export type SmartUploadFilesItemType = SmartUploadFilesItemReadyType | SmartUploadFilesLoadingType
export type SmartUploadFilesType = Array<SmartUploadFilesItemType>
