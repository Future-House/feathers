import * as React from 'react';
import { Clock } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Input } from '@/components/input';

interface TimePickerProps extends Omit<React.ComponentProps<'input'>, 'type'> {
  error?: boolean;
  showSeconds?: boolean;
  format?: '12' | '24';
}

function TimePicker({
  className,
  error,
  showSeconds = false,
  ...props
}: TimePickerProps) {
  const step = showSeconds ? 1 : 60;

  return (
    <div className="relative">
      <Input
        type="time"
        step={step}
        error={error}
        className={cn(
          'pr-10 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none',
          className
        )}
        {...props}
      />
      <Clock className="text-muted-foreground pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2" />
    </div>
  );
}

export { TimePicker };
