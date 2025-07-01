import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Combobox, type ComboboxOption } from './combobox';

const meta = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A combobox component that combines a popover, command palette, and searchable select functionality. Built on top of Radix UI Popover and cmdk Command components for accessibility and keyboard navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: { type: 'object' },
      description: 'Array of options to display in the combobox',
      table: {
        type: { summary: 'ComboboxOption[]' },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'Controlled value of the combobox',
      table: {
        type: { summary: 'string' },
      },
    },
    onValueChange: {
      description: 'Callback when the value changes',
      table: {
        type: { summary: '(value: string) => void' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text when no option is selected',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Select option...' },
      },
    },
    searchPlaceholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the search input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Search...' },
      },
    },
    emptyMessage: {
      control: { type: 'text' },
      description: 'Message shown when no options match the search',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'No option found.' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the combobox is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    width: {
      control: { type: 'text' },
      description: 'CSS class for width styling',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'w-[200px]' },
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
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const frameworkOptions: ComboboxOption[] = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
  { value: 'gatsby', label: 'Gatsby' },
  { value: 'vite', label: 'Vite' },
];

const languageOptions: ComboboxOption[] = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'rust', label: 'Rust' },
  { value: 'go', label: 'Go' },
  { value: 'php', label: 'PHP' },
];

const statusOptions: ComboboxOption[] = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'pending', label: 'Pending' },
  { value: 'suspended', label: 'Suspended', disabled: true },
  { value: 'archived', label: 'Archived' },
];

export const Default: Story = {
  args: {
    options: frameworkOptions,
    placeholder: 'Select framework...',
    searchPlaceholder: 'Search frameworks...',
  },
};

export const WithValue: Story = {
  args: {
    options: frameworkOptions,
    value: 'next.js',
    placeholder: 'Select framework...',
    searchPlaceholder: 'Search frameworks...',
  },
};

function ControlledExample() {
  const [value, setValue] = useState('');

  return (
    <div className="space-y-4">
      <Combobox
        options={languageOptions}
        value={value}
        onValueChange={setValue}
        placeholder="Select programming language..."
        searchPlaceholder="Search languages..."
        emptyMessage="No language found."
      />
      <div className="text-muted-foreground text-sm">
        Selected: {value || 'None'}
      </div>
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledExample />,
  args: {
    options: languageOptions,
  },
};

function UncontrolledExample() {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <div className="space-y-4">
      <Combobox
        options={frameworkOptions}
        onValueChange={setSelectedValue}
        placeholder="Select framework..."
        searchPlaceholder="Search frameworks..."
      />
      <div className="text-muted-foreground text-sm">
        Last selected: {selectedValue || 'None'}
      </div>
    </div>
  );
}

export const Uncontrolled: Story = {
  render: () => <UncontrolledExample />,
  args: {
    options: frameworkOptions,
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: statusOptions,
    placeholder: 'Select status...',
    searchPlaceholder: 'Search status...',
    emptyMessage: 'No status found.',
  },
};

export const Disabled: Story = {
  args: {
    options: frameworkOptions,
    placeholder: 'Select framework...',
    disabled: true,
  },
};

export const CustomWidth: Story = {
  args: {
    options: languageOptions,
    placeholder: 'Select programming language...',
    searchPlaceholder: 'Search languages...',
    width: 'w-[300px]',
  },
};

export const CustomMessages: Story = {
  args: {
    options: frameworkOptions,
    placeholder: 'Choose your frontend framework',
    searchPlaceholder: 'Type to search frameworks...',
    emptyMessage: 'Oops! No frameworks match your search.',
  },
};

function MultipleComboboxExample() {
  const [framework, setFramework] = useState('');
  const [language, setLanguage] = useState('');
  const [status, setStatus] = useState('');

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Combobox
          options={frameworkOptions}
          value={framework}
          onValueChange={setFramework}
          placeholder="Framework..."
          searchPlaceholder="Search frameworks..."
        />
        <Combobox
          options={languageOptions}
          value={language}
          onValueChange={setLanguage}
          placeholder="Language..."
          searchPlaceholder="Search languages..."
        />
        <Combobox
          options={statusOptions}
          value={status}
          onValueChange={setStatus}
          placeholder="Status..."
          searchPlaceholder="Search status..."
        />
      </div>
      <div className="text-muted-foreground text-sm">
        <p>Framework: {framework || 'None'}</p>
        <p>Language: {language || 'None'}</p>
        <p>Status: {status || 'None'}</p>
      </div>
    </div>
  );
}

export const MultipleComboboxes: Story = {
  render: () => <MultipleComboboxExample />,
  args: {
    options: frameworkOptions,
  },
  parameters: {
    layout: 'padded',
  },
};
