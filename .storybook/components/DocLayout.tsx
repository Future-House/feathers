import React from 'react';
import { Badge } from '../../src/components/badge/badge';
import { Launch } from '@carbon/icons-react';
import { cn } from '../../src/lib/utils';
import { getComponentTitle, getComponentDescription } from './utils';
import { Unstyled } from '@storybook/addon-docs/blocks';

// Logo components
const ShadcnLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="256" height="256" fill="none"></rect>
    <line
      x1="208"
      y1="128"
      x2="128"
      y2="208"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    ></line>
    <line
      x1="192"
      y1="40"
      x2="40"
      y2="192"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    ></line>
  </svg>
);

const RadixLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
      fill="currentColor"
    />
    <path d="M12 0H4V8H12V0Z" fill="currentColor" />
    <path
      d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
      fill="currentColor"
    />
  </svg>
);

interface DocLayoutProps {
  title?: string;
  description?: string;
  componentName?: string;
  meta?: any;
  children: React.ReactNode;
  className?: string;
  hideShadcnUrl?: boolean;
  hideRadixUiUrl?: boolean;
  customRadixUiUrl?: string;
}

export function DocLayout({
  title,
  description,
  componentName,
  meta,
  children,
  className,
  hideShadcnUrl = false,
  hideRadixUiUrl = false,
  customRadixUiUrl,
}: DocLayoutProps) {
  const finalTitle = title || (meta ? getComponentTitle(meta) : '');
  const finalDescription =
    description || (meta ? getComponentDescription(meta) : '');
  const finalComponentName = componentName || finalTitle;

  const kebabCase = finalComponentName
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();

  // Default URLs if not provided
  const defaultShadcnUrl = `https://ui.shadcn.com/docs/components/${kebabCase}`;
  const defaultRadixUrl = customRadixUiUrl
    ? `https://www.radix-ui.com/primitives/docs/components/${customRadixUiUrl}`
    : `https://www.radix-ui.com/primitives/docs/components/${kebabCase}`;

  return (
    <div className={cn('mx-auto max-w-6xl px-8 py-8', className)}>
      <div className="!mb-8 space-y-4">
        <h1 className="!text-foreground text-4xl font-bold tracking-tight">
          {finalTitle}
        </h1>
        <p className="!text-muted-foreground text-lg">{finalDescription}</p>
        <div className="flex flex-wrap gap-2">
          {!hideShadcnUrl && (
            <Badge asChild variant="secondary">
              <a
                href={defaultShadcnUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground! inline-flex items-center gap-1.5 no-underline hover:no-underline"
              >
                <ShadcnLogo className="h-3 w-3" />
                shadcn/{kebabCase}
                <Launch className="h-3 w-3" />
              </a>
            </Badge>
          )}
          {!hideRadixUiUrl && (
            <Badge asChild variant="secondary">
              <a
                href={defaultRadixUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground! inline-flex items-center gap-1.5 no-underline hover:no-underline"
              >
                <RadixLogo className="h-3 w-3" />
                radix-ui/{customRadixUiUrl || kebabCase}
                <Launch className="h-3 w-3" />
              </a>
            </Badge>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
