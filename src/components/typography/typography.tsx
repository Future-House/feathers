import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      list: 'my-6 ml-6 list-disc [&>li]:mt-2',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

const variantElementMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  lead: 'p',
  large: 'div',
  small: 'small',
  muted: 'p',
  blockquote: 'blockquote',
  code: 'code',
  list: 'ul',
} as const;

export type TypographyProps = React.ComponentPropsWithoutRef<'div'> &
  VariantProps<typeof typographyVariants> & {
    asChild?: boolean;
  };

function Typography({
  className,
  variant = 'p',
  asChild = false,
  ...props
}: TypographyProps) {
  const Comp = asChild ? Slot : variantElementMap[variant || 'p'];

  return (
    <Comp
      className={cn(typographyVariants({ variant, className }))}
      {...(props as any)}
    />
  );
}

export { Typography, typographyVariants };
