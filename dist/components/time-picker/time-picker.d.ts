import * as React from 'react';
interface TimePickerProps extends Omit<React.ComponentProps<'input'>, 'type'> {
    error?: boolean;
    showSeconds?: boolean;
    format?: '12' | '24';
}
declare function TimePicker({ className, error, showSeconds, ...props }: TimePickerProps): import("react/jsx-runtime").JSX.Element;
export { TimePicker };
//# sourceMappingURL=time-picker.d.ts.map