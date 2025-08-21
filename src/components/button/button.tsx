import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader } from '@/icons';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-primary/10 text-primary hover:bg-primary/15 active:bg-primary/20 dark:bg-primary/15 dark:hover:bg-primary/20 dark:active:bg-primary/25',
        destructive:
          'bg-destructive/10 text-destructive hover:bg-destructive/15 active:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/15 dark:hover:bg-destructive/20 dark:active:bg-destructive/25',
        success:
          'bg-success/10 text-success hover:bg-success/15 active:bg-success/20 focus-visible:ring-success/20 dark:focus-visible:ring-success/40 dark:bg-success/15 dark:hover:bg-success/20 dark:active:bg-success/25',
        warning:
          'bg-warning/10 text-warning hover:bg-warning/15 active:bg-warning/20 focus-visible:ring-warning/20 dark:focus-visible:ring-warning/40 dark:bg-warning/15 dark:hover:bg-warning/20 dark:active:bg-warning/25',
        info: 'bg-info/10 text-info hover:bg-info/15 active:bg-info/20 focus-visible:ring-info/20 dark:focus-visible:ring-info/40 dark:bg-info/15 dark:hover:bg-info/20 dark:active:bg-info/25',
        error:
          'bg-error/10 text-error hover:bg-error/15 active:bg-error/20 focus-visible:ring-error/20 dark:focus-visible:ring-error/40 dark:bg-error/15 dark:hover:bg-error/20 dark:active:bg-error/25',
        outline:
          'border border-input bg-transparent text-foreground hover:bg-accent/10 active:bg-accent/15 dark:border-input dark:hover:bg-accent/10 dark:active:bg-accent/15',
        secondary:
          'bg-secondary/60 text-secondary-foreground hover:bg-secondary/70 active:bg-secondary/80 dark:bg-secondary/40 dark:hover:bg-secondary/50 dark:active:bg-secondary/60',
        ghost:
          'text-foreground hover:bg-accent/10 hover:text-accent-foreground active:bg-accent/15 dark:hover:bg-accent/10 dark:active:bg-accent/15',
        link: 'text-primary underline-offset-4 hover:underline',
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
