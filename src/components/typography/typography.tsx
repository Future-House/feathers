import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

const variantElementMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  lead: 'p',
  large: 'p',
  small: 'p',
  muted: 'p',
  label: 'label',
  code: 'code',
  blockquote: 'blockquote',
  list: 'ul',
  orderedList: 'ol',
} as const;

const variantClassMap: Partial<Record<keyof typeof variantElementMap, string>> =
  {
    lead: 'large',
    large: 'large',
    small: 'small',
    muted: 'text-muted-foreground',
  };

export type TypographyVariant = keyof typeof variantElementMap;

export type TypographyProps = React.ComponentPropsWithoutRef<'div'> & {
  variant?: TypographyVariant;
  asChild?: boolean;
};

function Typography({
  className,
  variant = 'p',
  asChild = false,
  ...props
}: TypographyProps) {
  const Comp = asChild ? Slot : variantElementMap[variant || 'p'];
  const variantClass = variant ? variantClassMap[variant] : undefined;

  return <Comp className={cn(variantClass, className)} {...(props as any)} />;
}

export { Typography };
