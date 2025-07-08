import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from './sidebar';
import {
  House,
  Inbox,
  Calendar,
  Search,
  Settings,
  User,
  Plus,
  Ellipsis,
  File,
  Folder,
  FileText,
} from '../../icons';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    docs: {
      description: {
        component:
          'A comprehensive sidebar component built with Radix UI primitives and Tailwind CSS. Features responsive design, collapsible states, keyboard shortcuts, and extensive customization options.',
      },
    },
  },
  tags: [],
  argTypes: {
    side: {
      control: { type: 'select' },
      description: 'Side of the screen where the sidebar appears',
      options: ['left', 'right'],
      type: 'string',
      table: {
        type: { summary: 'left | right' },
        defaultValue: { summary: 'left' },
      },
    },
    variant: {
      control: { type: 'select' },
      description: 'Visual variant of the sidebar',
      options: ['sidebar', 'floating', 'inset'],
      type: 'string',
      table: {
        type: { summary: 'sidebar | floating | inset' },
        defaultValue: { summary: 'sidebar' },
      },
    },
    collapsible: {
      control: { type: 'select' },
      description: 'Collapsible behavior of the sidebar',
      options: ['offcanvas', 'icon', 'none'],
      type: 'string',
      table: {
        type: { summary: 'offcanvas | icon | none' },
        defaultValue: { summary: 'offcanvas' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'CSS class name to apply to the sidebar element',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  subcomponents: {
    SidebarProvider: {
      description:
        'The root provider component that manages sidebar state and provides context to all child components.',
      argTypes: {
        defaultOpen: {
          type: 'boolean',
          description: 'Default open state of the sidebar when first rendered',
          defaultValue: 'true',
        },
        open: {
          type: 'boolean',
          description: 'Controlled open state of the sidebar',
        },
        onOpenChange: {
          type: 'function',
          description:
            'Callback function called when sidebar open state changes',
        },
        className: {
          type: 'string',
          description:
            'Additional CSS classes to apply to the provider wrapper',
        },
      },
    },
    SidebarTrigger: {
      description:
        'A button component that toggles the sidebar open/closed state.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the trigger button',
        },
        onClick: {
          type: 'function',
          description: 'Custom click handler (called before internal toggle)',
        },
      },
    },
    SidebarRail: {
      description:
        'An invisible rail component that provides a hover area for expanding collapsed sidebars.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the rail',
        },
      },
    },
    SidebarInset: {
      description:
        'The main content area container that adjusts based on sidebar state.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the inset container',
        },
      },
    },
    SidebarInput: {
      description:
        'A styled input component designed for search functionality within the sidebar.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the input',
        },
        placeholder: {
          type: 'string',
          description: 'Placeholder text for the input',
        },
      },
    },
    SidebarHeader: {
      description:
        'Header section of the sidebar, typically containing branding or main navigation.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the header',
        },
      },
    },
    SidebarFooter: {
      description:
        'Footer section of the sidebar, typically containing user info or secondary actions.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the footer',
        },
      },
    },
    SidebarSeparator: {
      description:
        'A visual separator component to divide sections within the sidebar.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the separator',
        },
      },
    },
    SidebarContent: {
      description:
        'The main scrollable content area of the sidebar containing navigation groups.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the content area',
        },
      },
    },
    SidebarGroup: {
      description:
        'A container for grouping related sidebar items with optional label and actions.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the group',
        },
      },
    },
    SidebarGroupLabel: {
      description: 'A label component for naming sidebar groups.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the group label',
        },
        asChild: {
          type: 'boolean',
          description: 'Render as a child component instead of default div',
          defaultValue: 'false',
        },
      },
    },
    SidebarGroupAction: {
      description:
        'An action button component positioned within a sidebar group, typically for adding items.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the group action',
        },
        asChild: {
          type: 'boolean',
          description: 'Render as a child component instead of default button',
          defaultValue: 'false',
        },
      },
    },
    SidebarGroupContent: {
      description:
        'Container for the content within a sidebar group, typically containing menus.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the group content',
        },
      },
    },
    SidebarMenu: {
      description:
        'A list container for sidebar menu items, rendered as an unordered list.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the menu',
        },
      },
    },
    SidebarMenuItem: {
      description: 'A single menu item container, rendered as a list item.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the menu item',
        },
      },
    },
    SidebarMenuButton: {
      description:
        'An interactive button for menu items with support for active states and tooltips.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description: 'Render as a child component instead of default button',
          defaultValue: 'false',
        },
        isActive: {
          type: 'boolean',
          description: 'Whether the menu item is in an active state',
          defaultValue: 'false',
        },
        variant: {
          type: 'string',
          description: 'Visual variant of the menu button',
          defaultValue: 'default',
        },
        size: {
          type: 'string',
          description: 'Size variant of the menu button',
          defaultValue: 'default',
        },
        tooltip: {
          type: 'string | object',
          description: 'Tooltip content to show when sidebar is collapsed',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the menu button',
        },
      },
    },
    SidebarMenuAction: {
      description:
        'An action button positioned within a menu item for secondary actions.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the menu action',
        },
        asChild: {
          type: 'boolean',
          description: 'Render as a child component instead of default button',
          defaultValue: 'false',
        },
        showOnHover: {
          type: 'boolean',
          description: 'Whether to show the action only on hover',
          defaultValue: 'false',
        },
      },
    },
    SidebarMenuBadge: {
      description:
        'A badge component for displaying counts or status within menu items.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the menu badge',
        },
      },
    },
    SidebarMenuSkeleton: {
      description:
        'A skeleton loading component for menu items during loading states.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the skeleton',
        },
        showIcon: {
          type: 'boolean',
          description: 'Whether to show an icon skeleton',
          defaultValue: 'false',
        },
      },
    },
    SidebarMenuSub: {
      description:
        'A container for nested submenu items, rendered as an unordered list.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the submenu',
        },
      },
    },
    SidebarMenuSubItem: {
      description: 'A single submenu item container, rendered as a list item.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the submenu item',
        },
      },
    },
    SidebarMenuSubButton: {
      description:
        'An interactive button for submenu items with size and active state support.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description: 'Render as a child component instead of default anchor',
          defaultValue: 'false',
        },
        size: {
          type: 'string',
          description: 'Size variant of the submenu button',
          defaultValue: 'md',
        },
        isActive: {
          type: 'boolean',
          description: 'Whether the submenu item is in an active state',
          defaultValue: 'false',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the submenu button',
        },
      },
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

