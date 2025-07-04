import { cn } from '../../src/lib/utils';
import type { ArgTypes } from '@storybook/react';
import { parseArgTypes, type ParsedProp } from './utils';
import { Unstyled } from '@storybook/addon-docs/blocks';

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '../../src/components/table/table';

interface PropsTableProps {
  props?: ParsedProp[];
  argTypes?: ArgTypes;
  title?: string;
  className?: string;
}

export function PropsTable({
  props,
  argTypes,
  title = 'Props',
  className,
}: PropsTableProps) {
  const parsedProps = props || (argTypes ? parseArgTypes(argTypes) : []);

  if (!parsedProps || parsedProps.length === 0) return null;

  return (
    <Unstyled>
      <div className={cn('my-6', className)}>
        <h3 className="mb-4 text-lg font-semibold">{title}</h3>
        <div className="border-border rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Default</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {parsedProps.map(prop => (
                <TableRow key={prop.name}>
                  <TableCell className="sb-unstyled">
                    <code className="text-primary text-sm font-medium">
                      {prop.name}
                      {prop.required && (
                        <span className="text-destructive ml-1 text-xs">*</span>
                      )}
                    </code>
                  </TableCell>
                  <TableCell className="sb-unstyled text-muted-foreground text-sm max-w-[300px] whitespace-normal">
                    {prop.description || '-'}
                  </TableCell>
                  <TableCell className="sb-unstyled">
                    <code className="bg-muted text-muted-foreground rounded px-1.5 py-0.5 text-xs">
                      {prop.type}
                    </code>
                  </TableCell>
                  <TableCell className="sb-unstyled">
                    {prop.defaultValue ? (
                      <code className="bg-muted text-muted-foreground rounded px-1.5 py-0.5 text-xs">
                        {prop.defaultValue}
                      </code>
                    ) : (
                      <span className="text-muted-foreground text-sm">-</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Unstyled>
  );
}
