'use client'

import Link from "next/link";
import {saveFormatDate} from "indicator-ui";
import clsx from "clsx";
import {Settings01SVG} from "@/shared/assets";
import {TaskCardPropsType} from "../types";
import {TaskCardStyle} from "../styles";

export function TaskCard(props: TaskCardPropsType) {
    const {href, name, deadline} = props;
    const getDeadline = () => saveFormatDate(deadline, {to: 'HH:mm dd.MM.yyyy'})

    const cardContent = (
        <>
            <div className={TaskCardStyle.icon}><Settings01SVG/></div>
            <div className={TaskCardStyle.main}>
                <h6 className={TaskCardStyle.title}>{name}</h6>
                <span className={TaskCardStyle.deadline}>До: {getDeadline()}</span>
            </div>
        </>
    );

    const className = clsx(TaskCardStyle.TaskCard);

    if (href) {
        return <Link href={href} className={className}>{cardContent}</Link>
    } else {
        return <div className={className}>{cardContent}</div>
    }
}
