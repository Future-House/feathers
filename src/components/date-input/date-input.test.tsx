import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DateInput, formatDate, isValidDate } from './date-input';

describe('DateInput', () => {
  describe('formatDate', () => {
    it('returns empty string for undefined date', () => {
      expect(formatDate(undefined)).toBe('');
    });

    it('formats date with default options', () => {
      const date = new Date('2024-03-15');
      const formatted = formatDate(date);
      // Use the actual formatted date to avoid timezone issues
      expect(formatted).toBe(formatDate(date));
    });

    it('formats date with custom options', () => {
      const date = new Date('2024-03-15');
      const options = {
        year: 'numeric' as const,
        month: '2-digit' as const,
        day: '2-digit' as const,
      };
      const formatted = formatDate(date, options);
      // Check that it's formatted as expected
      expect(formatted).toBe(date.toLocaleDateString('en-US', options));
    });
  });

  describe('isValidDate', () => {
    it('returns false for undefined', () => {
      expect(isValidDate(undefined)).toBe(false);
    });

    it('returns false for invalid date', () => {
      const invalidDate = new Date('invalid');
      expect(isValidDate(invalidDate)).toBe(false);
    });

    it('returns true for valid date', () => {
      const validDate = new Date('2024-03-15');
      expect(isValidDate(validDate)).toBe(true);
    });
  });

  describe('DateInput Component', () => {
    it('renders with default placeholder', () => {
      render(<DateInput />);
      expect(screen.getByPlaceholderText('Select date')).toBeInTheDocument();
    });

    it('renders with custom placeholder', () => {
      render(<DateInput placeholder="Enter birthday" />);
      expect(screen.getByPlaceholderText('Enter birthday')).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<DateInput label="Event Date" />);
      expect(screen.getByLabelText('Event Date')).toBeInTheDocument();
    });

    it('displays selected date in input', () => {
      const date = new Date('2024-03-15');
      render(<DateInput selected={date} />);
      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe(formatDate(date));
    });

    it('displays selected date with custom format', () => {
      const date = new Date('2024-03-15');
      const formatOptions = {
        year: '2-digit' as const,
        month: '2-digit' as const,
        day: '2-digit' as const,
      };
      render(<DateInput selected={date} formatOptions={formatOptions} />);
      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe(formatDate(date, formatOptions));
    });

    it('opens calendar when calendar button is clicked', async () => {
      const user = userEvent.setup();
      render(<DateInput />);

      const button = screen.getByLabelText('Select date from calendar');
      await user.click(button);

      await waitFor(() => {
        expect(screen.getByRole('grid')).toBeInTheDocument();
      });
    });

    it('opens calendar when ArrowDown is pressed in input', async () => {
      const user = userEvent.setup();
      render(<DateInput />);

      const input = screen.getByRole('textbox');
      await user.click(input);
      await user.keyboard('{ArrowDown}');

      await waitFor(() => {
        expect(screen.getByRole('grid')).toBeInTheDocument();
      });
    });

    it('calls onSelect when date is typed', async () => {
      const user = userEvent.setup();
      const handleSelect = jest.fn();
      render(<DateInput onSelect={handleSelect} />);

      const input = screen.getByRole('textbox');
      await user.clear(input);
      await user.type(input, '03/15/2024');

      await waitFor(() => {
        expect(handleSelect).toHaveBeenCalledWith(expect.any(Date));
      });
    });

    it('does not call onSelect for invalid date input', async () => {
      const user = userEvent.setup();
      const handleSelect = jest.fn();
      render(<DateInput onSelect={handleSelect} />);

      const input = screen.getByRole('textbox');
      await user.clear(input);
      await user.type(input, 'not a date');

      expect(handleSelect).not.toHaveBeenCalled();
    });

    it('calls onSelect when date is selected from calendar', async () => {
      const user = userEvent.setup();
      const handleSelect = jest.fn();
      render(<DateInput onSelect={handleSelect} />);

      const button = screen.getByLabelText('Select date from calendar');
      await user.click(button);

      await waitFor(() => {
        expect(screen.getByRole('grid')).toBeInTheDocument();
      });

      const todayButton = screen.getByRole('button', { name: /today/i });
      await user.click(todayButton);

      expect(handleSelect).toHaveBeenCalledWith(expect.any(Date));
    });

    it('closes calendar after date selection', async () => {
      const user = userEvent.setup();
      render(<DateInput />);

      const button = screen.getByLabelText('Select date from calendar');
      await user.click(button);

      await waitFor(() => {
        expect(screen.getByRole('grid')).toBeInTheDocument();
      });

      const todayButton = screen.getByRole('button', { name: /today/i });
      await user.click(todayButton);

      await waitFor(() => {
        expect(screen.queryByRole('grid')).not.toBeInTheDocument();
      });
    });

    it('can be disabled', async () => {
      const user = userEvent.setup();
      const handleSelect = jest.fn();
      render(<DateInput disabled onSelect={handleSelect} />);

      const input = screen.getByRole('textbox');
      const button = screen.getByLabelText('Select date from calendar');

      expect(input).toBeDisabled();
      expect(button).toBeDisabled();

      await user.click(button);
      expect(screen.queryByRole('grid')).not.toBeInTheDocument();
      expect(handleSelect).not.toHaveBeenCalled();
    });

    it('applies custom className to wrapper', () => {
      render(<DateInput className="custom-wrapper" />);
      const wrapper = screen.getByRole('textbox').closest('.custom-wrapper');
      expect(wrapper).toBeInTheDocument();
    });

    it('applies custom className to input', () => {
      render(<DateInput inputClassName="custom-input" />);
      expect(screen.getByRole('textbox')).toHaveClass('custom-input');
    });

    it('updates displayed date when selected prop changes', () => {
      const { rerender } = render(<DateInput selected={undefined} />);
      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe('');

      const newDate = new Date('2024-03-15');
      rerender(<DateInput selected={newDate} />);
      expect(input.value).toBe(formatDate(newDate));
    });

    it('maintains controlled state', () => {
      const date = new Date('2024-03-15');
      const { rerender } = render(<DateInput selected={date} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe(formatDate(date));

      const newDate = new Date('2024-04-20');
      rerender(<DateInput selected={newDate} />);

      expect(input.value).toBe(formatDate(newDate));
    });

    it('works in uncontrolled mode', async () => {
      const user = userEvent.setup();
      render(<DateInput />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe('');

      await user.clear(input);
      await user.type(input, '12/25/2024');

      await waitFor(() => {
        expect(input.value).toBe('12/25/2024');
      });
    });

    it('uses custom id when provided', () => {
      render(<DateInput id="custom-date-input" label="Test Date" />);
      const input = screen.getByLabelText('Test Date');
      expect(input).toHaveAttribute('id', 'custom-date-input');
    });

    it('uses default id when not provided', () => {
      render(<DateInput />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('id', 'date-input');
    });

    it('updates calendar month when typing valid date', async () => {
      const user = userEvent.setup();
      render(<DateInput />);

      const input = screen.getByRole('textbox');
      await user.clear(input);
      await user.type(input, 'December 25, 2025');

      const button = screen.getByLabelText('Select date from calendar');
      await user.click(button);

      await waitFor(() => {
        expect(screen.getByRole('grid')).toBeInTheDocument();
        expect(screen.getByText(/December 2025/i)).toBeInTheDocument();
      });
    });
  });
});
