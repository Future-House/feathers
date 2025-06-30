import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from './input-otp';

const meta = {
  title: 'Components/InputOTP',
  component: InputOTP,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A one-time password (OTP) input component built on the input-otp library with consistent styling and accessibility features. Perfect for verification codes, 2FA, and secure authentication flows.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // OTP Input specific props
    maxLength: {
      control: { type: 'number' },
      description: 'Maximum number of characters allowed',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '6' },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'The controlled value of the OTP input',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      action: 'onChange',
      description: 'Event handler called when the input value changes',
      table: {
        type: { summary: '(value: string) => void' },
      },
    },
    onComplete: {
      action: 'onComplete',
      description: 'Event handler called when the input is complete',
      table: {
        type: { summary: '(value: string) => void' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    autoFocus: {
      control: { type: 'boolean' },
      description: 'Whether the input should be focused on mount',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    pushPasswordManagerStrategy: {
      control: { type: 'select' },
      options: ['increase-width', 'none'],
      description: 'Strategy for handling password managers',
      table: {
        type: { summary: "'increase-width' | 'none'" },
        defaultValue: { summary: "'increase-width'" },
      },
    },
    containerClassName: {
      control: { type: 'text' },
      description: 'Additional CSS classes for the container',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes for the input',
      table: {
        type: { summary: 'string' },
      },
    },
    pattern: {
      control: { type: 'text' },
      description: 'Regular expression pattern for validation',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'REGEXP_ONLY_DIGITS_AND_CHARS' },
      },
    },
    inputMode: {
      control: { type: 'select' },
      options: ['text', 'numeric', 'decimal', 'tel', 'search', 'email', 'url'],
      description: 'Input mode hint for virtual keyboards',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'text'" },
      },
    },
  },
} satisfies Meta<typeof InputOTP>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxLength: 6,
  },
  render: args => (
    <InputOTP {...args}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

export const WithSeparator: Story = {
  args: {
    maxLength: 6,
  },
  render: args => (
    <InputOTP {...args}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

export const NumericOnly: Story = {
  args: {
    maxLength: 4,
    pattern: '^[0-9]+$',
    inputMode: 'numeric',
  },
  render: args => (
    <InputOTP {...args}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

export const TwoFactorAuth: Story = {
  args: {
    maxLength: 6,
    pattern: '^[0-9]+$',
    inputMode: 'numeric',
  },
  render: args => (
    <div className="space-y-4 text-center">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
        <p className="text-muted-foreground text-sm">
          Enter the 6-digit code from your authenticator app
        </p>
      </div>
      <InputOTP {...args}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  ),
};

export const PhoneVerification: Story = {
  args: {
    maxLength: 4,
    pattern: '^[0-9]+$',
    inputMode: 'numeric',
  },
  render: args => (
    <div className="space-y-4 text-center">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Verify Phone Number</h3>
        <p className="text-muted-foreground text-sm">
          We sent a 4-digit code to +1 (555) 123-4567
        </p>
      </div>
      <InputOTP {...args}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-muted-foreground text-xs">
        Didn&apos;t receive the code?{' '}
        <button className="underline">Resend</button>
      </p>
    </div>
  ),
};

export const EmailVerification: Story = {
  args: {
    maxLength: 8,
    pattern: '^[A-Z0-9]+$',
  },
  render: args => (
    <div className="space-y-4 text-center">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Email Verification</h3>
        <p className="text-muted-foreground text-sm">
          Enter the 8-character code sent to your email
        </p>
      </div>
      <InputOTP {...args}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    maxLength: 6,
    disabled: true,
    value: '123456',
  },
  render: args => (
    <InputOTP {...args}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

const WithValidationComponent = () => {
  const [value, setValue] = React.useState('');
  const [isValid, setIsValid] = React.useState<boolean | null>(null);

  const handleComplete = (completedValue: string) => {
    // Simulate validation
    const validCode = '123456';
    setIsValid(completedValue === validCode);
  };

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setIsValid(null);
  };

  return (
    <div className="space-y-4 text-center">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Enter Verification Code</h3>
        <p className="text-muted-foreground text-sm">
          Try entering &quot;123456&quot; for a valid code
        </p>
      </div>
      <InputOTP
        maxLength={6}
        value={value}
        onChange={handleChange}
        onComplete={handleComplete}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      {isValid === true && (
        <p className="text-sm text-green-600">✓ Code verified successfully!</p>
      )}
      {isValid === false && (
        <p className="text-sm text-red-600">
          ✗ Invalid code. Please try again.
        </p>
      )}
    </div>
  );
};

export const WithValidation: Story = {
  render: () => <WithValidationComponent />,
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Small (3 digits)</h4>
        <InputOTP maxLength={3}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Medium (6 digits)</h4>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Large (8 digits)</h4>
        <InputOTP maxLength={8}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
            <InputOTPSlot index={6} />
            <InputOTPSlot index={7} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  ),
};

const LoginFlowComponent = () => {
  const [step, setStep] = React.useState<'phone' | 'code'>('phone');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [code, setCode] = React.useState('');

  const handleSendCode = () => {
    if (phoneNumber) {
      setStep('code');
    }
  };

  const handleCodeComplete = (value: string) => {
    setCode(value);
    // Simulate verification
    if (value === '123456') {
      alert('Login successful!');
    }
  };

  return (
    <div className="w-80 space-y-6">
      {step === 'phone' ? (
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Sign In</h3>
            <p className="text-muted-foreground text-sm">
              Enter your phone number to receive a verification code
            </p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              className="border-input w-full rounded border px-3 py-2 text-sm"
            />
          </div>
          <Button onClick={handleSendCode} className="w-full">
            Send Code
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Enter Code</h3>
            <p className="text-muted-foreground text-sm">
              We sent a 6-digit code to {phoneNumber}
            </p>
          </div>
          <div className="flex justify-center">
            <InputOTP
              maxLength={6}
              value={code}
              onChange={setCode}
              onComplete={handleCodeComplete}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <div className="space-y-2">
            <Button
              onClick={() => setStep('phone')}
              variant="outline"
              className="w-full"
            >
              Back
            </Button>
            <p className="text-muted-foreground text-center text-xs">
              Didn&apos;t receive the code?{' '}
              <button className="underline">Resend</button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export const LoginFlow: Story = {
  render: () => <LoginFlowComponent />,
};

export const CustomStyling: Story = {
  args: {
    maxLength: 6,
  },
  render: args => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Custom Border Colors</h4>
        <InputOTP {...args}>
          <InputOTPGroup>
            <InputOTPSlot
              index={0}
              className="border-blue-500 focus:border-blue-600"
            />
            <InputOTPSlot
              index={1}
              className="border-blue-500 focus:border-blue-600"
            />
            <InputOTPSlot
              index={2}
              className="border-blue-500 focus:border-blue-600"
            />
            <InputOTPSlot
              index={3}
              className="border-blue-500 focus:border-blue-600"
            />
            <InputOTPSlot
              index={4}
              className="border-blue-500 focus:border-blue-600"
            />
            <InputOTPSlot
              index={5}
              className="border-blue-500 focus:border-blue-600"
            />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  ),
};
