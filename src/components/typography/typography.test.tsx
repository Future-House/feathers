import { render, screen } from '@testing-library/react';
import { Typography } from './typography';

describe('Typography', () => {
  it('renders correctly with default variant', () => {
    render(<Typography>Default text</Typography>);
    expect(screen.getByText('Default text')).toBeInTheDocument();
  });

  it('renders as paragraph by default', () => {
    render(<Typography>Paragraph text</Typography>);
    const element = screen.getByText('Paragraph text');
    expect(element.tagName).toBe('P');
  });

  it('applies correct HTML elements for each variant', () => {
    const { rerender } = render(
      <Typography variant="h1">Heading 1</Typography>
    );
    expect(screen.getByText('Heading 1').tagName).toBe('H1');

    rerender(<Typography variant="h2">Heading 2</Typography>);
    expect(screen.getByText('Heading 2').tagName).toBe('H2');

    rerender(<Typography variant="h3">Heading 3</Typography>);
    expect(screen.getByText('Heading 3').tagName).toBe('H3');

    rerender(<Typography variant="h4">Heading 4</Typography>);
    expect(screen.getByText('Heading 4').tagName).toBe('H4');

    rerender(<Typography variant="p">Paragraph</Typography>);
    expect(screen.getByText('Paragraph').tagName).toBe('P');

    rerender(<Typography variant="lead">Lead text</Typography>);
    expect(screen.getByText('Lead text').tagName).toBe('P');

    rerender(<Typography variant="large">Large text</Typography>);
    expect(screen.getByText('Large text').tagName).toBe('DIV');

    rerender(<Typography variant="small">Small text</Typography>);
    expect(screen.getByText('Small text').tagName).toBe('SMALL');

    rerender(<Typography variant="muted">Muted text</Typography>);
    expect(screen.getByText('Muted text').tagName).toBe('P');

    rerender(<Typography variant="blockquote">Quote text</Typography>);
    expect(screen.getByText('Quote text').tagName).toBe('BLOCKQUOTE');

    rerender(<Typography variant="code">Code text</Typography>);
    expect(screen.getByText('Code text').tagName).toBe('CODE');

    rerender(<Typography variant="list">List text</Typography>);
    expect(screen.getByText('List text').tagName).toBe('UL');
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(
      <Typography variant="h1">Heading 1</Typography>
    );
    expect(screen.getByText('Heading 1')).toHaveClass(
      'scroll-m-20',
      'text-4xl',
      'lg:text-5xl'
    );

    rerender(<Typography variant="h2">Heading 2</Typography>);
    expect(screen.getByText('Heading 2')).toHaveClass(
      'scroll-m-20',
      'text-3xl'
    );

    rerender(<Typography variant="lead">Lead text</Typography>);
    expect(screen.getByText('Lead text')).toHaveClass(
      'text-xl',
      'text-muted-foreground'
    );

    rerender(<Typography variant="muted">Muted text</Typography>);
    expect(screen.getByText('Muted text')).toHaveClass(
      'text-sm',
      'text-muted-foreground'
    );

    rerender(<Typography variant="code">Code text</Typography>);
    expect(screen.getByText('Code text')).toHaveClass(
      'relative',
      'rounded',
      'bg-muted',
      'font-mono',
      'text-sm'
    );
  });

  it('applies base classes to all variants', () => {
    const { rerender } = render(<Typography variant="h1">Heading</Typography>);
    expect(screen.getByText('Heading')).toHaveClass('text-foreground');

    rerender(<Typography variant="p">Paragraph</Typography>);
    expect(screen.getByText('Paragraph')).toHaveClass('text-foreground');

    rerender(<Typography variant="code">Code</Typography>);
    expect(screen.getByText('Code')).toHaveClass('text-foreground');
  });

  it('renders as child component when asChild is true', () => {
    render(
      <Typography variant="h1" asChild>
        <span>Custom element</span>
      </Typography>
    );

    const element = screen.getByText('Custom element');
    expect(element.tagName).toBe('SPAN');
    expect(element).toHaveClass(
      'text-foreground',
      'scroll-m-20',
      'text-4xl',
      'lg:text-5xl'
    );
  });

  it('accepts custom className', () => {
    render(<Typography className="custom-class">Custom styling</Typography>);
    expect(screen.getByText('Custom styling')).toHaveClass('custom-class');
  });

  it('forwards standard HTML props', () => {
    render(
      <Typography variant="p" id="test-id" data-testid="typography-test">
        Test content
      </Typography>
    );

    const element = screen.getByTestId('typography-test');
    expect(element).toHaveAttribute('id', 'test-id');
  });

  it('maintains accessibility for heading hierarchy', () => {
    render(
      <div>
        <Typography variant="h1">Main Heading</Typography>
        <Typography variant="h2">Section Heading</Typography>
        <Typography variant="h3">Subsection Heading</Typography>
      </div>
    );

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Main Heading'
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Section Heading'
    );
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Subsection Heading'
    );
  });

  it('supports complex children content', () => {
    render(
      <Typography variant="p">
        This is a paragraph with{' '}
        <Typography variant="code" asChild>
          <span>inline code</span>
        </Typography>{' '}
        inside it.
      </Typography>
    );

    const paragraph = screen.getByRole('paragraph');
    expect(paragraph).toBeInTheDocument();
    expect(screen.getByText('inline code')).toBeInTheDocument();
    expect(screen.getByText('inline code')).toHaveClass('font-mono');
  });
});
