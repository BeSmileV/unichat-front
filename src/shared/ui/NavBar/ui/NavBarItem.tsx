'use client'

import Link from "next/link";
import clsx from "clsx";
import {NavBarItemPropsType} from "../types";
import {NavBarItemStyle} from "../styles";

export function NavBarItem({url, label, icon, active}: NavBarItemPropsType) {
    return (
        <Link href={url || ''} className={clsx(NavBarItemStyle.NavBarItem, {[NavBarItemStyle.active]: active})}>
            <div className={NavBarItemStyle.icon}>{icon}</div>
            <span className={NavBarItemStyle.label}>{label}</span>
        </Link>
    )
}