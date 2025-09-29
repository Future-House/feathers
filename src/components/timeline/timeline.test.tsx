import { render, screen, fireEvent } from '@testing-library/react';
import { Checkmark as Check } from '@/icons';
import { Timeline, TimelineItem, TimelineHeading } from './timeline';

describe('Timeline', () => {
  it('renders timeline container', () => {
    render(
      <Timeline data-testid="timeline">
        <TimelineItem>
          <TimelineHeading>Test Item</TimelineHeading>
        </TimelineItem>
      </Timeline>
    );

    expect(screen.getByTestId('timeline')).toBeInTheDocument();
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('renders multiple timeline items', () => {
    render(
      <Timeline>
        <TimelineItem>
          <TimelineHeading>First Item</TimelineHeading>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeading>Second Item</TimelineHeading>
        </TimelineItem>
      </Timeline>
    );

    expect(screen.getByText('First Item')).toBeInTheDocument();
    expect(screen.getByText('Second Item')).toBeInTheDocument();
  });
});

describe('TimelineItem', () => {
  it('renders basic timeline item', () => {
    render(
      <Timeline>
        <TimelineItem>
          <TimelineHeading>Basic Item</TimelineHeading>
          <p>Item description</p>
        </TimelineItem>
      </Timeline>
    );

    expect(screen.getByText('Basic Item')).toBeInTheDocument();
    expect(screen.getByText('Item description')).toBeInTheDocument();
  });

  it('renders with icon element', () => {
    render(
      <Timeline>
        <TimelineItem iconElement={<Check data-testid="check-icon" />}>
          <TimelineHeading>Item with Icon</TimelineHeading>
        </TimelineItem>
      </Timeline>
    );

    expect(screen.getByTestId('check-icon')).toBeInTheDocument();
    expect(screen.getByText('Item with Icon')).toBeInTheDocument();
  });

  it('renders non-collapsible item by default', () => {
    render(
      <Timeline>
        <TimelineItem>
          <TimelineHeading>Non-collapsible Item</TimelineHeading>
          <p>This content should always be visible</p>
        </TimelineItem>
      </Timeline>
    );

    expect(screen.getByText('Non-collapsible Item')).toBeInTheDocument();
    expect(
      screen.getByText('This content should always be visible')
    ).toBeInTheDocument();

    // Should not have a toggle button
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders collapsible item with toggle functionality', () => {
    const onToggle = jest.fn();

    render(
      <Timeline>
        <TimelineItem isCollapsible onToggle={onToggle} isCollapsed={false}>
          <TimelineHeading>Collapsible Item</TimelineHeading>
          <p>This content can be toggled</p>
        </TimelineItem>
      </Timeline>
    );

    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();
    expect(screen.getByText('Collapsible Item')).toBeInTheDocument();
    expect(screen.getByText('This content can be toggled')).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it('hides content when collapsed', () => {
    render(
      <Timeline>
        <TimelineItem isCollapsible onToggle={() => {}} isCollapsed={true}>
          <TimelineHeading>Collapsed Item</TimelineHeading>
          <p>This content should be hidden</p>
        </TimelineItem>
      </Timeline>
    );

    expect(screen.getByText('Collapsed Item')).toBeInTheDocument();
    expect(
      screen.queryByText('This content should be hidden')
    ).not.toBeInTheDocument();
  });

  it('shows content when expanded', () => {
    render(
      <Timeline>
        <TimelineItem isCollapsible onToggle={() => {}} isCollapsed={false}>
          <TimelineHeading>Expanded Item</TimelineHeading>
          <p>This content should be visible</p>
        </TimelineItem>
      </Timeline>
    );

    expect(screen.getByText('Expanded Item')).toBeInTheDocument();
    expect(
      screen.getByText('This content should be visible')
    ).toBeInTheDocument();
  });

  it('rotates chevron icon based on collapsed state', () => {
    const { rerender } = render(
      <Timeline>
        <TimelineItem isCollapsible onToggle={() => {}} isCollapsed={false}>
          <TimelineHeading>Test Item</TimelineHeading>
        </TimelineItem>
      </Timeline>
    );

    const chevron = screen.getByRole('button').querySelector('svg');
    expect(chevron).not.toHaveClass('rotate-180');

    rerender(
      <Timeline>
        <TimelineItem isCollapsible onToggle={() => {}} isCollapsed={true}>
          <TimelineHeading>Test Item</TimelineHeading>
        </TimelineItem>
      </Timeline>
    );

    const rotatedChevron = screen.getByRole('button').querySelector('svg');
    expect(rotatedChevron).toHaveClass('rotate-180');
  });
});

describe('TimelineHeading', () => {
  it('renders as h3 by default', () => {
    render(<TimelineHeading>Default Heading</TimelineHeading>);

    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Default Heading');
  });

  it('renders with custom heading level', () => {
    render(<TimelineHeading level={2}>Custom Level Heading</TimelineHeading>);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Custom Level Heading');
  });

  it('applies custom className', () => {
    render(
      <TimelineHeading className="custom-class">Styled Heading</TimelineHeading>
    );

    const heading = screen.getByText('Styled Heading');
    expect(heading).toHaveClass('custom-class');
  });

  it('forwards other props', () => {
    render(
      <TimelineHeading data-testid="custom-heading">
        Test Heading
      </TimelineHeading>
    );

    expect(screen.getByTestId('custom-heading')).toBeInTheDocument();
  });
});
