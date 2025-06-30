import { render, screen, fireEvent } from '@testing-library/react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
} from './popover';

describe('Popover', () => {
  it('renders popover with default props', () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverContent>
          <div>Popover content</div>
        </PopoverContent>
      </Popover>
    );

    expect(screen.getByRole('button', { name: 'Trigger' })).toBeInTheDocument();
  });

  it('renders popover structure', () => {
    const { container } = render(
      <Popover>
        <PopoverTrigger asChild>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverContent>
          <div>Content</div>
        </PopoverContent>
      </Popover>
    );

    // Check that trigger is rendered
    expect(screen.getByRole('button', { name: 'Trigger' })).toBeInTheDocument();
    // Check that trigger has the data-slot attribute
    expect(
      container.querySelector('[data-slot="popover-trigger"]')
    ).toBeInTheDocument();
  });

  it('handles controlled open state', () => {
    const onOpenChange = jest.fn();

    render(
      <Popover open={true} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverContent>
          <div>Content</div>
        </PopoverContent>
      </Popover>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('handles defaultOpen prop', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger asChild>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverContent>
          <div>Content</div>
        </PopoverContent>
      </Popover>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('handles modal prop', () => {
    render(
      <Popover modal={true}>
        <PopoverTrigger asChild>
          <button>Trigger</button>
        </PopoverTrigger>
        <PopoverContent>
          <div>Content</div>
        </PopoverContent>
      </Popover>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

describe('PopoverTrigger', () => {
  it('renders trigger with text content', () => {
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>
          <div>Content</div>
        </PopoverContent>
      </Popover>
    );

    expect(
      screen.getByRole('button', { name: 'Open Popover' })
    ).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    const { container } = render(
      <Popover>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent>
          <div>Content</div>
        </PopoverContent>
      </Popover>
    );

    const trigger = container.querySelector('[data-slot="popover-trigger"]');
    expect(trigger).toBeInTheDocument();
  });

  it('can be clicked', () => {
    render(
      <Popover>
        <PopoverTrigger>Click me</PopoverTrigger>
        <PopoverContent>
          <div>Content</div>
        </PopoverContent>
      </Popover>
    );

    const trigger = screen.getByRole('button', { name: 'Click me' });
    fireEvent.click(trigger);
    expect(trigger).toBeInTheDocument();
  });

  it('supports asChild prop', () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <button>Custom button</button>
        </PopoverTrigger>
        <PopoverContent>
          <div>Content</div>
        </PopoverContent>
      </Popover>
    );

    expect(
      screen.getByRole('button', { name: 'Custom button' })
    ).toBeInTheDocument();
  });
});

describe('PopoverContent', () => {
  it('renders content structure', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent>
          <div>Test content</div>
        </PopoverContent>
      </Popover>
    );

    // Check that trigger is rendered
    expect(screen.getByRole('button', { name: 'Trigger' })).toBeInTheDocument();
  });

  it('accepts custom props', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent
          className="custom-content-class"
          align="start"
          sideOffset={10}
          side="top"
        >
          <div>Content</div>
        </PopoverContent>
      </Popover>
    );

    // Check that the popover structure renders without errors
    expect(screen.getByRole('button', { name: 'Trigger' })).toBeInTheDocument();
  });
});

describe('PopoverAnchor', () => {
  it('renders anchor element', () => {
    const { container } = render(
      <Popover>
        <PopoverAnchor>
          <div>Anchor element</div>
        </PopoverAnchor>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent>
          <div>Content</div>
        </PopoverContent>
      </Popover>
    );

    const anchor = container.querySelector('[data-slot="popover-anchor"]');
    expect(anchor).toBeInTheDocument();
  });

  it('supports asChild prop', () => {
    render(
      <Popover>
        <PopoverAnchor asChild>
          <span>Custom anchor</span>
        </PopoverAnchor>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent>
          <div>Content</div>
        </PopoverContent>
      </Popover>
    );

    expect(screen.getByText('Custom anchor')).toBeInTheDocument();
  });

  it('applies data-slot attribute', () => {
    const { container } = render(
      <Popover>
        <PopoverAnchor>
          <div>Anchor</div>
        </PopoverAnchor>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent>
          <div>Content</div>
        </PopoverContent>
      </Popover>
    );

    const anchor = container.querySelector('[data-slot="popover-anchor"]');
    expect(anchor).toBeInTheDocument();
  });
});

describe('Popover Integration', () => {
  it('renders complete popover structure', () => {
    const { container } = render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <div>Popover content</div>
        </PopoverContent>
      </Popover>
    );

    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument();
    expect(
      container.querySelector('[data-slot="popover-trigger"]')
    ).toBeInTheDocument();
  });

  it('works with anchor and trigger', () => {
    const { container } = render(
      <Popover>
        <PopoverAnchor>
          <span>Anchor</span>
        </PopoverAnchor>
        <PopoverTrigger>Trigger</PopoverTrigger>
        <PopoverContent>
          <div>Content</div>
        </PopoverContent>
      </Popover>
    );

    expect(screen.getByText('Anchor')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Trigger' })).toBeInTheDocument();
    expect(
      container.querySelector('[data-slot="popover-anchor"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-slot="popover-trigger"]')
    ).toBeInTheDocument();
  });
});
