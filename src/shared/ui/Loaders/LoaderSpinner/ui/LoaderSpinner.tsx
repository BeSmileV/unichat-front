import {LoaderSpinnerPropsType} from "../types";
import {LoaderSpinnerStyle} from "../styles";

export default function LoaderSpinner({
                                          loadingPercentage = 25,
                                          controlProgress = false,
                                      }: LoaderSpinnerPropsType) {
    const radius = 24;
    const strokeWidth = 6;

    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (loadingPercentage / 100) * circumference;

    return (
        <svg
            className={`${LoaderSpinnerStyle.loaderSpinner} ${!controlProgress ? LoaderSpinnerStyle.addAnimation : ''}`}
            viewBox={`0 0 ${2 * (radius + strokeWidth / 2)} ${2 * (radius + strokeWidth / 2)}`}
        >
            <circle
                cx={radius + strokeWidth / 2}
                cy={radius + strokeWidth / 2}
                r={radius}
                stroke="#e6e6e6"
                strokeWidth={strokeWidth}
                fill="none"
                className={LoaderSpinnerStyle.loaderBackground}
            />

            <circle
                cx={radius + strokeWidth / 2}
                cy={radius + strokeWidth / 2}
                r={radius}
                stroke="#00aaff"
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                style={{transition: 'stroke-dashoffset 0.5s ease'}}
                strokeLinecap="round"
                className={LoaderSpinnerStyle.loaderProgress}
            />
        </svg>
    )
}