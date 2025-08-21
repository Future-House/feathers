import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './skeleton';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component:
          'A skeleton placeholder component that displays a loading state with a pulsing animation while content is being loaded.',
      },
    },
  },
  tags: [],
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the skeleton',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'h-4 w-[250px]',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-2 w-[100px]" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-6 w-[300px]" />
      <Skeleton className="h-8 w-[400px]" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-12 w-12 rounded-full" />
      <Skeleton className="h-20 w-20 rounded-lg" />
      <Skeleton className="h-32 w-full rounded-md" />
    </div>
  ),
};

export const CardExample: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
};

export const ListExample: Story = {
  render: () => (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-3 w-[200px]" />
            <Skeleton className="h-3 w-[150px]" />
          </div>
        </div>
      ))}
    </div>
  ),
};
