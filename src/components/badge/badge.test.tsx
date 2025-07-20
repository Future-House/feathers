import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from './badge';
import { type VariantProps } from 'class-variance-authority';
import { badgeVariants } from './badge';

type BadgeProps = VariantProps<typeof badgeVariants>;

describe('Badge', () => {
  it('renders correctly', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Badge>Default Badge</Badge>);
    const badge = screen.getByText('Default Badge');
    expect(badge).toHaveClass(
      'inline-flex',
      'items-center',
      'justify-center',
      'rounded-md',
      'border',
      'px-2',
      'py-0.5',
      'text-xs',
      'font-medium',
      'border-transparent',
      'bg-primary',
      'text-primary-foreground'
    );
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Badge variant="secondary">Secondary</Badge>);
    expect(screen.getByText('Secondary')).toHaveClass(
      'bg-secondary',
      'text-secondary-foreground'
    );

    rerender(<Badge variant="destructive">Destructive</Badge>);
    expect(screen.getByText('Destructive')).toHaveClass(
      'bg-error/10',
      'text-error'
    );

    rerender(<Badge variant="outline">Outline</Badge>);
    expect(screen.getByText('Outline')).toHaveClass('text-foreground');
    expect(screen.getByText('Outline')).not.toHaveClass('border-transparent');
  });

  it('renders as a span element', () => {
    render(<Badge>Badge Content</Badge>);
    const badge = screen.getByText('Badge Content');
    expect(badge.tagName).toBe('SPAN');
  });

  it('accepts custom className', () => {
    render(<Badge className="custom-class">Custom Badge</Badge>);
    const badge = screen.getByText('Custom Badge');
    expect(badge).toHaveClass('custom-class');
  });

  it('passes through HTML attributes', () => {
    render(
      <Badge data-testid="test-badge" id="badge-id" title="Test title">
        Badge with attributes
      </Badge>
    );
    const badge = screen.getByTestId('test-badge');
    expect(badge).toHaveAttribute('id', 'badge-id');
    expect(badge).toHaveAttribute('title', 'Test title');
  });

  it('renders with children content', () => {
    render(
      <Badge>
        <span>Icon</span>
        Badge with icon
      </Badge>
    );
    expect(screen.getByText('Icon')).toBeInTheDocument();
    expect(screen.getByText('Badge with icon')).toBeInTheDocument();
  });

  it('supports React nodes as children', () => {
    render(
      <Badge>
        <strong>Bold text</strong> and normal text
      </Badge>
    );
    const boldElement = screen.getByText('Bold text');
    expect(boldElement.tagName).toBe('STRONG');
    expect(screen.getByText('and normal text')).toBeInTheDocument();
  });

  it('merges custom classes with variant classes correctly', () => {
    render(
      <Badge variant="secondary" className="custom-bg-color">
        Custom styled badge
      </Badge>
    );
    const badge = screen.getByText('Custom styled badge');
    expect(badge).toHaveClass('bg-secondary', 'custom-bg-color');
  });

  it('has correct focus styles', () => {
    render(<Badge>Focusable Badge</Badge>);
    const badge = screen.getByText('Focusable Badge');
    expect(badge).toHaveClass(
      'focus-visible:border-ring',
      'focus-visible:ring-ring/50',
      'focus-visible:ring-[3px]'
    );
  });

  it('has transition classes for animations', () => {
    render(<Badge>Animated Badge</Badge>);
    const badge = screen.getByText('Animated Badge');
    expect(badge).toHaveClass('transition-[color,box-shadow]');
  });

  describe('variants', () => {
    it.each([
      ['default', ['bg-primary', 'text-primary-foreground']],
      ['secondary', ['bg-secondary', 'text-secondary-foreground']],
      ['destructive', ['bg-error/10', 'text-error']],
      ['outline', ['text-foreground']],
    ])('applies correct classes for %s variant', (variant, expectedClasses) => {
      render(<Badge variant={variant as BadgeProps['variant']}>Test</Badge>);
      const badge = screen.getByText('Test');
      expectedClasses.forEach(className => {
        expect(badge).toHaveClass(className);
      });
    });
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Badge ref={ref}>Badge with ref</Badge>);

    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    expect(ref.current?.textContent).toBe('Badge with ref');
  });

  it('handles empty content', () => {
    const { container } = render(<Badge></Badge>);
    const badge = container.firstChild as HTMLElement;
    expect(badge).toHaveClass('inline-flex');
    expect(badge.textContent).toBe('');
  });
});
