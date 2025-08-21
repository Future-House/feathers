import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Button } from '../button/button';
import { Avatar, AvatarFallback, AvatarImage } from '../avatar/avatar';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './hover-card';

const HoverCardExample = ({
  defaultOpen = false,
  open,
  onOpenChange,
  openDelay = 0,
  closeDelay = 0,
  ...props
}: {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  openDelay?: number;
  closeDelay?: number;
  [key: string]: unknown;
}) => (
  <HoverCard
    defaultOpen={defaultOpen}
    open={open}
    onOpenChange={onOpenChange}
    openDelay={openDelay}
    closeDelay={closeDelay}
    {...props}
  >
    <HoverCardTrigger asChild>
      <Button data-testid="hover-card-trigger">@nextjs</Button>
    </HoverCardTrigger>
    <HoverCardContent data-testid="hover-card-content">
      <div className="flex justify-between space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/vercel.png" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">
            The React Framework – created and maintained by @vercel.
          </p>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

describe('HoverCard', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders hover card trigger', () => {
    render(<HoverCardExample />);

    const trigger = screen.getByTestId('hover-card-trigger');
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveTextContent('@nextjs');
  });

  it('does not show content initially', () => {
    render(<HoverCardExample />);

    expect(screen.queryByTestId('hover-card-content')).not.toBeInTheDocument();
  });

  it('opens hover card when defaultOpen is true', () => {
    render(<HoverCardExample defaultOpen={true} />);

    expect(screen.getByTestId('hover-card-content')).toBeInTheDocument();
    expect(screen.getAllByText('@nextjs')[0]).toBeInTheDocument();
    expect(
      screen.getByText(
        'The React Framework – created and maintained by @vercel.'
      )
    ).toBeInTheDocument();
  });

  it('supports controlled mode with open prop', () => {
    const { rerender } = render(<HoverCardExample open={false} />);

    expect(screen.queryByTestId('hover-card-content')).not.toBeInTheDocument();

    rerender(<HoverCardExample open={true} />);
    expect(screen.getByTestId('hover-card-content')).toBeInTheDocument();
  });

  it('calls onOpenChange when state changes', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const onOpenChange = jest.fn();
    render(<HoverCardExample onOpenChange={onOpenChange} openDelay={0} />);

    const trigger = screen.getByTestId('hover-card-trigger');
    await user.hover(trigger);

    act(() => {
      jest.advanceTimersByTime(1);
    });

    await waitFor(() => {
      expect(onOpenChange).toHaveBeenCalledWith(true);
    });
  });

  it('opens on hover with default delay', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<HoverCardExample openDelay={700} />);

    const trigger = screen.getByTestId('hover-card-trigger');
    await user.hover(trigger);

    // Should not be open immediately
    expect(screen.queryByTestId('hover-card-content')).not.toBeInTheDocument();

    // Should open after delay
    act(() => {
      jest.advanceTimersByTime(700);
    });
    await waitFor(() => {
      expect(screen.getByTestId('hover-card-content')).toBeInTheDocument();
    });
  });

  it('opens on hover with custom delay', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<HoverCardExample openDelay={300} />);

    const trigger = screen.getByTestId('hover-card-trigger');
    await user.hover(trigger);

    // Should not be open immediately
    expect(screen.queryByTestId('hover-card-content')).not.toBeInTheDocument();

    // Should open after custom delay
    act(() => {
      jest.advanceTimersByTime(300);
    });
    await waitFor(() => {
      expect(screen.getByTestId('hover-card-content')).toBeInTheDocument();
    });
  });

  it('closes on unhover', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<HoverCardExample openDelay={0} closeDelay={300} />);

    const trigger = screen.getByTestId('hover-card-trigger');

    // Open the hover card
    await user.hover(trigger);
    act(() => {
      jest.advanceTimersByTime(100);
    });
    await waitFor(() => {
      expect(screen.getByTestId('hover-card-content')).toBeInTheDocument();
    });

    // Unhover
    await user.unhover(trigger);

    // Should still be open immediately after unhover
    expect(screen.getByTestId('hover-card-content')).toBeInTheDocument();

    // Should close after delay
    act(() => {
      jest.advanceTimersByTime(300);
    });
    await waitFor(() => {
      expect(
        screen.queryByTestId('hover-card-content')
      ).not.toBeInTheDocument();
    });
  });

  it('has proper accessibility attributes', () => {
    render(<HoverCardExample defaultOpen={true} />);

    const content = screen.getByTestId('hover-card-content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveAttribute('data-slot', 'hover-card-content');
  });

  it('applies custom className to content', () => {
    render(
      <HoverCard defaultOpen={true}>
        <HoverCardTrigger asChild>
          <Button>Trigger</Button>
        </HoverCardTrigger>
        <HoverCardContent className="custom-class" data-testid="custom-content">
          <div>Content</div>
        </HoverCardContent>
      </HoverCard>
    );

    const content = screen.getByTestId('custom-content');
    expect(content).toHaveClass('custom-class');
  });

  it('supports asChild prop on trigger', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(
      <HoverCard openDelay={0}>
        <HoverCardTrigger asChild>
          <button data-testid="custom-trigger">Custom Trigger</button>
        </HoverCardTrigger>
        <HoverCardContent data-testid="hover-content">
          <div>Hover content</div>
        </HoverCardContent>
      </HoverCard>
    );

    const customTrigger = screen.getByTestId('custom-trigger');
    expect(customTrigger).toBeInTheDocument();

    await user.hover(customTrigger);
    jest.advanceTimersByTime(100);
    await waitFor(() => {
      expect(screen.getByTestId('hover-content')).toBeInTheDocument();
    });
  });

  it('renders with custom side offset', () => {
    render(
      <HoverCard defaultOpen={true}>
        <HoverCardTrigger asChild>
          <Button>Trigger</Button>
        </HoverCardTrigger>
        <HoverCardContent sideOffset={10} data-testid="offset-content">
          <div>Content with offset</div>
        </HoverCardContent>
      </HoverCard>
    );

    const content = screen.getByTestId('offset-content');
    expect(content).toBeInTheDocument();
  });

  it('renders with custom alignment', () => {
    render(
      <HoverCard defaultOpen={true}>
        <HoverCardTrigger asChild>
          <Button>Trigger</Button>
        </HoverCardTrigger>
        <HoverCardContent align="start" data-testid="aligned-content">
          <div>Aligned content</div>
        </HoverCardContent>
      </HoverCard>
    );

    const content = screen.getByTestId('aligned-content');
    expect(content).toBeInTheDocument();
  });

  it('forwards props to hover card components', () => {
    render(
      <HoverCard defaultOpen={true} data-testid="hover-card-root">
        <HoverCardTrigger asChild data-testid="hover-card-trigger-custom">
          <Button>Trigger</Button>
        </HoverCardTrigger>
        <HoverCardContent data-testid="hover-card-content-custom">
          <div>Content</div>
        </HoverCardContent>
      </HoverCard>
    );

    expect(screen.getByTestId('hover-card-trigger-custom')).toBeInTheDocument();
    expect(screen.getByTestId('hover-card-content-custom')).toBeInTheDocument();
  });

  it('renders complex content correctly', () => {
    render(
      <HoverCard defaultOpen={true}>
        <HoverCardTrigger asChild>
          <Button>Profile</Button>
        </HoverCardTrigger>
        <HoverCardContent data-testid="profile-content">
          <div className="flex justify-between space-x-4">
            <Avatar data-testid="profile-avatar">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold" data-testid="profile-name">
                shadcn
              </h4>
              <p className="text-sm" data-testid="profile-description">
                Building beautiful, accessible user interfaces.
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    );

    expect(screen.getByTestId('profile-content')).toBeInTheDocument();
    expect(screen.getByTestId('profile-avatar')).toBeInTheDocument();
    expect(screen.getByTestId('profile-name')).toHaveTextContent('shadcn');
    expect(screen.getByTestId('profile-description')).toHaveTextContent(
      'Building beautiful, accessible user interfaces.'
    );
  });

  it('maintains state across re-renders', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const { rerender } = render(<HoverCardExample openDelay={0} />);

    const trigger = screen.getByTestId('hover-card-trigger');
    await user.hover(trigger);
    act(() => {
      jest.advanceTimersByTime(100);
    });
    await waitFor(() => {
      expect(screen.getByTestId('hover-card-content')).toBeInTheDocument();
    });

    // Re-render with same props
    rerender(<HoverCardExample openDelay={0} />);
    expect(screen.getByTestId('hover-card-content')).toBeInTheDocument();
  });

  it('handles rapid hover and unhover correctly', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<HoverCardExample openDelay={300} closeDelay={200} />);

    const trigger = screen.getByTestId('hover-card-trigger');

    // Hover and immediately unhover
    await user.hover(trigger);
    await user.unhover(trigger);

    // Should not open since we unhovered before the delay
    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(screen.queryByTestId('hover-card-content')).not.toBeInTheDocument();
  });

  it('supports custom open and close delays', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<HoverCardExample openDelay={500} closeDelay={100} />);

    const trigger = screen.getByTestId('hover-card-trigger');

    // Test custom open delay
    await user.hover(trigger);
    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(screen.queryByTestId('hover-card-content')).not.toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(100);
    });
    await waitFor(() => {
      expect(screen.getByTestId('hover-card-content')).toBeInTheDocument();
    });

    // Test custom close delay
    await user.unhover(trigger);
    act(() => {
      jest.advanceTimersByTime(50);
    });
    expect(screen.getByTestId('hover-card-content')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(100);
    });
    await waitFor(() => {
      expect(
        screen.queryByTestId('hover-card-content')
      ).not.toBeInTheDocument();
    });
  });

  it('renders with different content sizes', () => {
    render(
      <HoverCard defaultOpen={true}>
        <HoverCardTrigger asChild>
          <Button>Large Content</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-96" data-testid="large-content">
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Large Content Card</h4>
            <p className="text-sm">
              This is a larger hover card with more content to test different
              sizes and layouts.
            </p>
            <div className="space-y-2">
              <h5 className="text-sm font-medium">Features:</h5>
              <ul className="space-y-1 text-xs">
                <li>• Feature one</li>
                <li>• Feature two</li>
                <li>• Feature three</li>
              </ul>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    );

    const content = screen.getByTestId('large-content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('w-96');
    expect(screen.getByText('Large Content Card')).toBeInTheDocument();
    expect(screen.getByText('• Feature one')).toBeInTheDocument();
  });

  it('handles keyboard navigation correctly', () => {
    render(<HoverCardExample />);

    const trigger = screen.getByTestId('hover-card-trigger');
    trigger.focus();

    expect(trigger).toHaveFocus();

    // Hover cards should not open on focus by default (only on hover)
    expect(screen.queryByTestId('hover-card-content')).not.toBeInTheDocument();
  });
});
