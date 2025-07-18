export interface ComboboxOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface ComboboxProps {
    options: ComboboxOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    className?: string;
    disabled?: boolean;
    width?: string;
}
declare function Combobox({ options, value, onValueChange, placeholder, searchPlaceholder, emptyMessage, className, disabled, width, }: ComboboxProps): import("react/jsx-runtime").JSX.Element;
export { Combobox };
//# sourceMappingURL=combobox.d.ts.map