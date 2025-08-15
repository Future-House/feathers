import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { ElasticSearch, type ValidationError } from './elastic-search';
import type { SearchField, SearchQuery } from './internals/query-builder';
import { SearchOperator, SearchFieldType } from './internals/query-builder';
import SearchQueryBuilder from './internals/query-builder';

const meta = {
  title: 'Components/ElasticSearch',
  component: ElasticSearch,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    fields: {
      control: 'object',
      description: 'Array of search fields configuration',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for search inputs',
    },
    maxCriteria: {
      control: 'number',
      description: 'Maximum number of search criteria allowed',
    },
    onSearch: {
      action: 'searched',
      description: 'Callback function called when search is executed',
    },
  },
  args: {
    onSearch: () => {},
  },
} satisfies Meta<typeof ElasticSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

const WORLD_MODEL_FIELDS: SearchField[] = [
  {
    key: 'name',
    label: 'Name',
    type: SearchFieldType.TEXT,
    operators: [
      SearchOperator.CONTAINS,
      SearchOperator.EQUALS,
      SearchOperator.STARTS_WITH,
    ],
    fuzziness: 'AUTO',
  },
  {
    key: 'description',
    label: 'Description',
    type: SearchFieldType.TEXT,
    operators: [SearchOperator.CONTAINS, SearchOperator.EQUALS],
    fuzziness: 1,
  },
  {
    key: 'content',
    label: 'Content',
    type: SearchFieldType.TEXT,
    operators: [SearchOperator.CONTAINS, SearchOperator.EQUALS],
    fuzziness: 2,
  },
  {
    key: 'trajectory_id',
    label: 'Trajectory ID',
    type: SearchFieldType.UUID,
    operators: [SearchOperator.EQUALS, SearchOperator.IN],
  },
  {
    key: 'project_id',
    label: 'Project ID',
    type: SearchFieldType.UUID,
    operators: [SearchOperator.EQUALS, SearchOperator.IN],
  },
  {
    key: 'email',
    label: 'Email',
    type: SearchFieldType.KEYWORD,
    operators: [SearchOperator.EQUALS, SearchOperator.CONTAINS],
  },
  {
    key: 'enabled',
    label: 'Enabled',
    type: SearchFieldType.BOOLEAN,
    operators: [SearchOperator.EQUALS],
    options: [
      { value: true, label: 'True' },
      { value: false, label: 'False' },
    ],
  },
  {
    key: 'created_at',
    label: 'Created Date',
    type: SearchFieldType.DATE,
    operators: [
      SearchOperator.EQUALS,
      SearchOperator.GREATER_THAN,
      SearchOperator.LESS_THAN,
      SearchOperator.BETWEEN,
    ],
  },
];

interface SearchWithOutputProps {
  fields: SearchField[];
  placeholder?: string;
  maxCriteria?: number;
  defaultCriteria?: Array<{
    field?: { key: string };
    operator?: SearchOperator;
    value?: string | number | boolean | string[] | number[];
  }>;
  onError?: (errors: ValidationError[]) => void;
}

