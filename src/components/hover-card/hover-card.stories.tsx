import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button';
import { Avatar, AvatarFallback, AvatarImage } from '../avatar/avatar';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './hover-card';

const meta = {
  title: 'Components/HoverCard',
  component: HoverCard,
  parameters: {
    docs: {
      description: {
        component:
          'A hover card component that displays rich content when hovering over a trigger element.',
      },
    },
  },
  argTypes: {
    // Root component props from Radix UI HoverCard.Root
    defaultOpen: {
      control: { type: 'boolean' },
      description:
        'The open state of the hover card when it is initially rendered. Use when you do not need to control its open state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    open: {
      control: { type: 'boolean' },
      description:
        'The controlled open state of the hover card. Must be used in conjunction with onOpenChange',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: undefined },
      },
    },
    onOpenChange: {
      action: 'onOpenChange',
      description:
        'Event handler called when the open state of the hover card changes',
      table: {
        type: { summary: '(open: boolean) => void' },
      },
    },
    openDelay: {
      control: { type: 'number' },
      description:
        'The duration from when the mouse enters the trigger until the hover card opens',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '700' },
      },
    },
    closeDelay: {
      control: { type: 'number' },
      description:
        'The duration from when the mouse leaves the trigger until the hover card closes',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '300' },
      },
    },
  },
  subcomponents: {
    HoverCardTrigger: {
      description: 'The element that triggers the hover card on hover',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
      },
    },
    HoverCardContent: {
      description: 'The component that pops out when the hover card is open',
      argTypes: {
        side: {
          type: 'string',
          description: 'The preferred side of the trigger to render against',
          defaultValue: 'bottom',
        },
        sideOffset: {
          type: 'number',
          description: 'The distance in pixels from the trigger',
          defaultValue: '4',
        },
        align: {
          type: 'string',
          description: 'The preferred alignment against the trigger',
          defaultValue: 'center',
        },
        alignOffset: {
          type: 'number',
          description:
            'An offset in pixels from the start or end alignment options',
          defaultValue: '0',
        },
        avoidCollisions: {
          type: 'boolean',
          description:
            'When true, overrides the side and align preferences to prevent collisions with the viewport edges',
          defaultValue: 'true',
        },
        collisionBoundary: {
          type: 'Element | null | Array<Element | null>',
          description: 'The element used as the collision boundary',
          defaultValue: '[]',
        },
        collisionPadding: {
          type: 'number | Partial<Record<Side, number>>',
          description:
            'The distance in pixels from the boundary edges where collision detection should occur',
          defaultValue: '0',
        },
        arrowPadding: {
          type: 'number',
          description:
            'The padding between the arrow and the edges of the content',
          defaultValue: '0',
        },
        sticky: {
          type: 'string',
          description: 'The sticky behavior on the align axis',
          defaultValue: 'partial',
        },
        hideWhenDetached: {
          type: 'boolean',
          description:
            'Whether to hide the content when the trigger becomes fully occluded',
          defaultValue: 'false',
        },
      },
    },
  },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    openDelay: 600,
    closeDelay: 300,
  },
  render: args => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <Calendar className="mr-2 h-4 w-4 opacity-70" />{' '}
              <span className="text-muted-foreground text-xs">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithoutAvatar: Story = {
  args: {
    openDelay: 500,
    closeDelay: 200,
  },
  render: args => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover for details</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Quick Info</h4>
          <p className="text-muted-foreground text-sm">
            This is a simple hover card without an avatar. Perfect for showing
            additional context or information.
          </p>
          <div className="flex items-center pt-2">
            <Clock className="mr-2 h-4 w-4 opacity-70" />
            <span className="text-muted-foreground text-xs">
              Updated 2 hours ago
            </span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const UserProfile: Story = {
  args: {
    openDelay: 400,
  },
  render: args => (
    <div className="flex items-center space-x-4">
      <HoverCard {...args}>
        <HoverCardTrigger asChild>
          <Button variant="ghost" className="p-0">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">shadcn</h4>
              <p className="text-sm">
                Building beautiful, accessible user interfaces with React and
                Tailwind CSS.
              </p>
              <div className="flex items-center pt-2">
                <Calendar className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-muted-foreground text-xs">
                  Joined March 2021
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-muted-foreground text-xs">
                  United Kingdom
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

      <span className="text-muted-foreground text-sm">
        Hover over the avatar to see the profile card
      </span>
    </div>
  ),
};

export const ProductInfo: Story = {
  args: {
    openDelay: 300,
    closeDelay: 100,
  },
  render: args => (
    <div className="space-y-4">
      <p className="text-muted-foreground text-sm">
        Check out our latest product:
      </p>
      <HoverCard {...args}>
        <HoverCardTrigger asChild>
          <Button>Pro Plan</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-96">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">Pro Plan</h4>
              <span className="text-2xl font-bold">$29/mo</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Unlock premium features and advanced capabilities for your
              projects.
            </p>
            <div className="space-y-2">
              <h5 className="text-sm font-medium">Features included:</h5>
              <ul className="text-muted-foreground space-y-1 text-xs">
                <li>• Unlimited projects</li>
                <li>• Advanced analytics</li>
                <li>• Priority support</li>
                <li>• Custom integrations</li>
                <li>• Team collaboration tools</li>
              </ul>
            </div>
            <div className="pt-2">
              <Button size="sm" className="w-full">
                Upgrade Now
              </Button>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};

export const CustomPositioning: Story = {
  args: {
    openDelay: 200,
  },
  render: args => (
    <div className="grid grid-cols-2 gap-8 p-8">
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Top Side</h3>
        <HoverCard {...args}>
          <HoverCardTrigger asChild>
            <Button variant="outline">Hover (Top)</Button>
          </HoverCardTrigger>
          <HoverCardContent side="top" className="w-64">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Top Positioned</h4>
              <p className="text-muted-foreground text-sm">
                This hover card appears above the trigger element.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Left Side</h3>
        <HoverCard {...args}>
          <HoverCardTrigger asChild>
            <Button variant="outline">Hover (Left)</Button>
          </HoverCardTrigger>
          <HoverCardContent side="left" className="w-64">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Left Positioned</h4>
              <p className="text-muted-foreground text-sm">
                This hover card appears to the left of the trigger element.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Right Side</h3>
        <HoverCard {...args}>
          <HoverCardTrigger asChild>
            <Button variant="outline">Hover (Right)</Button>
          </HoverCardTrigger>
          <HoverCardContent side="right" className="w-64">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Right Positioned</h4>
              <p className="text-muted-foreground text-sm">
                This hover card appears to the right of the trigger element.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Bottom Side (Default)</h3>
        <HoverCard {...args}>
          <HoverCardTrigger asChild>
            <Button variant="outline">Hover (Bottom)</Button>
          </HoverCardTrigger>
          <HoverCardContent side="bottom" className="w-64">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Bottom Positioned</h4>
              <p className="text-muted-foreground text-sm">
                This hover card appears below the trigger element (default).
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  ),
};

export const DelayCustomization: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Fast (100ms open, 50ms close)</h3>
        <HoverCard openDelay={100} closeDelay={50}>
          <HoverCardTrigger asChild>
            <Button variant="outline">Fast Response</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Quick Hover</h4>
              <p className="text-muted-foreground text-sm">
                Opens and closes quickly for rapid interactions.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">
          Medium (500ms open, 200ms close)
        </h3>
        <HoverCard openDelay={500} closeDelay={200}>
          <HoverCardTrigger asChild>
            <Button variant="outline">Medium Response</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Balanced Timing</h4>
              <p className="text-muted-foreground text-sm">
                Balanced timing for most use cases.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Slow (1000ms open, 500ms close)</h3>
        <HoverCard openDelay={1000} closeDelay={500}>
          <HoverCardTrigger asChild>
            <Button variant="outline">Slow Response</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Deliberate Hover</h4>
              <p className="text-muted-foreground text-sm">
                Requires intentional hovering to prevent accidental triggers.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  ),
};
