import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A tooltip component built on top of Radix UI Tooltip primitive. Provides contextual information when users hover or focus on an element.

## Radix UI Tooltip Props

The tooltip components expose all Radix UI Tooltip primitive props:

### TooltipProvider Props
- **delayDuration**: \`number\` - The delay in milliseconds before showing the tooltip (default: 0)
- **skipDelayDuration**: \`number\` - How long a user has to wait before tooltip can be shown again
- **disableHoverableContent**: \`boolean\` - Disable hovering over tooltip content

### Tooltip (Root) Props  
- **defaultOpen**: \`boolean\` - The open state when initially rendered
- **open**: \`boolean\` - Controlled open state
- **onOpenChange**: \`(open: boolean) => void\` - Callback when open state changes

### TooltipTrigger Props
- **asChild**: \`boolean\` - Render as a different element/component
- All standard button/focusable element props

### TooltipContent Props
- **side**: \`"top" | "right" | "bottom" | "left"\` - Preferred placement side
- **sideOffset**: \`number\` - Offset from the trigger (default: 0)
- **align**: \`"start" | "center" | "end"\` - Alignment relative to trigger
- **alignOffset**: \`number\` - Offset from the alignment axis  
- **avoidCollisions**: \`boolean\` - Avoid collisions with viewport edges
- **collisionBoundary**: \`Element | Element[]\` - Collision boundary elements
- **collisionPadding**: \`number | { top?: number; right?: number; bottom?: number; left?: number }\` - Padding from collision boundary
- **arrowPadding**: \`number\` - Padding between arrow and content corners
- **sticky**: \`"partial" | "always"\` - Stickiness when trigger moves
- **hideWhenDetached**: \`boolean\` - Hide when trigger becomes detached
        `,
      },
    },
  },
  tags: [],
  argTypes: {
    // Tooltip Root props
    defaultOpen: {
      control: 'boolean',
      description: 'The open state when initially rendered',
      table: {
        category: 'Tooltip Root',
        type: { summary: 'boolean' },
      },
    },
    open: {
      control: 'boolean',
      description: 'Controlled open state',
      table: {
        category: 'Tooltip Root',
        type: { summary: 'boolean' },
      },
    },
    onOpenChange: {
      action: 'openChange',
      description: 'Callback when open state changes',
      table: {
        category: 'Tooltip Root',
        type: { summary: '(open: boolean) => void' },
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic tooltip example with hover interaction.
 */
export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a helpful tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

/**
 * Tooltip positioned on different sides of the trigger element.
 */
export const Positioning: Story = {
  render: () => (
    <div className="flex flex-wrap items-center justify-center gap-4 p-8">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip on top</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip on right</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip on bottom</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip on left</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use the `side` prop to control tooltip placement: "top", "right", "bottom", or "left".',
      },
    },
  },
};

/**
 * Tooltip with different alignment options relative to the trigger.
 */
export const Alignment: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4 p-8">
      <div className="flex gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Start</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="start">
            <p>Aligned to start</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Center</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="center">
            <p>Aligned to center</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">End</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="end">
            <p>Aligned to end</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use the `align` prop to control tooltip alignment: "start", "center", or "end".',
      },
    },
  },
};

/**
 * Tooltip with custom offset from the trigger element.
 */
export const WithOffset: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-8">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">No Offset</Button>
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={0}>
          <p>No offset (0px)</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Small Offset</Button>
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={10}>
          <p>10px offset</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Large Offset</Button>
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={20}>
          <p>20px offset</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use the `sideOffset` prop to add space between the tooltip and trigger.',
      },
    },
  },
};

/**
 * Tooltip with custom delay duration controlled by TooltipProvider.
 */
export const WithDelay: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-8">
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">No Delay</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Shows immediately</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={500}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">500ms Delay</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Shows after 500ms</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={1000}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">1s Delay</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Shows after 1 second</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use the `delayDuration` prop on TooltipProvider to control show delay.',
      },
    },
  },
};

/**
 * Controlled tooltip that can be programmatically opened/closed.
 */
export const Controlled: Story = {
  render: function ControlledTooltip() {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex items-center gap-4 p-8">
        <Tooltip open={open} onOpenChange={setOpen}>
          <TooltipTrigger asChild>
            <Button variant="outline">Controlled Trigger</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This tooltip is controlled</p>
          </TooltipContent>
        </Tooltip>

        <Button onClick={() => setOpen(!open)} variant="secondary">
          {open ? 'Close' : 'Open'} Tooltip
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use the `open` and `onOpenChange` props to control the tooltip state programmatically.',
      },
    },
  },
};

/**
 * Tooltip with rich content including multiple elements.
 */
export const RichContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Rich Content</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <div className="space-y-2">
          <p className="font-semibold">Feature Details</p>
          <p className="text-xs">
            This feature provides advanced functionality with multiple options
            and configurations available.
          </p>
          <div className="flex items-center gap-2 text-xs">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span>Status: Active</span>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Tooltips can contain rich content including multiple elements, not just plain text.',
      },
    },
  },
};

/**
 * Different trigger elements that can show tooltips.
 */
export const DifferentTriggers: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-8">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Button Trigger</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip on button</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <span tabIndex={0} className="cursor-help text-blue-600 underline">
            Text Trigger
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip on text</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <div
            tabIndex={0}
            className="flex h-8 w-8 cursor-help items-center justify-center rounded bg-blue-500 text-sm text-white"
          >
            ?
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip on icon</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Tooltips can be triggered by various elements using the `asChild` prop on TooltipTrigger.',
      },
    },
  },
};
