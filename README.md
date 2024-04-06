# Feathers (Future House Design System)

## Prerequisites

- React ^18.0.0
- React-dom ^18.0.0

## Getting Started
Install this package as a dependency in the consuming application
```
npm install https://github.com/future-house/feathers#main
```
your application must manually include the component library's fonts, in the `<head>` area:

```
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
```

lastly, import the components you would like to use
```
import { Typography } from '@future-house/feathers';
```

## Running the App Locally with Storybook
Storybook is integrated into this project to serve as a component playground, allowing you to view and interact with all the currently built components in isolation. This is especially useful for development, testing, and showcasing component designs.

### Starting Storybook
To run Storybook locally and explore the components, follow these steps:
```
npm run storybook
```
This will start the Storybook server and open it in your default web browser. By default, Storybook runs on port 6006. The terminal will specify the URL to access Storybook once it's up and running in the event storybook fails to launch

### Navigating Storybook
Within Storybook, you'll find:

Component Library: A list of all the components that have been developed, each with its own set of stories showcasing different states and variations.

Docs: For some components, there may be additional documentation available in the Docs tab, providing more details on usage and props.

Chakra-UI Library: The providing package of our design system components. These components will fully respect the Future House theme, even if not customized
