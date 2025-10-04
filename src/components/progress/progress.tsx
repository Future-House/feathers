import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  const isIndeterminate = value === null || value === undefined;

  return (
    <ProgressPrimitive.Root
      ref={ref}
      value={isIndeterminate ? undefined : value}
      className={cn(
        'bg-secondary relative h-4 w-full overflow-hidden rounded-full',
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          'bg-primary h-full flex-1 transition-all',
          isIndeterminate
            ? 'w-[40%] animate-[progress-indeterminate_1.5s_ease-in-out_infinite]'
            : 'w-full'
        )}
        style={
          isIndeterminate
            ? undefined
            : { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
