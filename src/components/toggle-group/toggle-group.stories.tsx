import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToggleGroup, ToggleGroupItem } from './toggle-group';
import {
  TextBold,
  TextItalic,
  TextUnderline,
  TextAlignLeft,
  TextAlignCenter,
  TextAlignRight,
  Star,
  Favorite,
  Chat,
} from '../../icons';

const meta = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    docs: {
      description: {
        component:
          'A toggle group component built with Radix UI and Tailwind CSS, allowing users to select one or multiple options from a group of toggle buttons.',
      },
    },
  },
  tags: [],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
      description:
        'Controls whether multiple items can be pressed at the same time',
      table: {
        type: { summary: 'single | multiple' },
        defaultValue: { summary: 'single' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline'],
      description: 'The visual style variant of the toggle group',
      table: {
        type: { summary: 'default | outline' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
      description: 'The size of the toggle group',
      table: {
        type: { summary: 'default | sm | lg' },
        defaultValue: { summary: 'default' },
        disable: true,
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the entire toggle group is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the toggle group',
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'horizontal' },
        disable: true,
      },
    },
    loop: {
      control: { type: 'boolean' },
      description:
        'When true, keyboard navigation will loop from last item to first',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    defaultValue: {
      control: { type: 'text' },
      description: 'The initial value of the toggle group (uncontrolled)',
      table: {
        type: { summary: 'string | string[]' },
        defaultValue: { summary: 'undefined' },
        disable: true,
      },
    },
    value: {
      control: { type: 'text' },
      description: 'The controlled value of the toggle group',
      table: {
        type: { summary: 'string | string[]' },
        defaultValue: { summary: 'undefined' },
        disable: true,
      },
    },
    onValueChange: {
      action: 'valueChange',
      description: 'Callback when the value changes',
      table: {
        type: { summary: '(value: string | string[]) => void' },
        defaultValue: { summary: 'undefined' },
        disable: true,
      },
    },
    rovingFocus: {
      control: { type: 'boolean' },
      description: 'Whether to enable roving focus navigation',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    dir: {
      control: { type: 'select' },
      options: ['ltr', 'rtl'],
      description: 'The reading direction of the toggle group',
      table: {
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: 'undefined' },
        disable: true,
      },
    },
    asChild: {
      type: 'boolean',
      description:
        'Change the default rendered element for the one passed as a child, merging their props and behavior.',
      defaultValue: 'false',
      table: {
        disable: true,
      },
    },
  },
  subcomponents: {
    ToggleGroupItem: {
      description:
        'A single item within the toggle group. Can be toggled on/off independently or as part of a group selection.',
      argTypes: {
        value: {
          type: 'string',
          description:
            'The unique identifier for this toggle item. Used to determine which items are selected.',
        },
        disabled: {
          type: 'boolean',
          description: 'Whether this specific toggle item is disabled.',
          defaultValue: 'false',
        },
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
        variant: {
          type: 'string',
          description:
            'The visual style variant of the toggle item. Inherits from ToggleGroup if not specified.',
          defaultValue: 'Inherited from ToggleGroup',
          options: ['default', 'outline'],
        },
        size: {
          type: 'string',
          description:
            'The size of the toggle item. Inherits from ToggleGroup if not specified.',
          defaultValue: 'Inherited from ToggleGroup',
          options: ['default', 'sm', 'lg'],
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the toggle item.',
        },
        'aria-label': {
          type: 'string',
          description:
            'Accessible label for the toggle item. Important for screen readers when the content is not descriptive.',
        },
      },
    },
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'single',
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <TextBold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <TextItalic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <TextUnderline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const WithText: Story = {
  args: {
    type: 'single',
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <TextBold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <TextItalic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <TextUnderline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
  },
  args: {
    type: 'single',
  },
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center">
        <p className="mb-2 text-sm font-medium">Default</p>
        <ToggleGroup type="single" variant="default">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <TextBold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <TextItalic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <TextUnderline />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="text-center">
        <p className="mb-2 text-sm font-medium">Outline</p>
        <ToggleGroup type="single" variant="outline">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <TextBold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <TextItalic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <TextUnderline />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  args: {
    type: 'single',
  },
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center">
        <p className="mb-2 text-sm font-medium">Small</p>
        <ToggleGroup type="single" size="sm" defaultValue="bold">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <TextBold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <TextItalic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <TextUnderline />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="text-center">
        <p className="mb-2 text-sm font-medium">Default</p>
        <ToggleGroup type="single" size="default" defaultValue="bold">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <TextBold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <TextItalic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <TextUnderline />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="text-center">
        <p className="mb-2 text-sm font-medium">Large</p>
        <ToggleGroup type="single" size="lg" defaultValue="bold">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <TextBold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <TextItalic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <TextUnderline />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
};

export const TextAlignment: Story = {
  args: {
    type: 'single',
    variant: 'outline',
    defaultValue: 'center',
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Vertical: Story = {
  args: {
    type: 'single',
    orientation: 'vertical',
    defaultValue: 'center',
  },
  render: args => (
    <ToggleGroup {...args} className="flex flex-col">
      <ToggleGroupItem value="top" aria-label="Align top">
        <TextAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <TextAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="bottom" aria-label="Align bottom">
        <TextAlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const TextFormattingToolbar: Story = {
  parameters: {
    controls: { disable: true },
  },
  args: {
    type: 'multiple',
  },
  render: () => (
    <div className="flex items-center gap-4">
      <ToggleGroup type="multiple" variant="outline">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <TextBold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <TextItalic />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <TextUnderline />
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="h-6 w-px bg-gray-300" />
      <ToggleGroup type="single" variant="outline" defaultValue="left">
        <ToggleGroupItem value="left" aria-label="Align left">
          <TextAlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <TextAlignCenter />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <TextAlignRight />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
  },
  args: {
    type: 'single',
  },
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center">
        <p className="mb-2 text-sm font-medium text-gray-400">
          Entire Group Disabled
        </p>
        <ToggleGroup type="single" disabled>
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <TextBold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <TextItalic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <TextUnderline />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex flex-col items-center">
        <p className="mb-2 text-sm font-medium">Individual Items Disabled</p>
        <ToggleGroup type="single">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <TextBold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" disabled aria-label="Toggle italic">
            <TextItalic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <TextUnderline />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
};

export const SocialInteractions: Story = {
  render: () => (
    <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="like" aria-label="Like">
        <Favorite />
        Like
      </ToggleGroupItem>
      <ToggleGroupItem value="comment" aria-label="Comment">
        <Chat />
        Comment
      </ToggleGroupItem>
      <ToggleGroupItem value="star" aria-label="Star">
        <Star />
        Star
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
