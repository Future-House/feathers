import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '../theme-provider';
import { Toaster } from './sonner';

// Wrapper component to provide theme context
const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <ThemeProvider defaultTheme="light">{children}</ThemeProvider>;

describe('Toaster', () => {
  it('renders correctly without errors', () => {
    expect(() => {
      render(
        <ThemeWrapper>
          <Toaster />
        </ThemeWrapper>
      );
    }).not.toThrow();
  });

  it('renders with different themes without errors', () => {
    expect(() => {
      render(
        <ThemeProvider defaultTheme="dark">
          <Toaster />
        </ThemeProvider>
      );
    }).not.toThrow();

    expect(() => {
      render(
        <ThemeProvider defaultTheme="light">
          <Toaster />
        </ThemeProvider>
      );
    }).not.toThrow();

    expect(() => {
      render(
        <ThemeProvider defaultTheme="system">
          <Toaster />
        </ThemeProvider>
      );
    }).not.toThrow();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLElement>();
    render(
      <ThemeWrapper>
        <Toaster ref={ref} />
      </ThemeWrapper>
    );

    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('accepts various props without errors', () => {
    expect(() => {
      render(
        <ThemeWrapper>
          <Toaster
            position="top-center"
            richColors={true}
            closeButton={true}
            expand={true}
            visibleToasts={5}
            gap={20}
            offset="24px"
            dir="rtl"
            invert={true}
          />
        </ThemeWrapper>
      );
    }).not.toThrow();
  });

  it('accepts className prop without errors', () => {
    expect(() => {
      render(
        <ThemeWrapper>
          <Toaster className="custom-toaster" />
        </ThemeWrapper>
      );
    }).not.toThrow();
  });

  it('accepts all position variants without errors', () => {
    const positions = [
      'top-left',
      'top-center',
      'top-right',
      'bottom-left',
      'bottom-center',
      'bottom-right',
    ] as const;

    positions.forEach(position => {
      expect(() => {
        render(
          <ThemeWrapper>
            <Toaster position={position} />
          </ThemeWrapper>
        );
      }).not.toThrow();
    });
  });

  it('can render multiple toasters without errors', () => {
    expect(() => {
      render(
        <ThemeWrapper>
          <div>
            <Toaster position="top-left" />
            <Toaster position="bottom-right" />
          </div>
        </ThemeWrapper>
      );
    }).not.toThrow();
  });

  it('renders with toastOptions prop without errors', () => {
    expect(() => {
      render(
        <ThemeWrapper>
          <Toaster
            toastOptions={{
              duration: 4000,
              className: 'custom-toast',
            }}
          />
        </ThemeWrapper>
      );
    }).not.toThrow();
  });

  it('renders with hotkey prop without errors', () => {
    expect(() => {
      render(
        <ThemeWrapper>
          <Toaster hotkey={['meta', 'k']} />
        </ThemeWrapper>
      );
    }).not.toThrow();
  });
});