function BasicSidebarExample() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <House className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Acme Inc</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Platform</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <House />
                      <span>Home</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Inbox />
                      <span>Inbox</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Calendar />
                      <span>Calendar</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Search />
                      <span>Search</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Settings />
                      <span>Settings</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <User />
                    <span>Username</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="bg-border mx-2 h-4 w-px" />
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="bg-muted/50 aspect-video rounded-xl" />
              <div className="bg-muted/50 aspect-video rounded-xl" />
              <div className="bg-muted/50 aspect-video rounded-xl" />
            </div>
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
          </div>
        </SidebarInset>
        <SidebarRail />
      </div>
    </SidebarProvider>
  );
}

function CollapsibleSidebarExample() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <a href="#">
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                      <House className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">Acme Inc</span>
                      <span className="truncate text-xs">Enterprise</span>
                    </div>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Platform</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Home" asChild>
                    <a href="#">
                      <House />
                      <span>Home</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Inbox" asChild>
                    <a href="#">
                      <Inbox />
                      <span>Inbox</span>
                      <SidebarMenuBadge>24</SidebarMenuBadge>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Calendar" asChild>
                    <a href="#">
                      <Calendar />
                      <span>Calendar</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Search" asChild>
                    <a href="#">
                      <Search />
                      <span>Search</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Settings" asChild>
                    <a href="#">
                      <Settings />
                      <span>Settings</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="User Profile" asChild>
                  <a href="#">
                    <User />
                    <span>Username</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="bg-border mx-2 h-4 w-px" />
            <h1 className="text-lg font-semibold">Collapsible Dashboard</h1>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="bg-muted/50 aspect-video rounded-xl" />
              <div className="bg-muted/50 aspect-video rounded-xl" />
              <div className="bg-muted/50 aspect-video rounded-xl" />
            </div>
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
          </div>
        </SidebarInset>
        <SidebarRail />
      </div>
    </SidebarProvider>
  );
}

