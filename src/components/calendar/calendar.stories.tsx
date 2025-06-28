import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { DateRange } from 'react-day-picker';
import { Calendar } from './calendar';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A date picker component built with react-day-picker and styled with Tailwind CSS. Supports single date selection, date ranges, and various display modes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // DayPicker root props from react-day-picker
    mode: {
      control: { type: 'select' },
      options: ['single', 'multiple', 'range'],
      description: 'The selection mode of the calendar',
      table: {
        type: { summary: '"single" | "multiple" | "range"' },
        defaultValue: { summary: '"single"' },
      },
    },
    selected: {
      control: false,
      description: 'The selected date(s). Type depends on mode',
      table: {
        type: { summary: 'Date | Date[] | DateRange | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onSelect: {
      action: 'onSelect',
      description: 'Event handler called when the user selects a date',
      table: {
        type: {
          summary: '(date: Date | Date[] | DateRange | undefined) => void',
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    disabled: {
      control: false,
      description: 'Dates that should be disabled',
      table: {
        type: { summary: 'Date | Date[] | DateRange | Matcher | Matcher[]' },
        defaultValue: { summary: 'undefined' },
      },
    },
    showOutsideDays: {
      control: { type: 'boolean' },
      description: 'Show days falling into the other months',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    captionLayout: {
      control: { type: 'select' },
      options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'],
      description: 'Layout of the month caption',
      table: {
        type: {
          summary:
            '"label" | "dropdown" | "dropdown-months" | "dropdown-years"',
        },
        defaultValue: { summary: '"label"' },
      },
    },
    buttonVariant: {
      control: { type: 'select' },
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      description: 'Variant style for navigation buttons',
      table: {
        type: {
          summary:
            '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
        },
        defaultValue: { summary: '"ghost"' },
      },
    },
    numberOfMonths: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Number of months to display',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    fromYear: {
      control: { type: 'number' },
      description: 'The earliest year to start the month navigation',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    toYear: {
      control: { type: 'number' },
      description: 'The latest year to end the month navigation',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: 'single',
    showOutsideDays: true,
  },
  render: function DefaultCalendar(args) {
    const [selected, setSelected] = React.useState<Date | undefined>();

    return (
      <Calendar
        {...args}
        mode="single"
        selected={selected}
        onSelect={setSelected}
      />
    );
  },
};

export const WithoutOutsideDays: Story = {
  render: function WithoutOutsideDaysCalendar() {
    const [selected, setSelected] = React.useState<Date | undefined>();

    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        showOutsideDays={false}
      />
    );
  },
};

export const MultipleMonths: Story = {
  render: function MultipleMonthsCalendar() {
    const [selected, setSelected] = React.useState<Date | undefined>();

    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        numberOfMonths={2}
      />
    );
  },
};

export const WithDropdowns: Story = {
  render: function WithDropdownsCalendar() {
    const [selected, setSelected] = React.useState<Date | undefined>();

    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        captionLayout="dropdown"
        fromYear={2020}
        toYear={2030}
      />
    );
  },
};

export const RangeSelection: Story = {
  render: function RangeSelectionCalendar() {
    const [selected, setSelected] = React.useState<DateRange | undefined>();

    return (
      <Calendar
        mode="range"
        selected={selected}
        onSelect={setSelected}
        numberOfMonths={2}
      />
    );
  },
};

export const MultipleSelection: Story = {
  render: function MultipleSelectionCalendar() {
    const [selected, setSelected] = React.useState<Date[] | undefined>([]);

    return (
      <Calendar mode="multiple" selected={selected} onSelect={setSelected} />
    );
  },
};

export const WithDisabledDates: Story = {
  render: function WithDisabledDatesCalendar() {
    const [selected, setSelected] = React.useState<Date | undefined>();

    // Disable weekends and past dates
    const disabledDays = [
      { dayOfWeek: [0, 6] }, // Sundays and Saturdays
      { before: new Date() }, // Past dates
    ];

    return (
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        disabled={disabledDays}
      />
    );
  },
};

export const PreselectedDate: Story = {
  render: function PreselectedDateCalendar() {
    const [selected, setSelected] = React.useState<Date | undefined>(
      new Date()
    );

    return (
      <Calendar mode="single" selected={selected} onSelect={setSelected} />
    );
  },
};

export const MinimalStyling: Story = {
  render: function MinimalStylingCalendar() {
    const [selected, setSelected] = React.useState<Date | undefined>();

    return (
      <div className="rounded-md border p-3">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          className="rounded-md"
        />
      </div>
    );
  },
};
