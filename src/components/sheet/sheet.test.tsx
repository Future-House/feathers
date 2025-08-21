import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';

// Mock @radix-ui/react-dialog to avoid ESM issues and portal rendering in tests
jest.mock('@radix-ui/react-dialog', () => ({
  Root: ({ children, onOpenChange, ...props }: any) => (
    <div
      data-testid="sheet-root"
      data-open={props.open}
      onClick={() => onOpenChange?.(!props.open)}
      {...props}
    >
      {children}
    </div>
  ),
  Trigger: ({ children, asChild, ...props }: any) =>
    asChild ? (
      React.cloneElement(children, {
        'data-testid': 'sheet-trigger',
        ...props,
      })
    ) : (
      <button data-testid="sheet-trigger" {...props}>
        {children}
      </button>
    ),
  Portal: ({ children }: any) => <>{children}</>,
  Overlay: ({ className, ...props }: any) => (
    <div data-testid="sheet-overlay" className={className} {...props} />
  ),
  Content: ({ children, className, ...props }: any) => (
    <div data-testid="sheet-content" className={className} {...props}>
      {children}
    </div>
  ),
  Close: ({ children, asChild, ...props }: any) =>
    asChild ? (
      React.cloneElement(children, {
        'data-testid': 'sheet-close',
        ...props,
      })
    ) : (
      <button data-testid="sheet-close" {...props}>
        {children}
      </button>
    ),
  Title: ({ children, className, ...props }: any) => (
    <h2 data-testid="sheet-title" className={className} {...props}>
      {children}
    </h2>
  ),
  Description: ({ children, className, ...props }: any) => (
    <p data-testid="sheet-description" className={className} {...props}>
      {children}
    </p>
  ),
}));

// Mock lucide-react icons
jest.mock('@/icons', () => ({
  X: () => <div data-testid="x-icon" />,
}));

