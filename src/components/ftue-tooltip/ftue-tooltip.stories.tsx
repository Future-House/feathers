import type { Meta, StoryObj } from '@storybook/react-vite';
import { FtueTooltip } from './ftue-tooltip';
import { Typography } from '../typography';
import { Button } from '../button';

const meta = {
  title: 'Components/FtueTooltip',
  component: FtueTooltip,
  parameters: {
    docs: {
      description: {
        component:
          'A First Time User Experience (FTUE) tooltip component for displaying step-by-step guidance. Positioned absolutely below elements with a triangle pointer and optional next button.',
      },
    },
    layout: 'centered',
  },
  tags: [],
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'CSS class name to apply to the tooltip root',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    headline: {
      control: { type: 'text' },
      description: 'The headline text to display at the top of the tooltip',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: undefined },
      },
    },
    isLast: {
      control: { type: 'boolean' },
      description:
        'Whether this is the last tooltip in the series. When true, the arrow button is hidden.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    leftButton: {
      control: { type: 'text' },
      description:
        'Optional button to display on the left side of the same row as the next arrow',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: undefined },
      },
    },
    onNext: {
      control: { type: 'function' },
      description:
        'Optional click handler for progressing to the next tooltip. Called when clicking anywhere in the tooltip or the arrow button.',
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: undefined },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'The content to display inside the tooltip',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    arrowPosition: {
      control: { type: 'select' },
      options: ['top', 'left', 'right'],
      description:
        'Position of the triangle arrow. Useful for mobile layouts where tooltips on the side of the screen get cut off.',
      table: {
        type: { summary: "'top' | 'left' | 'right'" },
        defaultValue: { summary: "'top'" },
      },
    },
  },
} satisfies Meta<typeof FtueTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <div className="relative h-96 w-full">
      <div className="absolute top-20 left-1/2 -translate-x-1/2">
        <FtueTooltip {...args}>
          <Typography variant="p" className="text-sm text-black">
            Describe your query here in 2000 characters or less. Typically
            open-ended questions work best. Some other advice goes here.
          </Typography>
        </FtueTooltip>
      </div>
    </div>
  ),
  args: {
    headline: 'Getting Started (1/3)',
    onNext: () => console.log('Next clicked'),
  },
};

export const WithTitle: Story = {
  render: args => (
    <div className="relative h-96 w-full">
      <div className="absolute top-20 left-1/2 -translate-x-1/2">
        <FtueTooltip {...args}>
          <Typography variant="p" className="text-sm text-black">
            Describe your query here in 2000 characters or less. Typically
            open-ended questions work best. Some other advice goes here.
          </Typography>
        </FtueTooltip>
      </div>
    </div>
  ),
  args: {
    headline: 'Getting Started (1/3)',
    onNext: () => console.log('Next clicked'),
  },
};

export const LastTooltip: Story = {
  render: args => (
    <div className="relative h-96 w-full">
      <div className="absolute top-20 left-1/2 -translate-x-1/2">
        <FtueTooltip {...args}>
          <Typography variant="p" className="text-sm text-black">
            This is the last tooltip in the series. The arrow button is hidden
            and clicking anywhere won&apos;t progress to the next step.
          </Typography>
        </FtueTooltip>
      </div>
    </div>
  ),
  args: {
    headline: 'Getting Started (3/3)',
    isLast: true,
  },
};

export const WithoutNextButton: Story = {
  render: args => (
    <div className="relative h-96 w-full">
      <div className="absolute top-20 left-1/2 -translate-x-1/2">
        <FtueTooltip {...args}>
          <Typography variant="p" className="text-sm text-black">
            This tooltip doesn&apos;t have an onNext handler, so it&apos;s not
            clickable and has no arrow button.
          </Typography>
        </FtueTooltip>
      </div>
    </div>
  ),
  args: {},
};

export const PositionedBelowElement: Story = {
  render: args => (
    <div className="relative flex h-96 w-full items-center justify-center">
      <div className="relative">
        <button className="rounded bg-blue-500 px-4 py-2 text-white">
          Hover Target
        </button>
        <FtueTooltip
          {...args}
          className="top-full left-1/2 mt-2 -translate-x-1/2"
        >
          <Typography variant="p" className="text-sm text-black">
            This tooltip is positioned directly below the button element.
          </Typography>
        </FtueTooltip>
      </div>
    </div>
  ),
  args: {
    headline: 'Getting Started (1/3)',
    onNext: () => console.log('Next clicked'),
  },
};

export const CustomPositioning: Story = {
  render: args => (
    <div className="relative h-96 w-full">
      <div className="absolute top-32 left-20">
        <FtueTooltip {...args} className="top-full left-0 mt-2">
          <Typography variant="p" className="text-sm text-black">
            Custom positioned tooltip aligned to the left.
          </Typography>
        </FtueTooltip>
      </div>
      <div className="absolute top-32 right-20">
        <FtueTooltip {...args} className="top-full right-0 mt-2">
          <Typography variant="p" className="text-sm text-black">
            Custom positioned tooltip aligned to the right.
          </Typography>
        </FtueTooltip>
      </div>
    </div>
  ),
  args: {
    onNext: () => console.log('Next clicked'),
  },
};

export const WithLeftButton: Story = {
  render: args => (
    <div className="relative h-96 w-full">
      <div className="absolute top-20 left-1/2 -translate-x-1/2">
        <FtueTooltip {...args}>
          <Typography variant="p" className="text-sm text-black">
            This tooltip has a small outline button on the left side of the
            button row, alongside the next arrow on the right.
          </Typography>
        </FtueTooltip>
      </div>
    </div>
  ),
  args: {
    headline: 'Getting Started (1/3)',
    onNext: () => console.log('Next clicked'),
    leftButton: (
      <Button
        variant="outline"
        size="sm"
        className="border-black text-black dark:border-black dark:text-black"
        onClick={e => {
          e.stopPropagation();
          console.log('Skip clicked');
        }}
      >
        Skip
      </Button>
    ),
  },
};

export const ArrowLeft: Story = {
  render: args => (
    <div className="relative h-96 w-full">
      <div className="absolute top-20 right-4">
        <FtueTooltip
          {...args}
          className="top-1/2 right-full mr-2 -translate-y-1/2"
        >
          <Typography variant="p" className="text-sm text-black">
            This tooltip has the arrow on the left side, pointing right. Useful
            for mobile layouts where tooltips on the right edge of the screen
            would get cut off.
          </Typography>
        </FtueTooltip>
      </div>
    </div>
  ),
  args: {
    headline: 'Mobile Layout (1/3)',
    arrowPosition: 'left',
    onNext: () => console.log('Next clicked'),
  },
};

export const ArrowRight: Story = {
  render: args => (
    <div className="relative h-96 w-full">
      <div className="absolute top-20 left-4">
        <FtueTooltip
          {...args}
          className="top-1/2 left-full ml-2 -translate-y-1/2"
        >
          <Typography variant="p" className="text-sm text-black">
            This tooltip has the arrow on the right side, pointing left. Useful
            for mobile layouts where tooltips on the left edge of the screen
            would get cut off.
          </Typography>
        </FtueTooltip>
      </div>
    </div>
  ),
  args: {
    headline: 'Mobile Layout (1/3)',
    arrowPosition: 'right',
    onNext: () => console.log('Next clicked'),
  },
};
