import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';
import { Mail } from '../../icons';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible button component built with Radix UI and Tailwind CSS, supporting multiple variants and sizes.',
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
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      description: 'The visual style variant of the button',
      table: {
        type: {
          summary: 'default | destructive | outline | secondary | ghost | link',
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
