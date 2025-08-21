import { render, screen } from '@testing-library/react';
import { ScrollArea, ScrollBar } from './scroll-area';

// Mock @radix-ui/react-scroll-area to avoid potential ESM issues
jest.mock('@radix-ui/react-scroll-area', () => ({
  Root: ({
    children,
    className,
    type,
    scrollHideDelay,
    dir,
    ...props
  }: any) => (
    <div role="region" className={className} {...props}>
      {children}
    </div>
  ),
  Viewport: ({
    children,
    className,
    ...props
  }: React.ComponentPropsWithoutRef<'div'>) => (
    <div data-testid="scroll-viewport" className={className} {...props}>
      {children}
    </div>
  ),
  ScrollAreaScrollbar: ({
    children,
    orientation = 'vertical',
    className,
    forceMount,
    ...props
  }: any) => (
    <div
      data-testid={`scrollbar-${orientation}`}
      data-orientation={orientation}
      role="scrollbar"
      aria-orientation={orientation}
      className={className}
      {...props}
    >
      {children}
    </div>
  ),
  ScrollAreaThumb: ({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<'div'>) => (
    <div data-testid="scroll-thumb" className={className} {...props} />
  ),
  Corner: (props: React.ComponentPropsWithoutRef<'div'>) => (
    <div data-testid="scroll-corner" {...props} />
  ),
}));

describe('ScrollArea', () => {
  it('renders correctly', () => {
    render(
      <ScrollArea data-testid="scroll-area">
        <div>Content</div>
      </ScrollArea>
    );

    expect(screen.getByTestId('scroll-area')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByTestId('scroll-viewport')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(
      <ScrollArea className="custom-class" data-testid="scroll-area">
        <div>Content</div>
      </ScrollArea>
    );

    const scrollArea = screen.getByTestId('scroll-area');
    expect(scrollArea).toHaveClass('custom-class');
  });

  it('renders children content', () => {
    render(
      <ScrollArea>
        <div data-testid="child-content">Child Content</div>
        <div data-testid="another-child">Another Child</div>
      </ScrollArea>
    );

    expect(screen.getByTestId('child-content')).toBeInTheDocument();
    expect(screen.getByTestId('another-child')).toBeInTheDocument();
  });

  it('supports type prop', () => {
    render(
      <ScrollArea type="always" data-testid="scroll-area">
        <div>Content</div>
      </ScrollArea>
    );

    const scrollArea = screen.getByTestId('scroll-area');
    expect(scrollArea).toBeInTheDocument();
  });

  it('supports scrollHideDelay prop', () => {
    render(
      <ScrollArea scrollHideDelay={1000} data-testid="scroll-area">
        <div>Content</div>
      </ScrollArea>
    );

    const scrollArea = screen.getByTestId('scroll-area');
    expect(scrollArea).toBeInTheDocument();
  });

  it('supports dir prop', () => {
    render(
      <ScrollArea dir="rtl" data-testid="scroll-area">
        <div>Content</div>
      </ScrollArea>
    );

    const scrollArea = screen.getByTestId('scroll-area');
    expect(scrollArea).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(
      <ScrollArea data-testid="scroll-area">
        <div>Content</div>
      </ScrollArea>
    );

    const scrollArea = screen.getByTestId('scroll-area');
    expect(scrollArea).toHaveAttribute('role', 'region');
  });

  it('renders with many items for scrolling', () => {
    render(
      <ScrollArea className="h-32">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} data-testid={`item-${i}`}>
            Item {i + 1}
          </div>
        ))}
      </ScrollArea>
    );

    expect(screen.getByTestId('item-0')).toBeInTheDocument();
    expect(screen.getByTestId('item-49')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 50')).toBeInTheDocument();
  });
});

