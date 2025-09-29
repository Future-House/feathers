import { render } from '@testing-library/react';
import { Camera, Favorite as Heart, Star } from './index';
import type { CarbonIconProps as CarbonProps } from './index';

describe('Icons', () => {
  it('should render Camera icon', () => {
    const { container } = render(<Camera />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '16');
    expect(svg).toHaveAttribute('height', '16');
  });

  it('should render Heart icon with custom size', () => {
    const { container } = render(<Heart size={32} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
  });

  it('should render Star icon with className', () => {
    const { container } = render(<Star className="text-red-500" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('text-red-500');
  });

  it('should accept CarbonIconProps interface', () => {
    const props: CarbonProps = {
      size: 24,
      className: 'test-class',
    };
    const { container } = render(<Camera {...props} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('test-class');
    expect(svg).toHaveAttribute('width', '24');
  });
});
