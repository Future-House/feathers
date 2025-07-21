import * as React from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $convertFromMarkdownString,
  $convertToMarkdownString,
  TRANSFORMERS,
} from '@lexical/markdown';
import { FileText, Eye } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Toggle } from '@/components/toggle';

export function MarkdownTogglePlugin({ className }: { className?: string }) {
  const [editor] = useLexicalComposerContext();
  const [isMarkdownMode, setIsMarkdownMode] = React.useState(false);
  const [markdownContent, setMarkdownContent] = React.useState('');

  const toggleMarkdownMode = React.useCallback(() => {
    if (!isMarkdownMode) {
      // Switch to markdown mode
      editor.getEditorState().read(() => {
        const markdown = $convertToMarkdownString(TRANSFORMERS);
        setMarkdownContent(markdown);
      });
    } else {
      // Switch back to rich text mode
      editor.update(() => {
        $convertFromMarkdownString(markdownContent, TRANSFORMERS);
      });
    }

    setIsMarkdownMode(!isMarkdownMode);
  }, [editor, isMarkdownMode, markdownContent]);

  const handleMarkdownChange = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMarkdownContent(event.target.value);
    },
    []
  );

  React.useEffect(() => {
    if (isMarkdownMode) {
      return editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          const markdown = $convertToMarkdownString(TRANSFORMERS);
          setMarkdownContent(markdown);
        });
      });
    }
  }, [editor, isMarkdownMode]);

  return (
    <div className={cn('absolute top-2 right-2', className)}>
      <Toggle
        pressed={isMarkdownMode}
        onPressedChange={toggleMarkdownMode}
        aria-label={
          isMarkdownMode ? 'Switch to rich text' : 'Switch to markdown'
        }
        title={isMarkdownMode ? 'Switch to rich text' : 'Switch to markdown'}
        size="sm"
        variant="outline"
      >
        {isMarkdownMode ? (
          <Eye className="size-4" />
        ) : (
          <FileText className="size-4" />
        )}
      </Toggle>

      {isMarkdownMode && (
        <div className="absolute top-full right-0 mt-2 w-96 max-w-[90vw]">
          <textarea
            value={markdownContent}
            onChange={handleMarkdownChange}
            className="border-input bg-background focus:ring-ring focus:border-ring h-64 w-full resize-none rounded-md border p-3 font-mono text-sm focus:ring-2 focus:outline-none"
            placeholder="Edit markdown here..."
            spellCheck={false}
          />
        </div>
      )}
    </div>
  );
}
