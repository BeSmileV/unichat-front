'use client'

import {InputField} from "indicator-ui";
import {IMask} from "react-imask";

export default function Home() {
    return (
        <main>
            <InputField type={'test'}
                        mask={'HH:mm'}
                        blocks={{
                            HH: {
                                mask: IMask.MaskedRange,
                                from: 0,
                                to: 23,  // для часов 00-23
                            },
                            mm: {
                                mask: IMask.MaskedRange,
                                from: 0,
                                to: 59,  // для минут 00-59
                            },
                            ss: {
                                mask: IMask.MaskedRange,
                                from: 0,
                                to: 59,  // для секунд 00-59
                            },
                            SSS: {
                                mask: IMask.MaskedRange,
                                from: 0,
                                to: 999,  // для миллисекунд 000-999
                            },
                        }}/>
        </main>
    )
}
