import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A sheet component that slides in from the side of the screen. Built on top of Radix UI's Dialog primitive and provides a flexible overlay interface for displaying content.

## Features

- **Accessible**: Full keyboard navigation and screen reader support
- **Customizable**: Flexible styling with Tailwind CSS classes
- **Multiple directions**: Supports sliding from top, right, bottom, or left
- **Portal rendering**: Content renders in a portal for proper z-index handling
- **Auto-focus management**: Handles focus management when opening/closing
- **Escape key handling**: Closes on escape key press
- **Controlled/Uncontrolled**: Works in both controlled and uncontrolled modes

## Usage

\`\`\`tsx
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@future-house/feathers/components/sheet';

function Example() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>Open Sheet</button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            This is a description of the sheet content.
          </SheetDescription>
        </SheetHeader>
        <p>Sheet content goes here.</p>
      </SheetContent>
    </Sheet>
  );
}
\`\`\`
        `,
      },
    },
  },
  tags: [],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'The controlled open state of the sheet',
      table: {
        type: { summary: 'boolean' },
      },
    },
    defaultOpen: {
      control: 'boolean',
      description:
        'The open state of the sheet when initially rendered (uncontrolled)',
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
    modal: {
      control: 'boolean',
      description:
        'The modality of the sheet. When set to false, interaction with outside elements will be disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: args => (
    <Sheet {...args}>
      <SheetTrigger asChild>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2">
          Open Sheet
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input
              id="name"
              defaultValue="Pedro Duarte"
              className="border-input focus-visible:ring-ring col-span-3 rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Username
            </label>
            <input
              id="username"
              defaultValue="@peduarte"
              className="border-input focus-visible:ring-ring col-span-3 rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2">
              Save changes
            </button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A basic sheet that slides in from the right side of the screen.',
      },
    },
  },
};

export const FromLeft: Story = {
  render: args => (
    <Sheet {...args}>
      <SheetTrigger asChild>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2">
          Open from Left
        </button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>
            Navigate through different sections of the application.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 py-4">
          <a href="#" className="hover:bg-accent rounded-md px-2 py-2 text-sm">
            Dashboard
          </a>
          <a href="#" className="hover:bg-accent rounded-md px-2 py-2 text-sm">
            Projects
          </a>
          <a href="#" className="hover:bg-accent rounded-md px-2 py-2 text-sm">
            Settings
          </a>
          <a href="#" className="hover:bg-accent rounded-md px-2 py-2 text-sm">
            Help
          </a>
        </div>
      </SheetContent>
    </Sheet>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Sheet that slides in from the left side, commonly used for navigation menus.',
      },
    },
  },
};

export const FromTop: Story = {
  render: args => (
    <Sheet {...args}>
      <SheetTrigger asChild>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2">
          Open from Top
        </button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>You have 3 unread notifications.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-3 py-4">
          <div className="border-border rounded-md border p-3">
            <p className="text-sm font-medium">New message from John</p>
            <p className="text-muted-foreground text-xs">2 minutes ago</p>
          </div>
          <div className="border-border rounded-md border p-3">
            <p className="text-sm font-medium">Project update available</p>
            <p className="text-muted-foreground text-xs">1 hour ago</p>
          </div>
          <div className="border-border rounded-md border p-3">
            <p className="text-sm font-medium">Weekly report ready</p>
            <p className="text-muted-foreground text-xs">3 hours ago</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Sheet that slides in from the top, useful for notifications or quick actions.',
      },
    },
  },
};

export const FromBottom: Story = {
  render: args => (
    <Sheet {...args}>
      <SheetTrigger asChild>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2">
          Open from Bottom
        </button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Quick Actions</SheetTitle>
          <SheetDescription>
            Perform common actions quickly from here.
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <button className="border-border hover:bg-accent rounded-md border p-4 text-center text-sm">
            Share
          </button>
          <button className="border-border hover:bg-accent rounded-md border p-4 text-center text-sm">
            Copy Link
          </button>
          <button className="border-border hover:bg-accent rounded-md border p-4 text-center text-sm">
            Download
          </button>
          <button className="border-border hover:bg-accent rounded-md border p-4 text-center text-sm">
            Print
          </button>
        </div>
      </SheetContent>
    </Sheet>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Sheet that slides in from the bottom, perfect for mobile-style action sheets.',
      },
    },
  },
};

function ControlledSheetExample(args: React.ComponentProps<typeof Sheet>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4">
      <Sheet open={open} onOpenChange={setOpen} {...args}>
        <SheetTrigger asChild>
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2">
            Open Controlled Sheet
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Controlled Sheet</SheetTitle>
            <SheetDescription>
              This sheet&apos;s open state is controlled by React state.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="text-sm">
              You can control this sheet programmatically using the buttons
              below.
            </p>
          </div>
          <SheetFooter>
            <button
              onClick={() => setOpen(false)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2"
            >
              Close Sheet
            </button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <div className="space-x-2">
        <button
          onClick={() => setOpen(true)}
          className="border-input hover:bg-accent rounded-md border px-4 py-2 text-sm"
        >
          Open Programmatically
        </button>
        <button
          onClick={() => setOpen(false)}
          className="border-input hover:bg-accent rounded-md border px-4 py-2 text-sm"
        >
          Close Programmatically
        </button>
      </div>
      <p className="text-muted-foreground text-sm">
        Sheet is currently: {open ? 'Open' : 'Closed'}
      </p>
    </div>
  );
}

export const Controlled: Story = {
  render: ControlledSheetExample,
  parameters: {
    docs: {
      description: {
        story:
          'A controlled sheet where the open state is managed by React state.',
      },
    },
  },
};

export const NonModal: Story = {
  render: args => (
    <Sheet modal={false} {...args}>
      <SheetTrigger asChild>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2">
          Open Non-Modal Sheet
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Non-Modal Sheet</SheetTitle>
          <SheetDescription>
            This sheet allows interaction with elements behind it.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm">
            With modal=false, you can interact with elements outside this sheet.
            Try clicking on other elements on the page while this sheet is open.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A non-modal sheet that allows interaction with elements behind it.',
      },
    },
  },
};
