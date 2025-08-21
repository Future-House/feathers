import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { ScrollArea, ScrollBar } from './scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '../card/card';
import { Badge } from '../badge/badge';

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    docs: {
      description: {
        component:
          'Augments native scroll functionality for custom, cross-browser styling.',
      },
    },
  },
  tags: [],
  argTypes: {
    asChild: {
      control: { type: 'boolean' },
      description: 'Render as a child component using Radix Slot',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        disable: true,
      },
    },
    type: {
      control: { type: 'select' },
      options: ['auto', 'always', 'scroll', 'hover'],
      description: 'Describes the nature of scrollbar visibility',
      table: {
        type: { summary: 'auto | always | scroll | hover' },
        defaultValue: { summary: 'hover' },
      },
    },
    scrollHideDelay: {
      control: 'number',
      description:
        'If type is set to either scroll or hover, this prop determines the length of time, in milliseconds, before the scrollbars are hidden after the user stops interacting with scrollbars',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '600' },
      },
    },
    dir: {
      control: { type: 'select' },
      options: ['ltr', 'rtl'],
      description: 'The reading direction of the scroll area',
      table: {
        type: { summary: 'ltr | rtl' },
      },
    },
    nonce: {
      control: 'text',
      description:
        'An optional nonce attribute that is passed to the inline styles for use in CSP-enabled environments that use strict rules to enhance security',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the root element',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  subcomponents: {
    ScrollBar: {
      description:
        'A customizable scrollbar component that can be used independently or within a ScrollArea. Supports both horizontal and vertical orientations.',
      argTypes: {
        orientation: {
          type: 'string',
          description: 'The orientation of the scrollbar.',
          defaultValue: 'vertical',
        },
        forceMount: {
          type: 'boolean',
          description:
            'Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.',
        },
        className: {
          type: 'string',
          description: 'Additional CSS classes to apply to the scrollbar.',
        },
      },
    },
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

function BasicScrollAreaComponent({ className = '', ...args }) {
  return (
    <ScrollArea
      className={`h-72 w-48 rounded-md border ${className}`}
      {...args}
    >
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="text-sm">
            Tag {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

function HorizontalScrollComponent({ className = '', ...args }) {
  return (
    <ScrollArea
      className={`w-96 rounded-md border whitespace-nowrap ${className}`}
      {...args}
    >
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="flex h-24 w-32 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-50"
          >
            <span className="text-sm font-medium">Item {i + 1}</span>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

function ChatMessagesComponent({ className = '', ...args }) {
  const messages = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    author: i % 3 === 0 ? 'Alice' : i % 3 === 1 ? 'Bob' : 'Charlie',
    message: `This is message ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ${
      i % 5 === 0
        ? 'This is a longer message with more content to show text wrapping.'
        : ''
    }`,
    time: `${Math.floor(Math.random() * 12) + 1}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
  }));

  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle className="text-lg">Chat Messages</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className={`h-80 px-4 pb-4${className}`} {...args}>
          <div className="space-y-3">
            {messages.map(msg => (
              <div key={msg.id} className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-semibold">{msg.author}</span>
                  <span className="text-muted-foreground text-xs">
                    {msg.time}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{msg.message}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

function TagListComponent({ className = '', ...args }) {
  const tags = [
    'React',
    'TypeScript',
    'JavaScript',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Redis',
    'Docker',
    'Kubernetes',
    'AWS',
    'Azure',
    'GCP',
    'Git',
    'GitHub',
    'GitLab',
    'Jest',
    'Cypress',
    'Webpack',
    'Vite',
    'Rollup',
    'Babel',
    'ESLint',
    'Prettier',
    'Husky',
    'Semantic Release',
    'Storybook',
    'Figma',
    'Adobe XD',
    'Sketch',
  ];

  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle className="text-lg">Technologies</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className={`h-48 ${className}`} {...args}>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

function NestedScrollComponent({ className = '', ...args }) {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="text-lg">Nested Scroll Areas</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className={`h-80 ${className}`} {...args}>
          <div className="space-y-4 p-4">
            {Array.from({ length: 5 }).map((_, sectionIndex) => (
              <div key={sectionIndex} className="rounded-lg border">
                <div className="bg-muted/50 border-b p-3">
                  <h3 className="font-medium">Section {sectionIndex + 1}</h3>
                </div>
                <ScrollArea className="h-32">
                  <div className="space-y-2 p-3">
                    {Array.from({ length: 15 }).map((_, itemIndex) => (
                      <div key={itemIndex} className="text-sm">
                        Item {sectionIndex + 1}.{itemIndex + 1} - Some content
                        here
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

function CodeBlockComponent({ className = '', ...args }) {
  const codeContent = `import React from 'react';
import { ScrollArea } from '@/components/scroll-area';

export function MyComponent() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">
          Scroll Area Example
        </h4>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="text-sm">
            Line {i + 1}: This is some example content
            that demonstrates the scroll functionality.
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

// You can customize the scrollbar appearance
export function CustomScrollArea() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <p>Your content here...</p>
      </div>
      <ScrollBar className="w-3" />
    </ScrollArea>
  );
}`;

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-lg">Code Example</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className={`h-80 ${className}`} {...args}>
          <pre className="p-4 text-xs">
            <code>{codeContent}</code>
          </pre>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export const Basic: Story = {
  render: args => <BasicScrollAreaComponent {...args} />,
};

export const HorizontalScroll: Story = {
  render: args => <HorizontalScrollComponent {...args} />,
};

export const ChatMessages: Story = {
  render: args => <ChatMessagesComponent {...args} />,
};

export const TagList: Story = {
  render: args => <TagListComponent {...args} />,
};

export const NestedScroll: Story = {
  render: args => <NestedScrollComponent {...args} />,
};

export const CodeBlock: Story = {
  render: args => <CodeBlockComponent {...args} />,
};

export const WithScrollType: Story = {
  args: {
    type: 'always',
  },
  render: ({ className, ...args }) => (
    <ScrollArea
      {...args}
      className={`h-72 w-48 rounded-md border ${className}`}
    >
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">
          Always Visible Scrollbar
        </h4>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
