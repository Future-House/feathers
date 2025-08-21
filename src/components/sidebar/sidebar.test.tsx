import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from './sidebar';

// Mock the useIsMobile hook
jest.mock('@/hooks/use-mobile', () => ({
  useIsMobile: jest.fn(() => false),
}));

const TestSidebarProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof SidebarProvider>) => (
  <SidebarProvider {...props}>
    <div className="flex min-h-screen w-full">{children}</div>
  </SidebarProvider>
);

describe('SidebarProvider', () => {
  it('renders correctly with default props', () => {
    render(
      <TestSidebarProvider>
        <div data-testid="sidebar-content">Test Content</div>
      </TestSidebarProvider>
    );

    expect(screen.getByTestId('sidebar-content')).toBeInTheDocument();
  });

  it('applies default open state', () => {
    render(
      <TestSidebarProvider>
        <Sidebar data-testid="sidebar">
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveAttribute('data-state', 'expanded');
  });

  it('respects controlled open state', () => {
    render(
      <TestSidebarProvider open={false}>
        <Sidebar data-testid="sidebar">
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveAttribute('data-state', 'collapsed');
  });

  it('calls onOpenChange when controlled', async () => {
    const onOpenChange = jest.fn();
    render(
      <TestSidebarProvider open={true} onOpenChange={onOpenChange}>
        <Sidebar>
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
        <SidebarTrigger data-testid="trigger" />
      </TestSidebarProvider>
    );

    await userEvent.click(screen.getByTestId('trigger'));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});

describe('Sidebar', () => {
  it('renders with different variants', () => {
    const { rerender } = render(
      <TestSidebarProvider>
        <Sidebar variant="sidebar" data-testid="sidebar">
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    let sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveAttribute('data-variant', 'sidebar');

    rerender(
      <TestSidebarProvider>
        <Sidebar variant="floating" data-testid="sidebar">
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveAttribute('data-variant', 'floating');

    rerender(
      <TestSidebarProvider>
        <Sidebar variant="inset" data-testid="sidebar">
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveAttribute('data-variant', 'inset');
  });

  it('renders with different sides', () => {
    const { rerender } = render(
      <TestSidebarProvider>
        <Sidebar side="left" data-testid="sidebar">
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    let sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveAttribute('data-side', 'left');

    rerender(
      <TestSidebarProvider>
        <Sidebar side="right" data-testid="sidebar">
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveAttribute('data-side', 'right');
  });

  it('renders with different collapsible modes', () => {
    const { rerender } = render(
      <TestSidebarProvider>
        <Sidebar collapsible="offcanvas" data-testid="sidebar">
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    let sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveAttribute('data-collapsible', '');

    rerender(
      <TestSidebarProvider defaultOpen={false}>
        <Sidebar collapsible="icon" data-testid="sidebar">
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveAttribute('data-collapsible', 'icon');
  });
});

describe('SidebarTrigger', () => {
  it('renders correctly', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
        <SidebarTrigger data-testid="trigger" />
      </TestSidebarProvider>
    );

    const trigger = screen.getByTestId('trigger');
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute('data-sidebar', 'trigger');
  });

  it('toggles sidebar when clicked', async () => {
    render(
      <TestSidebarProvider>
        <Sidebar data-testid="sidebar">
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
        <SidebarTrigger data-testid="trigger" />
      </TestSidebarProvider>
    );

    const sidebar = screen.getByTestId('sidebar');
    const trigger = screen.getByTestId('trigger');

    expect(sidebar).toHaveAttribute('data-state', 'expanded');

    await userEvent.click(trigger);
    expect(sidebar).toHaveAttribute('data-state', 'collapsed');

    await userEvent.click(trigger);
    expect(sidebar).toHaveAttribute('data-state', 'expanded');
  });
});

describe('SidebarHeader', () => {
  it('renders correctly', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarHeader data-testid="header">Header Content</SidebarHeader>
        </Sidebar>
      </TestSidebarProvider>
    );

    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveAttribute('data-sidebar', 'header');
    expect(header).toHaveTextContent('Header Content');
  });
});

describe('SidebarContent', () => {
  it('renders correctly', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent data-testid="content">Main Content</SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const content = screen.getByTestId('content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveAttribute('data-sidebar', 'content');
    expect(content).toHaveTextContent('Main Content');
  });
});

describe('SidebarFooter', () => {
  it('renders correctly', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarFooter data-testid="footer">Footer Content</SidebarFooter>
        </Sidebar>
      </TestSidebarProvider>
    );

    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveAttribute('data-sidebar', 'footer');
    expect(footer).toHaveTextContent('Footer Content');
  });
});

describe('SidebarGroup', () => {
  it('renders correctly', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup data-testid="group">Group Content</SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const group = screen.getByTestId('group');
    expect(group).toBeInTheDocument();
    expect(group).toHaveAttribute('data-sidebar', 'group');
    expect(group).toHaveTextContent('Group Content');
  });
});

describe('SidebarGroupLabel', () => {
  it('renders correctly', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel data-testid="group-label">
                Group Label
              </SidebarGroupLabel>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const label = screen.getByTestId('group-label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('data-sidebar', 'group-label');
    expect(label).toHaveTextContent('Group Label');
  });

  it('renders as child component when asChild is true', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <h3 data-testid="group-label">Group Label</h3>
              </SidebarGroupLabel>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const label = screen.getByTestId('group-label');
    expect(label).toBeInTheDocument();
    expect(label.tagName).toBe('H3');
    expect(label).toHaveTextContent('Group Label');
  });
});

describe('SidebarGroupAction', () => {
  it('renders correctly', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupAction data-testid="group-action">
                Action
              </SidebarGroupAction>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const action = screen.getByTestId('group-action');
    expect(action).toBeInTheDocument();
    expect(action).toHaveAttribute('data-sidebar', 'group-action');
    expect(action).toHaveTextContent('Action');
  });

  it('can be clicked', async () => {
    const onClick = jest.fn();
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupAction data-testid="group-action" onClick={onClick}>
                Action
              </SidebarGroupAction>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const action = screen.getByTestId('group-action');
    await userEvent.click(action);
    expect(onClick).toHaveBeenCalled();
  });
});

describe('SidebarMenu', () => {
  it('renders correctly', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu data-testid="menu">
                <SidebarMenuItem>Item</SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const menu = screen.getByTestId('menu');
    expect(menu).toBeInTheDocument();
    expect(menu).toHaveAttribute('data-sidebar', 'menu');
    expect(menu.tagName).toBe('UL');
  });
});

describe('SidebarMenuItem', () => {
  it('renders correctly', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem data-testid="menu-item">
                  Item Content
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const item = screen.getByTestId('menu-item');
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute('data-sidebar', 'menu-item');
    expect(item.tagName).toBe('LI');
    expect(item).toHaveTextContent('Item Content');
  });
});

