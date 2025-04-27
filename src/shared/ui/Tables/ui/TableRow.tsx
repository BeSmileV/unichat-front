import clsx from "clsx";
import {TableRowPropsType} from "../types";
import {TableRowStyle} from "../styles";
import {TableCell} from "./TableCell";

export function TableRow({
                                     row,
                                     isGray,
                                     isDescription,
                                     onClick,
                                     isHeader = false,
                                     className = TableRowStyle,
                                 }: TableRowPropsType) {
    return <tr onClick={onClick} className={clsx(className?.tableRow, {
        [className?.gray as string]: isGray,
        [className?.description as string]: isDescription,
    })}>{(row.map((item, idx) => <TableCell cell={item} isHeader={isHeader} key={idx}/>))}</tr>
}
