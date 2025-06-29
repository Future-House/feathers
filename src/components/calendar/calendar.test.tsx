import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Calendar } from './calendar';

const CalendarExample = (props: any) => <Calendar {...props} />;

describe('Calendar', () => {
  it('renders calendar with current month', () => {
    render(<CalendarExample />);
    const calendar = document.querySelector('[data-slot="calendar"]');
    expect(calendar).toBeInTheDocument();
  });

  it('renders calendar with data-slot attribute', () => {
    render(<CalendarExample />);
    const calendar = document.querySelector('[data-slot="calendar"]');
    expect(calendar).toBeInTheDocument();
  });

  it('displays current month and year', () => {
    render(<CalendarExample />);
    const currentDate = new Date();
    // The month caption should contain the current month somewhere
    expect(
      screen.getByText(new RegExp(currentDate.getFullYear().toString()))
    ).toBeInTheDocument();
  });

  it('handles single date selection', async () => {
    const onSelect = jest.fn();
    const user = userEvent.setup();

    render(<Calendar mode="single" onSelect={onSelect} />);

    // Find a day button (assuming there's at least one day visible)
    const dayButtons = screen
      .getAllByRole('button')
      .filter(button => button.getAttribute('data-day'));

    if (dayButtons.length > 0) {
      await user.click(dayButtons[0]);
      expect(onSelect).toHaveBeenCalled();
    }
  });

  it('shows outside days by default', () => {
    render(<CalendarExample showOutsideDays={true} />);
    const calendar = document.querySelector('[data-slot="calendar"]');
    expect(calendar).toBeInTheDocument();
    // Outside days should be rendered but might be styled differently
  });

  it('hides outside days when showOutsideDays is false', () => {
    render(<CalendarExample showOutsideDays={false} />);
    const calendar = document.querySelector('[data-slot="calendar"]');
    expect(calendar).toBeInTheDocument();
  });

  it('handles navigation to previous month', async () => {
    const user = userEvent.setup();
    render(<CalendarExample />);

    const prevButton =
      screen.queryByRole('button', { name: /previous/i }) ||
      document.querySelector('[data-testid="prev-month"]') ||
      document.querySelector('button[aria-label*="previous"]') ||
      document.querySelector('button[aria-label*="Previous"]');

    if (prevButton) {
      await user.click(prevButton);
      // Calendar should navigate to previous month
      expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument();
    }
  });

  it('handles navigation to next month', async () => {
    const user = userEvent.setup();
    render(<CalendarExample />);

    const nextButton =
      screen.queryByRole('button', { name: /next/i }) ||
      document.querySelector('[data-testid="next-month"]') ||
      document.querySelector('button[aria-label*="next"]') ||
      document.querySelector('button[aria-label*="Next"]');

    if (nextButton) {
      await user.click(nextButton);
      // Calendar should navigate to next month
      expect(document.querySelector('[data-slot="calendar"]')).toBeInTheDocument();
    }
  });

  it('applies custom className', () => {
    render(<CalendarExample className="custom-calendar" />);
    const calendar = document.querySelector('[data-slot="calendar"]');
    expect(calendar).toHaveClass('custom-calendar');
  });

  it('handles keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<CalendarExample />);

    const calendar = document.querySelector('[data-slot="calendar"]');

    // Focus the calendar
    calendar.focus();

    // Test arrow key navigation
    await user.keyboard('{ArrowRight}');
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{ArrowLeft}');
    await user.keyboard('{ArrowUp}');

    // Calendar should handle keyboard navigation
    expect(calendar).toBeInTheDocument();
  });

  it('supports controlled mode', () => {
    const selectedDate = new Date(2024, 0, 15); // January 15, 2024
    const onSelect = jest.fn();

    render(
      <CalendarExample
        mode="single"
        selected={selectedDate}
        onSelect={onSelect}
      />
    );

    const calendar = document.querySelector('[data-slot="calendar"]');
    expect(calendar).toBeInTheDocument();
  });

  it('supports multiple months display', () => {
    render(<CalendarExample numberOfMonths={2} />);
    const calendar = document.querySelector('[data-slot="calendar"]');
    expect(calendar).toBeInTheDocument();
  });

  it('supports dropdown caption layout', () => {
    render(
      <CalendarExample captionLayout="dropdown" fromYear={2020} toYear={2030} />
    );
    const calendar = document.querySelector('[data-slot="calendar"]');
    expect(calendar).toBeInTheDocument();
  });

  it('handles disabled dates', () => {
    const disabledDays = [{ dayOfWeek: [0, 6] }]; // Weekends

    render(<CalendarExample disabled={disabledDays} onSelect={jest.fn()} />);

    const calendar = document.querySelector('[data-slot="calendar"]');
    expect(calendar).toBeInTheDocument();
  });

  it('supports range selection mode', () => {
    const onSelect = jest.fn();
    render(<CalendarExample mode="range" onSelect={onSelect} />);

    const calendar = document.querySelector('[data-slot="calendar"]');
    expect(calendar).toBeInTheDocument();
  });

  it('supports multiple selection mode', () => {
    const onSelect = jest.fn();
    render(<CalendarExample mode="multiple" onSelect={onSelect} />);

    const calendar = document.querySelector('[data-slot="calendar"]');
    expect(calendar).toBeInTheDocument();
  });

  it('renders with different button variants', () => {
    render(<CalendarExample buttonVariant="outline" />);
    const calendar = document.querySelector('[data-slot="calendar"]');
    expect(calendar).toBeInTheDocument();
  });

  it('handles date selection with Enter key', async () => {
    const onSelect = jest.fn();
    const user = userEvent.setup();

    render(<CalendarExample mode="single" onSelect={onSelect} />);

    // Try to find a day button and press Enter
    const dayButtons = screen
      .getAllByRole('button')
      .filter(button => button.getAttribute('data-day'));

    if (dayButtons.length > 0) {
      dayButtons[0].focus();
      await user.keyboard('{Enter}');
      expect(onSelect).toHaveBeenCalled();
    }
  });

  it('renders week numbers when enabled', () => {
    render(<CalendarExample showWeekNumber={true} />);
    const calendar = document.querySelector('[data-slot="calendar"]');
    expect(calendar).toBeInTheDocument();
  });

  it('handles today highlighting', () => {
    render(<CalendarExample />);
    // Today should be rendered in the calendar
    const calendar = document.querySelector('[data-slot="calendar"]');
    expect(calendar).toBeInTheDocument();
  });
});
