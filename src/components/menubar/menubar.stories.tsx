import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  File,
  Pencil,
  Copy,
  Clipboard,
  Scissors,
  Undo,
  Redo,
  Save,
  Search,
  Share,
  Settings,
  CircleQuestionMark,
  User,
  Users,
  CreditCard,
  Calendar,
  Mail,
  MessageSquare,
  Plus,
} from '@/icons';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarLabel,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from './menubar';

const meta = {
  title: 'Components/Menubar',
  component: Menubar,
  parameters: {
    docs: {
      description: {
        component:
          'A visually persistent menu common in desktop applications that provides access to a consistent set of commands.',
      },
    },
  },
  tags: [],
  argTypes: {
    // Root component props from @radix-ui/react-menubar
    value: {
      control: { type: 'text' },
      description:
        'The value of the menu that should be open. Use when you need to control the state of the menubar',
      table: {
        type: { summary: 'string' },
      },
    },
    defaultValue: {
      control: { type: 'text' },
      description:
        'The value of the menu that should be open when initially rendered. Use when you do not need to control the state of the menubar',
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
    dir: {
      control: { type: 'select' },
      options: ['ltr', 'rtl'],
      description:
        'The reading direction of the menubar. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode',
      table: {
        type: { summary: "'ltr' | 'rtl'" },
        defaultValue: { summary: "'ltr'" },
      },
    },
    loop: {
      control: { type: 'boolean' },
      description:
        'When true, keyboard navigation will loop from last item to first, and vice versa',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the menubar',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  subcomponents: {
    MenubarMenu: {
      description:
        'Represents a top-level menu item in the menubar. Built with Radix UI Menu primitive and supports controlled and uncontrolled state.',
      argTypes: {
        value: {
          type: 'string',
          description:
            'A unique value that associates the trigger with a content',
        },
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
      },
    },
    MenubarTrigger: {
      description:
        'The button that toggles the menu content. Built with Radix UI Trigger primitive with focus and open state styling.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the trigger button',
        },
      },
    },
    MenubarContent: {
      description:
        'The popup menu component that contains menu items. Built with Radix UI Content primitive with automatic positioning and animations.',
      argTypes: {
        side: {
          type: 'string',
          description:
            'The preferred side of the trigger to render against when open',
          defaultValue: 'bottom',
        },
        sideOffset: {
          type: 'number',
          description: 'The distance in pixels from the trigger',
          defaultValue: '8',
        },
        align: {
          type: 'string',
          description: 'The preferred alignment against the trigger',
          defaultValue: 'start',
        },
        alignOffset: {
          type: 'number',
          description: 'The vertical offset in pixels from the trigger',
          defaultValue: '-4',
        },
        avoidCollisions: {
          type: 'boolean',
          description:
            'When true, overrides the side and align preferences to prevent collisions with boundary edges',
          defaultValue: 'true',
        },
        className: {
          type: 'string',
          description:
            'Additional CSS classes to apply to the content container',
        },
      },
    },
    MenubarGroup: {
      description:
        'Groups related menu items together. Built with Radix UI Group primitive for semantic grouping and keyboard navigation.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the group container',
        },
      },
    },
    MenubarItem: {
      description:
        'A selectable menu item with focus states and optional destructive variant. Built with Radix UI Item primitive with custom styling.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
        disabled: {
          type: 'boolean',
          description: 'Whether the item is disabled and non-interactive',
          defaultValue: 'false',
        },
        onSelect: {
          type: 'function',
          description: 'Event handler called when the user selects an item',
        },
        textValue: {
          type: 'string',
          description:
            'Optional text used for typeahead purposes. By default uses the text content of the item.',
        },
        inset: {
          type: 'boolean',
          description:
            'When true, adds left padding to align with items that have icons',
          defaultValue: 'false',
        },
        variant: {
          type: 'string',
          description: 'The visual style variant of the menu item',
          defaultValue: 'default',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the menu item',
        },
      },
    },
    MenubarCheckboxItem: {
      description:
        'A checkable menu item with visual indicator. Built with Radix UI CheckboxItem primitive with built-in check icon.',
      argTypes: {
        checked: {
          type: 'boolean',
          description: 'The controlled checked state of the item',
        },
        onCheckedChange: {
          type: 'function',
          description: 'Event handler called when the checked state changes',
        },
        disabled: {
          type: 'boolean',
          description: 'Whether the checkbox item is disabled',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the checkbox item',
        },
      },
    },
    MenubarRadioGroup: {
      description:
        'Groups radio items together for mutually exclusive selection. Built with Radix UI RadioGroup primitive.',
      argTypes: {
        value: {
          type: 'string',
          description: 'The controlled value of the radio group',
        },
        onValueChange: {
          type: 'function',
          description: 'Event handler called when the value changes',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the radio group',
        },
      },
    },
    MenubarRadioItem: {
      description:
        'A selectable radio item within a radio group. Built with Radix UI RadioItem primitive with circle indicator.',
      argTypes: {
        value: {
          type: 'string',
          description: 'The unique value of the item (required)',
        },
        disabled: {
          type: 'boolean',
          description: 'Whether the radio item is disabled',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the radio item',
        },
      },
    },
    MenubarLabel: {
      description:
        'A label for a group of menu items. Built with Radix UI Label primitive with optional inset alignment.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
        inset: {
          type: 'boolean',
          description:
            'When true, adds left padding to align with items that have icons',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the label',
        },
      },
    },
    MenubarSeparator: {
      description:
        'A visual separator between menu items. Built with Radix UI Separator primitive for semantic grouping.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the separator',
        },
      },
    },
    MenubarShortcut: {
      description:
        'Displays keyboard shortcuts for menu items. Custom styled component with consistent spacing and typography.',
      argTypes: {
        className: {
          type: 'string',
          description:
            'Additional CSS classes to apply to the shortcut display',
        },
        children: {
          type: 'ReactNode',
          description: 'The keyboard shortcut text (e.g., "⌘N", "Ctrl+S")',
        },
      },
    },
    MenubarSub: {
      description:
        'Container for submenu functionality. Built with Radix UI Sub primitive for nested menu management.',
      argTypes: {
        open: {
          type: 'boolean',
          description: 'The controlled open state of the submenu',
        },
        onOpenChange: {
          type: 'function',
          description: 'Event handler called when the open state changes',
        },
        defaultOpen: {
          type: 'boolean',
          description:
            'The open state of the submenu when it is initially rendered',
        },
      },
    },
    MenubarSubTrigger: {
      description:
        'Trigger for opening a submenu. Built with Radix UI SubTrigger primitive with automatic chevron icon.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
        disabled: {
          type: 'boolean',
          description: 'Whether the subtrigger is disabled',
          defaultValue: 'false',
        },
        textValue: {
          type: 'string',
          description: 'Optional text used for typeahead purposes',
        },
        inset: {
          type: 'boolean',
          description:
            'When true, adds left padding to align with items that have icons',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the subtrigger',
        },
      },
    },
    MenubarSubContent: {
      description:
        'The content of a submenu. Built with Radix UI SubContent primitive with automatic positioning and animations.',
      argTypes: {
        sideOffset: {
          type: 'number',
          description: 'The distance in pixels from the subtrigger',
        },
        alignOffset: {
          type: 'number',
          description: 'The alignment offset in pixels from the subtrigger',
        },
        avoidCollisions: {
          type: 'boolean',
          description:
            'When true, overrides positioning to prevent collisions with boundary edges',
          defaultValue: 'true',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the subcontent',
        },
      },
    },
  },
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <File className="mr-2 h-4 w-4" />
            New File
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Pencil className="mr-2 h-4 w-4" />
            Open File
            <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Save className="mr-2 h-4 w-4" />
            Save
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Pencil</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Undo className="mr-2 h-4 w-4" />
            Undo
            <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Redo className="mr-2 h-4 w-4" />
            Redo
            <MenubarShortcut>⌘Y</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Scissors className="mr-2 h-4 w-4" />
            Cut
            <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Copy className="mr-2 h-4 w-4" />
            Copy
            <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Clipboard className="mr-2 h-4 w-4" />
            Paste
            <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

