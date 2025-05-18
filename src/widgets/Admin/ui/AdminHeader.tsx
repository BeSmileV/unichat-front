'use client'

import {Button} from "indicator-ui";
import {useAdminHeader} from "../hooks";
import {AdminHeaderStyle} from "../styles";

export function AdminHeader() {
    const {pageType, url} = useAdminHeader()

    const getCreateButton = () => {
        const customComponent = <a href={url}/>
        switch (pageType) {
            case 'institutes':
                return <Button customComponent={customComponent} text={'Создать институт'} hierarchy={'secondary-color'}/>
            case 'departments':
                return <Button customComponent={customComponent} text={'Создать кафедру'} hierarchy={'secondary-color'}/>
            case 'groups':
                return <Button customComponent={customComponent} text={'Создать группу'} hierarchy={'secondary-color'}/>
        }
    }

    return (
        <div className={AdminHeaderStyle.AdminHeader}>
            {getCreateButton()}
        </div>
    )
}