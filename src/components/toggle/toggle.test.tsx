import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toggle, toggleVariants } from './toggle';

describe('Toggle', () => {
  it('renders correctly', () => {
    render(<Toggle aria-label="Test toggle">Toggle</Toggle>);
    expect(
      screen.getByRole('button', { name: 'Test toggle' })
    ).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<Toggle aria-label="Test toggle">Toggle</Toggle>);
    const toggle = screen.getByRole('button');
    expect(toggle).toHaveClass(
      'inline-flex',
      'items-center',
      'justify-center',
      'gap-2',
      'rounded-md',
      'text-sm',
      'font-medium',
      'hover:bg-muted',
      'hover:text-muted-foreground',
      'disabled:pointer-events-none',
      'disabled:opacity-50'
    );
  });

  it('starts unpressed by default', () => {
    render(<Toggle aria-label="Test toggle">Toggle</Toggle>);
    const toggle = screen.getByRole('button');
    expect(toggle).toHaveAttribute('data-state', 'off');
    expect(toggle).toHaveAttribute('aria-pressed', 'false');
  });

  it('can be pressed by default', () => {
    render(
      <Toggle defaultPressed aria-label="Test toggle">
        Toggle
      </Toggle>
    );
    const toggle = screen.getByRole('button');
    expect(toggle).toHaveAttribute('data-state', 'on');
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
  });

  it('handles user interactions', async () => {
    render(<Toggle aria-label="Test toggle">Toggle</Toggle>);
    const toggle = screen.getByRole('button');

    expect(toggle).toHaveAttribute('aria-pressed', 'false');

    await userEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-pressed', 'true');

    await userEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-pressed', 'false');
  });

  it('calls onPressedChange when state changes', async () => {
    const handlePressedChange = jest.fn();
    render(
      <Toggle aria-label="Test toggle" onPressedChange={handlePressedChange}>
        Toggle
      </Toggle>
    );

    const toggle = screen.getByRole('button');

    await userEvent.click(toggle);
    expect(handlePressedChange).toHaveBeenCalledWith(true);

    await userEvent.click(toggle);
    expect(handlePressedChange).toHaveBeenCalledWith(false);
  });

  it('can be controlled', async () => {
    const ControlledToggle = () => {
      const [pressed, setPressed] = React.useState(false);
      return (
        <Toggle
          aria-label="Controlled toggle"
          pressed={pressed}
          onPressedChange={setPressed}
        >
          Toggle
        </Toggle>
      );
    };

    render(<ControlledToggle />);
    const toggle = screen.getByRole('button');

    expect(toggle).toHaveAttribute('aria-pressed', 'false');

    await userEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
  });

  it('can be disabled', async () => {
    const handlePressedChange = jest.fn();
    render(
      <Toggle
        disabled
        aria-label="Disabled toggle"
        onPressedChange={handlePressedChange}
      >
        Toggle
      </Toggle>
    );

    const toggle = screen.getByRole('button');
    expect(toggle).toBeDisabled();
    expect(toggle).toHaveClass('disabled:opacity-50');

    await userEvent.click(toggle);
    expect(handlePressedChange).not.toHaveBeenCalled();
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(
      <Toggle variant="default" aria-label="Default toggle">
        Default
      </Toggle>
    );
    expect(screen.getByRole('button')).toHaveClass('bg-transparent');

    rerender(
      <Toggle variant="outline" aria-label="Outline toggle">
        Outline
      </Toggle>
    );
    expect(screen.getByRole('button')).toHaveClass(
      'border',
      'border-input',
      'bg-transparent',
      'shadow-xs'
    );
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(
      <Toggle size="sm" aria-label="Small toggle">
        Small
      </Toggle>
    );
    expect(screen.getByRole('button')).toHaveClass('h-8', 'px-1.5', 'min-w-8');

    rerender(
      <Toggle size="default" aria-label="Default toggle">
        Default
      </Toggle>
    );
    expect(screen.getByRole('button')).toHaveClass('h-9', 'px-2', 'min-w-9');

    rerender(
      <Toggle size="lg" aria-label="Large toggle">
        Large
      </Toggle>
    );
    expect(screen.getByRole('button')).toHaveClass(
      'h-10',
      'px-2.5',
      'min-w-10'
    );
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(
      <Toggle ref={ref} aria-label="Ref toggle">
        Toggle
      </Toggle>
    );

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current?.textContent).toBe('Toggle');
  });

  it('accepts custom className', () => {
    render(
      <Toggle className="custom-toggle-class" aria-label="Custom toggle">
        Custom
      </Toggle>
    );
    const toggle = screen.getByRole('button');
    expect(toggle).toHaveClass('custom-toggle-class');
  });

  it('supports keyboard navigation', async () => {
    render(<Toggle aria-label="Keyboard toggle">Toggle</Toggle>);
    const toggle = screen.getByRole('button');

    toggle.focus();
    expect(toggle).toHaveFocus();

    await userEvent.keyboard(' ');
    expect(toggle).toHaveAttribute('aria-pressed', 'true');

    await userEvent.keyboard(' ');
    expect(toggle).toHaveAttribute('aria-pressed', 'false');

    await userEvent.keyboard('{Enter}');
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
  });

  it('supports accessibility attributes', () => {
    render(
      <Toggle
        aria-label="Accessible toggle"
        aria-describedby="toggle-description"
      >
        Toggle
      </Toggle>
    );

    const toggle = screen.getByRole('button');
    expect(toggle).toHaveAttribute('aria-label', 'Accessible toggle');
    expect(toggle).toHaveAttribute('aria-describedby', 'toggle-description');
  });

  it('handles focus states correctly', async () => {
    render(<Toggle aria-label="Focus toggle">Toggle</Toggle>);
    const toggle = screen.getByRole('button');

    await userEvent.tab();
    expect(toggle).toHaveFocus();
    expect(toggle).toHaveClass('focus-visible:ring-ring/50');

    await userEvent.tab();
    expect(toggle).not.toHaveFocus();
  });

  it('applies pressed and unpressed styling correctly', () => {
    const { rerender } = render(
      <Toggle pressed={false} aria-label="Styling toggle">
        Toggle
      </Toggle>
    );

    let toggle = screen.getByRole('button');
    expect(toggle).toHaveAttribute('data-state', 'off');

    rerender(
      <Toggle pressed={true} aria-label="Styling toggle">
        Toggle
      </Toggle>
    );
    toggle = screen.getByRole('button');
    expect(toggle).toHaveAttribute('data-state', 'on');
    expect(toggle).toHaveClass('data-[state=on]:bg-accent');
  });

  it('has correct data-slot attribute', () => {
    render(<Toggle aria-label="Data slot toggle">Toggle</Toggle>);
    const toggle = screen.getByRole('button');
    expect(toggle).toHaveAttribute('data-slot', 'toggle');
  });

  it('renders as child component when asChild is true', () => {
    render(
      <Toggle asChild>
        <a href="/test">Link Toggle</a>
      </Toggle>
    );

    const link = screen.getByRole('link', { name: 'Link Toggle' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveClass('inline-flex', 'items-center');
  });

  it('works with icons correctly', () => {
    const MockIcon = () => <span data-testid="mock-icon">Icon</span>;
    render(
      <Toggle aria-label="Icon toggle">
        <MockIcon />
      </Toggle>
    );

    const toggle = screen.getByRole('button');
    const icon = screen.getByTestId('mock-icon');
    expect(toggle).toContainElement(icon);
  });

  it('supports different pressed states programmatically', () => {
    const { rerender } = render(
      <Toggle pressed={false} aria-label="State toggle">
        Toggle
      </Toggle>
    );

    let toggle = screen.getByRole('button');
    expect(toggle).toHaveAttribute('data-state', 'off');
    expect(toggle).toHaveAttribute('aria-pressed', 'false');

    rerender(
      <Toggle pressed={true} aria-label="State toggle">
        Toggle
      </Toggle>
    );
    toggle = screen.getByRole('button');
    expect(toggle).toHaveAttribute('data-state', 'on');
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
  });

  it('handles error states correctly', () => {
    render(
      <Toggle aria-invalid="true" aria-label="Invalid toggle">
        Toggle
      </Toggle>
    );
    const toggle = screen.getByRole('button');
    expect(toggle).toHaveClass('aria-invalid:ring-destructive/20');
  });
});

describe('toggleVariants', () => {
  it('generates correct variant classes', () => {
    expect(toggleVariants({ variant: 'default' })).toContain('bg-transparent');
    expect(toggleVariants({ variant: 'outline' })).toContain('border');
  });

  it('generates correct size classes', () => {
    expect(toggleVariants({ size: 'sm' })).toContain('h-8');
    expect(toggleVariants({ size: 'default' })).toContain('h-9');
    expect(toggleVariants({ size: 'lg' })).toContain('h-10');
  });

  it('applies custom className', () => {
    const result = toggleVariants({ className: 'custom-class' });
    expect(result).toContain('custom-class');
  });
});
