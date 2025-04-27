import {ReactNode} from "react";

export type TableCellType = {
    label?: ReactNode,
    type?: 'description' | 'field' | 'link' | undefined,
    status?: 'red' | 'green' | 'yellow' | 'gray' | undefined,
}

export type TableCellClassNameType = {
    tableCell?: string,
    description?: string,
    field?: string,
    link?: string,
    status?: string,
    statusRed?: string,
    statusGreen?: string,
    statusYellow?: string,
    statusGray?: string,
}

export type TableCellPropsType = {
    cell: TableCellType,
    isHeader?: boolean,
    className?: TableCellClassNameType,
}