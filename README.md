# Feathers - Future House Component Library

A modern React component library built with TypeScript, Tailwind CSS, and Radix UI primitives. Transitioned from Chakra UI to a shadcn/ui-based architecture for better customization and performance.

## Prerequisites

- React ^19.0.0
- React DOM ^19.0.0
- Tailwind CSS ^4.0.0

## Demo environment

https://future-house.github.io/feathers/

## Installation

```bash
npm install @future-house/feathers
# or from GitHub
npm install https://github.com/future-house/feathers#main
```

## Setup

### 1. Configure Tailwind CSS

Add Feathers components to your `tailwind.config.ts` content paths:

```ts
export default {
  content: [
    // ... your app's paths
    './node_modules/@future-house/feathers/dist/**/*.{js,ts,jsx,tsx}',
  ],
  // ... rest of your config
};
```

### 2. Import CSS

Import the component styles in your app's entry point:

```js
import '@future-house/feathers/dist/index.css';
```

### 3. Add Fonts

Include the required fonts in your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
  rel="stylesheet"
/>
```

## Usage

```jsx
import { Button, Card, Typography } from '@future-house/feathers';

function App() {
  return (
    <Card>
      <Typography variant="h1">Welcome</Typography>
      <Button>Get Started</Button>
    </Card>
  );
}
```

## Development

### Running Storybook

```bash
npm install
npm run storybook
```

Storybook runs on http://localhost:6006 and provides:

- Interactive component playground
- Component documentation and props
- Different states and variations

### Building

```bash
npm run build        # Production build
npm run dev         # Development mode
npm run lint        # ESLint checking
npm run format      # Prettier formatting
npm run typecheck   # TypeScript checking
npm test           # Run tests
```

## Component Architecture

Built with:

- **Radix UI** - Accessible, unstyled UI primitives
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Component patterns and styling
- **Carbon Icons** - Icon library
- **TypeScript** - Full type safety
