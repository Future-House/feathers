import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Label } from '../label/label';

describe('RadioGroup', () => {
  it('renders correctly', () => {
    render(
      <RadioGroup data-testid="radio-group">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
      </RadioGroup>
    );

    expect(screen.getByTestId('radio-group')).toBeInTheDocument();
    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(2);
  });

  it('renders with default value', () => {
    render(
      <RadioGroup defaultValue="option2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
      </RadioGroup>
    );

    const option2 = screen.getByRole('radio', { name: 'Option 2' });
    expect(option2).toBeChecked();
  });

  it('handles user interaction', async () => {
    const user = userEvent.setup();
    const onValueChange = jest.fn();

    render(
      <RadioGroup onValueChange={onValueChange}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
      </RadioGroup>
    );

    const option1 = screen.getByRole('radio', { name: 'Option 1' });
    await user.click(option1);

    expect(onValueChange).toHaveBeenCalledWith('option1');
  });

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup();

    render(
      <RadioGroup defaultValue="option1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option3" id="option3" />
          <Label htmlFor="option3">Option 3</Label>
        </div>
      </RadioGroup>
    );

    const option1 = screen.getByRole('radio', { name: 'Option 1' });
    const option2 = screen.getByRole('radio', { name: 'Option 2' });

    await user.click(option1);
    expect(option1).toHaveFocus();

    await user.keyboard('{ArrowDown}');
    expect(option2).toHaveFocus();
  });

  it('respects disabled state on individual items', () => {
    render(
      <RadioGroup>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" disabled />
          <Label htmlFor="option2">Option 2 (Disabled)</Label>
        </div>
      </RadioGroup>
    );

    const option2 = screen.getByRole('radio', { name: 'Option 2 (Disabled)' });
    expect(option2).toBeDisabled();
  });

  it('respects disabled state on entire group', () => {
    render(
      <RadioGroup disabled>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
      </RadioGroup>
    );

    const radios = screen.getAllByRole('radio');
    radios.forEach(radio => {
      expect(radio).toBeDisabled();
    });
  });

  it('supports horizontal orientation', () => {
    render(
      <RadioGroup orientation="horizontal" data-testid="radio-group">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
      </RadioGroup>
    );

    const radioGroup = screen.getByTestId('radio-group');
    expect(radioGroup).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('has proper accessibility attributes', () => {
    render(
      <RadioGroup required>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
      </RadioGroup>
    );

    const radioGroup = screen.getByRole('radiogroup');
    expect(radioGroup).toHaveAttribute('aria-required', 'true');
  });
});

describe('RadioGroupItem', () => {
  it('renders with correct value', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="test-value" id="test-item" />
      </RadioGroup>
    );

    const radioItem = screen.getByRole('radio');
    expect(radioItem).toHaveAttribute('value', 'test-value');
  });

  it('supports custom className', () => {
    render(
      <RadioGroup>
        <RadioGroupItem
          value="option1"
          className="custom-class"
          data-testid="radio-item"
        />
      </RadioGroup>
    );

    const radioItem = screen.getByTestId('radio-item');
    expect(radioItem).toHaveClass('custom-class');
  });

  it('renders indicator when checked', () => {
    render(
      <RadioGroup defaultValue="option1">
        <RadioGroupItem value="option1" data-testid="radio-item" />
      </RadioGroup>
    );

    const radioItem = screen.getByTestId('radio-item');
    expect(radioItem).toBeChecked();

    // The indicator should be present in the DOM when checked
    const indicator = radioItem.querySelector(
      '[data-slot="radio-group-indicator"]'
    );
    expect(indicator).toBeInTheDocument();
  });
});
