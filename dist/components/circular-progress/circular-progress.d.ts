import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const circularProgressVariants: (props?: ({
    size?: "default" | "sm" | "lg" | "xl" | null | undefined;
    variant?: "default" | "secondary" | "muted" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type CircularProgressProps = React.ComponentProps<'div'> & VariantProps<typeof circularProgressVariants> & {
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
     * @default false
     */
    indeterminate?: boolean;
};
declare function CircularProgress({ className, size, variant, value, thickness, indeterminate, ...props }: CircularProgressProps): import("react/jsx-runtime").JSX.Element;
export { CircularProgress, circularProgressVariants };
//# sourceMappingURL=circular-progress.d.ts.map