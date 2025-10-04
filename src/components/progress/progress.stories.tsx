import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './progress';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    docs: {
      description: {
        component:
          'A progress bar component built with Radix UI and Tailwind CSS. Provides a visual indicator of completion status with smooth transitions.',
      },
    },
  },
  tags: [],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description:
        'The progress value (0-100). Set to null or undefined for indeterminate state.',
      table: {
        type: { summary: 'number | null | undefined' },
        defaultValue: { summary: '0' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Values: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Progress value={0} />
      <Progress value={25} />
      <Progress value={50} />
      <Progress value={75} />
      <Progress value={100} />
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Progress value={60} className="h-2" />
      <Progress value={60} className="h-6" />
      <Progress value={60} className="h-8" />
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">
          Loading (indeterminate state)
        </p>
        <Progress value={null} />
      </div>
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">
          Custom height - indeterminate
        </p>
        <Progress value={undefined} className="h-2" />
      </div>
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">Larger indeterminate</p>
        <Progress value={null} className="h-6" />
      </div>
    </div>
  ),
};
