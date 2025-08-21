import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './pagination';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component:
          'A pagination component built with Tailwind CSS for navigating through multiple pages of content.',
      },
    },
  },
  tags: [],
  argTypes: {
    // Pagination (Root) props from React.ComponentProps<'nav'>
    className: {
      control: { type: 'text' },
      description:
        'Additional CSS classes to apply to the pagination navigation',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    id: {
      control: { type: 'text' },
      description: 'The id attribute for the pagination navigation',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    role: {
      control: { type: 'text' },
      description: 'The role attribute for the pagination navigation',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'navigation' },
      },
    },
    'aria-label': {
      control: { type: 'text' },
      description: 'The aria-label for the pagination navigation',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'pagination' },
      },
    },
  },
  subcomponents: {
    PaginationContent: {
      description:
        'Container for pagination items, rendered as an unordered list',
      argTypes: {
        className: {
          type: 'string',
          description:
            'Additional CSS classes to apply to the pagination content',
          defaultValue: undefined,
        },
      },
    },
    PaginationItem: {
      description:
        'Wrapper for individual pagination elements, rendered as a list item',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the pagination item',
          defaultValue: undefined,
        },
      },
    },
    PaginationLink: {
      description: 'Clickable pagination link with button styling',
      argTypes: {
        isActive: {
          type: 'boolean',
          description: 'Whether this page link is currently active/selected',
          defaultValue: false,
        },
        size: {
          type: 'string',
          description: 'Size variant for the pagination link',
          defaultValue: 'icon',
          options: ['default', 'sm', 'lg', 'icon'],
        },
        href: {
          type: 'string',
          description: 'The URL that the pagination link points to',
          defaultValue: undefined,
        },
        onClick: {
          type: 'function',
          description: 'Click handler for the pagination link',
          defaultValue: undefined,
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the pagination link',
          defaultValue: undefined,
        },
        'aria-current': {
          type: 'string',
          description:
            'Indicates the current page in a set of pagination links',
          defaultValue: undefined,
        },
      },
    },
    PaginationPrevious: {
      description: 'Previous page navigation button with chevron icon',
      argTypes: {
        href: {
          type: 'string',
          description: 'The URL for the previous page',
          defaultValue: undefined,
        },
        onClick: {
          type: 'function',
          description: 'Click handler for the previous button',
          defaultValue: undefined,
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the previous button',
          defaultValue: undefined,
        },
        'aria-label': {
          type: 'string',
          description: 'Accessible label for the previous button',
          defaultValue: 'Go to previous page',
        },
      },
    },
    PaginationNext: {
      description: 'Next page navigation button with chevron icon',
      argTypes: {
        href: {
          type: 'string',
          description: 'The URL for the next page',
          defaultValue: undefined,
        },
        onClick: {
          type: 'function',
          description: 'Click handler for the next button',
          defaultValue: undefined,
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the next button',
          defaultValue: undefined,
        },
        'aria-label': {
          type: 'string',
          description: 'Accessible label for the next button',
          defaultValue: 'Go to next page',
        },
      },
    },
    PaginationEllipsis: {
      description: 'Ellipsis indicator for truncated page ranges',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the ellipsis',
          defaultValue: undefined,
        },
        'aria-hidden': {
          type: 'boolean',
          description:
            'Whether the ellipsis should be hidden from screen readers',
          defaultValue: true,
        },
      },
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const WithEllipsis: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const LargeSet: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>6</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>20</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const FirstPage: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const LastPage: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>8</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>9</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>10</PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};
