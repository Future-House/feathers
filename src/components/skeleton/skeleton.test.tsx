import React from 'react';
import { render, screen } from '@testing-library/react';
import { Skeleton } from './skeleton';

describe('Skeleton', () => {
  it('renders correctly', () => {
    render(<Skeleton data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<Skeleton data-testid="skeleton" />);
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('bg-accent', 'animate-pulse', 'rounded-md');
  });

  it('applies custom className', () => {
    render(<Skeleton className="custom-class" data-testid="skeleton" />);
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('custom-class');
    expect(skeleton).toHaveClass('bg-accent', 'animate-pulse', 'rounded-md');
  });

  it('passes through additional props', () => {
    render(
      <Skeleton data-testid="skeleton" id="test-skeleton" role="presentation" />
    );
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveAttribute('id', 'test-skeleton');
    expect(skeleton).toHaveAttribute('role', 'presentation');
  });

  it('has correct data-slot attribute', () => {
    render(<Skeleton data-testid="skeleton" />);
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveAttribute('data-slot', 'skeleton');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Skeleton ref={ref} data-testid="skeleton" />);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toBe(screen.getByTestId('skeleton'));
  });

  it('renders as div element', () => {
    render(<Skeleton data-testid="skeleton" />);
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton.tagName).toBe('DIV');
  });

  it('supports different sizes with className', () => {
    const { rerender } = render(
      <Skeleton className="h-4 w-[250px]" data-testid="skeleton" />
    );
    expect(screen.getByTestId('skeleton')).toHaveClass('h-4', 'w-[250px]');

    rerender(
      <Skeleton className="h-12 w-12 rounded-full" data-testid="skeleton" />
    );
    expect(screen.getByTestId('skeleton')).toHaveClass(
      'h-12',
      'w-12',
      'rounded-full'
    );
  });
});
