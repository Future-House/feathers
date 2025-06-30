import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A control that allows the user to toggle between checked and not checked. Built with Radix UI Switch primitives and styled with Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Root component props from @radix-ui/react-switch
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
      control: { type: 'boolean' },
      description:
        'The controlled checked state of the switch. Must be used in conjunction with onCheckedChange',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: undefined },
      },
    },
    defaultChecked: {
      control: { type: 'boolean' },
      description:
        'The checked state of the switch when it is initially rendered. Use when you do not need to control its checked state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onCheckedChange: {
      action: 'onCheckedChange',
      description:
        'Event handler called when the checked state of the switch changes',
      table: {
        type: { summary: '(checked: boolean) => void' },
        defaultValue: { summary: undefined },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description:
        'When true, prevents the user from interacting with the switch',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: { type: 'boolean' },
      description:
        'When true, indicates that the user must check the switch before the owning form can be submitted',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    name: {
      control: { type: 'text' },
      description:
        'The name of the switch. Submitted with its owning form as part of a name/value pair',
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
      description: 'CSS class name to apply to the switch',
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
        'Accessible label for the switch when no visible label is present',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    'aria-labelledby': {
      control: { type: 'text' },
      description: 'ID of an element that labels the switch',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    'aria-describedby': {
      control: { type: 'text' },
      description: 'ID of an element that describes the switch',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <label
        htmlFor="airplane-mode"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Airplane Mode
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
      <Switch id="wifi" {...args} />
      <label
        htmlFor="wifi"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Wi-Fi enabled by default
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
        <Switch id="disabled-off" {...args} />
        <label
          htmlFor="disabled-off"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Disabled (off)
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="disabled-on" defaultChecked disabled />
        <label
          htmlFor="disabled-on"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Disabled (on)
        </label>
      </div>
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledSwitch() {
    const [checked, setChecked] = React.useState(false);

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="controlled"
            checked={checked}
            onCheckedChange={setChecked}
          />
          <label
            htmlFor="controlled"
            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Controlled switch
          </label>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setChecked(false)}
            className="rounded border px-3 py-1 text-sm hover:bg-gray-50"
          >
            Turn Off
          </button>
          <button
            onClick={() => setChecked(true)}
            className="rounded border px-3 py-1 text-sm hover:bg-gray-50"
          >
            Turn On
          </button>
        </div>
        <p className="text-sm text-gray-600">
          Current state: {checked ? 'on' : 'off'}
        </p>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: function FormExample() {
    const [formData, setFormData] = React.useState({
      notifications: true,
      marketing: false,
      analytics: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(`Form submitted with: ${JSON.stringify(formData, null, 2)}`);
    };

    return (
      <form onSubmit={handleSubmit} className="w-80 space-y-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Switch
              id="notifications"
              checked={formData.notifications}
              onCheckedChange={checked =>
                setFormData(prev => ({ ...prev, notifications: checked }))
              }
            />
            <label
              htmlFor="notifications"
              className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Push notifications
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
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
              Marketing emails
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="analytics"
              checked={formData.analytics}
              onCheckedChange={checked =>
                setFormData(prev => ({ ...prev, analytics: checked }))
              }
            />
            <label
              htmlFor="analytics"
              className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Analytics tracking
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          Save Preferences
        </button>

        <div className="text-xs text-gray-500">
          <p>Notifications: {formData.notifications ? 'On' : 'Off'}</p>
          <p>Marketing: {formData.marketing ? 'On' : 'Off'}</p>
          <p>Analytics: {formData.analytics ? 'On' : 'Off'}</p>
        </div>
      </form>
    );
  },
};

export const SettingsPanel: Story = {
  render: function SettingsPanel() {
    const [settings, setSettings] = React.useState({
      darkMode: false,
      soundEffects: true,
      autoSave: true,
      compactView: false,
      showPreview: true,
      enableShortcuts: true,
    });

    const updateSetting = (key: keyof typeof settings, value: boolean) => {
      setSettings(prev => ({ ...prev, [key]: value }));
    };

    return (
      <div className="w-96 space-y-6">
        <h3 className="text-lg font-semibold">Settings</h3>

        <div className="space-y-4">
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-900">Appearance</h4>
            <div className="space-y-3 pl-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="dark-mode"
                  className="cursor-pointer text-sm leading-none font-medium"
                >
                  Dark mode
                </label>
                <Switch
                  id="dark-mode"
                  checked={settings.darkMode}
                  onCheckedChange={value => updateSetting('darkMode', value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="compact-view"
                  className="cursor-pointer text-sm leading-none font-medium"
                >
                  Compact view
                </label>
                <Switch
                  id="compact-view"
                  checked={settings.compactView}
                  onCheckedChange={value => updateSetting('compactView', value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="show-preview"
                  className="cursor-pointer text-sm leading-none font-medium"
                >
                  Show preview
                </label>
                <Switch
                  id="show-preview"
                  checked={settings.showPreview}
                  onCheckedChange={value => updateSetting('showPreview', value)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-900">Behavior</h4>
            <div className="space-y-3 pl-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="sound-effects"
                  className="cursor-pointer text-sm leading-none font-medium"
                >
                  Sound effects
                </label>
                <Switch
                  id="sound-effects"
                  checked={settings.soundEffects}
                  onCheckedChange={value =>
                    updateSetting('soundEffects', value)
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="auto-save"
                  className="cursor-pointer text-sm leading-none font-medium"
                >
                  Auto-save
                </label>
                <Switch
                  id="auto-save"
                  checked={settings.autoSave}
                  onCheckedChange={value => updateSetting('autoSave', value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="enable-shortcuts"
                  className="cursor-pointer text-sm leading-none font-medium"
                >
                  Keyboard shortcuts
                </label>
                <Switch
                  id="enable-shortcuts"
                  checked={settings.enableShortcuts}
                  onCheckedChange={value =>
                    updateSetting('enableShortcuts', value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch
          id="custom-1"
          className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-green-200"
        />
        <label
          htmlFor="custom-1"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Green switch
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="custom-2"
          className="scale-125 data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-purple-200"
        />
        <label
          htmlFor="custom-2"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Larger purple switch
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="custom-3"
          className="border-2 border-orange-300 data-[state=checked]:bg-orange-600 data-[state=unchecked]:bg-orange-200"
        />
        <label
          htmlFor="custom-3"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Orange switch with border
        </label>
      </div>
    </div>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div className="flex items-start space-x-3">
        <Switch id="privacy-mode" className="mt-1" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="privacy-mode"
            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Privacy Mode
          </label>
          <p className="text-muted-foreground text-xs">
            Hide your online status and activity from other users.
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <Switch id="auto-backup" className="mt-1" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="auto-backup"
            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Automatic Backup
          </label>
          <p className="text-muted-foreground text-xs">
            Automatically backup your data every 24 hours to prevent data loss.
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <Switch id="experimental" className="mt-1" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="experimental"
            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Experimental Features
          </label>
          <p className="text-muted-foreground text-xs">
            Enable beta features that are currently in development. These may be
            unstable.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const AccessibilityShowcase: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Accessibility Features</h4>

        <div className="flex items-center space-x-2">
          <Switch
            id="aria-labeled"
            aria-label="Toggle feature without visible label"
          />
          <span className="text-xs text-gray-500">
            Switch with aria-label (no visible label)
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="aria-described" aria-describedby="switch-description" />
          <label
            htmlFor="aria-described"
            className="text-sm leading-none font-medium"
          >
            Switch with description
          </label>
        </div>
        <p id="switch-description" className="ml-10 text-xs text-gray-500">
          This switch has additional context provided via aria-describedby
        </p>

        <div className="flex items-center space-x-2">
          <Switch
            id="required-switch"
            required
            aria-describedby="required-description"
          />
          <label
            htmlFor="required-switch"
            className="text-sm leading-none font-medium"
          >
            Required switch *
          </label>
        </div>
        <p id="required-description" className="ml-10 text-xs text-gray-500">
          This switch is required and must be enabled before form submission
        </p>
      </div>
    </div>
  ),
};
