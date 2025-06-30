import { render, screen } from '@testing-library/react';
import { Separator } from './separator';

// Mock @radix-ui/react-separator to avoid ESM issues in tests
jest.mock('@radix-ui/react-separator', () => ({
  Root: ({ children, orientation, decorative, className, ...props }: any) => (
    <div
      data-testid="separator"
      data-orientation={orientation}
      data-decorative={decorative}
      className={className}
      role={decorative === false ? 'separator' : undefined}
      aria-orientation={
        decorative === false && orientation === 'vertical'
          ? 'vertical'
          : undefined
      }
      {...props}
    >
      {children}
    </div>
  ),
}));

describe('Separator', () => {
  it('renders with default props', () => {
    render(<Separator />);

    const separator = screen.getByTestId('separator');
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute('data-orientation', 'horizontal');
    expect(separator).toHaveAttribute('data-decorative', 'true');
  });

  it('renders with horizontal orientation', () => {
    render(<Separator orientation="horizontal" />);

    const separator = screen.getByTestId('separator');
    expect(separator).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('renders with vertical orientation', () => {
    render(<Separator orientation="vertical" />);

    const separator = screen.getByTestId('separator');
    expect(separator).toHaveAttribute('data-orientation', 'vertical');
  });

  it('renders as decorative by default', () => {
    render(<Separator />);

    const separator = screen.getByTestId('separator');
    expect(separator).toHaveAttribute('data-decorative', 'true');
    expect(separator).not.toHaveAttribute('role');
  });

  it('renders as non-decorative when decorative is false', () => {
    render(<Separator decorative={false} />);

    const separator = screen.getByTestId('separator');
    expect(separator).toHaveAttribute('data-decorative', 'false');
    expect(separator).toHaveAttribute('role', 'separator');
  });

  it('applies custom className', () => {
    render(<Separator className="custom-separator" />);

    const separator = screen.getByTestId('separator');
    expect(separator).toHaveClass('custom-separator');
  });

  it('applies default styling classes', () => {
    render(<Separator />);

    const separator = screen.getByTestId('separator');
    expect(separator).toHaveClass(
      'bg-border',
      'shrink-0',
      'data-[orientation=horizontal]:h-px',
      'data-[orientation=horizontal]:w-full',
      'data-[orientation=vertical]:h-full',
      'data-[orientation=vertical]:w-px'
    );
  });

  it('combines default and custom classes', () => {
    render(<Separator className="my-4 bg-red-500" />);

    const separator = screen.getByTestId('separator');
    expect(separator).toHaveClass(
      'shrink-0',
      'my-4',
      'bg-red-500'
    );
  });

  it('forwards additional props', () => {
    render(<Separator data-testprop="test-value" id="custom-separator" />);

    const separator = screen.getByTestId('separator');
    expect(separator).toHaveAttribute('data-testprop', 'test-value');
    expect(separator).toHaveAttribute('id', 'custom-separator');
  });

  it('handles both orientation and decorative props together', () => {
    render(<Separator orientation="vertical" decorative={false} />);

    const separator = screen.getByTestId('separator');
    expect(separator).toHaveAttribute('data-orientation', 'vertical');
    expect(separator).toHaveAttribute('data-decorative', 'false');
    expect(separator).toHaveAttribute('role', 'separator');
    expect(separator).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('does not add aria-orientation for horizontal non-decorative separators', () => {
    render(<Separator orientation="horizontal" decorative={false} />);

    const separator = screen.getByTestId('separator');
    expect(separator).toHaveAttribute('data-orientation', 'horizontal');
    expect(separator).toHaveAttribute('role', 'separator');
    expect(separator).not.toHaveAttribute('aria-orientation');
  });

  it('has data-slot attribute for styling purposes', () => {
    render(<Separator />);

    const separator = screen.getByTestId('separator');
    expect(separator).toHaveAttribute('data-slot', 'separator');
  });

  it('works with all orientation values', () => {
    const { rerender } = render(<Separator orientation="horizontal" />);
    expect(screen.getByTestId('separator')).toHaveAttribute(
      'data-orientation',
      'horizontal'
    );

    rerender(<Separator orientation="vertical" />);
    expect(screen.getByTestId('separator')).toHaveAttribute(
      'data-orientation',
      'vertical'
    );
  });

  it('works with all decorative values', () => {
    const { rerender } = render(<Separator decorative={true} />);
    expect(screen.getByTestId('separator')).toHaveAttribute(
      'data-decorative',
      'true'
    );

    rerender(<Separator decorative={false} />);
    expect(screen.getByTestId('separator')).toHaveAttribute(
      'data-decorative',
      'false'
    );
  });

  it('maintains accessibility when used semantically', () => {
    render(
      <div>
        <div>Section 1</div>
        <Separator decorative={false} />
        <div>Section 2</div>
      </div>
    );

    const separator = screen.getByTestId('separator');
    expect(separator).toHaveAttribute('role', 'separator');
    expect(separator).toHaveAttribute('data-decorative', 'false');
  });

  it('renders without role when purely decorative', () => {
    render(<Separator decorative={true} />);

    const separator = screen.getByTestId('separator');
    expect(separator).not.toHaveAttribute('role');
    expect(separator).toHaveAttribute('data-decorative', 'true');
  });
});
