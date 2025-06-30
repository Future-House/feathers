import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from './textarea';

describe('Textarea', () => {
  it('renders correctly', () => {
    render(<Textarea aria-label="Test textarea" />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<Textarea aria-label="Test textarea" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass(
      'border-input',
      'placeholder:text-muted-foreground',
      'focus-visible:border-ring',
      'focus-visible:ring-ring/50',
      'flex',
      'field-sizing-content',
      'min-h-16',
      'w-full',
      'rounded-md',
      'border',
      'bg-transparent',
      'px-3',
      'py-2',
      'text-base',
      'shadow-xs'
    );
  });

  it('renders with placeholder text', () => {
    render(<Textarea placeholder="Enter your message" />);
    const textarea = screen.getByPlaceholderText('Enter your message');
    expect(textarea).toBeInTheDocument();
  });

  it('handles user input', async () => {
    render(<Textarea aria-label="Test textarea" />);
    const textarea = screen.getByRole('textbox');

    await userEvent.type(textarea, 'Hello world');
    expect(textarea).toHaveValue('Hello world');
  });

  it('calls onChange when text changes', async () => {
    const handleChange = jest.fn();
    render(<Textarea onChange={handleChange} aria-label="Test textarea" />);

    const textarea = screen.getByRole('textbox');
    await userEvent.type(textarea, 'test');

    expect(handleChange).toHaveBeenCalledTimes(4); // Called for each character
  });

  it('can be disabled', async () => {
    const handleChange = jest.fn();
    render(
      <Textarea
        disabled
        onChange={handleChange}
        aria-label="Disabled textarea"
      />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeDisabled();
    expect(textarea).toHaveClass(
      'disabled:cursor-not-allowed',
      'disabled:opacity-50'
    );

    await userEvent.type(textarea, 'test');
    expect(handleChange).not.toHaveBeenCalled();
    expect(textarea).toHaveValue('');
  });

  it('can be read-only', async () => {
    render(
      <Textarea
        readOnly
        defaultValue="Read-only content"
        aria-label="Read-only textarea"
      />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('Read-only content');

    await userEvent.type(textarea, 'new text');
    expect(textarea).toHaveValue('Read-only content');
  });

  it('accepts custom className', () => {
    render(
      <Textarea
        className="custom-textarea-class"
        aria-label="Custom textarea"
      />
    );
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('custom-textarea-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLTextAreaElement>();
    render(<Textarea ref={ref} aria-label="Ref textarea" />);

    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it('supports form attributes', () => {
    render(
      <Textarea
        name="message"
        required
        maxLength={100}
        minLength={10}
        aria-label="Form textarea"
      />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('name', 'message');
    expect(textarea).toBeRequired();
    expect(textarea).toHaveAttribute('maxlength', '100');
    expect(textarea).toHaveAttribute('minlength', '10');
  });

  it('supports rows and cols attributes', () => {
    render(<Textarea rows={5} cols={30} aria-label="Sized textarea" />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('rows', '5');
    expect(textarea).toHaveAttribute('cols', '30');
  });

  it('supports wrap attribute', () => {
    render(<Textarea wrap="hard" aria-label="Hard wrap textarea" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('wrap', 'hard');
  });

  it('supports controlled value', () => {
    const ControlledTextarea = () => {
      const [value, setValue] = React.useState('initial value');
      return (
        <Textarea
          value={value}
          onChange={e => setValue(e.target.value)}
          aria-label="Controlled textarea"
        />
      );
    };

    render(<ControlledTextarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('initial value');
  });

  it('supports uncontrolled default value', () => {
    render(
      <Textarea
        defaultValue="default content"
        aria-label="Uncontrolled textarea"
      />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('default content');
  });

  it('supports accessibility attributes', () => {
    render(
      <Textarea
        aria-label="Accessible textarea"
        aria-describedby="textarea-description"
        aria-invalid="true"
      />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('aria-label', 'Accessible textarea');
    expect(textarea).toHaveAttribute(
      'aria-describedby',
      'textarea-description'
    );
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
  });

  it('handles focus and blur events', async () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    render(
      <Textarea
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label="Focus textarea"
      />
    );

    const textarea = screen.getByRole('textbox');

    await userEvent.click(textarea);
    expect(handleFocus).toHaveBeenCalledTimes(1);

    await userEvent.tab();
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('supports keyboard navigation', async () => {
    render(<Textarea aria-label="Keyboard textarea" />);
    const textarea = screen.getByRole('textbox');

    textarea.focus();
    expect(textarea).toHaveFocus();

    await userEvent.keyboard('Hello{Enter}World');
    expect(textarea).toHaveValue('Hello\nWorld');
  });

  it('applies focus styles correctly', async () => {
    render(<Textarea aria-label="Focus styles textarea" />);
    const textarea = screen.getByRole('textbox');

    await userEvent.click(textarea);
    expect(textarea).toHaveClass('focus-visible:ring-ring/50');
  });

  it('works with labels correctly', async () => {
    render(
      <div>
        <label htmlFor="labeled-textarea">Message</label>
        <Textarea id="labeled-textarea" />
      </div>
    );

    const textarea = screen.getByRole('textbox', { name: 'Message' });
    const label = screen.getByText('Message');

    expect(textarea).toBeInTheDocument();
    await userEvent.click(label);
    expect(textarea).toHaveFocus();
  });

  it('applies error styling when aria-invalid is true', () => {
    render(<Textarea aria-invalid="true" aria-label="Invalid textarea" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('aria-invalid:ring-destructive/20');
  });

  it('has correct data-slot attribute', () => {
    render(<Textarea aria-label="Data slot textarea" />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('data-slot', 'textarea');
  });

  it('handles resize behavior', () => {
    render(
      <Textarea
        style={{ resize: 'vertical' }}
        aria-label="Resizable textarea"
      />
    );
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveStyle('resize: vertical');
  });
});
