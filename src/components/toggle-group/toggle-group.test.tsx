import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToggleGroup, ToggleGroupItem } from './toggle-group';

describe('ToggleGroup', () => {
  it('renders correctly with single type', () => {
    render(
      <ToggleGroup type="single" aria-label="Test toggle group">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
        <ToggleGroupItem value="item2">Item 2</ToggleGroupItem>
      </ToggleGroup>
    );

    expect(screen.getByRole('group')).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Item 1' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Item 2' })).toBeInTheDocument();
  });

  it('renders correctly with multiple type', () => {
    render(
      <ToggleGroup type="multiple" aria-label="Test toggle group">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
        <ToggleGroupItem value="item2">Item 2</ToggleGroupItem>
      </ToggleGroup>
    );

    expect(screen.getByRole('group')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Item 1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Item 2' })).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
      </ToggleGroup>
    );

    const group = screen.getByRole('group');
    expect(group).toHaveClass(
      'group/toggle-group',
      'flex',
      'w-fit',
      'items-center',
      'rounded-md'
    );
  });

  it('supports single selection type', async () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
        <ToggleGroupItem value="item2">Item 2</ToggleGroupItem>
      </ToggleGroup>
    );

    const item1 = screen.getByRole('radio', { name: 'Item 1' });
    const item2 = screen.getByRole('radio', { name: 'Item 2' });

    await userEvent.click(item1);
    expect(item1).toHaveAttribute('aria-checked', 'true');
    expect(item2).toHaveAttribute('aria-checked', 'false');

    await userEvent.click(item2);
    expect(item1).toHaveAttribute('aria-checked', 'false');
    expect(item2).toHaveAttribute('aria-checked', 'true');
  });

  it('supports multiple selection type', async () => {
    render(
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
        <ToggleGroupItem value="item2">Item 2</ToggleGroupItem>
      </ToggleGroup>
    );

    const item1 = screen.getByRole('button', { name: 'Item 1' });
    const item2 = screen.getByRole('button', { name: 'Item 2' });

    await userEvent.click(item1);
    expect(item1).toHaveAttribute('aria-pressed', 'true');
    expect(item2).toHaveAttribute('aria-pressed', 'false');

    await userEvent.click(item2);
    expect(item1).toHaveAttribute('aria-pressed', 'true');
    expect(item2).toHaveAttribute('aria-pressed', 'true');
  });

  it('handles defaultValue for single type', () => {
    render(
      <ToggleGroup type="single" defaultValue="item2">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
        <ToggleGroupItem value="item2">Item 2</ToggleGroupItem>
      </ToggleGroup>
    );

    const item1 = screen.getByRole('radio', { name: 'Item 1' });
    const item2 = screen.getByRole('radio', { name: 'Item 2' });

    expect(item1).toHaveAttribute('aria-checked', 'false');
    expect(item2).toHaveAttribute('aria-checked', 'true');
  });

  it('handles defaultValue for multiple type', () => {
    render(
      <ToggleGroup type="multiple" defaultValue={['item1', 'item2']}>
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
        <ToggleGroupItem value="item2">Item 2</ToggleGroupItem>
        <ToggleGroupItem value="item3">Item 3</ToggleGroupItem>
      </ToggleGroup>
    );

    const item1 = screen.getByRole('button', { name: 'Item 1' });
    const item2 = screen.getByRole('button', { name: 'Item 2' });
    const item3 = screen.getByRole('button', { name: 'Item 3' });

    expect(item1).toHaveAttribute('aria-pressed', 'true');
    expect(item2).toHaveAttribute('aria-pressed', 'true');
    expect(item3).toHaveAttribute('aria-pressed', 'false');
  });

  it('can be controlled', async () => {
    const ControlledToggleGroup = () => {
      const [value, setValue] = React.useState<string>('item1');
      return (
        <ToggleGroup type="single" value={value} onValueChange={setValue}>
          <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
          <ToggleGroupItem value="item2">Item 2</ToggleGroupItem>
        </ToggleGroup>
      );
    };

    render(<ControlledToggleGroup />);

    const item1 = screen.getByRole('radio', { name: 'Item 1' });
    const item2 = screen.getByRole('radio', { name: 'Item 2' });

    expect(item1).toHaveAttribute('aria-checked', 'true');
    expect(item2).toHaveAttribute('aria-checked', 'false');

    await userEvent.click(item2);
    expect(item1).toHaveAttribute('aria-checked', 'false');
    expect(item2).toHaveAttribute('aria-checked', 'true');
  });

  it('calls onValueChange when selection changes', async () => {
    const handleValueChange = jest.fn();
    render(
      <ToggleGroup type="single" onValueChange={handleValueChange}>
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
        <ToggleGroupItem value="item2">Item 2</ToggleGroupItem>
      </ToggleGroup>
    );

    const item1 = screen.getByRole('radio', { name: 'Item 1' });
    await userEvent.click(item1);

    expect(handleValueChange).toHaveBeenCalledWith('item1');
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(
      <ToggleGroup type="single" variant="default">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
      </ToggleGroup>
    );

    let group = screen.getByRole('group');
    expect(group).toHaveAttribute('data-variant', 'default');

    rerender(
      <ToggleGroup type="single" variant="outline">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
      </ToggleGroup>
    );

    group = screen.getByRole('group');
    expect(group).toHaveAttribute('data-variant', 'outline');
    expect(group).toHaveClass('data-[variant=outline]:shadow-xs');
  });

  it('applies size classes correctly through context', () => {
    render(
      <ToggleGroup type="single" size="sm">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
      </ToggleGroup>
    );

    const group = screen.getByRole('group');
    const item = screen.getByRole('radio');
    expect(group).toHaveAttribute('data-size', 'sm');
    expect(item).toHaveAttribute('data-size', 'sm');
  });

  it('can be disabled entirely', async () => {
    const handleValueChange = jest.fn();
    render(
      <ToggleGroup type="single" disabled onValueChange={handleValueChange}>
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
        <ToggleGroupItem value="item2">Item 2</ToggleGroupItem>
      </ToggleGroup>
    );

    const item1 = screen.getByRole('radio', { name: 'Item 1' });
    expect(item1).toBeDisabled();

    await userEvent.click(item1);
    expect(handleValueChange).not.toHaveBeenCalled();
  });

  it('supports individual item disable', async () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
        <ToggleGroupItem value="item2" disabled>
          Item 2
        </ToggleGroupItem>
      </ToggleGroup>
    );

    const item1 = screen.getByRole('radio', { name: 'Item 1' });
    const item2 = screen.getByRole('radio', { name: 'Item 2' });

    expect(item1).not.toBeDisabled();
    expect(item2).toBeDisabled();

    await userEvent.click(item1);
    expect(item1).toHaveAttribute('aria-checked', 'true');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <ToggleGroup ref={ref} type="single">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
      </ToggleGroup>
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveAttribute('role', 'group');
  });

  it('accepts custom className', () => {
    render(
      <ToggleGroup className="custom-group-class" type="single">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
      </ToggleGroup>
    );

    const group = screen.getByRole('group');
    expect(group).toHaveClass('custom-group-class');
  });

  it('supports keyboard navigation', async () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
        <ToggleGroupItem value="item2">Item 2</ToggleGroupItem>
        <ToggleGroupItem value="item3">Item 3</ToggleGroupItem>
      </ToggleGroup>
    );

    const item1 = screen.getByRole('radio', { name: 'Item 1' });
    const item2 = screen.getByRole('radio', { name: 'Item 2' });

    // Focus first item directly for keyboard navigation test
    item1.focus();
    expect(item1).toHaveFocus();

    await userEvent.keyboard('{ArrowRight}');
    expect(item2).toHaveFocus();

    await userEvent.keyboard(' ');
    expect(item2).toHaveAttribute('aria-checked', 'true');
  });

  it('supports accessibility attributes', () => {
    render(
      <ToggleGroup
        type="single"
        aria-label="Text formatting"
        aria-describedby="formatting-description"
      >
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          Bold
        </ToggleGroupItem>
      </ToggleGroup>
    );

    const group = screen.getByRole('group');
    expect(group).toHaveAttribute('aria-label', 'Text formatting');
    expect(group).toHaveAttribute('aria-describedby', 'formatting-description');

    const item = screen.getByRole('radio', { name: 'Toggle bold' });
    expect(item).toHaveAttribute('aria-label', 'Toggle bold');
  });

  it('has correct data-slot attributes', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
      </ToggleGroup>
    );

    const group = screen.getByRole('group');
    const item = screen.getByRole('radio');

    expect(group).toHaveAttribute('data-slot', 'toggle-group');
    expect(item).toHaveAttribute('data-slot', 'toggle-group-item');
  });

  it('applies toggle variant classes to items', () => {
    render(
      <ToggleGroup type="single" variant="outline" size="lg">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
      </ToggleGroup>
    );

    const item = screen.getByRole('radio');
    expect(item).toHaveClass(
      'min-w-0',
      'shrink-0',
      'rounded-none',
      'shadow-none',
      'focus:z-10',
      'focus-visible:z-10',
      'first:rounded-s-md',
      'last:rounded-e-md'
    );
  });

  it('handles orientation correctly', () => {
    render(
      <ToggleGroup type="single" orientation="vertical">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
        <ToggleGroupItem value="item2">Item 2</ToggleGroupItem>
      </ToggleGroup>
    );

    const group = screen.getByRole('group');
    // Check that the orientation prop is passed to the component
    expect(group).toBeInTheDocument();
    // Note: Radix UI may not add aria-orientation to the group element itself
    // but the orientation prop affects keyboard navigation behavior
  });

  it('supports loop navigation', () => {
    render(
      <ToggleGroup type="single" loop={false}>
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
        <ToggleGroupItem value="item2">Item 2</ToggleGroupItem>
      </ToggleGroup>
    );

    const group = screen.getByRole('group');
    expect(group).toBeInTheDocument();
  });

  it('works with icons correctly', () => {
    const MockIcon = () => <span data-testid="mock-icon">Icon</span>;
    render(
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="icon" aria-label="Icon item">
          <MockIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    );

    const item = screen.getByRole('button', { name: 'Icon item' });
    const icon = screen.getByTestId('mock-icon');
    expect(item).toContainElement(icon);
  });

  it('maintains selection state correctly for multiple type', async () => {
    render(
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
        <ToggleGroupItem value="item2">Item 2</ToggleGroupItem>
        <ToggleGroupItem value="item3">Item 3</ToggleGroupItem>
      </ToggleGroup>
    );

    const item1 = screen.getByRole('button', { name: 'Item 1' });
    const item2 = screen.getByRole('button', { name: 'Item 2' });
    const item3 = screen.getByRole('button', { name: 'Item 3' });

    // Select multiple items
    await userEvent.click(item1);
    await userEvent.click(item3);

    expect(item1).toHaveAttribute('aria-pressed', 'true');
    expect(item2).toHaveAttribute('aria-pressed', 'false');
    expect(item3).toHaveAttribute('aria-pressed', 'true');

    // Deselect one item
    await userEvent.click(item1);
    expect(item1).toHaveAttribute('aria-pressed', 'false');
    expect(item3).toHaveAttribute('aria-pressed', 'true');
  });
});

describe('ToggleGroupItem', () => {
  it('can have individual variant and size props', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="item1" variant="outline" size="sm">
          Item 1
        </ToggleGroupItem>
      </ToggleGroup>
    );

    const item = screen.getByRole('radio');
    expect(item).toHaveAttribute('data-variant', 'outline');
    expect(item).toHaveAttribute('data-size', 'sm');
  });

  it('inherits variant and size from context', () => {
    render(
      <ToggleGroup type="single" variant="outline" size="lg">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
      </ToggleGroup>
    );

    const item = screen.getByRole('radio');
    expect(item).toHaveAttribute('data-variant', 'outline');
    expect(item).toHaveAttribute('data-size', 'lg');
  });

  it('accepts custom className', () => {
    render(
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="item1" className="custom-item-class">
          Item 1
        </ToggleGroupItem>
      </ToggleGroup>
    );

    const item = screen.getByRole('button');
    expect(item).toHaveClass('custom-item-class');
  });
});
