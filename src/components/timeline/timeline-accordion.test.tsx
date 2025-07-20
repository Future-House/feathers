import { render, screen, fireEvent } from '@testing-library/react';
import {
  TimelineAccordion,
  TimelineHeader,
  TimelineItem,
  TimelineTrigger,
  TimelineContent,
} from './timeline-accordion';

describe('TimelineAccordion', () => {
  it('renders correctly', () => {
    render(
      <TimelineAccordion type="single" collapsible>
        <TimelineItem value="item-1">
          <TimelineTrigger title="Test Title" />
          <TimelineContent>Test Content</TimelineContent>
        </TimelineItem>
      </TimelineAccordion>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders with default expanded item', () => {
    render(
      <TimelineAccordion type="single" collapsible defaultValue="item-1">
        <TimelineItem value="item-1">
          <TimelineTrigger title="Test Title" />
          <TimelineContent>Test Content</TimelineContent>
        </TimelineItem>
      </TimelineAccordion>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});

describe('TimelineHeader', () => {
  it('renders header content', () => {
    render(
      <TimelineHeader>
        <h2>Timeline Header</h2>
        <p>Description</p>
      </TimelineHeader>
    );

    expect(screen.getByText('Timeline Header')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});

describe('TimelineItem', () => {
  it('renders with number', () => {
    render(
      <TimelineAccordion type="single" collapsible defaultValue="item-1">
        <TimelineItem value="item-1" number="1">
          <TimelineTrigger title="Test Title" />
          <TimelineContent>Test Content</TimelineContent>
        </TimelineItem>
      </TimelineAccordion>
    );

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('renders without number', () => {
    render(
      <TimelineAccordion type="single" collapsible defaultValue="item-1">
        <TimelineItem value="item-1">
          <TimelineTrigger title="Test Title" />
          <TimelineContent>Test Content</TimelineContent>
        </TimelineItem>
      </TimelineAccordion>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});

describe('TimelineTrigger', () => {
  it('renders title and subtitle', () => {
    render(
      <TimelineAccordion type="single" collapsible>
        <TimelineItem value="item-1">
          <TimelineTrigger title="Main Title" subtitle="Subtitle text" />
          <TimelineContent>Content</TimelineContent>
        </TimelineItem>
      </TimelineAccordion>
    );

    expect(screen.getByText('Main Title')).toBeInTheDocument();
    expect(screen.getByText('Subtitle text')).toBeInTheDocument();
  });

  it('toggles content on click', () => {
    render(
      <TimelineAccordion type="single" collapsible>
        <TimelineItem value="item-1">
          <TimelineTrigger title="Test Title" />
          <TimelineContent>Test Content</TimelineContent>
        </TimelineItem>
      </TimelineAccordion>
    );

    const trigger = screen.getByRole('button');

    // Content should not be visible initially
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();

    // Click to expand
    fireEvent.click(trigger);
    expect(screen.getByText('Test Content')).toBeInTheDocument();

    // Click to collapse
    fireEvent.click(trigger);
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  });
});

describe('TimelineContent', () => {
  it('renders content when expanded', () => {
    render(
      <TimelineAccordion type="single" collapsible defaultValue="item-1">
        <TimelineItem value="item-1">
          <TimelineTrigger title="Test Title" />
          <TimelineContent>
            <p>Test paragraph</p>
            <div>Test div</div>
          </TimelineContent>
        </TimelineItem>
      </TimelineAccordion>
    );

    expect(screen.getByText('Test paragraph')).toBeInTheDocument();
    expect(screen.getByText('Test div')).toBeInTheDocument();
  });
});
