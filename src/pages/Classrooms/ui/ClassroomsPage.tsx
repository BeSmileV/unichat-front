'use client'

import {Button} from "indicator-ui";
import Link from "next/link";
import {PaginationComponent} from "@/shared/ui";
import {ROUTES_CONFIG} from "@/features/Routing";
import {ClassroomCard} from "@/features/Classrooms";
import {ClassroomsPageStyle} from "../styles";
import {useClassrooms} from "../hooks";

export function ClassroomsPage() {
    const {list} = useClassrooms()

    if (list === undefined) {
        return 'Loading...'
    }

    if (list === null) {
        return 'Error'
    }

    return (
        <div className={ClassroomsPageStyle.ClassroomsPage}>
            <div className={ClassroomsPageStyle.list}>
                {list.data.map((item, idx) => <ClassroomCard name={item.name}
                                                             description={item.description}
                                                             groupName={item.group.name}
                                                             avatar={item.avatar}
                                                             href={ROUTES_CONFIG.CLASSROOMS_DETAIL_SLUG_PAGE + item.id}
                                                             key={idx}/>)}
            </div>
            <PaginationComponent totalCount={list.total_count}/>
            <Button size={'large'}
                    width={'fill'}
                    hierarchy={'secondary-color'}
                    text={'Создать класс'}
                    customComponent={<Link href={ROUTES_CONFIG.CLASSROOMS_CREATE_PAGE}/>}/>
        </div>
    )
}