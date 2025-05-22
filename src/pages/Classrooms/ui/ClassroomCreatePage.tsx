'use client'

import {Button, FormBuilder} from "indicator-ui";
import Link from "next/link";
import {ArrowNarrowLeftSVG} from "@/shared/assets";
import {ClassroomPostType} from "@/entities/Classroom";
import {ROUTES_CONFIG} from "@/features/Routing";
import {classroomScheme} from "@/features/Classrooms";
import {ClassroomCreatePageStyle} from '../styles'
import {useClassroomCreate} from "../hooks";

export function ClassroomCreatePage() {
    const {onChangeFormData, onSubmit} = useClassroomCreate()

    return (
        <div className={ClassroomCreatePageStyle.ClassroomCreatePage}>
            <Button hierarchy={'link-color'}
                    text={'Назад'}
                    iconLeft={<ArrowNarrowLeftSVG/>}
                    customComponent={<Link href={ROUTES_CONFIG.CLASSROOMS_PAGE}/>}/>
            <div className={ClassroomCreatePageStyle.content}>
                <FormBuilder<ClassroomPostType> schema={classroomScheme()} onChange={onChangeFormData}/>
                <Button size={'large'} width={'fill'} text={'Создать класс'} onClick={onSubmit}/>
            </div>
        </div>
    )
}