const SearchWithOutput = ({
  fields,
  placeholder,
  maxCriteria,
  defaultCriteria,
  onError,
}: SearchWithOutputProps) => {
  const [apiPayload, setApiPayload] = useState<string>('');
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const handleSearch = (query: SearchQuery) => {
    setErrors([]); // Clear previous errors
    const payload = SearchQueryBuilder.toAPIQuery(query);
    setApiPayload(JSON.stringify(payload, null, 2));
  };

  const handleError = (validationErrors: ValidationError[]) => {
    setErrors(validationErrors);
    setApiPayload(''); // Clear payload on error
    if (onError) {
      onError(validationErrors);
    }
  };

  return (
    <div className="space-y-4">
      <ElasticSearch
        fields={fields}
        placeholder={placeholder}
        maxCriteria={maxCriteria}
        defaultCriteria={defaultCriteria}
        onSearch={handleSearch}
        onError={handleError}
      />
      {errors.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-semibold text-red-600">Validation Errors:</h3>
          <div className="rounded-md bg-red-50 p-4 text-sm dark:bg-red-900/20">
            {errors.map((error, index) => (
              <div key={index} className="mb-2 last:mb-0">
                <strong>{error.field.label}:</strong> {error.message}
              </div>
            ))}
          </div>
        </div>
      )}
      {apiPayload && (
        <div className="space-y-2">
          <h3 className="font-semibold text-green-600">
            Generated API Payload:
          </h3>
          <pre className="overflow-x-auto rounded-md bg-gray-100 p-4 text-sm dark:bg-gray-800">
            <code>{apiPayload}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export const Default: Story = {
  render: args => <SearchWithOutput {...args} />,
  args: {
    fields: WORLD_MODEL_FIELDS,
    placeholder: 'Enter search value...',
    maxCriteria: 10,
  },
};

export const WithDefaultCriteria: Story = {
  render: args => <SearchWithOutput {...args} />,
  args: {
    fields: WORLD_MODEL_FIELDS,
    placeholder: 'Enter search value...',
    maxCriteria: 10,
    defaultCriteria: [
      {
        field: { key: 'name' },
        operator: SearchOperator.CONTAINS,
        value: 'sample',
      },
      {
        field: { key: 'enabled' },
        operator: SearchOperator.EQUALS,
        value: true,
      },
    ],
  },
};

export const LimitedCriteria: Story = {
  render: args => <SearchWithOutput {...args} />,
  args: {
    fields: WORLD_MODEL_FIELDS,
    placeholder: 'Enter search value...',
    maxCriteria: 3,
  },
};

export const SimpleFields: Story = {
  render: args => <SearchWithOutput {...args} />,
  args: {
    fields: [
      {
        key: 'title',
        label: 'Title',
        type: SearchFieldType.TEXT,
        operators: [SearchOperator.CONTAINS, SearchOperator.EQUALS],
      },
      {
        key: 'status',
        label: 'Status',
        type: SearchFieldType.KEYWORD,
        operators: [SearchOperator.EQUALS],
      },
      {
        key: 'priority',
        label: 'Priority',
        type: SearchFieldType.NUMBER,
        operators: [
          SearchOperator.EQUALS,
          SearchOperator.GREATER_THAN,
          SearchOperator.LESS_THAN,
        ],
      },
    ],
    placeholder: 'Search...',
    maxCriteria: 5,
  },
};

export const FuzzinessVariations: Story = {
  render: args => <SearchWithOutput {...args} />,
  args: {
    fields: [
      {
        key: 'exact_match',
        label: 'Exact Match (no fuzziness)',
        type: SearchFieldType.TEXT,
        operators: [SearchOperator.CONTAINS, SearchOperator.EQUALS],
        fuzziness: 0,
      },
      {
        key: 'auto_fuzzy',
        label: 'Auto Fuzziness',
        type: SearchFieldType.TEXT,
        operators: [SearchOperator.CONTAINS, SearchOperator.EQUALS],
        fuzziness: 'AUTO',
      },
      {
        key: 'fuzzy_1',
        label: 'Fuzziness Level 1',
        type: SearchFieldType.TEXT,
        operators: [SearchOperator.CONTAINS, SearchOperator.EQUALS],
        fuzziness: 1,
      },
      {
        key: 'fuzzy_2',
        label: 'Fuzziness Level 2',
        type: SearchFieldType.TEXT,
        operators: [SearchOperator.CONTAINS, SearchOperator.EQUALS],
        fuzziness: 2,
      },
    ],
    placeholder: 'Try searching with typos...',
    maxCriteria: 4,
  },
};

export const UUIDValidation: Story = {
  render: args => <SearchWithOutput {...args} />,
  args: {
    fields: [
      {
        key: 'user_id',
        label: 'User ID (UUID)',
        type: SearchFieldType.UUID,
        operators: [SearchOperator.EQUALS, SearchOperator.IN],
      },
      {
        key: 'session_id',
        label: 'Session ID (UUID)',
        type: SearchFieldType.UUID,
        operators: [SearchOperator.EQUALS, SearchOperator.IN],
      },
      {
        key: 'organization_id',
        label: 'Organization ID (UUID)',
        type: SearchFieldType.UUID,
        operators: [SearchOperator.EQUALS],
      },
    ],
    placeholder:
      'Try valid: 550e8400-e29b-41d4-a716-446655440000 or invalid UUIDs...',
    maxCriteria: 3,
    defaultCriteria: [
      {
        field: { key: 'user_id' },
        operator: SearchOperator.EQUALS,
        value: '550e8400-e29b-41d4-a716-446655440000',
      },
    ],
  },
};

export const CustomErrorHandling: Story = {
  render: args => (
    <SearchWithOutput
      {...args}
      onError={errors => {
        console.log('Custom error handler called:', errors);
        // Custom error handling - could show toast, log to service, etc.
      }}
    />
  ),
  args: {
    fields: [
      {
        key: 'user_id',
        label: 'User ID (UUID)',
        type: SearchFieldType.UUID,
        operators: [SearchOperator.EQUALS, SearchOperator.IN],
      },
      {
        key: 'name',
        label: 'Name',
        type: SearchFieldType.TEXT,
        operators: [SearchOperator.CONTAINS, SearchOperator.EQUALS],
      },
    ],
    placeholder: 'Try entering an invalid UUID like "not-a-uuid"...',
    maxCriteria: 2,
    defaultCriteria: [
      {
        field: { key: 'user_id' },
        operator: SearchOperator.EQUALS,
        value: 'invalid-uuid-example',
      },
    ],
  },
};

export const MobileResponsive: Story = {
  render: args => <SearchWithOutput {...args} />,
  args: {
    fields: WORLD_MODEL_FIELDS,
    placeholder: 'Search on mobile...',
    maxCriteria: 3,
    defaultCriteria: [
      {
        field: { key: 'name' },
        operator: SearchOperator.CONTAINS,
        value: 'Research',
      },
      {
        field: { key: 'status' },
        operator: SearchOperator.EQUALS,
        value: 'active',
      },
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    chromatic: {
      viewports: [320, 375, 414],
    },
  },
  decorators: [
    Story => (
      <div className="mx-auto max-w-[375px] p-4">
        <div className="mb-4">
          <h2 className="mb-2 text-lg font-semibold">Mobile Layout</h2>
          <p className="text-muted-foreground text-sm">
            Responsive layout: Dropdowns in 2-column grid above full-width
            search bar
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const TabletResponsive: Story = {
  render: args => <SearchWithOutput {...args} />,
  args: {
    fields: WORLD_MODEL_FIELDS,
    placeholder: 'Search on tablet...',
    maxCriteria: 3,
    defaultCriteria: [
      {
        field: { key: 'name' },
        operator: SearchOperator.CONTAINS,
        value: 'Sample',
      },
    ],
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
  decorators: [
    Story => (
      <div className="mx-auto max-w-[768px] p-4">
        <div className="mb-4">
          <h2 className="mb-2 text-lg font-semibold">Tablet Layout</h2>
          <p className="text-muted-foreground text-sm">
            Mid-size responsive view
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};
