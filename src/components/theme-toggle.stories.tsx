import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './theme-toggle';
import { ThemeProvider } from './theme-provider';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  decorators: [
    Story => (
      <ThemeProvider>
        <div className="p-4">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A button component for toggling between light, dark, and system themes.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

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

export const WithCards: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-lg border bg-card p-4">
        <div>
          <h3 className="text-lg font-semibold text-card-foreground">Dark Mode Demo</h3>
          <p className="text-sm text-muted-foreground">
            Toggle the theme to see the card colors change
          </p>
        </div>
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg border bg-primary p-4 text-primary-foreground">
          <h4 className="font-medium">Primary Card</h4>
          <p className="text-sm opacity-90">This uses primary colors</p>
        </div>
        <div className="rounded-lg border bg-secondary p-4 text-secondary-foreground">
          <h4 className="font-medium">Secondary Card</h4>
          <p className="text-sm opacity-90">This uses secondary colors</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Theme toggle shown with various card components to demonstrate the color changes.',
      },
    },
  },
};