function NestedMenuSidebarExample() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <a href="#">
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                      <File className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        Project Manager
                      </span>
                      <span className="truncate text-xs">v2.0.0</span>
                    </div>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent className="overflow-x-hidden">
            <SidebarGroup>
              <SidebarGroupLabel>Projects</SidebarGroupLabel>
              <SidebarGroupAction>
                <Plus />
                <span className="sr-only">Add Project</span>
              </SidebarGroupAction>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <Folder />
                        <span>Design System</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <a href="#">
                            <FileText />
                            <span>Components</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <a href="#">
                            <FileText />
                            <span>Documentation</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <a href="#">
                            <FileText />
                            <span>Guidelines</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <Folder />
                        <span>Website Redesign</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuAction showOnHover>
                      <Ellipsis />
                      <span className="sr-only">More</span>
                    </SidebarMenuAction>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <a href="#">
                            <FileText />
                            <span>Homepage</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild>
                          <a href="#">
                            <FileText />
                            <span>About Page</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <Folder />
                        <span>Mobile App</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarGroupLabel>Tools</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Search />
                      <span>Search</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Settings />
                      <span>Settings</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <User />
                    <span>John Doe</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="bg-border mx-2 h-4 w-px" />
            <h1 className="text-lg font-semibold">Nested Menu Example</h1>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
          </div>
        </SidebarInset>
        <SidebarRail />
      </div>
    </SidebarProvider>
  );
}

function LoadingSidebarExample() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <SidebarMenuSkeleton showIcon />
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Platform</SidebarGroupLabel>
              <SidebarMenu>
                {Array.from({ length: 5 }).map((_, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuSkeleton showIcon />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarGroupLabel>Projects</SidebarGroupLabel>
              <SidebarMenu>
                {Array.from({ length: 3 }).map((_, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuSkeleton showIcon />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenuSkeleton showIcon />
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="bg-border mx-2 h-4 w-px" />
            <h1 className="text-lg font-semibold">Loading State</h1>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
          </div>
        </SidebarInset>
        <SidebarRail />
      </div>
    </SidebarProvider>
  );
}

function FloatingVariantExample() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar variant="floating" className="top-2">
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <a href="#">
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                      <House className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">Floating</span>
                      <span className="truncate text-xs">Variant</span>
                    </div>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <House />
                      <span>Home</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Inbox />
                      <span>Inbox</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Calendar />
                      <span>Calendar</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <User />
                    <span>User</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="bg-border mx-2 h-4 w-px" />
            <h1 className="text-lg font-semibold">Floating Sidebar</h1>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
          </div>
        </SidebarInset>
        <SidebarRail />
      </div>
    </SidebarProvider>
  );
}

function SearchableSidebarExample() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <a href="#">
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                      <Search className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">Search App</span>
                      <span className="truncate text-xs">v1.0.0</span>
                    </div>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarInput placeholder="I don't filter anything yet..." />
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Quick Access</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <House />
                      <span>Dashboard</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <File />
                      <span>Documents</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Folder />
                      <span>Projects</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Settings />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="bg-border mx-2 h-4 w-px" />
            <h1 className="text-lg font-semibold">Searchable Sidebar</h1>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
          </div>
        </SidebarInset>
        <SidebarRail />
      </div>
    </SidebarProvider>
  );
}

export const Default: Story = {
  render: () => <BasicSidebarExample />,
};

export const Collapsible: Story = {
  render: () => <CollapsibleSidebarExample />,
};

export const NestedMenu: Story = {
  render: () => <NestedMenuSidebarExample />,
};

export const LoadingState: Story = {
  render: () => <LoadingSidebarExample />,
};

export const FloatingVariant: Story = {
  render: () => <FloatingVariantExample />,
};

export const SearchableSidebar: Story = {
  render: () => <SearchableSidebarExample />,
};
