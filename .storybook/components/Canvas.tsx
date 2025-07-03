import {
  Unstyled,
  Canvas as StorybookCanvas,
} from '@storybook/addon-docs/blocks';
import { cn } from '../../src/lib/utils';

export function Canvas({ className, ...props }: any & { className?: string }) {
  return (
    <Unstyled>
      <div className={cn('[&_.sb-unstyled>div]:bg-background my-6', className)}>
        <StorybookCanvas
          {...props}
          className="border-border bg-background [&_.sb-story]:bg-background dark:border-border dark:bg-background dark:[&_.sb-story]:bg-background rounded-lg border [&_.sb-story]:!p-8"
        />
      </div>
    </Unstyled>
  );
}
