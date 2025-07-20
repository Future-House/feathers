import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground',
        destructive:
          'text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90',
      },
      color: {
        success:
          'text-green-600 bg-green-600/10 dark:bg-green-600/20 border-green-600/20 dark:border-green-600/30 [&>svg]:text-current *:data-[slot=alert-description]:text-green-600/90',
        warning:
          'text-amber-600 bg-amber-600/10 dark:bg-amber-600/20 border-amber-600/20 dark:border-amber-600/30 [&>svg]:text-current *:data-[slot=alert-description]:text-amber-600/90',
        info: 'text-blue-600 bg-blue-600/10 dark:bg-blue-600/20 border-blue-600/20 dark:border-blue-600/30 [&>svg]:text-current *:data-[slot=alert-description]:text-blue-600/90',
        destructive:
          'text-red-600 bg-red-600/10 dark:bg-red-600/20 border-red-600/20 dark:border-red-600/30 [&>svg]:text-current *:data-[slot=alert-description]:text-red-600/90',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Alert({
  className,
  variant,
  color,
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof alertVariants> & {
    /**
     * The color theme of the alert.
     */
    color?: 'success' | 'warning' | 'info' | 'destructive';
  }) {
  // If color is specified, use it; otherwise fall back to variant-based color
  const effectiveColor =
    color || (variant === 'destructive' ? 'destructive' : undefined);

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(
        alertVariants({
          variant: color ? 'default' : variant,
          color: effectiveColor,
        }),
        className
      )}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        'col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight',
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed',
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
