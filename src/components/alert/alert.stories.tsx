import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, AlertTitle, AlertDescription } from '../alert';
import {
  Terminal,
  AlertCircle,
  CheckCircle2,
  Info,
  AlertTriangle,
} from 'lucide-react';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component:
          'Displays a callout for user attention. A flexible component for displaying messages, notifications, or important information to users with optional icons and descriptions.',
      },
    },
  },
  tags: [],
  argTypes: {
    // Root component props
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive'],
      description: 'The visual style variant of the alert',
      table: {
        type: { summary: '"default" | "destructive"' },
        defaultValue: { summary: '"default"' },
      },
    },
    color: {
      control: { type: 'select' },
      options: ['success', 'warning', 'info', 'error'],
      description: 'The color theme of the alert',
      table: {
        type: { summary: '"success" | "warning" | "info" | "error"' },
        defaultValue: { summary: undefined },
      },
    },
    // HTML attributes
    className: {
      control: { type: 'text' },
      description: 'CSS class name to apply to the alert root',
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
        disable: true,
      },
    },
    role: {
      control: { type: 'text' },
      description: 'ARIA role attribute (defaults to "alert")',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"alert"' },
        disable: true,
      },
    },
  },
  subcomponents: {
    AlertTitle: {
      description: 'Displays the title/heading text for the alert',
      argTypes: {
        className: {
          type: 'string',
          description: 'CSS class name to apply to the alert title',
          defaultValue: undefined,
        },
      },
    },
    AlertDescription: {
      description: 'Displays the descriptive content for the alert',
      argTypes: {
        className: {
          type: 'string',
          description: 'CSS class name to apply to the alert description',
          defaultValue: undefined,
        },
      },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: args => (
    <Alert {...args}>
      <Terminal />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the CLI.
      </AlertDescription>
    </Alert>
  ),
};

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <>
      <Alert variant="default">
        <Terminal />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the CLI.
        </AlertDescription>
      </Alert>
      <br />
      <Alert variant="destructive">
        <Terminal />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the CLI.
        </AlertDescription>
      </Alert>
    </>
  ),
};

export const WithoutIcon: Story = {
  args: {
    variant: 'default',
  },
  render: args => (
    <Alert {...args}>
      <AlertTitle>No Icon Alert</AlertTitle>
      <AlertDescription>
        This alert doesn&apos;t include an icon. The layout automatically
        adjusts to accommodate the missing icon.
      </AlertDescription>
    </Alert>
  ),
};

export const TitleOnly: Story = {
  args: {
    variant: 'default',
  },
  render: args => (
    <Alert {...args}>
      <Info />
      <AlertTitle>Simple notification</AlertTitle>
    </Alert>
  ),
};

export const DescriptionOnly: Story = {
  args: {
    variant: 'default',
  },
  render: args => (
    <Alert {...args}>
      <CheckCircle2 />
      <AlertDescription>
        Operation completed successfully without any issues.
      </AlertDescription>
    </Alert>
  ),
};

export const LongContent: Story = {
  args: {
    variant: 'default',
  },
  render: args => (
    <Alert {...args}>
      <Terminal />
      <AlertTitle>Installation Instructions</AlertTitle>
      <AlertDescription>
        <div className="space-y-2">
          <p>To get started with this component library, follow these steps:</p>
          <ol className="list-inside list-decimal space-y-1">
            <li>Install the package using npm or yarn</li>
            <li>Import the components you need</li>
            <li>Configure your Tailwind CSS setup</li>
            <li>Start building your application</li>
          </ol>
          <p>
            For more detailed instructions, please refer to our documentation.
          </p>
        </div>
      </AlertDescription>
    </Alert>
  ),
};

export const CustomStyling: Story = {
  args: {
    variant: 'default',
  },
  render: args => (
    <Alert {...args} className="border-blue-200 bg-blue-50">
      <Info className="text-blue-600" />
      <AlertTitle className="text-blue-800">Custom Styled Alert</AlertTitle>
      <AlertDescription className="text-blue-700">
        This alert demonstrates custom styling with blue colors while
        maintaining accessibility.
      </AlertDescription>
    </Alert>
  ),
};

export const ColorVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-4">
      <Alert>
        <Terminal />
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </Alert>
      <Alert color="success">
        <CheckCircle2 />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          This is a success message confirming an action.
        </AlertDescription>
      </Alert>
      <Alert color="warning">
        <AlertTriangle />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          This is a warning message that requires attention.
        </AlertDescription>
      </Alert>
      <Alert color="info">
        <Info />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>This is an informational message.</AlertDescription>
      </Alert>
      <Alert color="error">
        <AlertCircle />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          This is an error message indicating a problem.
        </AlertDescription>
      </Alert>
    </div>
  ),
};
