import React from 'react';
import { render, screen } from '@testing-library/react';
import { Slider } from './slider';

describe('Slider', () => {
  it('renders correctly', () => {
    render(<Slider defaultValue={[50]} data-testid="slider" />);
    expect(screen.getByTestId('slider')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    render(<Slider defaultValue={[50]} data-testid="slider" />);
    const slider = screen.getByTestId('slider');

    expect(slider).toHaveAttribute('data-slot', 'slider');
  });

  it('applies default CSS classes', () => {
    render(<Slider defaultValue={[50]} data-testid="slider" />);
    const slider = screen.getByTestId('slider');

    expect(slider).toHaveClass(
      'relative',
      'flex',
      'w-full',
      'touch-none',
      'items-center',
      'select-none'
    );
  });

  it('applies custom className', () => {
    render(
      <Slider
        defaultValue={[50]}
        className="custom-class"
        data-testid="slider"
      />
    );
    const slider = screen.getByTestId('slider');
    expect(slider).toHaveClass('custom-class');
  });

  it('renders with single value', () => {
    render(<Slider defaultValue={[50]} data-testid="slider" />);
    const slider = screen.getByTestId('slider');
    const thumbs = slider.querySelectorAll('[data-slot="slider-thumb"]');

    expect(thumbs).toHaveLength(1);
  });

  it('renders with multiple values (range)', () => {
    render(<Slider defaultValue={[25, 75]} data-testid="slider" />);
    const slider = screen.getByTestId('slider');
    const thumbs = slider.querySelectorAll('[data-slot="slider-thumb"]');

    expect(thumbs).toHaveLength(2);
  });

  it('can be disabled', () => {
    render(<Slider defaultValue={[50]} disabled data-testid="slider" />);
    const slider = screen.getByTestId('slider');

    expect(slider).toHaveAttribute('data-disabled');
  });

  it('supports vertical orientation', () => {
    render(
      <Slider defaultValue={[50]} orientation="vertical" data-testid="slider" />
    );
    const slider = screen.getByTestId('slider');

    expect(slider).toHaveAttribute('data-orientation', 'vertical');
  });

  it('applies vertical orientation classes', () => {
    render(
      <Slider defaultValue={[50]} orientation="vertical" data-testid="slider" />
    );
    const slider = screen.getByTestId('slider');

    expect(slider).toHaveClass('data-[orientation=vertical]:h-full');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Slider ref={ref} defaultValue={[50]} data-testid="slider" />);

    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    expect(ref.current).toBe(screen.getByTestId('slider'));
  });

  it('renders track and range elements', () => {
    render(<Slider defaultValue={[50]} data-testid="slider" />);

    const track = screen
      .getByTestId('slider')
      .querySelector('[data-slot="slider-track"]');
    const range = screen
      .getByTestId('slider')
      .querySelector('[data-slot="slider-range"]');

    expect(track).toBeInTheDocument();
    expect(range).toBeInTheDocument();
  });

  it('passes through additional props', () => {
    render(
      <Slider defaultValue={[50]} data-testid="slider" id="test-slider" />
    );
    const slider = screen.getByTestId('slider');

    expect(slider).toHaveAttribute('id', 'test-slider');
  });

  it('handles controlled vs uncontrolled values', () => {
    const { rerender } = render(
      <Slider defaultValue={[30]} data-testid="slider" />
    );

    // Test uncontrolled
    let slider = screen.getByTestId('slider');
    expect(slider).toBeInTheDocument();

    // Test controlled
    rerender(<Slider value={[60]} data-testid="slider" />);

    slider = screen.getByTestId('slider');
    expect(slider).toBeInTheDocument();
  });

  it('renders correct number of thumbs based on values', () => {
    const { rerender } = render(
      <Slider defaultValue={[50]} data-testid="slider" />
    );

    let slider = screen.getByTestId('slider');
    let thumbs = slider.querySelectorAll('[data-slot="slider-thumb"]');
    expect(thumbs).toHaveLength(1);

    rerender(<Slider defaultValue={[25, 50, 75]} data-testid="slider" />);

    slider = screen.getByTestId('slider');
    thumbs = slider.querySelectorAll('[data-slot="slider-thumb"]');
    expect(thumbs).toHaveLength(3);
  });

  it('applies thumb styles correctly', () => {
    render(<Slider defaultValue={[50]} data-testid="slider" />);

    const thumb = screen
      .getByTestId('slider')
      .querySelector('[data-slot="slider-thumb"]');
    expect(thumb).toHaveClass(
      'border-primary',
      'bg-background',
      'size-4',
      'rounded-full'
    );
  });
});
