import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from './breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../dropdown-menu';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component:
          'Displays the path to the current resource using a hierarchy of links. Built with semantic HTML and styled with Tailwind CSS.',
      },
    },
  },
  tags: [],
  argTypes: {
    // Breadcrumb (nav) props
    'aria-label': {
      control: { type: 'text' },
      description: 'Accessible label for the breadcrumb navigation',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'breadcrumb' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'CSS class name to apply to the breadcrumb nav',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
  },
  subcomponents: {
    BreadcrumbList: {
      description:
        'Contains the list of breadcrumb items. Renders as an ordered list (ol) element.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the breadcrumb list',
        },
      },
    },
    BreadcrumbItem: {
      description:
        'A single breadcrumb item container. Renders as a list item (li) element.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the breadcrumb item',
        },
      },
    },
    BreadcrumbLink: {
      description:
        'A clickable breadcrumb link. Can be used with the asChild prop for custom link components.',
      argTypes: {
        asChild: {
          type: 'boolean',
          description:
            'Change the default rendered element for the one passed as a child, merging their props and behavior.',
          defaultValue: 'false',
        },
        href: {
          type: 'string',
          description: 'The URL that the link points to.',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the breadcrumb link',
        },
      },
    },
    BreadcrumbPage: {
      description:
        'Represents the current page in the breadcrumb trail. Not clickable and has appropriate ARIA attributes.',
      argTypes: {
        className: {
          type: 'string',
          description:
            'Additional CSS classes to apply to the breadcrumb page element',
        },
      },
    },
    BreadcrumbSeparator: {
      description:
        'A visual separator between breadcrumb items. Defaults to a chevron icon but can be customized.',
      argTypes: {
        children: {
          type: 'ReactNode',
          description:
            'Custom separator content. Defaults to ChevronRight icon if not provided.',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the separator',
        },
      },
    },
    BreadcrumbEllipsis: {
      description:
        'Shows an ellipsis to indicate truncated breadcrumb items. Used when the path is too long.',
      argTypes: {
        className: {
          type: 'string',
          description:
            'Additional CSS classes to apply to the ellipsis element',
        },
      },
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const WithCustomSeparator: Story = {
  render: args => (
    <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Documentation</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const WithEllipsis: Story = {
  render: args => (
    <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="size-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const LongPath: Story = {
  render: args => (
    <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Projects</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">My Project</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Settings</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>General</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const AsChildLink: Story = {
  render: args => {
    // Mock Link component for demonstration
    const Link = ({ href, children, ...props }: React.ComponentProps<'a'>) => (
      <a href={href} {...props}>
        {children}
      </a>
    );

    return (
      <Breadcrumb {...args}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="#">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="#">Products</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Laptop Computers</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  },
};

export const CustomStyling: Story = {
  render: ({ className, ...rest }) => (
    <Breadcrumb
      className={`rounded border bg-gray-50 p-3 ${className}`}
      {...rest}
    >
      <BreadcrumbList className="text-base">
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            className="font-medium text-blue-600 hover:text-blue-800"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-400">→</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            className="font-medium text-blue-600 hover:text-blue-800"
          >
            Categories
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-400">→</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="font-semibold text-gray-800">
            Electronics
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const Responsive: Story = {
  render: args => (
    <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:inline-flex">
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:inline-flex" />
        <BreadcrumbItem className="hidden sm:inline-flex">
          <BreadcrumbLink href="#">Documentation</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden sm:inline-flex" />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};