describe('Sheet', () => {
  it('renders basic sheet components', () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet Description</SheetDescription>
          </SheetHeader>
          <div>Sheet content</div>
          <SheetFooter>
            <SheetClose>Close</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );

    expect(screen.getByTestId('sheet-root')).toBeInTheDocument();
    expect(screen.getByTestId('sheet-trigger')).toBeInTheDocument();
    expect(screen.getByTestId('sheet-content')).toBeInTheDocument();
    expect(screen.getByTestId('sheet-title')).toBeInTheDocument();
    expect(screen.getByTestId('sheet-description')).toBeInTheDocument();
    expect(screen.getAllByTestId('sheet-close')).toHaveLength(2); // One explicit + one from SheetContent
  });

  it('renders trigger with asChild prop', () => {
    render(
      <Sheet>
        <SheetTrigger asChild>
          <button>Custom Trigger</button>
        </SheetTrigger>
        <SheetContent>Content</SheetContent>
      </Sheet>
    );

    const trigger = screen.getByTestId('sheet-trigger');
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveTextContent('Custom Trigger');
  });

  it('renders close button with asChild prop', () => {
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetClose asChild>
            <button>Custom Close</button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    );

    const closeButtons = screen.getAllByTestId('sheet-close');
    expect(closeButtons).toHaveLength(2); // One explicit + one from SheetContent
    // Find the one with custom text
    const customCloseButton = closeButtons.find(button =>
      button.textContent?.includes('Custom Close')
    );
    expect(customCloseButton).toBeInTheDocument();
    expect(customCloseButton).toHaveTextContent('Custom Close');
  });

  it('applies custom className to components', () => {
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent className="custom-content">
          <SheetHeader className="custom-header">
            <SheetTitle className="custom-title">Title</SheetTitle>
            <SheetDescription className="custom-description">
              Description
            </SheetDescription>
          </SheetHeader>
          <SheetFooter className="custom-footer">
            <SheetClose>Custom Close</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );

    expect(screen.getByTestId('sheet-content')).toHaveClass('custom-content');
    expect(screen.getByTestId('sheet-title')).toHaveClass('custom-title');
    expect(screen.getByTestId('sheet-description')).toHaveClass(
      'custom-description'
    );
    // SheetHeader and SheetFooter use div elements, so we check by content
    expect(screen.getByText('Title').closest('div')).toHaveClass(
      'custom-header'
    );
    // Find the div that contains the explicit "Custom Close" button with custom-footer class
    const footerDiv = screen
      .getByText('Custom Close')
      .closest('div.custom-footer');
    expect(footerDiv).toHaveClass('custom-footer');
  });

  it('renders content with different side positions', () => {
    const { rerender } = render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side="right">Content</SheetContent>
      </Sheet>
    );

    let content = screen.getByTestId('sheet-content');
    expect(content).toHaveClass('right-0');

    rerender(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side="left">Content</SheetContent>
      </Sheet>
    );

    content = screen.getByTestId('sheet-content');
    expect(content).toHaveClass('left-0');

    rerender(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side="top">Content</SheetContent>
      </Sheet>
    );

    content = screen.getByTestId('sheet-content');
    expect(content).toHaveClass('top-0');

    rerender(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side="bottom">Content</SheetContent>
      </Sheet>
    );

    content = screen.getByTestId('sheet-content');
    expect(content).toHaveClass('bottom-0');
  });

  it('renders overlay component', () => {
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>Content</SheetContent>
      </Sheet>
    );

    expect(screen.getByTestId('sheet-overlay')).toBeInTheDocument();
  });

  it('renders close icon in content', () => {
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>Content</SheetContent>
      </Sheet>
    );

    expect(screen.getByTestId('x-icon')).toBeInTheDocument();
  });

  it('handles controlled open state', () => {
    const onOpenChange = jest.fn();

    render(
      <Sheet open={true} onOpenChange={onOpenChange}>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>Content</SheetContent>
      </Sheet>
    );

    expect(screen.getByTestId('sheet-root')).toHaveAttribute(
      'data-open',
      'true'
    );
  });

  it('calls onOpenChange when triggered', async () => {
    const onOpenChange = jest.fn();
    const user = userEvent.setup();

    render(
      <Sheet onOpenChange={onOpenChange}>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>Content</SheetContent>
      </Sheet>
    );

    await user.click(screen.getByTestId('sheet-root'));
    expect(onOpenChange).toHaveBeenCalled();
  });

  it('forwards props to primitive components', () => {
    render(
      <Sheet>
        <SheetTrigger disabled>Open</SheetTrigger>
        <SheetContent data-testid="custom-content">
          <SheetTitle id="custom-title">Title</SheetTitle>
          <SheetDescription id="custom-description">
            Description
          </SheetDescription>
        </SheetContent>
      </Sheet>
    );

    expect(screen.getByTestId('sheet-trigger')).toHaveAttribute('disabled');
    expect(screen.getByTestId('sheet-title')).toHaveAttribute(
      'id',
      'custom-title'
    );
    expect(screen.getByTestId('sheet-description')).toHaveAttribute(
      'id',
      'custom-description'
    );
  });

  it('renders header and footer as div elements', () => {
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
          <SheetFooter>
            <SheetClose>Footer Close</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );

    const headerDiv = screen.getByText('Title').closest('div');
    const footerDiv = screen.getByText('Footer Close').closest('div');

    expect(headerDiv).toHaveAttribute('data-slot', 'sheet-header');
    expect(footerDiv).toHaveAttribute('data-slot', 'sheet-footer');
  });

  it('renders with proper data-slot attributes', () => {
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetClose>Close</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );

    expect(screen.getByTestId('sheet-root')).toHaveAttribute(
      'data-slot',
      'sheet'
    );
    expect(screen.getByTestId('sheet-trigger')).toHaveAttribute(
      'data-slot',
      'sheet-trigger'
    );
    expect(screen.getByTestId('sheet-content')).toHaveAttribute(
      'data-slot',
      'sheet-content'
    );
    expect(screen.getByTestId('sheet-title')).toHaveAttribute(
      'data-slot',
      'sheet-title'
    );
    expect(screen.getByTestId('sheet-description')).toHaveAttribute(
      'data-slot',
      'sheet-description'
    );
  });

  it('renders with default side prop', () => {
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>Content</SheetContent>
      </Sheet>
    );

    const content = screen.getByTestId('sheet-content');
    // Default side is "right", so it should have right-0 class
    expect(content).toHaveClass('right-0');
  });
});
