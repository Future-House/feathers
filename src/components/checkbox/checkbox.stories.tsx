import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'A control that allows the user to toggle between checked and not checked. Built with Radix UI Checkbox primitives and styled with Tailwind CSS.',
      },
    },
  },
  tags: [],
  argTypes: {
    // Root component props from @radix-ui/react-checkbox
    asChild: {
      control: { type: 'boolean' },
      description:
        'Change the default rendered element for the one passed as a child, merging their props and behavior',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    checked: {
      control: { type: 'select' },
      options: [true, false, 'indeterminate'],
      description:
        'The controlled checked state of the checkbox. Must be used in conjunction with onCheckedChange',
      table: {
        type: { summary: 'boolean | "indeterminate"' },
        defaultValue: { summary: undefined },
      },
    },
    defaultChecked: {
      control: { type: 'select' },
      options: [true, false, 'indeterminate'],
      description:
        'The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state',
      table: {
        type: { summary: 'boolean | "indeterminate"' },
        defaultValue: { summary: 'false' },
      },
    },
    onCheckedChange: {
      action: 'onCheckedChange',
      description:
        'Event handler called when the checked state of the checkbox changes',
      table: {
        type: { summary: '(checked: boolean | "indeterminate") => void' },
        defaultValue: { summary: undefined },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description:
        'When true, prevents the user from interacting with the checkbox',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: { type: 'boolean' },
      description:
        'When true, indicates that the user must check the checkbox before the owning form can be submitted',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    name: {
      control: { type: 'text' },
      description:
        'The name of the checkbox. Submitted with its owning form as part of a name/value pair',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'The value given as data when submitted with a name',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'on' },
      },
    },
    // HTML attributes
    className: {
      control: { type: 'text' },
      description: 'CSS class name to apply to the checkbox',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    id: {
      control: { type: 'text' },
      description: 'HTML id attribute',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    'aria-label': {
      control: { type: 'text' },
      description:
        'Accessible label for the checkbox when no visible label is present',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    'aria-labelledby': {
      control: { type: 'text' },
      description: 'ID of an element that labels the checkbox',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    'aria-describedby': {
      control: { type: 'text' },
      description: 'ID of an element that describes the checkbox',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is in an error state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
  render: args => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" {...args} />
      <label
        htmlFor="checked"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        This checkbox is checked by default
      </label>
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    defaultChecked: 'indeterminate' as const,
  },
  render: args => (
    <div className="flex items-center space-x-2">
      <Checkbox id="indeterminate" {...args} />
      <label
        htmlFor="indeterminate"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        This checkbox is in indeterminate state
      </label>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: args => (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-unchecked" {...args} />
        <label
          htmlFor="disabled-unchecked"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Disabled unchecked
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" defaultChecked disabled />
        <label
          htmlFor="disabled-checked"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Disabled checked
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="disabled-indeterminate"
          defaultChecked="indeterminate"
          disabled
        />
        <label
          htmlFor="disabled-indeterminate"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Disabled indeterminate
        </label>
      </div>
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledCheckbox() {
    const [checked, setChecked] = React.useState<boolean | 'indeterminate'>(
      false
    );

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="controlled"
            checked={checked}
            onCheckedChange={setChecked}
          />
          <label
            htmlFor="controlled"
            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Controlled checkbox
          </label>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setChecked(false)}
            className="rounded border px-3 py-1 text-sm hover:bg-gray-50"
          >
            Uncheck
          </button>
          <button
            onClick={() => setChecked(true)}
            className="rounded border px-3 py-1 text-sm hover:bg-gray-50"
          >
            Check
          </button>
          <button
            onClick={() => setChecked('indeterminate')}
            className="rounded border px-3 py-1 text-sm hover:bg-gray-50"
          >
            Indeterminate
          </button>
        </div>
        <p className="text-sm text-gray-600">
          Current state:{' '}
          {checked === 'indeterminate'
            ? 'indeterminate'
            : checked
              ? 'checked'
              : 'unchecked'}
        </p>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: function FormExample() {
    const [formData, setFormData] = React.useState({
      newsletter: false,
      terms: false,
      marketing: 'indeterminate' as boolean | 'indeterminate',
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(`Form submitted with: ${JSON.stringify(formData, null, 2)}`);
    };

    return (
      <form onSubmit={handleSubmit} className="w-80 space-y-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={checked =>
                setFormData(prev => ({ ...prev, newsletter: checked === true }))
              }
            />
            <label
              htmlFor="newsletter"
              className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Subscribe to newsletter
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.terms}
              onCheckedChange={checked =>
                setFormData(prev => ({ ...prev, terms: checked === true }))
              }
              required
            />
            <label
              htmlFor="terms"
              className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the terms and conditions *
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="marketing"
              checked={formData.marketing}
              onCheckedChange={checked =>
                setFormData(prev => ({ ...prev, marketing: checked }))
              }
            />
            <label
              htmlFor="marketing"
              className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Allow marketing communications
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 disabled:opacity-50"
          disabled={!formData.terms}
        >
          Submit
        </button>

        <div className="text-xs text-gray-500">
          <p>Newsletter: {formData.newsletter ? 'Yes' : 'No'}</p>
          <p>Terms: {formData.terms ? 'Accepted' : 'Not accepted'}</p>
          <p>
            Marketing:{' '}
            {formData.marketing === 'indeterminate'
              ? 'Indeterminate'
              : formData.marketing
                ? 'Allowed'
                : 'Not allowed'}
          </p>
        </div>
      </form>
    );
  },
};

export const ListWithCheckboxes: Story = {
  render: function ListExample() {
    const [selectedItems, setSelectedItems] = React.useState<string[]>([
      'item-2',
    ]);
    const items = [
      { id: 'item-1', label: 'Receive email notifications' },
      { id: 'item-2', label: 'Receive SMS notifications' },
      { id: 'item-3', label: 'Receive push notifications' },
      { id: 'item-4', label: 'Weekly newsletter' },
      { id: 'item-5', label: 'Monthly report' },
    ];

    const handleItemChange = (
      itemId: string,
      checked: boolean | 'indeterminate'
    ) => {
      if (checked === true) {
        setSelectedItems(prev => [...prev, itemId]);
      } else {
        setSelectedItems(prev => prev.filter(id => id !== itemId));
      }
    };

    const allSelected = selectedItems.length === items.length;
    const someSelected =
      selectedItems.length > 0 && selectedItems.length < items.length;
    const selectAllState = allSelected
      ? true
      : someSelected
        ? 'indeterminate'
        : false;

    const handleSelectAll = (checked: boolean | 'indeterminate') => {
      if (checked === true) {
        setSelectedItems(items.map(item => item.id));
      } else {
        setSelectedItems([]);
      }
    };

    return (
      <div className="w-80 space-y-4">
        <div className="flex items-center space-x-2 border-b pb-2">
          <Checkbox
            id="select-all"
            checked={selectAllState}
            onCheckedChange={handleSelectAll}
          />
          <label
            htmlFor="select-all"
            className="text-sm leading-none font-semibold peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Notification Preferences
          </label>
        </div>

        <div className="space-y-2 pl-4">
          {items.map(item => (
            <div key={item.id} className="flex items-center space-x-2">
              <Checkbox
                id={item.id}
                checked={selectedItems.includes(item.id)}
                onCheckedChange={checked => handleItemChange(item.id, checked)}
              />
              <label
                htmlFor={item.id}
                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>

        <div className="text-xs text-gray-500">
          Selected: {selectedItems.length} of {items.length}
        </div>
      </div>
    );
  },
};

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="custom-1"
          className="border-blue-500 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
        />
        <label
          htmlFor="custom-1"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Blue checkbox
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="custom-2"
          className="size-5 border-green-500 data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600"
        />
        <label
          htmlFor="custom-2"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Larger green checkbox
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="custom-3"
          className="rounded-full border-purple-500 data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-600"
        />
        <label
          htmlFor="custom-3"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Rounded purple checkbox
        </label>
      </div>
    </div>
  ),
};

export const Error: Story = {
  args: {
    error: true,
  },
  render: args => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="error-checkbox" {...args} />
        <label
          htmlFor="error-checkbox"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          This checkbox has an error
        </label>
      </div>
      <p className="text-sm text-red-600">This field is required</p>
    </div>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div className="flex items-start space-x-3">
        <Checkbox id="privacy" className="mt-1" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="privacy"
            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Privacy Settings
          </label>
          <p className="text-muted-foreground text-xs">
            Control who can see your profile information and activity.
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox id="analytics" className="mt-1" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="analytics"
            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Analytics and Performance
          </label>
          <p className="text-muted-foreground text-xs">
            Help us improve our services by sharing anonymous usage data.
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox id="marketing-opt" className="mt-1" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="marketing-opt"
            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Marketing Communications
          </label>
          <p className="text-muted-foreground text-xs">
            Receive updates about new features, promotions, and company news.
          </p>
        </div>
      </div>
    </div>
  ),
};
