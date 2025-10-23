import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Highlight, type HighlightVariant } from './highlight';

describe('Highlight', () => {
  it('renders children correctly', () => {
    render(<Highlight>Test text</Highlight>);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });

  it('applies default variant', () => {
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

  it('applies Tailwind inset utilities via className', () => {
    const { container } = render(
      <Highlight className="after:-inset-2">Test</Highlight>
    );
    const highlight = container.querySelector('.highlight');
    expect(highlight).toHaveClass('after:-inset-2');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Highlight className="custom-class">Test</Highlight>
    );
    const highlight = container.querySelector('.highlight');
    expect(highlight).toHaveClass('custom-class');
    expect(highlight).toHaveClass('highlight');
  });

  it('applies Tailwind utility classes via className', () => {
    const { container } = render(
      <Highlight className="after:bg-red-500">Test</Highlight>
    );
    const highlight = container.querySelector('.highlight');
    expect(highlight).toHaveClass('after:bg-red-500');
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

  it('renders as a span element', () => {
    const { container } = render(<Highlight>Test</Highlight>);
    const highlight = container.querySelector('span.highlight');
    expect(highlight).toBeInTheDocument();
  });

  it('combines multiple className utilities', () => {
    const { container } = render(
      <Highlight className="after:bg-blue-500 after:opacity-50">Test</Highlight>
    );
    const highlight = container.querySelector('.highlight');
    expect(highlight).toHaveClass('after:bg-blue-500');
    expect(highlight).toHaveClass('after:opacity-50');
  });

  it('supports gradient backgrounds via className', () => {
    const { container } = render(
      <Highlight className="after:bg-gradient-to-r after:from-yellow-300 after:to-pink-500">
        Test
      </Highlight>
    );
    const highlight = container.querySelector('.highlight');
    expect(highlight).toHaveClass('after:bg-gradient-to-r');
    expect(highlight).toHaveClass('after:from-yellow-300');
    expect(highlight).toHaveClass('after:to-pink-500');
  });
});
