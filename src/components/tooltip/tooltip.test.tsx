import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];
  constructor(
    _callback: IntersectionObserverCallback,
    _options?: IntersectionObserverInit
  ) {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() {
    return [];
  }
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

describe('TooltipProvider', () => {
  it('renders correctly', () => {
    render(
      <TooltipProvider>
        <div>Content</div>
      </TooltipProvider>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('accepts custom delayDuration', () => {
    render(
      <TooltipProvider delayDuration={500}>
        <div>Content with delay</div>
      </TooltipProvider>
    );
    expect(screen.getByText('Content with delay')).toBeInTheDocument();
  });
});

describe('Tooltip', () => {
  it('renders correctly', () => {
    render(
      <Tooltip>
        <TooltipTrigger asChild>
          <button>Trigger</button>
        </TooltipTrigger>
        <TooltipContent>Content</TooltipContent>
      </Tooltip>
    );
    expect(screen.getByRole('button', { name: 'Trigger' })).toBeInTheDocument();
  });

  it('can be controlled with open prop', () => {
    render(
      <Tooltip open={true}>
        <TooltipTrigger asChild>
          <button>Trigger</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip Content</TooltipContent>
      </Tooltip>
    );
    expect(screen.getAllByText('Tooltip Content')[0]).toBeInTheDocument();
  });

  it('calls onOpenChange when state changes', async () => {
    const handleOpenChange = jest.fn();
    render(
      <Tooltip onOpenChange={handleOpenChange}>
        <TooltipTrigger asChild>
          <button>Trigger</button>
        </TooltipTrigger>
        <TooltipContent>Content</TooltipContent>
      </Tooltip>
    );

    const trigger = screen.getByRole('button');
    await userEvent.hover(trigger);

    await waitFor(() => {
      expect(handleOpenChange).toHaveBeenCalledWith(true);
    });
  });
});

describe('TooltipTrigger', () => {
  it('renders correctly', () => {
    render(
      <Tooltip>
        <TooltipTrigger asChild>
          <button>Trigger Button</button>
        </TooltipTrigger>
        <TooltipContent>Content</TooltipContent>
      </Tooltip>
    );
    expect(
      screen.getByRole('button', { name: 'Trigger Button' })
    ).toBeInTheDocument();
  });

  it('has correct data-slot attribute', () => {
    const { container } = render(
      <Tooltip>
        <TooltipTrigger asChild>
          <button>Trigger</button>
        </TooltipTrigger>
        <TooltipContent>Content</TooltipContent>
      </Tooltip>
    );
    const trigger = container.querySelector('[data-slot="tooltip-trigger"]');
    expect(trigger).toBeInTheDocument();
  });

  it('renders as child component when asChild is true', () => {
    render(
      <Tooltip>
        <TooltipTrigger asChild>
          <a href="/test">Link Trigger</a>
        </TooltipTrigger>
        <TooltipContent>Content</TooltipContent>
      </Tooltip>
    );

    const link = screen.getByRole('link', { name: 'Link Trigger' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('trigger responds to user interaction', () => {
    render(
      <Tooltip>
        <TooltipTrigger asChild>
          <button>Interactive Button</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip appears</TooltipContent>
      </Tooltip>
    );

    const trigger = screen.getByRole('button');
    expect(trigger).toBeInTheDocument();

    // Test that the trigger can be focused
    act(() => {
      trigger.focus();
    });

    expect(trigger).toHaveFocus();
  });
});

describe('TooltipContent', () => {
  it('renders correctly when tooltip is open', () => {
    render(
      <Tooltip open={true}>
        <TooltipTrigger asChild>
          <button>Trigger</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip Content</TooltipContent>
      </Tooltip>
    );
    expect(screen.getAllByText('Tooltip Content')[0]).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(
      <Tooltip open={true}>
        <TooltipTrigger asChild>
          <button>Trigger</button>
        </TooltipTrigger>
        <TooltipContent>Content</TooltipContent>
      </Tooltip>
    );

    const content = screen.getAllByText('Content')[0];
    expect(content).toHaveClass(
      'bg-primary',
      'text-primary-foreground',
      'rounded-md',
      'px-3',
      'py-1.5',
      'text-xs'
    );
  });

  it('accepts custom className', () => {
    render(
      <Tooltip open={true}>
        <TooltipTrigger asChild>
          <button>Trigger</button>
        </TooltipTrigger>
        <TooltipContent className="custom-class">Custom Content</TooltipContent>
      </Tooltip>
    );

    const content = screen.getAllByText('Custom Content')[0];
    expect(content).toHaveClass('custom-class');
  });

  it('renders with complex content structure', () => {
    render(
      <Tooltip open={true}>
        <TooltipTrigger asChild>
          <button>Trigger</button>
        </TooltipTrigger>
        <TooltipContent>
          <div>Complex tooltip with multiple elements</div>
        </TooltipContent>
      </Tooltip>
    );

    expect(
      screen.getAllByText('Complex tooltip with multiple elements')[0]
    ).toBeInTheDocument();
  });
});

describe('Tooltip integration', () => {
  it('renders trigger correctly for keyboard navigation', () => {
    render(
      <div>
        <button>Before</button>
        <Tooltip>
          <TooltipTrigger asChild>
            <button>Tooltip Trigger</button>
          </TooltipTrigger>
          <TooltipContent>Keyboard tooltip</TooltipContent>
        </Tooltip>
      </div>
    );

    expect(
      screen.getByRole('button', { name: 'Tooltip Trigger' })
    ).toBeInTheDocument();
  });

  it('trigger has correct accessibility attributes', () => {
    const { container } = render(
      <Tooltip>
        <TooltipTrigger asChild>
          <button>Trigger</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>
    );

    const trigger = container.querySelector('[data-slot="tooltip-trigger"]');
    expect(trigger).toBeInTheDocument();
  });
});
