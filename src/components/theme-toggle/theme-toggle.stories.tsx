import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeToggle } from '../theme-toggle';
import { ThemeProvider } from '../theme-provider';
import { Button as ButtonComponent } from '../button';

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
          'A theme toggle component available in three variants: button (cycles through all modes), switch (animated light/dark toggle), or dropdown (full theme selector menu with all options).',
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
          'The default button theme toggle. Click to cycle through light → dark → system themes.',
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
          'Compact switch theme toggle (52px × 30px) with animated icons inside the track. Features smooth transitions, icon scaling, and opacity changes. Only supports light and dark modes (no system mode).',
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
          'The default theme toggle button. Click to cycle through light → dark → system themes.',
      },
    },
  },
};

export const Comparison: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="bg-card rounded-lg border p-4">
        <h3 className="text-card-foreground mb-4 text-lg font-semibold">
          All Theme Toggle Variants
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Button Variant</p>
              <p className="text-muted-foreground text-sm">
                Cycles through light → dark → system
              </p>
            </div>
            <ThemeToggle variant="button" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Switch Variant</p>
              <p className="text-muted-foreground text-sm">
                Compact animated toggle (52px × 30px)
              </p>
            </div>
            <ThemeToggle variant="switch" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Dropdown Variant</p>
              <p className="text-muted-foreground text-sm">
                Full theme menu with radio button selection
              </p>
            </div>
            <ThemeToggle variant="dropdown" />
          </div>
        </div>
      </div>
      <div className="bg-card rounded-lg border p-4">
        <h4 className="text-card-foreground mb-3 font-medium">
          Variant Features
        </h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>
            • <strong>Button:</strong> Simple click cycling through all modes
          </li>
          <li>
            • <strong>Switch:</strong> Visual toggle with animations (light/dark
            only)
          </li>
          <li>
            • <strong>Dropdown:</strong> Full menu with all options and current
            selection indicator
          </li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Side-by-side comparison of all three theme toggle variants showing different interaction patterns and feature sets.',
      },
    },
  },
};

export const WithComponents: Story = {
  render: () => (
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
        <ThemeToggle variant="dropdown" />
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
  parameters: {
    docs: {
      description: {
        story:
          'Theme toggle shown with various card components to demonstrate the color changes.',
      },
    },
  },
};
