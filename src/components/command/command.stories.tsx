import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from './command';
import { Button } from '../button';
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  File,
  FileText,
  Folder,
  Search,
  Terminal,
} from '@/icons';

const meta = {
  title: 'Components/Command',
  component: Command,
  parameters: {
    docs: {
      description: {
        component:
          'A fast, composable command palette built with cmdk. Features keyboard navigation, search filtering, and support for complex layouts with groups, separators, and shortcuts.',
      },
    },
  },
  tags: [],
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the command container',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
  },
  subcomponents: {
    CommandDialog: {
      description:
        'A command palette rendered in a dialog modal. Built with Dialog primitive and includes proper accessibility with screen reader support through hidden headers.',
      argTypes: {
        open: {
          type: 'boolean',
          description: 'Controls the open state of the dialog',
        },
        onOpenChange: {
          type: 'function',
          description: 'Callback fired when the dialog open state changes',
        },
        title: {
          type: 'string',
          description: 'Accessible title for screen readers',
          defaultValue: 'Command Palette',
        },
        description: {
          type: 'string',
          description: 'Accessible description for screen readers',
          defaultValue: 'Search for a command to run...',
        },
        showCloseButton: {
          type: 'boolean',
          description: 'Whether to show the close button in the dialog',
          defaultValue: 'true',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the dialog content',
        },
      },
    },
    CommandInput: {
      description:
        'Search input field with integrated search icon. Built with cmdk Input primitive and includes proper styling for focus states and accessibility.',
      argTypes: {
        placeholder: {
          type: 'string',
          description: 'Placeholder text for the search input',
        },
        value: {
          type: 'string',
          description: 'Controlled value of the input',
        },
        onValueChange: {
          type: 'function',
          description: 'Callback fired when the input value changes',
        },
        disabled: {
          type: 'boolean',
          description: 'Whether the input is disabled',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the input element',
        },
      },
    },
    CommandList: {
      description:
        'Scrollable container for command items with keyboard navigation support. Provides virtualization for large lists and proper scroll management.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the list container',
        },
      },
    },
    CommandEmpty: {
      description:
        'Message displayed when no commands match the search query. Automatically shown/hidden based on filter results from cmdk.',
      argTypes: {
        children: {
          type: 'ReactNode',
          description: 'The empty state message content',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the empty state',
        },
      },
    },
    CommandGroup: {
      description:
        'Groups related commands together with an optional heading. Provides semantic grouping and supports nested command items with proper styling.',
      argTypes: {
        heading: {
          type: 'string',
          description: 'Optional heading text for the group',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the group container',
        },
      },
    },
    CommandSeparator: {
      description:
        'Visual separator between command groups. Provides clear visual distinction between different sections of commands.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the separator',
        },
      },
    },
    CommandItem: {
      description:
        'Individual selectable command item with keyboard navigation support. Handles selection state, disabled state, and includes proper focus management.',
      argTypes: {
        value: {
          type: 'string',
          description: 'Unique value for the command item used for searching',
        },
        onSelect: {
          type: 'function',
          description: 'Callback fired when the item is selected',
        },
        disabled: {
          type: 'boolean',
          description: 'Whether the command item is disabled',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the command item',
        },
        'data-selected': {
          type: 'boolean',
          description:
            'Data attribute indicating if the item is currently selected',
        },
        'data-disabled': {
          type: 'boolean',
          description: 'Data attribute present when the item is disabled',
        },
      },
    },
    CommandShortcut: {
      description:
        'Displays keyboard shortcuts for command items. Positioned at the right side of items with proper spacing and styling for accessibility.',
      argTypes: {
        children: {
          type: 'ReactNode',
          description: 'The keyboard shortcut text (e.g., "⌘P", "Ctrl+S")',
        },
        className: {
          type: 'string',
          description:
            'Additional CSS classes to apply to the shortcut display',
        },
      },
    },
  },
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

