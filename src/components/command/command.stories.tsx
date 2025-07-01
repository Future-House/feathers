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
import { Button } from '@/components/button';
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
} from 'lucide-react';

const meta = {
  title: 'Components/Command',
  component: Command,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A fast, composable command palette built with cmdk. Features keyboard navigation, search filtering, and support for complex layouts with groups, separators, and shortcuts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
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
      <p className="text-muted-foreground text-sm">
        Press the button to open the command dialog
      </p>
      <Button onClick={() => setOpen(true)}>Open Command Dialog</Button>
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
  parameters: {
    layout: 'padded',
  },
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
