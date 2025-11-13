import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FtueTooltip } from './ftue-tooltip';

describe('FtueTooltip', () => {
  it('renders correctly', () => {
    render(
      <FtueTooltip>
        <p>Test content</p>
      </FtueTooltip>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies correct width and styling', () => {
    const { container } = render(
      <FtueTooltip>
        <p>Test content</p>
      </FtueTooltip>
    );
    const tooltip = container.querySelector('[data-slot="ftue-tooltip"]');
    expect(tooltip).toHaveClass('w-[284px]', 'rounded-[4px]', 'bg-white');
  });

  it('renders triangle arrow', () => {
    const { container } = render(
      <FtueTooltip>
        <p>Test content</p>
      </FtueTooltip>
    );
    const arrow = container.querySelector('[data-slot="ftue-tooltip-arrow"]');
    expect(arrow).toBeInTheDocument();
  });

  it('renders next button when onNext is provided', () => {
    const handleNext = jest.fn();
    render(
      <FtueTooltip onNext={handleNext}>
        <p>Test content</p>
      </FtueTooltip>
    );
    const nextButton = screen.getByLabelText('Next');
    expect(nextButton).toBeInTheDocument();
  });

  it('does not render next button when onNext is not provided', () => {
    render(
      <FtueTooltip>
        <p>Test content</p>
      </FtueTooltip>
    );
    const nextButton = screen.queryByLabelText('Next');
    expect(nextButton).not.toBeInTheDocument();
  });

  it('calls onNext when next button is clicked', async () => {
    const user = userEvent.setup();
    const handleNext = jest.fn();
    render(
      <FtueTooltip onNext={handleNext}>
        <p>Test content</p>
      </FtueTooltip>
    );
    const nextButton = screen.getByLabelText('Next');
    await user.click(nextButton);
    expect(handleNext).toHaveBeenCalledTimes(1);
  });

  it('accepts custom className', () => {
    const { container } = render(
      <FtueTooltip className="custom-class">
        <p>Test content</p>
      </FtueTooltip>
    );
    const tooltip = container.querySelector('[data-slot="ftue-tooltip"]');
    expect(tooltip).toHaveClass('custom-class');
  });

  it('passes through HTML attributes', () => {
    const { container } = render(
      <FtueTooltip
        data-testid="test-tooltip"
        id="tooltip-id"
        title="Test title"
      >
        <p>Test content</p>
      </FtueTooltip>
    );
    const tooltip = container.querySelector('[data-slot="ftue-tooltip"]');
    expect(tooltip).toHaveAttribute('data-testid', 'test-tooltip');
    expect(tooltip).toHaveAttribute('id', 'tooltip-id');
    expect(tooltip).toHaveAttribute('title', 'Test title');
  });

  it('renders with complex children content', () => {
    render(
      <FtueTooltip>
        <div>
          <h3>Title</h3>
          <p>Description</p>
        </div>
      </FtueTooltip>
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('renders headline when provided', () => {
    render(
      <FtueTooltip headline="Getting Started (1/3)">
        <p>Test content</p>
      </FtueTooltip>
    );
    expect(screen.getByText('Getting Started (1/3)')).toBeInTheDocument();
  });

  it('does not render headline when not provided', () => {
    const { container } = render(
      <FtueTooltip>
        <p>Test content</p>
      </FtueTooltip>
    );
    const headline = container.querySelector(
      '[data-slot="ftue-tooltip-headline"]'
    );
    expect(headline).not.toBeInTheDocument();
  });

  it('headline has correct styling', () => {
    render(
      <FtueTooltip headline="Test Headline">
        <p>Test content</p>
      </FtueTooltip>
    );
    const headline = screen.getByText('Test Headline');
    expect(headline).toHaveClass(
      'text-sm',
      'font-bold',
      'text-black',
      'bg-brand'
    );
  });

  it('has correct positioning classes', () => {
    const { container } = render(
      <FtueTooltip>
        <p>Test content</p>
      </FtueTooltip>
    );
    const tooltip = container.querySelector('[data-slot="ftue-tooltip"]');
    expect(tooltip).toHaveClass('absolute', 'z-50');
  });

  it('triangle arrow is positioned correctly', () => {
    const { container } = render(
      <FtueTooltip>
        <p>Test content</p>
      </FtueTooltip>
    );
    const arrow = container.querySelector('[data-slot="ftue-tooltip-arrow"]');
    expect(arrow).toHaveClass(
      'absolute',
      '-top-2',
      'left-1/2',
      '-translate-x-1/2'
    );
  });

  it('next button is positioned in a new row below content', () => {
    const handleNext = jest.fn();
    const { container } = render(
      <FtueTooltip onNext={handleNext}>
        <p>Test content</p>
      </FtueTooltip>
    );
    screen.getByLabelText('Next');
    const nextButtonContainer = container.querySelector(
      '[data-slot="ftue-tooltip-next"]'
    )?.parentElement;
    expect(nextButtonContainer).toHaveClass('flex', 'justify-end', 'pt-2');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <FtueTooltip ref={ref}>
        <p>Test content</p>
      </FtueTooltip>
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current?.getAttribute('data-slot')).toBe('ftue-tooltip');
  });

  it('hides arrow button when isLast is true', () => {
    const handleNext = jest.fn();
    render(
      <FtueTooltip onNext={handleNext} isLast={true}>
        <p>Test content</p>
      </FtueTooltip>
    );
    const nextButton = screen.queryByLabelText('Next');
    expect(nextButton).not.toBeInTheDocument();
  });

  it('shows arrow button when isLast is false and onNext is provided', () => {
    const handleNext = jest.fn();
    render(
      <FtueTooltip onNext={handleNext} isLast={false}>
        <p>Test content</p>
      </FtueTooltip>
    );
    const nextButton = screen.getByLabelText('Next');
    expect(nextButton).toBeInTheDocument();
  });

  it('calls onNext when content area is clicked', async () => {
    const user = userEvent.setup();
    const handleNext = jest.fn();
    const { container } = render(
      <FtueTooltip onNext={handleNext}>
        <p>Test content</p>
      </FtueTooltip>
    );
    const contentArea = container.querySelector(
      '[data-slot="ftue-tooltip"] > div'
    );
    await user.click(contentArea!);
    expect(handleNext).toHaveBeenCalledTimes(1);
  });

  it('does not call onNext when content is clicked and isLast is true', async () => {
    const user = userEvent.setup();
    const handleNext = jest.fn();
    const { container } = render(
      <FtueTooltip onNext={handleNext} isLast={true}>
        <p>Test content</p>
      </FtueTooltip>
    );
    const contentArea = container.querySelector(
      '[data-slot="ftue-tooltip"] > div'
    );
    await user.click(contentArea!);
    expect(handleNext).not.toHaveBeenCalled();
  });

  it('has cursor-pointer when arrow is shown', () => {
    const handleNext = jest.fn();
    const { container } = render(
      <FtueTooltip onNext={handleNext}>
        <p>Test content</p>
      </FtueTooltip>
    );
    const contentArea = container.querySelector(
      '[data-slot="ftue-tooltip"] > div'
    );
    expect(contentArea).toHaveClass('cursor-pointer');
  });

  it('does not have cursor-pointer when arrow is not shown', () => {
    const { container } = render(
      <FtueTooltip isLast={true}>
        <p>Test content</p>
      </FtueTooltip>
    );
    const contentArea = container.querySelector(
      '[data-slot="ftue-tooltip"] > div'
    );
    expect(contentArea).not.toHaveClass('cursor-pointer');
  });

  it('arrow button click stops propagation and calls onNext', async () => {
    const user = userEvent.setup();
    const handleNext = jest.fn();
    render(
      <FtueTooltip onNext={handleNext}>
        <p>Test content</p>
      </FtueTooltip>
    );
    const nextButton = screen.getByLabelText('Next');
    await user.click(nextButton);
    expect(handleNext).toHaveBeenCalledTimes(1);
  });

  it('renders left button when provided', () => {
    render(
      <FtueTooltip leftButton={<button>Skip</button>} onNext={() => {}}>
        <p>Test content</p>
      </FtueTooltip>
    );
    expect(screen.getByText('Skip')).toBeInTheDocument();
  });

  it('does not render button row when neither arrow nor left button is provided', () => {
    const { container } = render(
      <FtueTooltip>
        <p>Test content</p>
      </FtueTooltip>
    );
    const buttonRow = container.querySelector(
      '[data-slot="ftue-tooltip-left-button"]'
    )?.parentElement;
    expect(buttonRow).not.toBeInTheDocument();
  });

  it('renders button row when only left button is provided', () => {
    const { container } = render(
      <FtueTooltip leftButton={<button>Skip</button>}>
        <p>Test content</p>
      </FtueTooltip>
    );
    const buttonRow = container.querySelector(
      '[data-slot="ftue-tooltip-left-button"]'
    )?.parentElement;
    expect(buttonRow).toBeInTheDocument();
  });

  it('left button click stops propagation', async () => {
    const user = userEvent.setup();
    const handleNext = jest.fn();
    const handleSkip = jest.fn();
    render(
      <FtueTooltip
        leftButton={<button onClick={handleSkip}>Skip</button>}
        onNext={handleNext}
      >
        <p>Test content</p>
      </FtueTooltip>
    );
    const skipButton = screen.getByText('Skip');
    await user.click(skipButton);
    expect(handleSkip).toHaveBeenCalledTimes(1);
    expect(handleNext).not.toHaveBeenCalled();
  });
});
