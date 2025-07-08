import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          "A simple separator component built on top of Radix UI's Separator primitive. Provides a visually subtle line to separate content sections with support for both horizontal and vertical orientations.",
      },
    },
  },
  tags: [],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator',
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'horizontal' },
        disable: true,
      },
    },
    decorative: {
      control: 'boolean',
      description:
        'When true, signifies that it is purely visual, carries no semantic meaning, and ensures it is not present in the accessibility tree',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the separator',
      table: {
        type: { summary: 'string' },
      },
    },
    asChild: {
      control: 'boolean',
      description:
        'Change the default rendered element for the one passed as a child, merging their props and behavior',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: args => (
    <div className="w-64 space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
        <p className="text-muted-foreground text-sm">
          An open-source UI component library.
        </p>
      </div>
      <Separator {...args} />
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Installation</h4>
        <p className="text-muted-foreground text-sm">
          Install the component via your package manager.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A basic horizontal separator used to divide content sections.',
      },
    },
  },
};

export const Vertical: Story = {
  render: args => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator {...args} orientation="vertical" className="h-4" />
      <div>Docs</div>
      <Separator {...args} orientation="vertical" className="h-4" />
      <div>Source</div>
    </div>
  ),
  args: {
    orientation: 'vertical',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Vertical separators used in navigation menus or inline content.',
      },
    },
  },
};

export const CustomStyling: Story = {
  render: ({ className, ...args }) => (
    <div className="w-64 space-y-6">
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Default Separator</h4>
        <p className="text-muted-foreground text-sm">Standard border styling</p>
      </div>
      <Separator />

      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Colored Separator</h4>
        <p className="text-muted-foreground text-sm">
          Custom color and thickness
        </p>
      </div>
      <Separator className={`h-2 bg-red-500 ${className}`} {...args} />

      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Dashed Separator</h4>
        <p className="text-muted-foreground text-sm">Dashed border style</p>
      </div>
      <Separator
        className={`h-0 border-t border-dashed border-blue-600 bg-transparent ${className}`}
        {...args}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Separators with custom styling including colors, thickness, and border styles.',
      },
    },
  },
};

export const InCards: Story = {
  render: args => (
    <div className="bg-card text-card-foreground w-80 rounded-lg border shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl leading-none font-semibold tracking-tight">
          Account Settings
        </h3>
        <p className="text-muted-foreground text-sm">
          Manage your account preferences
        </p>
      </div>
      <div className="space-y-4 p-6 pt-0">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Profile Information</h4>
          <p className="text-muted-foreground text-sm">
            Update your personal details
          </p>
        </div>

        <Separator {...args} />

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Security</h4>
          <p className="text-muted-foreground text-sm">
            Password and authentication settings
          </p>
        </div>

        <Separator {...args} />

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Notifications</h4>
          <p className="text-muted-foreground text-sm">
            Manage your notification preferences
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Separators used within card components to organize content sections.',
      },
    },
  },
};

export const InNavigation: Story = {
  render: args => (
    <nav className="flex h-4 items-center space-x-4 text-sm font-medium">
      <a href="#" className="text-muted-foreground hover:text-foreground">
        Home
      </a>
      <Separator orientation="vertical" {...args} />
      <a href="#" className="text-muted-foreground hover:text-foreground">
        Products
      </a>
      <Separator orientation="vertical" {...args} />
      <a href="#" className="text-muted-foreground hover:text-foreground">
        About
      </a>
      <Separator orientation="vertical" {...args} />
      <a href="#" className="text-foreground">
        Contact
      </a>
    </nav>
  ),
  args: {
    orientation: 'vertical',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Vertical separators used in navigation breadcrumbs or menu items.',
      },
    },
  },
};

export const WithSpacing: Story = {
  render: ({ className, ...args }) => (
    <div className="w-64">
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Section One</h4>
        <p className="text-muted-foreground text-sm">
          Content for the first section.
        </p>
      </div>

      <Separator className={`my-6 ${className}`} {...args} />

      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Section Two</h4>
        <p className="text-muted-foreground text-sm">
          Content for the second section with more spacing.
        </p>
      </div>

      <Separator className={`my-2 ${className}`} {...args} />

      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Section Three</h4>
        <p className="text-muted-foreground text-sm">
          Content for the third section with less spacing.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Separators with different spacing configurations using margin classes.',
      },
    },
  },
};

export const NonDecorative: Story = {
  render: args => (
    <div className="w-64 space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Important Notice</h4>
        <p className="text-muted-foreground text-sm">
          This section contains critical information.
        </p>
      </div>
      <Separator decorative={false} {...args} />
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Regular Content</h4>
        <p className="text-muted-foreground text-sm">
          Standard content section continues here.
        </p>
      </div>
    </div>
  ),
  args: {
    decorative: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A semantic separator that is not purely decorative and has meaning for screen readers.',
      },
    },
  },
};
