'use client'

import {Button} from "indicator-ui";
import {Trash01SVG} from "@/shared/assets";
import {AdminDetailPageStyle} from '@/features/Admin'

export function Actions({id}: { id: number }) {
    const onClick = () => {
        console.log('block id:', id)
    }

    return (
        <div className={AdminDetailPageStyle.action}>
            <h3 className={AdminDetailPageStyle.header}>Операции</h3>
            <Button size={'small'}
                    hierarchy={'primary'}
                    warning={true}
                    iconLeft={<Trash01SVG/>}
                    text={'Удалить'}
                    onClick={onClick}
                    width={'fill'}/>
        </div>
    )
}