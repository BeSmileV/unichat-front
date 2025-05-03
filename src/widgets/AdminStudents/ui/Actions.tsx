'use client'

import {Button} from "indicator-ui";
import {SlashOctagonSVG} from "@/shared/assets";
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
                    iconLeft={<SlashOctagonSVG/>}
                    text={'Заблокировать'}
                    onClick={onClick}
                    width={'fill'}/>
        </div>
    )
}