import React from "react";

export type NavBarTabsItemType = {
    url?: string,
    label?: string,
    icon?: React.ReactNode,
}
export type NavBarTabsType = Array<NavBarTabsItemType>
export type NavBarItemPropsType = NavBarTabsItemType & {
    active?: boolean,
}
export type NavBarPropsType = {
    tabs?: NavBarTabsType;
}