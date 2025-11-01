import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Renew as Loader } from '@/icons';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 dark:bg-primary dark:hover:bg-primary/90 dark:active:bg-primary/80',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/80 dark:bg-secondary dark:hover:bg-secondary/90 dark:active:bg-secondary/80',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive dark:hover:bg-destructive/90 dark:active:bg-destructive/80',
        outline:
          'border border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent/80 dark:border-input dark:hover:bg-accent dark:active:bg-accent/80',
        ghost:
          'text-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent/80 dark:hover:bg-accent dark:active:bg-accent/80',
        link: 'text-primary underline-offset-4 hover:underline',
        success:
          'bg-success text-success-foreground hover:bg-success/90 active:bg-success/80 focus-visible:ring-success/20 dark:focus-visible:ring-success/40 dark:bg-success dark:hover:bg-success/90 dark:active:bg-success/80',
        warning:
          'bg-warning text-warning-foreground hover:bg-warning/90 active:bg-warning/80 focus-visible:ring-warning/20 dark:focus-visible:ring-warning/40 dark:bg-warning dark:hover:bg-warning/90 dark:active:bg-warning/80',
        info: 'bg-info text-info-foreground hover:bg-info/90 active:bg-info/80 focus-visible:ring-info/20 dark:focus-visible:ring-info/40 dark:bg-info dark:hover:bg-info/90 dark:active:bg-info/80',
        error:
          'bg-error text-error-foreground hover:bg-error/90 active:bg-error/80 focus-visible:ring-error/20 dark:focus-visible:ring-error/40 dark:bg-error dark:hover:bg-error/90 dark:active:bg-error/80',
        brand:
          'bg-brand text-primary hover:bg-brand/90 active:bg-brand/80 dark:bg-brand dark:text-secondary dark:hover:bg-brand/90 dark:active:bg-brand/80',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      fullWidth: false,
    },
  }
);

export type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    fullWidth?: boolean;
    loading?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  fullWidth = false,
  loading = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  if (asChild && loading) {
    console.warn('Loading state is not supported when asChild is true');
  }

  const buttonContent = (
    <>
      {!asChild && loading && <Loader className="animate-spin" />}
      {children}
    </>
  );

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className, fullWidth }))}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {asChild ? children : buttonContent}
    </Comp>
  );
}

export { Button, buttonVariants };
