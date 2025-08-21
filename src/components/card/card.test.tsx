import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from './card';

describe('Card', () => {
  it('renders correctly', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<Card>Default Card</Card>);
    const card = screen.getByText('Default Card');
    expect(card).toHaveClass(
      'bg-card',
      'text-card-foreground',
      'flex',
      'flex-col',
      'gap-6',
      'rounded-xl',
      'border',
      'py-6',
      'shadow-sm'
    );
  });

  it('renders as a div element', () => {
    render(<Card>Card Content</Card>);
    const card = screen.getByText('Card Content');
    expect(card.tagName).toBe('DIV');
  });

  it('accepts custom className', () => {
    render(<Card className="custom-class">Custom Card</Card>);
    const card = screen.getByText('Custom Card');
    expect(card).toHaveClass('custom-class');
  });

  it('passes through HTML attributes', () => {
    render(
      <Card data-testid="test-card" id="card-id" title="Test title">
        Card with attributes
      </Card>
    );
    const card = screen.getByTestId('test-card');
    expect(card).toHaveAttribute('id', 'card-id');
    expect(card).toHaveAttribute('title', 'Test title');
  });

  it('has correct data-slot attribute', () => {
    render(<Card>Card with slot</Card>);
    const card = screen.getByText('Card with slot');
    expect(card).toHaveAttribute('data-slot', 'card');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Card ref={ref}>Card with ref</Card>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current?.textContent).toBe('Card with ref');
  });
});

describe('CardHeader', () => {
  it('renders correctly', () => {
    render(<CardHeader>Header content</CardHeader>);
    expect(screen.getByText('Header content')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<CardHeader>Card Header</CardHeader>);
    const header = screen.getByText('Card Header');
    expect(header).toHaveClass(
      '@container/card-header',
      'grid',
      'auto-rows-min',
      'grid-rows-[auto_auto]',
      'items-start',
      'gap-1.5',
      'px-6'
    );
  });

  it('has correct data-slot attribute', () => {
    render(<CardHeader>Header with slot</CardHeader>);
    const header = screen.getByText('Header with slot');
    expect(header).toHaveAttribute('data-slot', 'card-header');
  });

  it('accepts custom className', () => {
    render(<CardHeader className="custom-header">Custom Header</CardHeader>);
    const header = screen.getByText('Custom Header');
    expect(header).toHaveClass('custom-header');
  });
});

describe('CardTitle', () => {
  it('renders correctly', () => {
    render(<CardTitle>Title content</CardTitle>);
    expect(screen.getByText('Title content')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<CardTitle>Card Title</CardTitle>);
    const title = screen.getByText('Card Title');
    expect(title).toHaveClass('leading-none', 'font-semibold');
  });

  it('has correct data-slot attribute', () => {
    render(<CardTitle>Title with slot</CardTitle>);
    const title = screen.getByText('Title with slot');
    expect(title).toHaveAttribute('data-slot', 'card-title');
  });

  it('accepts custom className', () => {
    render(<CardTitle className="custom-title">Custom Title</CardTitle>);
    const title = screen.getByText('Custom Title');
    expect(title).toHaveClass('custom-title');
  });
});

describe('CardDescription', () => {
  it('renders correctly', () => {
    render(<CardDescription>Description content</CardDescription>);
    expect(screen.getByText('Description content')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<CardDescription>Card Description</CardDescription>);
    const description = screen.getByText('Card Description');
    expect(description).toHaveClass('text-muted-foreground', 'text-sm');
  });

  it('has correct data-slot attribute', () => {
    render(<CardDescription>Description with slot</CardDescription>);
    const description = screen.getByText('Description with slot');
    expect(description).toHaveAttribute('data-slot', 'card-description');
  });

  it('accepts custom className', () => {
    render(
      <CardDescription className="custom-description">
        Custom Description
      </CardDescription>
    );
    const description = screen.getByText('Custom Description');
    expect(description).toHaveClass('custom-description');
  });
});

describe('CardAction', () => {
  it('renders correctly', () => {
    render(<CardAction>Action content</CardAction>);
    expect(screen.getByText('Action content')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<CardAction>Card Action</CardAction>);
    const action = screen.getByText('Card Action');
    expect(action).toHaveClass(
      'col-start-2',
      'row-span-2',
      'row-start-1',
      'self-start',
      'justify-self-end'
    );
  });

  it('has correct data-slot attribute', () => {
    render(<CardAction>Action with slot</CardAction>);
    const action = screen.getByText('Action with slot');
    expect(action).toHaveAttribute('data-slot', 'card-action');
  });

  it('accepts custom className', () => {
    render(<CardAction className="custom-action">Custom Action</CardAction>);
    const action = screen.getByText('Custom Action');
    expect(action).toHaveClass('custom-action');
  });
});

describe('CardContent', () => {
  it('renders correctly', () => {
    render(<CardContent>Content text</CardContent>);
    expect(screen.getByText('Content text')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<CardContent>Card Content</CardContent>);
    const content = screen.getByText('Card Content');
    expect(content).toHaveClass('px-6');
  });

  it('has correct data-slot attribute', () => {
    render(<CardContent>Content with slot</CardContent>);
    const content = screen.getByText('Content with slot');
    expect(content).toHaveAttribute('data-slot', 'card-content');
  });

  it('accepts custom className', () => {
    render(
      <CardContent className="custom-content">Custom Content</CardContent>
    );
    const content = screen.getByText('Custom Content');
    expect(content).toHaveClass('custom-content', 'px-6');
  });
});

describe('CardFooter', () => {
  it('renders correctly', () => {
    render(<CardFooter>Footer content</CardFooter>);
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(<CardFooter>Card Footer</CardFooter>);
    const footer = screen.getByText('Card Footer');
    expect(footer).toHaveClass('flex', 'items-center', 'px-6');
  });

  it('has correct data-slot attribute', () => {
    render(<CardFooter>Footer with slot</CardFooter>);
    const footer = screen.getByText('Footer with slot');
    expect(footer).toHaveAttribute('data-slot', 'card-footer');
  });

  it('accepts custom className', () => {
    render(<CardFooter className="custom-footer">Custom Footer</CardFooter>);
    const footer = screen.getByText('Custom Footer');
    expect(footer).toHaveClass('custom-footer');
  });
});

describe('Card composition', () => {
  it('renders a complete card with all components', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
          <CardDescription>Test Description</CardDescription>
          <CardAction>
            <button>Action</button>
          </CardAction>
        </CardHeader>
        <CardContent>Test Content</CardContent>
        <CardFooter>Test Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByText('Test Footer')).toBeInTheDocument();
  });

  it('renders React nodes as children', () => {
    render(
      <Card>
        <CardContent>
          <strong>Bold text</strong> and normal text
        </CardContent>
      </Card>
    );
    const boldElement = screen.getByText('Bold text');
    expect(boldElement.tagName).toBe('STRONG');
    expect(screen.getByText('and normal text')).toBeInTheDocument();
  });

  it('handles empty content', () => {
    const { container } = render(<Card></Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('bg-card');
    expect(card.textContent).toBe('');
  });
});
