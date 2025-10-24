import * as React from 'react';
declare const variantElementMap: {
    readonly h1: "h1";
    readonly h2: "h2";
    readonly h3: "h3";
    readonly h4: "h4";
    readonly h5: "h5";
    readonly h6: "h6";
    readonly p: "p";
    readonly lead: "p";
    readonly large: "p";
    readonly small: "p";
    readonly muted: "p";
    readonly label: "label";
    readonly code: "code";
    readonly blockquote: "blockquote";
    readonly list: "ul";
    readonly orderedList: "ol";
};
export type TypographyVariant = keyof typeof variantElementMap;
export type TypographyProps = React.ComponentPropsWithoutRef<'div'> & {
    variant?: TypographyVariant;
    asChild?: boolean;
};
declare function Typography({ className, variant, asChild, ...props }: TypographyProps): import("react/jsx-runtime").JSX.Element;
export { Typography };
//# sourceMappingURL=typography.d.ts.map