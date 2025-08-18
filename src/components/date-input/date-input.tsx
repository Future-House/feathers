import * as React from 'react';
import { Calendar as CalendarIcon } from '@/icons';

import { cn } from '@/lib/utils';
import { Button } from '@/components/button';
import { Calendar } from '@/components/calendar';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';

interface DateInputProps {
  id?: string;
  label?: string;
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  calendarClassName?: string;
  formatOptions?: Intl.DateTimeFormatOptions;
  align?: React.ComponentProps<typeof PopoverContent>['align'];
  side?: React.ComponentProps<typeof PopoverContent>['side'];
  alignOffset?: number;
  sideOffset?: number;
  captionLayout?: React.ComponentProps<typeof Calendar>['captionLayout'];
}

function formatDate(
  date: Date | undefined,
  options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }
) {
  if (!date) {
    return '';
  }

  return date.toLocaleDateString('en-US', options);
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

function DateInput({
  id,
  label,
  selected,
  onSelect,
  disabled = false,
  placeholder = 'Select date',
  className,
  inputClassName,
  calendarClassName,
  formatOptions,
  align = 'end',
  side = 'bottom',
  alignOffset = -8,
  sideOffset = 10,
  captionLayout = 'label',
}: DateInputProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(selected);
  const [month, setMonth] = React.useState<Date | undefined>(selected);
  const [value, setValue] = React.useState(formatDate(selected, formatOptions));

  React.useEffect(() => {
    setDate(selected);
    setMonth(selected);
    setValue(formatDate(selected, formatOptions));
  }, [selected, formatOptions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    const parsedDate = new Date(inputValue);
    if (isValidDate(parsedDate)) {
      setDate(parsedDate);
      setMonth(parsedDate);
      onSelect?.(parsedDate);
    }
  };

  const handleCalendarSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setValue(formatDate(selectedDate, formatOptions));
    onSelect?.(selectedDate);
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
    }
  };

  const inputId = id || 'date-input';

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {label && (
        <Label htmlFor={inputId} className="px-1">
          {label}
        </Label>
      )}
      <div className="relative flex gap-2">
        <Input
          id={inputId}
          value={value}
          placeholder={placeholder}
          className={cn('bg-background pr-10', inputClassName)}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
              disabled={disabled}
              aria-label="Select date from calendar"
            >
              <CalendarIcon className="size-3.5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0"
            align={align}
            side={side}
            alignOffset={alignOffset}
            sideOffset={sideOffset}
          >
            <Calendar
              mode="single"
              selected={date}
              captionLayout={captionLayout}
              month={month}
              onMonthChange={setMonth}
              onSelect={handleCalendarSelect}
              className={calendarClassName}
              autoFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

DateInput.displayName = 'DateInput';

export { DateInput, formatDate, isValidDate };
export type { DateInputProps };
