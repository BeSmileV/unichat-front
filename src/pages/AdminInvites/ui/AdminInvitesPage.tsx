'use client'

import {ActionField, CreateStudentsInvites, CreateTeacherInvites} from "@/widgets/AdminInvites";
import {AdminDetailPageStyle} from '@/features/Admin'
import {useState} from "react";
import {BackgroundModalWindowWrapper} from "indicator-ui";
import clsx from "clsx";

export function AdminInvitesPage() {
    const [isActiveModalWindow, setIsActiveModalWindow] = useState<'teacher' | 'students' | undefined>(undefined)

    const isShow = () => {
        return isActiveModalWindow !== undefined
    }

    const setIsShow = (isShow: boolean) => {
        if (!isShow) {
            setIsActiveModalWindow(undefined)
        }
    }

    const getModalWindow = () => {
        switch (isActiveModalWindow) {
            case 'teacher':
                return <CreateTeacherInvites onClose={() => setIsActiveModalWindow(undefined)}/>
            case 'students':
                return <CreateStudentsInvites onClose={() => setIsActiveModalWindow(undefined)}/>
        }
    }

    return (
        <div className={AdminDetailPageStyle.AdminDetailPage}>
            <div className={clsx(AdminDetailPageStyle.content, AdminDetailPageStyle.fill)}>
                <h1 className={AdminDetailPageStyle.header}>Создание приглашений</h1>
                <ActionField title={'Пригласить преподавателя'}
                             subtitle={'Сформировать ссылку, по которой преподаватель может пройти регистрацию'}
                             onClick={() => setIsActiveModalWindow('teacher')}/>
                <ActionField title={'Пригласить студентов'}
                             subtitle={'Сформировать ссылку, по которой студенты могут пройти регистрацию'}
                             onClick={() => setIsActiveModalWindow('students')}/>
            </div>
            <BackgroundModalWindowWrapper isShow={isShow()}
                                          setIsShow={setIsShow}
                                          className={AdminDetailPageStyle.modalWindowWrapper}>
                {getModalWindow()}
            </BackgroundModalWindowWrapper>

        </div>
    )
}