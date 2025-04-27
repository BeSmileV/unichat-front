import {TableCellType} from "./TableCellTypes";

export type TableRowType = TableCellType[]

export type TableRowClassNameType = {
    tableRow?: string,
    gray?: string,
    description?: string,
}

export type TableRowPropsType = {
    row: TableRowType,
    isHeader?: boolean,
    isDescription?: boolean,
    isGray?: boolean,
    onClick?: () => void,
    className?: TableRowClassNameType,
}