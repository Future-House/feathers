import * as React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const circularProgressVariants = cva(
  'relative inline-flex items-center justify-center',
  {
    variants: {
      color: {
        primary: 'text-primary',
        success: 'text-success',
        warning: 'text-warning',
        info: 'text-info',
        destructive: 'text-destructive',
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  }
);

export type CircularProgressProps = React.ComponentProps<'div'> & {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value?: number;
  /**
   * The size of the circular progress indicator.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * If true, the component is in determinate mode.
   * If false, the component is in indeterminate mode.
   * @default false
   */
  determinate?: boolean;
  /**
   * The color theme of the circular progress.
   * @default 'primary'
   */
  color?: 'primary' | 'success' | 'warning' | 'info' | 'destructive';
  /**
   * Content to display in the center of the circular progress.
   */
  children?: React.ReactNode;
};

function CircularProgress({
  className,
  size = 'md',
  value = 0,
  determinate = false,
  color = 'primary',
  children,
  style,
  ...props
}: CircularProgressProps) {
  const normalizedValue = Math.min(Math.max(value || 0, 0), 100);

  // Calculate size-based dimensions
  const sizeMap = {
    sm: 24,
    md: 40,
    lg: 64,
  };

  const pixelSize = sizeMap[size];
  const strokeWidth = 6; // Fixed thickness
  const radius = (pixelSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = determinate
    ? circumference - (normalizedValue / 100) * circumference
    : circumference * 0.75; // For indeterminate, show partial arc

  const viewBox = `0 0 ${pixelSize} ${pixelSize}`;

  const combinedStyle = {
    width: pixelSize,
    height: pixelSize,
    ...style,
  };

  return (
    <div
      data-slot="circular-progress"
      className={cn(circularProgressVariants({ color }), className)}
      style={combinedStyle}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={determinate ? normalizedValue : undefined}
      {...props}
    >
      <svg
        width={pixelSize}
        height={pixelSize}
        viewBox={viewBox}
        style={{ transform: 'rotate(-90deg)' }}
        className="relative"
      >
        {/* Background circle */}
        <circle
          r={radius}
          cx={pixelSize / 2}
          cy={pixelSize / 2}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset="0"
          className="stroke-current opacity-20"
        />
        {/* Progress circle */}
        <circle
          r={radius}
          cx={pixelSize / 2}
          cy={pixelSize / 2}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          fill="transparent"
          className={cn(
            'stroke-current transition-all duration-300 ease-in-out',
            !determinate && 'circular-progress-indeterminate'
          )}
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}

export { CircularProgress, circularProgressVariants };
