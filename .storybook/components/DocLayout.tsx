import React from 'react';
import { Badge } from '../../src/components/badge/badge';
import { ExternalLink } from 'lucide-react';
import { cn } from '../../src/lib/utils';
import { getComponentTitle, getComponentDescription } from './utils';
import { Unstyled } from '@storybook/addon-docs/blocks';

interface DocLayoutProps {
  title?: string;
  description?: string;
  componentName?: string;
  meta?: any;
  children: React.ReactNode;
  className?: string;
}

export function DocLayout({
  title,
  description,
  componentName,
  meta,
  children,
  className,
}: DocLayoutProps) {
  const finalTitle = title || (meta ? getComponentTitle(meta) : '');
  const finalDescription =
    description || (meta ? getComponentDescription(meta) : '');
  const finalComponentName = componentName || finalTitle;

  const kebabCase = finalComponentName
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();

  return (
    // <Unstyled>

    <div
      className={cn(
        'bg-background text-foreground mx-auto max-w-6xl px-8 py-8',
        className
      )}
    >
      <div className="!mb-8 space-y-4">
        <h1 className="!text-foreground text-4xl font-bold tracking-tight">
          {finalTitle}
        </h1>
        <p className="!text-muted-foreground text-lg">{finalDescription}</p>
        <div className="flex flex-wrap gap-2">
          <Badge asChild variant="outline">
            <a
              href={`https://ui.shadcn.com/docs/components/${kebabCase}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 no-underline hover:no-underline"
            >
              shadcn/ui/{kebabCase}
              <ExternalLink className="h-3 w-3" />
            </a>
          </Badge>
          <Badge asChild variant="outline">
            <a
              href={`https://www.radix-ui.com/primitives/docs/components/${kebabCase}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 no-underline hover:no-underline"
            >
              Radix UI/{kebabCase}
              <ExternalLink className="h-3 w-3" />
            </a>
          </Badge>
        </div>
      </div>
      {children}
    </div>
    // </Unstyled>
  );
}
