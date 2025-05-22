'use client'

import {useEffect, useState} from "react";
import Link from "next/link";
import clsx from "clsx";
import {ClassroomCardPropsType} from "../types";
import {ClassroomCardStyle} from "../styles";
import {getHashColor} from "../lib";

export function ClassroomCard(props: ClassroomCardPropsType) {
    const {href, description, name, avatar, groupName, width = 'fixed'} = props;
    const [hashColor, setHashColor] = useState<string | undefined>(undefined)

    useEffect(() => {
        setHashColor(getHashColor(props));
    }, []);

    const getAvatar = () => {
        return avatar
            ? <img src={avatar} className={ClassroomCardStyle.avatar}/>
            : <div style={{backgroundColor: hashColor}} className={ClassroomCardStyle.avatar}/>
    }

    const cardContent = (
        <>
            {getAvatar()}
            <div className={ClassroomCardStyle.main}>
                <h6 className={ClassroomCardStyle.title}>{name}</h6>
                <span className={ClassroomCardStyle.description}>{description}</span>
                <span className={ClassroomCardStyle.groupName}>{groupName}</span>
            </div>
        </>
    );

    const className = clsx(ClassroomCardStyle.ClassroomCard, {
        [ClassroomCardStyle.fill]: width === 'fill'
    });

    if (href) {
        return <Link href={href} className={className}>{cardContent}</Link>
    } else {
        return <div className={className}>{cardContent}</div>
    }
}
