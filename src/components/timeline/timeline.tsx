import * as React from 'react';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('w-full space-y-4', className)} {...props} />
  )
);
Timeline.displayName = 'Timeline';

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  iconElement?: React.ReactNode;
  isCollapsible?: boolean;
  isCollapsed?: boolean;
  onToggle?: () => void;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  (
    {
      className,
      iconElement,
      isCollapsible = false,
      isCollapsed = false,
      onToggle,
      children,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        'relative border-l-2 border-gray-200 pb-8 pl-8 dark:border-gray-700',
        className
      )}
      {...props}
    >
      {iconElement && (
        <div className="absolute top-4 left-[-13px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800">
          {iconElement}
        </div>
      )}
      <div className="space-y-2">
        {isCollapsible && onToggle ? (
          <button
            onClick={onToggle}
            className="-m-2 flex w-full items-center justify-between rounded-md p-2 text-left hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <div className="flex-1">
              {React.Children.map(children, child => {
                if (
                  React.isValidElement(child) &&
                  child.type === TimelineHeading
                ) {
                  return child;
                }
                return null;
              })}
            </div>
            <ChevronDownIcon
              className={cn(
                'h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 dark:text-gray-400',
                isCollapsed && 'rotate-180'
              )}
            />
          </button>
        ) : (
          React.Children.map(children, child => {
            if (React.isValidElement(child) && child.type === TimelineHeading) {
              return child;
            }
            return null;
          })
        )}
        {(!isCollapsible || !isCollapsed) && (
          <div className="space-y-2">
            {React.Children.map(children, child => {
              if (
                React.isValidElement(child) &&
                child.type !== TimelineHeading
              ) {
                return child;
              }
              return null;
            })}
          </div>
        )}
      </div>
    </div>
  )
);
TimelineItem.displayName = 'TimelineItem';

interface TimelineHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const TimelineHeading = React.forwardRef<
  HTMLHeadingElement,
  TimelineHeadingProps
>(({ className, level = 3, ...props }, ref) => {
  const Component = `h${level}` as const;

  return (
    <Component
      ref={ref}
      className={cn(
        'text-sm font-medium text-gray-900 dark:text-gray-100',
        className
      )}
      {...props}
    />
  );
});
TimelineHeading.displayName = 'TimelineHeading';

export { Timeline, TimelineItem, TimelineHeading };
