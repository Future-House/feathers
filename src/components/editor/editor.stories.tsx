import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { EditorState } from 'lexical';
import { Play, FileText, Database } from 'lucide-react';

import { Editor } from './editor';
import type { SlashCommand } from './editor';

const meta: Meta<typeof Editor> = {
  title: 'Components/Editor',
  component: Editor,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A rich text editor built on Lexical with support for markdown, slash commands, and toolbar formatting.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    showToolbar: {
      control: 'boolean',
    },
    showMarkdownToggle: {
      control: 'boolean',
    },
    autoFocus: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Start typing...',
    showToolbar: true,
    showMarkdownToggle: true,
  },
};

export const WithoutToolbar: Story = {
  args: {
    placeholder: 'Editor without toolbar',
    showToolbar: false,
    showMarkdownToggle: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'This editor is disabled',
    disabled: true,
    value: 'This is disabled content that cannot be edited.',
  },
};

export const WithSlashCommands: Story = {
  render: () => {
    const slashCommands: SlashCommand[] = [
      {
        key: 'table',
        label: 'Insert Table',
        icon: <Database className="size-4" />,
        description: 'Insert a table into the document',
        onSelect: () => {
          alert('Table inserted!');
        },
      },
      {
        key: 'image',
        label: 'Insert Image',
        icon: <FileText className="size-4" />,
        description: 'Insert an image into the document',
        onSelect: () => {
          alert('Image dialog opened!');
        },
      },
      {
        key: 'divider',
        label: 'Insert Divider',
        icon: <Play className="size-4" />,
        description: 'Insert a horizontal divider',
        onSelect: () => {
          alert('Divider inserted!');
        },
      },
    ];

    return (
      <Editor
        placeholder="Type '/' to see available commands..."
        slashCommands={slashCommands}
      />
    );
  },
};

const ControlledEditor = () => {
  const [value, setValue] = useState('');
  const [editorState, setEditorState] = useState<EditorState | null>(null);

  return (
    <div className="space-y-4">
      <Editor
        placeholder="This is a controlled editor..."
        value={value}
        onValueChange={setValue}
        onChange={setEditorState}
      />

      <div className="space-y-2">
        <div>
          <strong>Text Value:</strong>
          <div className="bg-muted rounded p-2 font-mono text-sm">
            {value || 'No content'}
          </div>
        </div>

        <div>
          <strong>Editor State:</strong>
          <div className="bg-muted max-h-32 overflow-auto rounded p-2 font-mono text-sm">
            {editorState
              ? JSON.stringify(editorState.toJSON(), null, 2)
              : 'No state'}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledEditor />,
};

export const AutoFocus: Story = {
  args: {
    placeholder: 'This editor has auto focus...',
    autoFocus: true,
  },
};

export const WithInitialContent: Story = {
  args: {
    placeholder: 'Editor with initial content...',
    value: `# Welcome to the Editor

This editor supports **markdown** formatting, including:

- *Italic text*
- **Bold text**
- \`Inline code\`
- [Links](https://example.com)

> Blockquotes are also supported

\`\`\`javascript
// Code blocks work too
console.log('Hello, world!');
\`\`\``,
  },
};
