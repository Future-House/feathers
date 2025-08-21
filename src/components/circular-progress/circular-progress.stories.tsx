import type { Meta, StoryObj } from '@storybook/react-vite';
import { CircularProgress } from './circular-progress';
import { Typography } from '../typography';

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
    color: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'info', 'destructive'],
      description: 'The color theme of the circular progress.',
      table: {
        type: {
          summary: '"primary" | "success" | "warning" | "info" | "destructive"',
        },
        defaultValue: { summary: '"primary"' },
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
        <Typography variant="small" className="mt-2">
          Small (24px)
        </Typography>
      </div>
      <div className="text-center">
        <CircularProgress {...args} size="md" />
        <Typography variant="small" className="mt-2">
          Medium (40px)
        </Typography>
      </div>
      <div className="text-center">
        <CircularProgress {...args} size="lg" />
        <Typography variant="small" className="mt-2">
          Large (64px)
        </Typography>
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
        <Typography variant="small" className="mt-2">
          0%
        </Typography>
      </div>
      <div className="text-center">
        <CircularProgress {...args} determinate={true} value={25} />
        <Typography variant="small" className="mt-2">
          25%
        </Typography>
      </div>
      <div className="text-center">
        <CircularProgress {...args} determinate={true} value={50} />
        <Typography variant="small" className="mt-2">
          50%
        </Typography>
      </div>
      <div className="text-center">
        <CircularProgress {...args} determinate={true} value={75} />
        <Typography variant="small" className="mt-2">
          75%
        </Typography>
      </div>
      <div className="text-center">
        <CircularProgress {...args} determinate={true} value={100} />
        <Typography variant="small" className="mt-2">
          100%
        </Typography>
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
        <Typography variant="small" className="mt-2">
          With icon
        </Typography>
      </div>
      <div className="text-center">
        <CircularProgress {...args} determinate={true} value={25} size="lg">
          <span className="text-sm font-medium">25%</span>
        </CircularProgress>
        <Typography variant="small" className="mt-2">
          Simple text
        </Typography>
      </div>
    </div>
  ),
};

export const ColorVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: args => (
    <div className="flex items-center gap-6">
      <div className="text-center">
        <CircularProgress
          {...args}
          color="primary"
          determinate={true}
          value={75}
        />
        <Typography variant="small" className="mt-2">
          Primary
        </Typography>
      </div>
      <div className="text-center">
        <CircularProgress
          {...args}
          color="success"
          determinate={true}
          value={75}
        />
        <Typography variant="small" className="mt-2">
          Success
        </Typography>
      </div>
      <div className="text-center">
        <CircularProgress
          {...args}
          color="warning"
          determinate={true}
          value={75}
        />
        <Typography variant="small" className="mt-2">
          Warning
        </Typography>
      </div>
      <div className="text-center">
        <CircularProgress
          {...args}
          color="info"
          determinate={true}
          value={75}
        />
        <Typography variant="small" className="mt-2">
          Info
        </Typography>
      </div>
      <div className="text-center">
        <CircularProgress
          {...args}
          color="destructive"
          determinate={true}
          value={75}
        />
        <Typography variant="small" className="mt-2">
          Destructive
        </Typography>
      </div>
    </div>
  ),
};

export const ColorVariantsIndeterminate: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: args => (
    <div className="flex items-center gap-6">
      <div className="text-center">
        <CircularProgress {...args} color="primary" />
        <Typography variant="small" className="mt-2">
          Primary
        </Typography>
      </div>
      <div className="text-center">
        <CircularProgress {...args} color="success" />
        <Typography variant="small" className="mt-2">
          Success
        </Typography>
      </div>
      <div className="text-center">
        <CircularProgress {...args} color="warning" />
        <Typography variant="small" className="mt-2">
          Warning
        </Typography>
      </div>
      <div className="text-center">
        <CircularProgress {...args} color="info" />
        <Typography variant="small" className="mt-2">
          Info
        </Typography>
      </div>
      <div className="text-center">
        <CircularProgress {...args} color="destructive" />
        <Typography variant="small" className="mt-2">
          Destructive
        </Typography>
      </div>
    </div>
  ),
};
