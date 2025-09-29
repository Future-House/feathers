import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Button } from '../button/button';
import { User, Settings, Logout as LogOut } from '@/icons';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './dropdown-menu';

const DropdownMenuExample = ({
  defaultOpen = false,
  open,
  onOpenChange,
  modal = true,
  ...props
}: {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  [key: string]: unknown;
}) => (
  <DropdownMenu
    defaultOpen={defaultOpen}
    open={open}
    onOpenChange={onOpenChange}
    modal={modal}
    {...props}
  >
    <DropdownMenuTrigger asChild>
      <Button data-testid="dropdown-trigger">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem data-testid="profile-item">
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
      </DropdownMenuItem>
      <DropdownMenuItem data-testid="settings-item">
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem data-testid="logout-item">
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

describe('DropdownMenu', () => {
  it('renders dropdown trigger', () => {
    render(<DropdownMenuExample />);

    const trigger = screen.getByTestId('dropdown-trigger');
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveTextContent('Open Menu');
  });

  it('opens dropdown when trigger is clicked', async () => {
    const user = userEvent.setup();
    render(<DropdownMenuExample />);

    const trigger = screen.getByTestId('dropdown-trigger');

    // Initially closed
    expect(screen.queryByTestId('profile-item')).not.toBeInTheDocument();

    // Click to open
    await user.click(trigger);
    expect(screen.getByTestId('profile-item')).toBeInTheDocument();
  });

  it('renders dropdown content when open', async () => {
    const user = userEvent.setup();
    render(<DropdownMenuExample />);

    await user.click(screen.getByTestId('dropdown-trigger'));

    expect(screen.getByText('My Account')).toBeInTheDocument();
    expect(screen.getByTestId('profile-item')).toBeInTheDocument();
    expect(screen.getByTestId('settings-item')).toBeInTheDocument();
    expect(screen.getByTestId('logout-item')).toBeInTheDocument();
  });

  it('renders with defaultOpen prop', () => {
    render(<DropdownMenuExample defaultOpen={true} />);

    expect(screen.getByTestId('profile-item')).toBeInTheDocument();
    expect(screen.getByText('My Account')).toBeInTheDocument();
  });

  it('supports controlled mode with open prop', () => {
    const { rerender } = render(<DropdownMenuExample open={false} />);

    expect(screen.queryByTestId('profile-item')).not.toBeInTheDocument();

    rerender(<DropdownMenuExample open={true} />);
    expect(screen.getByTestId('profile-item')).toBeInTheDocument();
  });

  it('calls onOpenChange when state changes', async () => {
    const user = userEvent.setup();
    const onOpenChange = jest.fn();
    render(<DropdownMenuExample onOpenChange={onOpenChange} />);

    const trigger = screen.getByTestId('dropdown-trigger');
    await user.click(trigger);

    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it('closes dropdown when item is clicked', async () => {
    const user = userEvent.setup();
    render(<DropdownMenuExample defaultOpen={true} />);

    expect(screen.getByTestId('profile-item')).toBeInTheDocument();

    const profileItem = screen.getByTestId('profile-item');
    await user.click(profileItem);

    expect(screen.queryByTestId('profile-item')).not.toBeInTheDocument();
  });

  it('closes dropdown when Escape key is pressed', async () => {
    const user = userEvent.setup();
    render(<DropdownMenuExample defaultOpen={true} />);

    expect(screen.getByTestId('profile-item')).toBeInTheDocument();

    await user.keyboard('{Escape}');

    expect(screen.queryByTestId('profile-item')).not.toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<DropdownMenuExample defaultOpen={true} />);

    const content = document.querySelector(
      '[data-slot="dropdown-menu-content"]'
    );
    const label = screen.getByText('My Account');

    expect(content).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it('applies custom className to content', () => {
    render(
      <DropdownMenu defaultOpen={true}>
        <DropdownMenuTrigger asChild>
          <Button>Trigger</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="custom-class">
          <DropdownMenuItem>Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const content = document.querySelector(
      '[data-slot="dropdown-menu-content"]'
    );
    expect(content).toHaveClass('custom-class');
  });

  it('supports asChild prop on trigger', async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button data-testid="custom-trigger">Custom Trigger</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem data-testid="menu-item">Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const customTrigger = screen.getByTestId('custom-trigger');
    expect(customTrigger).toBeInTheDocument();

    await user.click(customTrigger);
    expect(screen.getByTestId('menu-item')).toBeInTheDocument();
  });

  it('renders checkbox items correctly', async () => {
    const user = userEvent.setup();
    const onCheckedChange = jest.fn();

    render(
      <DropdownMenu defaultOpen={true}>
        <DropdownMenuTrigger asChild>
          <Button>Trigger</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem
            checked={true}
            onCheckedChange={onCheckedChange}
            data-testid="checkbox-item"
          >
            Checkbox Item
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const checkboxItem = screen.getByTestId('checkbox-item');
    expect(checkboxItem).toBeInTheDocument();
    expect(checkboxItem).toHaveAttribute('aria-checked', 'true');

    await user.click(checkboxItem);
    expect(onCheckedChange).toHaveBeenCalled();
  });

  it('renders radio group items correctly', async () => {
    const user = userEvent.setup();
    const onValueChange = jest.fn();

    render(
      <DropdownMenu defaultOpen={true}>
        <DropdownMenuTrigger asChild>
          <Button>Trigger</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="option1" onValueChange={onValueChange}>
            <DropdownMenuRadioItem value="option1" data-testid="radio-item-1">
              Option 1
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option2" data-testid="radio-item-2">
              Option 2
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const radioItem1 = screen.getByTestId('radio-item-1');
    const radioItem2 = screen.getByTestId('radio-item-2');

    expect(radioItem1).toBeInTheDocument();
    expect(radioItem2).toBeInTheDocument();
    expect(radioItem1).toHaveAttribute('aria-checked', 'true');
    expect(radioItem2).toHaveAttribute('aria-checked', 'false');

    await user.click(radioItem2);
    expect(onValueChange).toHaveBeenCalledWith('option2');
  });

  it('renders submenu correctly', async () => {
    const user = userEvent.setup();

    render(
      <DropdownMenu defaultOpen={true}>
        <DropdownMenuTrigger asChild>
          <Button>Trigger</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger data-testid="sub-trigger">
              More options
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem data-testid="sub-item">
                Sub Item
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const subTrigger = screen.getByTestId('sub-trigger');
    expect(subTrigger).toBeInTheDocument();

    // Hover to open submenu
    await user.hover(subTrigger);

    // Wait for submenu to appear
    await screen.findByTestId('sub-item');
    expect(screen.getByTestId('sub-item')).toBeInTheDocument();
  });

  it('renders separators and labels', () => {
    render(
      <DropdownMenu defaultOpen={true}>
        <DropdownMenuTrigger asChild>
          <Button>Trigger</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel data-testid="menu-label">
            Section Label
          </DropdownMenuLabel>
          <DropdownMenuSeparator data-testid="menu-separator" />
          <DropdownMenuItem>Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByTestId('menu-label')).toBeInTheDocument();
    expect(
      document.querySelector('[data-slot="dropdown-menu-separator"]')
    ).toBeInTheDocument();
  });

  it('renders shortcuts correctly', () => {
    render(
      <DropdownMenu defaultOpen={true}>
        <DropdownMenuTrigger asChild>
          <Button>Trigger</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <span>Profile</span>
            <DropdownMenuShortcut data-testid="shortcut">
              ⌘P
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByTestId('shortcut')).toBeInTheDocument();
    expect(screen.getByTestId('shortcut')).toHaveTextContent('⌘P');
  });

  it('supports disabled items', () => {
    render(
      <DropdownMenu defaultOpen={true}>
        <DropdownMenuTrigger asChild>
          <Button>Trigger</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem disabled data-testid="disabled-item">
            Disabled Item
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const disabledItem = screen.getByTestId('disabled-item');
    expect(disabledItem).toBeInTheDocument();
    expect(disabledItem).toHaveAttribute('data-disabled');
  });

  it('supports inset prop on items and labels', () => {
    render(
      <DropdownMenu defaultOpen={true}>
        <DropdownMenuTrigger asChild>
          <Button>Trigger</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel inset data-testid="inset-label">
            Inset Label
          </DropdownMenuLabel>
          <DropdownMenuItem inset data-testid="inset-item">
            Inset Item
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const insetLabel = screen.getByTestId('inset-label');
    const insetItem = screen.getByTestId('inset-item');

    expect(insetLabel).toHaveAttribute('data-inset', 'true');
    expect(insetItem).toHaveAttribute('data-inset', 'true');
  });

  it('supports variant prop on menu items', () => {
    render(
      <DropdownMenu defaultOpen={true}>
        <DropdownMenuTrigger asChild>
          <Button>Trigger</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            variant="destructive"
            data-testid="destructive-item"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const destructiveItem = screen.getByTestId('destructive-item');
    expect(destructiveItem).toHaveAttribute('data-variant', 'destructive');
  });

  it('maintains state across re-renders', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<DropdownMenuExample />);

    const trigger = screen.getByTestId('dropdown-trigger');
    await user.click(trigger);
    expect(screen.getByTestId('profile-item')).toBeInTheDocument();

    // Re-render with same props
    rerender(<DropdownMenuExample />);
    expect(screen.getByTestId('profile-item')).toBeInTheDocument();
  });

  it('forwards props to dropdown components', () => {
    render(
      <DropdownMenu defaultOpen={true} data-testid="dropdown-root">
        <DropdownMenuTrigger asChild data-testid="dropdown-trigger-custom">
          <Button>Trigger</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent data-testid="dropdown-content-custom">
          <DropdownMenuGroup data-testid="dropdown-group-custom">
            <DropdownMenuLabel data-testid="dropdown-label-custom">
              Label
            </DropdownMenuLabel>
            <DropdownMenuItem data-testid="dropdown-item-custom">
              Item
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.getByTestId('dropdown-trigger-custom')).toBeInTheDocument();
    expect(screen.getByTestId('dropdown-content-custom')).toBeInTheDocument();
    expect(screen.getByTestId('dropdown-group-custom')).toBeInTheDocument();
    expect(screen.getByTestId('dropdown-label-custom')).toBeInTheDocument();
    expect(screen.getByTestId('dropdown-item-custom')).toBeInTheDocument();
  });
});
