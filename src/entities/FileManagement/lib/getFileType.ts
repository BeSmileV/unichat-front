export function getFileType(fileName?: string) {
    if (!fileName) return undefined
    return fileName.slice(fileName.lastIndexOf(".") + 1)
}
