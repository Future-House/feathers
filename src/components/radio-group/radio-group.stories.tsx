import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Label } from '../label/label';
import { Card, CardContent, CardHeader, CardTitle } from '../card/card';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.',
      },
    },
  },
  tags: [],
  argTypes: {
    // RadioGroup.Root props
    value: {
      control: 'text',
      description: 'The controlled value of the radio item to check.',
      table: {
        category: 'RadioGroup.Root',
        type: { summary: 'string' },
      },
    },
    defaultValue: {
      control: 'text',
      description:
        'The value of the radio item to check when initially rendered.',
      table: {
        category: 'RadioGroup.Root',
        type: { summary: 'string' },
      },
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Event handler called when the value changes.',
      table: {
        category: 'RadioGroup.Root',
        type: { summary: '(value: string) => void' },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'When true, prevents the user from interacting with radio items.',
      table: {
        category: 'RadioGroup.Root',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description:
        'When true, indicates that the user must check a radio item before the owning form can be submitted.',
      table: {
        category: 'RadioGroup.Root',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the component.',
      table: {
        category: 'RadioGroup.Root',
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'vertical' },
      },
    },
    dir: {
      control: { type: 'select' },
      options: ['ltr', 'rtl'],
      description: 'The reading direction of the radio group.',
      table: {
        category: 'RadioGroup.Root',
        type: { summary: 'ltr | rtl' },
      },
    },
    loop: {
      control: 'boolean',
      description:
        'When true, keyboard navigation will loop from last item to first, and vice versa.',
      table: {
        category: 'RadioGroup.Root',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    // RadioGroupItem props
    value_item: {
      control: 'text',
      description: 'The value given as data when submitted with a name.',
      table: {
        category: 'RadioGroupItem',
        type: { summary: 'string' },
      },
    },
    disabled_item: {
      control: 'boolean',
      description:
        'When true, prevents the user from interacting with the item.',
      table: {
        category: 'RadioGroupItem',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required_item: {
      control: 'boolean',
      description:
        'When true, indicates that the user must check the item before the owning form can be submitted.',
      table: {
        category: 'RadioGroupItem',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

function BasicRadioGroupComponent() {
  const [value, setValue] = React.useState('option1');

  return (
    <RadioGroup value={value} onValueChange={setValue}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <Label htmlFor="option3">Option 3</Label>
      </div>
    </RadioGroup>
  );
}

function PaymentMethodComponent() {
  const [paymentMethod, setPaymentMethod] = React.useState('card');

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="card" id="card" />
            <Label
              htmlFor="card"
              className="flex items-center gap-2 font-normal"
            >
              💳 Credit Card
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="paypal" id="paypal" />
            <Label
              htmlFor="paypal"
              className="flex items-center gap-2 font-normal"
            >
              🅿️ PayPal
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="apple" id="apple" />
            <Label
              htmlFor="apple"
              className="flex items-center gap-2 font-normal"
            >
              🍎 Apple Pay
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="google" id="google" />
            <Label
              htmlFor="google"
              className="flex items-center gap-2 font-normal"
            >
              🌐 Google Pay
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
}

function NotificationSettingsComponent() {
  const [frequency, setFrequency] = React.useState('daily');

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">Notification Frequency</h3>
        <p className="text-muted-foreground text-sm">
          Choose how often you want to receive notifications.
        </p>
      </div>
      <RadioGroup value={frequency} onValueChange={setFrequency}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="immediate" id="immediate" />
          <Label htmlFor="immediate" className="font-normal">
            <div className="grid gap-1.5 leading-none">
              <div>Immediate</div>
              <div className="text-muted-foreground text-xs">
                Get notified as soon as something happens
              </div>
            </div>
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="daily" id="daily" />
          <Label htmlFor="daily" className="font-normal">
            <div className="grid gap-1.5 leading-none">
              <div>Daily digest</div>
              <div className="text-muted-foreground text-xs">
                A summary of all activities sent once a day
              </div>
            </div>
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="weekly" id="weekly" />
          <Label htmlFor="weekly" className="font-normal">
            <div className="grid gap-1.5 leading-none">
              <div>Weekly summary</div>
              <div className="text-muted-foreground text-xs">
                A comprehensive report sent every week
              </div>
            </div>
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="never" id="never" />
          <Label htmlFor="never" className="font-normal">
            <div className="grid gap-1.5 leading-none">
              <div>Never</div>
              <div className="text-muted-foreground text-xs">
                Disable all notifications
              </div>
            </div>
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}

function HorizontalRadioGroupComponent() {
  const [size, setSize] = React.useState('medium');

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">Size</h3>
        <p className="text-muted-foreground text-sm">
          Select your preferred size.
        </p>
      </div>
      <RadioGroup
        value={size}
        onValueChange={setSize}
        orientation="horizontal"
        className="flex gap-6"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="small" id="small" />
          <Label htmlFor="small">Small</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="medium" id="medium" />
          <Label htmlFor="medium">Medium</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="large" id="large" />
          <Label htmlFor="large">Large</Label>
        </div>
      </RadioGroup>
    </div>
  );
}

function DisabledRadioGroupComponent() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">Account Type</h3>
        <p className="text-muted-foreground text-sm">
          This selection is currently disabled.
        </p>
      </div>
      <RadioGroup defaultValue="basic" disabled>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="basic" id="basic-disabled" />
          <Label htmlFor="basic-disabled">Basic Plan</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="pro" id="pro-disabled" />
          <Label htmlFor="pro-disabled">Pro Plan</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="enterprise" id="enterprise-disabled" />
          <Label htmlFor="enterprise-disabled">Enterprise Plan</Label>
        </div>
      </RadioGroup>
    </div>
  );
}

function MixedDisabledRadioGroupComponent() {
  const [plan, setPlan] = React.useState('basic');

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">Subscription Plan</h3>
        <p className="text-muted-foreground text-sm">
          Some options may not be available.
        </p>
      </div>
      <RadioGroup value={plan} onValueChange={setPlan}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="basic" id="basic-mixed" />
          <Label htmlFor="basic-mixed">Basic (Free)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="pro" id="pro-mixed" />
          <Label htmlFor="pro-mixed">Pro ($9/month)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="enterprise" id="enterprise-mixed" disabled />
          <Label htmlFor="enterprise-mixed" className="text-muted-foreground">
            Enterprise (Contact sales) - Coming soon
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}

export const Default: Story = {
  render: () => <BasicRadioGroupComponent />,
};

export const PaymentMethod: Story = {
  render: () => <PaymentMethodComponent />,
};

export const NotificationSettings: Story = {
  render: () => <NotificationSettingsComponent />,
};

export const HorizontalOrientation: Story = {
  render: () => <HorizontalRadioGroupComponent />,
};

export const DisabledGroup: Story = {
  render: () => <DisabledRadioGroupComponent />,
};

export const MixedDisabled: Story = {
  render: () => <MixedDisabledRadioGroupComponent />,
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'option2',
  },
  render: args => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="story-option1" />
        <Label htmlFor="story-option1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="story-option2" />
        <Label htmlFor="story-option2">Option 2 (Default)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="story-option3" />
        <Label htmlFor="story-option3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
};