describe('SidebarMenuButton', () => {
  it('renders correctly', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton data-testid="menu-button">
                    Button Text
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const button = screen.getByTestId('menu-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('data-sidebar', 'menu-button');
    expect(button).toHaveTextContent('Button Text');
  });

  it('supports different variants', () => {
    const { rerender } = render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    variant="default"
                    data-testid="menu-button"
                  >
                    Button
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    let button = screen.getByTestId('menu-button');
    expect(button).toBeInTheDocument();

    rerender(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    variant="outline"
                    data-testid="menu-button"
                  >
                    Button
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    button = screen.getByTestId('menu-button');
    expect(button).toBeInTheDocument();
  });

  it('supports different sizes', () => {
    const { rerender } = render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton size="sm" data-testid="menu-button">
                    Button
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    let button = screen.getByTestId('menu-button');
    expect(button).toHaveAttribute('data-size', 'sm');

    rerender(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton size="lg" data-testid="menu-button">
                    Button
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    button = screen.getByTestId('menu-button');
    expect(button).toHaveAttribute('data-size', 'lg');
  });

  it('supports active state', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive data-testid="menu-button">
                    Button
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const button = screen.getByTestId('menu-button');
    expect(button).toHaveAttribute('data-active', 'true');
  });

  it('renders as child component when asChild is true', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" data-testid="menu-button">
                      Link Button
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const button = screen.getByTestId('menu-button');
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('A');
    expect(button).toHaveTextContent('Link Button');
  });
});

describe('SidebarMenuBadge', () => {
  it('renders correctly', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    Button
                    <SidebarMenuBadge data-testid="menu-badge">
                      5
                    </SidebarMenuBadge>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const badge = screen.getByTestId('menu-badge');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute('data-sidebar', 'menu-badge');
    expect(badge).toHaveTextContent('5');
  });
});

describe('SidebarMenuAction', () => {
  it('renders correctly', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>Button</SidebarMenuButton>
                  <SidebarMenuAction data-testid="menu-action">
                    Action
                  </SidebarMenuAction>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const action = screen.getByTestId('menu-action');
    expect(action).toBeInTheDocument();
    expect(action).toHaveAttribute('data-sidebar', 'menu-action');
    expect(action).toHaveTextContent('Action');
  });

  it('can be clicked', async () => {
    const onClick = jest.fn();
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>Button</SidebarMenuButton>
                  <SidebarMenuAction
                    data-testid="menu-action"
                    onClick={onClick}
                  >
                    Action
                  </SidebarMenuAction>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const action = screen.getByTestId('menu-action');
    await userEvent.click(action);
    expect(onClick).toHaveBeenCalled();
  });
});

describe('SidebarMenuSkeleton', () => {
  it('renders correctly', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuSkeleton data-testid="menu-skeleton" />
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const skeleton = screen.getByTestId('menu-skeleton');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveAttribute('data-sidebar', 'menu-skeleton');
  });

  it('renders with icon when showIcon is true', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuSkeleton showIcon data-testid="menu-skeleton" />
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const skeleton = screen.getByTestId('menu-skeleton');
    const iconSkeleton = skeleton.querySelector(
      '[data-sidebar="menu-skeleton-icon"]'
    );
    expect(iconSkeleton).toBeInTheDocument();
  });
});

