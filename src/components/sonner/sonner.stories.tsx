import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast } from 'sonner';
import { Button } from '../button';
import { ThemeProvider } from '../theme-provider';
import { Toaster } from './sonner';

const meta = {
  title: 'Components/Sonner',
  component: Toaster,
  parameters: {
    docs: {
      description: {
        component:
          'An opinionated toast component for React. A toast is a subtle notification commonly found in modern interfaces.',
      },
    },
  },
  tags: [],
  argTypes: {
    richColors: {
      control: { type: 'boolean' },
      description: 'Makes error and success states more colorful',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    expand: {
      control: { type: 'boolean' },
      description: 'Toasts will be expanded by default',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    visibleToasts: {
      control: { type: 'number' },
      description: 'Amount of visible toasts',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3' },
      },
    },
    position: {
      control: { type: 'select' },
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      description: 'Position where the toasts will be rendered',
      table: {
        type: { summary: 'ToastPosition' },
        defaultValue: { summary: '"bottom-right"' },
      },
    },
    closeButton: {
      control: { type: 'boolean' },
      description: 'Adds a close button to all toasts',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    offset: {
      control: { type: 'text' },
      description: 'Offset from the edges of the screen',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '"32px"' },
      },
    },
    dir: {
      control: { type: 'select' },
      options: ['ltr', 'rtl'],
      description: 'Directionality of toast text',
      table: {
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: '"ltr"' },
      },
    },
    hotkey: {
      control: { type: 'text' },
      description: 'Keyboard shortcut to move focus to toaster area',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: '["altKey", "KeyT"]' },
      },
    },
    invert: {
      control: { type: 'boolean' },
      description: 'Dark toasts in light mode and vice versa',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    gap: {
      control: { type: 'number' },
      description: 'Gap between toasts when expanded',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '14' },
      },
    },
    mobileOffset: {
      control: { type: 'text' },
      description: 'Offset from edges when screen width is less than 600px',
      table: {
        type: { summary: 'string | number | object' },
        defaultValue: { summary: '"16px"' },
        disable: true,
      },
    },
    swipeDirections: {
      control: { type: 'object' },
      description: 'Array of swipe directions for dismissing toasts',
      table: {
        type: { summary: 'SwipeDirection[]' },
        defaultValue: { summary: 'based on position' },
        disable: true,
      },
    },
    toastOptions: {
      control: { type: 'object' },
      description: 'Default options for all toasts',
      table: {
        type: { summary: 'ToastOptions' },
        disable: true,
      },
    },
    className: {
      control: { type: 'text' },
      description: 'CSS class name to apply to the toaster',
      table: {
        type: { summary: 'string' },
        disable: true,
      },
    },
    style: {
      control: { type: 'object' },
      description: 'Inline styles to apply to the toaster',
      table: {
        type: { summary: 'React.CSSProperties' },
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <div>
      <Button onClick={() => toast('Event has been created')}>
        Show Toast
      </Button>
      <Toaster {...args} />
    </div>
  ),
};

export const ToastVariants: Story = {
  render: args => (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => toast('Default toast')}>Default</Button>
      <Button onClick={() => toast.success('Success toast')}>Success</Button>
      <Button onClick={() => toast.error('Error toast')}>Error</Button>
      <Button onClick={() => toast.warning('Warning toast')}>Warning</Button>
      <Button onClick={() => toast.info('Info toast')}>Info</Button>
      <Toaster {...args} />
    </div>
  ),
};

export const WithDescription: Story = {
  render: args => (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
          })
        }
      >
        With Description
      </Button>
      <Button
        onClick={() =>
          toast.success('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
          })
        }
      >
        Success with Description
      </Button>
      <Toaster {...args} />
    </div>
  ),
};

export const WithActions: Story = {
  render: args => (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() =>
          toast('Event has been created', {
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        With Action
      </Button>
      <Button
        onClick={() =>
          toast('Are you sure?', {
            description: 'This action cannot be undone.',
            action: {
              label: 'Yes',
              onClick: () => console.log('Confirmed'),
            },
            cancel: {
              label: 'Cancel',
              onClick: () => console.log('Cancelled'),
            },
          })
        }
      >
        With Action & Cancel
      </Button>
      <Toaster {...args} />
    </div>
  ),
};

export const RichColors: Story = {
  args: {
    richColors: true,
  },
  render: args => (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => toast.success('Success toast')}>Success</Button>
      <Button onClick={() => toast.error('Error toast')}>Error</Button>
      <Button onClick={() => toast.warning('Warning toast')}>Warning</Button>
      <Button onClick={() => toast.info('Info toast')}>Info</Button>
      <Toaster {...args} />
    </div>
  ),
};

export const WithCloseButton: Story = {
  args: {
    closeButton: true,
  },
  render: args => (
    <div>
      <Button onClick={() => toast('Event has been created')}>
        Show Toast with Close Button
      </Button>
      <Toaster {...args} />
    </div>
  ),
};

export const Expanded: Story = {
  args: {
    expand: true,
  },
  render: args => (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => toast('First toast')}>Toast 1</Button>
      <Button onClick={() => toast('Second toast')}>Toast 2</Button>
      <Button onClick={() => toast('Third toast')}>Toast 3</Button>
      <Toaster {...args} />
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-2">
      <Button
        onClick={() => {
          toast('Top Left', { duration: 1000, position: 'top-left' });
        }}
      >
        Top Left
      </Button>
      <Button
        onClick={() => {
          toast('Top Center', { duration: 1000, position: 'top-center' });
        }}
      >
        Top Center
      </Button>
      <Button
        onClick={() => {
          toast('Top Right', { duration: 1000, position: 'top-right' });
        }}
      >
        Top Right
      </Button>
      <Button
        onClick={() => {
          toast('Bottom Left', { duration: 1000, position: 'bottom-left' });
        }}
      >
        Bottom Left
      </Button>
      <Button
        onClick={() => {
          toast('Bottom Center', { duration: 1000, position: 'bottom-center' });
        }}
      >
        Bottom Center
      </Button>
      <Button
        onClick={() => {
          toast('Bottom Right', { duration: 1000, position: 'bottom-right' });
        }}
      >
        Bottom Right
      </Button>
      <Toaster />
    </div>
  ),
};

export const CustomStyling: Story = {
  render: args => (
    <div>
      <Button
        onClick={() =>
          toast('Custom styled toast', {
            className: '!bg-indigo-800 !text-indigo-50',
            style: {
              // ... add custom style here
            },
          })
        }
      >
        Custom Styled Toast
      </Button>
      <Toaster {...args} />
    </div>
  ),
};
