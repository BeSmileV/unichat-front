import {Dispatch, SetStateAction} from "react";
import {
    SmartUploadFilesItemReadyType,
    SmartUploadFilesLoadingType,
    SmartUploadFilesType
} from "./SmartUploadFilesTypes";

export type UseFilesUploadFilesItemUploadingType = SmartUploadFilesLoadingType
export type UseFilesUploadFilesItemReadyType = SmartUploadFilesItemReadyType
export type UseFilesUploadFilesItemType = UseFilesUploadFilesItemReadyType | UseFilesUploadFilesItemUploadingType
export type UseFilesUploadFilesType = Array<UseFilesUploadFilesItemType>
export type UseFilesUploadGetFilesType = () => SmartUploadFilesType
export type UseFilesUploadSetFilesType = Dispatch<SetStateAction<SmartUploadFilesType>>
export type UseFilesUploadDeleteFilesType = (deleteIdx: number | Array<number>) => void
export type UseFilesUploadIsUploadingFileType = (idx: number) => UseFilesUploadFilesItemUploadingType | false | undefined
export type UseFilesUploadIsReadyFileFileType = (idx: number) => UseFilesUploadFilesItemReadyType | false | undefined
export type UseFilesUploadUploadFilesType = (newFiles: Array<File>) => Promise<void>
export type UseFilesUploadReturnType = {
    /**
     * Переменная содержащая файлы, вызывает ререндер при изменение (То есть работает на обычный useState).
     * */
    files: UseFilesUploadFilesType,
    /**
     * Функция, возвращающая последнее значение файлов. Не вызывает ререндер (То есть работает как useRef).
     *
     * Нужно для получение последнего значения файлов (useState это не гарантирует без useEffect).
     * */
    getFiles: UseFilesUploadGetFilesType,
    setFiles: UseFilesUploadSetFilesType,
    /**
     * Принимает массив или одно значение. При массиве удалит все файлы из массива.
     * */
    deleteFiles: UseFilesUploadDeleteFilesType,
    uploadFiles: UseFilesUploadUploadFilesType,
    /**
     * Проверяет, загружается ли файл, по индексу. Возвращает файл тип _loading_ - если загружается, иначе - ```false```
     *
     * Вернет ```undefined```, если файла не существует
     * */
    isUploadingFile: UseFilesUploadIsUploadingFileType,
    /**
     * Принимает индекс файла, который может быть загружаемым или загруженным.
     *
     * Возвращает загруженный тип файла, если файл загружен, иначе - ```undefined```.
     * */
    isReadyFile: UseFilesUploadIsReadyFileFileType,
}