describe('ScrollBar', () => {
  it('renders vertical scrollbar by default', () => {
    render(
      <ScrollArea>
        <div>Content</div>
      </ScrollArea>
    );

    const scrollbar = screen.getByTestId('scrollbar-vertical');
    expect(scrollbar).toBeInTheDocument();
    expect(scrollbar).toHaveAttribute('data-orientation', 'vertical');
    expect(scrollbar).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders horizontal scrollbar when specified', () => {
    render(
      <ScrollArea>
        <div>Content</div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    );

    const horizontalScrollbar = screen.getByTestId('scrollbar-horizontal');
    expect(horizontalScrollbar).toBeInTheDocument();
    expect(horizontalScrollbar).toHaveAttribute(
      'data-orientation',
      'horizontal'
    );
    expect(horizontalScrollbar).toHaveAttribute(
      'aria-orientation',
      'horizontal'
    );
  });

  it('renders both vertical and horizontal scrollbars', () => {
    render(
      <ScrollArea>
        <div>Content</div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    );

    expect(screen.getByTestId('scrollbar-vertical')).toBeInTheDocument();
    expect(screen.getByTestId('scrollbar-horizontal')).toBeInTheDocument();
  });

  it('supports custom className', () => {
    render(
      <ScrollArea>
        <div>Content</div>
        <ScrollBar className="custom-scrollbar" />
      </ScrollArea>
    );

    const scrollbars = screen.getAllByTestId('scrollbar-vertical');
    const customScrollbar = scrollbars.find(scrollbar =>
      scrollbar.className.includes('custom-scrollbar')
    );
    expect(customScrollbar).toHaveClass('custom-scrollbar');
  });

  it('renders scroll thumb', () => {
    render(
      <ScrollArea>
        <div>Content</div>
      </ScrollArea>
    );

    expect(screen.getByTestId('scroll-thumb')).toBeInTheDocument();
  });

  it('supports forceMount prop', () => {
    render(
      <ScrollArea>
        <div>Content</div>
        <ScrollBar forceMount />
      </ScrollArea>
    );

    const scrollbars = screen.getAllByTestId('scrollbar-vertical');
    expect(scrollbars.length).toBeGreaterThan(0);
    expect(scrollbars[0]).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(
      <ScrollArea>
        <div>Content</div>
      </ScrollArea>
    );

    const scrollbar = screen.getByTestId('scrollbar-vertical');
    expect(scrollbar).toHaveAttribute('role', 'scrollbar');
    expect(scrollbar).toHaveAttribute('aria-orientation', 'vertical');
  });
});

describe('ScrollArea Integration', () => {
  it('renders complete scroll area with corner', () => {
    render(
      <ScrollArea data-testid="complete-scroll-area">
        <div>Scrollable content</div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    );

    expect(screen.getByTestId('complete-scroll-area')).toBeInTheDocument();
    expect(screen.getByTestId('scroll-viewport')).toBeInTheDocument();
    expect(screen.getByTestId('scrollbar-vertical')).toBeInTheDocument();
    expect(screen.getByTestId('scrollbar-horizontal')).toBeInTheDocument();
    expect(screen.getByTestId('scroll-corner')).toBeInTheDocument();
    expect(screen.getByText('Scrollable content')).toBeInTheDocument();
  });

  it('works with complex content structure', () => {
    render(
      <ScrollArea className="h-48 w-64">
        <div className="p-4">
          <h3 data-testid="title">Title</h3>
          <ul>
            {Array.from({ length: 10 }).map((_, i) => (
              <li key={i} data-testid={`list-item-${i}`}>
                List item {i + 1}
              </li>
            ))}
          </ul>
        </div>
      </ScrollArea>
    );

    expect(screen.getByTestId('title')).toBeInTheDocument();
    expect(screen.getByTestId('list-item-0')).toBeInTheDocument();
    expect(screen.getByTestId('list-item-9')).toBeInTheDocument();
  });

  it('supports nested scroll areas', () => {
    render(
      <ScrollArea className="h-64" data-testid="outer-scroll">
        <div className="p-4">
          <h3>Outer Content</h3>
          <ScrollArea className="h-32" data-testid="inner-scroll">
            <div className="p-2">
              <p data-testid="inner-content">Inner scrollable content</p>
            </div>
          </ScrollArea>
        </div>
      </ScrollArea>
    );

    expect(screen.getByTestId('outer-scroll')).toBeInTheDocument();
    expect(screen.getByTestId('inner-scroll')).toBeInTheDocument();
    expect(screen.getByTestId('inner-content')).toBeInTheDocument();
  });

  it('maintains content accessibility', () => {
    render(
      <ScrollArea>
        <div>
          <button data-testid="interactive-button">Click me</button>
          <input data-testid="text-input" placeholder="Type here" />
          <a href="#" data-testid="link">
            Link
          </a>
        </div>
      </ScrollArea>
    );

    expect(screen.getByTestId('interactive-button')).toBeInTheDocument();
    expect(screen.getByTestId('text-input')).toBeInTheDocument();
    expect(screen.getByTestId('link')).toBeInTheDocument();
  });
});
