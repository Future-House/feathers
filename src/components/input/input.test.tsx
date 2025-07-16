import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Input } from './input';

describe('Input', () => {
  it('renders input element', () => {
    render(<Input data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-slot', 'input');
  });

  it('renders with placeholder text', () => {
    render(<Input placeholder="Enter text" data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('placeholder', 'Enter text');
  });

  it('renders with default type text', () => {
    render(<Input data-testid="input" />);

    const input = screen.getByTestId('input');
    // HTML input elements default to type="text" but don't have the attribute unless explicitly set
    expect(input.getAttribute('type')).toBeNull();
    expect(input).toHaveProperty('type', 'text');
  });

  it('renders with specified type', () => {
    render(<Input type="email" data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('handles value prop', () => {
    render(
      <Input value="test value" onChange={() => {}} data-testid="input" />
    );

    const input = screen.getByTestId('input') as HTMLInputElement;
    expect(input.value).toBe('test value');
  });

  it('handles defaultValue prop', () => {
    render(<Input defaultValue="default value" data-testid="input" />);

    const input = screen.getByTestId('input') as HTMLInputElement;
    expect(input.value).toBe('default value');
  });

  it('handles disabled state', () => {
    render(<Input disabled data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toBeDisabled();
  });

  it('handles readOnly state', () => {
    render(<Input readOnly data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('readonly');
  });

  it('handles required attribute', () => {
    render(<Input required data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toBeRequired();
  });

  it('handles maxLength attribute', () => {
    render(<Input maxLength={10} data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('maxlength', '10');
  });

  it('handles minLength attribute', () => {
    render(<Input minLength={5} data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('minlength', '5');
  });

  it('handles min and max attributes for number input', () => {
    render(<Input type="number" min={1} max={100} data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('min', '1');
    expect(input).toHaveAttribute('max', '100');
  });

  it('handles step attribute for number input', () => {
    render(<Input type="number" step={0.1} data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('step', '0.1');
  });

  it('handles pattern attribute', () => {
    render(<Input pattern="[0-9]*" data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('pattern', '[0-9]*');
  });

  it('handles autoComplete attribute', () => {
    render(<Input autoComplete="email" data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('autocomplete', 'email');
  });

  it('handles autoFocus attribute', () => {
    render(<Input autoFocus data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveFocus();
  });

  it('handles id and name attributes', () => {
    render(<Input id="test-id" name="test-name" data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('id', 'test-id');
    expect(input).toHaveAttribute('name', 'test-name');
  });

  it('calls onChange when value changes', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Input onChange={handleChange} data-testid="input" />);

    const input = screen.getByTestId('input');
    await user.type(input, 'test');

    expect(handleChange).toHaveBeenCalledTimes(4); // Called for each character
  });

  it('calls onFocus when input is focused', async () => {
    const user = userEvent.setup();
    const handleFocus = jest.fn();

    render(<Input onFocus={handleFocus} data-testid="input" />);

    const input = screen.getByTestId('input');
    await user.click(input);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('calls onBlur when input loses focus', async () => {
    const user = userEvent.setup();
    const handleBlur = jest.fn();

    render(
      <div>
        <Input onBlur={handleBlur} data-testid="input" />
        <button data-testid="other-element">Other element</button>
      </div>
    );

    const input = screen.getByTestId('input');
    const otherElement = screen.getByTestId('other-element');

    await user.click(input);
    await user.click(otherElement);

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<Input className="custom-class" data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveClass('custom-class');
  });

  it('applies default styling classes', () => {
    render(<Input data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveClass('flex', 'h-9', 'w-full', 'rounded-md', 'border');
  });

  it('handles controlled component correctly', async () => {
    const user = userEvent.setup();
    const ControlledInput = () => {
      const [value, setValue] = React.useState('');
      return (
        <Input
          value={value}
          onChange={e => setValue(e.target.value)}
          data-testid="input"
        />
      );
    };

    render(<ControlledInput />);

    const input = screen.getByTestId('input') as HTMLInputElement;

    await user.type(input, 'hello');
    expect(input.value).toBe('hello');
  });

  it('handles uncontrolled component correctly', async () => {
    const user = userEvent.setup();

    render(<Input defaultValue="initial" data-testid="input" />);

    const input = screen.getByTestId('input') as HTMLInputElement;
    expect(input.value).toBe('initial');

    await user.clear(input);
    await user.type(input, 'new value');
    expect(input.value).toBe('new value');
  });

  it('prevents typing when disabled', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Input disabled onChange={handleChange} data-testid="input" />);

    const input = screen.getByTestId('input');
    await user.type(input, 'test');

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('prevents editing when readOnly', async () => {
    const user = userEvent.setup();

    render(<Input readOnly defaultValue="readonly" data-testid="input" />);

    const input = screen.getByTestId('input') as HTMLInputElement;
    await user.type(input, 'test');

    expect(input.value).toBe('readonly');
  });

  it('handles keyboard events', () => {
    const handleKeyDown = jest.fn();
    const handleKeyUp = jest.fn();

    render(
      <Input
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        data-testid="input"
      />
    );

    const input = screen.getByTestId('input');

    fireEvent.keyDown(input, { key: 'Enter' });
    fireEvent.keyUp(input, { key: 'Enter' });

    expect(handleKeyDown).toHaveBeenCalledTimes(1);
    expect(handleKeyUp).toHaveBeenCalledTimes(1);
  });

  it('handles file input type', () => {
    render(<Input type="file" accept=".jpg,.png" data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('type', 'file');
    expect(input).toHaveAttribute('accept', '.jpg,.png');
  });

  it('handles number input with constraints', async () => {
    const user = userEvent.setup();

    render(
      <Input type="number" min={0} max={10} step={1} data-testid="input" />
    );

    const input = screen.getByTestId('input') as HTMLInputElement;

    await user.type(input, '5');
    expect(input.value).toBe('5');
  });

  it('handles email input validation', () => {
    render(<Input type="email" data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('handles password input', () => {
    render(<Input type="password" data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('type', 'password');
  });

  it('handles search input', () => {
    render(<Input type="search" data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('type', 'search');
  });

  it('handles date input', () => {
    render(<Input type="date" data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('type', 'date');
  });

  it('handles time input', () => {
    render(<Input type="time" data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('type', 'time');
  });

  it('handles aria-invalid attribute', () => {
    render(<Input aria-invalid="true" data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('handles error prop', () => {
    render(<Input error data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('applies error styling when error prop is true', () => {
    render(<Input error data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveClass('ring-destructive/20', 'border-destructive');
  });

  it('does not apply error styling when error prop is false', () => {
    render(<Input error={false} data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).not.toHaveClass('ring-destructive/20', 'border-destructive');
  });

  it('error prop applies styling regardless of explicit aria-invalid', () => {
    render(<Input error aria-invalid="false" data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('aria-invalid', 'false');
    expect(input).toHaveClass('ring-destructive/20', 'border-destructive');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<Input ref={ref} data-testid="input" />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current).toBe(screen.getByTestId('input'));
  });

  it('handles form integration', () => {
    const handleSubmit = jest.fn(e => {
      e.preventDefault();
      const formData = new FormData(e.target);
      handleSubmit.mockImplementation(() => formData.get('test-input'));
    });

    render(
      <form onSubmit={handleSubmit}>
        <Input
          name="test-input"
          defaultValue="form-value"
          data-testid="input"
        />
        <button type="submit" data-testid="submit">
          Submit
        </button>
      </form>
    );

    fireEvent.click(screen.getByTestId('submit'));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('maintains accessibility attributes', () => {
    render(
      <Input
        aria-label="Test input"
        aria-describedby="helper-text"
        data-testid="input"
      />
    );

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('aria-label', 'Test input');
    expect(input).toHaveAttribute('aria-describedby', 'helper-text');
  });
});
