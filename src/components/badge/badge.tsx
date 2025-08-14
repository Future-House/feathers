import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
        destructive:
          'border-transparent bg-destructive text-white! [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
      },
      color: {
        success:
          'border-transparent bg-success/10 text-success [a&]:hover:bg-success/15 focus-visible:ring-success/20 shadow-none',
        warning:
          'border-transparent bg-warning/10 text-warning [a&]:hover:bg-warning/15 focus-visible:ring-warning/20 shadow-none',
        info: 'border-transparent bg-info/10 text-info [a&]:hover:bg-info/15 focus-visible:ring-info/20 shadow-none',
        error:
          'border-transparent bg-error/10 text-error [a&]:hover:bg-error/15 focus-visible:ring-error/20 shadow-none',
        purple:
          'border-transparent bg-purple-500/10 text-purple-600 [a&]:hover:bg-purple-500/15 focus-visible:ring-purple-500/20 shadow-none dark:text-purple-400',
        fuchsia:
          'border-transparent bg-fuchsia-500/10 text-fuchsia-600 [a&]:hover:bg-fuchsia-500/15 focus-visible:ring-fuchsia-500/20 shadow-none dark:text-fuchsia-400',
        teal: 'border-transparent bg-teal-500/10 text-teal-600 [a&]:hover:bg-teal-500/15 focus-visible:ring-teal-500/20 shadow-none dark:text-teal-400',
        lime: 'border-transparent bg-lime-500/10 text-lime-600 [a&]:hover:bg-lime-500/15 focus-visible:ring-lime-500/20 shadow-none dark:text-lime-400',
        orange:
          'border-transparent bg-orange-500/10 text-orange-600 [a&]:hover:bg-orange-500/15 focus-visible:ring-orange-500/20 shadow-none dark:text-orange-400',
        rose: 'border-transparent bg-rose-500/10 text-rose-600 [a&]:hover:bg-rose-500/15 focus-visible:ring-rose-500/20 shadow-none dark:text-rose-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Badge({
  className,
  variant,
  color,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
    /**
     * The color theme of the badge.
     */
    color?:
      | 'success'
      | 'warning'
      | 'info'
      | 'error'
      | 'purple'
      | 'fuchsia'
      | 'teal'
      | 'lime'
      | 'orange'
      | 'rose';
  }) {
  const Comp = asChild ? Slot : 'span';

  // If color is specified, use it; otherwise fall back to variant-based color
  const effectiveColor =
    color || (variant === 'destructive' ? 'error' : undefined);

  return (
    <Comp
      data-slot="badge"
      className={cn(
        badgeVariants({
          variant: color ? 'default' : variant,
          color: effectiveColor,
        }),
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
