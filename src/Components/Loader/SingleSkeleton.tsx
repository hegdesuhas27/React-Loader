import { useMemo } from "react";
import { SingleSkeletonProps } from "./types";

export const SingleSkeleton = (props: SingleSkeletonProps & { children?: React.ReactNode }) => {
    const { variant, height = 'auto', width = 'fit-content', style: skeletonStyles, customComponent, children } = props;
    if (customComponent) {
        return customComponent;
    }

    const styleToUse = useMemo(() => {
        let commonStyle = {
            height,
            width,
            borderRadius: '4px',
            ...skeletonStyles
        }
        if (variant === 'circle') {
            commonStyle.borderRadius = '50%';
        }
        if (variant === 'rect') {
            commonStyle.borderRadius = '0';
        }
        return commonStyle;
    }, [height, width, variant, skeletonStyles])


    return <div className="skeleton-single" style={styleToUse}><div className="invisible-content">{children}</div></div>
}
