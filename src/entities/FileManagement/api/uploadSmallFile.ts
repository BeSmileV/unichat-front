import {sendRequest} from "@/shared/api/sendRequest";
import {UploadSmallFileRequestBodyType, UploadSmallFileResponseType} from "../types";

export async function uploadSmallFiles(...args: UploadSmallFileRequestBodyType): Promise<UploadSmallFileResponseType | null> {
    const [files] = args
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
    }

    if (formData.getAll("files").length > 0) {
        const url = process.env.NEXT_PUBLIC_API_URL + '/file/upload'
        const response = await sendRequest({url: url, data: formData, type: 'POST'})

        if (!response || !response.ok)
            return null

        return response.json();
    }

    return null
}