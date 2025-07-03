import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './navigation-menu';
import {
  Calendar,
  Database,
  FileText,
  Laptop,
  Users,
  Settings,
  Layout,
  Code,
  Mail,
  Search,
} from 'lucide-react';
import React from 'react';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A collection of links for navigating websites.',
      },
    },
  },
  tags: [],
  argTypes: {
    // NavigationMenu.Root props
    value: {
      control: 'text',
      description: 'The controlled value of the menu item to activate.',
      table: {
        category: 'NavigationMenu.Root',
        type: { summary: 'string' },
      },
    },
    defaultValue: {
      control: 'text',
      description:
        'The value of the menu item to activate when initially rendered.',
      table: {
        category: 'NavigationMenu.Root',
        type: { summary: 'string' },
      },
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Event handler called when the value changes.',
      table: {
        category: 'NavigationMenu.Root',
        type: { summary: '(value: string) => void' },
      },
    },
    delayDuration: {
      control: { type: 'number', min: 0, max: 5000, step: 100 },
      description:
        'The duration from when the mouse enters a trigger until the content opens.',
      table: {
        category: 'NavigationMenu.Root',
        type: { summary: 'number' },
        defaultValue: { summary: '200' },
      },
    },
    skipDelayDuration: {
      control: { type: 'number', min: 0, max: 1000, step: 50 },
      description:
        'How much time a user has to enter another trigger without incurring a delay again.',
      table: {
        category: 'NavigationMenu.Root',
        type: { summary: 'number' },
        defaultValue: { summary: '300' },
      },
    },
    dir: {
      control: { type: 'select' },
      options: ['ltr', 'rtl'],
      description: 'The reading direction of the navigation menu.',
      table: {
        category: 'NavigationMenu.Root',
        type: { summary: 'ltr | rtl' },
      },
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the navigation menu.',
      table: {
        category: 'NavigationMenu.Root',
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    viewport: {
      control: 'boolean',
      description: 'Whether to show the viewport component.',
      table: {
        category: 'Custom',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

// Components for stories that use hooks
function SimpleNavigationComponent() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                    href="/"
                  >
                    <Layout className="h-6 w-6" />
                    <div className="mt-4 mb-2 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/docs"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="text-sm leading-none font-medium">
                      Introduction
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/docs/installation"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="text-sm leading-none font-medium">
                      Installation
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      How to install dependencies and structure your app.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/docs/primitives/typography"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="text-sm leading-none font-medium">
                      Typography
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      Styles for headings, paragraphs, lists...etc
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/docs/primitives/alert-dialog"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="text-sm leading-none font-medium">
                      Alert Dialog
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      A modal dialog that interrupts the user with important
                      content.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/docs/primitives/hover-card"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="text-sm leading-none font-medium">
                      Hover Card
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      For sighted users to preview content available behind a
                      link.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/docs/primitives/progress"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="text-sm leading-none font-medium">
                      Progress
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      Displays an indicator showing the completion progress.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/docs/primitives/scroll-area"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="text-sm leading-none font-medium">
                      Scroll-area
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      Visually or semantically separates content.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/docs/primitives/tabs"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="text-sm leading-none font-medium">Tabs</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      A set of layered sections of content.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/docs/primitives/tooltip"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div className="text-sm leading-none font-medium">
                      Tooltip
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      A popup that displays information related to an element.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/docs"
            className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ProductNavigationComponent() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <div className="grid gap-1">
                <h3 className="leading-none font-medium">Web Applications</h3>
                <p className="text-muted-foreground text-sm">
                  Modern web solutions for your business.
                </p>
                <NavigationMenuLink asChild>
                  <a
                    href="/products/webapp"
                    className="hover:bg-accent flex items-center gap-2 rounded-md p-2"
                  >
                    <Laptop className="h-4 w-4" />
                    <div>
                      <div className="text-sm font-medium">Dashboard</div>
                      <div className="text-muted-foreground text-xs">
                        Analytics & insights
                      </div>
                    </div>
                  </a>
                </NavigationMenuLink>
              </div>
              <div className="grid gap-1">
                <h3 className="leading-none font-medium">Data Services</h3>
                <p className="text-muted-foreground text-sm">
                  Robust data management solutions.
                </p>
                <NavigationMenuLink asChild>
                  <a
                    href="/products/database"
                    className="hover:bg-accent flex items-center gap-2 rounded-md p-2"
                  >
                    <Database className="h-4 w-4" />
                    <div>
                      <div className="text-sm font-medium">Database</div>
                      <div className="text-muted-foreground text-xs">
                        Scalable storage
                      </div>
                    </div>
                  </a>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/solutions/enterprise"
                    className="hover:bg-accent flex items-center gap-3 rounded-md p-3"
                  >
                    <Users className="h-4 w-4" />
                    <div>
                      <div className="text-sm font-medium">Enterprise</div>
                      <div className="text-muted-foreground text-xs">
                        Large scale deployments
                      </div>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/solutions/startup"
                    className="hover:bg-accent flex items-center gap-3 rounded-md p-3"
                  >
                    <Code className="h-4 w-4" />
                    <div>
                      <div className="text-sm font-medium">Startup</div>
                      <div className="text-muted-foreground text-xs">
                        Quick to market
                      </div>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/contact"
            className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function SimpleLinksComponent() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/"
            className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/about"
            className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/services"
            className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Services
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/contact"
            className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function VerticalNavigationComponent() {
  return (
    <NavigationMenu orientation="vertical" className="max-w-none">
      <NavigationMenuList className="flex-col items-start space-y-1 space-x-0">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[300px] gap-3 p-4">
              <NavigationMenuLink asChild>
                <a
                  href="/dashboard/overview"
                  className="hover:bg-accent flex items-center gap-2 rounded-md p-2"
                >
                  <Layout className="h-4 w-4" />
                  <span>Overview</span>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="/dashboard/analytics"
                  className="hover:bg-accent flex items-center gap-2 rounded-md p-2"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Analytics</span>
                </a>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Settings</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[300px] gap-3 p-4">
              <NavigationMenuLink asChild>
                <a
                  href="/settings/profile"
                  className="hover:bg-accent flex items-center gap-2 rounded-md p-2"
                >
                  <Users className="h-4 w-4" />
                  <span>Profile</span>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="/settings/preferences"
                  className="hover:bg-accent flex items-center gap-2 rounded-md p-2"
                >
                  <Settings className="h-4 w-4" />
                  <span>Preferences</span>
                </a>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NoViewportComponent() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[300px] gap-3 p-4">
              <NavigationMenuLink asChild>
                <a
                  href="/docs"
                  className="hover:bg-accent flex items-center gap-2 rounded-md p-2"
                >
                  <FileText className="h-4 w-4" />
                  <span>Documentation</span>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a
                  href="/blog"
                  className="hover:bg-accent flex items-center gap-2 rounded-md p-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>Blog</span>
                </a>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/search"
            className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            <Search className="mr-2 h-4 w-4" />
            Search
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export const Default: Story = {
  render: () => <SimpleNavigationComponent />,
};

export const ProductNavigation: Story = {
  render: () => <ProductNavigationComponent />,
};

export const SimpleLinks: Story = {
  render: () => <SimpleLinksComponent />,
};

export const VerticalOrientation: Story = {
  render: () => <VerticalNavigationComponent />,
};

export const WithoutViewport: Story = {
  render: () => <NoViewportComponent />,
};

export const WithDelayDuration: Story = {
  args: {
    delayDuration: 1000,
    skipDelayDuration: 500,
  },
  render: args => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Slow Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[300px] p-4">
              <p className="text-sm">
                This menu has a longer delay before opening.
              </p>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
