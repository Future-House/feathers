import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from './theme-provider';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

// Replace global localStorage
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

global.localStorage = localStorageMock as any;

// Test component that uses the theme context
function TestComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <button onClick={() => setTheme('light')} data-testid="set-light">
        Light
      </button>
      <button onClick={() => setTheme('dark')} data-testid="set-dark">
        Dark
      </button>
      <button onClick={() => setTheme('system')} data-testid="set-system">
        System
      </button>
    </div>
  );
}

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

describe('ThemeProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
    document.documentElement.className = '';
    // Reset matchMedia mock to default
    (window.matchMedia as jest.Mock).mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  });

  it('renders correctly with default theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('system');
  });

  it('uses custom default theme', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
  });

  it('loads theme from localStorage', () => {
    localStorageMock.getItem.mockReturnValue('light');

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme')).toHaveTextContent('light');
    expect(localStorageMock.getItem).toHaveBeenCalledWith('feathers-ui-theme');
  });

  it('uses custom storage key', () => {
    localStorageMock.getItem.mockReturnValue('dark');

    render(
      <ThemeProvider storageKey="custom-theme">
        <TestComponent />
      </ThemeProvider>
    );

    expect(localStorageMock.getItem).toHaveBeenCalledWith('custom-theme');
    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
  });

  it('changes theme and saves to localStorage', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByTestId('set-dark'));

    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'feathers-ui-theme',
      'dark'
    );
  });

  it('applies correct CSS classes for light theme', () => {
    // Mock light system preference
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false, // This makes system preference light
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    render(
      <ThemeProvider defaultTheme="light">
        <TestComponent />
      </ThemeProvider>
    );

    expect(document.documentElement).toHaveClass('light');
    expect(document.documentElement).not.toHaveClass('dark');
  });

  it('applies correct CSS classes for dark theme', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <TestComponent />
      </ThemeProvider>
    );

    expect(document.documentElement).toHaveClass('dark');
    expect(document.documentElement).not.toHaveClass('light');
  });

  it('applies system theme based on media query', () => {
    // Mock system preference for dark mode
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

    render(
      <ThemeProvider defaultTheme="system">
        <TestComponent />
      </ThemeProvider>
    );

    expect(document.documentElement).toHaveClass('dark');
  });

  it('throws error when useTheme is used outside provider', () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    // Create a component that tries to use useTheme outside provider
    function ComponentWithoutProvider() {
      useTheme(); // This should throw
      return <div>Should not render</div>;
    }

    expect(() => {
      render(<ComponentWithoutProvider />);
    }).toThrow('useTheme must be used within a ThemeProvider');

    consoleError.mockRestore();
  });
});
