import * as React from 'react';
import { Toaster as Sonner, ToasterProps } from 'sonner';

import { useTheme } from '@/components/theme-provider';

const Toaster = React.forwardRef<React.ElementRef<typeof Sonner>, ToasterProps>(
  ({ ...props }, ref) => {
    const { theme = 'system' } = useTheme();

    return (
      <Sonner
        ref={ref}
        theme={theme as ToasterProps['theme']}
        className="toaster group"
        style={
          {
            '--normal-bg': 'var(--popover)',
            '--normal-text': 'var(--popover-foreground)',
            '--normal-border': 'var(--border)',
          } as React.CSSProperties
        }
        {...props}
      />
    );
  }
);
Toaster.displayName = 'Toaster';

export { Toaster };
