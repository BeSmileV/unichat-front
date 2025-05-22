export function isImageFile(path: string) {
    const extension = path.split('.').pop()?.toLowerCase();
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg'];
    return extension ? imageExtensions.includes(extension) : false
}

export function isVideoFile(path: string) {
    const extension = path.split('.').pop()?.toLowerCase();
    const videoExtensions = ['mp4', 'mov', 'avi', 'mkv', 'webm', 'wmv'];
    return extension ? videoExtensions.includes(extension) : false
}
