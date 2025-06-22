import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import { CheckCircle2, AlertCircle, XCircle, Info } from 'lucide-react';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A badge component for displaying small bits of information, status indicators, or labels. Built with Tailwind CSS and class-variance-authority.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      description: 'The visual style variant of the badge',
      table: {
        type: { summary: 'default | secondary | destructive | outline' },
        defaultValue: { summary: 'default' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'The content to display inside the badge',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4 flex-wrap">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-4 flex-wrap">
      <Badge variant="default">
        <CheckCircle2 className="mr-1 h-3 w-3" />
        Success
      </Badge>
      <Badge variant="secondary">
        <Info className="mr-1 h-3 w-3" />
        Info
      </Badge>
      <Badge variant="destructive">
        <XCircle className="mr-1 h-3 w-3" />
        Error
      </Badge>
      <Badge variant="outline">
        <AlertCircle className="mr-1 h-3 w-3" />
        Warning
      </Badge>
    </div>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">Server Status:</span>
        <Badge variant="default">Online</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Build Status:</span>
        <Badge variant="destructive">Failed</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Deployment:</span>
        <Badge variant="secondary">Pending</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Environment:</span>
        <Badge variant="outline">Development</Badge>
      </div>
    </div>
  ),
};

export const CountBadges: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">Notifications</span>
        <Badge variant="default">3</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Messages</span>
        <Badge variant="secondary">12</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Errors</span>
        <Badge variant="destructive">5</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Warnings</span>
        <Badge variant="outline">2</Badge>
      </div>
    </div>
  ),
};

export const TagsExample: Story = {
  render: () => (
    <div className="flex items-start gap-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Categories</h4>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Tailwind CSS</Badge>
          <Badge variant="outline">Next.js</Badge>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Skills</h4>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="secondary">Frontend</Badge>
          <Badge variant="secondary">Backend</Badge>
          <Badge variant="secondary">DevOps</Badge>
          <Badge variant="secondary">UI/UX</Badge>
        </div>
      </div>
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex items-center gap-4 flex-wrap">
      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Custom Blue</Badge>
      <Badge className="bg-green-100 text-green-800 border-green-200">Custom Green</Badge>
      <Badge className="bg-purple-100 text-purple-800 border-purple-200">Custom Purple</Badge>
      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Custom Yellow</Badge>
    </div>
  ),
};