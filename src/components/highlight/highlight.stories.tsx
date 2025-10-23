import type { Meta, StoryObj } from '@storybook/react-vite';
import { Highlight, type HighlightVariant } from './highlight';

const meta = {
  title: 'Components/Highlight',
  component: Highlight,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ],
      description: 'The highlight variant (1-20)',
    },
    spread: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'The spread/padding around the text',
    },
    spreadX: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Horizontal spread/padding',
    },
    spreadY: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Vertical spread/padding',
    },
    className: {
      control: 'text',
      description:
        'Use Tailwind utilities like "after:bg-red-500" to style the highlight',
    },
  },
} satisfies Meta<typeof Highlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Highlighted text',
    variant: 1,
    spread: 'md',
    className: 'after:bg-yellow-300',
  },
};

export const WithTailwindColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="text-2xl">
        <Highlight variant={1} spread="md" className="after:bg-red-500">
          Red highlight
        </Highlight>
      </div>
      <div className="text-2xl">
        <Highlight variant={2} spread="md" className="after:bg-blue-500">
          Blue highlight
        </Highlight>
      </div>
      <div className="text-2xl">
        <Highlight variant={3} spread="md" className="after:bg-green-500">
          Green highlight
        </Highlight>
      </div>
      <div className="text-2xl">
        <Highlight variant={4} spread="md" className="after:bg-purple-500">
          Purple highlight
        </Highlight>
      </div>
      <div className="text-2xl">
        <Highlight variant={5} spread="md" className="after:bg-pink-500">
          Pink highlight
        </Highlight>
      </div>
    </div>
  ),
};

export const DifferentVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="text-2xl">
        <Highlight variant={1} spread="md" className="after:bg-yellow-300">
          Variant 1
        </Highlight>
      </div>
      <div className="text-2xl">
        <Highlight variant={2} spread="md" className="after:bg-yellow-300">
          Variant 2
        </Highlight>
      </div>
      <div className="text-2xl">
        <Highlight variant={3} spread="md" className="after:bg-yellow-300">
          Variant 3
        </Highlight>
      </div>
      <div className="text-2xl">
        <Highlight variant={7} spread="md" className="after:bg-yellow-300">
          Variant 7
        </Highlight>
      </div>
      <div className="text-2xl">
        <Highlight variant={10} spread="md" className="after:bg-yellow-300">
          Variant 10
        </Highlight>
      </div>
      <div className="text-2xl">
        <Highlight variant={15} spread="md" className="after:bg-yellow-300">
          Variant 15
        </Highlight>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8">
      {Array.from({ length: 20 }, (_, i) => i + 1).map(variant => (
        <div key={variant} className="text-2xl">
          <Highlight
            variant={variant as HighlightVariant}
            spread="md"
            className="after:bg-yellow-300"
          >
            Variant {variant}
          </Highlight>
        </div>
      ))}
    </div>
  ),
};

export const DifferentSpreads: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="text-2xl">
        <Highlight variant={1} spread="none" className="after:bg-yellow-300">
          No spread
        </Highlight>
      </div>
      <div className="text-2xl">
        <Highlight variant={1} spread="sm" className="after:bg-yellow-300">
          Small spread
        </Highlight>
      </div>
      <div className="text-2xl">
        <Highlight variant={1} spread="md" className="after:bg-yellow-300">
          Medium spread
        </Highlight>
      </div>
      <div className="text-2xl">
        <Highlight variant={1} spread="lg" className="after:bg-yellow-300">
          Large spread
        </Highlight>
      </div>
      <div className="text-2xl">
        <Highlight variant={1} spread="xl" className="after:bg-yellow-300">
          Extra large spread
        </Highlight>
      </div>
    </div>
  ),
};

export const AxisSpecificSpread: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="text-2xl">
        <Highlight
          variant={1}
          spreadX="xl"
          spreadY="sm"
          className="after:bg-yellow-300"
        >
          Wide horizontal, narrow vertical
        </Highlight>
      </div>
      <div className="text-2xl">
        <Highlight
          variant={1}
          spreadX="sm"
          spreadY="xl"
          className="after:bg-yellow-300"
        >
          Narrow horizontal, tall vertical
        </Highlight>
      </div>
    </div>
  ),
};

export const IndividualEdgeSpread: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="text-2xl">
        <Highlight
          variant={1}
          spreadLeft="xl"
          spreadRight="none"
          className="after:bg-yellow-300"
        >
          Left spread only
        </Highlight>
      </div>
      <div className="text-2xl">
        <Highlight
          variant={1}
          spreadTop="xl"
          spreadBottom="none"
          className="after:bg-yellow-300"
        >
          Top spread only
        </Highlight>
      </div>
    </div>
  ),
};

export const InSentence: Story = {
  render: () => (
    <p className="max-w-2xl text-lg leading-relaxed">
      This is a sentence with{' '}
      <Highlight variant={1} spread="sm" className="after:bg-yellow-300">
        highlighted words
      </Highlight>{' '}
      in the middle. You can use{' '}
      <Highlight variant={3} spread="md" className="after:bg-green-300">
        different variants
      </Highlight>{' '}
      and{' '}
      <Highlight variant={7} spread="md" className="after:bg-pink-300">
        different colors
      </Highlight>{' '}
      to emphasize different parts of your text.
    </p>
  ),
};

export const WithTailwindUtilities: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="text-2xl">
        <Highlight
          variant={5}
          spread="md"
          className="after:-translate-x-4 after:translate-y-2 after:rotate-12 after:bg-yellow-300"
        >
          Rotated and translated
        </Highlight>
      </div>
      <div className="text-2xl">
        <Highlight
          variant={12}
          spread="md"
          className="after:bg-yellow-300 after:opacity-50"
        >
          Semi-transparent
        </Highlight>
      </div>
      <div className="text-2xl">
        <Highlight
          variant={7}
          spread="md"
          className="after:bg-gradient-to-r after:from-yellow-300 after:to-pink-500"
        >
          Gradient highlight
        </Highlight>
      </div>
    </div>
  ),
};

export const LargeText: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl font-bold">
        <Highlight variant={7} spread="lg" className="after:bg-yellow-300">
          Large Heading
        </Highlight>
      </h1>
      <h2 className="text-3xl font-semibold">
        <Highlight variant={3} spread="md" className="after:bg-blue-300">
          Medium Heading
        </Highlight>
      </h2>
      <p className="text-base">
        <Highlight variant={1} spread="sm" className="after:bg-green-300">
          Regular text
        </Highlight>
      </p>
    </div>
  ),
};
