# Maintainers Guide

## FutureHouse Feathers Design System

This guide provides essential information for developers working on the Feathers component library.

## Project Structure

```
src/
   components/
      ui/           # shadcn/ui components
   lib/             # Utility functions
   index.ts         # Main entry point
```

## Development Workflow

### Adding New Components

1. **Install shadcn/ui components:**

   ```bash
   npx shadcn@latest add [component-name]
   ```

2. **Create component stories:**

   - Follow the pattern in `src/components/ui/[component].stories.tsx`
   - Include DocBlocks for documentation
   - Add multiple story variants and examples

3. **Write comprehensive tests:**

   - Follow the pattern in `src/components/ui/[component].test.tsx`
   - Test all variants, props, and edge cases
   - Ensure 100% test coverage

4. **Export components:**
   - Add exports to `src/index.ts`
   - Export component, variants, and types

### AI Prompt

When creating new components, use the following AI prompt to generate initial code:

```
Install the `shadcn/ui` component <component_name>.

Include:
- Storybook stories with DocBlocks
- Jest tests with @testing-library/react
- Follow the existing file directory structure
```

### Testing

Run tests before committing:

```bash
npm test                   # Run all tests
npm test -- [filename]     # Run specific test file
npm run test:watch         # Watch mode
```

### Linting & Type Checking

Always run before committing:

```bash
npm run lint              # ESLint
npm run typecheck         # TypeScript check
```

### Building

```bash
npm run build             # Build library
npm run dev               # Watch mode for development
```

### Storybook

```bash
npm run storybook         # Start Storybook dev server
npm run build-storybook   # Build static Storybook
npm run deploy-storybook  # Deploy to GitHub Pages
```

## Component Guidelines

### Styling

- Use Tailwind CSS with CSS variables for theming
- Follow existing design tokens in `tailwind.config.js`
- Maintain consistency with shadcn/ui patterns

### TypeScript

- Export component props interfaces
- Use proper generic types where applicable
- Document complex type definitions

### Testing Standards

- Test component rendering and basic functionality
- Test all variant combinations
- Test prop validation and edge cases
- Test accessibility features
- Test ref forwarding
- Mock external dependencies

### Storybook Standards

- Include DocBlocks with component descriptions
- Create stories for all variants
- Add interactive controls for key props
- Include real-world usage examples
- Document prop types and defaults

## Code Style

### Naming Conventions

- Components: PascalCase (`Button`, `Badge`)
- Files: kebab-case for stories/tests (`button.stories.tsx`)
- Props: camelCase
- CSS classes: follow Tailwind conventions

### Import/Export Style

```typescript
// Prefer named exports
export { Button, buttonVariants, type ButtonProps };

// Import shadcn utilities
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
```

## Configuration Files

### components.json

Configures shadcn/ui CLI:

- `baseColor`: Use "neutral" for compatibility
- `cssVariables`: true (for theming)
- Update aliases to match project structure

### package.json

- Maintain peer dependencies for React 19
- Keep devDependencies up to date
- Use semantic versioning

## Theme Configuration

The project uses a red color scheme by default. To maintain consistency:

- Use CSS variables defined in theme
- Don't hardcode colors in components
- Test in both light and dark modes

## Common Issues & Solutions

### shadcn/ui Installation Issues

- Ensure `components.json` is properly configured
- Use "neutral" baseColor to avoid registry issues
- Check that path aliases match tsconfig.json

### Test Failures

- Ensure Jest setup includes `@testing-library/jest-dom`
- Mock external dependencies properly
- Use appropriate queries for accessibility

### TypeScript Errors

- Run `npm run typecheck` regularly
- Ensure proper type exports in index.ts
- Check path aliases in tsconfig.json

## Release Process

1. Update version in `package.json`
2. Run full test suite: `npm test`
3. Run linting: `npm run lint`
4. Run type checking: `npm run typecheck`
5. Build library: `npm run build`
6. Test in consuming applications
7. Create git tag and release

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Storybook Documentation](https://storybook.js.org)
- [Testing Library Documentation](https://testing-library.com)

## Troubleshooting

### Build Issues

- Clear `dist/` directory: `npm run clean`
- Check for TypeScript errors: `npm run typecheck`
- Verify all exports in `src/index.ts`

### Storybook Issues

- Clear Storybook cache: `rm -rf node_modules/.cache`
- Check story file naming conventions
- Verify addon configurations

### Test Issues

- Clear Jest cache: `npx jest --clearCache`
- Check test environment setup
- Verify mock configurations
