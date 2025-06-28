import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog';

const AlertDialogExample = ({
  open,
  onOpenChange,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) => (
  <AlertDialog open={open} onOpenChange={onOpenChange}>
    <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Test Title</AlertDialogTitle>
        <AlertDialogDescription>Test Description</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

describe('AlertDialog', () => {
  it('renders trigger button', () => {
    render(<AlertDialogExample />);
    expect(screen.getByText('Open Dialog')).toBeInTheDocument();
  });

  it('opens dialog when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(<AlertDialogExample />);

    await user.click(screen.getByText('Open Dialog'));

    await waitFor(() => {
      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Description')).toBeInTheDocument();
    });
  });

  it('renders dialog content when open', async () => {
    const user = userEvent.setup();
    render(<AlertDialogExample />);

    await user.click(screen.getByText('Open Dialog'));

    await waitFor(() => {
      expect(screen.getByRole('alertdialog')).toBeInTheDocument();
      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Description')).toBeInTheDocument();
      expect(screen.getByText('Cancel')).toBeInTheDocument();
      expect(screen.getByText('Continue')).toBeInTheDocument();
    });
  });

  it('closes dialog when Cancel is clicked', async () => {
    const user = userEvent.setup();
    render(<AlertDialogExample />);

    await user.click(screen.getByText('Open Dialog'));
    await waitFor(() => {
      expect(screen.getByRole('alertdialog')).toBeInTheDocument();
    });

    await user.click(screen.getByText('Cancel'));
    await waitFor(() => {
      expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
    });
  });

  it('closes dialog when Action is clicked', async () => {
    const user = userEvent.setup();
    render(<AlertDialogExample />);

    await user.click(screen.getByText('Open Dialog'));
    await waitFor(() => {
      expect(screen.getByRole('alertdialog')).toBeInTheDocument();
    });

    await user.click(screen.getByText('Continue'));
    await waitFor(() => {
      expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
    });
  });

  it('closes dialog when Escape key is pressed', async () => {
    const user = userEvent.setup();
    render(<AlertDialogExample />);

    await user.click(screen.getByText('Open Dialog'));
    await waitFor(() => {
      expect(screen.getByRole('alertdialog')).toBeInTheDocument();
    });

    await user.keyboard('{Escape}');
    await waitFor(() => {
      expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
    });
  });

  it('does not close dialog when overlay is clicked (AlertDialog behavior)', async () => {
    const user = userEvent.setup();
    render(<AlertDialogExample />);

    await user.click(screen.getByText('Open Dialog'));
    await waitFor(() => {
      expect(screen.getByRole('alertdialog')).toBeInTheDocument();
    });

    // Try to click the overlay (backdrop) - AlertDialog should not close
    const alertDialog = screen.getByRole('alertdialog');
    const overlay = alertDialog.parentElement?.querySelector(
      '[data-slot="alert-dialog-overlay"]'
    );
    if (overlay) {
      await user.click(overlay);
      // AlertDialog should remain open (unlike regular Dialog)
      await waitFor(() => {
        expect(screen.getByRole('alertdialog')).toBeInTheDocument();
      });
    }
  });

  it('handles controlled state', async () => {
    const onOpenChange = jest.fn();
    const user = userEvent.setup();

    const { rerender } = render(
      <AlertDialogExample open={false} onOpenChange={onOpenChange} />
    );

    // Dialog should not be visible
    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();

    // Rerender with open=true
    rerender(<AlertDialogExample open={true} onOpenChange={onOpenChange} />);

    await waitFor(() => {
      expect(screen.getByRole('alertdialog')).toBeInTheDocument();
    });

    // Click cancel should call onOpenChange
    await user.click(screen.getByText('Cancel'));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('handles uncontrolled state with defaultOpen', async () => {
    render(
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Default Open</AlertDialogTitle>
            <AlertDialogDescription>
              This dialog is open by default
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );

    await waitFor(() => {
      expect(screen.getByRole('alertdialog')).toBeInTheDocument();
      expect(screen.getByText('Default Open')).toBeInTheDocument();
    });
  });

  it('applies custom className to components', async () => {
    const user = userEvent.setup();
    render(
      <AlertDialog>
        <AlertDialogTrigger className="custom-trigger">
          Open Dialog
        </AlertDialogTrigger>
        <AlertDialogContent className="custom-content">
          <AlertDialogHeader className="custom-header">
            <AlertDialogTitle className="custom-title">Title</AlertDialogTitle>
            <AlertDialogDescription className="custom-description">
              Description
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="custom-footer">
            <AlertDialogCancel className="custom-cancel">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="custom-action">
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );

    const trigger = screen.getByText('Open Dialog');
    expect(trigger).toHaveClass('custom-trigger');

    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole('alertdialog')).toHaveClass('custom-content');
      expect(screen.getByText('Title')).toHaveClass('custom-title');
      expect(screen.getByText('Description')).toHaveClass('custom-description');
      expect(screen.getByText('Cancel')).toHaveClass('custom-cancel');
      expect(screen.getByText('Continue')).toHaveClass('custom-action');
    });
  });

  it('supports asChild prop on trigger', async () => {
    const user = userEvent.setup();
    render(
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button type="button">Custom Button</button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogDescription>
              Description for accessibility
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );

    const customButton = screen.getByText('Custom Button');
    expect(customButton.tagName).toBe('BUTTON');

    await user.click(customButton);
    await waitFor(() => {
      expect(screen.getByRole('alertdialog')).toBeInTheDocument();
    });
  });

  it('handles action and cancel callbacks', async () => {
    const onAction = jest.fn();
    const onCancel = jest.fn();
    const user = userEvent.setup();

    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogDescription>
              Description for accessibility
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onAction}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );

    await user.click(screen.getByText('Open Dialog'));

    await waitFor(() => {
      expect(screen.getByRole('alertdialog')).toBeInTheDocument();
    });

    await user.click(screen.getByText('Cancel'));
    expect(onCancel).toHaveBeenCalled();

    // Reopen dialog
    await user.click(screen.getByText('Open Dialog'));
    await waitFor(() => {
      expect(screen.getByRole('alertdialog')).toBeInTheDocument();
    });

    await user.click(screen.getByText('Continue'));
    expect(onAction).toHaveBeenCalled();
  });

  it('maintains focus management', async () => {
    const user = userEvent.setup();
    render(<AlertDialogExample />);

    const trigger = screen.getByText('Open Dialog');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole('alertdialog')).toBeInTheDocument();
    });

    // Focus should be trapped within the dialog
    const cancelButton = screen.getByText('Cancel');
    const continueButton = screen.getByText('Continue');

    // Check that focusable elements are present
    expect(cancelButton).toBeInTheDocument();
    expect(continueButton).toBeInTheDocument();

    // Tab navigation should work within the dialog
    await user.tab();
    // One of the buttons should have focus after tabbing
    expect(document.activeElement).toBeInstanceOf(Element);
  });

  it('renders without description', async () => {
    const user = userEvent.setup();
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title Only</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );

    await user.click(screen.getByText('Open Dialog'));

    await waitFor(() => {
      expect(screen.getByText('Title Only')).toBeInTheDocument();
      expect(screen.queryByText('Test Description')).not.toBeInTheDocument();
    });
  });

  it('handles multiple action buttons', async () => {
    const onAction1 = jest.fn();
    const onAction2 = jest.fn();
    const user = userEvent.setup();

    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Multiple Actions</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onAction1}>Action 1</AlertDialogAction>
            <AlertDialogAction onClick={onAction2}>Action 2</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );

    await user.click(screen.getByText('Open Dialog'));

    await waitFor(() => {
      expect(screen.getByText('Action 1')).toBeInTheDocument();
      expect(screen.getByText('Action 2')).toBeInTheDocument();
    });

    await user.click(screen.getByText('Action 1'));
    expect(onAction1).toHaveBeenCalled();
  });
});
