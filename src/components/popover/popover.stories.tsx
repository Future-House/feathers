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
import {
  Calendar,
  Settings as SettingsIcon,
  User,
  Mail,
  Phone,
  MapPin,
  Bell,
} from 'lucide-react';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays rich content in a portal, triggered by a button.',
      },
    },
  },
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
    // PopoverContent props
    side: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      description:
        'The preferred side of the trigger to render against when open.',
      table: {
        category: 'PopoverContent',
        type: { summary: 'top | right | bottom | left' },
        defaultValue: { summary: 'bottom' },
      },
    },
    sideOffset: {
      control: { type: 'number', min: 0, max: 50, step: 1 },
      description: 'The distance in pixels from the trigger.',
      table: {
        category: 'PopoverContent',
        type: { summary: 'number' },
        defaultValue: { summary: '4' },
      },
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
      description: 'The preferred alignment against the trigger.',
      table: {
        category: 'PopoverContent',
        type: { summary: 'start | center | end' },
        defaultValue: { summary: 'center' },
      },
    },
    alignOffset: {
      control: { type: 'number', min: -50, max: 50, step: 1 },
      description:
        'An offset in pixels from the start or end alignment options.',
      table: {
        category: 'PopoverContent',
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    avoidCollisions: {
      control: 'boolean',
      description:
        'When true, overrides the side and align preferences to prevent collisions with boundary edges.',
      table: {
        category: 'PopoverContent',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    collisionBoundary: {
      description: 'The element used as the collision boundary.',
      table: {
        category: 'PopoverContent',
        type: { summary: 'Element | null | Array<Element | null>' },
      },
    },
    collisionPadding: {
      control: { type: 'number', min: 0, max: 50, step: 1 },
      description:
        'The distance in pixels from the boundary edges where collision detection should occur.',
      table: {
        category: 'PopoverContent',
        type: { summary: 'number | Partial<Record<Side, number>>' },
        defaultValue: { summary: '0' },
      },
    },
    arrowPadding: {
      control: { type: 'number', min: 0, max: 50, step: 1 },
      description:
        'The padding between the arrow and the edges of the content.',
      table: {
        category: 'PopoverContent',
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    sticky: {
      control: { type: 'select' },
      options: ['partial', 'always'],
      description: 'The sticky behavior on the align axis.',
      table: {
        category: 'PopoverContent',
        type: { summary: 'partial | always' },
        defaultValue: { summary: 'partial' },
      },
    },
    hideWhenDetached: {
      control: 'boolean',
      description:
        'Whether to hide the content when the trigger becomes fully occluded.',
      table: {
        category: 'PopoverContent',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

function BasicPopoverComponent() {
  return (
    <Popover>
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

function UserProfilePopoverComponent() {
  return (
    <Popover>
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

function NotificationPopoverComponent() {
  return (
    <Popover>
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

function DatePickerPopoverComponent() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[240px] justify-start text-left font-normal"
        >
          <Calendar className="mr-2 h-4 w-4" />
          {date ? date.toLocaleDateString() : 'Pick a date'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-4">
          <div className="space-y-4">
            <h4 className="leading-none font-medium">Select Date</h4>
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                onChange={e =>
                  setDate(e.target.value ? new Date(e.target.value) : undefined)
                }
              />
            </div>
            <div className="flex justify-end">
              <Button size="sm">Apply</Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function SettingsPopoverComponent() {
  return (
    <Popover>
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
              <input
                id="notifications"
                type="checkbox"
                className="h-4 w-4"
                defaultChecked
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="marketing" className="text-sm">
                Marketing emails
              </Label>
              <input id="marketing" type="checkbox" className="h-4 w-4" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Label htmlFor="theme" className="text-sm">
                Theme
              </Label>
              <select id="theme" className="rounded border px-2 py-1 text-sm">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function WithAnchorComponent() {
  return (
    <div className="flex gap-4">
      <div className="text-muted-foreground text-sm">
        The popover will be anchored to this text element.
      </div>
      <Popover>
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
  render: () => <BasicPopoverComponent />,
};

export const UserProfile: Story = {
  render: () => <UserProfilePopoverComponent />,
};

export const Notifications: Story = {
  render: () => <NotificationPopoverComponent />,
};

export const DatePicker: Story = {
  render: () => <DatePickerPopoverComponent />,
};

export const Settings: Story = {
  render: () => <SettingsPopoverComponent />,
};

export const WithAnchor: Story = {
  render: () => <WithAnchorComponent />,
};

export const CustomAlignment: Story = {
  args: {
    side: 'top',
    align: 'start',
    sideOffset: 10,
  },
  render: args => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Top Start Aligned</Button>
      </PopoverTrigger>
      <PopoverContent
        side={args.side}
        align={args.align}
        sideOffset={args.sideOffset}
      >
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
