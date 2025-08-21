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

// Kitchen Sink Examples

const KitchenSinkControlled = () => {
  const [content, setContent] = useState(`# Kitchen Sink Example

This editor demonstrates **all available features** and formatting options.

## Text Formatting

Basic text formatting includes:
- **Bold text** (Cmd/Ctrl + B)
- *Italic text* (Cmd/Ctrl + I)  
- ~~Strikethrough text~~
- \`Inline code\` formatting
- Regular text with no formatting

You can also combine formats like ***bold and italic*** or **bold with \`code\`**.

## Headings

# Heading 1
## Heading 2  
### Heading 3

## Lists

### Unordered Lists
- First item
- Second item with **bold text**
- Third item with *italic text*
  - Nested item level 1
    - Nested item level 2
- Back to top level

### Ordered Lists
1. First numbered item
2. Second numbered item with \`code\`
3. Third numbered item
   1. Nested numbered item
   2. Another nested item
4. Back to top level

## Links and References

Here are some example links:
- [Lexical Documentation](https://lexical.dev)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://typescriptlang.org)

## Blockquotes

> This is a blockquote with **formatted text**.
> 
> It can span multiple lines and include *various* formatting options.
> 
> > This is a nested blockquote for emphasis.

## Code Examples

### Inline Code
Use \`useState\` and \`useEffect\` hooks in React components.

### Code Blocks

\`\`\`typescript
// TypeScript example
interface EditorProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const MyEditor: React.FC<EditorProps> = ({ value, onChange, placeholder }) => {
  return (
    <Editor 
      value={value}
      onValueChange={onChange}
      placeholder={placeholder}
      showToolbar={true}
    />
  );
};
\`\`\`

\`\`\`javascript
// JavaScript example  
function calculateTotal(items) {
  return items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
}

const cart = [
  { name: 'Laptop', price: 999, quantity: 1 },
  { name: 'Mouse', price: 25, quantity: 2 }
];

console.log('Total:', calculateTotal(cart));
\`\`\`

\`\`\`css
/* CSS example */
.editor-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  background: white;
}

.editor-content {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  color: #333;
}
\`\`\`

## Advanced Features

### Keyboard Shortcuts
- **Cmd/Ctrl + B**: Bold
- **Cmd/Ctrl + I**: Italic
- **Cmd/Ctrl + U**: Underline  
- **Cmd/Ctrl + K**: Insert link
- **Tab**: Indent (in lists)
- **Shift + Tab**: Outdent (in lists)

### Editor Features
- ✅ Real-time markdown parsing
- ✅ Toolbar formatting controls
- ✅ Keyboard shortcuts
- ✅ Auto-focus management
- ✅ Undo/redo history
- ✅ Copy/paste support
- ✅ Accessibility compliance

### Use Cases
This editor is perfect for:
1. **Documentation**: Technical docs, user guides, API references
2. **Content Management**: Blog posts, articles, marketing copy
3. **Communication**: Comments, messages, rich text input
4. **Development**: README files, code documentation
5. **Education**: Course content, tutorials, learning materials

## Try It Out!

You can test all features by:
- Typing and formatting text with the toolbar
- Using keyboard shortcuts for quick formatting
- Creating lists and nesting items
- Adding links and code examples
- Switching between markdown and rich text modes

*Happy editing!* 🎉`);

  const [editorState, setEditorState] = useState<EditorState | null>(null);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Kitchen Sink Editor</h3>
        <p className="text-muted-foreground">
          A comprehensive example showcasing all editor features and formatting
          options.
        </p>
      </div>

      <Editor
        value={content}
        onValueChange={setContent}
        onChange={setEditorState}
        placeholder="Start exploring all the editor features..."
        showToolbar={true}
        showMarkdownToggle={true}
        className="min-h-96"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <h4 className="font-medium">Markdown Output</h4>
          <div className="bg-muted max-h-48 overflow-auto rounded p-3 font-mono text-sm">
            <pre className="whitespace-pre-wrap">{content}</pre>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Editor Statistics</h4>
          <div className="bg-muted rounded p-3 text-sm">
            <div className="space-y-1">
              <div>Characters: {content.length}</div>
              <div>
                Words:{' '}
                {content.split(/\s+/).filter(word => word.length > 0).length}
              </div>
              <div>Lines: {content.split('\n').length}</div>
              <div>
                Paragraphs:{' '}
                {
                  content.split(/\n\s*\n/).filter(p => p.trim().length > 0)
                    .length
                }
              </div>
              <div>
                Editor State: {editorState ? 'Active' : 'Not initialized'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const KitchenSink: Story = {
  render: () => <KitchenSinkControlled />,
  parameters: {
    docs: {
      description: {
        story:
          'A comprehensive example demonstrating all editor features, formatting options, and use cases.',
      },
    },
  },
};

const AdvancedSlashCommandsEditor = () => {
  const advancedSlashCommands: SlashCommand[] = [
    {
      key: 'heading1',
      label: 'Heading 1',
      icon: <FileText className="size-4" />,
      description: 'Insert a large heading',
      onSelect: () => {
        // In a real implementation, this would insert a heading
        alert('Heading 1 inserted!');
      },
    },
    {
      key: 'heading2',
      label: 'Heading 2',
      icon: <FileText className="size-4" />,
      description: 'Insert a medium heading',
      onSelect: () => {
        alert('Heading 2 inserted!');
      },
    },
    {
      key: 'heading3',
      label: 'Heading 3',
      icon: <FileText className="size-4" />,
      description: 'Insert a small heading',
      onSelect: () => {
        alert('Heading 3 inserted!');
      },
    },
    {
      key: 'bullet-list',
      label: 'Bullet List',
      icon: <Database className="size-4" />,
      description: 'Create a bulleted list',
      onSelect: () => {
        alert('Bullet list created!');
      },
    },
    {
      key: 'numbered-list',
      label: 'Numbered List',
      icon: <Database className="size-4" />,
      description: 'Create a numbered list',
      onSelect: () => {
        alert('Numbered list created!');
      },
    },
    {
      key: 'quote',
      label: 'Quote',
      icon: <FileText className="size-4" />,
      description: 'Insert a blockquote',
      onSelect: () => {
        alert('Blockquote inserted!');
      },
    },
    {
      key: 'code',
      label: 'Code Block',
      icon: <Play className="size-4" />,
      description: 'Insert a code block',
      onSelect: () => {
        alert('Code block inserted!');
      },
    },
    {
      key: 'divider',
      label: 'Divider',
      icon: <Database className="size-4" />,
      description: 'Insert a horizontal divider',
      onSelect: () => {
        alert('Divider inserted!');
      },
    },
    {
      key: 'table',
      label: 'Table',
      icon: <Database className="size-4" />,
      description: 'Insert a table',
      onSelect: () => {
        alert('Table inserted!');
      },
    },
    {
      key: 'image',
      label: 'Image',
      icon: <FileText className="size-4" />,
      description: 'Upload and insert an image',
      onSelect: () => {
        alert('Image upload dialog opened!');
      },
    },
  ];

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Advanced Slash Commands</h3>
        <p className="text-muted-foreground">
          Type &quot;/&quot; to access a comprehensive set of content insertion
          commands.
        </p>
      </div>

      <Editor
        placeholder="Type '/' to see all available commands..."
        slashCommands={advancedSlashCommands}
        value={`# Try the Slash Commands

Type "/" anywhere in this editor to see the available commands:

- /heading1, /heading2, /heading3 - Different heading levels
- /bullet-list, /numbered-list - Create lists
- /quote - Insert blockquotes  
- /code - Add code blocks
- /table - Insert tables
- /image - Upload images
- /divider - Add horizontal rules

Start typing "/" below to try them out:`}
      />
    </div>
  );
};

export const AdvancedSlashCommands: Story = {
  render: () => <AdvancedSlashCommandsEditor />,
  parameters: {
    docs: {
      description: {
        story:
          'Advanced slash commands for quick content insertion and formatting.',
      },
    },
  },
};

const FeatureShowcaseEditor = () => {
  const [showToolbar, setShowToolbar] = useState(true);
  const [showMarkdownToggle, setShowMarkdownToggle] = useState(true);
  const [autoFocus, setAutoFocus] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [content, setContent] = useState(`# Feature Showcase

This example demonstrates the editor's **configurability** and **flexibility**.

## Current Settings
- Toolbar: ${showToolbar ? 'Enabled' : 'Disabled'}
- Markdown Toggle: ${showMarkdownToggle ? 'Enabled' : 'Disabled'}
- Auto Focus: ${autoFocus ? 'Enabled' : 'Disabled'}
- Editor State: ${disabled ? 'Disabled' : 'Enabled'}

Use the controls below to see how different configurations affect the editor behavior.

## Rich Text Features
- **Bold**, *italic*, ~~strikethrough~~
- \`Inline code\` and code blocks
- [Links](https://example.com) and lists
- > Blockquotes and more!

Try changing the settings to see how the editor adapts!`);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Feature Showcase</h3>
        <p className="text-muted-foreground">
          Interactive demo showing different editor configurations and their
          effects.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showToolbar}
            onChange={e => setShowToolbar(e.target.checked)}
            className="rounded"
          />
          <span className="text-sm">Show Toolbar</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showMarkdownToggle}
            onChange={e => setShowMarkdownToggle(e.target.checked)}
            className="rounded"
          />
          <span className="text-sm">Markdown Toggle</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={autoFocus}
            onChange={e => setAutoFocus(e.target.checked)}
            className="rounded"
          />
          <span className="text-sm">Auto Focus</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={disabled}
            onChange={e => setDisabled(e.target.checked)}
            className="rounded"
          />
          <span className="text-sm">Disabled</span>
        </label>
      </div>

      <Editor
        value={content}
        onValueChange={setContent}
        showToolbar={showToolbar}
        showMarkdownToggle={showMarkdownToggle}
        autoFocus={autoFocus}
        disabled={disabled}
        placeholder="Configure the editor using the controls above..."
        className="min-h-64"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <h4 className="font-medium">Current Configuration</h4>
          <div className="bg-muted rounded p-3 font-mono text-sm">
            <pre>{`<Editor
  showToolbar={${showToolbar}}
  showMarkdownToggle={${showMarkdownToggle}}
  autoFocus={${autoFocus}}
  disabled={${disabled}}
  value={content}
  onValueChange={setContent}
/>`}</pre>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Content Statistics</h4>
          <div className="bg-muted rounded p-3 text-sm">
            <div className="space-y-1">
              <div>Length: {content.length} characters</div>
              <div>
                Words: {content.split(/\s+/).filter(w => w.length > 0).length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FeatureShowcase: Story = {
  render: () => <FeatureShowcaseEditor />,
  parameters: {
    docs: {
      description: {
        story:
          'Interactive showcase demonstrating different editor configurations and real-time property changes.',
      },
    },
  },
};
