import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import type { StorybookConfig } from '@storybook/react-vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: [
    '../docs/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-themes',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@vueless/storybook-dark-mode',
    {
      name: '@storybook/addon-mcp',
      options: {
        toolsets: {
          dev: true,
          docs: true,
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    defaultName: 'Documentation',
  },
  viteFinal: async config => {
    return {
      ...config,
      minify: false, // Don't minify in Storybook
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@/components': resolve(__dirname, '../src/components'),
          '@/icons': resolve(__dirname, '../src/icons'),
          '@/lib': resolve(__dirname, '../src/lib'),
          '@/hooks': resolve(__dirname, '../src/hooks'),
          '@': resolve(__dirname, '../src'),
        },
      },
    };
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  staticDirs: ['./public'], // This serves files from .storybook/static/
  core: {
    disableTelemetry: true,
  },
  features: {
    experimentalComponentsManifest: true,
  },
};

export default config;
