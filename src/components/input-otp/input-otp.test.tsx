import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from './input-otp';

describe('InputOTP', () => {
  it('renders input OTP element', () => {
    render(
      <InputOTP maxLength={6} data-testid="input-otp">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    );

    const inputOTP = screen.getByTestId('input-otp');
    expect(inputOTP).toBeInTheDocument();
    expect(inputOTP).toHaveAttribute('data-slot', 'input-otp');
  });

  it('renders with controlled value', () => {
    render(
      <InputOTP maxLength={6} value="123" data-testid="input-otp">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    );

    const inputOTP = screen.getByTestId('input-otp');
    expect(inputOTP).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(
      <InputOTP maxLength={6} disabled data-testid="input-otp">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    );

    const input = screen.getByRole('textbox', { hidden: true });
    expect(input).toBeDisabled();
  });

  it('handles autoFocus correctly', () => {
    render(
      <InputOTP maxLength={6} autoFocus data-testid="input-otp">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    );

    const input = screen.getByRole('textbox', { hidden: true });
    expect(input).toHaveFocus();
  });

  it('applies custom className', () => {
    render(
      <InputOTP maxLength={6} className="custom-class" data-testid="input-otp">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    );

    const inputOTP = screen.getByTestId('input-otp');
    expect(inputOTP).toHaveClass('custom-class');
  });

  it('handles input mode correctly', () => {
    render(
      <InputOTP maxLength={6} inputMode="numeric">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    );

    const input = screen.getByRole('textbox', { hidden: true });
    expect(input).toHaveAttribute('inputmode', 'numeric');
  });
});

describe('InputOTPGroup', () => {
  it('renders group element', () => {
    render(
      <InputOTPGroup data-testid="otp-group">
        <div>Test content</div>
      </InputOTPGroup>
    );

    const group = screen.getByTestId('otp-group');
    expect(group).toBeInTheDocument();
    expect(group).toHaveAttribute('data-slot', 'input-otp-group');
  });

  it('applies custom className to group', () => {
    render(
      <InputOTPGroup className="custom-group-class" data-testid="otp-group">
        <div>Test content</div>
      </InputOTPGroup>
    );

    const group = screen.getByTestId('otp-group');
    expect(group).toHaveClass('custom-group-class');
  });
});

describe('InputOTPSlot', () => {
  it('renders slot element within InputOTP context', () => {
    render(
      <InputOTP maxLength={1}>
        <InputOTPGroup>
          <InputOTPSlot index={0} data-testid="otp-slot" />
        </InputOTPGroup>
      </InputOTP>
    );

    const slot = screen.getByTestId('otp-slot');
    expect(slot).toBeInTheDocument();
    expect(slot).toHaveAttribute('data-slot', 'input-otp-slot');
  });

  it('applies custom className to slot within InputOTP context', () => {
    render(
      <InputOTP maxLength={1}>
        <InputOTPGroup>
          <InputOTPSlot
            index={0}
            className="custom-slot-class"
            data-testid="otp-slot"
          />
        </InputOTPGroup>
      </InputOTP>
    );

    const slot = screen.getByTestId('otp-slot');
    expect(slot).toHaveClass('custom-slot-class');
  });

  it('applies default styling classes within InputOTP context', () => {
    render(
      <InputOTP maxLength={1}>
        <InputOTPGroup>
          <InputOTPSlot index={0} data-testid="otp-slot" />
        </InputOTPGroup>
      </InputOTP>
    );

    const slot = screen.getByTestId('otp-slot');
    expect(slot).toHaveClass(
      'relative',
      'flex',
      'h-9',
      'w-9',
      'items-center',
      'justify-center'
    );
  });
});

describe('InputOTPSeparator', () => {
  it('renders separator element', () => {
    render(<InputOTPSeparator data-testid="otp-separator" />);

    const separator = screen.getByTestId('otp-separator');
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute('data-slot', 'input-otp-separator');
    expect(separator).toHaveAttribute('role', 'separator');
  });

  it('renders minus icon', () => {
    render(<InputOTPSeparator data-testid="otp-separator" />);

    const separator = screen.getByTestId('otp-separator');
    const icon = separator.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('applies custom props', () => {
    render(
      <InputOTPSeparator
        className="custom-separator-class"
        data-testid="otp-separator"
      />
    );

    const separator = screen.getByTestId('otp-separator');
    expect(separator).toHaveClass('custom-separator-class');
  });
});

describe('InputOTP Integration', () => {
  it('renders complete OTP input with groups and separator', () => {
    render(
      <InputOTP maxLength={6} data-testid="input-otp">
        <InputOTPGroup data-testid="group-1">
          <InputOTPSlot index={0} data-testid="slot-0" />
          <InputOTPSlot index={1} data-testid="slot-1" />
          <InputOTPSlot index={2} data-testid="slot-2" />
        </InputOTPGroup>
        <InputOTPSeparator data-testid="separator" />
        <InputOTPGroup data-testid="group-2">
          <InputOTPSlot index={3} data-testid="slot-3" />
          <InputOTPSlot index={4} data-testid="slot-4" />
          <InputOTPSlot index={5} data-testid="slot-5" />
        </InputOTPGroup>
      </InputOTP>
    );

    expect(screen.getByTestId('input-otp')).toBeInTheDocument();
    expect(screen.getByTestId('group-1')).toBeInTheDocument();
    expect(screen.getByTestId('group-2')).toBeInTheDocument();
    expect(screen.getByTestId('separator')).toBeInTheDocument();

    // Check all slots are present
    for (let i = 0; i <= 5; i++) {
      expect(screen.getByTestId(`slot-${i}`)).toBeInTheDocument();
    }
  });

  it('renders with different maxLength configurations', () => {
    const { rerender } = render(
      <InputOTP maxLength={4} data-testid="input-otp">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    );

    expect(screen.getByTestId('input-otp')).toBeInTheDocument();

    rerender(
      <InputOTP maxLength={8} data-testid="input-otp">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
        </InputOTPGroup>
      </InputOTP>
    );

    expect(screen.getByTestId('input-otp')).toBeInTheDocument();
  });
});
