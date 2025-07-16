import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select';

// Mock @radix-ui/react-select to avoid ESM issues and portal rendering in tests
const MockSelectContext = React.createContext({ disabled: false });

jest.mock('@radix-ui/react-select', () => ({
  Root: ({ children, onValueChange, disabled, ...props }: any) => (
    <MockSelectContext.Provider value={{ disabled: disabled || false }}>
      <div
        data-testid="select-root"
        data-value={props.value}
        data-disabled={disabled}
        onClick={() => onValueChange?.('test')}
        {...props}
      >
        {children}
      </div>
    </MockSelectContext.Provider>
  ),
  Group: ({ children, ...props }: any) => (
    <div data-testid="select-group" {...props}>
      {children}
    </div>
  ),
  Value: ({ placeholder, ...props }: any) => (
    <div data-testid="select-value" data-placeholder={placeholder} {...props} />
  ),
  Trigger: ({ children, disabled, ...props }: any) => {
    const context = React.useContext(MockSelectContext);
    const isDisabled = disabled ?? context.disabled;
    return (
      <button data-testid="select-trigger" disabled={isDisabled} {...props}>
        {children}
      </button>
    );
  },
  Content: ({ children, position, ...props }: any) => (
    <div data-testid="select-content" data-position={position} {...props}>
      {children}
    </div>
  ),
  Portal: ({ children }: any) => <>{children}</>,
  Viewport: ({ children, ...props }: any) => (
    <div data-testid="select-viewport" {...props}>
      {children}
    </div>
  ),
  Label: ({ children, ...props }: any) => (
    <div data-testid="select-label" {...props}>
      {children}
    </div>
  ),
  Item: ({ children, value, disabled, ...props }: any) => (
    <div
      data-testid="select-item"
      data-value={value}
      data-disabled={disabled}
      {...(disabled && { disabled: true })}
      {...props}
    >
      <span data-testid="select-item-indicator" />
      <div data-testid="select-item-text">{children}</div>
    </div>
  ),
  ItemText: ({ children }: any) => <>{children}</>,
  ItemIndicator: ({ children }: any) => <>{children}</>,
  Separator: (props: any) => <div data-testid="select-separator" {...props} />,
  ScrollUpButton: ({ children, ...props }: any) => (
    <div data-testid="select-scroll-up-button" {...props}>
      {children}
    </div>
  ),
  ScrollDownButton: ({ children, ...props }: any) => (
    <div data-testid="select-scroll-down-button" {...props}>
      {children}
    </div>
  ),
  Icon: ({ children, asChild }: any) => (asChild ? children : <>{children}</>),
  Corner: () => <div data-testid="select-corner" />,
}));

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  CheckIcon: () => <div data-testid="check-icon" />,
  ChevronDownIcon: () => <div data-testid="chevron-down-icon" />,
  ChevronUpIcon: () => <div data-testid="chevron-up-icon" />,
}));

