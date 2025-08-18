import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button';
import { Input } from '../input/input';
import { Label } from '../label/label';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from './input-otp';
import { Typography } from '../typography';

// Define proper types for InputOTP props
type InputOTPProps = {
  maxLength: number;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  textAlign?: 'left' | 'center' | 'right';
  inputMode?:
    | 'numeric'
    | 'text'
    | 'decimal'
    | 'tel'
    | 'search'
    | 'email'
    | 'url';
  pattern?: string;
  placeholder?: string;
  pasteTransformer?: (pastedText: string) => string;
  pushPasswordManagerStrategy?: 'increase-width' | 'none';
  containerClassName?: string;
  noScriptCSSFallback?: string | null;
  children: React.ReactNode;
};

const meta = {
  title: 'Components/InputOTP',
  component: InputOTP,
  parameters: {
    docs: {
      description: {
        component:
          'A one-time password (OTP) input component built on the input-otp library with consistent styling and accessibility features. Perfect for verification codes, 2FA, and secure authentication flows.',
      },
    },
  },
  tags: [],
  argTypes: {
    // OTP Input specific props from input-otp library
    maxLength: {
      control: { type: 'number' },
      description: 'Number of input slots (required)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'Required' },
        disable: true,
      },
    },
    value: {
      control: { type: 'text' },
      description: 'Controlled input value',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onChange: {
      action: 'onChange',
      description: 'Value change handler',
      table: {
        type: { summary: '(newValue: string) => unknown' },
        defaultValue: { summary: 'undefined' },
        disable: true,
      },
    },
    onComplete: {
      action: 'onComplete',
      description: 'Callback when input is fully filled',
      table: {
        type: { summary: '(...args: any[]) => unknown' },
        defaultValue: { summary: 'undefined' },
        disable: true,
      },
    },
    textAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Text alignment within input',
      table: {
        type: { summary: "'left' | 'center' | 'right'" },
        defaultValue: { summary: "'left'" },
      },
    },
    inputMode: {
      control: { type: 'select' },
      options: ['numeric', 'text', 'decimal', 'tel', 'search', 'email', 'url'],
      description: 'Virtual keyboard type',
      table: {
        type: {
          summary:
            "'numeric' | 'text' | 'decimal' | 'tel' | 'search' | 'email' | 'url'",
        },
        defaultValue: { summary: "'numeric'" },
      },
    },
    pattern: {
      control: { type: 'text' },
      description: 'Input validation regex',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder character',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    pasteTransformer: {
      control: false,
      description: 'Transform pasted text',
      table: {
        type: { summary: '(pastedText: string) => string' },
        defaultValue: { summary: 'undefined' },
        disable: true,
      },
    },
    pushPasswordManagerStrategy: {
      control: { type: 'select' },
      options: ['increase-width', 'none'],
      description: 'Strategy for password manager badges',
      table: {
        type: { summary: "'increase-width' | 'none'" },
        defaultValue: { summary: "'increase-width'" },
      },
    },
    containerClassName: {
      control: { type: 'text' },
      description: 'CSS class for root container',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    noScriptCSSFallback: {
      control: { type: 'text' },
      description: 'No-JavaScript styling fallback',
      table: {
        type: { summary: 'string | null' },
        defaultValue: { summary: 'Default CSS fallback' },
        disable: true,
      },
    },
  },
} satisfies Meta<InputOTPProps>;

export default meta;
type Story = StoryObj<InputOTPProps>;

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
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="space-y-2">
        <Typography variant="h3" className="font-semibold">
          Two-Factor Authentication
        </Typography>
        <Typography variant="muted">
          Enter the 6-digit code from your authenticator app
        </Typography>
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
  render: ({ containerClassName, ...args }) => (
    <div className="space-y-4 text-center">
      <div className="space-y-2">
        <Typography variant="h3" className="font-semibold">
          Verify Phone Number
        </Typography>
        <Typography variant="muted">
          We sent a 4-digit code to +1 (555) 123-4567
        </Typography>
      </div>
      <InputOTP
        containerClassName={`${containerClassName} justify-center`}
        {...args}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <Typography variant="muted" className="text-xs">
        Didn&apos;t receive the code?{' '}
        <Button variant="link" className="h-auto p-0 text-xs underline">
          Resend
        </Button>
      </Typography>
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
        <Typography variant="h3" className="font-semibold">
          Email Verification
        </Typography>
        <Typography variant="muted">
          Enter the 8-character code sent to your email
        </Typography>
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
  const validCode = '123456';
  const [value, setValue] = React.useState('');
  const [isValid, setIsValid] = React.useState<boolean | null>(null);

  const handleComplete = (completedValue: string) => {
    // Simulate validation
    setIsValid(completedValue === validCode);
  };

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setIsValid(newValue.length === 6 ? newValue === validCode : null);
  };

  return (
    <div className="space-y-4 text-center">
      <div className="space-y-2">
        <Typography variant="h3" className="font-semibold">
          Enter Verification Code
        </Typography>
        <Typography variant="muted">
          Try entering &quot;123456&quot; for a valid code
        </Typography>
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
        <Typography variant="small" className="text-green-600">
          ✓ Code verified successfully!
        </Typography>
      )}
      {isValid === false && (
        <Typography variant="small" className="text-red-600">
          ✗ Invalid code. Please try again.
        </Typography>
      )}
    </div>
  );
};

export const WithValidation: Story = {
  render: args => <WithValidationComponent {...args} />,
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-2">
        <Typography variant="h4" className="font-medium">
          Small (3 digits)
        </Typography>
        <InputOTP maxLength={3}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="space-y-2">
        <Typography variant="h4" className="font-medium">
          Medium (6 digits)
        </Typography>
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
        <Typography variant="h4" className="font-medium">
          Large (8 digits)
        </Typography>
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
            <Typography variant="h3" className="font-semibold">
              Sign In
            </Typography>
            <Typography variant="muted">
              Enter your phone number to receive a verification code
            </Typography>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
            />
          </div>
          <Button onClick={handleSendCode} className="w-full">
            Send Code
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-2">
            <Typography variant="h3" className="font-semibold">
              Enter Code
            </Typography>
            <Typography variant="muted">
              We sent a 6-digit code to {phoneNumber}
            </Typography>
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
            <Typography variant="muted" className="text-center text-xs">
              Didn&apos;t receive the code?{' '}
              <Button variant="link" className="h-auto p-0 text-xs underline">
                Resend
              </Button>
            </Typography>
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
        <Typography variant="h4" className="font-medium">
          Custom Border Colors
        </Typography>
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
