import { ButtonProps } from '../button/button';
import { DropdownMenu } from '../dropdown-menu/dropdown-menu';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
type BaseThemeToggleProps = {
    variant?: 'button' | 'switch' | 'dropdown';
};
type ButtonVariantProps = BaseThemeToggleProps & {
    variant?: 'button';
} & Omit<ButtonProps, 'onClick' | 'children'>;
type SwitchVariantProps = BaseThemeToggleProps & {
    variant: 'switch';
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type' | 'role' | 'aria-checked'>;
type DropdownVariantProps = BaseThemeToggleProps & {
    variant: 'dropdown';
    DropdownMenuContentProps?: React.ComponentProps<typeof DropdownMenuPrimitive.Content>;
    buttonProps?: Omit<ButtonProps, 'onClick' | 'children'>;
} & React.ComponentProps<typeof DropdownMenu>;
export type ThemeToggleProps = ButtonVariantProps | SwitchVariantProps | DropdownVariantProps;
export declare function ThemeToggle(props: ThemeToggleProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=theme-toggle.d.ts.map