import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile select component built on top of Radix UI's Select primitive. Provides a customizable dropdown selection interface with support for grouping, labeling, and scrolling through large lists of options.

## Features

- **Accessible**: Full keyboard navigation and screen reader support
- **Customizable**: Flexible styling with Tailwind CSS classes
- **Portal rendering**: Content renders in a portal for proper z-index handling
- **Scrollable**: Built-in scroll buttons for long option lists
- **Grouping**: Support for grouped options with labels and separators
- **Controlled/Uncontrolled**: Works in both controlled and uncontrolled modes

## Usage

\`\`\`tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@future-house/feathers/components/select';

function Example() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  );
}
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'The controlled value of the select',
      table: {
        type: { summary: 'string' },
      },
    },
    defaultValue: {
      control: 'text',
      description:
        'The value of the select when initially rendered (uncontrolled)',
      table: {
        type: { summary: 'string' },
      },
    },
    onValueChange: {
      action: 'onValueChange',
      description: 'Event handler called when the value changes',
      table: {
        type: { summary: '(value: string) => void' },
      },
    },
    open: {
      control: 'boolean',
      description: 'The controlled open state of the select',
      table: {
        type: { summary: 'boolean' },
      },
    },
    defaultOpen: {
      control: 'boolean',
      description:
        'The open state of the select when initially rendered (uncontrolled)',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Event handler called when the open state changes',
      table: {
        type: { summary: '(open: boolean) => void' },
      },
    },
    dir: {
      control: { type: 'select' },
      options: ['ltr', 'rtl'],
      description: 'The reading direction of the select',
      table: {
        type: { summary: 'ltr | rtl' },
        defaultValue: { summary: 'ltr' },
      },
    },
    name: {
      control: 'text',
      description: 'The name of the select (useful for form submission)',
      table: {
        type: { summary: 'string' },
      },
    },
    autoComplete: {
      control: 'text',
      description: 'The autocomplete attribute of the select',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'When true, prevents the user from interacting with the select',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description:
        'When true, indicates that the user must select a value before submitting',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: args => (
    <Select {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
        <SelectItem value="grape">Grape</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A basic select with a list of fruit options.',
      },
    },
  },
};

export const WithGroups: Story = {
  render: args => (
    <Select {...args}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Choose a contact" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Team</SelectLabel>
          <SelectItem value="alice">Alice Johnson</SelectItem>
          <SelectItem value="bob">Bob Smith</SelectItem>
          <SelectItem value="carol">Carol Davis</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Clients</SelectLabel>
          <SelectItem value="david">David Wilson</SelectItem>
          <SelectItem value="eve">Eve Brown</SelectItem>
          <SelectItem value="frank">Frank Miller</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Select with grouped options using SelectGroup, SelectLabel, and SelectSeparator.',
      },
    },
  },
};

export const WithManyOptions: Story = {
  render: args => (
    <Select {...args}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent>
        {[
          'United States',
          'Canada',
          'United Kingdom',
          'France',
          'Germany',
          'Italy',
          'Spain',
          'Netherlands',
          'Belgium',
          'Switzerland',
          'Austria',
          'Sweden',
          'Norway',
          'Denmark',
          'Finland',
          'Poland',
          'Czech Republic',
          'Hungary',
          'Portugal',
          'Greece',
          'Australia',
          'New Zealand',
          'Japan',
          'South Korea',
          'Singapore',
          'India',
          'China',
          'Brazil',
          'Argentina',
          'Mexico',
          'Chile',
          'Colombia',
          'Peru',
          'Venezuela',
        ].map(country => (
          <SelectItem
            key={country}
            value={country.toLowerCase().replace(' ', '-')}
          >
            {country}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Select with many options that demonstrates scrolling behavior with SelectScrollUpButton and SelectScrollDownButton.',
      },
    },
  },
};

export const SmallSize: Story = {
  render: args => (
    <Select {...args}>
      <SelectTrigger size="sm" className="w-[150px]">
        <SelectValue placeholder="Size: Small" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="xs">Extra Small</SelectItem>
        <SelectItem value="sm">Small</SelectItem>
        <SelectItem value="md">Medium</SelectItem>
        <SelectItem value="lg">Large</SelectItem>
        <SelectItem value="xl">Extra Large</SelectItem>
      </SelectContent>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select with small trigger size using the size="sm" prop.',
      },
    },
  },
};

export const Disabled: Story = {
  render: args => (
    <Select disabled {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Disabled select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A disabled select that cannot be interacted with.',
      },
    },
  },
};

export const WithDisabledItems: Story = {
  render: args => (
    <Select {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="available">Available</SelectItem>
        <SelectItem value="unavailable" disabled>
          Unavailable
        </SelectItem>
        <SelectItem value="limited">Limited Stock</SelectItem>
        <SelectItem value="outofstock" disabled>
          Out of Stock
        </SelectItem>
        <SelectItem value="backordered">Back Ordered</SelectItem>
      </SelectContent>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select with some disabled items that cannot be selected.',
      },
    },
  },
};

function ControlledSelectExample(args: React.ComponentProps<typeof Select>) {
  const [value, setValue] = useState('');

  return (
    <div className="space-y-4">
      <Select value={value} onValueChange={setValue} {...args}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Controlled select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-muted-foreground text-sm">
        Selected value: {value || 'None'}
      </p>
    </div>
  );
}

export const Controlled: Story = {
  render: ControlledSelectExample,
  parameters: {
    docs: {
      description: {
        story: 'A controlled select where the value is managed by React state.',
      },
    },
  },
};

export const RTL: Story = {
  render: args => (
    <div dir="rtl">
      <Select dir="rtl" {...args}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="בחר אפשרות" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">אפשרות 1</SelectItem>
          <SelectItem value="option2">אפשרות 2</SelectItem>
          <SelectItem value="option3">אפשרות 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Select configured for right-to-left (RTL) reading direction.',
      },
    },
  },
};
