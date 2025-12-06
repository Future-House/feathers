import type { StorybookConfig } from '@storybook/react-vite';

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
    '@storybook/addon-mcp',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    defaultName: 'Documentation',
  },
  viteFinal: async config => {
    const path = await import('path');
    return {
      ...config,
      minify: false, // Don't minify in Storybook
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@/components': path.resolve(__dirname, '../src/components'),
          '@/icons': path.resolve(__dirname, '../src/icons'),
          '@/lib': path.resolve(__dirname, '../src/lib'),
          '@/hooks': path.resolve(__dirname, '../src/hooks'),
          '@': path.resolve(__dirname, '../src'),
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
};

export default config;
