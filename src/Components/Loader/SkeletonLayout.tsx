import React from "react";
import { SingleSkeleton } from "./SingleSkeleton";
import { SkeletonLayoutProps, SingleSkeletonProps } from "./types";

// Type guard to check if item is SkeletonLayoutProps
function isSkeletonLayout(item: SkeletonLayoutProps | SingleSkeletonProps): item is SkeletonLayoutProps {
    return 'items' in item;
}
export const SkeletonLayout = (props: SkeletonLayoutProps) => {
    const { items, direction, spacing, containerStyles } = props;
    return (
        <div className="skeleton-layout" style={{ display: 'flex', flexDirection: direction, gap: spacing, ...containerStyles }}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {isSkeletonLayout(item) ? <SkeletonLayout {...item} /> : <SingleSkeleton {...item} />}
                </React.Fragment>
            ))}
        </div>
    )
}


