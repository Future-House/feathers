import * as React from 'react';
import { Checkmark as Check, ChevronSort as ChevronsUpDown } from '@/icons';

import { cn } from '@/lib/utils';
import { Button } from '@/components/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  className?: string;
  disabled?: boolean;
  width?: string;
}

function Combobox({
  options,
  value,
  onValueChange,
  placeholder = 'Select option...',
  searchPlaceholder = 'Search...',
  emptyMessage = 'No option found.',
  className,
  disabled = false,
  width = 'w-[200px]',
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState('');

  const currentValue = value !== undefined ? value : internalValue;

  const handleValueChange = (newValue: string) => {
    const finalValue = currentValue === newValue ? '' : newValue;

    if (value === undefined) {
      setInternalValue(finalValue);
    }

    onValueChange?.(finalValue);
    setOpen(false);
  };

  const selectedOption = options.find(option => option.value === currentValue);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(width, 'justify-between', className)}
          disabled={disabled}
        >
          {selectedOption ? selectedOption.label : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn(width, 'p-0')}>
        <Command>
          <CommandInput placeholder={searchPlaceholder} className="h-9" />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {options.map(option => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={handleValueChange}
                  disabled={option.disabled}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      currentValue === option.value
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export { Combobox };
