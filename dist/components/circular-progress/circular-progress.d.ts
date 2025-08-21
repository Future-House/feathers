import * as React from 'react';
declare const circularProgressVariants: (props?: ({
    color?: "destructive" | "success" | "warning" | "info" | "primary" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type CircularProgressProps = React.ComponentProps<'div'> & {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     */
    value?: number;
    /**
     * The size of the circular progress indicator.
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * If true, the component is in determinate mode.
     * If false, the component is in indeterminate mode.
     * @default false
     */
    determinate?: boolean;
    /**
     * The color theme of the circular progress.
     * @default 'primary'
     */
    color?: 'primary' | 'success' | 'warning' | 'info' | 'destructive';
    /**
     * Content to display in the center of the circular progress.
     */
    children?: React.ReactNode;
};
declare function CircularProgress({ className, size, value, determinate, color, children, style, ...props }: CircularProgressProps): import("react/jsx-runtime").JSX.Element;
export { CircularProgress, circularProgressVariants };
//# sourceMappingURL=circular-progress.d.ts.map