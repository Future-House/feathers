import type { Preview } from '@storybook/react';
import '../src/lib/styles/index.css';
import './styles.css';
import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
    },
    docs: {
      components: {
        h2: ({ children }) => (
          <h2 className="sb-unstyled text-foreground mt-8 mb-4 text-2xl font-bold">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="sb-unstyled text-foreground mt-6 mb-3 text-xl font-bold">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="sb-unstyled text-muted-foreground mb-4 text-base">
            {children}
          </p>
        ),
        li: ({ children }) => (
          <li className="sb-unstyled text-muted-foreground mb-2 text-base">
            {children}
          </li>
        ),
      },
      codePanel: true,
    },
    backgrounds: { disable: true },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      parentSelector: 'html',
    }),
  ],
};

export default preview;
