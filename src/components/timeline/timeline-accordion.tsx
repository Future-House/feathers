import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

const TimelineAccordion = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Root>,
  AccordionPrimitive.AccordionMultipleProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn('w-full space-y-4', className)}
    {...props}
  />
));
TimelineAccordion.displayName = 'TimelineAccordion';

interface TimelineItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  number?: string | number;
}

const TimelineItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  TimelineItemProps
>(({ className, number, children, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      'relative border-l-2 border-gray-200 pb-8 pl-8 dark:border-gray-700',
      className
    )}
    {...props}
  >
    {number && (
      <div className="absolute top-[6px] left-[-13px] flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-medium text-white dark:bg-blue-600">
        {number}
      </div>
    )}
    {children}
  </AccordionPrimitive.Item>
));
TimelineItem.displayName = 'TimelineItem';

interface TimelineTriggerProps
  extends Omit<
    React.ComponentProps<typeof AccordionPrimitive.Trigger>,
    'title'
  > {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}

const TimelineTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  TimelineTriggerProps
>(({ className, title, subtitle, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-start justify-between gap-4 rounded-md p-2 text-left transition-all outline-none hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:focus-visible:ring-blue-400 [&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
        )}
      </div>
      <ChevronDownIcon className="h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 dark:text-gray-400" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
TimelineTrigger.displayName = 'TimelineTrigger';

const TimelineContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    {...props}
  >
    <div className={cn('pt-2 pb-4', className)}>{children}</div>
  </AccordionPrimitive.Content>
));
TimelineContent.displayName = 'TimelineContent';

export { TimelineAccordion, TimelineItem, TimelineTrigger, TimelineContent };
