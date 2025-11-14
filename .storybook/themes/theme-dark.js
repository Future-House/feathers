import { create } from 'storybook/theming/create';
import { TAILWIND_COLORS } from './tailwindColors.js';
import commonThemeProps from './common.js';

export default create({
  base: 'dark',

  brandImage:
    'https://cdn.prod.website-files.com/669f0d63ca36f46df2e0682f/66a0346885d0e329f9e79446_FutureHouse-Logo-White.svg', // Add your logo URL here if needed
  ...commonThemeProps, // font and brand

  // Main colors
  colorPrimary: TAILWIND_COLORS.gray['200'],
  colorSecondary: TAILWIND_COLORS.gray['700'],

  // UI/sidebar
  appBg: '#18181B',
  appPreviewBg: '#18181B',
  appBorderColor: TAILWIND_COLORS.gray['800'],
  appBorderRadius: 0,

  // Text colors
  textColor: TAILWIND_COLORS.gray['300'],
  textInverseColor: TAILWIND_COLORS.gray['800'],

  // Toolbar default and active colors
  barTextColor: TAILWIND_COLORS.gray['500'], // text and icons
  barHoverColor: TAILWIND_COLORS.gray['400'],
  barSelectedColor: TAILWIND_COLORS.gray['300'],
  barBg: '#18181B',

  // Form colors
  inputBg: TAILWIND_COLORS.gray['950'],
  inputBorder: TAILWIND_COLORS.gray['600'],
  inputTextColor: TAILWIND_COLORS.gray['100'],
  inputBorderRadius: 4,

  buttonBg: TAILWIND_COLORS.gray['800'],
  buttonBorder: TAILWIND_COLORS.gray['800'],
  booleanBg: TAILWIND_COLORS.gray['900'],
  booleanSelectedBg: TAILWIND_COLORS.gray['600'],
});
