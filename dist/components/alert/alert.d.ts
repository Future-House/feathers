import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
    color?: "success" | "warning" | "info" | "error" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare function Alert({ className, variant, color, ...props }: React.ComponentProps<'div'> & VariantProps<typeof alertVariants> & {
    /**
     * The color theme of the alert.
     */
    color?: 'success' | 'warning' | 'info' | 'error';
}): import("react/jsx-runtime").JSX.Element;
declare function AlertTitle({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare function AlertDescription({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
export { Alert, AlertTitle, AlertDescription };
//# sourceMappingURL=alert.d.ts.map