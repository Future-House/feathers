import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../card';
import { Button } from '../button';
import { Input } from '../input';
import { Label } from '../label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A set of layered sections of content—known as tab panels—that are displayed one at a time. Built with Radix UI Tabs primitives and styled with Tailwind CSS.',
      },
    },
  },
  tags: [],
  argTypes: {
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
    value: {
      control: { type: 'text' },
      description:
        'The controlled value of the tab to activate. Should be used in conjunction with onValueChange',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
        disable: true,
      },
    },
    defaultValue: {
      control: { type: 'text' },
      description:
        'The value of the tab that should be active when initially rendered. Use when you do not need to control the state',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    onValueChange: {
      action: 'onValueChange',
      description: 'Event handler called when the value changes',
      table: {
        type: { summary: '(value: string) => void' },
        defaultValue: { summary: undefined },
        disable: true,
      },
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the component',
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
        disable: true,
      },
    },
    dir: {
      control: { type: 'select' },
      options: ['ltr', 'rtl'],
      description:
        'The reading direction of the tabs when applicable. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode',
      table: {
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: '"ltr"' },
      },
    },
    activationMode: {
      control: { type: 'select' },
      options: ['automatic', 'manual'],
      description:
        'When automatic, tabs are activated when receiving focus. When manual, tabs are activated when clicked',
      table: {
        type: { summary: '"automatic" | "manual"' },
        defaultValue: { summary: '"automatic"' },
      },
    },
    // HTML attributes
    className: {
      control: { type: 'text' },
      description: 'CSS class name to apply to the tabs container',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    id: {
      control: { type: 'text' },
      description: 'HTML id attribute',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
  },
  subcomponents: {
    TabsList: {
      description:
        'Contains the triggers that are aligned along the edge of the active content. Acts as a toolbar for the tab triggers.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
        loop: {
          type: 'boolean',
          description:
            'When true, keyboard navigation will loop from last trigger to first, and vice versa.',
          defaultValue: 'true',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the tabs list.',
        },
      },
    },
    TabsTrigger: {
      description:
        'The button that activates its associated content. Contains the tab label and is responsible for triggering tab changes.',
      argTypes: {
        value: {
          type: 'string',
          description:
            'A unique value that associates the trigger with a content area.',
        },
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
        disabled: {
          type: 'boolean',
          description:
            'When true, prevents the user from interacting with the trigger.',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the trigger.',
        },
      },
    },
    TabsContent: {
      description:
        'Contains the content associated with each trigger. The content is shown when its associated trigger is active.',
      argTypes: {
        value: {
          type: 'string',
          description:
            'A unique value that associates the content with a trigger.',
        },
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
        forceMount: {
          type: 'boolean',
          description:
            'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the content.',
        },
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 'account',
  },
  render: args => (
    <Tabs {...args} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="space-y-2">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re
              done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password" className="space-y-2">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged
              out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const Controlled: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: function ControlledTabs() {
    const [activeTab, setActiveTab] = React.useState('overview');

    return (
      <div className="w-[500px] space-y-4">
        <div className="flex gap-2">
          <Button
            size="sm"
            variant={activeTab === 'overview' ? 'default' : 'outline'}
            onClick={() => setActiveTab('overview')}
          >
            Set Overview
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'analytics' ? 'default' : 'outline'}
            onClick={() => setActiveTab('analytics')}
          >
            Set Analytics
          </Button>
          <Button
            size="sm"
            variant={activeTab === 'reports' ? 'default' : 'outline'}
            onClick={() => setActiveTab('reports')}
          >
            Set Reports
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>
                  View your project overview and key metrics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Current active tab: <strong>{activeTab}</strong>
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                  Detailed analytics and performance metrics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Current active tab: <strong>{activeTab}</strong>
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>
                  Generate and download reports.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Current active tab: <strong>{activeTab}</strong>
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
};

export const VerticalOrientation: Story = {
  args: {
    orientation: 'vertical',
    defaultValue: 'general',
  },
  render: args => (
    <Tabs {...args} className="flex w-[600px] flex-row space-x-4">
      <TabsList className="flex h-fit w-[150px] flex-1 flex-col">
        <TabsTrigger value="general" className="w-full">
          General
        </TabsTrigger>
        <TabsTrigger value="security" className="w-full">
          Security
        </TabsTrigger>
        <TabsTrigger value="integrations" className="w-full">
          Integrations
        </TabsTrigger>
        <TabsTrigger value="billing" className="w-full">
          Billing
        </TabsTrigger>
      </TabsList>
      <div className="flex-2">
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Manage your general account settings and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Enter company name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" placeholder="https://example.com" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Configure your security preferences and authentication methods.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Security settings would go here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>
                Connect with third-party services and applications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Integration settings would go here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Billing & Usage</CardTitle>
              <CardDescription>
                Manage your subscription and billing information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Billing information would go here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  ),
};

export const ManualActivation: Story = {
  args: {
    activationMode: 'manual',
    defaultValue: 'tab1',
  },
  render: args => (
    <Tabs {...args} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="mt-4">
        <Card>
          <CardContent>
            <p className="text-sm">
              Manual activation mode: tabs are only activated when clicked, not
              when focused. Try using Tab key to navigate between triggers.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tab2" className="mt-4">
        <Card>
          <CardContent>
            <p className="text-sm">
              Content for Tab 2. Notice how this tab doesn&apos;t activate when
              you navigate here with keyboard unless you press Enter or Space.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tab3" className="mt-4">
        <Card>
          <CardContent>
            <p className="text-sm">
              Content for Tab 3. Manual activation provides better control over
              when tabs change.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const ManyTabs: Story = {
  args: {
    defaultValue: 'tab1',
  },
  render: args => (
    <Tabs {...args} className="w-[600px]">
      <TabsList className="grid w-full grid-cols-6">
        <TabsTrigger value="tab1">Home</TabsTrigger>
        <TabsTrigger value="tab2">Products</TabsTrigger>
        <TabsTrigger value="tab3">Services</TabsTrigger>
        <TabsTrigger value="tab4">About</TabsTrigger>
        <TabsTrigger value="tab5">Blog</TabsTrigger>
        <TabsTrigger value="tab6">Contact</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Welcome Home</CardTitle>
            <CardDescription>This is the home page content.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Home page with navigation tabs showing how the component handles
              multiple tabs.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tab2" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Our Products</CardTitle>
            <CardDescription>Explore our product offerings.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Product catalog and information would be displayed here.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tab3" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Services</CardTitle>
            <CardDescription>Professional services we offer.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Service descriptions and details would go here.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tab4" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>About Us</CardTitle>
            <CardDescription>Learn more about our company.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Company information and team details would be shown here.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tab5" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Blog</CardTitle>
            <CardDescription>Latest news and articles.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Blog posts and articles would be listed here.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tab6" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <CardDescription>Get in touch with us.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Contact information and forms would be available here.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const CustomStyling: Story = {
  args: {
    defaultValue: 'design',
  },
  render: args => (
    <Tabs {...args} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3 bg-blue-100 dark:bg-blue-900">
        <TabsTrigger
          value="design"
          className="data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-blue-500"
        >
          Design
        </TabsTrigger>
        <TabsTrigger
          value="develop"
          className="data-[state=active]:bg-green-600 data-[state=active]:text-white dark:data-[state=active]:bg-green-500"
        >
          Develop
        </TabsTrigger>
        <TabsTrigger
          value="deploy"
          className="data-[state=active]:bg-purple-600 data-[state=active]:text-white dark:data-[state=active]:bg-purple-500"
        >
          Deploy
        </TabsTrigger>
      </TabsList>
      <TabsContent value="design" className="mt-4">
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-700">Design Phase</CardTitle>
            <CardDescription>
              Create mockups and prototypes for your project.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Custom styling applied to tabs with blue theme.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="develop" className="mt-4">
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-700">Development Phase</CardTitle>
            <CardDescription>
              Build and implement your application features.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Custom styling applied to tabs with green theme.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="deploy" className="mt-4">
        <Card className="border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-700">Deployment Phase</CardTitle>
            <CardDescription>
              Deploy your application to production environment.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Custom styling applied to tabs with purple theme.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const WithDisabledTab: Story = {
  args: {
    defaultValue: 'enabled1',
  },
  render: args => (
    <Tabs {...args} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="enabled1">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="enabled2">Available</TabsTrigger>
        <TabsTrigger value="enabled3">Ready</TabsTrigger>
      </TabsList>
      <TabsContent value="enabled1" className="mt-4">
        <Card>
          <CardContent>
            <p className="text-sm">
              This tab is active and accessible. The second tab is disabled and
              cannot be activated.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="disabled" className="mt-4">
        <Card>
          <CardContent>
            <p className="text-sm">
              This content should not be accessible since the tab is disabled.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="enabled2" className="mt-4">
        <Card>
          <CardContent>
            <p className="text-sm">
              This tab is available and can be activated normally.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="enabled3" className="mt-4">
        <Card>
          <CardContent>
            <p className="text-sm">
              This tab is ready for use and fully functional.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};
