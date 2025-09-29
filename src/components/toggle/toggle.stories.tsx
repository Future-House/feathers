import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './toggle';
import {
  TextBold,
  TextItalic,
  TextUnderline,
  TextAlignLeft,
  TextAlignCenter,
  TextAlignRight,
} from '../../icons';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component:
          'A toggle component built with Radix UI and Tailwind CSS, supporting multiple variants and sizes for creating toggleable buttons.',
      },
    },
  },
  tags: [],
  argTypes: {
    variant: {
      control: { type: 'select' },
      description: 'The visual style variant of the toggle',
      table: {
        type: { summary: 'default | outline' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      description: 'The size of the toggle',
      table: {
        type: { summary: 'default | sm | lg' },
        defaultValue: { summary: 'default' },
      },
    },
    pressed: {
      control: { type: 'boolean' },
      description:
        'Whether the toggle is pressed (controlled). Must be used in conjunction with onPressedChange',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onPressedChange: {
      action: 'onPressedChange',
      description:
        'Event handler called when the pressed state of the toggle changes',
      table: {
        type: { summary: '(pressed: boolean) => void' },
        disable: true,
      },
    },
    defaultPressed: {
      control: { type: 'boolean' },
      description: 'Whether the toggle is pressed by default (uncontrolled)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the toggle is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Toggle',
  },
};

export const WithIcon: Story = {
  args: {
    children: <TextBold />,
    'aria-label': 'Toggle bold',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle variant="default">
        <TextBold />
      </Toggle>
      <Toggle variant="outline">
        <TextItalic />
      </Toggle>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle size="sm">
        <TextBold />
      </Toggle>
      <Toggle size="default">
        <TextItalic />
      </Toggle>
      <Toggle size="lg">
        <TextUnderline />
      </Toggle>
    </div>
  ),
};

export const TextFormatting: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Toggle variant="outline" aria-label="Toggle bold">
        <TextBold />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic">
        <TextItalic />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle underline">
        <TextUnderline />
      </Toggle>
    </div>
  ),
};

export const TextAlignment: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Toggle variant="outline" aria-label="Align left">
        <TextAlignLeft />
      </Toggle>
      <Toggle variant="outline" aria-label="Align center">
        <TextAlignCenter />
      </Toggle>
      <Toggle variant="outline" aria-label="Align right">
        <TextAlignRight />
      </Toggle>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle variant="outline">
        <TextBold />
        Bold
      </Toggle>
      <Toggle variant="outline">
        <TextItalic />
        Italic
      </Toggle>
      <Toggle variant="outline">
        <TextUnderline />
        Underline
      </Toggle>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle className="bg-blue-50 text-blue-700 hover:bg-blue-100 data-[state=on]:bg-blue-800 data-[state=on]:text-white">
        Custom Blue
      </Toggle>
      <Toggle className="bg-green-50 text-green-700 hover:bg-green-100 data-[state=on]:bg-green-800 data-[state=on]:text-white">
        Custom Green
      </Toggle>
    </div>
  ),
};
