import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from './resizable';
import { Card, CardContent, CardHeader, CardTitle } from '../card/card';

const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'Components/Resizable',
  component: ResizablePanelGroup,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Accessible resizable panel groups and layouts built with react-resizable-panels.',
      },
    },
  },
  argTypes: {
    // PanelGroup props
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The direction of the panel group.',
      table: {
        category: 'PanelGroup',
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    autoSaveId: {
      control: 'text',
      description:
        'Unique identifier for automatically saving and restoring panel sizes.',
      table: {
        category: 'PanelGroup',
        type: { summary: 'string' },
      },
    },
    keyboardResizeBy: {
      control: 'number',
      description: 'Keyboard resize increment (as a percentage).',
      table: {
        category: 'PanelGroup',
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
      },
    },
    onLayout: {
      action: 'layoutChanged',
      description: 'Called when panel layout changes.',
      table: {
        category: 'PanelGroup',
        type: { summary: '(sizes: number[]) => void' },
      },
    },
    storage: {
      control: false,
      description: 'Custom storage API for persisting panel sizes.',
      table: {
        category: 'PanelGroup',
        type: { summary: 'PanelGroupStorage' },
      },
    },
    // Panel props
    collapsedSize: {
      control: 'number',
      description: 'Panel size when collapsed (as a percentage).',
      table: {
        category: 'Panel',
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    collapsible: {
      control: 'boolean',
      description: 'Panel can be collapsed to its minimum size.',
      table: {
        category: 'Panel',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    defaultSize: {
      control: 'number',
      description: 'Initial panel size (as a percentage).',
      table: {
        category: 'Panel',
        type: { summary: 'number' },
      },
    },
    id: {
      control: 'text',
      description: 'Panel identifier for imperative API.',
      table: {
        category: 'Panel',
        type: { summary: 'string' },
      },
    },
    maxSize: {
      control: 'number',
      description: 'Maximum panel size (as a percentage).',
      table: {
        category: 'Panel',
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
    minSize: {
      control: 'number',
      description: 'Minimum panel size (as a percentage).',
      table: {
        category: 'Panel',
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
      },
    },
    order: {
      control: 'number',
      description: 'Panel order within the group.',
      table: {
        category: 'Panel',
        type: { summary: 'number' },
      },
    },
    // PanelResizeHandle props
    disabled: {
      control: 'boolean',
      description: 'Disable the resize handle.',
      table: {
        category: 'PanelResizeHandle',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hitAreaMargins: {
      control: 'object',
      description: 'Expand the hit area of the resize handle.',
      table: {
        category: 'PanelResizeHandle',
        type: { summary: '{ coarse: number; fine: number }' },
      },
    },
    onDragging: {
      action: 'dragging',
      description: 'Called when dragging state changes.',
      table: {
        category: 'PanelResizeHandle',
        type: { summary: '(isDragging: boolean) => void' },
      },
    },
    // Custom props
    withHandle: {
      control: 'boolean',
      description: 'Show the visual grip handle.',
      table: {
        category: 'ResizableHandle',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

function HorizontalLayoutComponent() {
  return (
    <div className="h-[400px] w-full">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] max-w-md rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Left Panel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  This is the left panel content. You can resize it by dragging
                  the handle.
                </p>
              </CardContent>
            </Card>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Right Panel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  This is the right panel content. It adjusts as you resize the
                  left panel.
                </p>
              </CardContent>
            </Card>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

function VerticalLayoutComponent() {
  return (
    <div className="h-[500px] w-full max-w-md">
      <ResizablePanelGroup
        direction="vertical"
        className="min-h-[200px] rounded-lg border"
      >
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Top Panel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Header content area
                </p>
              </CardContent>
            </Card>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Middle Panel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Main content area that can be resized vertically
                </p>
              </CardContent>
            </Card>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Bottom Panel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Footer content area
                </p>
              </CardContent>
            </Card>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

function WithHandleComponent() {
  return (
    <div className="h-[400px] w-full">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] max-w-md rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Panel A</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Notice the visual grip handle between panels
                </p>
              </CardContent>
            </Card>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Panel B</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  The grip handle makes it clear where to drag
                </p>
              </CardContent>
            </Card>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

function NestedLayoutComponent() {
  return (
    <div className="h-[500px] w-full">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] max-w-2xl rounded-lg border"
      >
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Sidebar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Navigation sidebar
                </p>
              </CardContent>
            </Card>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={60}>
              <div className="flex h-full items-center justify-center p-6">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Main Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Primary content area with nested vertical layout
                    </p>
                  </CardContent>
                </Card>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={40}>
              <div className="flex h-full items-center justify-center p-6">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Details Panel</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Additional details and information
                    </p>
                  </CardContent>
                </Card>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

function CollapsiblePanelComponent() {
  return (
    <div className="h-[400px] w-full">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] max-w-md rounded-lg border"
      >
        <ResizablePanel defaultSize={25} minSize={15} collapsible>
          <div className="flex h-full items-center justify-center p-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Collapsible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  This panel can be collapsed
                </p>
              </CardContent>
            </Card>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Main Panel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Try resizing the left panel to its minimum size to see it
                  collapse
                </p>
              </CardContent>
            </Card>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

function MinMaxSizesComponent() {
  return (
    <div className="h-[400px] w-full">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] max-w-md rounded-lg border"
      >
        <ResizablePanel defaultSize={30} minSize={20} maxSize={60}>
          <div className="flex h-full items-center justify-center p-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Constrained</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Min: 20%, Max: 60%
                </p>
              </CardContent>
            </Card>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <div className="flex h-full items-center justify-center p-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Flexible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  This panel fills remaining space
                </p>
              </CardContent>
            </Card>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export const HorizontalLayout: Story = {
  render: () => <HorizontalLayoutComponent />,
};

export const VerticalLayout: Story = {
  render: () => <VerticalLayoutComponent />,
};

export const WithHandle: Story = {
  render: () => <WithHandleComponent />,
};

export const NestedLayout: Story = {
  render: () => <NestedLayoutComponent />,
};

export const CollapsiblePanel: Story = {
  render: () => <CollapsiblePanelComponent />,
};

export const MinMaxSizes: Story = {
  render: () => <MinMaxSizesComponent />,
};

export const BasicExample: Story = {
  args: {
    direction: 'horizontal',
  },
  render: args => (
    <div className="h-[300px] w-full max-w-md">
      <ResizablePanelGroup
        {...args}
        className="min-h-[200px] rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Panel One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Panel Two</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};
