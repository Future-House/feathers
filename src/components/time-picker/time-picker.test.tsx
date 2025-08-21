import { render, fireEvent } from '@testing-library/react';
import { TimePicker } from './time-picker';

describe('TimePicker', () => {
  it('renders without crashing', () => {
    const { container } = render(<TimePicker />);
    const input = container.querySelector('input[type="time"]');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'time');
  });

  it('applies default value', () => {
    const { container } = render(<TimePicker defaultValue="14:30" />);
    const input = container.querySelector(
      'input[type="time"]'
    ) as HTMLInputElement;
    expect(input.value).toBe('14:30');
  });

  it('handles controlled value', () => {
    const { rerender, container } = render(
      <TimePicker value="10:00" onChange={() => {}} />
    );
    const input = container.querySelector(
      'input[type="time"]'
    ) as HTMLInputElement;
    expect(input.value).toBe('10:00');

    rerender(<TimePicker value="15:30" onChange={() => {}} />);
    expect(input.value).toBe('15:30');
  });

  it('calls onChange when value changes', () => {
    const handleChange = jest.fn();
    const { container } = render(<TimePicker onChange={handleChange} />);
    const input = container.querySelector(
      'input[type="time"]'
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: '16:45' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: '16:45' }),
      })
    );
  });

  it('shows seconds when showSeconds is true', () => {
    const { container } = render(<TimePicker showSeconds />);
    const input = container.querySelector('input[type="time"]');
    expect(input).toHaveAttribute('step', '1');
  });

  it('hides seconds when showSeconds is false', () => {
    const { container } = render(<TimePicker showSeconds={false} />);
    const input = container.querySelector('input[type="time"]');
    expect(input).toHaveAttribute('step', '60');
  });

  it('applies disabled state', () => {
    const { container } = render(<TimePicker disabled />);
    const input = container.querySelector('input[type="time"]');
    expect(input).toBeDisabled();
  });

  it('applies error state through className', () => {
    const { container } = render(<TimePicker error />);
    const input = container.querySelector('input[type="time"]');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('applies custom className', () => {
    const { container } = render(<TimePicker className="custom-class" />);
    const input = container.querySelector('input[type="time"]');
    expect(input).toHaveClass('custom-class');
  });

  it('forwards other HTML input attributes', () => {
    const { container } = render(
      <TimePicker
        id="test-time"
        name="time-input"
        required
        min="09:00"
        max="17:00"
      />
    );
    const input = container.querySelector('input[type="time"]');
    expect(input).toHaveAttribute('id', 'test-time');
    expect(input).toHaveAttribute('name', 'time-input');
    expect(input).toHaveAttribute('required');
    expect(input).toHaveAttribute('min', '09:00');
    expect(input).toHaveAttribute('max', '17:00');
  });

  it('renders clock icon', () => {
    const { container } = render(<TimePicker />);
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('pointer-events-none');
  });

  it('handles time with seconds format', () => {
    const { container } = render(
      <TimePicker showSeconds defaultValue="14:30:45" />
    );
    const input = container.querySelector(
      'input[type="time"]'
    ) as HTMLInputElement;
    expect(input.value).toBe('14:30:45');
  });

  it('maintains focus on input when clicked', () => {
    const { container } = render(<TimePicker />);
    const input = container.querySelector(
      'input[type="time"]'
    ) as HTMLInputElement;

    input.focus();
    expect(document.activeElement).toBe(input);
  });
});
