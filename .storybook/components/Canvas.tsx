import {
  Unstyled,
  Canvas as StorybookCanvas,
} from '@storybook/addon-docs/blocks';
import { cn } from '../../src/lib/utils';

export function Canvas({ className, ...props }: any & { className?: string }) {
  return (
    <Unstyled>
      <div className={cn('my-6', className)}>
        <StorybookCanvas
          {...props}
          className="border-border dark:border-border rounded-lg border"
        />
      </div>
    </Unstyled>
  );
}
