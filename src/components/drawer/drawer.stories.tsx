import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button';
import { Input } from '../input/input';
import { Label } from '../label/label';
import { Textarea } from '../textarea/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../select/select';
import { RadioGroup, RadioGroupItem } from '../radio-group/radio-group';
import { Checkbox } from '../checkbox/checkbox';
import { Separator } from '../separator/separator';
import { Settings, Menu, Plus, Edit, Trash2 } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A drawer component for overlaying content on either side or top/bottom of the screen. Built with Vaul primitives and styled with Tailwind CSS. Optimized for mobile-first bottom and slide-up interactions.',
      },
    },
  },
  tags: [],
  argTypes: {
    // Root component props from Vaul Drawer.Root
    defaultOpen: {
      control: { type: 'boolean' },
      description:
        'The open state of the drawer when it is initially rendered. Use when you do not need to control its open state',
      table: {
        type: { summary: 'boolean' },
      },
    },
    open: {
      control: { type: 'boolean' },
      description:
        'The controlled open state of the drawer. Must be used in conjunction with onOpenChange',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: undefined },
      },
    },
    onOpenChange: {
      action: 'onOpenChange',
      description:
        'Event handler called when the open state of the drawer changes',
      table: {
        type: { summary: '(open: boolean) => void' },
        disable: true,
      },
    },
    direction: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'The direction from which the drawer will open',
      table: {
        type: { summary: 'top | bottom | left | right' },
        defaultValue: { summary: 'bottom' },
      },
    },
    modal: {
      control: { type: 'boolean' },
      description:
        'When true, it will trap focus inside the drawer and disable interaction with the rest of the page',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    container: {
      control: false,
      description: 'The container element to portal the drawer into',
      table: {
        type: { summary: 'HTMLElement' },
        defaultValue: { summary: 'document.body' },
        disable: true,
      },
    },
    onAnimationEnd: {
      action: 'onAnimationEnd',
      description:
        'Callback fired after the drawer open/close animation completes',
      table: {
        type: { summary: '(open: boolean) => void' },
        disable: true,
      },
    },
    dismissible: {
      control: { type: 'boolean' },
      description:
        'When false, prevents the drawer from being closed by dragging or clicking outside',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    handleOnly: {
      control: { type: 'boolean' },
      description:
        'When true, only allows dragging the drawer from the handle area',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    repositionInputs: {
      control: { type: 'boolean' },
      description:
        'When true, repositions input elements when the on-screen keyboard appears',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    snapPoints: {
      control: { type: 'object' },
      description:
        'Array of snap points as percentages (0-1) or pixel values for drawer positioning',
      table: {
        type: { summary: 'number[] | string[]' },
        defaultValue: { summary: undefined },
        disable: true,
      },
    },
    activeSnapPoint: {
      control: { type: 'boolean' },
      description:
        'The controlled active snap point. Used with setActiveSnapPoint for controlled snap behavior',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: undefined },
        disable: true,
      },
    },
    setActiveSnapPoint: {
      action: 'setActiveSnapPoint',
      description: 'Callback fired when the active snap point changes',
      table: {
        type: { summary: '(open: boolean) => void' },
        disable: true,
      },
    },
    fadeFromIndex: {
      control: { type: 'number' },
      description:
        'The snap point index from which the overlay should start to fade out',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: undefined },
        disable: true,
      },
    },
    snapToSequentialPoint: {
      control: { type: 'boolean' },
      description:
        'When false, allows velocity-based swiping to skip snap points',
      table: {
        type: { summary: 'boolean' },
        disable: true,
      },
    },
  },
  subcomponents: {
    DrawerTrigger: {
      description: 'The button that opens the drawer',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
      },
    },
    DrawerContent: {
      description: 'The content of the drawer',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the content',
        },
      },
    },
    DrawerHeader: {
      description: 'Container for the drawer title and description',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the header',
        },
      },
    },
    DrawerFooter: {
      description: 'Container for action buttons at the bottom of the drawer',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the footer',
        },
      },
    },
    DrawerTitle: {
      description:
        'An accessible title to be announced when the drawer is opened',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
      },
    },
    DrawerDescription: {
      description:
        'An optional accessible description to be announced when the drawer is opened',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
      },
    },
    DrawerClose: {
      description: 'The button that closes the drawer',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
      },
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'bottom',
  },
  render: args => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>
            This is a drawer description. You can provide additional context
            about the drawer here.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm">
            This is the main content of the drawer. You can put any content
            here, including forms, images, or other components.
          </p>
        </div>
        <DrawerFooter>
          <Button>Confirm</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const MobileMenu: Story = {
  args: {
    direction: 'left',
  },
  render: args => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Navigation Menu</DrawerTitle>
          <DrawerDescription>
            Browse through different sections of the application.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <nav className="space-y-2">
            <a
              tabIndex={0}
              className="hover:bg-accent block rounded-md px-3 py-2 text-sm"
            >
              Dashboard
            </a>
            <a
              tabIndex={0}
              className="hover:bg-accent block rounded-md px-3 py-2 text-sm"
            >
              Projects
            </a>
            <a
              tabIndex={0}
              className="hover:bg-accent block rounded-md px-3 py-2 text-sm"
            >
              Team
            </a>
            <a
              tabIndex={0}
              className="hover:bg-accent block rounded-md px-3 py-2 text-sm"
            >
              Settings
            </a>
            <a
              tabIndex={0}
              className="hover:bg-accent block rounded-md px-3 py-2 text-sm"
            >
              Help
            </a>
          </nav>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline" className="w-full">
              Close Menu
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const CreateNewItem: Story = {
  args: {
    direction: 'bottom',
  },
  render: args => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Item
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create New Item</DrawerTitle>
          <DrawerDescription>
            Fill out the form below to create a new item.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="item-name">Item Name</Label>
              <Input id="item-name" type="text" placeholder="Enter item name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="item-description">Description</Label>
              <Textarea
                id="item-description"
                placeholder="Enter item description"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="work">Work</SelectItem>
                  <SelectItem value="personal">Personal</SelectItem>
                  <SelectItem value="project">Project</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button>Create Item</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const SettingsPanel: Story = {
  args: {
    direction: 'right',
  },
  render: args => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Application Settings</DrawerTitle>
          <DrawerDescription>
            Configure your application preferences.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Appearance</h3>
              <RadioGroup defaultValue="system" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="light" />
                  <Label htmlFor="light" className="text-sm">
                    Light mode
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="dark" />
                  <Label htmlFor="dark" className="text-sm">
                    Dark mode
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="system" id="system" />
                  <Label htmlFor="system" className="text-sm">
                    System preference
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <Separator />
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Notifications</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="email" />
                  <Label htmlFor="email" className="text-sm">
                    Email notifications
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="push" />
                  <Label htmlFor="push" className="text-sm">
                    Push notifications
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="desktop" />
                  <Label htmlFor="desktop" className="text-sm">
                    Desktop notifications
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button>Save Changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const ActionSheet: Story = {
  args: {
    direction: 'bottom',
  },
  render: args => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">More Actions</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Available Actions</DrawerTitle>
          <DrawerDescription>
            Choose an action to perform on the selected item.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Edit className="mr-3 h-4 w-4" />
              Edit Item
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Plus className="mr-3 h-4 w-4" />
              Duplicate
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-3 h-4 w-4" />
              Configure
            </Button>
            <Button variant="destructive" className="w-full justify-start">
              <Trash2 className="mr-3 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const FromTop: Story = {
  args: {
    direction: 'top',
  },
  render: args => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open from Top</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Top Drawer</DrawerTitle>
          <DrawerDescription>
            This drawer slides down from the top of the screen.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm">
            This demonstrates a drawer that opens from the top. It can be useful
            for notifications or announcements that need immediate attention.
          </p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
