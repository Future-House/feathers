import React from 'react';
import { render, screen } from '@testing-library/react';
import { Progress } from './progress';

describe('Progress', () => {
  it('renders correctly', () => {
    render(<Progress value={50} aria-label="Loading progress" />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<Progress value={50} aria-label="Progress" />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveClass(
      'bg-secondary',
      'relative',
      'h-4',
      'w-full',
      'overflow-hidden',
      'rounded-full'
    );
  });

  it('applies value prop correctly', () => {
    render(<Progress value={75} aria-label="Progress" />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuenow', '75');
  });

  it('handles zero value', () => {
    render(<Progress value={0} aria-label="Progress" />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuenow', '0');
  });

  it('handles maximum value', () => {
    render(<Progress value={100} aria-label="Progress" />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuenow', '100');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Progress ref={ref} value={50} aria-label="Progress" />);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveAttribute('role', 'progressbar');
  });

  it('accepts custom className', () => {
    render(
      <Progress value={50} className="custom-class" aria-label="Progress" />
    );
    expect(screen.getByRole('progressbar')).toHaveClass('custom-class');
  });

  it('renders indicator with correct styling', () => {
    render(<Progress value={60} aria-label="Progress" />);
    const progressRoot = screen.getByRole('progressbar');
    const indicator = progressRoot.querySelector('[style]');

    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveClass(
      'bg-primary',
      'h-full',
      'w-full',
      'flex-1',
      'transition-all'
    );
  });

  it('has proper accessibility attributes', () => {
    render(<Progress value={50} aria-label="File upload" />);
    const progress = screen.getByRole('progressbar');

    expect(progress).toHaveAttribute('aria-valuenow', '50');
    expect(progress).toHaveAttribute('aria-label', 'File upload');
  });

  it('handles undefined value', () => {
    render(<Progress aria-label="Progress" />);
    const progress = screen.getByRole('progressbar');

    // Should not have aria-valuenow when value is undefined
    expect(progress).not.toHaveAttribute('aria-valuenow');
  });
});
