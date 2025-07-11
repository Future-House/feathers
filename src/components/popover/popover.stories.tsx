import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
} from './popover';
import { Button } from '../button/button';
import { Input } from '../input/input';
import { Label } from '../label/label';
import { Checkbox } from '../checkbox/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../select/select';
import {
  Settings as SettingsIcon,
  User,
  Mail,
  Phone,
  MapPin,
  Bell,
} from 'lucide-react';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: 'Displays rich content in a portal, triggered by a button.',
      },
    },
  },
  tags: [],
  argTypes: {
    // Popover.Root props
    defaultOpen: {
      control: 'boolean',
      description:
        'The open state of the popover when it is initially rendered.',
      table: {
        category: 'Popover.Root',
        type: { summary: 'boolean' },
      },
    },
    open: {
      control: 'boolean',
      description: 'The controlled open state of the popover.',
      table: {
        category: 'Popover.Root',
        type: { summary: 'boolean' },
      },
    },
    onOpenChange: {
      action: 'openChanged',
      description:
        'Event handler called when the open state of the popover changes.',
      table: {
        category: 'Popover.Root',
        type: { summary: '(open: boolean) => void' },
      },
    },
    modal: {
      control: 'boolean',
      description:
        'The modality of the popover. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers.',
      table: {
        category: 'Popover.Root',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  subcomponents: {
    PopoverTrigger: {
      description:
        'The button that toggles the popover. Can be used with the asChild prop for custom trigger components.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the trigger',
        },
      },
    },
    PopoverContent: {
      description:
        'The content area of the popover. Contains the popover content and handles positioning.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
        onOpenAutoFocus: {
          type: '(event: Event) => void',
          description:
            'Event handler called when the popover opens. Use event.preventDefault to prevent focusing.',
        },
        onCloseAutoFocus: {
          type: '(event: Event) => void',
          description:
            'Event handler called when the popover closes. Use event.preventDefault to prevent focusing.',
        },
        onEscapeKeyDown: {
          type: '(event: KeyboardEvent) => void',
          description:
            'Event handler called when the escape key is down. Use event.preventDefault to prevent dismissing.',
        },
        onPointerDownOutside: {
          type: '(event: PointerEvent) => void',
          description:
            'Event handler called when a pointer event happens outside of the popover. Use event.preventDefault to prevent dismissing.',
        },
        onFocusOutside: {
          type: '(event: FocusEvent) => void',
          description:
            'Event handler called when focus moves outside of the popover. Use event.preventDefault to prevent dismissing.',
        },
        onInteractOutside: {
          type: '(event: PointerEvent | FocusEvent) => void',
          description:
            'Event handler called when an interaction happens outside the popover. Use event.preventDefault to prevent dismissing.',
        },
        forceMount: {
          type: 'boolean',
          description:
            'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.',
        },
        side: {
          type: 'string',
          description:
            'The preferred side of the trigger to render against when open.',
          defaultValue: 'bottom',
        },
        sideOffset: {
          type: 'number',
          description: 'The distance in pixels from the trigger.',
          defaultValue: '4',
        },
        align: {
          type: 'string',
          description: 'The preferred alignment against the trigger.',
          defaultValue: 'center',
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
          description: 'The element used as the collision boundary.',
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
        },
        hideWhenDetached: {
          type: 'boolean',
          description:
            'Whether to hide the content when the trigger becomes fully occluded.',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the content',
        },
      },
    },
    PopoverAnchor: {
      description:
        'An optional element to position the popover against. Useful when you want the popover to be positioned relative to a different element than the trigger.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the anchor',
        },
      },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof Popover>;

function BasicPopoverComponent(args: React.ComponentProps<typeof Popover>) {
  return (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function UserProfilePopoverComponent(args) {
  return (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          John Doe
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex gap-4">
          <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-full">
            <User className="h-6 w-6" />
          </div>
          <div className="flex-1 space-y-1">
            <h4 className="text-sm font-semibold">John Doe</h4>
            <p className="text-muted-foreground text-sm">Software Engineer</p>
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <Mail className="h-3 w-3" />
              john.doe@example.com
            </div>
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <Phone className="h-3 w-3" />
              +1 (555) 123-4567
            </div>
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <MapPin className="h-3 w-3" />
              San Francisco, CA
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function NotificationPopoverComponent(args) {
  return (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Notifications</h4>
            <span className="bg-primary text-primary-foreground rounded-full px-2 py-1 text-xs">
              3
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 rounded-lg border p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                <Mail className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">New message received</p>
                <p className="text-muted-foreground text-xs">
                  You have a new message from Sarah
                </p>
                <p className="text-muted-foreground text-xs">2 minutes ago</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-lg border p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                <User className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Profile updated</p>
                <p className="text-muted-foreground text-xs">
                  Your profile information has been updated
                </p>
                <p className="text-muted-foreground text-xs">1 hour ago</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-lg border p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                <SettingsIcon className="h-4 w-4 text-orange-600" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Settings changed</p>
                <p className="text-muted-foreground text-xs">
                  Your notification preferences have been updated
                </p>
                <p className="text-muted-foreground text-xs">3 hours ago</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button variant="ghost" size="sm">
              View all notifications
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function SettingsPopoverComponent(args) {
  return (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <SettingsIcon className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Settings</h4>
            <p className="text-muted-foreground text-sm">
              Configure your preferences.
            </p>
          </div>
          <div className="grid gap-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications" className="text-sm">
                Email notifications
              </Label>
              <Checkbox id="notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="marketing" className="text-sm">
                Marketing emails
              </Label>
              <Checkbox id="marketing" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Label htmlFor="theme" className="text-sm">
                Theme
              </Label>
              <Select>
                <SelectTrigger className="col-span-2 w-full">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function WithAnchorComponent(args) {
  return (
    <div className="flex gap-4">
      <div className="text-muted-foreground text-sm">
        The popover will be anchored to this text element.
      </div>
      <Popover {...args}>
        <PopoverAnchor asChild>
          <span className="bg-muted rounded px-2 py-1 text-sm">
            Anchor point
          </span>
        </PopoverAnchor>
        <PopoverTrigger asChild>
          <Button size="sm">Show popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p className="text-sm">
            This popover is anchored to the highlighted text above, not the
            trigger button.
          </p>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export const Default: Story = {
  render: args => <BasicPopoverComponent {...args} />,
};

export const UserProfile: Story = {
  render: args => <UserProfilePopoverComponent {...args} />,
};

export const Notifications: Story = {
  render: args => <NotificationPopoverComponent {...args} />,
};

export const Settings: Story = {
  render: args => <SettingsPopoverComponent {...args} />,
};

export const WithAnchor: Story = {
  render: args => <WithAnchorComponent {...args} />,
};

export const CustomAlignment: Story = {
  render: args => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Top Start Aligned</Button>
      </PopoverTrigger>
      <PopoverContent side="top" align="start" sideOffset={10}>
        <div className="grid gap-4">
          <h4 className="leading-none font-medium">Custom Positioning</h4>
          <p className="text-muted-foreground text-sm">
            This popover is positioned at the top with start alignment and
            custom offset.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
