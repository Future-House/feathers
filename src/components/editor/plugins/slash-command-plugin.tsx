import * as React from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_LOW,
  KEY_DOWN_COMMAND,
  TextNode,
  $getNodeByKey,
} from 'lexical';
import { mergeRegister } from '@lexical/utils';
import { Portal } from '@radix-ui/react-portal';

import { cn } from '@/lib/utils';
import { SlashCommand } from '../editor';

interface SlashCommandPluginProps {
  commands: SlashCommand[];
}

export function SlashCommandPlugin({ commands }: SlashCommandPluginProps) {
  const [editor] = useLexicalComposerContext();
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [triggerNodeKey, setTriggerNodeKey] = React.useState<string | null>(
    null
  );

  const filteredCommands = React.useMemo(() => {
    if (!searchTerm) return commands;
    return commands.filter(
      cmd =>
        cmd.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cmd.key.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [commands, searchTerm]);

  const closeMenu = React.useCallback(() => {
    setIsOpen(false);
    setSearchTerm('');
    setSelectedIndex(0);
    setTriggerNodeKey(null);
  }, []);

  const executeCommand = React.useCallback(
    (command: SlashCommand) => {
      editor.update(() => {
        if (triggerNodeKey) {
          const triggerNode = $getNodeByKey(triggerNodeKey);
          if (triggerNode && triggerNode instanceof TextNode) {
            // Remove the slash and search text
            const text = triggerNode.getTextContent();
            const slashIndex = text.lastIndexOf(`/${searchTerm}`);
            if (slashIndex !== -1) {
              const beforeSlash = text.substring(0, slashIndex);
              const afterSlash = text.substring(
                slashIndex + searchTerm.length + 1
              );

              if (beforeSlash || afterSlash) {
                triggerNode.setTextContent(beforeSlash + afterSlash);
              } else {
                triggerNode.remove();
              }
            }
          }
        }

        // Execute the command
        command.onSelect();
      });

      closeMenu();
    },
    [editor, triggerNodeKey, searchTerm, closeMenu]
  );

  React.useEffect(() => {
    return mergeRegister(
      editor.registerCommand(
        KEY_DOWN_COMMAND,
        (event: KeyboardEvent) => {
          if (!isOpen) return false;

          switch (event.key) {
            case 'Escape':
              event.preventDefault();
              closeMenu();
              return true;

            case 'ArrowDown':
              event.preventDefault();
              setSelectedIndex(prev =>
                prev < filteredCommands.length - 1 ? prev + 1 : 0
              );
              return true;

            case 'ArrowUp':
              event.preventDefault();
              setSelectedIndex(prev =>
                prev > 0 ? prev - 1 : filteredCommands.length - 1
              );
              return true;

            case 'Enter':
              event.preventDefault();
              if (filteredCommands[selectedIndex]) {
                executeCommand(filteredCommands[selectedIndex]);
              }
              return true;

            case 'Tab':
              event.preventDefault();
              if (filteredCommands[selectedIndex]) {
                executeCommand(filteredCommands[selectedIndex]);
              }
              return true;
          }

          return false;
        },
        COMMAND_PRIORITY_LOW
      ),

      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          const selection = $getSelection();

          if (!$isRangeSelection(selection) || !selection.isCollapsed()) {
            if (isOpen) closeMenu();
            return;
          }

          const anchorNode = selection.anchor.getNode();
          if (!(anchorNode instanceof TextNode)) {
            if (isOpen) closeMenu();
            return;
          }

          const text = anchorNode.getTextContent();
          const anchorOffset = selection.anchor.offset;

          // Look for slash command pattern
          const beforeCursor = text.substring(0, anchorOffset);
          const slashMatch = beforeCursor.match(/\/(\w*)$/);

          if (slashMatch) {
            const [, term] = slashMatch;
            const slashPosition = beforeCursor.lastIndexOf('/');

            // Only trigger if slash is at start of line or after whitespace
            if (
              slashPosition === 0 ||
              /\s/.test(beforeCursor[slashPosition - 1])
            ) {
              setSearchTerm(term);
              setTriggerNodeKey(anchorNode.getKey());
              setSelectedIndex(0);

              // Calculate position for the dropdown
              const domSelection = window.getSelection();
              if (domSelection && domSelection.rangeCount > 0) {
                const range = domSelection.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                setPosition({
                  x: rect.left,
                  y: rect.bottom + window.scrollY + 4,
                });
              }

              setIsOpen(true);
            }
          } else if (isOpen) {
            closeMenu();
          }
        });
      })
    );
  }, [
    editor,
    isOpen,
    closeMenu,
    filteredCommands,
    selectedIndex,
    executeCommand,
  ]);

  if (!isOpen || filteredCommands.length === 0) {
    return null;
  }

  return (
    <Portal>
      <div
        className="bg-popover text-popover-foreground fixed z-50 min-w-48 rounded-md border p-1 shadow-md"
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        <div className="text-muted-foreground px-2 py-1.5 text-xs">
          Commands
        </div>

        {filteredCommands.map((command, index) => (
          <button
            key={command.key}
            className={cn(
              'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full rounded-sm px-2 py-1.5 text-left text-sm transition-colors',
              {
                'bg-accent text-accent-foreground': index === selectedIndex,
              }
            )}
            onClick={() => executeCommand(command)}
            onMouseEnter={() => setSelectedIndex(index)}
          >
            <div className="flex items-center gap-2">
              {command.icon && (
                <span className="text-muted-foreground flex-shrink-0">
                  {command.icon}
                </span>
              )}

              <div className="flex-1">
                <div className="font-medium">/{command.key}</div>
                {command.description && (
                  <div className="text-muted-foreground text-xs">
                    {command.description}
                  </div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </Portal>
  );
}
