import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $isCodeNode, CodeNode } from '@lexical/code';
import { $getRoot } from 'lexical';
import { useEffect } from 'react';

function generateGutter(content: string): string {
  const lines = content.split('\n');
  return lines.map((_, index) => index + 1).join('\n');
}

export function CodeHighlightPlugin(): null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const updateCodeBlocks = () => {
      const root = $getRoot();
      const codeNodes: CodeNode[] = [];

      // Collect all code nodes
      root.getChildren().forEach(child => {
        if ($isCodeNode(child)) {
          codeNodes.push(child);
        }
      });

      // Update each code node's DOM element
      codeNodes.forEach(codeNode => {
        const textContent = codeNode.getTextContent();
        const gutter = generateGutter(textContent);
        const domElement = editor.getElementByKey(codeNode.getKey());

        if (domElement && domElement instanceof HTMLElement) {
          domElement.setAttribute('data-gutter', gutter);
        }
      });
    };

    const unregisterListener = editor.registerUpdateListener(
      ({ editorState }) => {
        editorState.read(() => {
          updateCodeBlocks();
        });
      }
    );

    // Register a mutation listener for better performance
    const unregisterMutationListener = editor.registerMutationListener(
      CodeNode,
      mutatedNodes => {
        for (const [nodeKey, mutation] of mutatedNodes) {
          if (mutation === 'updated' || mutation === 'created') {
            editor.getEditorState().read(() => {
              const node = editor.getEditorState()._nodeMap.get(nodeKey);
              if ($isCodeNode(node)) {
                const textContent = node.getTextContent();
                const gutter = generateGutter(textContent);
                const domElement = editor.getElementByKey(nodeKey);

                if (domElement && domElement instanceof HTMLElement) {
                  domElement.setAttribute('data-gutter', gutter);
                }
              }
            });
          }
        }
      }
    );

    // Initial update
    editor.getEditorState().read(() => {
      updateCodeBlocks();
    });

    return () => {
      unregisterListener();
      unregisterMutationListener();
    };
  }, [editor]);

  return null;
}