const WithCheckboxesComponent = () => {
  const [showBookmarks, setShowBookmarks] = React.useState(true);
  const [showUrls, setShowUrls] = React.useState(false);

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem
            checked={showBookmarks}
            onCheckedChange={setShowBookmarks}
          >
            Show Bookmarks
            <MenubarShortcut>⌘B</MenubarShortcut>
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={showUrls} onCheckedChange={setShowUrls}>
            Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>
            <Search className="mr-2 h-4 w-4" />
            Search
            <MenubarShortcut>⌘F</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Share</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Share className="mr-2 h-4 w-4" />
            Share Link
          </MenubarItem>
          <MenubarItem>
            <Mail className="mr-2 h-4 w-4" />
            Email Link
          </MenubarItem>
          <MenubarItem>
            <MessageSquare className="mr-2 h-4 w-4" />
            Send Message
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export const WithCheckboxes: Story = {
  render: () => <WithCheckboxesComponent />,
};

const WithRadioGroupComponent = () => {
  const [theme, setTheme] = React.useState('light');

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Preferences</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Theme</MenubarLabel>
          <MenubarRadioGroup value={theme} onValueChange={setTheme}>
            <MenubarRadioItem value="light">Light</MenubarRadioItem>
            <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
            <MenubarRadioItem value="system">System</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem>
            <Settings className="mr-2 h-4 w-4" />
            Settings
            <MenubarShortcut>⌘,</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Account</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <User className="mr-2 h-4 w-4" />
            Profile
          </MenubarItem>
          <MenubarItem>
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Sign Out</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export const WithRadioGroup: Story = {
  render: () => <WithRadioGroupComponent />,
};

export const WithSubmenus: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Tools</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>
              <Plus className="mr-2 h-4 w-4" />
              Create
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>New Document</MenubarItem>
              <MenubarItem>New Folder</MenubarItem>
              <MenubarItem>New Project</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>
              <Share className="mr-2 h-4 w-4" />
              Export
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Export as PDF</MenubarItem>
              <MenubarItem>Export as CSV</MenubarItem>
              <MenubarItem>Export as JSON</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            <Settings className="mr-2 h-4 w-4" />
            Preferences
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <CircleQuestionMark className="mr-2 h-4 w-4" />
            Documentation
          </MenubarItem>
          <MenubarItem>Support</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>About</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

const ApplicationMenubarComponent = () => {
  const [view, setView] = React.useState('grid');
  const [showSidebar, setShowSidebar] = React.useState(true);
  const [showStatusBar, setShowStatusBar] = React.useState(true);

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <File className="mr-2 h-4 w-4" />
            New
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Pencil className="mr-2 h-4 w-4" />
            Open
            <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Save className="mr-2 h-4 w-4" />
            Save
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Save As...</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Recent Files</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Document.pdf</MenubarItem>
              <MenubarItem>Presentation.pptx</MenubarItem>
              <MenubarItem>Spreadsheet.xlsx</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Pencil</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Undo className="mr-2 h-4 w-4" />
            Undo
            <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Redo className="mr-2 h-4 w-4" />
            Redo
            <MenubarShortcut>⌘Y</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Scissors className="mr-2 h-4 w-4" />
            Cut
            <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Copy className="mr-2 h-4 w-4" />
            Copy
            <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Clipboard className="mr-2 h-4 w-4" />
            Paste
            <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Layout</MenubarLabel>
          <MenubarRadioGroup value={view} onValueChange={setView}>
            <MenubarRadioItem value="grid">Grid View</MenubarRadioItem>
            <MenubarRadioItem value="list">List View</MenubarRadioItem>
            <MenubarRadioItem value="card">Card View</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarCheckboxItem
            checked={showSidebar}
            onCheckedChange={setShowSidebar}
          >
            Show Sidebar
            <MenubarShortcut>⌘⇧S</MenubarShortcut>
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Show Status Bar
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Tools</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Search className="mr-2 h-4 w-4" />
            Search
            <MenubarShortcut>⌘F</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Calendar className="mr-2 h-4 w-4" />
            Calendar
          </MenubarItem>
          <MenubarItem>
            <Users className="mr-2 h-4 w-4" />
            Contacts
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Settings className="mr-2 h-4 w-4" />
            Preferences
            <MenubarShortcut>⌘,</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <CircleQuestionMark className="mr-2 h-4 w-4" />
            Help Center
          </MenubarItem>
          <MenubarItem>Keyboard Shortcuts</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Report Issue</MenubarItem>
          <MenubarItem>About</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export const ApplicationMenubar: Story = {
  render: () => <ApplicationMenubarComponent />,
};

export const MinimalMenubar: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Actions</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New</MenubarItem>
          <MenubarItem>Pencil</MenubarItem>
          <MenubarItem>Delete</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>More</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Settings</MenubarItem>
          <MenubarItem>Help</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};
