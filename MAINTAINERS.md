# Maintainers Guide

## FutureHouse Feathers Design System

This guide provides essential information for developers working on the Feathers component library.

## Project Structure

```
src/
   components/      # shadcn/ui components
   icons/           # icons (pass-through of lucide)
   lib/             # Utility functions
   index.ts         # Main entry point
```

## Development Workflow

### Adding New Components

#### AI Prompt

When creating new components, use the following AI prompt to generate initial component code. The code can be
extended after adding the base `shadcn` component.

```
Install the `shadcn/ui` component <component_name>.

Enforce the following requirements:
- Reference the following link for the most up-to-date install command and information: <shadcn_URL>
- Storybook stories with DocBlocks
- Jest tests with @testing-library/react
- Follow the existing file directory structure

```
