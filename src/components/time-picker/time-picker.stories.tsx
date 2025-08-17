import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TimePicker } from './time-picker';

const meta = {
  title: 'Components/TimePicker',
  component: TimePicker,
  parameters: {
    docs: {
      description: {
        component:
          'A time input component that provides a native time picker interface with customizable format and precision.',
      },
    },
  },
  argTypes: {
    showSeconds: {
      control: { type: 'boolean' },
      description: 'Whether to show seconds in the time picker',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    format: {
      control: { type: 'select' },
      options: ['12', '24'],
      description: 'Time format (12-hour or 24-hour)',
      table: {
        type: { summary: "'12' | '24'" },
        defaultValue: { summary: '24' },
      },
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether the time picker is in an error state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the time picker is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    defaultValue: {
      control: { type: 'text' },
      description: 'Default time value (HH:MM or HH:MM:SS format)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'Controlled time value',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
    },
    onChange: {
      action: 'onChange',
      description: 'Callback when the time value changes',
      table: {
        type: {
          summary: '(event: React.ChangeEvent<HTMLInputElement>) => void',
        },
        defaultValue: { summary: undefined },
      },
    },
  },
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div className="w-40">
      <TimePicker defaultValue="10:30" />
    </div>
  ),
};

export const WithSeconds: Story = {
  args: {
    showSeconds: true,
  },
  render: args => (
    <div className="w-48">
      <TimePicker {...args} defaultValue="10:30:45" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: args => (
    <div className="w-40">
      <TimePicker {...args} defaultValue="14:45" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    error: true,
  },
  render: args => (
    <div className="space-y-2">
      <div className="w-40">
        <TimePicker {...args} defaultValue="25:00" />
      </div>
      <p className="text-sm text-red-600">Invalid time format</p>
    </div>
  ),
};

export const FormExample: Story = {
  render: function FormExample() {
    const [formData, setFormData] = React.useState({
      startTime: '',
      endTime: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(
        `Form submitted with:\nStart: ${formData.startTime}\nEnd: ${formData.endTime}`
      );
    };

    return (
      <form onSubmit={handleSubmit} className="w-80 space-y-4">
        <div className="space-y-2">
          <label htmlFor="start-time" className="text-sm font-medium">
            Start Time
          </label>
          <TimePicker
            id="start-time"
            value={formData.startTime}
            onChange={e =>
              setFormData(prev => ({ ...prev, startTime: e.target.value }))
            }
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="end-time" className="text-sm font-medium">
            End Time
          </label>
          <TimePicker
            id="end-time"
            value={formData.endTime}
            onChange={e =>
              setFormData(prev => ({ ...prev, endTime: e.target.value }))
            }
            required
          />
        </div>

        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          Submit
        </button>

        <div className="text-xs text-gray-500">
          <p>Start: {formData.startTime || 'Not selected'}</p>
          <p>End: {formData.endTime || 'Not selected'}</p>
        </div>
      </form>
    );
  },
};

export const TimeRange: Story = {
  render: function TimeRangeExample() {
    const [startTime, setStartTime] = React.useState('09:00');
    const [endTime, setEndTime] = React.useState('17:00');

    const calculateDuration = () => {
      if (!startTime || !endTime) return '';

      const [startHours, startMinutes] = startTime.split(':').map(Number);
      const [endHours, endMinutes] = endTime.split(':').map(Number);

      const startTotalMinutes = startHours * 60 + startMinutes;
      const endTotalMinutes = endHours * 60 + endMinutes;

      const durationMinutes = endTotalMinutes - startTotalMinutes;

      if (durationMinutes < 0) return 'Invalid range';

      const hours = Math.floor(durationMinutes / 60);
      const minutes = durationMinutes % 60;

      if (hours === 0) return `${minutes} minutes`;
      if (minutes === 0) return `${hours} hours`;
      return `${hours} hours ${minutes} minutes`;
    };

    return (
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Start Time</label>
            <TimePicker
              value={startTime}
              onChange={e => setStartTime(e.target.value)}
            />
          </div>
          <div className="flex items-end pb-1">
            <span className="text-gray-500">to</span>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">End Time</label>
            <TimePicker
              value={endTime}
              onChange={e => setEndTime(e.target.value)}
            />
          </div>
        </div>
        <div className="text-sm text-gray-600">
          Duration: {calculateDuration()}
        </div>
      </div>
    );
  },
};

export const WithLabels: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <label htmlFor="meeting-time" className="text-sm font-medium">
        Meeting Time
      </label>
      <TimePicker id="meeting-time" defaultValue="14:30" />
      <p className="text-xs text-gray-500">
        Select the time for your daily standup meeting
      </p>
    </div>
  ),
};
