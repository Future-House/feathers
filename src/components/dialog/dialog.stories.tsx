import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button';
import { Checkbox } from '../checkbox/checkbox';
import {
  Mail,
  User,
  Settings,
  Info,
  TriangleAlert,
  CircleCheck,
} from '@/icons';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component:
          'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert. Built with Radix UI Dialog primitives and styled with Tailwind CSS.',
      },
    },
  },
  tags: [],
  argTypes: {
    // Root component props from Radix UI Dialog.Root
    defaultOpen: {
      control: { type: 'boolean' },
      description:
        'The open state of the dialog when it is initially rendered. Use when you do not need to control its open state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    open: {
      control: { type: 'boolean' },
      description:
        'The controlled open state of the dialog. Must be used in conjunction with onOpenChange',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: undefined },
      },
    },
    onOpenChange: {
      action: 'onOpenChange',
      description:
        'Event handler called when the open state of the dialog changes',
      table: {
        type: { summary: '(open: boolean) => void' },
        disable: true,
      },
    },
    modal: {
      control: { type: 'boolean' },
      description:
        'The modality of the dialog. When set to true, interaction with outside elements will be disabled and only dialog content will be visible to screen readers',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
  subcomponents: {
    DialogTrigger: {
      description: 'The button that opens the dialog',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
      },
    },
    DialogContent: {
      description: 'The content of the dialog',
      argTypes: {
        showCloseButton: {
          type: 'boolean',
          description:
            'Whether to show the close button in the top-right corner',
          defaultValue: 'true',
        },
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
        onEscapeKeyDown: {
          type: 'function',
          description: 'Event handler called when the escape key is down',
        },
        onPointerDownOutside: {
          type: 'function',
          description:
            'Event handler called when the a pointer event happens outside of the DismissableLayer',
        },
        onInteractOutside: {
          type: 'function',
          description:
            'Event handler called when an interaction happens outside the DismissableLayer',
        },
      },
    },
    DialogHeader: {
      description: 'Container for the dialog title and description',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the header',
        },
      },
    },
    DialogFooter: {
      description: 'Container for action buttons at the bottom of the dialog',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the footer',
        },
      },
    },
    DialogTitle: {
      description:
        'An accessible title to be announced when the dialog is opened',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
      },
    },
    DialogDescription: {
      description:
        'An optional accessible description to be announced when the dialog is opened',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
      },
    },
    DialogClose: {
      description: 'The button that closes the dialog',
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
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultOpen: false,
  },
  render: args => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a dialog description. You can provide additional context
            about the dialog here.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm">
            This is the main content of the dialog. You can put any content
            here, including forms, images, or other components.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const EditProfile: Story = {
  args: {
    defaultOpen: false,
  },
  render: args => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button>
          <User className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              defaultValue="John Doe"
              className="border-input col-span-3 rounded-md border px-3 py-2 text-sm"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="email" className="text-right text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              defaultValue="john@example.com"
              className="border-input col-span-3 rounded-md border px-3 py-2 text-sm"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="role" className="text-right text-sm font-medium">
              Role
            </label>
            <select
              id="role"
              defaultValue="user"
              className="border-input col-span-3 rounded-md border px-3 py-2 text-sm"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
            </select>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const ConfirmationDialog: Story = {
  args: {
    defaultOpen: false,
  },
  render: args => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Item</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <TriangleAlert className="text-destructive h-5 w-5" />
            Are you absolutely sure?
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the item
            and remove all associated data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="bg-destructive/10 rounded-md p-4">
            <p className="text-destructive text-sm">
              <strong>Warning:</strong> Deleting this item will also remove:
            </p>
            <ul className="text-destructive mt-2 list-inside list-disc text-sm">
              <li>All related files and documents</li>
              <li>Associated user permissions</li>
              <li>Historical data and analytics</li>
            </ul>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">Delete Permanently</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const NewsletterSignup: Story = {
  args: {
    defaultOpen: false,
  },
  render: args => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button>
          <Mail className="mr-2 h-4 w-4" />
          Subscribe to Newsletter
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Subscribe to Our Newsletter</DialogTitle>
          <DialogDescription>
            Stay updated with the latest news, features, and exclusive content.
            You can unsubscribe at any time.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="newsletter-email" className="text-sm font-medium">
              Email Address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="border-input rounded-md border px-3 py-2 text-sm"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" />
            <label htmlFor="marketing" className="text-sm">
              I agree to receive marketing communications
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="updates" defaultChecked />
            <label htmlFor="updates" className="text-sm">
              Send me product updates and news
            </label>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Maybe Later</Button>
          </DialogClose>
          <Button>Subscribe</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const SuccessMessage: Story = {
  args: {
    defaultOpen: false,
  },
  render: args => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Show Success</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <CircleCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <DialogTitle>Success!</DialogTitle>
          <DialogDescription>
            Your changes have been saved successfully. The system has been
            updated and all users will see the changes immediately.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="justify-center">
          <DialogClose asChild>
            <Button>Continue</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const SettingsDialog: Story = {
  args: {
    defaultOpen: false,
  },
  render: args => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Application Settings</DialogTitle>
          <DialogDescription>
            Configure your application preferences and account settings.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Notifications</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">
                    Email Notifications
                  </label>
                  <p className="text-muted-foreground text-xs">
                    Receive notifications via email
                  </p>
                </div>
                <Checkbox defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">
                    Push Notifications
                  </label>
                  <p className="text-muted-foreground text-xs">
                    Receive push notifications on your device
                  </p>
                </div>
                <Checkbox />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">
                    Marketing Updates
                  </label>
                  <p className="text-muted-foreground text-xs">
                    Receive updates about new features and products
                  </p>
                </div>
                <Checkbox />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Privacy</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Analytics</label>
                  <p className="text-muted-foreground text-xs">
                    Help improve our services by sharing usage data
                  </p>
                </div>
                <Checkbox defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Crash Reports</label>
                  <p className="text-muted-foreground text-xs">
                    Automatically send crash reports to help us fix issues
                  </p>
                </div>
                <Checkbox defaultChecked />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Appearance</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                <label className="text-sm font-medium">Theme</label>
                <select className="border-input col-span-2 rounded-md border px-3 py-2 text-sm">
                  <option value="system">System</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <label className="text-sm font-medium">Language</label>
                <select className="border-input col-span-2 rounded-md border px-3 py-2 text-sm">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithoutCloseButton: Story = {
  args: {
    defaultOpen: false,
  },
  render: args => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog (No X)</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Required Action</DialogTitle>
          <DialogDescription>
            This dialog requires you to make a choice. You cannot close it
            without selecting an option.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="rounded-md bg-blue-50 p-4 dark:bg-blue-950">
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Notice: This dialog doesn&apos;t have a close button in the
                top-right corner. You must use one of the buttons below to
                proceed.
              </p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Option A</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Option B</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
