import { create } from 'storybook/theming/create';
import { TAILWIND_COLORS } from './tailwindColors.js';
import commonThemeProps from './common.js';

export default create({
  base: 'light',

  brandImage: '/black-logo.svg',
  ...commonThemeProps, // font and brand

  // Main colors
  colorPrimary: TAILWIND_COLORS.gray['900'],
  colorSecondary: TAILWIND_COLORS.gray['500'],

  // UI
  appBg: TAILWIND_COLORS.gray['100'],
  appPreviewBg: TAILWIND_COLORS.gray['50'],
  appBorderColor: TAILWIND_COLORS.gray['300'],
  appBorderRadius: 0,

  // Text colors
  textColor: TAILWIND_COLORS.gray['900'],
  textInverseColor: TAILWIND_COLORS.gray['900'],

  // Toolbar default and active colors
  barTextColor: TAILWIND_COLORS.gray['500'],
  barHoverColor: TAILWIND_COLORS.gray['600'],
  barSelectedColor: TAILWIND_COLORS.gray['700'],
  barBg: TAILWIND_COLORS.gray['100'],

  // Form colors
  inputBg: TAILWIND_COLORS.white,
  inputBorder: TAILWIND_COLORS.gray['300'],
  inputTextColor: TAILWIND_COLORS.gray['900'],
  inputBorderRadius: 4,

  buttonBg: TAILWIND_COLORS.gray['100'],
  buttonBorder: TAILWIND_COLORS.gray['200'],
  booleanBg: TAILWIND_COLORS.gray['50'],
  booleanSelectedBg: TAILWIND_COLORS.gray['200'],
});
