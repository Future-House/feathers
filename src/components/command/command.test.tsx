import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from './command';

// Mock scrollIntoView which is not implemented in JSDOM
Object.defineProperty(Element.prototype, 'scrollIntoView', {
  value: jest.fn(),
  writable: true,
});

describe('Command', () => {
  it('renders basic command structure', () => {
    render(
      <Command>
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem>Test Item</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    expect(
      screen.getByPlaceholderText('Type a command...')
    ).toBeInTheDocument();
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Command className="custom-command">
        <CommandList>
          <CommandItem>Test</CommandItem>
        </CommandList>
      </Command>
    );

    const command = document.querySelector('[data-slot="command"]');
    expect(command).toHaveClass('custom-command');
  });

  it('has correct data attributes', () => {
    render(
      <Command>
        <CommandList>
          <CommandItem>Test</CommandItem>
        </CommandList>
      </Command>
    );

    const command = document.querySelector('[data-slot="command"]');
    expect(command).toHaveAttribute('data-slot', 'command');
  });
});

describe('CommandInput', () => {
  it('renders with placeholder', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
      </Command>
    );

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('accepts user input', async () => {
    const user = userEvent.setup();
    render(
      <Command>
        <CommandInput placeholder="Search..." />
      </Command>
    );

    const input = screen.getByPlaceholderText('Search...');
    await user.type(input, 'test query');

    expect(input).toHaveValue('test query');
  });

  it('has search icon', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
      </Command>
    );

    const searchIcon = document.querySelector('svg');
    expect(searchIcon).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." className="custom-input" />
      </Command>
    );

    const input = screen.getByPlaceholderText('Search...');
    expect(input).toHaveClass('custom-input');
  });

  it('has correct data attributes', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
      </Command>
    );

    const input = screen.getByPlaceholderText('Search...');
    expect(input).toHaveAttribute('data-slot', 'command-input');
  });
});

describe('CommandList', () => {
  it('renders children correctly', () => {
    render(
      <Command>
        <CommandList>
          <CommandItem>Item 1</CommandItem>
          <CommandItem>Item 2</CommandItem>
        </CommandList>
      </Command>
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Command>
        <CommandList className="custom-list">
          <CommandItem>Test</CommandItem>
        </CommandList>
      </Command>
    );

    const list = screen.getByRole('listbox');
    expect(list).toHaveClass('custom-list');
  });

  it('has correct data attributes', () => {
    render(
      <Command>
        <CommandList>
          <CommandItem>Test</CommandItem>
        </CommandList>
      </Command>
    );

    const list = screen.getByRole('listbox');
    expect(list).toHaveAttribute('data-slot', 'command-list');
  });
});

describe('CommandEmpty', () => {
  it('displays empty message when no items match', async () => {
    const user = userEvent.setup();
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem>Visible Item</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    const input = screen.getByPlaceholderText('Search...');
    await user.type(input, 'nonexistent');

    await waitFor(() => {
      expect(screen.getByText('No results found.')).toBeInTheDocument();
    });
  });

  it('has correct data attributes', () => {
    render(
      <Command>
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </Command>
    );

    const empty = screen.getByText('No results found.');
    expect(empty).toHaveAttribute('data-slot', 'command-empty');
  });
});