describe('Select', () => {
  it('renders basic select components', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByTestId('select-root')).toBeInTheDocument();
    expect(screen.getByTestId('select-trigger')).toBeInTheDocument();
    expect(screen.getByTestId('select-value')).toBeInTheDocument();
    expect(screen.getByTestId('select-content')).toBeInTheDocument();
    expect(screen.getAllByTestId('select-item')).toHaveLength(2);
  });

  it('renders with custom placeholder', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByTestId('select-value')).toHaveAttribute(
      'data-placeholder',
      'Choose an option'
    );
  });

  it('applies custom className to trigger', () => {
    render(
      <Select>
        <SelectTrigger className="custom-trigger">
          <SelectValue placeholder="Test" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByTestId('select-trigger')).toHaveClass('custom-trigger');
  });

  it('renders select groups with labels', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Group 1</SelectLabel>
            <SelectItem value="item1">Item 1</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );

    expect(screen.getByTestId('select-group')).toBeInTheDocument();
    expect(screen.getByTestId('select-label')).toBeInTheDocument();
    expect(screen.getByTestId('select-label')).toHaveTextContent('Group 1');
  });

  it('renders select separators', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="item1">Item 1</SelectItem>
          <SelectSeparator />
          <SelectItem value="item2">Item 2</SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByTestId('select-separator')).toBeInTheDocument();
  });

  it('renders scroll buttons', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="item1">Item 1</SelectItem>
        </SelectContent>
      </Select>
    );

    // Scroll buttons are automatically added by SelectContent
    expect(screen.getByTestId('select-scroll-up-button')).toBeInTheDocument();
    expect(screen.getByTestId('select-scroll-down-button')).toBeInTheDocument();
    expect(screen.getByTestId('chevron-up-icon')).toBeInTheDocument();
    // The chevron-down icon appears in both the trigger and scroll button, so use getAllByTestId
    expect(screen.getAllByTestId('chevron-down-icon')).toHaveLength(2);
  });

  it('handles controlled value', () => {
    const onValueChange = jest.fn();

    render(
      <Select value="option1" onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByTestId('select-root')).toHaveAttribute(
      'data-value',
      'option1'
    );
  });

  it('calls onValueChange when value changes', async () => {
    const onValueChange = jest.fn();
    const user = userEvent.setup();

    render(
      <Select onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );

    await user.click(screen.getByTestId('select-root'));
    expect(onValueChange).toHaveBeenCalledWith('test');
  });

  it('renders disabled state', () => {
    render(
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Disabled" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByTestId('select-trigger')).toBeDisabled();
  });

  it('renders disabled select items', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="enabled">Enabled</SelectItem>
          <SelectItem value="disabled" disabled>
            Disabled
          </SelectItem>
        </SelectContent>
      </Select>
    );

    const items = screen.getAllByTestId('select-item');
    expect(items[0]).not.toHaveAttribute('data-disabled', 'true');
    expect(items[1]).toHaveAttribute('data-disabled', 'true');
    expect(items[1]).toHaveAttribute('disabled');
  });

  it('applies custom className to all components', () => {
    render(
      <Select>
        <SelectTrigger className="custom-trigger">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent className="custom-content">
          <SelectGroup>
            <SelectLabel className="custom-label">Label</SelectLabel>
            <SelectItem value="item1" className="custom-item">
              Item 1
            </SelectItem>
            <SelectSeparator className="custom-separator" />
          </SelectGroup>
        </SelectContent>
      </Select>
    );

    expect(screen.getByTestId('select-trigger')).toHaveClass('custom-trigger');
    expect(screen.getByTestId('select-content')).toHaveClass('custom-content');
    expect(screen.getByTestId('select-label')).toHaveClass('custom-label');
    expect(screen.getByTestId('select-item')).toHaveClass('custom-item');
    expect(screen.getByTestId('select-separator')).toHaveClass(
      'custom-separator'
    );
    // Scroll buttons are automatically added by SelectContent, so they don't have custom classes
    expect(screen.getByTestId('select-scroll-up-button')).toBeInTheDocument();
    expect(screen.getByTestId('select-scroll-down-button')).toBeInTheDocument();
  });

  it('renders icons in components', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="item1">Item 1</SelectItem>
        </SelectContent>
      </Select>
    );

    // ChevronDownIcon appears in trigger and scroll down button
    expect(screen.getAllByTestId('chevron-down-icon')).toHaveLength(2);

    // CheckIcon in item indicator
    expect(screen.getByTestId('check-icon')).toBeInTheDocument();
  });

  it('handles content position prop', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent position="item-aligned">
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByTestId('select-content')).toHaveAttribute(
      'data-position',
      'item-aligned'
    );
  });

  it('renders viewport with proper classes', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByTestId('select-viewport')).toBeInTheDocument();
  });

  it('forwards all props to primitive components', () => {
    render(
      <Select name="test-select" dir="rtl" required>
        <SelectTrigger data-testid="custom-trigger">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test" data-value="custom-value">
            Test
          </SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByTestId('select-root')).toHaveAttribute(
      'name',
      'test-select'
    );
    expect(screen.getByTestId('select-root')).toHaveAttribute('dir', 'rtl');
    expect(screen.getByTestId('select-root')).toHaveAttribute('required');
    expect(screen.getByTestId('select-item')).toHaveAttribute(
      'data-value',
      'custom-value'
    );
  });

  it('handles error prop on Select', () => {
    render(
      <Select error>
        <SelectTrigger>
          <SelectValue placeholder="Error select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByTestId('select-root')).toHaveAttribute(
      'aria-invalid',
      'true'
    );
  });

  it('error prop applies styling regardless of explicit aria-invalid on Select', () => {
    render(
      <Select error aria-invalid="false">
        <SelectTrigger>
          <SelectValue placeholder="Error select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByTestId('select-root')).toHaveAttribute(
      'aria-invalid',
      'false'
    );
  });

  it('handles error prop on SelectTrigger', () => {
    render(
      <Select>
        <SelectTrigger error>
          <SelectValue placeholder="Error trigger" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByTestId('select-trigger')).toHaveAttribute(
      'aria-invalid',
      'true'
    );
  });

  it('applies error styling when error prop is true on SelectTrigger', () => {
    render(
      <Select>
        <SelectTrigger error>
          <SelectValue placeholder="Error trigger" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    );

    const trigger = screen.getByTestId('select-trigger');
    expect(trigger).toHaveClass(
      'ring-destructive/20',
      'border-destructive',
      'dark:ring-destructive/40'
    );
  });

  it('does not apply error styling when error prop is false on SelectTrigger', () => {
    render(
      <Select>
        <SelectTrigger error={false}>
          <SelectValue placeholder="No error trigger" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    );

    const trigger = screen.getByTestId('select-trigger');
    expect(trigger).not.toHaveClass(
      'ring-destructive/20',
      'border-destructive',
      'dark:ring-destructive/40'
    );
  });

  it('error prop applies styling regardless of explicit aria-invalid on SelectTrigger', () => {
    render(
      <Select>
        <SelectTrigger error aria-invalid="false">
          <SelectValue placeholder="Override trigger" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    );

    const trigger = screen.getByTestId('select-trigger');
    expect(trigger).toHaveAttribute('aria-invalid', 'false');
    expect(trigger).toHaveClass(
      'ring-destructive/20',
      'border-destructive',
      'dark:ring-destructive/40'
    );
  });
});
