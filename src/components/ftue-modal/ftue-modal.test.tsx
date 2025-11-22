import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Button } from '../button/button';
import { FtueModal } from './ftue-modal';

describe('FtueModal', () => {
  it('renders modal content when open', () => {
    render(
      <FtueModal defaultOpen={true} title="Welcome to Edison!">
        <p>Test content</p>
      </FtueModal>
    );

    expect(screen.getByText('Welcome to Edison!')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders logo when provided', () => {
    render(
      <FtueModal defaultOpen={true} logo={<div data-testid="logo">Logo</div>}>
        <p>Test content</p>
      </FtueModal>
    );

    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    render(
      <FtueModal defaultOpen={true} title="Test Title">
        <p>Test content</p>
      </FtueModal>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders action button when provided', () => {
    render(
      <FtueModal defaultOpen={true} actionButton={<Button>Get Started</Button>}>
        <p>Test content</p>
      </FtueModal>
    );

    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('renders close button when showCloseButton is true', () => {
    render(
      <FtueModal defaultOpen={true} showCloseButton={true}>
        <p>Test content</p>
      </FtueModal>
    );

    expect(screen.getByLabelText('Close')).toBeInTheDocument();
  });

  it('does not render close button when showCloseButton is false', () => {
    render(
      <FtueModal defaultOpen={true} showCloseButton={false}>
        <p>Test content</p>
      </FtueModal>
    );

    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument();
  });

  it('closes modal when close button is clicked', async () => {
    const user = userEvent.setup();
    const handleOpenChange = jest.fn();

    render(
      <FtueModal
        open={true}
        onOpenChange={handleOpenChange}
        showCloseButton={true}
      >
        <p>Test content</p>
      </FtueModal>
    );

    const closeButton = screen.getByLabelText('Close');
    await user.click(closeButton);

    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });

  it('has correct styling classes', () => {
    const { container } = render(
      <FtueModal defaultOpen={true} title="Test">
        <p>Test content</p>
      </FtueModal>
    );

    const modal = container.querySelector('[data-slot="ftue-modal-content"]');
    expect(modal).toHaveClass('border-[1px]', 'bg-[var(--ftue-modal-bg)]');

    const title = screen.getByText('Test');
    expect(title).toHaveClass(
      'text-2xl',
      'font-bold',
      'text-white',
      'text-left'
    );

    const body = container.querySelector('[data-slot="ftue-modal-body"]');
    expect(body).toHaveClass('font-mono', 'text-white');
  });

  it('renders modal content correctly', () => {
    const { container } = render(
      <FtueModal defaultOpen={true}>
        <p>Test content</p>
      </FtueModal>
    );
    const modal = container.querySelector('[data-slot="ftue-modal"]');
    expect(modal).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <FtueModal defaultOpen={true}>
        <div>
          <p>First paragraph</p>
          <p>Second paragraph</p>
        </div>
      </FtueModal>
    );

    expect(screen.getByText('First paragraph')).toBeInTheDocument();
    expect(screen.getByText('Second paragraph')).toBeInTheDocument();
  });
});
