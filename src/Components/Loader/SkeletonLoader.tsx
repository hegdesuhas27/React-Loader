import { SkeletonLoaderProps } from "./types";
import { SkeletonLayout } from "./SkeletonLayout";
import { SingleSkeleton } from "./SingleSkeleton";
import './skeletonLoaderStyles.css'
/**
 * SkeletonLoader is a component that renders a skeleton using layout/height or width/inherits height and width from child.
 * 
 * if layout is passed, it will render the skeleton using the layout.
 * if height or width is passed, it will render the skeleton using the height or width.
 * if children is passed, it will render the skeleton using the children.

* so priority is layout > height > width > children(adopts height and width from child).
 * 
 * @param props - The props for the SkeletonLoader component.
 * @returns A SkeletonLoader component.
 */
export const SkeletonLoader = (props: SkeletonLoaderProps) => {
    const { layout, children, loading, ...rest } = props;
    /**
     * The children are rendered but hidden when loading, allowing child components to initialize and make API calls.
     * The skeleton loader is shown on top while the children's visibility is controlled via opacity.
     * This provides a smoother loading experience and prevents re-mounting of child components.
     */


    return (
        <>
            {loading ? 
            <div className={"skeleton-loader"} style={{ visibility: loading ? 'visible' : 'hidden' }}>
                {!layout?.items.length ?
                    <SingleSkeleton {...rest}>{children}</SingleSkeleton>
                    : <SkeletonLayout {...layout} />
                }
            </div> : null}
            <div style={{ display: loading ? 'none' : 'block' }}>{children}</div>
        </>
    )
}