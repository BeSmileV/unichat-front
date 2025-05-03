'use client'

import {Button, InputField, MicroButton} from "indicator-ui";
import {Copy06SVG, XCloseSVG} from "@/shared/assets";
import {InviteTeacherForm} from "@/features/AdminInvites";
import {InviteStyle} from "../styles";

export function CreateTeacherInvites({onClose}: {onClose?: () => void}) {
    return (
        <div className={InviteStyle.invite}>
            <MicroButton size={'28'}
                         color={'light'}
                         icon={<XCloseSVG/>}
                         additionStyles={InviteStyle.closeButton}
                         onClick={onClose}/>
            <h3 className={InviteStyle.header}>Пригласить преподавателя</h3>
            <div className={InviteStyle.form}>
                <InviteTeacherForm/>
            </div>
            <Button size={'large'}
                    hierarchy={'primary'}
                    width={'fill'}
                    text={'Сформировать ссылку'}/>
            <InputField labelText={'Ссылка'}
                        help={<Button size={'small'}
                                        hierarchy={'primary'}
                                        iconLeft={<Copy06SVG/>}/>}/>
        </div>
    )
}
