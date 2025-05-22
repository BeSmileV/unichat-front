export function getFileUrl(path?: string | undefined): string {
    return process.env.NEXT_PUBLIC_API_URL + '/file/download/' + (path || '')
}