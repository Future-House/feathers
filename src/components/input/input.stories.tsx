import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button';
import { Mail, Eye, EyeOff, Search as SearchIcon, User } from 'lucide-react';
import { Input } from './input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          'A flexible input component built on the native HTML input element with consistent styling and accessibility features.',
      },
    },
  },
  decorators: [
    Story => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
  tags: [],
  argTypes: {
    // Standard HTML input props
    type: {
      control: { type: 'select' },
      options: [
        'text',
        'email',
        'password',
        'number',
        'tel',
        'url',
        'search',
        'date',
        'time',
        'datetime-local',
        'file',
      ],
      description: 'The type of input control',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text when the input is empty',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the input is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'Whether the input is read-only',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'The controlled value of the input',
      table: {
        type: { summary: 'string' },
      },
    },
    defaultValue: {
      control: { type: 'text' },
      description: 'The default value of the input when uncontrolled',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      action: 'onChange',
      description: 'Event handler called when the input value changes',
      table: {
        type: { summary: '(event: ChangeEvent<HTMLInputElement>) => void' },
        disable: true,
      },
    },
    onFocus: {
      action: 'onFocus',
      description: 'Event handler called when the input receives focus',
      table: {
        type: { summary: '(event: FocusEvent<HTMLInputElement>) => void' },
        disable: true,
      },
    },
    onBlur: {
      action: 'onBlur',
      description: 'Event handler called when the input loses focus',
      table: {
        type: { summary: '(event: FocusEvent<HTMLInputElement>) => void' },
        disable: true,
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the input',
      table: {
        type: { summary: 'string' },
      },
    },
    id: {
      control: { type: 'text' },
      description: 'The ID of the input element',
      table: {
        type: { summary: 'string' },
      },
    },
    name: {
      control: { type: 'text' },
      description: 'The name of the input element',
      table: {
        type: { summary: 'string' },
      },
    },
    maxLength: {
      control: { type: 'number' },
      description: 'Maximum number of characters allowed',
      table: {
        type: { summary: 'number' },
      },
    },
    minLength: {
      control: { type: 'number' },
      description: 'Minimum number of characters required',
      table: {
        type: { summary: 'number' },
      },
    },
    min: {
      control: { type: 'text' },
      description: 'Minimum value for number/date inputs',
      table: {
        type: { summary: 'string | number' },
      },
    },
    max: {
      control: { type: 'text' },
      description: 'Maximum value for number/date inputs',
      table: {
        type: { summary: 'string | number' },
      },
    },
    step: {
      control: { type: 'text' },
      description: 'Step interval for number inputs',
      table: {
        type: { summary: 'string | number' },
      },
    },
    pattern: {
      control: { type: 'text' },
      description: 'Regular expression pattern for validation',
      table: {
        type: { summary: 'string' },
      },
    },
    autoComplete: {
      control: { type: 'text' },
      description: 'Autocomplete hint for the browser',
      table: {
        type: { summary: 'string' },
      },
    },
    autoFocus: {
      control: { type: 'boolean' },
      description: 'Whether the input should be focused on mount',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether the input is in an error state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Hello World',
    placeholder: 'Enter text...',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'name@example.com',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '0',
    min: 0,
    max: 100,
    step: 1,
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    value: 'Read-only value',
    readOnly: true,
  },
};

export const Required: Story = {
  args: {
    placeholder: 'Required field *',
    required: true,
  },
};

export const WithMaxLength: Story = {
  args: {
    placeholder: 'Max 10 characters',
    maxLength: 10,
  },
};

export const File: Story = {
  args: {
    type: 'file',
    accept: '.jpg,.jpeg,.png,.gif',
  },
};

export const Date: Story = {
  args: {
    type: 'date',
  },
};

export const Time: Story = {
  args: {
    type: 'time',
  },
};

export const WithCustomStyling: Story = {
  args: {
    placeholder: 'Custom styled input',
    className: 'border-2 border-blue-500 focus-visible:border-blue-600',
  },
};

export const FormExample: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="w-96 space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <Input id="name" name="name" placeholder="Enter your name" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
        />
      </div>
      <Button className="w-full">Submit</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="w-96 space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Email with Icon</label>
        <div className="relative">
          <Mail className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
          <Input
            type="email"
            placeholder="name@example.com"
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Search with Icon</label>
        <div className="relative">
          <SearchIcon className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
          <Input type="search" placeholder="Search..." className="pl-10" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Username with Icon</label>
        <div className="relative">
          <User className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
          <Input type="text" placeholder="username" className="pl-10" />
        </div>
      </div>
    </div>
  ),
};

const PasswordToggleComponent = ({
  className = '',
  disabled = false,
  ...args
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="w-96 space-y-2">
      <label className="text-sm font-medium">Password with Toggle</label>
      <div className="relative">
        <Input
          placeholder="Enter password"
          className={`pr-10 ${className}`}
          disabled={disabled}
          {...args}
          type={showPassword ? 'text' : 'password'}
        />
        <button
          type="button"
          disabled={disabled}
          onClick={() => setShowPassword(!showPassword)}
          className="text-muted-foreground hover:text-foreground absolute top-3 right-3 h-4 w-4"
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export const PasswordToggle: Story = {
  args: {
    disabled: false,
    className: '',
  },
  parameters: {
    controls: { exclude: ['type'] },
  },
  render: args => <PasswordToggleComponent {...args} />,
};

export const Error: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="w-96 space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Invalid Input</label>
        <Input placeholder="Invalid input" error />
        <p className="text-destructive text-xs">This field is required</p>
      </div>
    </div>
  ),
};

// TODO: make own prop
export const SizingVariations: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Small Input</label>
        <Input placeholder="Small input" className="h-8 px-2 text-xs" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Default Input</label>
        <Input placeholder="Default input" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Large Input</label>
        <Input placeholder="Large input" className="h-12 px-4 text-base" />
      </div>
    </div>
  ),
};
