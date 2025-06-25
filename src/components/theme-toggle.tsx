import { Moon, Sun } from 'lucide-react';

import { Button } from './button';
import { useTheme } from './theme-provider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'light') {
      return <Sun className="h-4 w-4" />;
    } else if (theme === 'dark') {
      return <Moon className="h-4 w-4" />;
    } else {
      // System theme - show current system preference
      const isDarkSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return isDarkSystem ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />;
    }
  };

  const getTitle = () => {
    if (theme === 'light') {
      return 'Switch to dark mode';
    } else if (theme === 'dark') {
      return 'Switch to system mode';
    } else {
      return 'Switch to light mode';
    }
  };

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
