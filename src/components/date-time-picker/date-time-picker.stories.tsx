import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateTimePicker } from './date-time-picker';
import React from 'react';

const meta = {
  title: 'Components/DateTimePicker',
  component: DateTimePicker,
  decorators: [
    Story => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    value: {
      control: 'date',
      description: 'The selected date and time value',
    },
    onChange: {
      action: 'onChange',
      description: 'Callback when the date/time changes',
    },
    mode: {
      control: 'select',
      options: ['date', 'time', 'datetime'],
      description: 'The picker mode',
      defaultValue: 'datetime',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the picker is disabled',
      defaultValue: false,
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no value is selected',
    },
    showSeconds: {
      control: 'boolean',
      description: 'Whether to show seconds in time picker',
      defaultValue: false,
    },
    minuteStep: {
      control: 'number',
      description: 'Step interval for minutes (e.g., 5 for 5-minute intervals)',
      defaultValue: 5,
      min: 1,
      max: 30,
    },
    use12HourFormat: {
      control: 'boolean',
      description: 'Whether to use 12-hour format with AM/PM',
      defaultValue: true,
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Popover alignment',
      defaultValue: 'start',
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Popover side',
      defaultValue: 'bottom',
    },
    captionLayout: {
      control: 'select',
      options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'],
      description: 'Calendar caption layout',
      defaultValue: 'label',
    },
  },
} satisfies Meta<typeof DateTimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select date and time',
  },
};

export const DateOnly: Story = {
  args: {
    mode: 'date',
    placeholder: 'Select date',
  },
};

export const TimeOnly: Story = {
  args: {
    mode: 'time',
    placeholder: 'Select time',
  },
};

export const WithSeconds: Story = {
  args: {
    showSeconds: true,
    placeholder: 'Select date and time',
  },
};

export const WithMinuteStep: Story = {
  args: {
    minuteStep: 15,
    placeholder: 'Select date and time (15-min intervals)',
  },
};

export const FiveMinuteIntervals: Story = {
  args: {
    minuteStep: 5,
    placeholder: 'Select date and time (5-min intervals)',
  },
};

export const TwentyFourHourFormat: Story = {
  args: {
    use12HourFormat: false,
    placeholder: 'Select date and time (24h)',
  },
};

export const WithInitialValue: Story = {
  args: {
    value: new Date(),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled picker',
  },
};

export const CustomFormat: Story = {
  args: {
    formatOptions: {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    },
    placeholder: 'Select date and time',
  },
};

const ControlledExample = () => {
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <div className="space-y-4">
      <DateTimePicker
        value={date}
        onChange={setDate}
        placeholder="Select date and time"
      />
      <div className="text-sm">
        <strong>Selected:</strong>{' '}
        {date ? date.toLocaleString() : 'No date selected'}
      </div>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledExample />,
};

const MultipleInstancesExample = () => {
  const [startDate, setStartDate] = React.useState<Date | undefined>();
  const [endDate, setEndDate] = React.useState<Date | undefined>();

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium">Start Date</label>
        <DateTimePicker
          value={startDate}
          onChange={setStartDate}
          placeholder="Select start date and time"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium">End Date</label>
        <DateTimePicker
          value={endDate}
          onChange={setEndDate}
          placeholder="Select end date and time"
        />
      </div>
      <div className="space-y-1 text-sm">
        <div>
          <strong>Start:</strong>{' '}
          {startDate ? startDate.toLocaleString() : 'Not selected'}
        </div>
        <div>
          <strong>End:</strong>{' '}
          {endDate ? endDate.toLocaleString() : 'Not selected'}
        </div>
      </div>
    </div>
  );
};

export const MultipleInstances: Story = {
  render: () => <MultipleInstancesExample />,
};
