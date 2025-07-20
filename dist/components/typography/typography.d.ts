import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const typographyVariants: (props?: ({
    variant?: "blockquote" | "code" | "h1" | "h2" | "h3" | "h4" | "p" | "small" | "list" | "muted" | "large" | "lead" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type TypographyProps = React.ComponentPropsWithoutRef<'div'> & VariantProps<typeof typographyVariants> & {
    asChild?: boolean;
};
declare function Typography({ className, variant, asChild, ...props }: TypographyProps): import("react/jsx-runtime").JSX.Element;
export { Typography, typographyVariants };
//# sourceMappingURL=typography.d.ts.map