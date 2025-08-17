import { render, screen, fireEvent } from '@testing-library/react';
import { TimePicker } from './time-picker';

describe('TimePicker', () => {
  it('renders without crashing', () => {
    render(<TimePicker />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'time');
  });

  it('applies default value', () => {
    render(<TimePicker defaultValue="14:30" />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('14:30');
  });

  it('handles controlled value', () => {
    const { rerender } = render(
      <TimePicker value="10:00" onChange={() => {}} />
    );
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('10:00');

    rerender(<TimePicker value="15:30" onChange={() => {}} />);
    expect(input.value).toBe('15:30');
  });

  it('calls onChange when value changes', () => {
    const handleChange = jest.fn();
    render(<TimePicker onChange={handleChange} />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: '16:45' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: '16:45' }),
      })
    );
  });

  it('shows seconds when showSeconds is true', () => {
    render(<TimePicker showSeconds />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('step', '1');
  });

  it('hides seconds when showSeconds is false', () => {
    render(<TimePicker showSeconds={false} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('step', '60');
  });

  it('applies disabled state', () => {
    render(<TimePicker disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('applies error state through className', () => {
    render(<TimePicker error />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('applies custom className', () => {
    render(<TimePicker className="custom-class" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-class');
  });

  it('forwards other HTML input attributes', () => {
    render(
      <TimePicker
        id="test-time"
        name="time-input"
        required
        min="09:00"
        max="17:00"
      />
    );
    const input = screen.getByRole('textbox');
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
    render(<TimePicker showSeconds defaultValue="14:30:45" />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('14:30:45');
  });

  it('maintains focus on input when clicked', () => {
    render(<TimePicker />);
    const input = screen.getByRole('textbox');

    input.focus();
    expect(document.activeElement).toBe(input);
  });
});
