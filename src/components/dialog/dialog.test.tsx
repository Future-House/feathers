import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Button } from '../button/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';

const DialogExample = ({
  defaultOpen = false,
  open,
  onOpenChange,
  modal = true,
  showCloseButton = true,
  ...props
}: {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  showCloseButton?: boolean;
  [key: string]: unknown;
}) => (
  <Dialog
    defaultOpen={defaultOpen}
    open={open}
    onOpenChange={onOpenChange}
    modal={modal}
    {...props}
  >
    <DialogTrigger asChild>
      <Button data-testid="dialog-trigger">Open Dialog</Button>
    </DialogTrigger>
    <DialogContent showCloseButton={showCloseButton}>
      <DialogHeader>
        <DialogTitle>Test Dialog</DialogTitle>
        <DialogDescription>
          This is a test dialog description.
        </DialogDescription>
      </DialogHeader>
      <div className="py-4">
        <p data-testid="dialog-body">Dialog content goes here.</p>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline" data-testid="cancel-button">
            Cancel
          </Button>
        </DialogClose>
        <Button data-testid="confirm-button">Confirm</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

describe('Dialog', () => {
  it('renders dialog trigger', () => {
    render(<DialogExample />);

    const trigger = screen.getByTestId('dialog-trigger');
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveTextContent('Open Dialog');
  });

  it('opens dialog when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(<DialogExample />);

    const trigger = screen.getByTestId('dialog-trigger');

    // Initially closed
    expect(screen.queryByTestId('dialog-body')).not.toBeInTheDocument();

    // Click to open
    await user.click(trigger);
    expect(screen.getByTestId('dialog-body')).toBeInTheDocument();
  });

  it('renders dialog content when open', async () => {
    const user = userEvent.setup();
    render(<DialogExample />);

    await user.click(screen.getByTestId('dialog-trigger'));

    expect(screen.getByText('Test Dialog')).toBeInTheDocument();
    expect(
      screen.getByText('This is a test dialog description.')
    ).toBeInTheDocument();
    expect(screen.getByTestId('dialog-body')).toBeInTheDocument();
    expect(screen.getByTestId('cancel-button')).toBeInTheDocument();
    expect(screen.getByTestId('confirm-button')).toBeInTheDocument();
  });

  it('renders with defaultOpen prop', () => {
    render(<DialogExample defaultOpen={true} />);

    expect(screen.getByTestId('dialog-body')).toBeInTheDocument();
    expect(screen.getByText('Test Dialog')).toBeInTheDocument();
  });

  it('supports controlled mode with open prop', () => {
    const { rerender } = render(<DialogExample open={false} />);

    expect(screen.queryByTestId('dialog-body')).not.toBeInTheDocument();

    rerender(<DialogExample open={true} />);
    expect(screen.getByTestId('dialog-body')).toBeInTheDocument();
  });

  it('calls onOpenChange when state changes', async () => {
    const user = userEvent.setup();
    const onOpenChange = jest.fn();
    render(<DialogExample onOpenChange={onOpenChange} />);

    const trigger = screen.getByTestId('dialog-trigger');
    await user.click(trigger);

    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it('closes dialog when close button is clicked', async () => {
    const user = userEvent.setup();
    render(<DialogExample defaultOpen={true} />);

    expect(screen.getByTestId('dialog-body')).toBeInTheDocument();

    const cancelButton = screen.getByTestId('cancel-button');
    await user.click(cancelButton);

    expect(screen.queryByTestId('dialog-body')).not.toBeInTheDocument();
  });

  it('closes dialog when X button is clicked', async () => {
    const user = userEvent.setup();
    render(<DialogExample defaultOpen={true} />);

    expect(screen.getByTestId('dialog-body')).toBeInTheDocument();

    const closeButton = screen.getByRole('button', { name: /close/i });
    await user.click(closeButton);

    expect(screen.queryByTestId('dialog-body')).not.toBeInTheDocument();
  });

  it('hides close button when showCloseButton is false', () => {
    render(<DialogExample defaultOpen={true} showCloseButton={false} />);

    expect(screen.getByTestId('dialog-body')).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /close/i })
    ).not.toBeInTheDocument();
  });

  it('closes dialog when Escape key is pressed', async () => {
    const user = userEvent.setup();
    render(<DialogExample defaultOpen={true} />);

    expect(screen.getByTestId('dialog-body')).toBeInTheDocument();

    await user.keyboard('{Escape}');

    expect(screen.queryByTestId('dialog-body')).not.toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<DialogExample defaultOpen={true} />);

    const dialog = document.querySelector('[data-slot="dialog-content"]');
    const title = screen.getByText('Test Dialog');
    const description = screen.getByText('This is a test dialog description.');

    expect(dialog).toHaveAttribute('role', 'dialog');
    // Note: aria-modal is set by Radix UI internally, may not appear in data attributes
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('renders overlay when dialog is open', () => {
    render(<DialogExample defaultOpen={true} />);

    const overlay = document.querySelector('[data-slot="dialog-overlay"]');
    expect(overlay).toBeInTheDocument();
  });

  it('applies custom className to content', () => {
    render(
      <Dialog defaultOpen={true}>
        <DialogContent className="custom-class">
          <DialogHeader>
            <DialogTitle>Custom Class Test</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );

    const content = document.querySelector('[data-slot="dialog-content"]');
    expect(content).toHaveClass('custom-class');
  });

  it('supports asChild prop on trigger', async () => {
    const user = userEvent.setup();
    render(
      <Dialog>
        <DialogTrigger asChild>
          <button data-testid="custom-trigger">Custom Trigger</button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Custom Trigger Test</DialogTitle>
          </DialogHeader>
          <div data-testid="content">Content</div>
        </DialogContent>
      </Dialog>
    );

    const customTrigger = screen.getByTestId('custom-trigger');
    expect(customTrigger).toBeInTheDocument();

    await user.click(customTrigger);
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('supports asChild prop on close button', async () => {
    const user = userEvent.setup();
    render(
      <Dialog defaultOpen={true}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Close Test</DialogTitle>
          </DialogHeader>
          <div data-testid="content">Content</div>
          <DialogClose asChild>
            <button data-testid="custom-close">Custom Close</button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    );

    const customClose = screen.getByTestId('custom-close');
    expect(customClose).toBeInTheDocument();
    expect(screen.getByTestId('content')).toBeInTheDocument();

    await user.click(customClose);
    expect(screen.queryByTestId('content')).not.toBeInTheDocument();
  });

  it('maintains state across re-renders', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<DialogExample />);

    const trigger = screen.getByTestId('dialog-trigger');
    await user.click(trigger);
    expect(screen.getByTestId('dialog-body')).toBeInTheDocument();

    // Re-render with same props
    rerender(<DialogExample />);
    expect(screen.getByTestId('dialog-body')).toBeInTheDocument();
  });

  it('handles multiple dialogs independently', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button data-testid="trigger-1">Dialog 1</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog 1</DialogTitle>
            </DialogHeader>
            <div data-testid="content-1">Content 1</div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button data-testid="trigger-2">Dialog 2</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog 2</DialogTitle>
            </DialogHeader>
            <div data-testid="content-2">Content 2</div>
          </DialogContent>
        </Dialog>
      </div>
    );

    const trigger1 = screen.getByTestId('trigger-1');
    const trigger2 = screen.getByTestId('trigger-2');

    // Open first dialog
    await user.click(trigger1);
    expect(screen.getByTestId('content-1')).toBeInTheDocument();
    expect(screen.queryByTestId('content-2')).not.toBeInTheDocument();

    // Close first dialog with Escape
    await user.keyboard('{Escape}');
    expect(screen.queryByTestId('content-1')).not.toBeInTheDocument();

    // Open second dialog
    await user.click(trigger2);
    expect(screen.queryByTestId('content-1')).not.toBeInTheDocument();
    expect(screen.getByTestId('content-2')).toBeInTheDocument();
  });

  it('renders header with proper structure', () => {
    render(<DialogExample defaultOpen={true} />);

    const header = document.querySelector('[data-slot="dialog-header"]');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('flex', 'flex-col', 'gap-2');
  });

  it('renders footer with proper structure', () => {
    render(<DialogExample defaultOpen={true} />);

    const footer = document.querySelector('[data-slot="dialog-footer"]');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('flex', 'flex-col-reverse', 'gap-2');
  });

  it('applies custom className to header', () => {
    render(
      <Dialog defaultOpen={true}>
        <DialogContent>
          <DialogHeader className="custom-header">
            <DialogTitle>Custom Header</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );

    const header = document.querySelector('[data-slot="dialog-header"]');
    expect(header).toHaveClass('custom-header');
  });

  it('applies custom className to footer', () => {
    render(
      <Dialog defaultOpen={true}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Test</DialogTitle>
          </DialogHeader>
          <DialogFooter className="custom-footer">
            <Button>Test</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

    const footer = document.querySelector('[data-slot="dialog-footer"]');
    expect(footer).toHaveClass('custom-footer');
  });

  it('renders without header', () => {
    render(
      <Dialog defaultOpen={true}>
        <DialogContent>
          <div data-testid="content-only">Content without header</div>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByTestId('content-only')).toBeInTheDocument();
    expect(
      document.querySelector('[data-slot="dialog-header"]')
    ).not.toBeInTheDocument();
  });

  it('renders without footer', () => {
    render(
      <Dialog defaultOpen={true}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Header Only</DialogTitle>
          </DialogHeader>
          <div data-testid="content-only">Content without footer</div>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByTestId('content-only')).toBeInTheDocument();
    expect(
      document.querySelector('[data-slot="dialog-footer"]')
    ).not.toBeInTheDocument();
  });

  it('handles click outside to close when modal is true', async () => {
    const user = userEvent.setup();
    render(<DialogExample defaultOpen={true} modal={true} />);

    expect(screen.getByTestId('dialog-body')).toBeInTheDocument();

    // Click on overlay should close the dialog (this is the default Radix Dialog behavior)
    const overlay = document.querySelector('[data-slot="dialog-overlay"]');
    if (overlay) {
      await user.click(overlay);
    }

    expect(screen.queryByTestId('dialog-body')).not.toBeInTheDocument();
  });

  it('forwards props to dialog components', () => {
    render(
      <Dialog defaultOpen={true} data-testid="dialog-root">
        <DialogContent data-testid="dialog-content-custom">
          <DialogHeader data-testid="dialog-header-custom">
            <DialogTitle data-testid="dialog-title-custom">Title</DialogTitle>
            <DialogDescription data-testid="dialog-description-custom">
              Description
            </DialogDescription>
          </DialogHeader>
          <DialogFooter data-testid="dialog-footer-custom">
            <Button>Button</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByTestId('dialog-content-custom')).toBeInTheDocument();
    expect(screen.getByTestId('dialog-header-custom')).toBeInTheDocument();
    expect(screen.getByTestId('dialog-title-custom')).toBeInTheDocument();
    expect(screen.getByTestId('dialog-description-custom')).toBeInTheDocument();
    expect(screen.getByTestId('dialog-footer-custom')).toBeInTheDocument();
  });
});
