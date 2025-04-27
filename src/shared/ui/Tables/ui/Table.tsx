import {TablePropsType} from "../types";
import {TableStyle} from "../styles";
import {TableRow} from './TableRow'

export function Table({header, body, onClickRow, offGray, className = TableStyle.table}: TablePropsType) {
    return (
        <table className={className}>
            {header &&
                <thead>
                <TableRow row={header?.map(item => ({...item, type: 'description'}))}
                          isDescription={true}
                          isHeader={true}/>
                </thead>
            }
            {body &&
                <tbody>
                {body.map((item, idx) => <TableRow row={item}
                                                   isGray={offGray !== true && idx % 2 === 0}
                                                   onClick={() => onClickRow && onClickRow(idx)}
                                                   key={idx}/>)}
                </tbody>
            }
        </table>
    )
}