# Claude AI Assistant Instructions

This repository contains the Feathers component library - a React component library built with TypeScript, Tailwind CSS, and Radix UI primitives.

## Project Structure

- **Components**: Located in `src/components/` with each component in its own directory
- **Build Output**: `dist/` directory contains compiled components and type definitions
- **Examples**: `examples/vite-tailwind-typescript/` contains a test application
- **Storybook**: Component documentation and examples

## Build Process

The project uses a custom build script (`scripts/build.js`) that:

1. Compiles TypeScript with Babel for JavaScript output
2. Generates TypeScript declarations using `tsc`
3. Fixes path aliases in generated declarations (@/ → relative paths)
4. Maintains component directory structure in output

### Build Commands

- `npm run build` - Full production build
- `npm run dev` - Development mode
- `npm run lint` - ESLint checking
- `npm run format` - Format code according to Prettier
- `npm run typecheck` - TypeScript type checking

## Component Development

When adding new components:

1. Create directory in `src/components/[component-name]/`
2. Add main component file: `[component-name].tsx`
3. Add index file: `index.ts` for exports
4. Add Storybook stories: `[component-name].stories.tsx`
5. Add Jest tests: `[component-name].test.tsx`. Ensure the unit tests added pass
6. Update main exports in `src/components/index.ts` and `src/index.ts`
7. Ensure tree-shaking is supported for all new components added
8. Be sure to run `npm run format` before attempting to build the project
9. For any new code, I want to avoid the `any` type usage as much as possible
10. Ensure dark mode is supported for new components added

### Import Patterns

Components support multiple import paths:

- `import { Button } from '@future-house/feathers'`
- `import { Button } from '@future-house/feathers/components/button'`
- Icons: `import { Mail } from '@future-house/feathers/icons'`

## Testing

- **Unit Tests**: Jest with React Testing Library
- **Storybook**: Interactive component documentation
- **Example App**: Real-world usage testing in `examples/`

Run tests with: `npm test`

## Technology Stack

- **React 19** with TypeScript
- **Radix UI** primitives for accessibility
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Storybook** for documentation
- **Jest** for testing
- **Babel** for compilation

## Known Issues

- TypeScript declarations require path alias fixing during build
- Component directory structure must be maintained in build output
- Examples app requires proper import path configuration
