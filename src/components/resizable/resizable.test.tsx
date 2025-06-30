import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from './resizable';

// Mock react-resizable-panels to avoid ESM issues in Jest
jest.mock('react-resizable-panels', () => ({
  PanelGroup: ({ children, onLayout, ...props }: any) => {
    // Simulate onLayout being called during mount
    React.useEffect(() => {
      if (onLayout) {
        onLayout([50, 50]); // Mock layout values
      }
    }, [onLayout]);

    const { defaultSize, minSize, maxSize, collapsible, id, ...cleanProps } =
      props;
    return (
      <div
        role="group"
        data-panel-group-direction={props.direction || 'horizontal'}
        {...cleanProps}
      >
        {children}
      </div>
    );
  },
  Panel: ({
    children,
    defaultSize,
    minSize,
    maxSize,
    collapsible,
    id,
    ...props
  }: any) => (
    <div role="tabpanel" data-panel-id={id} {...props}>
      {children}
    </div>
  ),
  PanelResizeHandle: ({ children, onDragging, disabled, ...props }: any) => (
    <div
      role="separator"
      tabIndex={0}
      data-resize-handle-state={disabled ? 'inactive' : 'hover'}
      onMouseDown={() => onDragging?.(true)}
      onMouseUp={() => onDragging?.(false)}
      {...props}
    >
      {children}
    </div>
  ),
}));

describe('ResizablePanelGroup', () => {
  it('renders correctly', () => {
    render(
      <ResizablePanelGroup direction="horizontal" data-testid="resizable-group">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    );

    expect(screen.getByTestId('resizable-group')).toBeInTheDocument();
    expect(screen.getByText('Panel 1')).toBeInTheDocument();
    expect(screen.getByText('Panel 2')).toBeInTheDocument();
  });

  it('supports horizontal direction', () => {
    render(
      <ResizablePanelGroup direction="horizontal" data-testid="resizable-group">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    );

    const group = screen.getByTestId('resizable-group');
    expect(group).toHaveAttribute('data-panel-group-direction', 'horizontal');
  });

  it('supports vertical direction', () => {
    render(
      <ResizablePanelGroup direction="vertical" data-testid="resizable-group">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    );

    const group = screen.getByTestId('resizable-group');
    expect(group).toHaveAttribute('data-panel-group-direction', 'vertical');
  });

  it('supports custom className', () => {
    render(
      <ResizablePanelGroup
        direction="horizontal"
        className="custom-class"
        data-testid="resizable-group"
      >
        <ResizablePanel>Panel 1</ResizablePanel>
      </ResizablePanelGroup>
    );

    const group = screen.getByTestId('resizable-group');
    expect(group).toHaveClass('custom-class');
  });

  it('calls onLayout when layout changes', () => {
    const onLayout = jest.fn();

    render(
      <ResizablePanelGroup direction="horizontal" onLayout={onLayout}>
        <ResizablePanel defaultSize={50}>Panel 1</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    );

    // onLayout should be called during initial render
    expect(onLayout).toHaveBeenCalled();
  });
});

describe('ResizablePanel', () => {
  it('renders panel content', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel data-testid="resizable-panel">
          <div>Panel Content</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    );

    const panel = screen.getByTestId('resizable-panel');
    expect(panel).toBeInTheDocument();
    expect(screen.getByText('Panel Content')).toBeInTheDocument();
  });

  it('supports default size', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={30} data-testid="resizable-panel">
          Panel Content
        </ResizablePanel>
      </ResizablePanelGroup>
    );

    const panel = screen.getByTestId('resizable-panel');
    expect(panel).toBeInTheDocument();
  });

  it('supports collapsible prop', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel collapsible data-testid="resizable-panel">
          Panel Content
        </ResizablePanel>
      </ResizablePanelGroup>
    );

    const panel = screen.getByTestId('resizable-panel');
    expect(panel).toBeInTheDocument();
  });

  it('supports min and max size constraints', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={20} maxSize={80} data-testid="resizable-panel">
          Panel Content
        </ResizablePanel>
      </ResizablePanelGroup>
    );

    const panel = screen.getByTestId('resizable-panel');
    expect(panel).toBeInTheDocument();
  });

  it('supports custom id', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel id="custom-panel" data-testid="resizable-panel">
          Panel Content
        </ResizablePanel>
      </ResizablePanelGroup>
    );

    const panel = screen.getByTestId('resizable-panel');
    expect(panel).toBeInTheDocument();
    expect(panel).toHaveAttribute('data-panel-id', 'custom-panel');
  });
});

describe('ResizableHandle', () => {
  it('renders resize handle', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle data-testid="resize-handle" />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    );

    const handle = screen.getByTestId('resize-handle');
    expect(handle).toBeInTheDocument();
  });

  it('renders with visual handle when withHandle is true', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle withHandle data-testid="resize-handle" />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    );

    const handle = screen.getByTestId('resize-handle');
    expect(handle).toBeInTheDocument();

    // Check for the grip icon
    const gripIcon = handle.querySelector('svg');
    expect(gripIcon).toBeInTheDocument();
  });

  it('renders without visual handle when withHandle is false', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle withHandle={false} data-testid="resize-handle" />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    );

    const handle = screen.getByTestId('resize-handle');
    expect(handle).toBeInTheDocument();

    // Check that no grip icon is present
    const gripIcon = handle.querySelector('svg');
    expect(gripIcon).not.toBeInTheDocument();
  });

  it('supports custom className', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle
          className="custom-handle"
          data-testid="resize-handle"
        />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    );

    const handle = screen.getByTestId('resize-handle');
    expect(handle).toHaveClass('custom-handle');
  });

  it('supports disabled state', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle disabled data-testid="resize-handle" />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    );

    const handle = screen.getByTestId('resize-handle');
    expect(handle).toBeInTheDocument();
    expect(handle).toHaveAttribute('data-resize-handle-state', 'inactive');
  });

  it('calls onDragging when dragging state changes', async () => {
    const user = userEvent.setup();
    const onDragging = jest.fn();

    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle onDragging={onDragging} data-testid="resize-handle" />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    );

    const handle = screen.getByTestId('resize-handle');

    // Simulate mouse down to start dragging
    await user.pointer({ target: handle, keys: '[MouseLeft>]' });

    // onDragging should be called with true when dragging starts
    expect(onDragging).toHaveBeenCalledWith(true);
  });

  it('has proper accessibility attributes', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle data-testid="resize-handle" />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    );

    const handle = screen.getByTestId('resize-handle');
    expect(handle).toHaveAttribute('role', 'separator');
    expect(handle).toHaveAttribute('tabindex', '0');
  });
});

describe('Resizable Integration', () => {
  it('renders complete resizable layout', () => {
    render(
      <ResizablePanelGroup direction="horizontal" data-testid="layout">
        <ResizablePanel defaultSize={30}>
          <div data-testid="sidebar">Sidebar</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={70}>
          <div data-testid="main">Main Content</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    );

    expect(screen.getByTestId('layout')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('supports nested panel groups', () => {
    render(
      <ResizablePanelGroup direction="horizontal" data-testid="outer-layout">
        <ResizablePanel defaultSize={30}>
          <div>Sidebar</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={70}>
          <ResizablePanelGroup direction="vertical" data-testid="inner-layout">
            <ResizablePanel defaultSize={60}>
              <div data-testid="main">Main Content</div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={40}>
              <div data-testid="footer">Footer</div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    );

    expect(screen.getByTestId('outer-layout')).toBeInTheDocument();
    expect(screen.getByTestId('inner-layout')).toBeInTheDocument();
    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getAllByRole('separator')).toHaveLength(2);
  });
});
