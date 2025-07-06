import { parseSubcomponents } from './utils';
import { PropsTable } from './PropsTable';
import { Unstyled } from '@storybook/addon-docs/blocks';

interface SubcomponentPropTableProps {
  subcomponents?: Record<string, any>;
  className?: string;
}

export function SubcomponentPropTable({
  subcomponents,
  className,
}: SubcomponentPropTableProps) {
  if (!subcomponents) return null;

  const parsedSubcomponents = parseSubcomponents(subcomponents);

  if (parsedSubcomponents.length === 0) return null;

  return (
    <Unstyled>
      <div className={className}>
        {parsedSubcomponents.map(sub => (
          <div key={sub.name}>
            <h3 className="sb-unstyled text-foreground mt-6 mb-3 text-xl font-bold">
              {sub.name}
            </h3>
            {sub.description && (
              <p className="sb-unstyled text-muted-foreground mb-4 text-base">
                {sub.description}
              </p>
            )}
            <PropsTable
              title={`${sub.name} Props`}
              argTypes={subcomponents[sub.name].argTypes}
            />
          </div>
        ))}
      </div>
    </Unstyled>
  );
}
