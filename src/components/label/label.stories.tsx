import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../input/input';
import { Checkbox } from '../checkbox/checkbox';
import { Label } from './label';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component:
          'Renders an accessible label associated with controls. Built with Radix UI Label primitives and styled with Tailwind CSS for forms and interactive elements.',
      },
    },
  },
  tags: [],
  argTypes: {
    // Root component props from @radix-ui/react-label
    asChild: {
      control: { type: 'boolean' },
      description:
        'Change the default rendered element for the one passed as a child, merging their props and behavior',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        disable: true,
      },
    },
    htmlFor: {
      control: { type: 'text' },
      description:
        'The id of the element the label is associated with. When provided, this will be used as the htmlFor attribute.',
      table: {
        type: { summary: 'string' },
        disable: true,
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the label',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label text',
  },
};

export const WithInput: Story = {
  render: ({ className }) => (
    <div className="space-y-2">
      <Label htmlFor="email" className={className}>
        Email address
      </Label>
      <Input type="email" id="email" placeholder="Enter your email" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: ({ className }) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className={className}>
        Accept terms and conditions
      </Label>
    </div>
  ),
};

export const Required: Story = {
  render: ({ className }) => (
    <div className="space-y-2">
      <Label htmlFor="username" className={className}>
        Username <span className="text-red-500">*</span>
      </Label>
      <Input type="text" id="username" placeholder="Enter username" required />
    </div>
  ),
};

// TODO: disabled variant will use opacity-50
export const Disabled: Story = {
  render: ({ className }) => (
    <div className="space-y-2 opacity-50">
      <Label htmlFor="disabled-input" className={className}>
        Disabled field
      </Label>
      <Input
        type="text"
        id="disabled-input"
        placeholder="Cannot edit this"
        disabled
      />
    </div>
  ),
};

export const FormGroup: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="firstName">First Name</Label>
        <Input type="text" id="firstName" placeholder="John" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastName">Last Name</Label>
        <Input type="text" id="lastName" placeholder="Doe" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="age">Age</Label>
        <Input type="number" id="age" placeholder="25" min="1" max="120" />
      </div>
    </div>
  ),
};

export const LongText: Story = {
  render: ({ className }) => (
    <div className="max-w-sm space-y-2">
      <Label htmlFor="description" className={className}>
        Please provide a detailed description of your project requirements and
        any specific features you would like to include
      </Label>
      <textarea
        id="description"
        className="border-input w-full rounded border px-3 py-2 text-sm"
        rows={4}
        placeholder="Enter description..."
      />
    </div>
  ),
};

export const CustomStyling: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="primary" className="font-semibold text-blue-600">
          Primary Label
        </Label>
        <Input type="text" id="primary" placeholder="Custom styled input" />
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="secondary"
          className="text-xs tracking-wide text-green-600 uppercase"
        >
          Secondary Label
        </Label>
        <Input type="text" id="secondary" placeholder="Another input" />
      </div>
    </div>
  ),
};
