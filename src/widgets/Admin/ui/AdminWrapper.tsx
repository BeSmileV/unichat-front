import React from "react";
import {NavBar, NavBarTabsType} from "@/shared/ui";
import {Atom01SVG, CompassSVG, Glasses02SVG, GraduationHat01SVG, Link02SVG, Users01SVG} from "@/shared/assets";
import {ROUTES_CONFIG} from "@/features/Routing";
import {AdminWrapperStyle} from '../styles'

export function AdminWrapper({children}: { children?: React.ReactNode }) {
    const tabs: NavBarTabsType = [
        {icon: <Atom01SVG/>, label: 'Институты', url: ROUTES_CONFIG.ADMIN_INSTITUTE},
        {icon: <CompassSVG/>, label: 'Кафедра', url: ROUTES_CONFIG.ADMIN_DEPARTMENT},
        {icon: <Users01SVG/>, label: 'Группы', url: ROUTES_CONFIG.ADMIN_GROUPS},
        {icon: <Glasses02SVG/>, label: 'Учителя', url: ROUTES_CONFIG.ADMIN_TEACHER},
        {icon: <GraduationHat01SVG/>, label: 'Студенты', url: ROUTES_CONFIG.ADMIN_STUDENT},
        {icon: <Link02SVG/>, label: 'Приглашения', url: ROUTES_CONFIG.ADMIN_INVITES},
    ]

    return (
        <div className={AdminWrapperStyle.AdminWrapper}>
            <NavBar tabs={tabs}/>
            <div className={AdminWrapperStyle.content}>{children}</div>
        </div>
    )
}