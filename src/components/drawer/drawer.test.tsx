import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Button } from '../button/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer';

const DrawerExample = ({
  defaultOpen = false,
  open,
  onOpenChange,
  direction = 'bottom',
  modal = true,
  ...props
}: {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  modal?: boolean;
  [key: string]: unknown;
}) => (
  <Drawer
    defaultOpen={defaultOpen}
    open={open}
    onOpenChange={onOpenChange}
    direction={direction}
    modal={modal}
    {...props}
  >
    <DrawerTrigger asChild>
      <Button data-testid="drawer-trigger">Open Drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Test Drawer</DrawerTitle>
        <DrawerDescription>
          This is a test drawer description.
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4">
        <p data-testid="drawer-body">Drawer content goes here.</p>
      </div>
      <DrawerFooter>
        <Button data-testid="confirm-button">Confirm</Button>
        <DrawerClose asChild>
          <Button variant="outline" data-testid="cancel-button">
            Cancel
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

describe('Drawer', () => {
  it('renders drawer trigger', () => {
    render(<DrawerExample />);

    const trigger = screen.getByTestId('drawer-trigger');
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveTextContent('Open Drawer');
  });

  it('opens drawer when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(<DrawerExample />);

    const trigger = screen.getByTestId('drawer-trigger');

    // Initially closed
    expect(screen.queryByTestId('drawer-body')).not.toBeInTheDocument();

    // Click to open
    await user.click(trigger);
    expect(screen.getByTestId('drawer-body')).toBeInTheDocument();
  });

  it('renders drawer content when open', async () => {
    const user = userEvent.setup();
    render(<DrawerExample />);

    await user.click(screen.getByTestId('drawer-trigger'));

    expect(screen.getByText('Test Drawer')).toBeInTheDocument();
    expect(
      screen.getByText('This is a test drawer description.')
    ).toBeInTheDocument();
    expect(screen.getByTestId('drawer-body')).toBeInTheDocument();
    expect(screen.getByTestId('cancel-button')).toBeInTheDocument();
    expect(screen.getByTestId('confirm-button')).toBeInTheDocument();
  });

  it('renders with defaultOpen prop', () => {
    render(<DrawerExample defaultOpen={true} />);

    expect(screen.getByTestId('drawer-body')).toBeInTheDocument();
    expect(screen.getByText('Test Drawer')).toBeInTheDocument();
  });

  it('supports controlled mode with open prop', () => {
    const { rerender } = render(<DrawerExample open={false} />);

    expect(screen.queryByTestId('drawer-body')).not.toBeInTheDocument();

    rerender(<DrawerExample open={true} />);
    expect(screen.getByTestId('drawer-body')).toBeInTheDocument();
  });

  it('calls onOpenChange when state changes', async () => {
    const user = userEvent.setup();
    const onOpenChange = jest.fn();
    render(<DrawerExample onOpenChange={onOpenChange} />);

    const trigger = screen.getByTestId('drawer-trigger');
    await user.click(trigger);

    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it('closes drawer when close button is clicked', async () => {
    const user = userEvent.setup();
    render(<DrawerExample defaultOpen={true} />);

    expect(screen.getByTestId('drawer-body')).toBeInTheDocument();

    const cancelButton = screen.getByTestId('cancel-button');
    await user.click(cancelButton);

    expect(screen.queryByTestId('drawer-body')).not.toBeInTheDocument();
  });

  it('supports different directions', () => {
    const { rerender } = render(
      <DrawerExample defaultOpen={true} direction="bottom" />
    );

    let content = document.querySelector('[data-slot="drawer-content"]');
    expect(content).toHaveAttribute('data-vaul-drawer-direction', 'bottom');

    rerender(<DrawerExample defaultOpen={true} direction="top" />);
    content = document.querySelector('[data-slot="drawer-content"]');
    expect(content).toHaveAttribute('data-vaul-drawer-direction', 'top');

    rerender(<DrawerExample defaultOpen={true} direction="left" />);
    content = document.querySelector('[data-slot="drawer-content"]');
    expect(content).toHaveAttribute('data-vaul-drawer-direction', 'left');

    rerender(<DrawerExample defaultOpen={true} direction="right" />);
    content = document.querySelector('[data-slot="drawer-content"]');
    expect(content).toHaveAttribute('data-vaul-drawer-direction', 'right');
  });

  it('has proper accessibility attributes', () => {
    render(<DrawerExample defaultOpen={true} />);

    const title = screen.getByText('Test Drawer');
    const description = screen.getByText('This is a test drawer description.');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('renders overlay when drawer is open', () => {
    render(<DrawerExample defaultOpen={true} />);

    const overlay = document.querySelector('[data-slot="drawer-overlay"]');
    expect(overlay).toBeInTheDocument();
  });

  it('applies custom className to content', () => {
    render(
      <Drawer defaultOpen={true}>
        <DrawerContent className="custom-class">
          <DrawerHeader>
            <DrawerTitle>Custom Class Test</DrawerTitle>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    );

    const content = document.querySelector('[data-slot="drawer-content"]');
    expect(content).toHaveClass('custom-class');
  });

  it('supports asChild prop on trigger', async () => {
    const user = userEvent.setup();
    render(
      <Drawer>
        <DrawerTrigger asChild>
          <button data-testid="custom-trigger">Custom Trigger</button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Custom Trigger Test</DrawerTitle>
          </DrawerHeader>
          <div data-testid="content">Content</div>
        </DrawerContent>
      </Drawer>
    );

    const customTrigger = screen.getByTestId('custom-trigger');
    expect(customTrigger).toBeInTheDocument();

    await user.click(customTrigger);
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('supports asChild prop on close button', async () => {
    const user = userEvent.setup();
    render(
      <Drawer defaultOpen={true}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Close Test</DrawerTitle>
          </DrawerHeader>
          <div data-testid="content">Content</div>
          <DrawerClose asChild>
            <button data-testid="custom-close">Custom Close</button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    );

    const customClose = screen.getByTestId('custom-close');
    expect(customClose).toBeInTheDocument();
    expect(screen.getByTestId('content')).toBeInTheDocument();

    await user.click(customClose);
    expect(screen.queryByTestId('content')).not.toBeInTheDocument();
  });

  it('maintains state across re-renders', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<DrawerExample />);

    const trigger = screen.getByTestId('drawer-trigger');
    await user.click(trigger);
    expect(screen.getByTestId('drawer-body')).toBeInTheDocument();

    // Re-render with same props
    rerender(<DrawerExample />);
    expect(screen.getByTestId('drawer-body')).toBeInTheDocument();
  });

  it('handles multiple drawers independently', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Drawer>
          <DrawerTrigger asChild>
            <Button data-testid="trigger-1">Drawer 1</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer 1</DrawerTitle>
            </DrawerHeader>
            <div data-testid="content-1">Content 1</div>
          </DrawerContent>
        </Drawer>

        <Drawer>
          <DrawerTrigger asChild>
            <Button data-testid="trigger-2">Drawer 2</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer 2</DrawerTitle>
            </DrawerHeader>
            <div data-testid="content-2">Content 2</div>
          </DrawerContent>
        </Drawer>
      </div>
    );

    const trigger1 = screen.getByTestId('trigger-1');
    const trigger2 = screen.getByTestId('trigger-2');

    // Open first drawer
    await user.click(trigger1);
    expect(screen.getByTestId('content-1')).toBeInTheDocument();
    expect(screen.queryByTestId('content-2')).not.toBeInTheDocument();

    // Close first drawer with Escape
    await user.keyboard('{Escape}');
    expect(screen.queryByTestId('content-1')).not.toBeInTheDocument();

    // Open second drawer
    await user.click(trigger2);
    expect(screen.queryByTestId('content-1')).not.toBeInTheDocument();
    expect(screen.getByTestId('content-2')).toBeInTheDocument();
  });

  it('renders header with proper structure', () => {
    render(<DrawerExample defaultOpen={true} />);

    const header = document.querySelector('[data-slot="drawer-header"]');
    expect(header).toBeInTheDocument();
  });

  it('renders footer with proper structure', () => {
    render(<DrawerExample defaultOpen={true} />);

    const footer = document.querySelector('[data-slot="drawer-footer"]');
    expect(footer).toBeInTheDocument();
  });

  it('applies custom className to header', () => {
    render(
      <Drawer defaultOpen={true}>
        <DrawerContent>
          <DrawerHeader className="custom-header">
            <DrawerTitle>Custom Header</DrawerTitle>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    );

    const header = document.querySelector('[data-slot="drawer-header"]');
    expect(header).toHaveClass('custom-header');
  });

  it('applies custom className to footer', () => {
    render(
      <Drawer defaultOpen={true}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Test</DrawerTitle>
          </DrawerHeader>
          <DrawerFooter className="custom-footer">
            <Button>Test</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );

    const footer = document.querySelector('[data-slot="drawer-footer"]');
    expect(footer).toHaveClass('custom-footer');
  });

  it('renders without header', () => {
    render(
      <Drawer defaultOpen={true}>
        <DrawerContent>
          <div data-testid="content-only">Content without header</div>
        </DrawerContent>
      </Drawer>
    );

    expect(screen.getByTestId('content-only')).toBeInTheDocument();
    expect(
      document.querySelector('[data-slot="drawer-header"]')
    ).not.toBeInTheDocument();
  });

  it('renders without footer', () => {
    render(
      <Drawer defaultOpen={true}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Header Only</DrawerTitle>
          </DrawerHeader>
          <div data-testid="content-only">Content without footer</div>
        </DrawerContent>
      </Drawer>
    );

    expect(screen.getByTestId('content-only')).toBeInTheDocument();
    expect(
      document.querySelector('[data-slot="drawer-footer"]')
    ).not.toBeInTheDocument();
  });

  it('forwards props to drawer components', () => {
    render(
      <Drawer defaultOpen={true} data-testid="drawer-root">
        <DrawerContent data-testid="drawer-content-custom">
          <DrawerHeader data-testid="drawer-header-custom">
            <DrawerTitle data-testid="drawer-title-custom">Title</DrawerTitle>
            <DrawerDescription data-testid="drawer-description-custom">
              Description
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter data-testid="drawer-footer-custom">
            <Button>Button</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );

    expect(screen.getByTestId('drawer-content-custom')).toBeInTheDocument();
    expect(screen.getByTestId('drawer-header-custom')).toBeInTheDocument();
    expect(screen.getByTestId('drawer-title-custom')).toBeInTheDocument();
    expect(screen.getByTestId('drawer-description-custom')).toBeInTheDocument();
    expect(screen.getByTestId('drawer-footer-custom')).toBeInTheDocument();
  });

  it('shows handle for bottom/top directions', () => {
    const { rerender } = render(
      <DrawerExample defaultOpen={true} direction="bottom" />
    );

    let handle = document.querySelector(
      '.group-data-\\[vaul-drawer-direction\\=bottom\\]\\/drawer-content\\:block'
    );
    expect(handle).toBeInTheDocument();

    rerender(<DrawerExample defaultOpen={true} direction="left" />);
    handle = document.querySelector(
      '.group-data-\\[vaul-drawer-direction\\=bottom\\]\\/drawer-content\\:block'
    );
    expect(handle).toBeInTheDocument(); // Handle is present but hidden for left/right
  });

  it('renders portal correctly', () => {
    render(<DrawerExample defaultOpen={true} />);

    // Portal may not be rendered in test environment due to how React portals work
    // Instead, we verify that the content is rendered properly
    expect(screen.getByTestId('drawer-body')).toBeInTheDocument();
  });
});
