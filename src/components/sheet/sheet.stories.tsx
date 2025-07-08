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
import { Button } from '../button';

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          "A sheet component that slides in from the side of the screen. Built on top of Radix UI's Dialog primitive and provides a flexible overlay interface for displaying content.",
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
        disable: true,
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
  subcomponents: {
    SheetTrigger: {
      description:
        'A button that opens the sheet. Can be used with the asChild prop for custom trigger components.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the trigger element',
        },
      },
    },
    SheetContent: {
      description:
        'The main content area of the sheet. Contains the overlay and positioning logic.',
      argTypes: {
        side: {
          type: 'string',
          description: 'The side of the screen from which the sheet slides in',
          defaultValue: 'right',
        },
        className: {
          type: 'string',
          description:
            'Additional CSS classes to apply to the content container',
        },
        children: {
          type: 'ReactNode',
          description: 'Content to display inside the sheet',
        },
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
        forceMount: {
          type: 'boolean',
          description:
            'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.',
        },
        onOpenAutoFocus: {
          type: 'function',
          description:
            'Event handler called when the sheet opens and the focus moves to the destructive action after opening.',
        },
        onCloseAutoFocus: {
          type: 'function',
          description:
            'Event handler called when the sheet closes and the focus moves to the trigger after closing.',
        },
        onEscapeKeyDown: {
          type: 'function',
          description:
            'Event handler called when the escape key is down. Can be prevented by calling event.preventDefault.',
        },
        onPointerDownOutside: {
          type: 'function',
          description:
            'Event handler called when a pointer event happens outside of the DismissableLayer. Can be prevented by calling event.preventDefault.',
        },
        onInteractOutside: {
          type: 'function',
          description:
            'Event handler called when an interaction happens outside the DismissableLayer. Specifically, when a pointerdown event happens outside or focus moves outside of it.',
        },
      },
    },
    SheetHeader: {
      description:
        'Header section of the sheet, typically containing the title and description.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the header',
        },
      },
    },
    SheetTitle: {
      description:
        'The title of the sheet. Automatically provides accessible labeling for screen readers.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the title',
        },
      },
    },
    SheetDescription: {
      description:
        'A description of the sheet content. Provides additional context for screen readers.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the description',
        },
      },
    },
    SheetFooter: {
      description:
        'Footer section of the sheet, typically containing action buttons.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the footer',
        },
      },
    },
    SheetClose: {
      description:
        'A button that closes the sheet. Can be used with the asChild prop for custom close components.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the close element',
        },
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
        <div className="grid gap-4 p-4">
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
        <div className="flex flex-col gap-2 p-4">
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
        <div className="flex flex-col gap-3 p-4">
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
        <div className="grid grid-cols-2 gap-4 p-4">
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
      <Sheet {...args} open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>Open Sheet via {`<Trigger/>`}</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Controlled Sheet</SheetTitle>
            <SheetDescription>
              This sheet&apos;s open state is controlled by React state.
            </SheetDescription>
          </SheetHeader>
          <div className="p-4">
            <p className="text-sm">
              You can control this sheet programmatically using the buttons
              below.
            </p>
          </div>
          <SheetFooter>
            <Button onClick={() => setOpen(false)} variant="outline">
              Close Sheet
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <div className="space-x-2">
        <Button onClick={() => setOpen(true)} variant="secondary">
          Open Programmatically
        </Button>
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
        <div className="p-4">
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
