import {TableRowType} from "./TableRowTypes";

export type TableHeaderType = TableRowType
export type TableBodyType = TableRowType[]

export type TableClassNameType = string

export type TablePropsType = {
    header?: TableHeaderType,
    body?: TableBodyType,
    onClickRow?: (idx: number) => void,
    offGray?: boolean,
    className?: TableClassNameType,
}