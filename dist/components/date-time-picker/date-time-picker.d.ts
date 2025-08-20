import * as React from 'react';
import { Calendar } from '../../components/calendar';
import { PopoverContent } from '../../components/popover';
import { type DateInputProps } from '../../components/date-input';
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
declare function formatDateTime(date: Date | undefined, options?: Intl.DateTimeFormatOptions): string;
declare function DateTimePicker({ value, onChange, disabled, placeholder, className, buttonClassName, calendarClassName, formatOptions, showSeconds, minuteStep, use12HourFormat, align, side, alignOffset, sideOffset, captionLayout, dateInputProps, mode, }: DateTimePickerProps): import("react/jsx-runtime").JSX.Element;
declare namespace DateTimePicker {
    var displayName: string;
}
export { DateTimePicker, formatDateTime };
//# sourceMappingURL=date-time-picker.d.ts.map