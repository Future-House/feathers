import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CarbonIconProps } from '@carbon/icons-react';
import { useState } from 'react';
import * as Icons from './index';
import { Input } from '../components/input';

// Extract all icon components (filter out the CarbonIconProps type)
const iconComponents = Object.entries(Icons).filter(([name, component]) => {
  return typeof component === 'object' && name !== 'CarbonIconProps';
}) as [string, React.ComponentType<CarbonIconProps>][];

const meta: Meta = {
  title: 'Icons/Icons',
  parameters: {
    docs: {
      description: {
        component: `
# Icon Library

This is the complete iconography library for the design system, powered by [Carbon Design System](https://carbondesignsystem.com/guidelines/icons/library).

## Usage

Import icons directly from the icons module:

\`\`\`tsx
import { Camera, Favorite, Star } from '@futurehouse/feathers/icons';

function MyComponent() {
  return (
    <div>
      <Camera size={24} />
      <Favorite size={32} className="text-red-500" />
      <Star size={20} className="text-yellow-500" />
    </div>
  );
}
\`\`\`

## Props

All icons inherit from the base Carbon React icon component and accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`size\` | \`number \\| string\` | \`16\` | Sets both width and height |
| \`className\` | \`string\` | - | CSS class names |
| \`style\` | \`CSSProperties\` | - | Inline styles |

## Features

- **Tree-shaking support**: Only import the icons you use
- **Consistent design**: All icons follow Carbon Design System guidelines
- **Customizable**: Full control over size, color via className, and styling
- **Accessible**: Proper ARIA attributes and semantic markup
- **TypeScript support**: Full type safety with CarbonIconProps

## Categories

The library includes icons across these categories:
- Navigation & UI
- Actions
- Status & Indicators
- Communication
- Media & Files
- User & Account
- Settings & Controls
- Data & Analytics
- Business & Finance
- Technology & Development
- Social & Sharing
- Transportation
- and many more
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Create a component to display all icons
const IconGrid = ({
  size = 24,
  color = 'currentColor',
}: {
  size?: number;
  color?: string;
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIcons = iconComponents.filter(([name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search icons..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full max-w-md rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <p className="mt-2 text-sm text-gray-600">
          Showing {filteredIcons.length} of {iconComponents.length} icons
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4">
        {filteredIcons.map(([name, IconComponent]) => (
          <div
            key={name}
            className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 p-3"
          >
            <IconComponent size={size} color={color} />
            <span className="text-center text-xs leading-tight break-all">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AllIcons: Story = {
  render: () => <IconGrid />,
  parameters: {
    docs: {
      description: {
        story: `All available icons in the library (${iconComponents.length} total). Use the search field to filter icons by name.`,
      },
    },
  },
};

export const IconSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-6">
      <div className="text-center">
        <Icons.Favorite size={16} />
        <div className="mt-2 text-xs">16px (default)</div>
      </div>
      <div className="flex flex-col items-center">
        <Icons.Favorite size={24} />
        <div className="mt-2 text-xs">24px</div>
      </div>
      <div className="text-center">
        <Icons.Favorite size={32} />
        <div className="mt-2 text-xs">32px</div>
      </div>
      <div className="text-center">
        <Icons.Favorite size={48} />
        <div className="mt-2 text-xs">48px</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons can be sized using the `size` prop.',
      },
    },
  },
};

export const IconColors: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-6">
      <Icons.Favorite className="text-red-500" size={32} />
      <Icons.Favorite className="text-blue-500" size={32} />
      <Icons.Favorite className="text-green-500" size={32} />
      <Icons.Favorite className="text-amber-500" size={32} />
      <Icons.Favorite className="text-purple-500" size={32} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Icons can be colored using CSS classes with Tailwind or custom styles.',
      },
    },
  },
};

export const FilledVariants: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-6">
      <div className="flex flex-col items-center">
        <Icons.Favorite size={32} />
        <div className="mt-2 text-xs">Favorite</div>
      </div>
      <div className="flex flex-col items-center">
        <Icons.FavoriteFilled size={32} />
        <div className="mt-2 text-xs">FavoriteFilled</div>
      </div>
      <div className="flex flex-col items-center">
        <Icons.Star size={32} />
        <div className="mt-2 text-xs">Star</div>
      </div>
      <div className="flex flex-col items-center">
        <Icons.StarFilled size={32} />
        <div className="mt-2 text-xs">StarFilled</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Many icons have both regular and filled variants.',
      },
    },
  },
};
