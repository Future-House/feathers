import type { Meta, StoryObj } from '@storybook/react';
import type { LucideProps } from 'lucide-react';
import * as Icons from './index';

// Extract all icon components (filter out the LucideProps type)
const iconComponents = Object.entries(Icons).filter(([name, component]) => {
  return typeof component === 'object' && name !== 'LucideProps';
}) as [string, React.ComponentType<LucideProps>][];

const meta: Meta = {
  title: 'Design System/Icons',
  parameters: {
    docs: {
      description: {
        component: `
# Icon Library

This is the complete iconography library for the design system, powered by [Lucide React](https://lucide.dev/).

## Usage

Import icons directly from the icons module:

\`\`\`tsx
import { Camera, Heart, Star } from '@futurehouse/feathers/icons';

function MyComponent() {
  return (
    <div>
      <Camera size={24} />
      <Heart color="red" />
      <Star className="text-yellow-500" />
    </div>
  );
}
\`\`\`

## Props

All icons inherit from the base Lucide React icon component and accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`size\` | \`number \\| string\` | \`24\` | Sets both width and height |
| \`color\` | \`string\` | \`"currentColor"\` | Sets the stroke color |
| \`strokeWidth\` | \`number \\| string\` | \`2\` | Sets the stroke width |
| \`className\` | \`string\` | - | CSS class names |
| \`style\` | \`CSSProperties\` | - | Inline styles |

## Features

- **Tree-shaking support**: Only import the icons you use
- **Consistent sizing**: All icons are designed on a 24x24 grid
- **Customizable**: Full control over size, color, and styling
- **Accessible**: Proper ARIA attributes and semantic markup
- **TypeScript support**: Full type safety with LucideProps

## Categories

The library includes icons across these categories:
- Navigation & UI
- Actions
- Status & Feedback  
- Communication
- Media & Files
- User & Account
- Settings & Controls
- Weather & Nature
- Business & Finance
- Technology
- Social & Sharing
- Transportation
- Home & Lifestyle
- Shapes & Symbols
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Create a component to display all icons
const IconGrid = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4 p-4">
      {iconComponents.map(([name, IconComponent]) => (
        <div
          key={name}
          className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 p-3"
        >
          <IconComponent size={size} color={color} />
          <span className="text-center text-xs leading-tight break-words">{name}</span>
        </div>
      ))}
    </div>
  );
};

export const AllIcons: Story = {
  render: () => <IconGrid />,
  parameters: {
    docs: {
      description: {
        story: `All available icons in the library (${iconComponents.length} total).`,
      },
    },
  },
};

export const IconSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-6">
      <div className="text-center">
        <Icons.Heart size={16} />
        <div className="mt-2 text-xs">16px</div>
      </div>
      <div className="flex flex-col items-center">
        <Icons.Heart size={24} />
        <div className="mt-2 text-xs">24px (default)</div>
      </div>
      <div className="text-center">
        <Icons.Heart size={32} />
        <div className="mt-2 text-xs">32px</div>
      </div>
      <div className="text-center">
        <Icons.Heart size={48} />
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
      <Icons.Heart color="red" size={32} />
      <Icons.Heart color="blue" size={32} />
      <Icons.Heart color="green" size={32} />
      <Icons.Heart color="#f59e0b" size={32} />
      <Icons.Heart className="text-purple-500" size={32} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons can be colored using the `color` prop or CSS classes.',
      },
    },
  },
};

export const IconStrokeWidth: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-6">
      <div className="flex flex-col items-center">
        <Icons.Heart strokeWidth={1} size={32} />
        <div className="mt-2 text-xs">strokeWidth: 1</div>
      </div>
      <div className="flex flex-col items-center">
        <Icons.Heart strokeWidth={2} size={32} />
        <div className="mt-2 text-xs">strokeWidth: 2 (default)</div>
      </div>
      <div className="flex flex-col items-center">
        <Icons.Heart strokeWidth={3} size={32} />
        <div className="mt-2 text-xs">strokeWidth: 3</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon line weight can be adjusted using the `strokeWidth` prop.',
      },
    },
  },
};
