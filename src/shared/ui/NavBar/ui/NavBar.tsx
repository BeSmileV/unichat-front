'use client'

import {usePathname} from "next/navigation";
import {NavBarPropsType} from "../types";
import {NavBarStyle} from "../styles";
import {NavBarItem} from "./NavBarItem";

export function NavBar({tabs = []}: NavBarPropsType) {
    const pathname = usePathname()

    const isActive = (url?: string) => {
        return !!(pathname && url) && pathname.startsWith(url)
    }

    return (
        <div className={NavBarStyle.NavBar}>
            {tabs.map((tab, idx) => <NavBarItem {...tab} active={isActive(tab.url)} key={idx}/>)}
        </div>
    )
}