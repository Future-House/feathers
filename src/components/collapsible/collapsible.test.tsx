import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ChevronDown } from '@/icons';
import { Button } from '../button/button';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from './collapsible';

const CollapsibleExample = ({
  defaultOpen = false,
  open,
  onOpenChange,
  disabled = false,
  ...props
}: {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  [key: string]: unknown;
}) => (
  <Collapsible
    defaultOpen={defaultOpen}
    open={open}
    onOpenChange={onOpenChange}
    disabled={disabled}
    {...props}
  >
    <div className="flex items-center justify-between space-x-4 px-4">
      <h4 className="text-sm font-semibold">Test Section</h4>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" size="sm" disabled={disabled}>
          <ChevronDown className="h-4 w-4" />
          <span className="sr-only">Toggle</span>
        </Button>
      </CollapsibleTrigger>
    </div>
    <div className="rounded-md border px-4 py-3 font-mono text-sm">
      Always visible content
    </div>
    <CollapsibleContent>
      <div
        className="rounded-md border px-4 py-3 font-mono text-sm"
        data-testid="collapsible-content"
      >
        Hidden content that can be toggled
      </div>
    </CollapsibleContent>
  </Collapsible>
);

describe('Collapsible', () => {
  it('renders collapsible with proper structure', () => {
    render(<CollapsibleExample />);

    const collapsible = document.querySelector('[data-slot="collapsible"]');
    const trigger = document.querySelector('[data-slot="collapsible-trigger"]');
    const content = document.querySelector('[data-slot="collapsible-content"]');

    expect(collapsible).toBeInTheDocument();
    expect(trigger).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  it('renders with content closed by default', () => {
    render(<CollapsibleExample />);

    const content = screen.queryByTestId('collapsible-content');
    expect(content).not.toBeInTheDocument();
  });

  it('renders with content open when defaultOpen is true', () => {
    render(<CollapsibleExample defaultOpen={true} />);

    const content = screen.getByTestId('collapsible-content');
    expect(content).toBeInTheDocument();
  });

  it('toggles content visibility when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(<CollapsibleExample />);

    const trigger = document.querySelector('[data-slot="collapsible-trigger"]');

    // Initially closed
    expect(screen.queryByTestId('collapsible-content')).not.toBeInTheDocument();

    // Click to open
    if (trigger) await user.click(trigger);
    expect(screen.getByTestId('collapsible-content')).toBeInTheDocument();

    // Click to close
    if (trigger) await user.click(trigger);
    expect(screen.queryByTestId('collapsible-content')).not.toBeInTheDocument();
  });

  it('supports controlled mode with open prop', () => {
    const { rerender } = render(<CollapsibleExample open={false} />);

    expect(screen.queryByTestId('collapsible-content')).not.toBeInTheDocument();

    rerender(<CollapsibleExample open={true} />);
    expect(screen.getByTestId('collapsible-content')).toBeInTheDocument();
  });

  it('calls onOpenChange when state changes', async () => {
    const user = userEvent.setup();
    const onOpenChange = jest.fn();
    render(<CollapsibleExample onOpenChange={onOpenChange} />);

    const trigger = document.querySelector('[data-slot="collapsible-trigger"]');

    if (trigger) await user.click(trigger);
    expect(onOpenChange).toHaveBeenCalledWith(true);

    if (trigger) await user.click(trigger);
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup();
    const onOpenChange = jest.fn();
    render(<CollapsibleExample disabled={true} onOpenChange={onOpenChange} />);

    const trigger = document.querySelector('[data-slot="collapsible-trigger"]');

    if (trigger) await user.click(trigger);
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(screen.queryByTestId('collapsible-content')).not.toBeInTheDocument();
  });

  it('renders always visible content regardless of state', () => {
    const { rerender } = render(<CollapsibleExample />);

    expect(screen.getByText('Always visible content')).toBeInTheDocument();
    expect(screen.getByText('Test Section')).toBeInTheDocument();

    rerender(<CollapsibleExample defaultOpen={true} />);
    expect(screen.getByText('Always visible content')).toBeInTheDocument();
    expect(screen.getByText('Test Section')).toBeInTheDocument();
  });

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<CollapsibleExample />);

    const trigger = document.querySelector('[data-slot="collapsible-trigger"]');

    // Focus the trigger
    if (trigger) (trigger as HTMLElement).focus();

    // Press Enter to toggle
    await user.keyboard('{Enter}');
    expect(screen.getByTestId('collapsible-content')).toBeInTheDocument();

    // Press Enter again to toggle
    await user.keyboard('{Enter}');
    expect(screen.queryByTestId('collapsible-content')).not.toBeInTheDocument();
  });

  it('supports Space key to toggle', async () => {
    const user = userEvent.setup();
    render(<CollapsibleExample />);

    const trigger = document.querySelector('[data-slot="collapsible-trigger"]');

    // Focus the trigger
    if (trigger) (trigger as HTMLElement).focus();

    // Press Space to toggle
    await user.keyboard(' ');
    expect(screen.getByTestId('collapsible-content')).toBeInTheDocument();
  });

  it('applies custom className to root element', () => {
    render(<CollapsibleExample className="custom-class" />);

    const collapsible = document.querySelector('[data-slot="collapsible"]');
    expect(collapsible).toHaveClass('custom-class');
  });

  it('forwards other props to root element', () => {
    render(<CollapsibleExample data-testid="custom-collapsible" />);

    const collapsible = screen.getByTestId('custom-collapsible');
    expect(collapsible).toBeInTheDocument();
  });

  it('works with asChild prop on trigger', async () => {
    const user = userEvent.setup();
    render(
      <Collapsible>
        <CollapsibleTrigger asChild>
          <button data-testid="custom-trigger">Custom Trigger</button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div data-testid="content">Content</div>
        </CollapsibleContent>
      </Collapsible>
    );

    const customTrigger = screen.getByTestId('custom-trigger');
    expect(customTrigger).toBeInTheDocument();

    await user.click(customTrigger);
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('works with asChild prop on content', () => {
    render(
      <Collapsible defaultOpen={true}>
        <CollapsibleTrigger>Trigger</CollapsibleTrigger>
        <CollapsibleContent asChild>
          <section data-testid="custom-content">
            <p>Custom content wrapper</p>
          </section>
        </CollapsibleContent>
      </Collapsible>
    );

    const customContent = screen.getByTestId('custom-content');
    expect(customContent).toBeInTheDocument();
    expect(customContent.tagName).toBe('SECTION');
  });

  it('maintains state across re-renders', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<CollapsibleExample />);

    const trigger = document.querySelector('[data-slot="collapsible-trigger"]');

    // Open the collapsible
    if (trigger) await user.click(trigger);
    expect(screen.getByTestId('collapsible-content')).toBeInTheDocument();

    // Re-render with same props
    rerender(<CollapsibleExample />);
    expect(screen.getByTestId('collapsible-content')).toBeInTheDocument();
  });

  it('handles multiple collapsibles independently', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Collapsible data-testid="collapsible-1">
          <CollapsibleTrigger data-testid="trigger-1">
            Trigger 1
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div data-testid="content-1">Content 1</div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible data-testid="collapsible-2">
          <CollapsibleTrigger data-testid="trigger-2">
            Trigger 2
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div data-testid="content-2">Content 2</div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );

    const trigger1 = screen.getByTestId('trigger-1');
    const trigger2 = screen.getByTestId('trigger-2');

    // Open first collapsible
    await user.click(trigger1);
    expect(screen.getByTestId('content-1')).toBeInTheDocument();
    expect(screen.queryByTestId('content-2')).not.toBeInTheDocument();

    // Open second collapsible
    await user.click(trigger2);
    expect(screen.getByTestId('content-1')).toBeInTheDocument();
    expect(screen.getByTestId('content-2')).toBeInTheDocument();

    // Close first collapsible
    await user.click(trigger1);
    expect(screen.queryByTestId('content-1')).not.toBeInTheDocument();
    expect(screen.getByTestId('content-2')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<CollapsibleExample />);

    const trigger = document.querySelector('[data-slot="collapsible-trigger"]');
    const content = document.querySelector('[data-slot="collapsible-content"]');

    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(trigger).toHaveAttribute('data-state', 'closed');
    expect(content).toHaveAttribute('data-state', 'closed');
  });

  it('updates accessibility attributes when opened', async () => {
    const user = userEvent.setup();
    render(<CollapsibleExample />);

    const trigger = document.querySelector('[data-slot="collapsible-trigger"]');

    if (trigger) await user.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(trigger).toHaveAttribute('data-state', 'open');

    const content = document.querySelector('[data-slot="collapsible-content"]');
    expect(content).toHaveAttribute('data-state', 'open');
  });

  it('works without explicit trigger button', () => {
    render(
      <Collapsible defaultOpen={true}>
        <CollapsibleContent>
          <div data-testid="standalone-content">Standalone content</div>
        </CollapsibleContent>
      </Collapsible>
    );

    expect(screen.getByTestId('standalone-content')).toBeInTheDocument();
  });

  it('handles empty content gracefully', () => {
    render(
      <Collapsible defaultOpen={true}>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent />
      </Collapsible>
    );

    const content = document.querySelector('[data-slot="collapsible-content"]');
    expect(content).toBeInTheDocument();
    expect(content).toBeEmptyDOMElement();
  });
});
