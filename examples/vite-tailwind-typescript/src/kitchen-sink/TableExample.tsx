import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  Badge,
  Button,
  Checkbox,
} from '@future-house/feathers';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
];

const getStatusBadge = (status: string) => {
  switch (status.toLowerCase()) {
    case 'paid':
      return <Badge variant="default">Paid</Badge>;
    case 'pending':
      return <Badge variant="secondary">Pending</Badge>;
    case 'unpaid':
      return <Badge variant="destructive">Unpaid</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export function TableExample() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Basic Table</h3>
        <Table>
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
            {invoices.map(invoice => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{getStatusBadge(invoice.paymentStatus)}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Table with Footer</h3>
        <Table>
          <TableCaption>Monthly sales summary</TableCaption>
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
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Interactive Table</h3>
        <Table>
          <TableCaption>User management table with actions</TableCaption>
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
              <TableCell>
                <Badge variant="default">Admin</Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm">
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">Jane Smith</TableCell>
              <TableCell>jane@example.com</TableCell>
              <TableCell>
                <Badge variant="secondary">User</Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm">
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">Bob Johnson</TableCell>
              <TableCell>bob@example.com</TableCell>
              <TableCell>
                <Badge variant="outline">Moderator</Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm">
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
