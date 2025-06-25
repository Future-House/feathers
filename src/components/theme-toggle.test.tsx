import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from './theme-toggle';
import { ThemeProvider } from './theme-provider';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock as any;

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('ThemeToggle', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
    document.documentElement.className = '';
  });

  const renderWithProvider = (defaultTheme = 'system') => {
    return render(
      <ThemeProvider defaultTheme={defaultTheme as any}>
        <ThemeToggle />
      </ThemeProvider>
    );
  };

  it('renders correctly', () => {
    renderWithProvider();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('title');
    expect(screen.getByText('Toggle theme')).toBeInTheDocument();
  });

  it('shows sun icon for light theme', () => {
    renderWithProvider('light');

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('title', 'Switch to dark mode');

    // Check for sun icon (Lucide icons add specific classes)
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('shows moon icon for dark theme', () => {
    renderWithProvider('dark');

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('title', 'Switch to system mode');

    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('cycles through themes when clicked', () => {
    renderWithProvider('light');

    const button = screen.getByRole('button');

    // Start with light, click to go to dark
    expect(button).toHaveAttribute('title', 'Switch to dark mode');
    fireEvent.click(button);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('feathers-ui-theme', 'dark');
  });

  it('handles system theme correctly', () => {
    renderWithProvider('system');

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('title', 'Switch to light mode');
  });

  it('shows appropriate icon for system theme based on preference', () => {
    // Mock dark system preference
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    renderWithProvider('system');

    const button = screen.getByRole('button');
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('has correct button styling', () => {
    renderWithProvider();

    const button = screen.getByRole('button');
    expect(button).toHaveClass('h-9', 'w-9');
  });

  it('is accessible', () => {
    renderWithProvider();

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('title');

    // Screen reader text
    expect(screen.getByText('Toggle theme')).toHaveClass('sr-only');
  });
});
