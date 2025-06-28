import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './checkbox';

describe('Checkbox', () => {
  it('renders correctly', () => {
    render(<Checkbox aria-label="Test checkbox" />);
    expect(
      screen.getByRole('checkbox', { name: 'Test checkbox' })
    ).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<Checkbox aria-label="Test checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass(
      'peer',
      'border-input',
      'size-4',
      'shrink-0',
      'rounded-[4px]',
      'border',
      'shadow-xs'
    );
  });

  it('starts unchecked by default', () => {
    render(<Checkbox aria-label="Test checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('can be checked by default', () => {
    render(<Checkbox defaultChecked aria-label="Test checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('handles user interactions', async () => {
    render(<Checkbox aria-label="Test checkbox" />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('calls onCheckedChange when state changes', async () => {
    const handleCheckedChange = jest.fn();
    render(
      <Checkbox
        aria-label="Test checkbox"
        onCheckedChange={handleCheckedChange}
      />
    );

    const checkbox = screen.getByRole('checkbox');

    await userEvent.click(checkbox);
    expect(handleCheckedChange).toHaveBeenCalledWith(true);

    await userEvent.click(checkbox);
    expect(handleCheckedChange).toHaveBeenCalledWith(false);
  });

  it('can be controlled', async () => {
    const ControlledCheckbox = () => {
      const [checked, setChecked] = React.useState<boolean | 'indeterminate'>(
        false
      );
      return (
        <Checkbox
          aria-label="Controlled checkbox"
          checked={checked}
          onCheckedChange={setChecked}
        />
      );
    };

    render(<ControlledCheckbox />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('supports indeterminate state', () => {
    render(
      <Checkbox defaultChecked="indeterminate" aria-label="Test checkbox" />
    );
    const checkbox = screen.getByRole('checkbox');

    // Indeterminate checkboxes are neither checked nor unchecked
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
  });

  it('can be disabled', async () => {
    const handleCheckedChange = jest.fn();
    render(
      <Checkbox
        disabled
        aria-label="Disabled checkbox"
        onCheckedChange={handleCheckedChange}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveClass(
      'disabled:cursor-not-allowed',
      'disabled:opacity-50'
    );

    await userEvent.click(checkbox);
    expect(handleCheckedChange).not.toHaveBeenCalled();
  });

  it.skip('works with form attributes', () => {
    render(
      <Checkbox
        name="test-checkbox"
        value="test-value"
        required
        aria-label="Form checkbox"
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('name', 'test-checkbox');
    expect(checkbox).toHaveAttribute('value', 'test-value');
    expect(checkbox).toBeRequired();
  });

  it('supports accessibility attributes', () => {
    render(
      <Checkbox
        aria-label="Accessible checkbox"
        aria-describedby="checkbox-description"
        aria-labelledby="checkbox-label"
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-label', 'Accessible checkbox');
    expect(checkbox).toHaveAttribute(
      'aria-describedby',
      'checkbox-description'
    );
    expect(checkbox).toHaveAttribute('aria-labelledby', 'checkbox-label');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Checkbox ref={ref} aria-label="Ref checkbox" />);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current).toHaveAttribute('role', 'checkbox');
  });

  it('accepts custom className', () => {
    render(
      <Checkbox
        className="custom-checkbox-class"
        aria-label="Custom checkbox"
      />
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('custom-checkbox-class');
  });

  it('supports keyboard navigation', async () => {
    render(<Checkbox aria-label="Keyboard checkbox" />);
    const checkbox = screen.getByRole('checkbox');

    checkbox.focus();
    expect(checkbox).toHaveFocus();

    await userEvent.keyboard(' ');
    expect(checkbox).toBeChecked();

    await userEvent.keyboard(' ');
    expect(checkbox).not.toBeChecked();
  });

  it('renders check indicator when checked', () => {
    render(<Checkbox defaultChecked aria-label="Checked checkbox" />);
    const checkbox = screen.getByRole('checkbox');

    // Look for the CheckIcon component (data-slot="checkbox-indicator")
    const indicator = checkbox.querySelector(
      '[data-slot="checkbox-indicator"]'
    );
    expect(indicator).toBeInTheDocument();
  });

  it.skip('handles indeterminate to checked transition', async () => {
    const handleCheckedChange = jest.fn();

    const TestComponent = () => {
      const [checked, setChecked] = React.useState<boolean | 'indeterminate'>(
        'indeterminate'
      );

      return (
        <Checkbox
          aria-label="Transitioning checkbox"
          checked={checked}
          onCheckedChange={value => {
            setChecked(value);
            handleCheckedChange(value);
          }}
        />
      );
    };

    render(<TestComponent />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toHaveAttribute('data-state', 'indeterminate');

    await userEvent.click(checkbox);
    expect(handleCheckedChange).toHaveBeenCalledWith(false);
    expect(checkbox).toHaveAttribute('data-state', 'unchecked');
  });

  it('works with labels correctly', async () => {
    render(
      <div>
        <Checkbox id="labeled-checkbox" />
        <label htmlFor="labeled-checkbox">Click this label</label>
      </div>
    );

    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('Click this label');

    expect(checkbox).not.toBeChecked();

    await userEvent.click(label);
    expect(checkbox).toBeChecked();
  });

  it.skip('renders as child component when asChild is true', () => {
    render(
      <Checkbox asChild aria-label="Child checkbox">
        <div data-testid="custom-checkbox">Custom checkbox element</div>
      </Checkbox>
    );

    // Should render the custom div instead of button
    const customElement = screen.getByTestId('custom-checkbox');
    expect(customElement).toBeInTheDocument();
    expect(customElement).toHaveAttribute('role', 'checkbox');
  });

  it('supports all checked states programmatically', () => {
    const { rerender } = render(
      <Checkbox checked={false} aria-label="State checkbox" />
    );

    let checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('data-state', 'unchecked');

    rerender(<Checkbox checked={true} aria-label="State checkbox" />);
    checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('data-state', 'checked');

    rerender(<Checkbox checked="indeterminate" aria-label="State checkbox" />);
    checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
  });
});
