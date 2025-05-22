'use client'

import {Button, FormBuilder, InputField, MicroButton} from "indicator-ui";
import {Copy06SVG, XCloseSVG} from "@/shared/assets";
import {inviteStudentsScheme} from "@/features/AdminInvites";
import {InviteStyle} from "../styles";
import {useCreateStudentInvites} from "@/widgets/AdminInvites/hooks/useCreateStudentInvites";

export function CreateStudentsInvites({onClose}: { onClose?: () => void }) {
    const {onSend, inviteUrl, onCopy, onChangeFormData} = useCreateStudentInvites()

    return (
        <div className={InviteStyle.invite}>
            <MicroButton size={'28'}
                         color={'light'}
                         icon={<XCloseSVG/>}
                         additionStyles={InviteStyle.closeButton}
                         onClick={onClose}/>
            <h3 className={InviteStyle.header}>Пригласить студентов</h3>
            <div className={InviteStyle.form}>
                <FormBuilder onChange={onChangeFormData} schema={inviteStudentsScheme({})}/>
            </div>
            <Button size={'large'}
                    hierarchy={'primary'}
                    width={'fill'}
                    onClick={onSend}
                    text={'Сформировать ссылку'}/>
            <InputField labelText={'Ссылка'}
                        value={inviteUrl}
                        help={<Button size={'small'}
                                      onClick={onCopy}
                                      hierarchy={'secondary-color'}
                                      iconLeft={<Copy06SVG/>}/>}/>
        </div>
    )
}
