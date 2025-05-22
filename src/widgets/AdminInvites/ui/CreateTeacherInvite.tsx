'use client'

import {Button, FormBuilder, InputField, MicroButton} from "indicator-ui";
import {Copy06SVG, XCloseSVG} from "@/shared/assets";
import {inviteTeacherScheme} from "@/features/AdminInvites";
import {InviteStyle} from "../styles";
import {useCreateTeacherInvites} from "../hooks";


export function CreateTeacherInvites({onClose}: { onClose?: () => void }) {
    const {onSend, onChangeFormData, inviteUrl, onCopy} = useCreateTeacherInvites()

    return (
        <div className={InviteStyle.invite}>
            <MicroButton size={'28'}
                         color={'light'}
                         icon={<XCloseSVG/>}
                         additionStyles={InviteStyle.closeButton}
                         onClick={onClose}/>
            <h3 className={InviteStyle.header}>Пригласить преподавателя</h3>
            <div className={InviteStyle.form}>
                <FormBuilder onChange={onChangeFormData} schema={inviteTeacherScheme()}/>
            </div>
            <Button size={'large'}
                    hierarchy={'primary'}
                    width={'fill'}
                    onClick={onSend}
                    text={'Сформировать ссылку'}/>
            <InputField labelText={'Ссылка'}
                        value={inviteUrl}
                        help={<Button size={'small'}
                                      hierarchy={'secondary-color'}
                                      onClick={onCopy}
                                      iconLeft={<Copy06SVG/>}/>}/>
        </div>
    )
}
