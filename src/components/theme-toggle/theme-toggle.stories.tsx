import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeToggle } from '../theme-toggle';
import { ThemeProvider } from '../theme-provider';
import { Button as ButtonComponent } from '../button';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '../sidebar';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  decorators: [
    Story => (
      <ThemeProvider storageKey="theme-toggle-theme">
        <div className="p-4">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'A theme toggle component available in three variants: button, switch, or dropdown.',
      },
    },
  },
  tags: [],
  argTypes: {
    variant: {
      control: 'select',
      options: ['button', 'switch', 'dropdown'],
      description: 'The rendering variant of the theme toggle',
      table: {
        type: { summary: '"button" | "switch" | "dropdown"' },
        defaultValue: { summary: '"button"' },
      },
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a child component using Radix UI Slot',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    variant: 'button',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The default button theme toggle. Click to toggle between light and dark themes.',
      },
    },
  },
};

export const Switch: Story = {
  args: {
    variant: 'switch',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Compact switch theme toggle (52px × 30px) with the current theme icon displayed on the sliding thumb. Shows sun icon when in light mode and moon icon when in dark mode. Features smooth slide transitions. Only supports light and dark modes (no system mode).',
      },
    },
  },
};

export const Dropdown: Story = {
  args: {
    variant: 'dropdown',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Dropdown theme toggle that supports all three modes (light, dark, system). Shows the current theme icon on the trigger button and provides a menu with radio button selection.',
      },
    },
  },
};

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The default theme toggle button. Click to toggle between light and dark themes.',
      },
    },
  },
};

export const Comparison: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="bg-card rounded-lg border p-4">
        <h3 className="text-card-foreground mb-4 text-lg font-semibold">
          Theme Toggle Variants
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Button Variant</p>
              <p className="text-muted-foreground text-sm">
                Simple click toggle between light and dark
              </p>
            </div>
            <ThemeToggle variant="button" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Switch Variant</p>
              <p className="text-muted-foreground text-sm">
                Sliding thumb with current theme icon (light/dark only)
              </p>
            </div>
            <ThemeToggle variant="switch" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Dropdown Variant</p>
              <p className="text-muted-foreground text-sm">
                Full menu with all options (light, dark and system) and current
                selection indicator
              </p>
            </div>
            <ThemeToggle variant="dropdown" buttonProps={{ variant: 'info' }} />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AsChild: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="bg-card rounded-lg border p-4">
        <h3 className="text-card-foreground mb-4 text-lg font-semibold">
          Using asChild prop
        </h3>
        <p className="text-muted-foreground mb-4 text-sm">
          The theme toggle can be rendered as any button component using the
          asChild prop.
        </p>

        <div className="space-y-4">
          {/* Custom button with different variant */}
          <div className="flex items-center gap-4">
            <span className="text-sm">As custom Button:</span>
            <ThemeToggle asChild>
              <ButtonComponent variant="secondary" size="icon" />
            </ThemeToggle>
          </div>

          {/* As a destructive button */}
          <div className="flex items-center gap-4">
            <span className="text-sm">As destructive Button:</span>
            <ThemeToggle asChild>
              <ButtonComponent variant="destructive" size="icon" />
            </ThemeToggle>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates using the asChild prop to render the theme toggle as different button components while maintaining all theme toggle functionality.',
      },
    },
  },
};

export const InSidebar: Story = {
  render: () => (
    <div className="h-[400px] w-full max-w-xs">
      <SidebarProvider defaultOpen={true}>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <ThemeToggle asChild>
                      <SidebarMenuButton />
                    </ThemeToggle>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <span>Help</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <div className="flex-1 p-4">
          <h3 className="mb-2 font-semibold">Sidebar Integration</h3>
          <p className="text-muted-foreground text-sm">
            The theme toggle is rendered as a SidebarMenuButton component,
            seamlessly integrating with the sidebar navigation.
          </p>
        </div>
      </SidebarProvider>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Shows the theme toggle integrated into a sidebar navigation using the asChild prop with SidebarMenuButton.',
      },
    },
  },
};

export const WithComponents: Story = {
  args: {
    variant: 'dropdown',
  },
  render: args => (
    <div className="space-y-4">
      <div className="bg-card flex items-center justify-between rounded-lg border p-4">
        <div>
          <h3 className="text-card-foreground text-lg font-semibold">
            Dark Mode Demo
          </h3>
          <p className="text-muted-foreground text-sm">
            Toggle the theme to see the card colors change
          </p>
        </div>
        <ThemeToggle {...args} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-primary text-primary-foreground rounded-lg border p-4">
          <h4 className="font-medium">Primary Card</h4>
          <p className="text-sm opacity-90">This uses primary colors</p>
        </div>
        <div className="bg-secondary text-secondary-foreground rounded-lg border p-4">
          <h4 className="font-medium">Secondary Card</h4>
          <p className="text-sm opacity-90">This uses secondary colors</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <ButtonComponent variant="default">Default</ButtonComponent>
        <ButtonComponent variant="secondary">Secondary</ButtonComponent>
        <ButtonComponent variant="destructive">Destructive</ButtonComponent>
        <ButtonComponent variant="outline">Outline</ButtonComponent>
        <ButtonComponent variant="ghost">Ghost</ButtonComponent>
        <ButtonComponent variant="link">Link</ButtonComponent>
      </div>
    </div>
  ),
};