describe('SidebarInput', () => {
  it('renders correctly', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <SidebarInput data-testid="sidebar-input" placeholder="Search..." />
          </SidebarHeader>
        </Sidebar>
      </TestSidebarProvider>
    );

    const input = screen.getByTestId('sidebar-input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-sidebar', 'input');
    expect(input).toHaveAttribute('placeholder', 'Search...');
  });

  it('can be typed in', async () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <SidebarInput data-testid="sidebar-input" placeholder="Search..." />
          </SidebarHeader>
        </Sidebar>
      </TestSidebarProvider>
    );

    const input = screen.getByTestId('sidebar-input');
    await userEvent.type(input, 'test search');
    expect(input).toHaveValue('test search');
  });
});

describe('SidebarSeparator', () => {
  it('renders correctly', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarSeparator data-testid="separator" />
          </SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const separator = screen.getByTestId('separator');
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute('data-sidebar', 'separator');
  });
});

describe('SidebarInset', () => {
  it('renders correctly', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
        <SidebarInset data-testid="inset">Main Content</SidebarInset>
      </TestSidebarProvider>
    );

    const inset = screen.getByTestId('inset');
    expect(inset).toBeInTheDocument();
    expect(inset).toHaveTextContent('Main Content');
    expect(inset.tagName).toBe('MAIN');
  });
});

describe('SidebarRail', () => {
  it('renders correctly', () => {
    render(
      <TestSidebarProvider>
        <Sidebar>
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
        <SidebarRail data-testid="rail" />
      </TestSidebarProvider>
    );

    const rail = screen.getByTestId('rail');
    expect(rail).toBeInTheDocument();
    expect(rail).toHaveAttribute('data-sidebar', 'rail');
    expect(rail).toHaveAttribute('aria-label', 'Toggle Sidebar');
  });

  it('can be clicked to toggle sidebar', async () => {
    render(
      <TestSidebarProvider>
        <Sidebar data-testid="sidebar">
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
        <SidebarRail data-testid="rail" />
      </TestSidebarProvider>
    );

    const sidebar = screen.getByTestId('sidebar');
    const rail = screen.getByTestId('rail');

    expect(sidebar).toHaveAttribute('data-state', 'expanded');

    await userEvent.click(rail);
    expect(sidebar).toHaveAttribute('data-state', 'collapsed');
  });
});

describe('useSidebar hook', () => {
  const TestComponent = () => {
    const { state, open, toggleSidebar } = useSidebar();
    return (
      <div>
        <span data-testid="state">{state}</span>
        <span data-testid="open">{open.toString()}</span>
        <button data-testid="toggle" onClick={toggleSidebar}>
          Toggle
        </button>
      </div>
    );
  };

  it('provides sidebar state', () => {
    render(
      <TestSidebarProvider>
        <TestComponent />
      </TestSidebarProvider>
    );

    expect(screen.getByTestId('state')).toHaveTextContent('expanded');
    expect(screen.getByTestId('open')).toHaveTextContent('true');
  });

  it('toggles sidebar state when toggle function is called', async () => {
    render(
      <TestSidebarProvider>
        <TestComponent />
      </TestSidebarProvider>
    );

    const toggle = screen.getByTestId('toggle');

    expect(screen.getByTestId('state')).toHaveTextContent('expanded');

    await userEvent.click(toggle);
    expect(screen.getByTestId('state')).toHaveTextContent('collapsed');

    await userEvent.click(toggle);
    expect(screen.getByTestId('state')).toHaveTextContent('expanded');
  });

  it('throws error when used outside SidebarProvider', () => {
    // Suppress console.error for this test
    const originalConsoleError = console.error;
    console.error = jest.fn();

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useSidebar must be used within a SidebarProvider.');

    console.error = originalConsoleError;
  });
});

describe('keyboard shortcuts', () => {
  it('toggles sidebar with Ctrl+B', async () => {
    render(
      <TestSidebarProvider>
        <Sidebar data-testid="sidebar">
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveAttribute('data-state', 'expanded');

    await act(async () => {
      fireEvent.keyDown(window, { key: 'b', ctrlKey: true });
    });

    expect(sidebar).toHaveAttribute('data-state', 'collapsed');
  });

  it('toggles sidebar with Cmd+B', async () => {
    render(
      <TestSidebarProvider>
        <Sidebar data-testid="sidebar">
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      </TestSidebarProvider>
    );

    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveAttribute('data-state', 'expanded');

    await act(async () => {
      fireEvent.keyDown(window, { key: 'b', metaKey: true });
    });

    expect(sidebar).toHaveAttribute('data-state', 'collapsed');
  });
});
