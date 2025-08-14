import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';
import { Mail } from '../../icons';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'A modern button component featuring soft variant styling inspired by MUI Joy. Built with Radix UI and Tailwind CSS, it provides subtle backgrounds with matching text colors for a refined appearance while maintaining excellent accessibility.',
      },
    },
  },
  tags: [],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'destructive',
        'success',
        'warning',
        'info',
        'error',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      description:
        'The visual style variant of the button. All variants feature soft styling with subtle backgrounds and matching text colors.',
      table: {
        type: {
          summary:
            'default | destructive | success | warning | info | error | outline | secondary | ghost | link',
        },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      description: 'The size of the button',
      table: {
        type: { summary: 'default | sm | lg | icon' },
        defaultValue: { summary: 'default' },
      },
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Render as a child component using Radix Slot',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the button is full width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Shows a loading spinner and disables the button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
      <Button variant="error">Error</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Mail />
      </Button>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <Button fullWidth size="sm">
        Small
      </Button>
      <Button fullWidth size="default">
        Default
      </Button>
      <Button fullWidth size="lg">
        Large
      </Button>
      <Button fullWidth size="icon">
        <Mail />
      </Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button>
        <Mail />
        Login with Email
      </Button>
      <Button variant="outline">
        Continue
        <Mail />
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button loading>Default Loading</Button>
      <Button loading variant="secondary">
        Secondary Loading
      </Button>
      <Button loading variant="destructive">
        Destructive Loading
      </Button>
      <Button loading variant="success">
        Success Loading
      </Button>
      <Button loading variant="warning">
        Warning Loading
      </Button>
      <Button loading variant="info">
        Info Loading
      </Button>
      <Button loading variant="error">
        Error Loading
      </Button>
      <Button loading variant="outline">
        Outline Loading
      </Button>
      <Button loading variant="ghost">
        Ghost Loading
      </Button>
    </div>
  ),
};

export const LoadingSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button loading size="sm">
        Small
      </Button>
      <Button loading size="default">
        Default
      </Button>
      <Button loading size="lg">
        Large
      </Button>
      <Button loading size="icon">
        <span className="sr-only">Loading</span>
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button disabled>Disabled Default</Button>
      <Button variant="secondary" disabled>
        Disabled Secondary
      </Button>
      <Button variant="outline" disabled>
        Disabled Outline
      </Button>
    </div>
  ),
};

export const AsChild: Story = {
  render: () => (
    <Button asChild>
      <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
        Visit shadcn ui
      </a>
    </Button>
  ),
};
