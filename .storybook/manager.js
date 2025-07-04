import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

// Define shadcn/ui color palette
const feathersTheme = create({
  base: 'dark', // or 'dark' for dark theme

  // Brand colors
  brandTitle: '@futurehouse/feathers',
  brandImage:
    'https://cdn.prod.website-files.com/669f0d63ca36f46df2e0682f/66a0346885d0e329f9e79446_FutureHouse-Logo-White.svg', // Add your logo URL here if needed
});

addons.setConfig({
  theme: feathersTheme,
});
