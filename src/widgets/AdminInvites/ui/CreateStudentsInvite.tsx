'use client'

import {Button, InputField, MicroButton} from "indicator-ui";
import {Copy06SVG, XCloseSVG} from "@/shared/assets";
import {InviteStudentsForm} from "@/features/AdminInvites";
import {InviteStyle} from "../styles";

export function CreateStudentsInvites({onClose}: { onClose?: () => void }) {
    return (
        <div className={InviteStyle.invite}>
            <MicroButton size={'28'}
                         color={'light'}
                         icon={<XCloseSVG/>}
                         additionStyles={InviteStyle.closeButton}
                         onClick={onClose}/>
            <h3 className={InviteStyle.header}>Пригласить студентов</h3>
            <div className={InviteStyle.form}>
                <InviteStudentsForm/>
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
