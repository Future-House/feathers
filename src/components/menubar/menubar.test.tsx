import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
  MenubarLabel,
  MenubarShortcut,
} from './menubar';

describe('Menubar', () => {
  it('renders menubar element', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );

    const menubar = screen.getByRole('menubar');
    expect(menubar).toBeInTheDocument();
    expect(menubar).toHaveAttribute('data-slot', 'menubar');
  });

  it('applies custom className', () => {
    render(
      <Menubar className="custom-class">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );

    const menubar = screen.getByRole('menubar');
    expect(menubar).toHaveClass('custom-class');
  });

  it('applies default styling classes', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );

    const menubar = screen.getByRole('menubar');
    expect(menubar).toHaveClass(
      'bg-background',
      'flex',
      'h-9',
      'items-center',
      'gap-1',
      'rounded-md',
      'border',
      'p-1',
      'shadow-xs'
    );
  });

  it('renders menu triggers', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Cut</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );

    expect(screen.getByRole('menuitem', { name: 'File' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Edit' })).toBeInTheDocument();
  });

  it('handles menu trigger attributes correctly', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
            <MenubarItem>Open File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );

    const fileTrigger = screen.getByRole('menuitem', { name: 'File' });
    expect(fileTrigger).toBeInTheDocument();
    expect(fileTrigger).toHaveAttribute('aria-haspopup', 'menu');
    expect(fileTrigger).toHaveAttribute('data-slot', 'menubar-trigger');
  });

  it('renders with proper structure and data attributes', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New File
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );

    const fileTrigger = screen.getByRole('menuitem', { name: 'File' });
    expect(fileTrigger).toBeInTheDocument();
    expect(fileTrigger).toHaveAttribute('data-slot', 'menubar-trigger');
  });

  it('applies trigger styling classes', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );

    const fileTrigger = screen.getByRole('menuitem', { name: 'File' });
    expect(fileTrigger).toHaveClass(
      'flex',
      'items-center',
      'rounded-sm',
      'px-2',
      'py-1',
      'text-sm',
      'font-medium',
      'select-none'
    );
  });

  it('supports custom trigger className', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="custom-trigger">File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );

    const fileTrigger = screen.getByRole('menuitem', { name: 'File' });
    expect(fileTrigger).toHaveClass('custom-trigger');
  });

  it('renders component structure correctly', () => {
    // Test the basic component structure without requiring menu context
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
            <MenubarSeparator />
            <MenubarLabel>Recent Files</MenubarLabel>
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );

    const menubar = screen.getByRole('menubar');
    const trigger = screen.getByRole('menuitem', { name: 'File' });

    expect(menubar).toHaveAttribute('data-slot', 'menubar');
    expect(trigger).toHaveAttribute('data-slot', 'menubar-trigger');
  });

  it('applies proper styling to shortcuts', () => {
    const { container } = render(
      <MenubarShortcut data-testid="shortcut">⌘N</MenubarShortcut>
    );

    const shortcut = container.querySelector('[data-testid="shortcut"]');
    expect(shortcut).toHaveClass(
      'text-muted-foreground',
      'ml-auto',
      'text-xs',
      'tracking-widest'
    );
  });

  it('maintains accessibility with proper roles', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );

    const menubar = screen.getByRole('menubar');
    const trigger = screen.getByRole('menuitem', { name: 'File' });

    expect(menubar).toBeInTheDocument();
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
  });
});
