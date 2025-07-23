import * as React from 'react';
import { EditorState, $getRoot } from 'lexical';
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
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';
import { TablePlugin } from '@lexical/react/LexicalTablePlugin';
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin';
import { HashtagPlugin } from '@lexical/react/LexicalHashtagPlugin';
import { AutoLinkPlugin } from '@lexical/react/LexicalAutoLinkPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { $convertFromMarkdownString } from '@lexical/markdown';

// Node imports
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeNode, CodeHighlightNode } from '@lexical/code';
import { LinkNode, AutoLinkNode } from '@lexical/link';
import { TableNode, TableCellNode, TableRowNode } from '@lexical/table';
import { HashtagNode } from '@lexical/hashtag';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { EditorToolbar } from './editor-toolbar';
import { SlashCommandPlugin } from './plugins/slash-command-plugin';
import { MarkdownTogglePlugin } from './plugins/markdown-toggle-plugin';
import { CodeHighlightPlugin } from './plugins/code-highlight-plugin';

const editorVariants = cva(
  'relative w-full bg-background text-base shadow-xs transition-colors placeholder:text-muted-foreground aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 disabled:cursor-not-allowed disabled:opacity-50 min-h-32 p-3'
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
  TableNode,
  TableCellNode,
  TableRowNode,
  HashtagNode,
];

const theme = {
  ltr: 'ltr',
  rtl: 'rtl',
  placeholder:
    'text-muted-foreground relative pointer-events-none inline-block',
  paragraph: 'mb-1 relative',
  quote: 'border-l-4 border-muted-foreground/20 pl-4 italic my-2',
  heading: {
    h1: 'text-3xl font-bold mb-2 mt-4 first:mt-0',
    h2: 'text-2xl font-bold mb-2 mt-3 first:mt-0',
    h3: 'text-xl font-bold mb-1 mt-2 first:mt-0',
    h4: 'text-lg font-bold mb-1 mt-2 first:mt-0',
    h5: 'text-base font-bold mb-1 mt-1 first:mt-0',
    h6: 'text-sm font-bold mb-1 mt-1 first:mt-0',
  },
  list: {
    nested: {
      listitem: 'list-none',
    },
    ol: 'list-decimal list-inside',
    ul: 'list-disc list-inside',
    listitem: 'mb-1',
    listitemChecked: 'line-through text-muted-foreground',
    listitemUnchecked: '',
    checklist: 'list-none',
  },
  hashtag: 'text-blue-600 hover:text-blue-800 cursor-pointer',
  link: 'text-blue-600 underline hover:text-blue-800 cursor-pointer',
  text: {
    bold: 'font-bold',
    italic: 'italic',
    underline: 'underline',
    strikethrough: 'line-through',
    underlineStrikethrough: 'underline line-through',
    code: 'bg-muted px-1 py-0.5 rounded font-mono ', // inline code
    highlight: 'bg-yellow-200 dark:bg-yellow-800',
    subscript: 'text-xs align-sub',
    superscript: 'text-xs align-super',
  },
  code: 'Editor-code block bg-card overflow-x-auto', // code block
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
  table: 'border-collapse border border-border my-4',
  tableCell: 'border border-border px-3 py-2 min-w-16',
  tableCellHeader:
    'border border-border px-3 py-2 bg-muted font-bold text-left',
  hr: 'border-none bg-border h-px my-4',
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

/**
 * TODO:
 * - Add keyboard shortcuts
 */
function Editor({
  className,
  placeholder = 'Start typing...',
  value: _value,
  onChange,
  onValueChange,
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
      editorState: _value
        ? () => $convertFromMarkdownString(_value, TRANSFORMERS)
        : undefined,
    }),
    [disabled, _value]
  );

  const handleEditorChange = React.useCallback(
    (editorState: EditorState) => {
      onChange?.(editorState);

      if (onValueChange) {
        editorState.read(() => {
          const root = $getRoot();
          const textContent = root.getTextContent();
          onValueChange(textContent);
        });
      }
    },
    [onChange, onValueChange]
  );

  return (
    <div
      className={cn(
        'border-input bg-background flex flex-wrap items-center gap-1 rounded-md border p-1',
        className
      )}
      {...props}
    >
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

          {/* Add plugins */}
          <HistoryPlugin />

          {autoFocus && <AutoFocusPlugin />}

          <LinkPlugin />
          <AutoLinkPlugin matchers={[]} />

          <ListPlugin />
          <CheckListPlugin />

          <TablePlugin hasCellMerge={true} hasCellBackgroundColor={true} />

          <HashtagPlugin />

          <TabIndentationPlugin />

          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />

          <OnChangePlugin onChange={handleEditorChange} />

          <CodeHighlightPlugin />

          {slashCommands.length > 0 && (
            <SlashCommandPlugin commands={slashCommands} />
          )}
          {/* End plugins */}
        </div>

        {/* footer/action bar */}
        {showMarkdownToggle && (
          <div
            data-slot="actions-bar"
            className="border-input flex w-full justify-end border-t-1 py-1"
          >
            <MarkdownTogglePlugin />
          </div>
        )}
      </LexicalComposer>
    </div>
  );
}

export { Editor, editorVariants };
