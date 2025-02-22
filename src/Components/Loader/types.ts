export type SingleSkeletonProps = {
    /**
     * The variant of the skeleton.
     * @default 'text'
     * you can use custom variant to render a custom skeleton/any random shape or component.
     */
    variant?: 'text' | 'circle' | 'rect' | 'custom'
    /**
     * The custom component to render for the skeleton.
     * if you pass customComponent, variant will be ignored.
     * @default null
     * 
     */
    customComponent?: React.ReactNode;
    /**
     * The height of the skeleton.
     * @default 'auto'
     */
    height?: number | string;
    /**
     * The width of the skeleton.
     * @default 'auto'
     */
    width?: number | string;
    /**
     * The styles for the skeleton.
     * You can use this to override the default styles of the skeleton. 
     * for example:
     * {
     *  borderRadius: '50%',
     *  backgroundColor: 'red',
     * }
     */
    style?: React.CSSProperties;
}

export type SkeletonLayoutProps = {
    /**
     * The direction of the skeleton.
     * @default 'column'
     */
    direction?: 'row' | 'column';
    /**
     * The items to render in the skeleton.
     */
    items: (SingleSkeletonProps & { height: number | string, width: number | string } | SkeletonLayoutProps)[];
    /**
     * The spacing between the items.
     * @default 0
     */
    spacing?: number | string;
    /**
     * The styles for the container.
     * for example: 
     * {
     *  display: 'flex',
     *  flexDirection: 'column',
     *  gap: '10px',
     * }
     */
    containerStyles?: React.CSSProperties;
}

export type SkeletonLoaderProps = SingleSkeletonProps & {
    /**
     * The loading state of the skeleton.
     * @default false
     */
    loading: boolean;
    /**
     * The layout of the skeleton.
     * if you pass layout we will user layout to render the skeleton.
     * if you pass children we will use children to render the skeleton.
     * if you pass both, children will be ignored.
     */
    layout?: SkeletonLayoutProps;

    /**
     * The children of the skeleton.
     * this will be used to render the skeleton only if layout,height or width is not passed.
     */
    children?: React.ReactNode;
}