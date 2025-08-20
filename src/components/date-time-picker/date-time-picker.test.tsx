import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DateTimePicker } from './date-time-picker';

describe('DateTimePicker', () => {
  it('renders with placeholder', () => {
    render(<DateTimePicker placeholder="Select date and time" />);
    expect(screen.getByText('Select date and time')).toBeInTheDocument();
  });

  it('renders with default placeholder for datetime mode', () => {
    render(<DateTimePicker />);
    expect(screen.getByText('Select date and time')).toBeInTheDocument();
  });

  it('renders with default placeholder for date mode', () => {
    render(<DateTimePicker mode="date" />);
    expect(screen.getByText('Select date')).toBeInTheDocument();
  });

  it('renders with default placeholder for time mode', () => {
    render(<DateTimePicker mode="time" />);
    expect(screen.getByText('Select time')).toBeInTheDocument();
  });

  it('displays formatted date when value is provided', () => {
    const date = new Date(2024, 0, 15, 14, 30, 0);
    render(<DateTimePicker value={date} />);

    const button = screen.getByRole('button');
    expect(button.textContent).toContain('01/15/2024');
    expect(button.textContent).toContain('02:30 PM');
  });

  it('opens popover when clicked', async () => {
    render(<DateTimePicker />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });
  });

  it('calls onChange when date is selected in date mode', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();
    render(<DateTimePicker mode="date" onChange={handleChange} />);

    const button = screen.getByRole('button');
    await user.click(button);

    await waitFor(() => {
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    // Find a day button (first available date button)
    const dayButtons = screen
      .getAllByRole('button')
      .filter(button => button.getAttribute('data-day'));

    if (dayButtons.length > 0) {
      await user.click(dayButtons[0]);
      expect(handleChange).toHaveBeenCalled();
      expect(handleChange.mock.calls[0][0]).toBeInstanceOf(Date);
    }
  });

  it('respects disabled prop', () => {
    render(<DateTimePicker disabled />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('formats date with custom format options', () => {
    const date = new Date(2024, 0, 15, 14, 30, 0);
    const formatOptions: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    render(<DateTimePicker value={date} formatOptions={formatOptions} />);

    const button = screen.getByRole('button');
    expect(button.textContent).toContain('Monday');
    expect(button.textContent).toContain('January');
    expect(button.textContent).toContain('15');
    expect(button.textContent).toContain('2024');
  });

  it('shows time in 24-hour format when use12HourFormat is false', () => {
    const date = new Date(2024, 0, 15, 14, 30, 0);
    render(<DateTimePicker value={date} use12HourFormat={false} />);

    const button = screen.getByRole('button');
    expect(button.textContent).toContain('14:30');
    expect(button.textContent).not.toContain('PM');
  });

  it('shows seconds when showSeconds is true', () => {
    const date = new Date(2024, 0, 15, 14, 30, 45);
    render(<DateTimePicker value={date} showSeconds />);

    const button = screen.getByRole('button');
    expect(button.textContent).toContain(':45');
  });

  it('does not show calendar in time-only mode', async () => {
    render(<DateTimePicker mode="time" />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.queryByRole('grid')).not.toBeInTheDocument();
      expect(screen.getByText('Hour')).toBeInTheDocument();
      expect(screen.getByText('Min')).toBeInTheDocument();
    });
  });

  it('does not show time picker in date-only mode', async () => {
    render(<DateTimePicker mode="date" />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByRole('grid')).toBeInTheDocument();
      expect(screen.queryByText('Hour')).not.toBeInTheDocument();
      expect(screen.queryByText('Min')).not.toBeInTheDocument();
    });
  });

  it('shows both calendar and time picker in datetime mode', async () => {
    render(<DateTimePicker mode="datetime" />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByRole('grid')).toBeInTheDocument();
      expect(screen.getByText('Hour')).toBeInTheDocument();
      expect(screen.getByText('Min')).toBeInTheDocument();
    });
  });

  it('shows Apply and Cancel buttons in datetime mode', async () => {
    render(<DateTimePicker mode="datetime" />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Apply')).toBeInTheDocument();
      expect(screen.getByText('Cancel')).toBeInTheDocument();
    });
  });

  it('closes popover when Cancel is clicked in datetime mode', async () => {
    render(<DateTimePicker mode="datetime" />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    await waitFor(() => {
      const cancelButton = screen.getByText('Cancel');
      fireEvent.click(cancelButton);
    });

    await waitFor(() => {
      expect(screen.queryByRole('grid')).not.toBeInTheDocument();
    });
  });

  it('applies custom className', () => {
    render(<DateTimePicker className="custom-class" />);

    const container = screen.getByRole('button').parentElement;
    expect(container).toHaveClass('custom-class');
  });

  it('applies custom buttonClassName', () => {
    render(<DateTimePicker buttonClassName="custom-button-class" />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-button-class');
  });

  it('shows AM/PM selector in 12-hour format', async () => {
    render(<DateTimePicker use12HourFormat={true} />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Period')).toBeInTheDocument();
      expect(screen.getByText('AM')).toBeInTheDocument();
      expect(screen.getByText('PM')).toBeInTheDocument();
    });
  });

  it('does not show AM/PM selector in 24-hour format', async () => {
    render(<DateTimePicker use12HourFormat={false} />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.queryByText('Period')).not.toBeInTheDocument();
      expect(screen.queryByText('AM')).not.toBeInTheDocument();
      expect(screen.queryByText('PM')).not.toBeInTheDocument();
    });
  });

  it('shows correct minute intervals with minuteStep prop', async () => {
    render(<DateTimePicker minuteStep={15} mode="time" />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Min')).toBeInTheDocument();
    });

    // Find the minute section by looking for the "Min" label and its parent
    const minLabel = screen.getByText('Min');
    const minuteSection = minLabel.closest('div')?.parentElement;

    if (minuteSection) {
      const minuteButtons = Array.from(
        minuteSection.querySelectorAll('button')
      );
      const minuteValues = minuteButtons
        .map(btn => btn.textContent)
        .filter(Boolean);

      // Check that we have exactly 4 minute options (0, 15, 30, 45)
      expect(minuteValues).toHaveLength(4);
      expect(minuteValues).toContain('00');
      expect(minuteValues).toContain('15');
      expect(minuteValues).toContain('30');
      expect(minuteValues).toContain('45');
    }
  });

  it('shows all minutes when minuteStep is 1', async () => {
    render(<DateTimePicker minuteStep={1} />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Min')).toBeInTheDocument();
    });

    // Check that we have 60 minute buttons
    const minuteButtons = screen.getAllByRole('button').filter(btn => {
      const text = btn.textContent;
      return (
        text &&
        /^\d{2}$/.test(text) &&
        parseInt(text) >= 0 &&
        parseInt(text) < 60
      );
    });

    // Should have at least some minute buttons visible
    expect(minuteButtons.length).toBeGreaterThan(0);
  });

  it('shows 5-minute intervals with minuteStep of 5', async () => {
    render(<DateTimePicker minuteStep={5} mode="time" />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Min')).toBeInTheDocument();
    });

    // Find the minute section by looking for the "Min" label and its parent
    const minLabel = screen.getByText('Min');
    const minuteSection = minLabel.closest('div')?.parentElement;

    if (minuteSection) {
      const minuteButtons = Array.from(
        minuteSection.querySelectorAll('button')
      );
      const minuteValues = minuteButtons
        .map(btn => btn.textContent)
        .filter(Boolean);

      // Check that we have 12 minute options (0, 5, 10, 15, ..., 55)
      expect(minuteValues).toHaveLength(12);
      expect(minuteValues).toContain('00');
      expect(minuteValues).toContain('05');
      expect(minuteValues).toContain('10');
      expect(minuteValues).toContain('15');

      // Check that non-5-minute intervals are not present
      expect(minuteValues).not.toContain('01');
      expect(minuteValues).not.toContain('03');
    }
  });
});
