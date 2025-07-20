import type { Meta, StoryObj } from '@storybook/react-vite';
import { CircularProgress } from './circular-progress';

const meta = {
  title: 'Components/CircularProgress',
  component: CircularProgress,
  parameters: {
    docs: {
      description: {
        component:
          'A circular progress indicator that shows determinate or indeterminate progress with optional children content in the center.',
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
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the circular progress indicator.',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    determinate: {
      control: { type: 'boolean' },
      description:
        'If true, the component is in determinate mode. If false, indeterminate mode.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: false,
      description: 'Content to display in the center of the circular progress.',
      table: {
        type: { summary: 'React.ReactNode' },
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
    size: 'md',
    determinate: false,
  },
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: args => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <CircularProgress {...args} size="sm" />
        <p className="mt-2 text-xs">Small (24px)</p>
      </div>
      <div className="text-center">
        <CircularProgress {...args} size="md" />
        <p className="mt-2 text-xs">Medium (40px)</p>
      </div>
      <div className="text-center">
        <CircularProgress {...args} size="lg" />
        <p className="mt-2 text-xs">Large (64px)</p>
      </div>
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
        <CircularProgress {...args} determinate={true} value={0} />
        <p className="mt-2 text-xs">0%</p>
      </div>
      <div className="text-center">
        <CircularProgress {...args} determinate={true} value={25} />
        <p className="mt-2 text-xs">25%</p>
      </div>
      <div className="text-center">
        <CircularProgress {...args} determinate={true} value={50} />
        <p className="mt-2 text-xs">50%</p>
      </div>
      <div className="text-center">
        <CircularProgress {...args} determinate={true} value={75} />
        <p className="mt-2 text-xs">75%</p>
      </div>
      <div className="text-center">
        <CircularProgress {...args} determinate={true} value={100} />
        <p className="mt-2 text-xs">100%</p>
      </div>
    </div>
  ),
};

/**
 * Circular progress with children content in the center.
 */
export const WithChildren: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: args => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <CircularProgress {...args} determinate={true} value={90}>
          <div className="flex items-center gap-1">
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
        </CircularProgress>
        <p className="mt-2 text-xs">With icon</p>
      </div>
      <div className="text-center">
        <CircularProgress {...args} determinate={true} value={25} size="lg">
          <span className="text-sm font-medium">25%</span>
        </CircularProgress>
        <p className="mt-2 text-xs">Simple text</p>
      </div>
    </div>
  ),
};
