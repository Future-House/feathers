import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ChevronDown,
  Calendar,
  UserMultiple as Users,
  Settings,
} from '@/icons';
import { Button } from '../button/button';
import { Checkbox } from '../checkbox/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '../card/card';
import { Typography } from '../typography';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from './collapsible';

const meta = {
  title: 'Components/Collapsible',
  component: Collapsible,
  parameters: {
    docs: {
      description: {
        component:
          'An interactive component which can be expanded/collapsed. Built with Radix UI Collapsible primitives and styled with Tailwind CSS.',
      },
    },
  },
  tags: [],
  argTypes: {
    // Root component props from Radix UI Collapsible.Root
    asChild: {
      control: { type: 'boolean' },
      description:
        'Change the default rendered element for the one passed as a child, merging their props and behavior',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        disable: true,
      },
    },
    defaultOpen: {
      control: { type: 'boolean' },
      description:
        'The open state of the collapsible when it is initially rendered',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    open: {
      control: { type: 'boolean' },
      description:
        'The controlled open state of the collapsible. Should be used in conjunction with onOpenChange',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: undefined },
      },
    },
    onOpenChange: {
      action: 'onOpenChange',
      description:
        'Event handler called when the open state of the collapsible changes',
      table: {
        type: { summary: '(open: boolean) => void' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description:
        'When true, prevents the user from interacting with the collapsible',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  subcomponents: {
    CollapsibleTrigger: {
      description:
        'The button that toggles the collapsible. Built with Radix UI CollapsibleTrigger primitive with automatic state management and accessibility features. Supports custom triggers via asChild prop.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the trigger element',
        },
        'data-state': {
          type: 'string',
          description:
            'Data attribute indicating the collapsible state: "open" or "closed"',
        },
        'data-disabled': {
          type: 'boolean',
          description:
            'Data attribute present when the collapsible is disabled',
        },
      },
    },
    CollapsibleContent: {
      description:
        'The container that holds the collapsible content. Built with Radix UI CollapsibleContent primitive with smooth expand/collapse animations and proper accessibility attributes. Includes CSS custom properties for animation control.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
        forceMount: {
          type: 'boolean',
          description:
            'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description:
            'Additional CSS classes to apply to the content container',
        },
        'data-state': {
          type: 'string',
          description:
            'Data attribute indicating the collapsible state: "open" or "closed"',
        },
        'data-disabled': {
          type: 'boolean',
          description:
            'Data attribute present when the collapsible is disabled',
        },
      },
    },
  },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultOpen: false,
  },
  render: args => (
    <Collapsible {...args} className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <Typography variant="small" className="font-semibold">
          @peduarte starred 3 repositories
        </Typography>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const WithCard: Story = {
  args: {
    defaultOpen: false,
  },
  render: args => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Collapsible {...args}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Profile Information
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 pt-4">
            <div className="bg-muted rounded-md p-4">
              <Typography variant="small">Name: John Doe</Typography>
              <Typography variant="small">Email: john@example.com</Typography>
              <Typography variant="small">Role: Administrator</Typography>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Advanced Settings
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 pt-4">
            <div className="bg-muted space-y-2 rounded-md p-4">
              <label className="flex items-center space-x-2">
                <Checkbox />
                <span className="text-sm">Enable notifications</span>
              </label>
              <label className="flex items-center space-x-2">
                <Checkbox />
                <span className="text-sm">Auto-save drafts</span>
              </label>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  ),
};

export const OpenByDefault: Story = {
  args: {
    defaultOpen: true,
  },
  render: args => (
    <Collapsible {...args} className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <Typography variant="small" className="font-semibold">
          Upcoming Events
        </Typography>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle events</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">Team Meeting - Tomorrow 2:00 PM</span>
          </div>
        </div>
        <div className="rounded-md border px-4 py-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">Project Review - Friday 10:00 AM</span>
          </div>
        </div>
        <div className="rounded-md border px-4 py-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">Client Call - Next Monday 3:00 PM</span>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

const ControlledExample = (args: React.ComponentProps<typeof Collapsible>) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-[400px] space-y-4">
      <div className="flex items-center space-x-2">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          size="sm"
          disabled={args.disabled}
        >
          {isOpen ? 'Close' : 'Open'} Section
        </Button>
        <Typography variant="muted">
          External control: {isOpen ? 'Open' : 'Closed'}
        </Typography>
      </div>

      <Collapsible
        {...args}
        open={isOpen}
        onOpenChange={setIsOpen}
        disabled={args.disabled}
      >
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            Collapsible Section
            <ChevronDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4">
          <div className="bg-muted rounded-md p-4">
            <Typography variant="small">
              This collapsible can be controlled both by clicking the trigger
              button and by using the external controls above.
            </Typography>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export const Controlled: Story = {
  args: {},
  parameters: {
    controls: { exclude: /[Oo]pen/ },
  },
  render: args => <ControlledExample {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: args => (
    <Collapsible {...args} className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <Typography variant="muted" className="font-semibold">
          Disabled Section
        </Typography>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle (disabled)</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="text-muted-foreground rounded-md border px-4 py-3 text-sm">
        This content cannot be expanded when disabled
      </div>
    </Collapsible>
  ),
};

export const MultipleCollapsibles: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Typography variant="h3" className="font-semibold">
        Navigation Menu
      </Typography>

      <Collapsible className="space-y-2">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" />
            Team Management
            <ChevronDown className="ml-auto h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1 pl-6">
          <Button variant="ghost" className="w-full justify-start" size="sm">
            View Members
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="sm">
            Add Member
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="sm">
            Permissions
          </Button>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible className="space-y-2">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
            <ChevronDown className="ml-auto h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1 pl-6">
          <Button variant="ghost" className="w-full justify-start" size="sm">
            General
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="sm">
            Security
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="sm">
            Notifications
          </Button>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible className="space-y-2">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-start">
            <Calendar className="mr-2 h-4 w-4" />
            Calendar
            <ChevronDown className="ml-auto h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1 pl-6">
          <Button variant="ghost" className="w-full justify-start" size="sm">
            This Week
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="sm">
            This Month
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="sm">
            Upcoming
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
};
