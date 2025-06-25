import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, useTheme } from './theme-provider';
import { Button } from './button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Badge } from './badge';

// Demo component that uses the theme context
function ThemeDemo() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-6 p-6">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold text-foreground">Theme Demo</h2>
        <p className="text-muted-foreground">
          Current theme: <Badge variant="outline">{theme}</Badge>
        </p>
      </div>

      <div className="flex justify-center gap-2">
        <Button
          variant={theme === 'light' ? 'default' : 'outline'}
          onClick={() => setTheme('light')}
        >
          Light
        </Button>
        <Button variant={theme === 'dark' ? 'default' : 'outline'} onClick={() => setTheme('dark')}>
          Dark
        </Button>
        <Button
          variant={theme === 'system' ? 'default' : 'outline'}
          onClick={() => setTheme('system')}
        >
          System
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Sample Card</CardTitle>
            <CardDescription>
              This card demonstrates how components adapt to theme changes.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="default">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Color Tokens</CardTitle>
            <CardDescription>CSS custom properties that change with theme.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-primary"></div>
                <span className="text-sm">Primary</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-secondary"></div>
                <span className="text-sm">Secondary</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-muted"></div>
                <span className="text-sm">Muted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-accent"></div>
                <span className="text-sm">Accent</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const meta: Meta<typeof ThemeProvider> = {
  title: 'Providers/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Theme provider that manages light/dark/system theme state and applies the appropriate CSS classes.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen bg-background">
        <ThemeDemo />
      </div>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete theme provider setup with interactive demo showing all theme modes.',
      },
    },
  },
};

export const LightTheme: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background">
        <ThemeDemo />
      </div>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Theme provider with light theme as default.',
      },
    },
  },
};

export const DarkTheme: Story = {
  render: () => (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background">
        <ThemeDemo />
      </div>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Theme provider with dark theme as default.',
      },
    },
  },
};
