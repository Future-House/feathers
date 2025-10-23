import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Highlight,
  type HighlightVariant,
  type HighlightSpread,
} from './highlight';

describe('Highlight', () => {
  it('renders children correctly', () => {
    render(<Highlight>Test text</Highlight>);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });

  it('applies default variant and color', () => {
    const { container } = render(<Highlight>Test</Highlight>);
    const highlight = container.querySelector('.highlight');
    expect(highlight).toBeInTheDocument();
  });

  it('renders with custom variant', () => {
    const { container } = render(<Highlight variant={5}>Test</Highlight>);
    const highlight = container.querySelector('.highlight');
    const style = highlight?.getAttribute('style');
    expect(style).toContain('5.svg');
  });

  it('renders with custom color', () => {
    const { container } = render(<Highlight color="success">Test</Highlight>);
    const highlight = container.querySelector('.highlight');
    const style = highlight?.getAttribute('style');
    expect(style).toContain('--highlight-color');
  });

  it('renders with hex color', () => {
    const { container } = render(<Highlight color="#ff6b6b">Test</Highlight>);
    const highlight = container.querySelector('.highlight');
    const style = highlight?.getAttribute('style');
    expect(style).toContain('#ff6b6b');
  });

  it('renders with oklch color', () => {
    const { container } = render(
      <Highlight color="oklch(0.75 0.2 150)">Test</Highlight>
    );
    const highlight = container.querySelector('.highlight');
    const style = highlight?.getAttribute('style');
    expect(style).toContain('oklch(0.75 0.2 150)');
  });

  it('applies spread correctly', () => {
    const { container } = render(<Highlight spread="md">Test</Highlight>);
    const highlight = container.querySelector('.highlight');
    const style = highlight?.getAttribute('style');
    expect(style).toContain('--highlight-spread-top: -8px');
    expect(style).toContain('--highlight-spread-bottom: -8px');
    expect(style).toContain('--highlight-spread-left: -8px');
    expect(style).toContain('--highlight-spread-right: -8px');
  });

  it('applies spreadX and spreadY correctly', () => {
    const { container } = render(
      <Highlight spreadX="lg" spreadY="sm">
        Test
      </Highlight>
    );
    const highlight = container.querySelector('.highlight');
    const style = highlight?.getAttribute('style');
    expect(style).toContain('--highlight-spread-left: -12px');
    expect(style).toContain('--highlight-spread-right: -12px');
    expect(style).toContain('--highlight-spread-top: -4px');
    expect(style).toContain('--highlight-spread-bottom: -4px');
  });

  it('applies individual edge spreads correctly', () => {
    const { container } = render(
      <Highlight
        spreadTop="xl"
        spreadBottom="sm"
        spreadLeft="md"
        spreadRight="lg"
      >
        Test
      </Highlight>
    );
    const highlight = container.querySelector('.highlight');
    const style = highlight?.getAttribute('style');
    expect(style).toContain('--highlight-spread-top: -16px');
    expect(style).toContain('--highlight-spread-bottom: -4px');
    expect(style).toContain('--highlight-spread-left: -8px');
    expect(style).toContain('--highlight-spread-right: -12px');
  });

  it('prioritizes individual spread over axis spread', () => {
    const { container } = render(
      <Highlight spreadX="md" spreadLeft="xl">
        Test
      </Highlight>
    );
    const highlight = container.querySelector('.highlight');
    const style = highlight?.getAttribute('style');
    expect(style).toContain('--highlight-spread-left: -16px');
    expect(style).toContain('--highlight-spread-right: -8px');
  });

  it('prioritizes axis spread over general spread', () => {
    const { container } = render(
      <Highlight spread="sm" spreadX="lg">
        Test
      </Highlight>
    );
    const highlight = container.querySelector('.highlight');
    const style = highlight?.getAttribute('style');
    expect(style).toContain('--highlight-spread-left: -12px');
    expect(style).toContain('--highlight-spread-right: -12px');
    expect(style).toContain('--highlight-spread-top: -4px');
    expect(style).toContain('--highlight-spread-bottom: -4px');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Highlight className="custom-class">Test</Highlight>
    );
    const highlight = container.querySelector('.highlight');
    expect(highlight).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Highlight ref={ref}>Test</Highlight>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('passes through additional props', () => {
    render(
      <Highlight data-testid="highlight-element" aria-label="highlighted text">
        Test
      </Highlight>
    );
    const highlight = screen.getByTestId('highlight-element');
    expect(highlight).toHaveAttribute('aria-label', 'highlighted text');
  });

  it('merges custom styles with component styles', () => {
    const { container } = render(
      <Highlight style={{ fontSize: '24px' }}>Test</Highlight>
    );
    const highlight = container.querySelector('.highlight');
    const style = highlight?.getAttribute('style');
    expect(style).toContain('font-size: 24px');
    expect(style).toContain('--highlight-variant');
  });

  it('supports all variant numbers 1-20', () => {
    for (let i = 1; i <= 20; i++) {
      const { container } = render(
        <Highlight variant={i as HighlightVariant}>Test {i}</Highlight>
      );
      const highlight = container.querySelector('.highlight');
      const style = highlight?.getAttribute('style');
      expect(style).toContain(`${i}.svg`);
    }
  });

  it('supports all spread sizes', () => {
    const spreads: Array<[HighlightSpread, string]> = [
      ['none', '0'],
      ['sm', '-4px'],
      ['md', '-8px'],
      ['lg', '-12px'],
      ['xl', '-16px'],
    ];

    spreads.forEach(([spread, expected]) => {
      const { container } = render(<Highlight spread={spread}>Test</Highlight>);
      const highlight = container.querySelector('.highlight');
      const style = highlight?.getAttribute('style');
      expect(style).toContain(`--highlight-spread-top: ${expected}`);
    });
  });

  it('renders as a span element', () => {
    const { container } = render(<Highlight>Test</Highlight>);
    const highlight = container.querySelector('span.highlight');
    expect(highlight).toBeInTheDocument();
  });

  it('handles semantic color names correctly', () => {
    const semanticColors = [
      'primary',
      'secondary',
      'destructive',
      'success',
      'warning',
      'info',
      'error',
      'accent',
      'muted',
      'brand',
    ];

    semanticColors.forEach(color => {
      const { container } = render(<Highlight color={color}>Test</Highlight>);
      const highlight = container.querySelector('.highlight');
      const style = highlight?.getAttribute('style');
      expect(style).toContain(`var(--color-${color})`);
    });
  });
});
