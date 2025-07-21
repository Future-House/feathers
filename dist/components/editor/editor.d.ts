import * as React from 'react';
import { EditorState } from 'lexical';
import { type VariantProps } from 'class-variance-authority';
declare const editorVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface SlashCommand {
    key: string;
    label: string;
    icon?: React.ReactNode;
    description?: string;
    onSelect: () => void;
}
export interface EditorProps extends VariantProps<typeof editorVariants> {
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
declare function Editor({ className, size, placeholder, value: _value, onChange: _onChange, onValueChange: _onValueChange, slashCommands, showToolbar, showMarkdownToggle, autoFocus, disabled, 'aria-invalid': ariaInvalid, ...props }: EditorProps): import("react/jsx-runtime").JSX.Element;
export { Editor, editorVariants };
//# sourceMappingURL=editor.d.ts.map