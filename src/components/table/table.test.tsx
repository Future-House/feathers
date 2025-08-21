import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
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

describe('Table', () => {
  it('renders table with proper structure', () => {
    render(
      <Table>
        <TableCaption>Test caption</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Header 1</TableHead>
            <TableHead>Header 2</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('Test caption')).toBeInTheDocument();
    expect(screen.getByText('Header 1')).toBeInTheDocument();
    expect(screen.getByText('Header 2')).toBeInTheDocument();
    expect(screen.getByText('Cell 1')).toBeInTheDocument();
    expect(screen.getByText('Cell 2')).toBeInTheDocument();
  });

  it('applies correct data-slot attributes', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    const table = screen.getByRole('table');
    const tableContainer = table.parentElement;

    expect(tableContainer).toHaveAttribute('data-slot', 'table-container');
    expect(table).toHaveAttribute('data-slot', 'table');
  });

  it('accepts custom className', () => {
    render(
      <Table className="custom-table">
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    const table = screen.getByRole('table');
    expect(table).toHaveClass('custom-table');
  });

  it('renders table with footer', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>100</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer Cell</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );

    expect(screen.getByText('Footer Cell')).toBeInTheDocument();
  });

  it('renders responsive container', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    const container = screen.getByRole('table').parentElement;
    expect(container).toHaveClass('relative', 'w-full', 'overflow-x-auto');
  });
});

describe('TableHeader', () => {
  it('renders thead element with correct attributes', () => {
    render(
      <table>
        <TableHeader>
          <TableRow>
            <TableHead>Test Header</TableHead>
          </TableRow>
        </TableHeader>
      </table>
    );

    const thead = screen.getByText('Test Header').closest('thead');
    expect(thead).toBeInTheDocument();
    expect(thead).toHaveAttribute('data-slot', 'table-header');
  });

  it('accepts custom className', () => {
    render(
      <table>
        <TableHeader className="custom-header">
          <TableRow>
            <TableHead>Test</TableHead>
          </TableRow>
        </TableHeader>
      </table>
    );

    const thead = screen.getByText('Test').closest('thead');
    expect(thead).toHaveClass('custom-header');
  });
});

describe('TableBody', () => {
  it('renders tbody element with correct attributes', () => {
    render(
      <table>
        <TableBody>
          <TableRow>
            <TableCell>Test Cell</TableCell>
          </TableRow>
        </TableBody>
      </table>
    );

    const tbody = screen.getByText('Test Cell').closest('tbody');
    expect(tbody).toBeInTheDocument();
    expect(tbody).toHaveAttribute('data-slot', 'table-body');
  });
});

describe('TableFooter', () => {
  it('renders tfoot element with correct attributes', () => {
    render(
      <table>
        <TableFooter>
          <TableRow>
            <TableCell>Footer Cell</TableCell>
          </TableRow>
        </TableFooter>
      </table>
    );

    const tfoot = screen.getByText('Footer Cell').closest('tfoot');
    expect(tfoot).toBeInTheDocument();
    expect(tfoot).toHaveAttribute('data-slot', 'table-footer');
  });
});

describe('TableRow', () => {
  it('renders tr element with correct attributes', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </tbody>
      </table>
    );

    const row = screen.getByText('Test').closest('tr');
    expect(row).toBeInTheDocument();
    expect(row).toHaveAttribute('data-slot', 'table-row');
  });

  it('applies hover and selection classes', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </tbody>
      </table>
    );

    const row = screen.getByText('Test').closest('tr');
    expect(row).toHaveClass(
      'hover:bg-muted/50',
      'data-[state=selected]:bg-muted'
    );
  });
});

describe('TableHead', () => {
  it('renders th element with correct attributes', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHead>Header Cell</TableHead>
          </tr>
        </thead>
      </table>
    );

    const th = screen.getByText('Header Cell');
    expect(th.tagName).toBe('TH');
    expect(th).toHaveAttribute('data-slot', 'table-head');
  });

  it('has proper styling classes', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHead>Test</TableHead>
          </tr>
        </thead>
      </table>
    );

    const th = screen.getByText('Test');
    expect(th).toHaveClass('text-left', 'align-middle', 'font-medium');
  });
});

describe('TableCell', () => {
  it('renders td element with correct attributes', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Cell Content</TableCell>
          </tr>
        </tbody>
      </table>
    );

    const td = screen.getByText('Cell Content');
    expect(td.tagName).toBe('TD');
    expect(td).toHaveAttribute('data-slot', 'table-cell');
  });

  it('has proper styling classes', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Test</TableCell>
          </tr>
        </tbody>
      </table>
    );

    const td = screen.getByText('Test');
    expect(td).toHaveClass('p-2', 'align-middle');
  });
});

describe('TableCaption', () => {
  it('renders caption element with correct attributes', () => {
    render(
      <Table>
        <TableCaption>Table Description</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    const caption = screen.getByText('Table Description');
    expect(caption.tagName).toBe('CAPTION');
    expect(caption).toHaveAttribute('data-slot', 'table-caption');
  });

  it('has proper styling classes', () => {
    render(
      <Table>
        <TableCaption>Test Caption</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    const caption = screen.getByText('Test Caption');
    expect(caption).toHaveClass('text-muted-foreground', 'mt-4', 'text-sm');
  });
});
