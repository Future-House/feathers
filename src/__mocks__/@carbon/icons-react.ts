import * as React from 'react';

// Create a mock icon component factory
const createMockIcon = (iconName: string) => {
  const MockIcon = ({ size = 16, ...props }: any) =>
    React.createElement('svg', {
      'data-icon': iconName,
      width: size,
      height: size,
      ...props,
    });
  MockIcon.displayName = iconName;
  return MockIcon;
};

// Export as a Proxy using module.exports to handle named exports
module.exports = new Proxy(
  { __esModule: true },
  {
    get: (target, prop: string) => {
      if (prop === '__esModule') return true;
      if (prop === 'default') return target;
      if (typeof prop === 'string') {
        return createMockIcon(prop);
      }
      return undefined;
    },
  }
);
