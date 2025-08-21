import { addons } from 'storybook/manager-api';
import themeLight from './themes/theme-light.js';
import themeDark from './themes/theme-dark.js';

const prefersColorSchemeDark = window.matchMedia(
  '(prefers-color-scheme: dark)'
);

function setSystemTheme(theme) {
  addons.setConfig({
    theme: theme ? themeDark : themeLight,
  });
}

setSystemTheme(prefersColorSchemeDark.matches);

prefersColorSchemeDark.addEventListener('change', event => {
  setSystemTheme(event.matches);
});
