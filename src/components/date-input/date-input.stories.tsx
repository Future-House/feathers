import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { addDays, subDays } from 'date-fns';
import { DateInput } from './date-input';
import { Button } from '../button';

const meta = {
  title: 'Components/DateInput',
  component: DateInput,
  parameters: {
    docs: {
      description: {
        component:
          'A date input component that combines a text input with a calendar popover. Users can either type a date directly or select it from the calendar. Built with date-fns for flexible date handling.',
      },
    },
  },
  tags: [],
  decorators: [
    Story => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    id: {
      control: { type: 'text' },
      description: 'The id for the input element',
      table: {
        type: { summary: 'string' },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'Label text for the date input',
      table: {
        type: { summary: 'string' },
      },
    },
    selected: {
      control: { type: 'date' },
      description: 'The selected date',
      table: {
        type: { summary: 'Date | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onSelect: {
      action: 'onSelect',
      description: 'Callback when a date is selected or typed',
      table: {
        type: { summary: '(date: Date | undefined) => void' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the date input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    formatOptions: {
      control: { type: 'object' },
      description: 'Intl.DateTimeFormatOptions for date formatting',
      table: {
        type: { summary: 'Intl.DateTimeFormatOptions' },
        defaultValue: {
          summary: '{ day: "2-digit", month: "long", year: "numeric" }',
        },
      },
    },
    captionLayout: {
      control: { type: 'select' },
      options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'],
      description: 'Layout of the month caption in the calendar',
      table: {
        type: {
          summary:
            '"label" | "dropdown" | "dropdown-months" | "dropdown-years"',
        },
        defaultValue: { summary: '"label"' },
      },
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
      description: 'The alignment of the popover',
      table: {
        type: { summary: '"start" | "center" | "end"' },
        defaultValue: { summary: '"end"' },
      },
    },
    side: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'The side of the popover',
      table: {
        type: { summary: '"top" | "right" | "bottom" | "left"' },
        defaultValue: { summary: '"bottom"' },
      },
    },
    alignOffset: {
      control: { type: 'number' },
      description: 'The offset for popover alignment',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-8' },
      },
    },
    sideOffset: {
      control: { type: 'number' },
      description: 'The offset for popover side',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes for the wrapper',
      table: {
        type: { summary: 'string' },
      },
    },
    inputClassName: {
      control: { type: 'text' },
      description: 'Additional CSS classes for the input',
      table: {
        type: { summary: 'string' },
      },
    },
    calendarClassName: {
      control: { type: 'text' },
      description: 'Additional CSS classes for the calendar',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Subscription Date',
    placeholder: 'June 01, 2025',
  },
};

export const WithSelectedDate: Story = {
  args: {
    label: 'Event Date',
    selected: new Date('2025-06-01'),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Date',
    disabled: true,
    selected: new Date(),
  },
};

export const CustomFormat: Story = {
  args: {
    label: 'Custom Format',
    selected: new Date(),
    formatOptions: {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
  },
};

export const ShortFormat: Story = {
  args: {
    label: 'Short Format',
    selected: new Date(),
    formatOptions: {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    },
  },
};

export const CaptionLayouts: Story = {
  render: () => (
    <div className="space-y-4">
      <DateInput label="Label Layout" captionLayout="label" />
      <DateInput label="Dropdown Layout" captionLayout="dropdown" />
      <DateInput label="Dropdown Months" captionLayout="dropdown-months" />
      <DateInput label="Dropdown Years" captionLayout="dropdown-years" />
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledDateInput() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
      <div className="space-y-4">
        <DateInput label="Select Date" selected={date} onSelect={setDate} />
        <div className="flex gap-2">
          <Button
            className="rounded border px-4 py-2"
            onClick={() => setDate(new Date())}
          >
            Today
          </Button>
          <Button
            className="rounded border px-4 py-2"
            onClick={() => setDate(addDays(new Date(), 1))}
          >
            Tomorrow
          </Button>
          <Button
            className="rounded border px-4 py-2"
            onClick={() => setDate(subDays(new Date(), 1))}
          >
            Yesterday
          </Button>
          <Button
            className="rounded border px-4 py-2"
            onClick={() => setDate(undefined)}
          >
            Clear
          </Button>
        </div>
        {date && (
          <p className="text-muted-foreground text-sm">
            Selected: {date.toLocaleDateString()}
          </p>
        )}
      </div>
    );
  },
};

export const TypeableInput: Story = {
  render: function TypeableDateInput() {
    const [date, setDate] = React.useState<Date | undefined>();
    const [status, setStatus] = React.useState<string>('');

    const handleSelect = (selectedDate: Date | undefined) => {
      setDate(selectedDate);
      if (selectedDate) {
        setStatus(`Valid date selected: ${selectedDate.toLocaleDateString()}`);
      } else {
        setStatus('Invalid or cleared date');
      }
    };

    return (
      <div className="space-y-4">
        <DateInput
          label="Type or Select Date"
          placeholder="Try typing: December 25, 2025"
          selected={date}
          onSelect={handleSelect}
        />
        <p className="text-muted-foreground text-sm">
          You can type dates like &quot;Dec 25, 2025&quot;,
          &quot;12/25/2025&quot;, or &quot;2025-12-25&quot;
        </p>
        {status && <p className="text-sm font-medium">{status}</p>}
      </div>
    );
  },
};

export const MultipleInputs: Story = {
  render: function MultipleInputsExample() {
    const [startDate, setStartDate] = React.useState<Date | undefined>();
    const [endDate, setEndDate] = React.useState<Date | undefined>();

    return (
      <div className="space-y-4">
        <DateInput
          label="Start Date"
          selected={startDate}
          onSelect={setStartDate}
          placeholder="Select start date"
        />
        <DateInput
          label="End Date"
          selected={endDate}
          onSelect={setEndDate}
          placeholder="Select end date"
        />
        {startDate && endDate && (
          <p className="text-muted-foreground text-sm">
            Range: {startDate.toLocaleDateString()} -{' '}
            {endDate.toLocaleDateString()}
          </p>
        )}
      </div>
    );
  },
};
