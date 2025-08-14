import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

type TabsVariant = 'default' | 'underlined';

interface TabsContextValue {
  variant: TabsVariant;
}

const TabsContext = React.createContext<TabsContextValue>({
  variant: 'default',
});

interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
  variant?: TabsVariant;
}

function Tabs({ className, variant = 'default', ...props }: TabsProps) {
  return (
    <TabsContext.Provider value={{ variant }}>
      <TabsPrimitive.Root
        data-slot="tabs"
        className={cn('flex flex-col gap-2', className)}
        {...props}
      />
    </TabsContext.Provider>
  );
}

const tabsListVariants = cva('inline-flex items-center text-muted-foreground', {
  variants: {
    variant: {
      default: 'bg-muted h-9 w-fit justify-center rounded-lg p-[3px]',
      underlined: 'w-full p-0 justify-start border-b rounded-none h-10',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const { variant } = React.useContext(TabsContext);

  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 rounded-sm",
  {
    variants: {
      variant: {
        default:
          'data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:ring-ring/50 dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground h-[calc(100%-1px)] flex-1 rounded-md border border-transparent px-2 py-1 transition-[color,box-shadow] focus-visible:ring-[3px] data-[state=active]:shadow-sm',
        underlined:
          'rounded-none rounded-t-xs bg-transparent h-full px-3 py-1.5 data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-b-foreground data-[state=active]:text-foreground text-muted-foreground hover:text-foreground/80 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const { variant } = React.useContext(TabsContext);

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('flex-1 outline-none', className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
