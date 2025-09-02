import * as React from 'react';
import { Moon, Sun, Laptop } from '../../icons';
import { Button, ButtonProps } from '../button/button';
import { useTheme } from '../theme-provider/theme-provider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '../dropdown-menu/dropdown-menu';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Slot } from '@radix-ui/react-slot';

// TODO: add support for classname combination

type BaseThemeToggleProps = {
  variant?: 'button' | 'switch' | 'dropdown';
};

type ButtonVariantProps = BaseThemeToggleProps & {
  variant?: 'button';
  asChild?: boolean;
} & Omit<ButtonProps, 'onClick' | 'children' | 'asChild'>;

type SwitchVariantProps = BaseThemeToggleProps & {
  variant: 'switch';
} & Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'onClick' | 'type' | 'role' | 'aria-checked'
  >;

type DropdownVariantProps = BaseThemeToggleProps & {
  variant: 'dropdown';
  DropdownMenuContentProps?: React.ComponentProps<
    typeof DropdownMenuPrimitive.Content
  >;
  buttonProps?: Omit<ButtonProps, 'onClick' | 'children'>;
  asChild?: boolean;
  children?: React.ReactNode;
} & Omit<React.ComponentProps<typeof DropdownMenu>, 'children'>;

export type ThemeToggleProps =
  | ButtonVariantProps
  | SwitchVariantProps
  | DropdownVariantProps;

export function ThemeToggle(props: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const variant = props.variant || 'button';

  const toggleTheme = () => {
    if (variant === 'switch' || variant === 'button') {
      // Switch and button variants only toggle between dark and light
      if (theme === 'light' || theme === 'system') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    } else {
      // This shouldn't happen with current variants, but keep for safety
      if (theme === 'light') {
        setTheme('dark');
      } else if (theme === 'dark') {
        setTheme('system');
      } else {
        setTheme('light');
      }
    }
  };

  const getIcon = () => {
    if (theme === 'light') {
      return <Sun className="h-4 w-4" />;
    } else if (theme === 'dark') {
      return <Moon className="h-4 w-4" />;
    } else {
      // System theme - show current system preference
      // const isDarkSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;
      // return isDarkSystem ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />;
      return <Laptop className="h-4 w-4" />;
    }
  };

  const getTitle = () => {
    if (variant === 'switch' || variant === 'button') {
      return theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    } else {
      // Fallback for other variants (currently only dropdown)
      if (theme === 'light') {
        return 'Switch to dark mode';
      } else if (theme === 'dark') {
        return 'Switch to system mode';
      } else {
        return 'Switch to light mode';
      }
    }
  };

  if (variant === 'switch') {
    const { variant: _variant, ...switchProps } = props as SwitchVariantProps;
    const isDark = theme === 'dark';
    return (
      <div className="relative inline-flex">
        <button
          type="button"
          role="switch"
          aria-checked={isDark}
          onClick={toggleTheme}
          title={getTitle()}
          className="group bg-muted focus:ring-ring focus:ring-offset-background relative inline-flex h-[26px] w-[50px] items-center rounded-full transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
          {...switchProps}
        >
          {/* Sliding thumb with icon */}
          <div
            className={`bg-background relative z-10 flex h-[24px] w-[24px] items-center justify-center rounded-full shadow-md transition-transform duration-300 ease-in-out ${
              isDark ? 'translate-x-[24px]' : 'translate-x-[2px]'
            }`}
          >
            {/* Icon on the thumb with fade transitions */}
            <div className="relative h-3 w-3">
              <Sun
                className={`text-foreground absolute inset-0 h-3 w-3 transition-opacity duration-300 ${
                  !isDark ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <Moon
                className={`text-foreground absolute inset-0 h-3 w-3 transition-opacity duration-300 ${
                  isDark ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          </div>
        </button>
        <span className="sr-only">Toggle between light and dark theme</span>
      </div>
    );
  }

  if (variant === 'dropdown') {
    const {
      variant: _variant,
      DropdownMenuContentProps = {},
      buttonProps = {},
      asChild = false,
      children,
      ...dropdownProps
    } = props as DropdownVariantProps;

    const iconContent = (
      <>
        {getIcon()}
        <span className="sr-only">Open theme selector</span>
      </>
    );

    return (
      <DropdownMenu {...dropdownProps}>
        <DropdownMenuTrigger asChild>
          {asChild && React.isValidElement(children) ? (
            React.cloneElement(children, {
              children: (
                <>
                  {iconContent}
                  {(children as React.ReactElement<any>).props.children}
                </>
              ),
            } as Partial<unknown>)
          ) : (
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9"
              {...buttonProps}
            >
              {iconContent}
            </Button>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" {...DropdownMenuContentProps}>
          <DropdownMenuRadioGroup
            value={theme}
            onValueChange={value =>
              setTheme(value as 'light' | 'dark' | 'system')
            }
          >
            <DropdownMenuRadioItem value="light">
              <Sun className="mr-2 h-4 w-4" />
              Light
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">
              <Moon className="mr-2 h-4 w-4" />
              Dark
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">
              <Laptop className="mr-2 h-4 w-4" />
              System
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  const {
    variant: _variant,
    asChild = false,
    children,
    ...buttonProps
  } = props as ButtonVariantProps & { children?: React.ReactNode };

  const themeToggleContent = (
    <>
      {getIcon()}
      <span className="sr-only">Toggle theme</span>
    </>
  );

  if (asChild) {
    return (
      <Slot {...buttonProps} onClick={toggleTheme} title={getTitle()}>
        {React.isValidElement(children)
          ? React.cloneElement(children, {
              children: themeToggleContent,
            } as Partial<unknown>)
          : children}
      </Slot>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-9 w-9"
      {...buttonProps}
      onClick={toggleTheme}
      title={getTitle()}
    >
      {themeToggleContent}
    </Button>
  );
}
