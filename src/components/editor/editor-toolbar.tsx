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
  $createParagraphNode,
  $isTextNode,
} from 'lexical';
import { $isTableSelection } from '@lexical/table';
import { $isDecoratorBlockNode } from '@lexical/react/LexicalDecoratorBlockNode';
import { $getNearestBlockElementAncestorOrThrow } from '@lexical/utils';

import { $setBlocksType } from '@lexical/selection';
import {
  $createHeadingNode,
  $createQuoteNode,
  HeadingTagType,
  $isHeadingNode,
  $isQuoteNode,
} from '@lexical/rich-text';
import { $createCodeNode } from '@lexical/code';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  $isListNode,
} from '@lexical/list';
import { INDENT_CONTENT_COMMAND, OUTDENT_CONTENT_COMMAND } from 'lexical';
import {
  Bold,
  Italic,
  Underline,
  Code,
  Link,
  Undo,
  Redo,
  ChevronDown,
  Strikethrough,
  RemoveFormatting,
  Indent,
  Outdent,
  X,
  Check,
  List,
  ListOrdered,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Toggle } from '@/components/toggle';
import { Button } from '@/components/button';
import { Separator } from '@/components/separator';
import { Input } from '@/components/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu';

const blockTypeToBlockName: Record<string, string> = {
  paragraph: 'Paragraph',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  quote: 'Quote',
  code: 'Code Block',
  bullet: 'Bulleted List',
  number: 'Numbered List',
};

