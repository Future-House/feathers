import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@/components/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog';

const meta = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  parameters: {
    docs: {
      description: {
        component:
          'A modal dialog that interrupts the user with important content and expects a response.',
      },
    },
  },
  tags: [],
  argTypes: {
    // AlertDialog (Root) props from @radix-ui/react-alert-dialog
    defaultOpen: {
      control: { type: 'boolean' },
      description:
        'The open state of the alert dialog when it is initially rendered. Use when you do not need to control its open state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    open: {
      control: { type: 'boolean' },
      description:
        'The controlled open state of the alert dialog. Must be used in conjunction with onOpenChange',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: undefined },
      },
    },
    onOpenChange: {
      action: 'onOpenChange',
      description:
        'Event handler called when the open state of the alert dialog changes',
      table: {
        type: { summary: '(open: boolean) => void' },
        defaultValue: { summary: undefined },
      },
    },
  },
  subcomponents: {
    AlertDialogTrigger: {
      description: 'The button that opens the alert dialog',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
      },
    },
    AlertDialogPortal: {
      description:
        'When used, portals your overlay and content parts into the body',
      argTypes: {
        forceMount: {
          type: 'boolean',
          description:
            'Used to force mounting when more control is needed. Useful when controlling animation with external libraries',
          defaultValue: undefined,
        },
        container: {
          type: 'HTMLElement',
          description: 'Specify a container element to portal the content into',
          defaultValue: 'document.body',
        },
      },
    },
    AlertDialogOverlay: {
      description:
        'A layer that covers the inert portion of the view when the alert dialog is open',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
        forceMount: {
          type: 'boolean',
          description:
            'Used to force mounting when more control is needed. Useful when controlling animation with external libraries',
          defaultValue: undefined,
        },
      },
    },
    AlertDialogContent: {
      description:
        'Contains content to be rendered when the alert dialog is open',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
        forceMount: {
          type: 'boolean',
          description:
            'Used to force mounting when more control is needed. Useful when controlling animation with external libraries',
          defaultValue: undefined,
        },
        onOpenAutoFocus: {
          type: 'function',
          description:
            'Event handler called when focus moves into the component after opening',
          defaultValue: undefined,
        },
        onCloseAutoFocus: {
          type: 'function',
          description:
            'Event handler called when focus moves to the trigger after closing',
          defaultValue: undefined,
        },
        onEscapeKeyDown: {
          type: 'function',
          description: 'Event handler called when the escape key is down',
          defaultValue: undefined,
        },
      },
    },
    AlertDialogHeader: {
      description: 'Container for the alert dialog title and description',
      argTypes: {},
    },
    AlertDialogFooter: {
      description: 'Container for the alert dialog action buttons',
      argTypes: {},
    },
    AlertDialogTitle: {
      description:
        'An accessible title to be announced when the alert dialog is opened',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
      },
    },
    AlertDialogDescription: {
      description:
        'An accessible description to be announced when the alert dialog is opened',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
      },
    },
    AlertDialogAction: {
      description:
        'A button that closes the alert dialog. This button should perform the action described by the alert dialog',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior',
          defaultValue: 'false',
        },
      },
    },
    AlertDialogCancel: {
      description:
        'A button that closes the alert dialog. This button should cancel the action described by the alert dialog',
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
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const Destructive: Story = {
  args: {},
  render: args => (
    <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Account</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete your account? This action cannot be
            undone. All your data will be permanently removed from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            Delete Account
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const WithoutDescription: Story = {
  args: {},
  render: args => (
    <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Simple Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Action</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const LongContent: Story = {
  args: {},
  render: args => (
    <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Terms of Service</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>Terms of Service Agreement</AlertDialogTitle>
          <AlertDialogDescription>
            Please read and accept our terms of service to continue using our
            platform.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-4 text-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Decline</AlertDialogCancel>
          <AlertDialogAction>Accept Terms</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const CustomStyling: Story = {
  args: {},
  render: args => (
    <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button className="bg-purple-600 hover:bg-purple-700">
          Custom Dialog
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-purple-800">
            Custom Styled Dialog
          </AlertDialogTitle>
          <AlertDialogDescription className="text-purple-600">
            This dialog demonstrates custom styling with gradients and colors.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-purple-300 text-purple-700 hover:bg-purple-100">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="bg-purple-600 hover:bg-purple-700">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const Controlled: Story = {
  parameters: {
    controls: { exclude: ['defaultOpen', 'onOpenChange', 'open'] },
  },
  render: function ControlledDialog() {
    const [open, setOpen] = React.useState(false);

    const handleConfirm = () => {
      setOpen(false);
    };

    return (
      <div className="space-y-4">
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Controlled Alert Dialog</AlertDialogTitle>
              <AlertDialogDescription>
                This dialog is controlled by external state. You can open and
                close it programmatically.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpen(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleConfirm}>
                Confirm
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
  },
};

export const MultipleActions: Story = {
  render: function MultipleActionsDialog() {
    const [action, setAction] = React.useState<string>('');

    return (
      <div className="space-y-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Save Document</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Unsaved Changes</AlertDialogTitle>
              <AlertDialogDescription>
                You have unsaved changes. What would you like to do?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex-col gap-2 sm:flex-row">
              <AlertDialogCancel onClick={() => setAction('Discarded changes')}>
                Discard Changes
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button
                  variant="secondary"
                  onClick={() => setAction('Saved as draft')}
                >
                  Save as Draft
                </Button>
              </AlertDialogAction>
              <AlertDialogAction onClick={() => setAction('Published')}>
                Save & Publish
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {action && (
          <div className="rounded border border-blue-200 bg-blue-50 p-3 text-sm text-blue-800">
            Action taken: {action}
          </div>
        )}
      </div>
    );
  },
};

export const WithForm: Story = {
  render: function FormDialog(args) {
    const [feedback, setFeedback] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
      setFeedback('');
      // Reset after 3 seconds for demo
      setTimeout(() => setSubmitted(false), 3000);
    };

    return (
      <div className="space-y-4">
        <AlertDialog {...args}>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Send Feedback</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Send Feedback</AlertDialogTitle>
              <AlertDialogDescription>
                Help us improve by sharing your thoughts and suggestions.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                className="w-full rounded border border-gray-300 p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                placeholder="Your feedback..."
                value={feedback}
                onChange={e => setFeedback(e.target.value)}
                rows={4}
                required
              />
              <AlertDialogFooter>
                <AlertDialogCancel type="button">Cancel</AlertDialogCancel>
                <AlertDialogAction type="submit" disabled={!feedback.trim()}>
                  Send Feedback
                </AlertDialogAction>
              </AlertDialogFooter>
            </form>
          </AlertDialogContent>
        </AlertDialog>

        {submitted && (
          <div className="rounded border border-green-200 bg-green-50 p-3 text-sm text-green-800">
            Thank you for your feedback! We appreciate your input.
          </div>
        )}
      </div>
    );
  },
};

export const AccessibilityExample: Story = {
  args: {},
  render: args => (
    <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Accessibility Demo</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Accessibility Features</AlertDialogTitle>
          <AlertDialogDescription>
            This dialog demonstrates proper accessibility features:
            <br />• Focus management and trapping
            <br />• ARIA labels and descriptions
            <br />• Keyboard navigation (ESC to close)
            <br />• Screen reader announcements
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
          <AlertDialogAction>Got it</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
