import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../badge/badge';
import { Button } from '../button/button';
import { Checkbox } from '../checkbox/checkbox';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from './table';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A simple and responsive table component for displaying tabular data. Built with semantic HTML table elements and styled with Tailwind CSS.',
      },
    },
  },
  tags: [],
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the table',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  subcomponents: {
    Table: {
      description:
        'The root table component that renders a responsive table with semantic HTML. Includes automatic horizontal scrolling for overflow content.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the table element',
        },
      },
    },
    TableCaption: {
      description:
        'A caption element that provides a title or description for the table. Typically used for accessibility and context.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the caption element',
        },
      },
    },
    TableHeader: {
      description:
        'The header section of the table containing column headings. Renders as a thead element.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the thead element',
        },
      },
    },
    TableBody: {
      description:
        'The main body section of the table containing data rows. Renders as a tbody element.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the tbody element',
        },
      },
    },
    TableFooter: {
      description:
        'The footer section of the table, typically used for summary information or totals. Renders as a tfoot element.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the tfoot element',
        },
      },
    },
    TableRow: {
      description:
        'A table row component that can be used in header, body, or footer sections. Includes hover effects and selection states.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the tr element',
        },
      },
    },
    TableHead: {
      description:
        'A table header cell component for column headings. Optimized for checkbox interactions and proper alignment.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the th element',
        },
        scope: {
          type: 'string',
          description: 'Defines the scope of the header cell for accessibility',
        },
        colSpan: {
          type: 'number',
          description: 'Number of columns this header cell should span',
        },
        rowSpan: {
          type: 'number',
          description: 'Number of rows this header cell should span',
        },
      },
    },
    TableCell: {
      description:
        'A table data cell component for displaying content. Supports various content types and interactive elements.',
      argTypes: {
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the td element',
        },
        colSpan: {
          type: 'number',
          description: 'Number of columns this cell should span',
        },
        rowSpan: {
          type: 'number',
          description: 'Number of rows this cell should span',
        },
      },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <Table {...args}>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Unpaid</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV004</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$450.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV005</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$550.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithBadges: Story = {
  render: args => (
    <Table {...args}>
      <TableCaption>Project status overview</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead className="text-right">Progress</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Website Redesign</TableCell>
          <TableCell>
            <Badge variant="secondary">In Progress</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="destructive">High</Badge>
          </TableCell>
          <TableCell className="text-right">75%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Mobile App</TableCell>
          <TableCell>
            <Badge variant="outline">Planning</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="secondary">Medium</Badge>
          </TableCell>
          <TableCell className="text-right">25%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">API Integration</TableCell>
          <TableCell>
            <Badge variant="default">Completed</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="secondary">Medium</Badge>
          </TableCell>
          <TableCell className="text-right">100%</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithActions: Story = {
  render: args => (
    <Table {...args}>
      <TableCaption>User management table</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]"></TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell className="font-medium">John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="sm">
              Edit
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell className="font-medium">Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="sm">
              Edit
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell className="font-medium">Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>Moderator</TableCell>
          <TableCell className="text-right">
            <Button variant="ghost" size="sm">
              Edit
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithFooter: Story = {
  render: args => (
    <Table {...args}>
      <TableCaption>Quarterly sales report</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Month</TableHead>
          <TableHead className="text-right">Sales</TableHead>
          <TableHead className="text-right">Expenses</TableHead>
          <TableHead className="text-right">Profit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">January</TableCell>
          <TableCell className="text-right">$12,000</TableCell>
          <TableCell className="text-right">$8,000</TableCell>
          <TableCell className="text-right">$4,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">February</TableCell>
          <TableCell className="text-right">$15,000</TableCell>
          <TableCell className="text-right">$9,000</TableCell>
          <TableCell className="text-right">$6,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">March</TableCell>
          <TableCell className="text-right">$18,000</TableCell>
          <TableCell className="text-right">$11,000</TableCell>
          <TableCell className="text-right">$7,000</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className="font-medium">Total</TableCell>
          <TableCell className="text-right font-medium">$45,000</TableCell>
          <TableCell className="text-right font-medium">$28,000</TableCell>
          <TableCell className="text-right font-medium">$17,000</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const Dense: Story = {
  render: args => (
    <Table {...args}>
      <TableCaption>Dense table layout</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="h-8 px-1">ID</TableHead>
          <TableHead className="h-8 px-1">Product</TableHead>
          <TableHead className="h-8 px-1">Category</TableHead>
          <TableHead className="h-8 px-1 text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="px-1 py-1">001</TableCell>
          <TableCell className="px-1 py-1">Laptop</TableCell>
          <TableCell className="px-1 py-1">Electronics</TableCell>
          <TableCell className="px-1 py-1 text-right">$999</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="px-1 py-1">002</TableCell>
          <TableCell className="px-1 py-1">Mouse</TableCell>
          <TableCell className="px-1 py-1">Electronics</TableCell>
          <TableCell className="px-1 py-1 text-right">$29</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="px-1 py-1">003</TableCell>
          <TableCell className="px-1 py-1">Keyboard</TableCell>
          <TableCell className="px-1 py-1">Electronics</TableCell>
          <TableCell className="px-1 py-1 text-right">$79</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Striped: Story = {
  render: args => (
    <Table {...args}>
      <TableCaption>Striped table example</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Salary</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="[&_tr:nth-child(odd)]:bg-muted/50">
        <TableRow>
          <TableCell className="font-medium">Alice Wilson</TableCell>
          <TableCell>Engineering</TableCell>
          <TableCell>$85,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Bob Chen</TableCell>
          <TableCell>Design</TableCell>
          <TableCell>$72,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Carol Davis</TableCell>
          <TableCell>Marketing</TableCell>
          <TableCell>$68,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">David Lee</TableCell>
          <TableCell>Sales</TableCell>
          <TableCell>$75,000</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
