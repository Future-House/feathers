import * as React from 'react';
export interface FtueTooltipProps extends React.ComponentProps<'div'> {
    /**
     * The headline text to display at the top of the tooltip with brand yellow highlight
     */
    headline?: React.ReactNode;
    /**
     * The content to display in the tooltip
     */
    children: React.ReactNode;
    /**
     * Optional click handler for progressing to the next tooltip
     */
    onNext?: () => void;
    /**
     * Whether this is the last tooltip in the series. When true, the arrow button is hidden.
     */
    isLast?: boolean;
    /**
     * Optional button to display on the left side of the same row as the next arrow
     */
    leftButton?: React.ReactNode;
}
declare function FtueTooltip({ className, headline, children, onNext, isLast, leftButton, ...props }: FtueTooltipProps): import("react/jsx-runtime").JSX.Element;
export { FtueTooltip };
//# sourceMappingURL=ftue-tooltip.d.ts.map