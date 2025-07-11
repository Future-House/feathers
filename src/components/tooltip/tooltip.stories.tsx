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
    docs: {
      description: {
        component:
          'Provides contextual information when users hover or focus on an element. Built on top of Radix UI Tooltip primitive.',
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
        defaultValue: { summary: 'false' },
      },
    },
    open: {
      control: 'boolean',
      description: 'Controlled open state',
      table: {
        category: 'Tooltip Root',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onOpenChange: {
      action: 'openChange',
      description: 'Callback when open state changes',
      table: {
        category: 'Tooltip Root',
        type: { summary: '(open: boolean) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
    delayDuration: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description:
        'The duration from when the mouse enters the trigger until the tooltip gets opened',
      table: {
        category: 'Tooltip Root',
        type: { summary: 'number' },
        defaultValue: { summary: '700' },
      },
    },
    disableHoverableContent: {
      control: 'boolean',
      description: 'Prevents tooltip content from being hoverable',
      table: {
        category: 'Tooltip Root',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  subcomponents: {
    TooltipProvider: {
      description:
        'Wraps your app to provide tooltip functionality. Should be placed at the root of your app or around the tooltips you want to share state.',
      argTypes: {
        delayDuration: {
          type: 'number',
          description:
            'The duration from when the mouse enters the trigger until the tooltip gets opened (in milliseconds).',
          defaultValue: '700',
        },
        skipDelayDuration: {
          type: 'number',
          description:
            'How much time a user has to enter another trigger without incurring a delay again (in milliseconds).',
          defaultValue: '300',
        },
        disableHoverableContent: {
          type: 'boolean',
          description: 'Prevents tooltip content from being hoverable.',
          defaultValue: 'false',
        },
      },
    },
    TooltipTrigger: {
      description:
        'The button that toggles the tooltip. By default, the tooltip content will position itself based on this trigger.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
      },
    },
    TooltipContent: {
      description:
        'The component that pops out when the tooltip is open. Contains the tooltip content and arrow.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
        'aria-label': {
          type: 'string',
          description:
            'By default, screenreaders will announce the content inside the component. If this is not descriptive enough, you can use aria-label.',
        },
        side: {
          type: 'string',
          description:
            'The preferred side of the trigger to render against when open.',
          defaultValue: 'top',
          options: ['top', 'right', 'bottom', 'left'],
        },
        sideOffset: {
          type: 'number',
          description: 'The distance in pixels from the trigger.',
          defaultValue: '0',
        },
        align: {
          type: 'string',
          description: 'The preferred alignment against the trigger.',
          defaultValue: 'center',
          options: ['start', 'center', 'end'],
        },
        alignOffset: {
          type: 'number',
          description:
            'An offset in pixels from the start or end alignment options.',
          defaultValue: '0',
        },
        avoidCollisions: {
          type: 'boolean',
          description:
            'When true, overrides the side and align preferences to prevent collisions with boundary edges.',
          defaultValue: 'true',
        },
        collisionBoundary: {
          type: 'Element | null | Array<Element | null>',
          description:
            'The element used as the collision boundary. By default this is the viewport.',
        },
        collisionPadding: {
          type: 'number | Partial<Record<Side, number>>',
          description:
            'The distance in pixels from the boundary edges where collision detection should occur.',
          defaultValue: '0',
        },
        arrowPadding: {
          type: 'number',
          description:
            'The padding between the arrow and the edges of the content.',
          defaultValue: '0',
        },
        sticky: {
          type: 'string',
          description: 'The sticky behavior on the align axis.',
          defaultValue: 'partial',
          options: ['partial', 'always'],
        },
        hideWhenDetached: {
          type: 'boolean',
          description:
            'Whether to hide the content when the trigger becomes fully occluded.',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description:
            'Additional CSS classes to apply to the tooltip content.',
        },
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
  parameters: {
    controls: { disable: true },
  },
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
};

/**
 * Tooltip with different alignment options relative to the trigger.
 */
export const Alignment: Story = {
  parameters: {
    controls: { disable: true },
  },
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
};

/**
 * Tooltip with custom offset from the trigger element.
 */
export const WithOffset: Story = {
  parameters: {
    controls: { disable: true },
  },
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
};

/**
 * Tooltip with custom delay duration controlled by TooltipProvider.
 */
export const WithDelay: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex items-center gap-4 p-8">
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button variant="outline">No Delay</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Shows immediately</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip delayDuration={500}>
        <TooltipTrigger asChild>
          <Button variant="outline">500ms Delay</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Shows after 500ms</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip delayDuration={1000}>
        <TooltipTrigger asChild>
          <Button variant="outline">1s Delay</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Shows after 1 second</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

/**
 * Controlled tooltip that can be programmatically opened/closed.
 */
export const Controlled: Story = {
  parameters: {
    controls: { disable: true },
  },
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

        <Button
          onClick={() => setOpen(!open)}
          disabled={open}
          variant="secondary"
        >
          {open ? 'Close' : 'Open'} Tooltip
        </Button>
      </div>
    );
  },
};

/**
 * Tooltip with rich content including multiple elements.
 */
export const RichContent: Story = {
  render: args => (
    <Tooltip {...args}>
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
};

/**
 * Different trigger elements that can show tooltips.
 */
export const DifferentTriggers: Story = {
  parameters: {
    controls: { disable: true },
  },
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
};
