export type UploadSmallFileRequestBodyType = [files: Array<File>]
export type UploadSmallFileResponseDataItemType = {
    original_name: string,
    path: string,
    size: number
}
export type UploadSmallFileResponseErrorsItemType = {
    filename: string,
    msg: string,
}
export type UploadSmallFileResponseType = {
    data: Array<UploadSmallFileResponseDataItemType>,
    errors: Array<UploadSmallFileResponseErrorsItemType>,
}