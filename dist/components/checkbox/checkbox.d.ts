import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
    error?: boolean;
}
declare function Checkbox({ className, error, ...props }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
export { Checkbox };
//# sourceMappingURL=checkbox.d.ts.map