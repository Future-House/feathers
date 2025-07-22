import * as React from 'react';
import { EditorState } from 'lexical';
declare const editorVariants: (props?: import("class-variance-authority/dist/types").ClassProp | undefined) => string;
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
declare function Editor({ className, placeholder, value: _value, onChange, onValueChange, slashCommands, showToolbar, showMarkdownToggle, autoFocus, disabled, 'aria-invalid': ariaInvalid, ...props }: EditorProps): import("react/jsx-runtime").JSX.Element;
export { Editor, editorVariants };
//# sourceMappingURL=editor.d.ts.map