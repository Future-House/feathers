import * as React from 'react';
import { Calendar as CalendarIcon } from '@/icons';

import { cn } from '@/lib/utils';
import { Button } from '@/components/button';
import { Calendar } from '@/components/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';
import { ScrollArea, ScrollBar } from '@/components/scroll-area';
import { type DateInputProps } from '@/components/date-input';

export interface DateTimePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  buttonClassName?: string;
  calendarClassName?: string;
  formatOptions?: Intl.DateTimeFormatOptions;
  showSeconds?: boolean;
  minuteStep?: number;
  use12HourFormat?: boolean;
  align?: React.ComponentProps<typeof PopoverContent>['align'];
  side?: React.ComponentProps<typeof PopoverContent>['side'];
  alignOffset?: number;
  sideOffset?: number;
  captionLayout?: React.ComponentProps<typeof Calendar>['captionLayout'];
  dateInputProps?: Partial<DateInputProps>;
  mode?: 'date' | 'time' | 'datetime';
}

function formatDateTime(
  date: Date | undefined,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }
) {
  if (!date) {
    return '';
  }

  return date.toLocaleString('en-US', options);
}

function DateTimePicker({
  value,
  onChange,
  disabled = false,
  placeholder,
  className,
  buttonClassName,
  calendarClassName,
  formatOptions,
  showSeconds = false,
  minuteStep = 5,
  use12HourFormat = true,
  align = 'start',
  side = 'bottom',
  alignOffset = 0,
  sideOffset = 4,
  captionLayout = 'label',
  dateInputProps,
  mode = 'datetime',
}: DateTimePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(value);
  const [month, setMonth] = React.useState<Date | undefined>(
    value || new Date()
  );

  React.useEffect(() => {
    setDate(value);
    if (value) {
      setMonth(value);
    }
  }, [value]);

  const hours = React.useMemo(() => {
    if (use12HourFormat) {
      return Array.from({ length: 12 }, (_, i) => i + 1);
    }
    return Array.from({ length: 24 }, (_, i) => i);
  }, [use12HourFormat]);

  const minutes = React.useMemo(() => {
    const steps = Math.floor(60 / minuteStep);
    return Array.from({ length: steps }, (_, i) => i * minuteStep);
  }, [minuteStep]);

  const seconds = React.useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => i);
  }, []);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      const newDate = new Date(selectedDate);
      if (date) {
        newDate.setHours(date.getHours());
        newDate.setMinutes(date.getMinutes());
        newDate.setSeconds(date.getSeconds());
      } else {
        newDate.setHours(0);
        newDate.setMinutes(0);
        newDate.setSeconds(0);
      }
      setDate(newDate);
      if (mode === 'date') {
        onChange?.(newDate);
        setOpen(false);
      }
    } else {
      setDate(undefined);
      onChange?.(undefined);
    }
  };

  const handleTimeChange = (
    type: 'hour' | 'minute' | 'second' | 'ampm',
    value: string
  ) => {
    const newDate = date ? new Date(date) : new Date();

    if (!date) {
      const today = new Date();
      newDate.setFullYear(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );
    }

    if (type === 'hour') {
      const hour = parseInt(value);
      if (use12HourFormat) {
        const isPM = newDate.getHours() >= 12;
        newDate.setHours((hour % 12) + (isPM ? 12 : 0));
      } else {
        newDate.setHours(hour);
      }
    } else if (type === 'minute') {
      newDate.setMinutes(parseInt(value));
    } else if (type === 'second') {
      newDate.setSeconds(parseInt(value));
    } else if (type === 'ampm') {
      const currentHours = newDate.getHours();
      const isPM = value === 'PM';
      if (isPM && currentHours < 12) {
        newDate.setHours(currentHours + 12);
      } else if (!isPM && currentHours >= 12) {
        newDate.setHours(currentHours - 12);
      }
    }

    setDate(newDate);
    if (mode === 'time') {
      onChange?.(newDate);
    }
  };

  const handleApply = () => {
    onChange?.(date);
    setOpen(false);
  };

  const displayPlaceholder = React.useMemo(() => {
    if (placeholder) return placeholder;
    if (mode === 'date') return 'Select date';
    if (mode === 'time') return 'Select time';
    return 'Select date and time';
  }, [placeholder, mode]);

  const displayValue = React.useMemo(() => {
    if (!date) return displayPlaceholder;

    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: mode !== 'time' ? 'numeric' : undefined,
      month: mode !== 'time' ? '2-digit' : undefined,
      day: mode !== 'time' ? '2-digit' : undefined,
      hour: mode !== 'date' ? '2-digit' : undefined,
      minute: mode !== 'date' ? '2-digit' : undefined,
      second: mode !== 'date' && showSeconds ? '2-digit' : undefined,
      hour12: use12HourFormat,
    };

    const mergedOptions = { ...defaultOptions, ...formatOptions };

    return formatDateTime(date, mergedOptions);
  }, [
    date,
    displayPlaceholder,
    formatOptions,
    mode,
    showSeconds,
    use12HourFormat,
  ]);

  const currentHour = date ? date.getHours() : 0;
  const currentMinute = date ? date.getMinutes() : 0;
  const currentSecond = date ? date.getSeconds() : 0;
  const isPM = currentHour >= 12;
  const displayHour = use12HourFormat ? currentHour % 12 || 12 : currentHour;

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              'w-full justify-start text-left font-normal',
              !date && 'text-muted-foreground',
              buttonClassName
            )}
            disabled={disabled}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {displayValue}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0"
          align={align}
          side={side}
          alignOffset={alignOffset}
          sideOffset={sideOffset}
        >
          <div className="flex flex-col sm:flex-row">
            {mode !== 'time' && (
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                month={month}
                onMonthChange={setMonth}
                captionLayout={captionLayout}
                className={cn('p-3', calendarClassName)}
                initialFocus
                {...dateInputProps}
              />
            )}
            {mode !== 'date' && (
              <div
                className={cn(
                  'flex divide-x border-t sm:border-t-0 sm:border-l',
                  mode === 'time' && 'border-t-0 sm:border-l-0'
                )}
              >
                <ScrollArea className="h-[268px] w-[60px]">
                  <div className="p-2">
                    <div className="text-muted-foreground mb-1 text-center text-xs font-medium">
                      Hour
                    </div>
                    {hours.map(hour => (
                      <Button
                        key={hour}
                        size="sm"
                        variant={displayHour === hour ? 'default' : 'ghost'}
                        className="h-8 w-full text-xs"
                        onClick={() =>
                          handleTimeChange('hour', hour.toString())
                        }
                      >
                        {hour.toString().padStart(2, '0')}
                      </Button>
                    ))}
                  </div>
                  <ScrollBar orientation="vertical" />
                </ScrollArea>

                <ScrollArea className="h-[268px] w-[60px]">
                  <div className="p-2">
                    <div className="text-muted-foreground mb-1 text-center text-xs font-medium">
                      Min
                    </div>
                    {minutes.map(minute => (
                      <Button
                        key={minute}
                        size="sm"
                        variant={currentMinute === minute ? 'default' : 'ghost'}
                        className="h-8 w-full text-xs"
                        onClick={() =>
                          handleTimeChange('minute', minute.toString())
                        }
                      >
                        {minute.toString().padStart(2, '0')}
                      </Button>
                    ))}
                  </div>
                  <ScrollBar orientation="vertical" />
                </ScrollArea>

                {showSeconds && (
                  <ScrollArea className="h-[268px] w-[60px]">
                    <div className="p-2">
                      <div className="text-muted-foreground mb-1 text-center text-xs font-medium">
                        Sec
                      </div>
                      {seconds.map(second => (
                        <Button
                          key={second}
                          size="sm"
                          variant={
                            currentSecond === second ? 'default' : 'ghost'
                          }
                          className="h-8 w-full text-xs"
                          onClick={() =>
                            handleTimeChange('second', second.toString())
                          }
                        >
                          {second.toString().padStart(2, '0')}
                        </Button>
                      ))}
                    </div>
                    <ScrollBar orientation="vertical" />
                  </ScrollArea>
                )}

                {use12HourFormat && (
                  <div className="flex w-[60px] flex-col p-2">
                    <div className="text-muted-foreground mb-1 text-center text-xs font-medium">
                      Period
                    </div>
                    {['AM', 'PM'].map(period => (
                      <Button
                        key={period}
                        size="sm"
                        variant={
                          (period === 'AM' && !isPM) ||
                          (period === 'PM' && isPM)
                            ? 'default'
                            : 'ghost'
                        }
                        className="mb-1 h-8 w-full text-xs"
                        onClick={() => handleTimeChange('ampm', period)}
                      >
                        {period}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          {mode === 'datetime' && (
            <div className="flex items-center justify-end gap-2 border-t p-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button size="sm" onClick={handleApply}>
                Apply
              </Button>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}

DateTimePicker.displayName = 'DateTimePicker';

export { DateTimePicker, formatDateTime };
