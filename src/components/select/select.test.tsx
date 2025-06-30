import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select';

// Mock @radix-ui/react-select to avoid ESM issues and portal rendering in tests
jest.mock('@radix-ui/react-select', () => ({
  Root: ({ children, onValueChange, ...props }: any) => (
    <div
      data-testid="select-root"
      data-value={props.value}
      onClick={() => onValueChange?.('test')}
    >
      {children}
    </div>
  ),
  Group: ({ children, ...props }: any) => (
    <div data-testid="select-group" {...props}>
      {children}
    </div>
  ),
  Value: ({ placeholder, ...props }: any) => (
    <div data-testid="select-value" data-placeholder={placeholder} {...props} />
  ),
  Trigger: ({ children, ...props }: any) => (
    <button data-testid="select-trigger" {...props}>
      {children}
    </button>
  ),
  Content: ({ children, ...props }: any) => (
    <div data-testid="select-content" {...props}>
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
  Item: ({ children, value, ...props }: any) => (
    <div data-testid="select-item" data-value={value} {...props}>
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

  it('renders with different trigger sizes', () => {
    render(
      <Select>
        <SelectTrigger size="sm">
          <SelectValue placeholder="Small select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test">Test</SelectItem>
        </SelectContent>
      </Select>
    );

    const trigger = screen.getByTestId('select-trigger');
    expect(trigger).toHaveAttribute('data-size', 'sm');
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
          <SelectScrollUpButton />
          <SelectItem value="item1">Item 1</SelectItem>
          <SelectScrollDownButton />
        </SelectContent>
      </Select>
    );

    expect(screen.getByTestId('select-scroll-up-button')).toBeInTheDocument();
    expect(screen.getByTestId('select-scroll-down-button')).toBeInTheDocument();
    expect(screen.getByTestId('chevron-up-icon')).toBeInTheDocument();
    expect(screen.getByTestId('chevron-down-icon')).toBeInTheDocument();
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
    expect(items[0]).not.toBeDisabled();
    expect(items[1]).toBeDisabled();
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
            <SelectScrollUpButton className="custom-scroll-up" />
            <SelectScrollDownButton className="custom-scroll-down" />
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
    expect(screen.getByTestId('select-scroll-up-button')).toHaveClass(
      'custom-scroll-up'
    );
    expect(screen.getByTestId('select-scroll-down-button')).toHaveClass(
      'custom-scroll-down'
    );
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

    // ChevronDownIcon in trigger
    expect(screen.getByTestId('chevron-down-icon')).toBeInTheDocument();

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
      'position',
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
});
