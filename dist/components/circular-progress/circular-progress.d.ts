import * as React from 'react';
declare const circularProgressVariants: (props?: import("class-variance-authority/dist/types").ClassProp | undefined) => string;
export type CircularProgressProps = React.ComponentProps<'div'> & {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     */
    value?: number;
    /**
     * The thickness of the progress ring.
     */
    thickness?: number;
    /**
     * If true, the circular progress is indeterminate.
     * @default true
     */
    indeterminate?: boolean;
    /**
     * If true, shows the progress value as a label in the center of the circle.
     * @default false
     */
    showLabel?: boolean;
    /**
     * Additional CSS classes to apply to the label.
     */
    labelClassName?: string;
    /**
     * Custom render function for the label. Receives the current value.
     * If not provided, displays the value as a percentage.
     */
    renderLabel?: (value: number) => React.ReactNode;
    /**
     * The size of the circular progress indicator.
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';
};
declare function CircularProgress({ className, size, value, thickness, indeterminate, showLabel, labelClassName, renderLabel, ...props }: CircularProgressProps): import("react/jsx-runtime").JSX.Element;
export { CircularProgress, circularProgressVariants };
//# sourceMappingURL=circular-progress.d.ts.map