export function EditorToolbar({ className }: { className?: string }) {
  const [editor] = useLexicalComposerContext();
  const [blockType, setBlockType] = React.useState('paragraph');
  const [isBold, setIsBold] = React.useState(false);
  const [isItalic, setIsItalic] = React.useState(false);
  const [isUnderline, setIsUnderline] = React.useState(false);
  const [isStrikethrough, setIsStrikethrough] = React.useState(false);
  const [isCode, setIsCode] = React.useState(false);
  const [isLink, setIsLink] = React.useState(false);
  const [canUndo, setCanUndo] = React.useState(false);
  const [canRedo, setCanRedo] = React.useState(false);
  const [showLinkPopover, setShowLinkPopover] = React.useState(false);
  const [linkUrl, setLinkUrl] = React.useState('');

  const updateToolbar = React.useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
      setIsCode(selection.hasFormat('code'));

      // Check if we're in a link
      const node = selection.anchor.getNode();
      const parent = node.getParent();
      setIsLink($isLinkNode(parent) || $isLinkNode(node));

      // Update block type
      const anchorNode = selection.anchor.getNode();
      const element = anchorNode.getTopLevelElementOrThrow();

      if ($isListNode(element)) {
        const type = element.getListType();
        setBlockType(type);
      } else {
        const type = $isHeadingNode(element)
          ? element.getTag()
          : element.getType();
        if (type in blockTypeToBlockName) {
          setBlockType(type);
        }
      }
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

  const formatText = (
    format: 'bold' | 'italic' | 'underline' | 'strikethrough' | 'code'
  ) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
    editor.focus();
  };

  const formatBlockType = (blockType: string) => {
    if (blockType === 'paragraph') {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createParagraphNode());
        }
      });
    } else if (blockType === 'h1' || blockType === 'h2' || blockType === 'h3') {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () =>
            $createHeadingNode(blockType as HeadingTagType)
          );
        }
      });
    } else if (blockType === 'quote') {
      formatQuote();
    } else if (blockType === 'code') {
      formatCodeBlock();
    } else if (blockType === 'bullet') {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    } else if (blockType === 'number') {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
    }

    // Focus the editor after block type change
    editor.focus();
  };

  const handleLinkClick = () => {
    if (isLink) {
      // Remove existing link
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
      editor.focus();
    } else {
      // Show popover to add link
      setShowLinkPopover(true);
      setLinkUrl('https://');
    }
  };

  const handleLinkSubmit = () => {
    if (linkUrl.trim()) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkUrl.trim());
    }
    setShowLinkPopover(false);
    setLinkUrl('');
    editor.focus();
  };

  const handleLinkCancel = () => {
    setShowLinkPopover(false);
    setLinkUrl('');
    editor.focus();
  };

  const formatQuote = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createQuoteNode());
      }
    });
    editor.focus();
  };

  const formatCodeBlock = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createCodeNode());
      }
    });
    editor.focus();
  };

  const clearFormatting = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection) || $isTableSelection(selection)) {
        const anchor = selection.anchor;
        const focus = selection.focus;
        const nodes = selection.getNodes();
        const extractedNodes = selection.extract();

        if (anchor.key === focus.key && anchor.offset === focus.offset) {
          return;
        }

        nodes.forEach((node, idx) => {
          // We split the first and last node by the selection
          // So that we don't format unselected text inside those nodes
          if ($isTextNode(node)) {
            // Use a separate variable to ensure TS does not lose the refinement
            let textNode = node;
            if (idx === 0 && anchor.offset !== 0) {
              textNode = textNode.splitText(anchor.offset)[1] || textNode;
            }
            if (idx === nodes.length - 1) {
              textNode = textNode.splitText(focus.offset)[0] || textNode;
            }
            /**
             * If the selected text has one format applied
             * selecting a portion of the text, could
             * clear the format to the wrong portion of the text.
             *
             * The cleared text is based on the length of the selected text.
             */
            // We need this in case the selected text only has one format
            const extractedTextNode = extractedNodes[0];
            if (nodes.length === 1 && $isTextNode(extractedTextNode)) {
              textNode = extractedTextNode;
            }

            if (textNode.__style !== '') {
              textNode.setStyle('');
            }
            if (textNode.__format !== 0) {
              textNode.setFormat(0);
            }
            const nearestBlockElement =
              $getNearestBlockElementAncestorOrThrow(textNode);
            if (nearestBlockElement.__format !== 0) {
              nearestBlockElement.setFormat('');
            }
            if (nearestBlockElement.__indent !== 0) {
              nearestBlockElement.setIndent(0);
            }
            node = textNode;
          } else if ($isHeadingNode(node) || $isQuoteNode(node)) {
            node.replace($createParagraphNode(), true);
          } else if ($isDecoratorBlockNode(node)) {
            node.setFormat('');
          }
        });
      }
    });
    editor.focus();
  };

  const handleIndent = () => {
    editor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined);
    editor.focus();
  };

  const handleOutdent = () => {
    editor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined);
    editor.focus();
  };

  const handleUnorderedList = () => {
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    editor.focus();
  };

  const handleOrderedList = () => {
    editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
    editor.focus();
  };

  return (
    <TooltipProvider>
      <div
        className={cn(
          'border-input bg-background flex w-full flex-wrap items-center gap-1 border-b py-1',
          className
        )}
        role="toolbar"
        aria-label="Editor toolbar"
      >
        {/* Undo/Redo */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                editor.dispatchCommand(UNDO_COMMAND, undefined);
                editor.focus();
              }}
              disabled={!canUndo}
            >
              <Undo className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Undo</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                editor.dispatchCommand(REDO_COMMAND, undefined);
                editor.focus();
              }}
              disabled={!canRedo}
            >
              <Redo className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Redo</p>
          </TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="mx-1 h-6!" />

        {/* Block Type Dropdown */}
        <DropdownMenu>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="w-auto px-2">
                  {blockTypeToBlockName[blockType] || 'Paragraph'}
                  <ChevronDown className="ml-1 size-3" />
                </Button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>Text Format</p>
            </TooltipContent>
          </Tooltip>
          <DropdownMenuContent>
            {Object.entries(blockTypeToBlockName).map(([key, name]) => (
              <DropdownMenuItem
                key={key}
                onClick={() => formatBlockType(key)}
                className={cn(blockType === key && 'bg-accent')}
              >
                {name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Separator orientation="vertical" className="mx-1 h-6!" />

        {/* Text Formatting */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              variant="outline"
              pressed={isBold}
              onPressedChange={() => formatText('bold')}
              aria-label="Bold"
              size="sm"
            >
              <Bold className="size-4" />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>
            <p>Bold</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              variant="outline"
              pressed={isItalic}
              onPressedChange={() => formatText('italic')}
              aria-label="Italic"
              size="sm"
            >
              <Italic className="size-4" />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>
            <p>Italic</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              variant="outline"
              pressed={isUnderline}
              onPressedChange={() => formatText('underline')}
              aria-label="Underline"
              size="sm"
            >
              <Underline className="size-4" />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>
            <p>Underline</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              variant="outline"
              pressed={isStrikethrough}
              onPressedChange={() => formatText('strikethrough')}
              aria-label="Strikethrough"
              size="sm"
            >
              <Strikethrough className="size-4" />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>
            <p>Strikethrough</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              variant="outline"
              pressed={isCode}
              onPressedChange={() => formatText('code')}
              aria-label="Code"
              size="sm"
            >
              <Code className="size-4" />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>
            <p>Inline Code</p>
          </TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="mx-1 h-6!" />

        {/* Link */}
        <Popover open={showLinkPopover} onOpenChange={setShowLinkPopover}>
          <Tooltip>
            <TooltipTrigger asChild>
              <PopoverTrigger asChild>
                <Toggle
                  variant="outline"
                  pressed={isLink}
                  onPressedChange={handleLinkClick}
                  aria-label="Link"
                  size="sm"
                >
                  <Link className="size-4" />
                </Toggle>
              </PopoverTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isLink ? 'Remove Link' : 'Insert Link'}</p>
            </TooltipContent>
          </Tooltip>
          <PopoverContent className="w-80" align="start">
            <div className="flex items-center gap-2">
              <Input
                placeholder="https://"
                value={linkUrl}
                onChange={e => setLinkUrl(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    handleLinkSubmit();
                  } else if (e.key === 'Escape') {
                    handleLinkCancel();
                  }
                }}
                className="flex-1"
                autoFocus
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLinkCancel}
                className="h-8 w-8 p-0"
              >
                <X className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLinkSubmit}
                className="h-8 w-8 p-0"
              >
                <Check className="size-4" />
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <Separator orientation="vertical" className="mx-1 h-6!" />

        {/* List Buttons */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              onClick={handleUnorderedList}
              aria-label="Bulleted List"
              className="h-8 w-8 p-0"
            >
              <List className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Bulleted List</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              onClick={handleOrderedList}
              aria-label="Numbered List"
              className="h-8 w-8 p-0"
            >
              <ListOrdered className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Numbered List</p>
          </TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="mx-1 h-6!" />

        {/* Indent/Outdent */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              onClick={handleOutdent}
              aria-label="Decrease Indent"
              className="h-8 w-8 p-0"
            >
              <Outdent className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Decrease Indent</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              onClick={handleIndent}
              aria-label="Increase Indent"
              className="h-8 w-8 p-0"
            >
              <Indent className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Increase Indent</p>
          </TooltipContent>
        </Tooltip>

        {/* Clear Formatting */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              onClick={clearFormatting}
              aria-label="Clear Formatting"
              className="h-8 w-8 p-0"
            >
              <RemoveFormatting className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Clear Formatting</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
