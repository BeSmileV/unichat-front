import React from "react";

export type DragAndDropFilesProviderPropsType =  React.HTMLAttributes<HTMLDivElement> & {
    setIsDragging?: (value: boolean) => void;
    onDropFile?: (files: Array<File>) => void;
}