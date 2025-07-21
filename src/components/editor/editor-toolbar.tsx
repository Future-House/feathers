import * as React from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
  CAN_UNDO_COMMAND,
  CAN_REDO_COMMAND,
} from 'lexical';
import { $setBlocksType } from '@lexical/selection';
import { $createHeadingNode, $createQuoteNode } from '@lexical/rich-text';
import { $createCodeNode } from '@lexical/code';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import {
  Bold,
  Italic,
  Underline,
  Code,
  Link,
  Undo,
  Redo,
  Heading1,
  Heading2,
  Heading3,
  Quote,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Toggle } from '@/components/toggle';
import { Button } from '@/components/button';
import { Separator } from '@/components/separator';

export function EditorToolbar({ className }: { className?: string }) {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = React.useState(false);
  const [isItalic, setIsItalic] = React.useState(false);
  const [isUnderline, setIsUnderline] = React.useState(false);
  const [isCode, setIsCode] = React.useState(false);
  const [isLink, setIsLink] = React.useState(false);
  const [canUndo, setCanUndo] = React.useState(false);
  const [canRedo, setCanRedo] = React.useState(false);

  const updateToolbar = React.useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsCode(selection.hasFormat('code'));

      // Check if we're in a link
      const node = selection.anchor.getNode();
      const parent = node.getParent();
      setIsLink($isLinkNode(parent) || $isLinkNode(node));
    }
  }, []);

  React.useEffect(() => {
    const unregisterListener = editor.registerUpdateListener(
      ({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }
    );

    const unregisterCommandUndo = editor.registerCommand(
      CAN_UNDO_COMMAND,
      payload => {
        setCanUndo(payload);
        return false;
      },
      1
    );

    const unregisterCommandRedo = editor.registerCommand(
      CAN_REDO_COMMAND,
      payload => {
        setCanRedo(payload);
        return false;
      },
      1
    );

    return () => {
      unregisterListener();
      unregisterCommandUndo();
      unregisterCommandRedo();
    };
  }, [editor, updateToolbar]);

  const formatText = (format: 'bold' | 'italic' | 'underline' | 'code') => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
  };

  const insertLink = () => {
    if (!isLink) {
      const url = prompt('Enter URL:');
      if (url) {
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, url);
      }
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  };

  const formatHeading = (headingSize: 'h1' | 'h2' | 'h3') => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(headingSize));
      }
    });
  };

  const formatQuote = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createQuoteNode());
      }
    });
  };

  const formatCodeBlock = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createCodeNode());
      }
    });
  };

  return (
    <div
      className={cn(
        'border-input bg-background flex flex-wrap items-center gap-1 rounded-md border p-1',
        className
      )}
      role="toolbar"
      aria-label="Editor toolbar"
    >
      {/* Undo/Redo */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
        disabled={!canUndo}
        title="Undo"
      >
        <Undo className="size-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
        disabled={!canRedo}
        title="Redo"
      >
        <Redo className="size-4" />
      </Button>

      <Separator orientation="vertical" className="mx-1 h-6" />

      {/* Text Formatting */}
      <Toggle
        pressed={isBold}
        onPressedChange={() => formatText('bold')}
        aria-label="Bold"
        title="Bold"
        size="sm"
      >
        <Bold className="size-4" />
      </Toggle>

      <Toggle
        pressed={isItalic}
        onPressedChange={() => formatText('italic')}
        aria-label="Italic"
        title="Italic"
        size="sm"
      >
        <Italic className="size-4" />
      </Toggle>

      <Toggle
        pressed={isUnderline}
        onPressedChange={() => formatText('underline')}
        aria-label="Underline"
        title="Underline"
        size="sm"
      >
        <Underline className="size-4" />
      </Toggle>

      <Toggle
        pressed={isCode}
        onPressedChange={() => formatText('code')}
        aria-label="Code"
        title="Inline Code"
        size="sm"
      >
        <Code className="size-4" />
      </Toggle>

      <Separator orientation="vertical" className="mx-1 h-6" />

      {/* Link */}
      <Toggle
        pressed={isLink}
        onPressedChange={insertLink}
        aria-label="Link"
        title="Insert Link"
        size="sm"
      >
        <Link className="size-4" />
      </Toggle>

      <Separator orientation="vertical" className="mx-1 h-6" />

      {/* Block Formatting */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => formatHeading('h1')}
        title="Heading 1"
      >
        <Heading1 className="size-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => formatHeading('h2')}
        title="Heading 2"
      >
        <Heading2 className="size-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => formatHeading('h3')}
        title="Heading 3"
      >
        <Heading3 className="size-4" />
      </Button>

      <Button variant="ghost" size="icon" onClick={formatQuote} title="Quote">
        <Quote className="size-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={formatCodeBlock}
        title="Code Block"
      >
        <Code className="size-4" />
      </Button>
    </div>
  );
}
