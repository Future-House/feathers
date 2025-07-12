import { Moon, Sun, Laptop } from '../../icons';
import { Button } from '../button/button';
import { useTheme } from '../theme-provider/theme-provider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '../dropdown-menu/dropdown-menu';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

export interface ThemeToggleProps {
  variant?: 'button' | 'switch' | 'dropdown';
  DropdownMenuContentProps?: React.ComponentProps<
    typeof DropdownMenuPrimitive.Content
  >;
}

export function ThemeToggle({
  variant = 'button',
  DropdownMenuContentProps = {},
  ...rest
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

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
    return (
      <DropdownMenu {...rest}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="h-9 w-9">
            {getIcon()}
            <span className="sr-only">Open theme selector</span>
          </Button>
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

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      title={getTitle()}
      className="h-9 w-9"
    >
      {getIcon()}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
