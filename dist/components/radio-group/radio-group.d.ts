import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
interface RadioGroupProps extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {
    error?: boolean;
}
interface RadioGroupItemProps extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {
    error?: boolean;
}
declare function RadioGroup({ className, error, ...props }: RadioGroupProps): import("react/jsx-runtime").JSX.Element;
declare function RadioGroupItem({ className, error, ...props }: RadioGroupItemProps): import("react/jsx-runtime").JSX.Element;
export { RadioGroup, RadioGroupItem };
//# sourceMappingURL=radio-group.d.ts.map