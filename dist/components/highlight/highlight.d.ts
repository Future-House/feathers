import * as React from 'react';
export type HighlightVariant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
export interface HighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * The content to highlight
     */
    children: React.ReactNode;
    /**
     * The highlight variant (1-20) - different SVG shapes
     * @default 1
     */
    variant?: HighlightVariant;
    /**
     * Additional className for styling
     * Use Tailwind utilities like:
     * - 'after:bg-red-500' for solid colors
     * - 'after:bg-gradient-to-r after:from-yellow-300 after:to-pink-500' for gradients
     * - 'after:-inset-2' for padding/spread around the text
     * - Combine with other utilities like 'after:opacity-50', 'after:rotate-12', etc.
     */
    className?: string;
}
declare const Highlight: React.ForwardRefExoticComponent<HighlightProps & React.RefAttributes<HTMLSpanElement>>;
export { Highlight };
//# sourceMappingURL=highlight.d.ts.map