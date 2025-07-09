import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { toggleVariants } from '@/components/toggle';

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants> & {
    orientation?: 'horizontal' | 'vertical';
  }
>({
  size: 'default',
  variant: 'default',
  orientation: 'horizontal',
});

function ToggleGroup({
  className,
  variant,
  size,
  orientation = 'horizontal',
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-orientation={orientation}
      className={cn(
        'group/toggle-group flex w-fit rounded-md data-[variant=outline]:shadow-xs',
        orientation === 'horizontal' ? 'items-center' : 'flex-col items-start',
        className
      )}
      orientation={orientation}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, orientation }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext);
  const isVertical = context.orientation === 'vertical';

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-orientation={context.orientation}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        'min-w-0 flex-auto shrink-0 rounded-none shadow-none focus:z-10 focus-visible:z-10',
        // Horizontal orientation styles
        !isVertical && [
          'first:rounded-s-md last:rounded-e-md',
          'data-[variant=outline]:border-s-0 data-[variant=outline]:first:border-s',
        ],
        // Vertical orientation styles
        isVertical && [
          'w-full first:rounded-t-md last:rounded-b-md',
          'data-[variant=outline]:border-t-0 data-[variant=outline]:first:border-t',
        ],
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { ToggleGroup, ToggleGroupItem };
