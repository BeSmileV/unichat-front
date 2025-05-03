'use client'

import {ChevronRightSVG} from "@/shared/assets";
import {ActionFieldPropsType} from "../types";
import {ActionFieldStyle} from "../styles";

export function ActionField({title, icon, subtitle, onClick}: ActionFieldPropsType) {
    return (
        <button onClick={onClick} className={ActionFieldStyle.ActionField}>
            <div className={ActionFieldStyle.icon}>{icon}</div>
            <div className={ActionFieldStyle.content}>
                <h4 className={ActionFieldStyle.title}>{title}</h4>
                <h6 className={ActionFieldStyle.subtitle}>{subtitle}</h6>
            </div>
            <div className={ActionFieldStyle.chevron}><ChevronRightSVG/></div>
        </button>
    )
}