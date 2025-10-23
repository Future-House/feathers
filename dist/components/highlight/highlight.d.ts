import * as React from 'react';
export type HighlightVariant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
export type HighlightSpread = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export interface HighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * The content to highlight
     */
    children: React.ReactNode;
    /**
     * The highlight variant (1-20)
     * @default 1
     */
    variant?: HighlightVariant;
    /**
     * The spread/padding around the text
     * @default 'none'
     */
    spread?: HighlightSpread;
    /**
     * Horizontal spread/padding
     */
    spreadX?: HighlightSpread;
    /**
     * Vertical spread/padding
     */
    spreadY?: HighlightSpread;
    /**
     * Top spread/padding
     */
    spreadTop?: HighlightSpread;
    /**
     * Bottom spread/padding
     */
    spreadBottom?: HighlightSpread;
    /**
     * Left spread/padding
     */
    spreadLeft?: HighlightSpread;
    /**
     * Right spread/padding
     */
    spreadRight?: HighlightSpread;
    /**
     * Additional className for the component
     * Use Tailwind utilities like 'after:bg-red-500' to color the highlight
     */
    className?: string;
}
declare const Highlight: React.ForwardRefExoticComponent<HighlightProps & React.RefAttributes<HTMLSpanElement>>;
export { Highlight };
//# sourceMappingURL=highlight.d.ts.map