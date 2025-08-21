import { render, screen } from '@testing-library/react';
import { CircularProgress } from './circular-progress';

describe('CircularProgress', () => {
  it('renders with default props (indeterminate)', () => {
    render(<CircularProgress />);

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toBeInTheDocument();
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
    expect(progressbar).not.toHaveAttribute('aria-valuenow');

    const svg = progressbar.querySelector('svg');
    const progressCircle = svg?.querySelector('circle:last-child');
    expect(progressCircle).toHaveClass('circular-progress-indeterminate');
  });

  it('renders with specific value in determinate mode', () => {
    render(<CircularProgress determinate={true} value={75} />);

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '75');
  });

  it('clamps value between 0 and 100', () => {
    const { rerender } = render(
      <CircularProgress determinate={true} value={-10} />
    );
    let progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '0');

    rerender(<CircularProgress determinate={true} value={150} />);
    progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '100');
  });

  it('applies size variants correctly', () => {
    render(<CircularProgress size="lg" />);

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveStyle({ width: '64px', height: '64px' });
  });

  it('applies default color class correctly', () => {
    render(<CircularProgress />);

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveClass('text-primary');
  });

  it('applies custom className', () => {
    render(<CircularProgress className="custom-class" />);

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveClass('custom-class');
  });

  it('calculates stroke dashoffset correctly for determinate progress', () => {
    render(<CircularProgress determinate={true} value={50} />);

    const svg = screen.getByRole('progressbar').querySelector('svg');
    const progressCircle = svg?.querySelector(
      'circle:last-child'
    ) as SVGCircleElement;

    // For 50% progress with calculation
    // pixelSize = 40 (md), thickness = 6 (fixed), radius = (40 - 6) / 2 = 17
    // circumference = 2 * π * 17 ≈ 106.81
    // strokeDashoffset = circumference - (50/100 * circumference) = circumference * 0.5
    const radius = (40 - 6) / 2; // 17
    const circumference = 2 * Math.PI * radius;
    const expectedOffset = circumference - (50 / 100) * circumference;
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

  it('renders children when provided', () => {
    render(
      <CircularProgress determinate={true} value={75}>
        <span data-testid="child-content">75%</span>
      </CircularProgress>
    );

    const childContent = screen.getByTestId('child-content');
    expect(childContent).toBeInTheDocument();
    expect(childContent).toHaveTextContent('75%');
  });

  it('does not render children container when no children provided', () => {
    render(<CircularProgress determinate={true} value={75} />);

    const progressbar = screen.getByRole('progressbar');
    const childContainer = progressbar.querySelector('div[class*="absolute"]');
    expect(childContainer).not.toBeInTheDocument();
  });

  it('centers children content properly', () => {
    render(
      <CircularProgress determinate={true} value={50}>
        <span data-testid="centered-content">50%</span>
      </CircularProgress>
    );

    const progressbar = screen.getByRole('progressbar');
    const childContainer = progressbar.querySelector('div[class*="absolute"]');
    expect(childContainer).toHaveClass(
      'flex',
      'items-center',
      'justify-center'
    );
  });

  it('handles determinate mode correctly', () => {
    render(<CircularProgress determinate={true} value={75} />);
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '75');
  });

  it('handles indeterminate mode correctly', () => {
    render(<CircularProgress determinate={false} />);
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).not.toHaveAttribute('aria-valuenow');

    const svg = progressbar.querySelector('svg');
    const progressCircle = svg?.querySelector('circle:last-child');
    expect(progressCircle).toHaveClass('circular-progress-indeterminate');
  });

  it('uses fixed stroke width of 6px', () => {
    render(<CircularProgress determinate={true} value={50} />);
    const svg = screen.getByRole('progressbar').querySelector('svg');
    const circles = svg?.querySelectorAll('circle');
    circles?.forEach(circle => {
      expect(circle).toHaveAttribute('stroke-width', '6');
    });
  });

  it('applies fixed background opacity', () => {
    render(<CircularProgress />);
    const svg = screen.getByRole('progressbar').querySelector('svg');
    const backgroundCircle = svg?.querySelector('circle:first-child');
    expect(backgroundCircle).toHaveClass('opacity-20');
  });
});
