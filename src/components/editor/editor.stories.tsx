import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { EditorState } from 'lexical';
import { Play, FileText, Database } from '../../icons';

import { Editor } from './editor';
import type { SlashCommand } from './editor';

const meta: Meta<typeof Editor> = {
  title: 'Components/Editor',
  component: Editor,
  parameters: {
    docs: {
      description: {
        component:
          'A rich text editor built on Lexical with support for markdown, slash commands, and toolbar formatting.',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the editor wrapper',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when the editor is empty',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Start typing...' },
      },
    },
    value: {
      control: 'text',
      description:
        'Controlled value as markdown/text string. Use for simple content management.',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      control: false,
      description:
        'Callback fired when editor state changes. Receives full Lexical EditorState object.',
      table: {
        type: { summary: '(editorState: EditorState) => void' },
      },
    },
    onValueChange: {
      control: false,
      description:
        'Callback fired when text content changes. Receives plain text string.',
      table: {
        type: { summary: '(value: string) => void' },
      },
    },
    slashCommands: {
      control: false,
      description:
        'Array of custom slash commands. Type "/" in editor to trigger.',
      table: {
        type: { summary: 'SlashCommand[]' },
      },
    },
    showToolbar: {
      control: 'boolean',
      description: 'Whether to display the formatting toolbar above the editor',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showMarkdownToggle: {
      control: 'boolean',
      description:
        'Whether to display the markdown toggle button in the action bar',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    autoFocus: {
      control: 'boolean',
      description: 'Whether the editor should automatically focus when mounted',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the editor is disabled and read-only',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    'aria-invalid': {
      control: 'boolean',
      description: 'Indicates whether the editor has a validation error',
      table: {
        type: { summary: 'boolean' },
      },
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
