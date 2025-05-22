'use client'

import {Button} from "indicator-ui";
import {PaginationComponent} from "@/shared/ui";
import {ClassroomCard, TaskCard} from "@/features/Classrooms";
import {ROUTES_CONFIG} from "@/features/Routing";
import {ClassroomDetailPageStyle} from '../styles'
import {useClassroomDetail} from "../hooks";

export function ClassroomDetailPage({id}: { id: number }) {
    const {list, classroom} = useClassroomDetail(id)

    if (list === undefined || classroom === undefined) {
        return 'Loading'
    }

    if (list === null || classroom === null) {
        return 'Error'
    }

    return (
        <div className={ClassroomDetailPageStyle.ClassroomDetailPage}>
            <ClassroomCard name={classroom.name}
                           description={classroom.description}
                           groupName={classroom.group.name}
                           width={'fill'}/>
            <Button size={'large'}
                    hierarchy={'secondary-color'}
                    text={'Добавить задание'}
                    width={'fill'}/>
            <div className={ClassroomDetailPageStyle.list}>
                {list.data.map((item, idx) => <TaskCard deadline={item.deadline}
                                                        name={item.name}
                                                        href={ROUTES_CONFIG.TASKS_DETAIL_SLUG_PAGE + item.id}
                                                        key={idx}/>)}
            </div>
            <PaginationComponent totalCount={list.total_count}/>
        </div>
    )
}