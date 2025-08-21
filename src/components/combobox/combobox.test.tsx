import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Combobox, type ComboboxOption } from './combobox';

// Mock scrollIntoView which is not implemented in JSDOM
Object.defineProperty(Element.prototype, 'scrollIntoView', {
  value: jest.fn(),
  writable: true,
});

const mockOptions: ComboboxOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'disabled-option', label: 'Disabled Option', disabled: true },
];

describe('Combobox', () => {
  it('renders with default placeholder', () => {
    render(<Combobox options={mockOptions} />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('Select option...')).toBeInTheDocument();
  });

  it('renders with custom placeholder', () => {
    render(
      <Combobox options={mockOptions} placeholder="Choose an option..." />
    );

    expect(screen.getByText('Choose an option...')).toBeInTheDocument();
  });

  it('opens popover when clicked', async () => {
    const user = userEvent.setup();
    render(<Combobox options={mockOptions} />);

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });
  });

  it('displays all options when opened', async () => {
    const user = userEvent.setup();
    render(<Combobox options={mockOptions} />);

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
      expect(screen.getByText('Option 3')).toBeInTheDocument();
      expect(screen.getByText('Disabled Option')).toBeInTheDocument();
    });
  });

  it('filters options based on search input', async () => {
    const user = userEvent.setup();
    render(<Combobox options={mockOptions} />);

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    const searchInput = await screen.findByPlaceholderText('Search...');
    await user.type(searchInput, '1');

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
      expect(screen.queryByText('Option 3')).not.toBeInTheDocument();
    });
  });

  it('shows empty message when no options match search', async () => {
    const user = userEvent.setup();
    render(<Combobox options={mockOptions} emptyMessage="No matches found" />);

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    const searchInput = await screen.findByPlaceholderText('Search...');
    await user.type(searchInput, 'nonexistent');

    await waitFor(() => {
      expect(screen.getByText('No matches found')).toBeInTheDocument();
    });
  });

  it('selects option when clicked', async () => {
    const user = userEvent.setup();
    render(<Combobox options={mockOptions} />);

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    const option1 = await screen.findByText('Option 1');
    await user.click(option1);

    await waitFor(() => {
      expect(screen.getByRole('combobox')).toHaveTextContent('Option 1');
    });
  });

  it('calls onValueChange when option is selected', async () => {
    const onValueChange = jest.fn();
    const user = userEvent.setup();
    render(<Combobox options={mockOptions} onValueChange={onValueChange} />);

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    const option1 = await screen.findByText('Option 1');
    await user.click(option1);

    expect(onValueChange).toHaveBeenCalledWith('option1');
  });

  it('toggles selection when same option is clicked', async () => {
    const onValueChange = jest.fn();
    const user = userEvent.setup();
    render(
      <Combobox
        options={mockOptions}
        value="option1"
        onValueChange={onValueChange}
      />
    );

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    const options = await screen.findAllByText('Option 1');
    // Click on the option in the popover (not the trigger)
    await user.click(options[1]);

    expect(onValueChange).toHaveBeenCalledWith('');
  });

  it('works as controlled component', () => {
    render(<Combobox options={mockOptions} value="option2" />);

    expect(screen.getByRole('combobox')).toHaveTextContent('Option 2');
  });

  it('works as uncontrolled component', async () => {
    const user = userEvent.setup();
    render(<Combobox options={mockOptions} />);

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    const option2 = await screen.findByText('Option 2');
    await user.click(option2);

    await waitFor(() => {
      expect(screen.getByRole('combobox')).toHaveTextContent('Option 2');
    });
  });

  it('handles disabled state', () => {
    render(<Combobox options={mockOptions} disabled />);

    const trigger = screen.getByRole('combobox');
    expect(trigger).toBeDisabled();
  });

  it('does not select disabled options', async () => {
    const onValueChange = jest.fn();
    const user = userEvent.setup();
    render(<Combobox options={mockOptions} onValueChange={onValueChange} />);

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    const disabledOption = await screen.findByText('Disabled Option');
    await user.click(disabledOption);

    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('applies custom width class', () => {
    render(<Combobox options={mockOptions} width="w-[300px]" />);

    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveClass('w-[300px]');
  });

  it('applies custom className', () => {
    render(<Combobox options={mockOptions} className="custom-class" />);

    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveClass('custom-class');
  });

  it('shows check icon for selected option', async () => {
    const user = userEvent.setup();
    render(<Combobox options={mockOptions} value="option1" />);

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    // Find the option that contains the check icon (opacity-100)
    await waitFor(() => {
      const options = screen.getAllByText('Option 1');
      const option1InPopover = options.find(option =>
        option.closest('[cmdk-item]')
      );
      const checkIcon = option1InPopover
        ?.closest('[cmdk-item]')
        ?.querySelector('svg');
      expect(checkIcon).toHaveClass('opacity-100');
    });
  });

  it('hides check icon for unselected options', async () => {
    const user = userEvent.setup();
    render(<Combobox options={mockOptions} value="option1" />);

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    // Find the option that contains the check icon (opacity-0)
    await waitFor(() => {
      const option2Container = screen
        .getByText('Option 2')
        .closest('[cmdk-item]');
      const checkIcon = option2Container?.querySelector('svg');
      expect(checkIcon).toHaveClass('opacity-0');
    });
  });

  it('closes popover after option selection', async () => {
    const user = userEvent.setup();
    render(<Combobox options={mockOptions} />);

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    const option1 = await screen.findByText('Option 1');
    await user.click(option1);

    await waitFor(() => {
      expect(
        screen.queryByPlaceholderText('Search...')
      ).not.toBeInTheDocument();
    });
  });

  it('uses custom search placeholder', async () => {
    const user = userEvent.setup();
    render(
      <Combobox options={mockOptions} searchPlaceholder="Type to search..." />
    );

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    await waitFor(() => {
      expect(
        screen.getByPlaceholderText('Type to search...')
      ).toBeInTheDocument();
    });
  });

  it('supports keyboard navigation', async () => {
    const onValueChange = jest.fn();
    const user = userEvent.setup();
    render(<Combobox options={mockOptions} onValueChange={onValueChange} />);

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    // Wait for the popover to open
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    // Test arrow down navigation and enter
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Enter}');

    // Verify the callback was called (keyboard navigation functionality)
    expect(onValueChange).toHaveBeenCalled();
  });

  it('maintains accessibility attributes', async () => {
    const user = userEvent.setup();
    render(<Combobox options={mockOptions} />);

    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveAttribute('role', 'combobox');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await user.click(trigger);

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });
  });

  it('handles empty options array', () => {
    render(<Combobox options={[]} />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('Select option...')).toBeInTheDocument();
  });

  it('handles options with same labels but different values', async () => {
    const duplicateLabelOptions: ComboboxOption[] = [
      { value: 'item1', label: 'Same Label' },
      { value: 'item2', label: 'Same Label' },
    ];

    const onValueChange = jest.fn();
    const user = userEvent.setup();
    render(
      <Combobox options={duplicateLabelOptions} onValueChange={onValueChange} />
    );

    const trigger = screen.getByRole('combobox');
    await user.click(trigger);

    const options = await screen.findAllByText('Same Label');
    await user.click(options[0]);

    expect(onValueChange).toHaveBeenCalledWith('item1');
  });
});
