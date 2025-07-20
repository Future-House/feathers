import { render, screen } from '@testing-library/react';
import { CircularProgress } from './circular-progress';

describe('CircularProgress', () => {
  it('renders with default props', () => {
    render(<CircularProgress />);

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toBeInTheDocument();
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
    expect(progressbar).toHaveAttribute('aria-valuenow', '0');
  });

  it('renders with specific value', () => {
    render(<CircularProgress value={75} />);

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '75');
  });

  it('renders indeterminate progress', () => {
    render(<CircularProgress indeterminate />);

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).not.toHaveAttribute('aria-valuenow');
  });

  it('clamps value between 0 and 100', () => {
    const { rerender } = render(<CircularProgress value={-10} />);
    let progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '0');

    rerender(<CircularProgress value={150} />);
    progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '100');
  });

  it('applies size variants correctly', () => {
    render(<CircularProgress size="lg" />);

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveClass('size-8');
  });

  it('applies variant classes correctly', () => {
    render(<CircularProgress variant="secondary" />);

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveClass('text-secondary');
  });

  it('applies custom className', () => {
    render(<CircularProgress className="custom-class" />);

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveClass('custom-class');
  });

  it('applies indeterminate animation class', () => {
    render(<CircularProgress indeterminate />);

    const svg = screen.getByRole('progressbar').querySelector('svg');
    const progressCircle = svg?.querySelector('circle:last-child');
    expect(progressCircle).toHaveClass('circular-progress-indeterminate');
  });

  it('calculates stroke dashoffset correctly for determinate progress', () => {
    render(<CircularProgress value={50} />);

    const svg = screen.getByRole('progressbar').querySelector('svg');
    const progressCircle = svg?.querySelector(
      'circle:last-child'
    ) as SVGCircleElement;

    // For 50% progress, stroke-dashoffset should be approximately half of circumference
    // circumference = 2 * π * 16 ≈ 100.53
    // 50% progress = circumference - (50/100 * circumference) = circumference * 0.5
    const expectedOffset = Math.PI * 32 * 0.5; // approximately 50.27
    expect(progressCircle.getAttribute('stroke-dashoffset')).toBe(
      expectedOffset.toString()
    );
  });

  it('forwards additional props to the div element', () => {
    render(<CircularProgress data-testid="progress" />);

    const progressbar = screen.getByTestId('progress');
    expect(progressbar).toBeInTheDocument();
  });

  it('sets data-slot attribute', () => {
    render(<CircularProgress />);

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('data-slot', 'circular-progress');
  });

  it('applies custom thickness to stroke width', () => {
    render(<CircularProgress thickness={5} />);

    const svg = screen.getByRole('progressbar').querySelector('svg');
    const circles = svg?.querySelectorAll('circle');

    circles?.forEach(circle => {
      expect(circle).toHaveAttribute('stroke-width', '5');
    });
  });
});
