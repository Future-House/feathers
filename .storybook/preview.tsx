import type { Preview } from '@storybook/react';

import { ThemeProvider } from '../src/components/theme-provider';

import themeLight from './themes/theme-light.js';
import themeDark from './themes/theme-dark.js';
// import themeLightDocs from "./themes/theme-lightDocs.js";

import '../src/lib/styles/index.css'; // feathers/tailwind css
import './styles.css'; // custom storybook overrides

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',

    controls: {
      expanded: true, // showcase more info on dedicated story pages
      // disableSaveFromUI: true
    },
    docs: {
      // theme: themeLightDocs,
      // source: { language: "html" },
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

    darkMode: {
      light: themeLight,
      dark: themeDark,
      classTarget: 'html',
      stylePreview: true,
    },
  },
  decorators: [
    Story => (
      <ThemeProvider
        defaultTheme="system"
        storageKey="feathers-storybook-theme"
      >
        <Story />
      </ThemeProvider>
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

//   if (isProd && message?.includes("Failed to fetch dynamically imported module")) {
//     window.location.reload();
//   }
// }

export default preview;
