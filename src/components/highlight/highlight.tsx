import * as React from 'react';
import { cn } from '@/lib/utils';

export type HighlightVariant =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;

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

const spreadValues: Record<HighlightSpread, string> = {
  none: '0',
  sm: '-4px',
  md: '-8px',
  lg: '-12px',
  xl: '-16px',
};

const Highlight = React.forwardRef<HTMLSpanElement, HighlightProps>(
  (
    {
      children,
      variant = 1,
      spread,
      spreadX,
      spreadY,
      spreadTop,
      spreadBottom,
      spreadLeft,
      spreadRight,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const variantPath = `/src/components/highlight/variants/${variant}.svg`;

    // Determine spread values for each direction
    const getSpreadValue = (
      direction: 'top' | 'bottom' | 'left' | 'right'
    ): string => {
      // Specific direction takes precedence
      if (direction === 'top' && spreadTop)
        return spreadValues[spreadTop] || '0';
      if (direction === 'bottom' && spreadBottom)
        return spreadValues[spreadBottom] || '0';
      if (direction === 'left' && spreadLeft)
        return spreadValues[spreadLeft] || '0';
      if (direction === 'right' && spreadRight)
        return spreadValues[spreadRight] || '0';

      // Then check axis-specific
      if ((direction === 'left' || direction === 'right') && spreadX)
        return spreadValues[spreadX] || '0';
      if ((direction === 'top' || direction === 'bottom') && spreadY)
        return spreadValues[spreadY] || '0';

      // Finally check general spread
      if (spread) return spreadValues[spread] || '0';

      return '0';
    };

    const spreadTopValue = getSpreadValue('top');
    const spreadBottomValue = getSpreadValue('bottom');
    const spreadLeftValue = getSpreadValue('left');
    const spreadRightValue = getSpreadValue('right');

    const inlineStyle: React.CSSProperties = {
      ...style,
      // @ts-expect-error CSS custom properties
      '--highlight-variant': `url(${variantPath})`,
      '--highlight-spread-top': spreadTopValue,
      '--highlight-spread-bottom': spreadBottomValue,
      '--highlight-spread-left': spreadLeftValue,
      '--highlight-spread-right': spreadRightValue,
    };

    return (
      <span
        ref={ref}
        className={cn('highlight', className)}
        style={inlineStyle}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Highlight.displayName = 'Highlight';

export { Highlight };
