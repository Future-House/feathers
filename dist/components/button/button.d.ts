import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "success" | "warning" | "info" | "error" | "secondary" | "outline" | "ghost" | "brand" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type ButtonProps = React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    fullWidth?: boolean;
    loading?: boolean;
};
declare function Button({ className, variant, size, asChild, fullWidth, loading, children, disabled, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export { Button, buttonVariants };
//# sourceMappingURL=button.d.ts.map