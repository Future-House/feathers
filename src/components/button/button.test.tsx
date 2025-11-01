import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole('button', { name: 'Click me' })
    ).toBeInTheDocument();
  });

  it('applies default variant and size classes', () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-primary',
      'text-primary-foreground',
      'h-9',
      'px-4'
    );
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(
      <Button variant="destructive">Destructive</Button>
    );
    expect(screen.getByRole('button')).toHaveClass(
      'bg-destructive',
      'text-destructive-foreground'
    );

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole('button')).toHaveClass('border', 'bg-transparent');

    rerender(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole('button')).toHaveClass('hover:bg-accent');
  });

  it('applies new variant color classes correctly', () => {
    const { rerender } = render(<Button variant="success">Success</Button>);
    expect(screen.getByRole('button')).toHaveClass(
      'bg-success',
      'text-success-foreground'
    );

    rerender(<Button variant="warning">Warning</Button>);
    expect(screen.getByRole('button')).toHaveClass(
      'bg-warning',
      'text-warning-foreground'
    );

    rerender(<Button variant="info">Info</Button>);
    expect(screen.getByRole('button')).toHaveClass(
      'bg-info',
      'text-info-foreground'
    );

    rerender(<Button variant="error">Error</Button>);
    expect(screen.getByRole('button')).toHaveClass(
      'bg-error',
      'text-error-foreground'
    );

    rerender(<Button variant="brand">Brand</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-brand', 'text-primary');
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-8', 'px-3');

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-10', 'px-6');

    rerender(<Button size="icon">Icon</Button>);
    expect(screen.getByRole('button')).toHaveClass('size-9');
  });

  it('handles onClick events', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', async () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50');

    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders as child component when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );

    const link = screen.getByRole('link', { name: 'Link Button' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveClass('inline-flex', 'items-center');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Button with ref</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current?.textContent).toBe('Button with ref');
  });

  it('accepts custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  describe('loading state', () => {
    it('shows loading spinner when loading prop is true', () => {
      render(<Button loading>Loading Button</Button>);

      const button = screen.getByRole('button');
      const spinner = button.querySelector('svg');

      expect(spinner).toBeInTheDocument();
      expect(spinner).toHaveClass('animate-spin');
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('disables button when loading', async () => {
      const handleClick = jest.fn();
      render(
        <Button loading onClick={handleClick}>
          Loading
        </Button>
      );

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();

      await userEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('shows both loading spinner and children', () => {
      render(<Button loading>Button Text</Button>);

      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('Button Text');
      expect(button.querySelector('svg')).toBeInTheDocument();
    });

    it('does not show spinner when loading is false', () => {
      render(<Button loading={false}>Normal Button</Button>);

      const button = screen.getByRole('button');
      const spinner = button.querySelector('svg');

      expect(spinner).not.toBeInTheDocument();
      expect(button).toHaveAttribute('aria-busy', 'false');
    });

    it('loading state overrides disabled prop', () => {
      render(
        <Button loading disabled={false}>
          Loading Button
        </Button>
      );

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
  });
});
