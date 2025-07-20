import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const circularProgressVariants = cva('inline-block relative', {
  variants: {
    size: {
      sm: 'size-4',
      default: 'size-6',
      lg: 'size-8',
      xl: 'size-12',
    },
    variant: {
      default: 'text-primary',
      secondary: 'text-secondary',
      muted: 'text-muted-foreground',
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
});

export type CircularProgressProps = React.ComponentProps<'div'> &
  VariantProps<typeof circularProgressVariants> & {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     */
    value?: number;
    /**
     * The thickness of the progress ring.
     */
    thickness?: number;
    /**
     * If true, the circular progress is indeterminate.
     * @default false
     */
    indeterminate?: boolean;
  };

function CircularProgress({
  className,
  size,
  variant,
  value = 0,
  thickness = 3.6,
  indeterminate = false,
  ...props
}: CircularProgressProps) {
  const normalizedValue = Math.min(Math.max(value, 0), 100);
  const circumference = 2 * Math.PI * 16; // radius is 16 for a 40x40 viewBox
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset =
    circumference - (normalizedValue / 100) * circumference;

  return (
    <div
      data-slot="circular-progress"
      className={cn(circularProgressVariants({ size, variant, className }))}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={indeterminate ? undefined : normalizedValue}
      {...props}
    >
      <svg
        className="size-full -rotate-90 transform"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="currentColor"
          strokeWidth={thickness}
          className="opacity-20"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="currentColor"
          strokeWidth={thickness}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={indeterminate ? 0 : strokeDashoffset}
          className={cn(
            'transition-all duration-300 ease-in-out',
            indeterminate && 'circular-progress-indeterminate'
          )}
        />
      </svg>
    </div>
  );
}

export { CircularProgress, circularProgressVariants };
