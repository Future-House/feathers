import * as React from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $convertFromMarkdownString,
  $convertToMarkdownString,
  TRANSFORMERS,
} from '@lexical/markdown';
import { $createCodeNode, $isCodeNode } from '@lexical/code';
import { $getRoot, $createTextNode } from 'lexical';
import { FileText } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/button';

export function MarkdownTogglePlugin({ className }: { className?: string }) {
  const [editor] = useLexicalComposerContext();

  const handleMarkdownToggle = React.useCallback(() => {
    editor.update(() => {
      const root = $getRoot();
      const firstChild = root.getFirstChild();

      if ($isCodeNode(firstChild) && firstChild.getLanguage() === 'markdown') {
        // Convert from markdown to rich text
        $convertFromMarkdownString(firstChild.getTextContent(), TRANSFORMERS);
      } else {
        // Convert from rich text to markdown
        const markdown = $convertToMarkdownString(TRANSFORMERS);
        root.clear();
        const codeNode = $createCodeNode('markdown');
        codeNode.append($createTextNode(markdown));
        root.append(codeNode);
      }
    });
  }, [editor]);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleMarkdownToggle}
      className={cn('h-8 px-2', className)}
      title="Convert From Markdown"
      aria-label="Convert from markdown"
    >
      <FileText className="size-4" />
    </Button>
  );
}
