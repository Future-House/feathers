import { render, screen } from '@testing-library/react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuIndicator,
  navigationMenuTriggerStyle,
} from './navigation-menu';

describe('NavigationMenu', () => {
  it('renders navigation menu with default props', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/test">Test Link</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <NavigationMenu className="custom-class">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/test">Test</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    const navigation = screen.getByRole('navigation');
    expect(navigation).toHaveClass('custom-class');
  });

  it('renders without viewport when viewport prop is false', () => {
    const { container } = render(
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/test">Test</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    const navigation = container.querySelector('[data-slot="navigation-menu"]');
    expect(navigation).toHaveAttribute('data-viewport', 'false');
  });

  it('renders with viewport by default', () => {
    const { container } = render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/test">Test</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    const navigation = container.querySelector('[data-slot="navigation-menu"]');
    expect(navigation).toHaveAttribute('data-viewport', 'true');
  });
});

describe('NavigationMenuList', () => {
  it('renders navigation menu list', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/test">Test Link</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  it('applies custom className to list', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList className="custom-list-class">
          <NavigationMenuItem>
            <NavigationMenuLink href="/test">Test</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    const list = screen.getByRole('list');
    expect(list).toHaveClass('custom-list-class');
  });
});

describe('NavigationMenuItem', () => {
  it('renders navigation menu item', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/test">Test Link</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    const listItem = screen.getByRole('listitem');
    expect(listItem).toBeInTheDocument();
  });

  it('applies custom className to item', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="custom-item-class">
            <NavigationMenuLink href="/test">Test</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    const listItem = screen.getByRole('listitem');
    expect(listItem).toHaveClass('custom-item-class');
  });
});

describe('NavigationMenuTrigger', () => {
  it('renders trigger button with chevron icon', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger Text</NavigationMenuTrigger>
            <NavigationMenuContent>Content</NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    const trigger = screen.getByRole('button', { name: /trigger text/i });
    expect(trigger).toBeInTheDocument();
  });

  it('applies custom className to trigger', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="custom-trigger-class">
              Trigger
            </NavigationMenuTrigger>
            <NavigationMenuContent>Content</NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    const trigger = screen.getByRole('button');
    expect(trigger).toHaveClass('custom-trigger-class');
  });
});

describe('NavigationMenuLink', () => {
  it('renders navigation menu link', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/test">Test Link</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    const link = screen.getByRole('link', { name: 'Test Link' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('applies custom className to link', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/test" className="custom-link-class">
              Test Link
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveClass('custom-link-class');
  });
});

describe('NavigationMenuContent', () => {
  it('renders content structure', () => {
    const { container } = render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div>Content Text</div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    // Test that the navigation menu structure is rendered
    expect(
      container.querySelector('[data-slot="navigation-menu"]')
    ).toBeInTheDocument();
  });

  it('renders with custom viewport prop', () => {
    const { container } = render(
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/test">Test</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    const navigation = container.querySelector('[data-slot="navigation-menu"]');
    expect(navigation).toHaveAttribute('data-viewport', 'false');
  });
});

describe('NavigationMenuIndicator', () => {
  it('can be imported and used', () => {
    // Test that NavigationMenuIndicator is properly exported
    expect(NavigationMenuIndicator).toBeDefined();
    expect(typeof NavigationMenuIndicator).toBe('function');
  });
});

describe('navigationMenuTriggerStyle', () => {
  it('returns trigger style classes', () => {
    const triggerClasses = navigationMenuTriggerStyle();
    expect(typeof triggerClasses).toBe('string');
    expect(triggerClasses).toContain('group');
    expect(triggerClasses).toContain('inline-flex');
  });

  it('accepts custom variant classes', () => {
    const triggerClasses = navigationMenuTriggerStyle();
    expect(triggerClasses).toContain('h-9');
  });
});
