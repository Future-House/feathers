import * as React from 'react';
import { Calendar } from '../../components/calendar';
import { PopoverContent } from '../../components/popover';
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
declare function formatDate(date: Date | undefined, options?: Intl.DateTimeFormatOptions): string;
declare function isValidDate(date: Date | undefined): boolean;
declare function DateInput({ id, label, selected, onSelect, disabled, placeholder, className, inputClassName, calendarClassName, formatOptions, align, side, alignOffset, sideOffset, captionLayout, }: DateInputProps): import("react/jsx-runtime").JSX.Element;
declare namespace DateInput {
    var displayName: string;
}
export { DateInput, formatDate, isValidDate };
export type { DateInputProps };
//# sourceMappingURL=date-input.d.ts.map