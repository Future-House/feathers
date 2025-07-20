import type { Preview } from '@storybook/react';

import { Typography } from '../src/components/typography';

import themeLight from './themes/theme-light.js';
import themeDark from './themes/theme-dark.js';
// import themeLightDocs from "./themes/theme-lightDocs.js";

// preview style for inner html
import '../src/lib/styles/index.css'; // feathers/tailwind css
import './styles.css'; // custom storybook overrides

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
    controls: {
      expanded: true, // showcase more info on dedicated story pages
      disableSaveFromUI: true,
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Design System',
          'Icons',
          'Providers',
          'Components',
        ],
        method: 'alphabetical',
      },
    },
    docs: {
      // theme: themeLightDocs,
      // source: { language: "html" },
      components: {
        h1: ({ children }) => (
          <Typography variant="h1" className="sb-unstyled mt-8 mb-6">
            {children}
          </Typography>
        ),
        h2: ({ children }) => (
          <Typography variant="h2" className="sb-unstyled mt-8 mb-4">
            {children}
          </Typography>
        ),
        h3: ({ children }) => (
          <Typography variant="h3" className="sb-unstyled mt-6 mb-3">
            {children}
          </Typography>
        ),
        h4: ({ children }) => (
          <Typography variant="h4" className="sb-unstyled mt-4 mb-2">
            {children}
          </Typography>
        ),
        p: ({ children }) => (
          <Typography variant="p" className="sb-unstyled mb-4">
            {children}
          </Typography>
        ),
        li: ({ children }) => (
          <Typography asChild className="sb-unstyled mb-2">
            <li>{children}</li>
          </Typography>
        ),
        code: ({ children }) => (
          <Typography variant="code">{children}</Typography>
        ),
        blockquote: ({ children }) => (
          <Typography variant="blockquote">{children}</Typography>
        ),
        pre: ({ children }) => (
          <pre className="sb-unstyled rounded-md bg-gray-200 p-2 dark:bg-gray-800">
            {children}
          </pre>
        ),
      },
      codePanel: true,
    },
    backgrounds: { disable: true },

    darkMode: {
      light: themeLight,
      dark: themeDark,
      classTarget: 'html',
      stylePreview: true,
    },
  },
  decorators: [
    Story => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

// TODO: enable this
// basic code to "fix" imported module error
/* Reload the page on the error "Failed to fetch dynamically imported module..." */
// window.addEventListener("error", (ev) => onFailedToFetchModule(ev.message));
// window.addEventListener("unhandledrejection", (ev) => onFailedToFetchModule(ev?.reason?.message));

// function onFailedToFetchModule(message) {
//   const isProd = process.env.MODE === "production";
//   const isProd = import.meta.env.MODE === "production";

//   if (isProd && message?.includes("Failed to fetch dynamically imported module")) {
//     window.location.reload();
//   }
// }

export default preview;
