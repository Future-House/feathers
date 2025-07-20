import type { Meta, StoryObj } from '@storybook/react-vite';
import { CircularProgress } from './circular-progress';

const meta = {
  title: 'Components/CircularProgress',
  component: CircularProgress,
  parameters: {
    docs: {
      description: {
        component:
          'A circular progress indicator that can show determinate progress or spin indefinitely in indeterminate mode.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description:
        'The value of the progress indicator for the determinate variant. Value between 0 and 100.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    thickness: {
      control: { type: 'range', min: 1, max: 8, step: 0.1 },
      description: 'The thickness of the progress ring.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3.6' },
      },
    },
    indeterminate: {
      control: 'boolean',
      description:
        'If true, the circular progress is indeterminate and will spin continuously.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg', 'xl'],
      description: 'The size of the circular progress indicator.',
      table: {
        type: { summary: 'sm | default | lg | xl' },
        defaultValue: { summary: 'default' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'muted'],
      description: 'The color variant of the circular progress indicator.',
      table: {
        type: { summary: 'default | secondary | muted' },
        defaultValue: { summary: 'default' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the component.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    value: 75,
    thickness: 3.6,
    indeterminate: false,
    size: 'default',
    variant: 'default',
  },
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 75,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: args => (
    <div className="flex items-center gap-4">
      <CircularProgress {...args} size="sm" value={75} />
      <CircularProgress {...args} size="default" value={75} />
      <CircularProgress {...args} size="lg" value={75} />
      <CircularProgress {...args} size="xl" value={75} />
    </div>
  ),
};

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: args => (
    <div className="flex items-center gap-4">
      <CircularProgress {...args} variant="default" value={75} />
      <CircularProgress {...args} variant="secondary" value={75} />
      <CircularProgress {...args} variant="muted" value={75} />
    </div>
  ),
};

export const Thickness: Story = {
  parameters: {
    controls: { exclude: 'thickness' },
  },
  render: args => (
    <div className="flex items-center gap-4">
      <CircularProgress {...args} thickness={2} value={75} />
      <CircularProgress {...args} thickness={3.6} value={75} />
      <CircularProgress {...args} thickness={5} value={75} />
      <CircularProgress {...args} thickness={7} value={75} />
    </div>
  ),
};

export const ProgressValues: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: args => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <CircularProgress {...args} value={0} />
        <p className="mt-2 text-xs">0%</p>
      </div>
      <div className="text-center">
        <CircularProgress {...args} value={25} />
        <p className="mt-2 text-xs">25%</p>
      </div>
      <div className="text-center">
        <CircularProgress {...args} value={50} />
        <p className="mt-2 text-xs">50%</p>
      </div>
      <div className="text-center">
        <CircularProgress {...args} value={75} />
        <p className="mt-2 text-xs">75%</p>
      </div>
      <div className="text-center">
        <CircularProgress {...args} value={100} />
        <p className="mt-2 text-xs">100%</p>
      </div>
    </div>
  ),
};
