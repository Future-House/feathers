import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button';
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
      },
    },
    defaultOpen: {
      control: { type: 'boolean' },
      description:
        'The open state of the drawer when it is initially rendered. Use when you do not need to control its open state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    shouldScaleBackground: {
      control: { type: 'boolean' },
      description:
        'When true, the background will scale down when the drawer is open',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    snapPoints: {
      control: { type: 'object' },
      description: 'Array of numbers from 0 to 1 that represents steps',
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: undefined },
      },
    },
  },
  subcomponents: {
    DrawerTrigger: {
      description: 'The button that opens the drawer',
      props: {
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
      props: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the content',
        },
      },
    },
    DrawerHeader: {
      description: 'Container for the drawer title and description',
      props: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the header',
        },
      },
    },
    DrawerFooter: {
      description: 'Container for action buttons at the bottom of the drawer',
      props: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the footer',
        },
      },
    },
    DrawerTitle: {
      description:
        'An accessible title to be announced when the drawer is opened',
      props: {
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
      props: {
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
      props: {
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
              href="#"
              className="hover:bg-accent block rounded-md px-3 py-2 text-sm"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="hover:bg-accent block rounded-md px-3 py-2 text-sm"
            >
              Projects
            </a>
            <a
              href="#"
              className="hover:bg-accent block rounded-md px-3 py-2 text-sm"
            >
              Team
            </a>
            <a
              href="#"
              className="hover:bg-accent block rounded-md px-3 py-2 text-sm"
            >
              Settings
            </a>
            <a
              href="#"
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
            <div>
              <label htmlFor="item-name" className="text-sm font-medium">
                Item Name
              </label>
              <input
                id="item-name"
                type="text"
                placeholder="Enter item name"
                className="border-input mt-1 w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label htmlFor="item-description" className="text-sm font-medium">
                Description
              </label>
              <textarea
                id="item-description"
                placeholder="Enter item description"
                rows={3}
                className="border-input mt-1 w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label htmlFor="item-category" className="text-sm font-medium">
                Category
              </label>
              <select
                id="item-category"
                className="border-input mt-1 w-full rounded-md border px-3 py-2 text-sm"
              >
                <option value="">Select category</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="project">Project</option>
              </select>
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
            <div>
              <h3 className="text-sm font-medium">Appearance</h3>
              <div className="mt-2 space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="theme"
                    value="light"
                    className="mr-2"
                  />
                  <span className="text-sm">Light mode</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="theme"
                    value="dark"
                    className="mr-2"
                  />
                  <span className="text-sm">Dark mode</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="theme"
                    value="system"
                    className="mr-2"
                  />
                  <span className="text-sm">System preference</span>
                </label>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium">Notifications</h3>
              <div className="mt-2 space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Email notifications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Push notifications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Desktop notifications</span>
                </label>
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
            <button className="hover:bg-accent flex w-full items-center rounded-md px-3 py-2 text-left">
              <Edit className="mr-3 h-4 w-4" />
              <span>Edit Item</span>
            </button>
            <button className="hover:bg-accent flex w-full items-center rounded-md px-3 py-2 text-left">
              <Plus className="mr-3 h-4 w-4" />
              <span>Duplicate</span>
            </button>
            <button className="hover:bg-accent flex w-full items-center rounded-md px-3 py-2 text-left">
              <Settings className="mr-3 h-4 w-4" />
              <span>Configure</span>
            </button>
            <button className="text-destructive hover:bg-destructive/10 flex w-full items-center rounded-md px-3 py-2 text-left">
              <Trash2 className="mr-3 h-4 w-4" />
              <span>Delete</span>
            </button>
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
