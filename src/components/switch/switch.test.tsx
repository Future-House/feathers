import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from './switch';

describe('Switch', () => {
  it('renders correctly', () => {
    render(<Switch aria-label="Test switch" />);
    expect(
      screen.getByRole('switch', { name: 'Test switch' })
    ).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<Switch aria-label="Test switch" />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass(
      'peer',
      'inline-flex',
      'h-[1.15rem]',
      'w-8',
      'shrink-0',
      'items-center',
      'rounded-full',
      'border',
      'border-transparent',
      'shadow-xs'
    );
  });

  it('starts unchecked by default', () => {
    render(<Switch aria-label="Test switch" />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).not.toBeChecked();
    expect(switchElement).toHaveAttribute('data-state', 'unchecked');
  });

  it('can be checked by default', () => {
    render(<Switch defaultChecked aria-label="Test switch" />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeChecked();
    expect(switchElement).toHaveAttribute('data-state', 'checked');
  });

  it('handles user interactions', async () => {
    render(<Switch aria-label="Test switch" />);
    const switchElement = screen.getByRole('switch');

    expect(switchElement).not.toBeChecked();

    await userEvent.click(switchElement);
    expect(switchElement).toBeChecked();

    await userEvent.click(switchElement);
    expect(switchElement).not.toBeChecked();
  });

  it('calls onCheckedChange when state changes', async () => {
    const handleCheckedChange = jest.fn();
    render(
      <Switch aria-label="Test switch" onCheckedChange={handleCheckedChange} />
    );

    const switchElement = screen.getByRole('switch');

    await userEvent.click(switchElement);
    expect(handleCheckedChange).toHaveBeenCalledWith(true);

    await userEvent.click(switchElement);
    expect(handleCheckedChange).toHaveBeenCalledWith(false);
  });

  it('can be controlled', async () => {
    const ControlledSwitch = () => {
      const [checked, setChecked] = React.useState(false);
      return (
        <Switch
          aria-label="Controlled switch"
          checked={checked}
          onCheckedChange={setChecked}
        />
      );
    };

    render(<ControlledSwitch />);
    const switchElement = screen.getByRole('switch');

    expect(switchElement).not.toBeChecked();

    await userEvent.click(switchElement);
    expect(switchElement).toBeChecked();
  });

  it('can be disabled', async () => {
    const handleCheckedChange = jest.fn();
    render(
      <Switch
        disabled
        aria-label="Disabled switch"
        onCheckedChange={handleCheckedChange}
      />
    );

    const switchElement = screen.getByRole('switch');
    expect(switchElement).toBeDisabled();
    expect(switchElement).toHaveClass(
      'disabled:cursor-not-allowed',
      'disabled:opacity-50'
    );

    await userEvent.click(switchElement);
    expect(handleCheckedChange).not.toHaveBeenCalled();
  });

  it('works with form attributes', () => {
    render(
      <Switch
        name="test-switch"
        value="test-value"
        required
        aria-label="Form switch"
      />
    );

    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('name', 'test-switch');
    expect(switchElement).toHaveAttribute('value', 'test-value');
    expect(switchElement).toBeRequired();
  });

  it('supports accessibility attributes', () => {
    render(
      <Switch
        aria-label="Accessible switch"
        aria-describedby="switch-description"
        aria-labelledby="switch-label"
      />
    );

    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('aria-label', 'Accessible switch');
    expect(switchElement).toHaveAttribute(
      'aria-describedby',
      'switch-description'
    );
    expect(switchElement).toHaveAttribute('aria-labelledby', 'switch-label');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Switch ref={ref} aria-label="Ref switch" />);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current).toHaveAttribute('role', 'switch');
  });

  it('accepts custom className', () => {
    render(
      <Switch className="custom-switch-class" aria-label="Custom switch" />
    );
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('custom-switch-class');
  });

  it('supports keyboard navigation', async () => {
    render(<Switch aria-label="Keyboard switch" />);
    const switchElement = screen.getByRole('switch');

    switchElement.focus();
    expect(switchElement).toHaveFocus();

    await userEvent.keyboard(' ');
    expect(switchElement).toBeChecked();

    await userEvent.keyboard(' ');
    expect(switchElement).not.toBeChecked();

    await userEvent.keyboard('{Enter}');
    expect(switchElement).toBeChecked();
  });

  it('renders thumb element', () => {
    render(<Switch aria-label="Test switch" />);
    const switchElement = screen.getByRole('switch');

    // Look for the thumb element (data-slot="switch-thumb")
    const thumb = switchElement.querySelector('[data-slot="switch-thumb"]');
    expect(thumb).toBeInTheDocument();
  });

  it('works with labels correctly', async () => {
    render(
      <div>
        <Switch id="labeled-switch" />
        <label htmlFor="labeled-switch">Click this label</label>
      </div>
    );

    const switchElement = screen.getByRole('switch');
    const label = screen.getByText('Click this label');

    expect(switchElement).not.toBeChecked();

    await userEvent.click(label);
    expect(switchElement).toBeChecked();
  });

  it('supports all checked states programmatically', () => {
    const { rerender } = render(
      <Switch checked={false} aria-label="State switch" />
    );

    let switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('data-state', 'unchecked');

    rerender(<Switch checked={true} aria-label="State switch" />);
    switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('data-state', 'checked');
  });

  it('handles focus states correctly', async () => {
    render(<Switch aria-label="Focus switch" />);
    const switchElement = screen.getByRole('switch');

    // Focus the switch
    await userEvent.tab();
    expect(switchElement).toHaveFocus();
    expect(switchElement).toHaveClass('focus-visible:ring-ring/50');

    // Tab away
    await userEvent.tab();
    expect(switchElement).not.toHaveFocus();
  });

  it('applies checked and unchecked styling correctly', () => {
    const { rerender } = render(
      <Switch checked={false} aria-label="Styling switch" />
    );

    let switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('data-[state=unchecked]:bg-input');

    rerender(<Switch checked={true} aria-label="Styling switch" />);
    switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveClass('data-[state=checked]:bg-primary');
  });

  it('thumb translates correctly based on state', () => {
    const { rerender } = render(
      <Switch checked={false} aria-label="Thumb switch" />
    );

    let switchElement = screen.getByRole('switch');
    let thumb = switchElement.querySelector('[data-slot="switch-thumb"]');
    expect(thumb).toHaveClass('data-[state=unchecked]:translate-x-0');

    rerender(<Switch checked={true} aria-label="Thumb switch" />);
    switchElement = screen.getByRole('switch');
    thumb = switchElement.querySelector('[data-slot="switch-thumb"]');
    expect(thumb).toHaveClass(
      'data-[state=checked]:translate-x-[calc(100%-2px)]'
    );
  });
});
