import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './badge';
import { CheckCircle2, AlertCircle, XCircle, Info } from 'lucide-react';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A badge component for displaying small bits of information, status indicators, or labels. Built with Tailwind CSS and class-variance-authority.',
      },
    },
  },
  tags: [],
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'CSS class name to apply to the accordion root',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
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
    <div className="flex flex-wrap items-center gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const WithIcons: Story = {
  render: args => (
    <div className="flex flex-wrap items-center gap-4">
      <Badge variant="default" {...args}>
        <CheckCircle2 className="mr-1 h-3 w-3" />
        Success
      </Badge>
      <Badge variant="secondary" {...args}>
        <Info className="mr-1 h-3 w-3" />
        Info
      </Badge>
      <Badge variant="destructive" {...args}>
        <XCircle className="mr-1 h-3 w-3" />
        Error
      </Badge>
      <Badge variant="outline" {...args}>
        <AlertCircle className="mr-1 h-3 w-3" />
        Warning
      </Badge>
    </div>
  ),
};

export const StatusIndicators: Story = {
  render: args => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">Server Status:</span>
        <Badge variant="default" {...args}>
          Online
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Build Status:</span>
        <Badge variant="destructive" {...args}>
          Failed
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Deployment:</span>
        <Badge variant="secondary" {...args}>
          Pending
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Environment:</span>
        <Badge variant="outline" {...args}>
          Development
        </Badge>
      </div>
    </div>
  ),
};

export const CountBadges: Story = {
  render: args => (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">Notifications</span>
        <Badge variant="default" {...args}>
          3
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Messages</span>
        <Badge variant="secondary" {...args}>
          12
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Errors</span>
        <Badge variant="destructive" {...args}>
          5
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Warnings</span>
        <Badge variant="outline" {...args}>
          2
        </Badge>
      </div>
    </div>
  ),
};

export const TagsExample: Story = {
  render: args => (
    <div className="flex items-start gap-4">
      <div>
        <h4 className="mb-2 text-sm font-medium">Categories</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" {...args}>
            React
          </Badge>
          <Badge variant="outline" {...args}>
            TypeScript
          </Badge>
          <Badge variant="outline" {...args}>
            Tailwind CSS
          </Badge>
          <Badge variant="outline" {...args}>
            Next.js
          </Badge>
        </div>
      </div>
      <div>
        <h4 className="mb-2 text-sm font-medium">Skills</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" {...args}>
            Frontend
          </Badge>
          <Badge variant="secondary" {...args}>
            Backend
          </Badge>
          <Badge variant="secondary" {...args}>
            DevOps
          </Badge>
          <Badge variant="secondary" {...args}>
            UI/UX
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const CustomColors: Story = {
  render: args => (
    <div className="flex flex-wrap items-center gap-4">
      <Badge className="border-blue-200 bg-blue-100 text-blue-800" {...args}>
        Custom Blue
      </Badge>
      <Badge className="border-green-200 bg-green-100 text-green-800" {...args}>
        Custom Green
      </Badge>
      <Badge
        className="border-purple-200 bg-purple-100 text-purple-800"
        {...args}
      >
        Custom Purple
      </Badge>
      <Badge
        className="border-yellow-200 bg-yellow-100 text-yellow-800"
        {...args}
      >
        Custom Yellow
      </Badge>
    </div>
  ),
};
