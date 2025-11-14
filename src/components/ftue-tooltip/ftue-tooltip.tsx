import * as React from 'react';

import { cn } from '@/lib/utils';
import { ArrowRight } from '@/icons';

export interface FtueTooltipProps extends React.ComponentProps<'div'> {
  /**
   * The headline text to display at the top of the tooltip
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

function FtueTooltip({
  className,
  headline,
  children,
  onNext,
  isLast = false,
  leftButton,
  ...props
}: FtueTooltipProps) {
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only progress if onNext is provided, not last, and click is not on buttons
    if (
      onNext &&
      !isLast &&
      !(e.target as HTMLElement).closest('[data-slot="ftue-tooltip-next"]') &&
      !(e.target as HTMLElement).closest(
        '[data-slot="ftue-tooltip-left-button"]'
      )
    ) {
      onNext();
    }
  };

  const showArrow = onNext && !isLast;
  const showButtonRow = showArrow || leftButton;

  return (
    <div
      data-slot="ftue-tooltip"
      className={cn(
        'absolute z-50 w-[284px] rounded-[4px] bg-white p-4 shadow-lg',
        className
      )}
      {...props}
    >
      {/* Triangle pointing upward */}
      <div
        data-slot="ftue-tooltip-arrow"
        className="absolute -top-2 left-1/2 -translate-x-1/2"
      >
        <div className="h-0 w-0 border-x-[8px] border-b-[8px] border-x-transparent border-b-white" />
      </div>

      {/* Content */}
      <div
        className={cn('relative space-y-2', showArrow && 'cursor-pointer')}
        onClick={handleContentClick}
      >
        {headline && (
          <div
            data-slot="ftue-tooltip-headline"
            className="inline-block py-1 text-sm font-bold text-black"
          >
            {headline}
          </div>
        )}
        <div>{children}</div>

        {/* Button row with optional left button and next arrow */}
        {showButtonRow && (
          <div className="flex items-center justify-between pt-2">
            <div
              data-slot="ftue-tooltip-left-button"
              onClick={e => e.stopPropagation()}
              className="[&_button]:border [&_button]:border-[1px] [&_button]:!border-black [&_button]:text-sm [&_button]:font-normal [&_button]:!text-black [&_button]:dark:!border-black [&_button]:dark:!text-black [&_button]:dark:hover:!text-white"
            >
              {leftButton}
            </div>
            {showArrow && (
              <button
                data-slot="ftue-tooltip-next"
                onClick={e => {
                  e.stopPropagation();
                  onNext();
                }}
                className="flex items-center justify-center text-black transition-opacity hover:opacity-70"
                aria-label="Next"
              >
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export { FtueTooltip };
