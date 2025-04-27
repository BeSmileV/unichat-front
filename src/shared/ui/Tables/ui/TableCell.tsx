import clsx from "clsx";
import {TableCellPropsType} from "../types";
import {TableCellStyle} from "../styles";

export function TableCell({cell, isHeader = false, className = TableCellStyle}: TableCellPropsType) {
    const getStatusContent = () => {
        switch (cell.status) {
            case 'red':
            case 'green':
            case 'yellow':
            case 'gray':
                return <div className={clsx(className?.status, {
                    [className?.statusRed as string]: cell.status === 'red',
                    [className?.statusGreen as string]: cell.status === 'green',
                    [className?.statusYellow as string]: cell.status === 'yellow',
                    [className?.statusGray as string]: cell.status === 'gray',
                })}></div>
            case undefined:
            default:
                return undefined
        }
    }

    const getTypeContent = () => {
        switch (cell.type) {
            case 'description':
                return <span className={className?.description}>{cell.label}</span>
            case 'link':
                return <a className={className?.link}>{cell.label}</a>
            case 'field':
            default:
                return <span className={className?.field}>{cell.label}</span>
        }
    }
    if (isHeader) {
        return <th className={className?.tableCell}>{getStatusContent()}{getTypeContent()}</th>
    }
    return <td className={className?.tableCell}>{getStatusContent()}{getTypeContent()}</td>
}