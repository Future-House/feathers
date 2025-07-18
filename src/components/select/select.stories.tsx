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
import { Label } from '@/components/label';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component:
          "A versatile select component built on top of Radix UI's Select primitive. Provides a customizable dropdown selection interface with support for grouping, labeling, and scrolling through large lists of options.",
      },
    },
  },
  tags: [],
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
    error: {
      control: 'boolean',
      description: 'Whether the select is in an error state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  subcomponents: {
    SelectTrigger: {
      description:
        'The button that triggers the select dropdown. Can be customized with different sizes and displays the selected value.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the trigger.',
        },
        error: {
          type: 'boolean',
          description: 'Whether the select is in an error state',
          defaultValue: 'false',
        },
      },
    },
    SelectValue: {
      description:
        'The part that reflects the selected value. Can be used as a placeholder when no value is selected.',
      argTypes: {
        placeholder: {
          type: 'string',
          description:
            'The content that will be rendered inside the trigger when no value is selected.',
        },
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the value.',
        },
      },
    },
    SelectContent: {
      description:
        'The component that contains the select items. Handles positioning, scrolling, and animations.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
        onCloseAutoFocus: {
          action: 'onCloseAutoFocus',
          description:
            'Event handler called when focus moves to the trigger after closing. It can be prevented by calling event.preventDefault.',
          table: {
            type: { summary: '(event: Event) => void' },
          },
        },
        onEscapeKeyDown: {
          action: 'onEscapeKeyDown',
          description:
            'Event handler called when the escape key is down. It can be prevented by calling event.preventDefault.',
          table: {
            type: { summary: '(event: Event) => void' },
          },
        },
        onPointerDownOutside: {
          action: 'onPointerDownOutside',
          description:
            'Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling event.preventDefault.',
          table: {
            type: { summary: '(event: PointerDownOutsideEvent) => void' },
          },
        },
        position: {
          type: 'string',
          description: 'The positioning strategy to use for the content.',
          defaultValue: 'popper',
        },
        side: {
          type: 'string',
          description:
            'The preferred side of the trigger to render against when open.',
          defaultValue: 'bottom',
        },
        sideOffset: {
          type: 'number',
          description: 'The distance in pixels from the trigger.',
          defaultValue: '4',
        },
        align: {
          type: 'string',
          description: 'The preferred alignment against the trigger.',
          defaultValue: 'center',
        },
        alignOffset: {
          type: 'number',
          description:
            'An offset in pixels from the start or end alignment options.',
          defaultValue: '0',
        },
        avoidCollisions: {
          type: 'boolean',
          description:
            'When true, overrides side and align preferences to prevent collisions.',
          defaultValue: 'true',
        },
        collisionBoundary: {
          type: 'Element | null | Array<Element | null>',
          description: 'The element used as the collision boundary.',
        },
        collisionPadding: {
          type: 'number | Partial<Record<Side, number>>',
          description:
            'The distance in pixels from the boundary edges where collision detection should occur.',
          defaultValue: '0',
        },
        arrowPadding: {
          type: 'number',
          description:
            'The padding between the arrow and the edges of the content.',
          defaultValue: '0',
        },
        sticky: {
          type: 'string',
          description: 'The sticky behavior on the align axis.',
          defaultValue: 'partial',
        },
        hideWhenDetached: {
          type: 'boolean',
          description:
            'Whether to hide the content when the trigger becomes fully occluded.',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the content.',
        },
      },
    },
    SelectItem: {
      description:
        'An individual option in the select dropdown. Displays text and indicates when selected.',
      argTypes: {
        value: {
          type: 'string',
          description: 'The value given as data when submitted with a name.',
        },
        disabled: {
          type: 'boolean',
          description:
            'When true, prevents the user from interacting with the item.',
          defaultValue: 'false',
        },
        textValue: {
          type: 'string',
          description:
            'Optional text used for typeahead purposes. By default the typeahead behavior will use the .textContent of the item.',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the item.',
        },
        onSelect: {
          type: '(event: Event) => void',
          description: 'Event handler called when the user selects an item.',
        },
      },
    },
    SelectGroup: {
      description:
        'Used to group multiple items. Use in conjunction with SelectLabel to ensure good accessibility via automatic labelling.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the group.',
        },
      },
    },
    SelectLabel: {
      description:
        "Used to render a label for a group of items. It won't be focusable using arrow keys.",
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the label.',
        },
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
      },
    },
    SelectSeparator: {
      description: 'Used to visually separate items in the select.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the separator.',
        },
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
      },
    },
    SelectScrollUpButton: {
      description:
        'An optional button used as an affordance to show the user that they can scroll up to see more items.',
      argTypes: {
        className: {
          type: 'string',
          description:
            'Additional CSS classes to apply to the scroll up button.',
        },
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
      },
    },
    SelectScrollDownButton: {
      description:
        'An optional button used as an affordance to show the user that they can scroll down to see more items.',
      argTypes: {
        className: {
          type: 'string',
          description:
            'Additional CSS classes to apply to the scroll down button.',
        },
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

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
    controls: {
      exclude: ['value', 'defaultValue', 'onValueChange'],
    },
  },
};

export const Error: Story = {
  render: args => (
    <Select error {...args}>
      <SelectTrigger className="w-[180px]" error>
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
        story: 'A select in an error state with error styling applied.',
      },
    },
  },
};

export const WithLabel: Story = {
  render: args => (
    <div className="space-y-2">
      <Label htmlFor="framework-select">Framework</Label>
      <Select {...args}>
        <SelectTrigger id="framework-select" className="w-[180px]">
          <SelectValue placeholder="Select a framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
          <SelectItem value="next">Next.js</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A select with a Label component for better accessibility and form structure. The Label is properly associated with the select trigger using the htmlFor and id attributes.',
      },
    },
  },
};

export const WithLabelAndHelperText: Story = {
  render: args => (
    <div className="space-y-2">
      <Label htmlFor="priority-select">Priority Level</Label>
      <Select {...args}>
        <SelectTrigger id="priority-select" className="w-[200px]">
          <SelectValue placeholder="Select priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="urgent">Urgent</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-muted-foreground text-sm">
        Choose the priority level for this task
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A select with a Label and helper text showing how to create a complete form field with descriptive text.',
      },
    },
  },
};

export const RTL: Story = {
  render: args => (
    <div dir="rtl">
      <Select {...args} dir="rtl">
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
    controls: {
      exclude: ['dir'],
    },
  },
};
