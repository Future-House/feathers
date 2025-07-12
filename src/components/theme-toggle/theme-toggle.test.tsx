import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeToggle } from './theme-toggle';
import { ThemeProvider } from '../theme-provider/theme-provider';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

// Replace window localStorage
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

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
    // Reset matchMedia mock
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

  const renderWithProvider = (
    defaultTheme = 'system',
    variant?: 'button' | 'switch' | 'dropdown'
  ) => {
    const user = userEvent.setup();
    const result = render(
      <ThemeProvider defaultTheme={defaultTheme as any}>
        <ThemeToggle variant={variant} />
      </ThemeProvider>
    );
    return { ...result, user };
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
    expect(button).toHaveAttribute('title', 'Switch to light mode');

    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('toggles between themes when clicked', () => {
    renderWithProvider('light');

    const button = screen.getByRole('button');

    // Start with light, click to go to dark
    expect(button).toHaveAttribute('title', 'Switch to dark mode');
    fireEvent.click(button);
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'feathers-ui-theme',
      'dark'
    );
  });

  it('handles system theme correctly by switching to dark', () => {
    renderWithProvider('system');

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('title', 'Switch to dark mode');

    // When system theme is active, clicking should go to dark mode
    fireEvent.click(button);
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'feathers-ui-theme',
      'dark'
    );
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

  describe('Switch variant', () => {
    it('renders as switch when variant is switch', () => {
      renderWithProvider('light', 'switch');

      const switchElement = screen.getByRole('switch');
      expect(switchElement).toBeInTheDocument();

      // Should show both icons on the thumb with fade transitions
      const container = switchElement.closest('div');
      const svgs = container?.querySelectorAll('svg');
      expect(svgs).toHaveLength(2); // Both Sun and Moon icons for fade transition
    });

    it('toggles between light and dark only in switch variant', () => {
      renderWithProvider('light', 'switch');

      const switchElement = screen.getByRole('switch');
      expect(switchElement).not.toBeChecked(); // Light mode = unchecked

      // Click to toggle to dark
      fireEvent.click(switchElement);
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'feathers-ui-theme',
        'dark'
      );
    });

    it('system theme appears as unchecked (light) when rendered as switch', () => {
      renderWithProvider('system', 'switch');

      const switchElement = screen.getByRole('switch');
      // System theme is not considered "dark" so appears as unchecked (light)
      expect(switchElement).not.toBeChecked();
    });

    it('shows correct screen reader text for switch variant', () => {
      renderWithProvider('light', 'switch');

      expect(
        screen.getByText('Toggle between light and dark theme')
      ).toHaveClass('sr-only');
    });

    it('has correct title attribute for switch variant', () => {
      renderWithProvider('light', 'switch');

      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveAttribute('title', 'Switch to dark mode');
    });

    it('changes title when toggling in switch variant', () => {
      renderWithProvider('dark', 'switch');

      const switchElement = screen.getByRole('switch');
      expect(switchElement).toHaveAttribute('title', 'Switch to light mode');
    });

    it('shows correct icon opacity for current theme', () => {
      renderWithProvider('light', 'switch');

      const container = screen.getByRole('switch').closest('div');
      const sunIcon = container?.querySelector('.lucide-sun');
      const moonIcon = container?.querySelector('.lucide-moon');

      // In light mode, sun should be visible (opacity-100) and moon hidden (opacity-0)
      expect(sunIcon).toHaveClass('opacity-100');
      expect(moonIcon).toHaveClass('opacity-0');
    });

    it('shows fade transition classes on icons', () => {
      renderWithProvider('light', 'switch');

      const container = screen.getByRole('switch').closest('div');
      const sunIcon = container?.querySelector('.lucide-sun');
      const moonIcon = container?.querySelector('.lucide-moon');

      // Both icons should have transition-opacity duration-300
      expect(sunIcon).toHaveClass('transition-opacity', 'duration-300');
      expect(moonIcon).toHaveClass('transition-opacity', 'duration-300');
    });
  });

  describe('Dropdown variant', () => {
    it('renders as dropdown when variant is dropdown', () => {
      renderWithProvider('light', 'dropdown');

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(screen.getByText('Open theme selector')).toHaveClass('sr-only');
    });

    it('shows current theme icon on trigger button', () => {
      renderWithProvider('light', 'dropdown');

      const button = screen.getByRole('button');
      const svg = button.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('opens dropdown menu when clicked', async () => {
      const { user } = renderWithProvider('light', 'dropdown');

      const button = screen.getByRole('button');
      await user.click(button);

      // Should show all three theme options
      expect(screen.getByText('Light')).toBeInTheDocument();
      expect(screen.getByText('Dark')).toBeInTheDocument();
      expect(screen.getByText('System')).toBeInTheDocument();
    });

    it('changes theme when dropdown option is selected', async () => {
      const { user } = renderWithProvider('light', 'dropdown');

      const button = screen.getByRole('button');
      await user.click(button);

      const darkOption = screen.getByText('Dark');
      await user.click(darkOption);

      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'feathers-ui-theme',
        'dark'
      );
    });

    it('shows correct icons for each theme option', async () => {
      const { user } = renderWithProvider('light', 'dropdown');

      const button = screen.getByRole('button');
      await user.click(button);

      // Check that each option has the correct icon
      const lightOption = screen
        .getByText('Light')
        .closest('[role="menuitemradio"]');
      const darkOption = screen
        .getByText('Dark')
        .closest('[role="menuitemradio"]');
      const systemOption = screen
        .getByText('System')
        .closest('[role="menuitemradio"]');

      expect(lightOption?.querySelector('svg')).toBeInTheDocument();
      expect(darkOption?.querySelector('svg')).toBeInTheDocument();
      expect(systemOption?.querySelector('svg')).toBeInTheDocument();
    });

    it('shows current theme as selected in dropdown', async () => {
      const { user } = renderWithProvider('dark', 'dropdown');

      const button = screen.getByRole('button');
      await user.click(button);

      const darkOption = screen
        .getByText('Dark')
        .closest('[role="menuitemradio"]');
      expect(darkOption).toHaveAttribute('aria-checked', 'true');
    });
  });
});