function BasicCommandExample() {
  return (
    <Command className="max-w-[450px] rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

function CommandDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center">
        <p className="text-muted-foreground mb-2 text-sm">
          Press the button to open the command dialog
        </p>
        <Button onClick={() => setOpen(true)}>Open Command Dialog</Button>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => setOpen(false)}>
              <File className="mr-2 h-4 w-4" />
              <span>Files</span>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Folder className="mr-2 h-4 w-4" />
              <span>Folders</span>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Search className="mr-2 h-4 w-4" />
              <span>Search</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => setOpen(false)}>
              <FileText className="mr-2 h-4 w-4" />
              <span>Create New File</span>
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <Terminal className="mr-2 h-4 w-4" />
              <span>Open Terminal</span>
              <CommandShortcut>⌃`</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}

function SearchableCommandExample() {
  const [value, setValue] = useState('');

  const items = [
    { label: 'Profile Settings', icon: User, shortcut: '⌘P' },
    { label: 'Billing Information', icon: CreditCard, shortcut: '⌘B' },
    { label: 'Account Settings', icon: Settings, shortcut: '⌘S' },
    { label: 'Calendar View', icon: Calendar, shortcut: '⌘C' },
    { label: 'Calculator Tool', icon: Calculator, shortcut: '⌘T' },
    { label: 'File Manager', icon: File, shortcut: '⌘F' },
    { label: 'Search Files', icon: Search, shortcut: '⌘⇧F' },
  ];

  return (
    <div className="space-y-4">
      <Command className="max-w-[450px] rounded-lg border shadow-md">
        <CommandInput
          placeholder="Search commands..."
          value={value}
          onValueChange={setValue}
        />
        <CommandList>
          <CommandEmpty>No commands found for &quot;{value}&quot;</CommandEmpty>
          <CommandGroup heading="Available Commands">
            {items.map(item => (
              <CommandItem
                key={item.label}
                onSelect={() => {
                  setValue('');
                  console.log(`Selected: ${item.label}`);
                }}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.label}</span>
                <CommandShortcut>{item.shortcut}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
      {value && (
        <div className="text-muted-foreground text-sm">
          Current search: &quot;{value}&quot;
        </div>
      )}
    </div>
  );
}

function GroupedCommandExample() {
  return (
    <Command className="max-w-[450px] rounded-lg border shadow-md">
      <CommandInput placeholder="Search in files and folders..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Files">
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>README.md</span>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>package.json</span>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>tsconfig.json</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Folders">
          <CommandItem>
            <Folder className="mr-2 h-4 w-4" />
            <span>src/</span>
          </CommandItem>
          <CommandItem>
            <Folder className="mr-2 h-4 w-4" />
            <span>components/</span>
          </CommandItem>
          <CommandItem>
            <Folder className="mr-2 h-4 w-4" />
            <span>utils/</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>
            <Search className="mr-2 h-4 w-4" />
            <span>Search in files</span>
            <CommandShortcut>⌘⇧F</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>Create new file</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

function LoadingCommandExample() {
  return (
    <Command className="max-w-[450px] rounded-lg border shadow-md">
      <CommandInput placeholder="Loading commands..." disabled />
      <CommandList>
        <CommandEmpty>Loading commands...</CommandEmpty>
        <CommandGroup heading="Recent">
          <CommandItem disabled>
            <div className="bg-muted mr-2 h-4 w-4 animate-pulse rounded" />
            <span className="bg-muted h-4 w-20 animate-pulse rounded" />
          </CommandItem>
          <CommandItem disabled>
            <div className="bg-muted mr-2 h-4 w-4 animate-pulse rounded" />
            <span className="bg-muted h-4 w-24 animate-pulse rounded" />
          </CommandItem>
          <CommandItem disabled>
            <div className="bg-muted mr-2 h-4 w-4 animate-pulse rounded" />
            <span className="bg-muted h-4 w-16 animate-pulse rounded" />
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export const Default: Story = {
  render: () => <BasicCommandExample />,
  args: {},
};

export const CommandDialogVariant: Story = {
  render: () => <CommandDialogExample />,
  args: {},
};

export const SearchableCommand: Story = {
  render: () => <SearchableCommandExample />,
  args: {},
};

export const GroupedCommands: Story = {
  render: () => <GroupedCommandExample />,
  args: {},
};

export const LoadingState: Story = {
  render: () => <LoadingCommandExample />,
  args: {},
};
