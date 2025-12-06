import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Close as XIcon } from '@/icons';
import { Checkbox } from '@/components/checkbox';
import { cn } from '@/lib/utils';

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

export interface FtueModalProps extends React.ComponentProps<
  typeof DialogPrimitive.Root
> {
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

function FtueModal({
  logo,
  title,
  children,
  preferences,
  actionButton,
  showCloseButton = false,
  currentStep,
  totalSteps,
  ...props
}: FtueModalProps) {
  return (
    <DialogPrimitive.Root data-slot="ftue-modal" {...props}>
      <DialogPrimitive.Portal data-slot="ftue-modal-portal">
        <DialogPrimitive.Overlay
          data-slot="ftue-modal-overlay"
          className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50"
        />
        <DialogPrimitive.Content
          data-slot="ftue-modal-content"
          className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-6 rounded-[8px] border !border-[var(--ftue-modal-border)] bg-[var(--ftue-modal-bg)] p-6 shadow-lg duration-200 sm:max-w-lg"
        >
          {logo && (
            <div data-slot="ftue-modal-logo" className="flex justify-start">
              {logo}
            </div>
          )}

          {title && (
            <DialogPrimitive.Title
              data-slot="ftue-modal-title"
              className="text-left font-bold text-gray-800 dark:text-white"
              style={{ fontSize: '21px' }}
            >
              {title}
            </DialogPrimitive.Title>
          )}

          <div
            data-slot="ftue-modal-body"
            className="-mt-3 font-mono text-xs font-normal text-gray-800 dark:text-[var(--ftue-modal-body-text)] [&_p]:!text-[12px] [&_p]:!leading-[24px] [&>*]:!text-[12px] [&>*]:!leading-[24px]"
            style={{ lineHeight: '24px', fontSize: '12px' }}
          >
            {children}
          </div>

          {preferences && preferences.length > 0 && (
            <div
              data-slot="ftue-modal-preferences"
              className="-mx-6 bg-[var(--ftue-modal-preferences-bg)] px-6 py-6"
            >
              {preferences.map(preference => (
                <div
                  key={preference.id}
                  data-slot="ftue-modal-preference-item"
                  className="flex items-center gap-3 pt-[12px] pb-[12px] first:pt-0 last:pb-0"
                >
                  <Checkbox
                    id={preference.id}
                    checked={preference.checked}
                    onCheckedChange={checked =>
                      preference.onCheckedChange?.(checked === true)
                    }
                    className="!border-gray-800 dark:!border-white"
                  />
                  <div className="flex-1">
                    <label
                      htmlFor={preference.id}
                      className="mb-0 block cursor-pointer font-sans text-sm text-gray-800 dark:text-white"
                      style={{ fontSize: '14px' }}
                    >
                      {preference.label}
                    </label>
                    <p
                      className="font-mono text-gray-600 dark:text-[var(--ftue-modal-body-text)]"
                      style={{ fontSize: '12px' }}
                    >
                      {preference.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {(actionButton || (currentStep && totalSteps)) && (
            <div
              data-slot="ftue-modal-action"
              className={cn(
                'flex items-center [&_button]:!px-3 [&_button]:!py-2 [&_button]:!text-sm [&_button]:!font-medium [&_button[class*="bg-"]:not([class*="bg-transparent"])]:dark:!text-black [&_button[class*="outline"]]:dark:!text-white',
                currentStep && totalSteps ? 'justify-between' : 'justify-end'
              )}
            >
              {currentStep && totalSteps && (
                <div
                  data-slot="ftue-modal-step-tracker"
                  className="flex items-center gap-1.5"
                >
                  {Array.from({ length: totalSteps }, (_, index) => {
                    const step = index + 1;
                    const isActive = step === currentStep;
                    const isCompleted = step < currentStep;
                    return (
                      <div
                        key={step}
                        className={cn(
                          'h-1.5 w-1.5 rounded-full transition-colors',
                          isActive
                            ? 'bg-gray-800 dark:bg-white'
                            : isCompleted
                              ? 'bg-gray-400 dark:bg-gray-500'
                              : 'bg-gray-300 dark:bg-gray-600'
                        )}
                        aria-label={`Step ${step} of ${totalSteps}`}
                      />
                    );
                  })}
                </div>
              )}
              {actionButton}
            </div>
          )}

          {showCloseButton && (
            <DialogPrimitive.Close
              data-slot="ftue-modal-close"
              className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            >
              <XIcon />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export { FtueModal };
