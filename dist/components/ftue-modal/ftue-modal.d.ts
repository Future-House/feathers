import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
export interface PreferenceItem {
    /**
     * The label text for the preference
     */
    label: string;
    /**
     * The description text below the label
     */
    description: string;
    /**
     * Whether the checkbox is checked
     */
    checked?: boolean;
    /**
     * Callback when the checkbox state changes
     */
    onCheckedChange?: (checked: boolean) => void;
    /**
     * Unique identifier for the preference
     */
    id: string;
}
export interface FtueModalProps extends React.ComponentProps<typeof DialogPrimitive.Root> {
    /**
     * Optional logo to display at the top of the modal
     */
    logo?: React.ReactNode;
    /**
     * The title text to display in the modal
     */
    title?: React.ReactNode;
    /**
     * The content to display in the modal
     */
    children: React.ReactNode;
    /**
     * Optional array of preference items to display in a preferences section
     */
    preferences?: PreferenceItem[];
    /**
     * Optional button to display at the bottom of the modal
     */
    actionButton?: React.ReactNode;
    /**
     * Whether to show the close button
     */
    showCloseButton?: boolean;
    /**
     * The current step number in the modal series (1-based)
     */
    currentStep?: number;
    /**
     * The total number of steps in the modal series
     */
    totalSteps?: number;
}
declare function FtueModal({ logo, title, children, preferences, actionButton, showCloseButton, currentStep, totalSteps, ...props }: FtueModalProps): import("react/jsx-runtime").JSX.Element;
export { FtueModal };
//# sourceMappingURL=ftue-modal.d.ts.map