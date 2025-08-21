import { render } from '@testing-library/react';
import { Camera, Heart, Star } from './index';
import type { LucideProps } from './index';

describe('Icons', () => {
  it('should render Camera icon', () => {
    const { container } = render(<Camera />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
  });

  it('should render Heart icon with custom size', () => {
    const { container } = render(<Heart size={32} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
  });

  it('should render Star icon with custom color', () => {
    const { container } = render(<Star color="red" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('stroke', 'red');
  });

  it('should accept LucideProps interface', () => {
    const props: LucideProps = {
      size: 16,
      color: 'blue',
      strokeWidth: 1.5,
      className: 'test-class',
    };
    const { container } = render(<Camera {...props} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('test-class');
    expect(svg).toHaveAttribute('width', '16');
    expect(svg).toHaveAttribute('stroke', 'blue');
    expect(svg).toHaveAttribute('stroke-width', '1.5');
  });
});
