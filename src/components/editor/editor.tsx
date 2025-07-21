import * as React from 'react';
import { EditorState } from 'lexical';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { TRANSFORMERS } from '@lexical/markdown';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeNode, CodeHighlightNode } from '@lexical/code';
import { LinkNode, AutoLinkNode } from '@lexical/link';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { EditorToolbar } from './editor-toolbar';
import { SlashCommandPlugin } from './plugins/slash-command-plugin';
import { MarkdownTogglePlugin } from './plugins/markdown-toggle-plugin';

const editorVariants = cva(
  'relative w-full rounded-md border border-input bg-background text-base shadow-xs transition-colors placeholder:text-muted-foreground focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 disabled:cursor-not-allowed disabled:opacity-50 min-h-32 p-3'
);

const nodes = [
  HeadingNode,
  ListNode,
  ListItemNode,
  QuoteNode,
  CodeNode,
  CodeHighlightNode,
  LinkNode,
  AutoLinkNode,
];

const theme = {
  ltr: 'ltr',
  rtl: 'rtl',
  placeholder: 'text-muted-foreground',
  paragraph: 'mb-1',
  quote: 'border-l-4 border-muted-foreground/20 pl-4 italic',
  heading: {
    h1: 'text-3xl font-bold mb-2',
    h2: 'text-2xl font-bold mb-2',
    h3: 'text-xl font-bold mb-1',
    h4: 'text-lg font-bold mb-1',
    h5: 'text-base font-bold mb-1',
    h6: 'text-sm font-bold mb-1',
  },
  list: {
    nested: {
      listitem: 'list-none',
    },
    ol: 'list-decimal list-inside',
    ul: 'list-disc list-inside',
    listitem: 'mb-1',
  },
  link: 'text-blue-600 underline hover:text-blue-800',
  text: {
    bold: 'font-bold',
    italic: 'italic',
    underline: 'underline',
    strikethrough: 'line-through',
    code: 'bg-muted px-1.5 py-0.5 rounded text-sm font-mono',
  },
  code: 'bg-muted p-4 rounded-md font-mono text-sm block',
  codeHighlight: {
    atrule: 'text-purple-600',
    attr: 'text-blue-600',
    boolean: 'text-red-600',
    builtin: 'text-purple-600',
    cdata: 'text-gray-600',
    char: 'text-green-600',
    class: 'text-blue-600',
    'class-name': 'text-blue-600',
    comment: 'text-gray-600 italic',
    constant: 'text-red-600',
    deleted: 'text-red-600',
    doctype: 'text-gray-600',
    entity: 'text-red-600',
    function: 'text-purple-600',
    important: 'text-red-600',
    inserted: 'text-green-600',
    keyword: 'text-purple-600',
    namespace: 'text-blue-600',
    number: 'text-red-600',
    operator: 'text-gray-800',
    prolog: 'text-gray-600',
    property: 'text-blue-600',
    punctuation: 'text-gray-800',
    regex: 'text-green-600',
    selector: 'text-green-600',
    string: 'text-green-600',
    symbol: 'text-red-600',
    tag: 'text-blue-600',
    url: 'text-blue-600',
    variable: 'text-blue-600',
  },
};

export interface SlashCommand {
  key: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
  onSelect: () => void;
}

export interface EditorProps {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (editorState: EditorState) => void;
  onValueChange?: (value: string) => void;
  slashCommands?: SlashCommand[];
  showToolbar?: boolean;
  showMarkdownToggle?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  'aria-invalid'?: boolean;
}

function EditorPlaceholder({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-muted-foreground pointer-events-none absolute top-3 left-3 select-none">
      {children}
    </div>
  );
}

function Editor({
  className,
  placeholder = 'Start typing...',
  value: _value,
  onChange: _onChange,
  onValueChange: _onValueChange,
  slashCommands = [],
  showToolbar = true,
  showMarkdownToggle = true,
  autoFocus = false,
  disabled = false,
  'aria-invalid': ariaInvalid,
  ...props
}: EditorProps) {
  const initialConfig = React.useMemo(
    () => ({
      namespace: 'Editor',
      theme,
      onError: (error: Error) => {
        console.error('Lexical error:', error);
      },
      nodes,
      editable: !disabled,
    }),
    [disabled]
  );

  return (
    <div className={cn('space-y-2', className)} {...props}>
      <LexicalComposer initialConfig={initialConfig}>
        {showToolbar && <EditorToolbar />}

        <div
          className={cn(editorVariants(), {
            'cursor-not-allowed opacity-50': disabled,
          })}
          aria-invalid={ariaInvalid}
        >
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="resize-none overflow-hidden outline-none"
                spellCheck={false}
              />
            }
            placeholder={<EditorPlaceholder>{placeholder}</EditorPlaceholder>}
            ErrorBoundary={LexicalErrorBoundary}
          />

          <HistoryPlugin />

          {autoFocus && <AutoFocusPlugin />}

          <LinkPlugin />

          <ListPlugin />

          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />

          {slashCommands.length > 0 && (
            <SlashCommandPlugin commands={slashCommands} />
          )}

          {showMarkdownToggle && <MarkdownTogglePlugin />}
        </div>
      </LexicalComposer>
    </div>
  );
}

export { Editor, editorVariants };
