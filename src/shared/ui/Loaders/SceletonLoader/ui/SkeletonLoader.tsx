import clsx from "clsx";
import {SkeletonLoaderStyle} from '../styles'

export function SkeletonLoader({additionStyles = []}: { additionStyles?: string | string[] }) {
    return (
        <div className={clsx(
            SkeletonLoaderStyle.loaderContainer,
            SkeletonLoaderStyle.skeletonLoader,
            additionStyles
        )}></div>
    )
}