describe('CommandGroup', () => {
  it('renders with heading', () => {
    render(
      <Command>
        <CommandList>
          <CommandGroup heading="Test Group">
            <CommandItem>Item 1</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    expect(screen.getByText('Test Group')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('renders without heading', () => {
    render(
      <Command>
        <CommandList>
          <CommandGroup>
            <CommandItem>Item 1</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Command>
        <CommandList>
          <CommandGroup className="custom-group">
            <CommandItem>Test</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    const group = document.querySelector('[data-slot="command-group"]');
    expect(group).toHaveClass('custom-group');
  });

  it('has correct data attributes', () => {
    render(
      <Command>
        <CommandList>
          <CommandGroup>
            <CommandItem>Test</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    const group = document.querySelector('[data-slot="command-group"]');
    expect(group).toHaveAttribute('data-slot', 'command-group');
  });
});

describe('CommandItem', () => {
  it('renders item text', () => {
    render(
      <Command>
        <CommandList>
          <CommandGroup>
            <CommandItem>Test Item</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const onSelect = jest.fn();
    const user = userEvent.setup();

    render(
      <Command>
        <CommandList>
          <CommandGroup>
            <CommandItem onSelect={onSelect}>Clickable Item</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    const item = screen.getByText('Clickable Item');
    await user.click(item);

    expect(onSelect).toHaveBeenCalled();
  });

  it('supports disabled state', () => {
    render(
      <Command>
        <CommandList>
          <CommandGroup>
            <CommandItem disabled>Disabled Item</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    const item = screen.getByText('Disabled Item');
    expect(item).toHaveAttribute('data-disabled', 'true');
  });

  it('applies custom className', () => {
    render(
      <Command>
        <CommandList>
          <CommandGroup>
            <CommandItem className="custom-item">Test</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    const item = screen.getByText('Test');
    expect(item).toHaveClass('custom-item');
  });

  it('has correct data attributes', () => {
    render(
      <Command>
        <CommandList>
          <CommandGroup>
            <CommandItem>Test</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    const item = screen.getByText('Test');
    expect(item).toHaveAttribute('data-slot', 'command-item');
  });
});

describe('CommandShortcut', () => {
  it('renders shortcut text', () => {
    render(
      <Command>
        <CommandList>
          <CommandGroup>
            <CommandItem>
              Test Item
              <CommandShortcut>⌘K</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    expect(screen.getByText('⌘K')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Command>
        <CommandList>
          <CommandGroup>
            <CommandItem>
              Test
              <CommandShortcut className="custom-shortcut">⌘K</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    const shortcut = screen.getByText('⌘K');
    expect(shortcut).toHaveClass('custom-shortcut');
  });

  it('has correct data attributes', () => {
    render(
      <Command>
        <CommandList>
          <CommandGroup>
            <CommandItem>
              Test
              <CommandShortcut>⌘K</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    const shortcut = screen.getByText('⌘K');
    expect(shortcut).toHaveAttribute('data-slot', 'command-shortcut');
  });
});

describe('CommandSeparator', () => {
  it('renders separator', () => {
    render(
      <Command>
        <CommandList>
          <CommandGroup>
            <CommandItem>Item 1</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup>
            <CommandItem>Item 2</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    const separator = document.querySelector('[data-slot="command-separator"]');
    expect(separator).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Command>
        <CommandList>
          <CommandSeparator className="custom-separator" />
        </CommandList>
      </Command>
    );

    const separator = document.querySelector('[data-slot="command-separator"]');
    expect(separator).toHaveClass('custom-separator');
  });
});

describe('CommandDialog', () => {
  it('renders when open', () => {
    render(
      <CommandDialog open>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Test Item</CommandItem>
        </CommandList>
      </CommandDialog>
    );

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(
      <CommandDialog open={false}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Test Item</CommandItem>
        </CommandList>
      </CommandDialog>
    );

    expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Item')).not.toBeInTheDocument();
  });

  it('calls onOpenChange when closed', async () => {
    const onOpenChange = jest.fn();
    const user = userEvent.setup();

    render(
      <CommandDialog open onOpenChange={onOpenChange}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Test Item</CommandItem>
        </CommandList>
      </CommandDialog>
    );

    // Click the close button
    const closeButton = screen.getByRole('button', { name: /close/i });
    await user.click(closeButton);

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('renders custom title and description', () => {
    render(
      <CommandDialog open title="Custom Title" description="Custom Description">
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Test Item</CommandItem>
        </CommandList>
      </CommandDialog>
    );

    // Title and description are screen reader only
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom Description')).toBeInTheDocument();
  });

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup();
    render(
      <CommandDialog open>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandGroup>
            <CommandItem>Item 1</CommandItem>
            <CommandItem>Item 2</CommandItem>
            <CommandItem>Item 3</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    );

    const input = screen.getByPlaceholderText('Search...');
    await user.click(input);

    // Navigate with arrow keys
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{ArrowDown}');

    // Should be able to navigate through items
    expect(document.activeElement).toBeTruthy();
  });
});

describe('Command integration', () => {
  it('filters items based on search input', async () => {
    const user = userEvent.setup();
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem>Apple</CommandItem>
            <CommandItem>Banana</CommandItem>
            <CommandItem>Orange</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    const input = screen.getByPlaceholderText('Search...');
    await user.type(input, 'apple');

    await waitFor(() => {
      expect(screen.getByText('Apple')).toBeInTheDocument();
      expect(screen.queryByText('Banana')).not.toBeInTheDocument();
      expect(screen.queryByText('Orange')).not.toBeInTheDocument();
    });
  });

  it('shows empty state when no items match', async () => {
    const user = userEvent.setup();
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem>Apple</CommandItem>
            <CommandItem>Banana</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    const input = screen.getByPlaceholderText('Search...');
    await user.type(input, 'xyz');

    await waitFor(() => {
      expect(screen.getByText('No results found.')).toBeInTheDocument();
      expect(screen.queryByText('Apple')).not.toBeInTheDocument();
      expect(screen.queryByText('Banana')).not.toBeInTheDocument();
    });
  });

  it('supports complex layouts with multiple groups and separators', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandGroup heading="Fruits">
            <CommandItem>Apple</CommandItem>
            <CommandItem>Banana</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Vegetables">
            <CommandItem>Carrot</CommandItem>
            <CommandItem>Potato</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    expect(screen.getByText('Fruits')).toBeInTheDocument();
    expect(screen.getByText('Vegetables')).toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Carrot')).toBeInTheDocument();
  });
});
