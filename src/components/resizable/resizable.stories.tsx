import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from './resizable';
import { Card, CardContent, CardHeader, CardTitle } from '../card/card';

const meta = {
  title: 'Components/Resizable',
  component: ResizablePanelGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Accessible resizable panel groups and layouts built with react-resizable-panels.',
      },
    },
  },
  tags: [],
  argTypes: {
    // PanelGroup props
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The direction of the panel group.',
      table: {
        category: 'ResizablePanelGroup',
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    autoSaveId: {
      control: 'text',
      description:
        'Unique identifier for automatically saving and restoring panel sizes.',
      table: {
        category: 'ResizablePanelGroup',
        type: { summary: 'string' },
        disable: true,
      },
    },
    keyboardResizeBy: {
      control: 'number',
      description: 'Keyboard resize increment (as a percentage).',
      table: {
        category: 'ResizablePanelGroup',
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
      },
    },
    onLayout: {
      action: 'layoutChanged',
      description: 'Called when panel layout changes.',
      table: {
        category: 'ResizablePanelGroup',
        type: { summary: '(sizes: number[]) => void' },
      },
    },
    storage: {
      control: false,
      description: 'Custom storage API for persisting panel sizes.',
      table: {
        category: 'ResizablePanelGroup',
        type: { summary: 'PanelGroupStorage' },
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    tagName: {
      table: {
        disable: true,
      },
    },
  },
  subcomponents: {
    ResizablePanel: {
      description:
        'A resizable panel within a panel group. Panels can be configured with size constraints and collapsible behavior.',
      argTypes: {
        defaultSize: {
          type: 'number',
          description:
            'Panel size as a percentage (0-100) when initially rendered.',
        },
        minSize: {
          type: 'number',
          description: 'Minimum allowable panel size as a percentage (0-100).',
          defaultValue: '10',
        },
        maxSize: {
          type: 'number',
          description: 'Maximum allowable panel size as a percentage (0-100).',
          defaultValue: '100',
        },
        collapsible: {
          type: 'boolean',
          description:
            'Panel should collapse to its minimum size when resized beyond minSize.',
          defaultValue: 'false',
        },
        collapsedSize: {
          type: 'number',
          description: 'Size of panel when collapsed as a percentage (0-100).',
          defaultValue: '0',
        },
        order: {
          type: 'number',
          description:
            'Order of panel within group (for keyboard navigation and persistence).',
        },
        onCollapse: {
          type: '(collapsed: boolean) => void',
          description: 'Called when panel collapsed state changes.',
        },
        onResize: {
          type: '(size: number, prevSize: number) => void',
          description: 'Called when panel is resized.',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the panel.',
        },
        id: {
          type: 'string',
          description: 'Unique identifier for the panel.',
        },
      },
    },
    ResizableHandle: {
      description:
        'A draggable handle that allows users to resize adjacent panels. Can optionally display a visual grip indicator.',
      argTypes: {
        withHandle: {
          type: 'boolean',
          description: 'Whether to display a visual grip handle indicator.',
          defaultValue: 'false',
        },
        disabled: {
          type: 'boolean',
          description: 'When true, panel resizing is disabled.',
          defaultValue: 'false',
        },
        onDragging: {
          type: '(isDragging: boolean) => void',
          description: 'Called when dragging starts or stops.',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the handle.',
        },
        id: {
          type: 'string',
          description: 'Unique identifier for the resize handle.',
        },
        hitAreaMargins: {
          type: 'object',
          description:
            'Invisible margin to increase the hit area for touch/mouse interactions.',
        },
        tabIndex: {
          type: 'number',
          description: 'Tab index for keyboard navigation.',
        },
      },
    },
  },
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

function HorizontalLayoutComponent(args) {
  return (
    <div className="h-[400px] w-full">
      <ResizablePanelGroup
        {...args}
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

function VerticalLayoutComponent(args) {
  return (
    <div className="h-[500px] w-full max-w-md">
      <ResizablePanelGroup
        {...args}
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

function WithHandleComponent(args) {
  return (
    <div className="h-[400px] w-full">
      <ResizablePanelGroup
        {...args}
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

function NestedLayoutComponent(args) {
  return (
    <div className="h-[500px] w-full">
      <ResizablePanelGroup
        {...args}
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

function CollapsiblePanelComponent(args) {
  return (
    <div className="h-[400px] w-full">
      <ResizablePanelGroup
        {...args}
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

function MinMaxSizesComponent(args) {
  return (
    <div className="h-[400px] w-full">
      <ResizablePanelGroup
        {...args}
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
  args: {
    direction: 'horizontal',
  },
  render: args => <HorizontalLayoutComponent {...args} />,
};

export const VerticalLayout: Story = {
  args: {
    direction: 'vertical',
  },
  render: args => <VerticalLayoutComponent {...args} />,
};

export const WithHandle: Story = {
  args: {
    direction: 'horizontal',
  },
  render: args => <WithHandleComponent {...args} />,
};

export const NestedLayout: Story = {
  args: {
    direction: 'horizontal',
  },
  render: args => <NestedLayoutComponent {...args} />,
};

export const CollapsiblePanel: Story = {
  args: {
    direction: 'horizontal',
  },
  render: args => <CollapsiblePanelComponent {...args} />,
};

export const MinMaxSizes: Story = {
  args: {
    direction: 'horizontal',
  },
  render: args => <MinMaxSizesComponent {...args} />,
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
