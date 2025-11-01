import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "secondary" | "outline" | null | undefined;
    color?: "success" | "warning" | "info" | "error" | "purple" | "fuchsia" | "teal" | "lime" | "orange" | "rose" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare function Badge({ className, variant, color, asChild, ...props }: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
    /**
     * The color theme of the badge.
     */
    color?: 'success' | 'warning' | 'info' | 'error' | 'purple' | 'fuchsia' | 'teal' | 'lime' | 'orange' | 'rose';
}): import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants };
//# sourceMappingURL=badge.d.ts.map