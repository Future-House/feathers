import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';
import { Button } from '../button/button';
import { Bell, Check } from 'lucide-react';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile card component for displaying content in a contained format.',
      },
    },
  },
  tags: [],
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'CSS class name to apply to the Card component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
  },
  subcomponents: {
    CardHeader: {
      description:
        'Header section of the card that contains the title, description, and optional action. Uses CSS Grid for layout with container queries support.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the card header',
        },
      },
    },
    CardTitle: {
      description:
        'Displays the main title of the card. Uses semantic heading styling with semibold font weight.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the card title',
        },
      },
    },
    CardDescription: {
      description:
        'Provides additional descriptive text below the title. Uses muted foreground color for visual hierarchy.',
      argTypes: {
        className: {
          type: 'string',
          description:
            'Additional CSS classes to apply to the card description',
        },
      },
    },
    CardAction: {
      description:
        'Optional action area positioned in the top-right corner of the card header. Automatically positions itself using CSS Grid.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the card action',
        },
      },
    },
    CardContent: {
      description:
        'Main content area of the card. Provides consistent padding and can contain any elements.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the card content',
        },
      },
    },
    CardFooter: {
      description:
        'Footer section of the card typically used for actions like buttons. Uses flexbox for item alignment.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the card footer',
        },
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ className }) => (
    <Card className={`w-[350px] ${className}`}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content can contain any elements.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const SimpleCard: Story = {
  render: ({ className }) => (
    <Card className={`w-[350px] ${className}`}>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                placeholder="Name of your project"
                className="border-input bg-background flex h-10 w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const NotificationCard: Story = {
  render: ({ className }) => (
    <Card className={`w-[380px] ${className}`}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md border p-4">
          <Bell />
          <div className="flex-1 space-y-1">
            <p className="text-sm leading-none font-medium">
              Push Notifications
            </p>
            <p className="text-muted-foreground text-sm">
              Send notifications to device.
            </p>
          </div>
          <Button variant="outline" size="icon">
            <Check className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const WithoutFooter: Story = {
  render: ({ className }) => (
    <Card className={`w-[350px] ${className}`}>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you&apos;re done.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <label htmlFor="username" className="text-sm font-medium">
            Username
          </label>
          <input
            id="username"
            defaultValue="@shadcn"
            className="border-input bg-background flex h-10 w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            defaultValue="shadcn@example.com"
            className="border-input bg-background flex h-10 w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>
      </CardContent>
    </Card>
  ),
};
