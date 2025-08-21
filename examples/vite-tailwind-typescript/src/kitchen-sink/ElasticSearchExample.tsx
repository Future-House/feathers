import { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  ElasticSearch,
  SearchOperator,
  SearchFieldType,
} from '@future-house/feathers';
import type { SearchField, SearchQuery } from '@future-house/feathers';

const SAMPLE_FIELDS: SearchField[] = [
  {
    key: 'name',
    label: 'Product Name',
    type: SearchFieldType.TEXT,
    operators: [
      SearchOperator.CONTAINS,
      SearchOperator.EQUALS,
      SearchOperator.STARTS_WITH,
    ],
    fuzziness: 'AUTO',
  },
  {
    key: 'category',
    label: 'Category',
    type: SearchFieldType.KEYWORD,
    operators: [SearchOperator.EQUALS, SearchOperator.IN],
  },
  {
    key: 'price',
    label: 'Price',
    type: SearchFieldType.NUMBER,
    operators: [
      SearchOperator.EQUALS,
      SearchOperator.GREATER_THAN,
      SearchOperator.LESS_THAN,
      SearchOperator.BETWEEN,
    ],
  },
  {
    key: 'created_date',
    label: 'Created Date',
    type: SearchFieldType.DATE,
    operators: [SearchOperator.EQUALS, SearchOperator.BETWEEN],
  },
  {
    key: 'product_id',
    label: 'Product ID (UUID)',
    type: SearchFieldType.UUID,
    operators: [SearchOperator.EQUALS, SearchOperator.IN],
  },
  {
    key: 'active',
    label: 'Active Status',
    type: SearchFieldType.BOOLEAN,
    operators: [SearchOperator.EQUALS],
    options: [
      { value: true, label: 'Active' },
      { value: false, label: 'Inactive' },
    ],
  },
];

const USER_FIELDS: SearchField[] = [
  {
    key: 'username',
    label: 'Username',
    type: SearchFieldType.TEXT,
    operators: [SearchOperator.CONTAINS, SearchOperator.EQUALS],
  },
  {
    key: 'email',
    label: 'Email',
    type: SearchFieldType.TEXT,
    operators: [SearchOperator.CONTAINS, SearchOperator.EQUALS],
  },
  {
    key: 'role',
    label: 'Role',
    type: SearchFieldType.KEYWORD,
    operators: [SearchOperator.EQUALS, SearchOperator.IN],
  },
  {
    key: 'age',
    label: 'Age',
    type: SearchFieldType.NUMBER,
    operators: [
      SearchOperator.EQUALS,
      SearchOperator.GREATER_THAN,
      SearchOperator.LESS_THAN,
    ],
  },
];

export default function ElasticSearchExample() {
  const [searchResults, setSearchResults] = useState<SearchQuery[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSearch = (query: SearchQuery) => {
    console.log('Search query:', query);
    setSearchResults(prev => [query, ...prev.slice(0, 4)]); // Keep last 5 searches
    setErrors([]);
  };

  const handleError = (validationErrors: any[]) => {
    const errorMessages = validationErrors.map(err => err.message);
    setErrors(errorMessages);
    console.error('Validation errors:', validationErrors);
  };

  const clearResults = () => {
    setSearchResults([]);
    setErrors([]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>ElasticSearch Component</CardTitle>
        <CardDescription>
          Advanced search interface for building complex Elasticsearch queries
          with multiple field types and operators
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Basic Example */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">Product Search</h3>
          <p className="text-sm text-gray-600">
            Search products with various field types including text, numbers,
            dates, UUIDs, and booleans.
          </p>
          <ElasticSearch
            fields={SAMPLE_FIELDS}
            onSearch={handleSearch}
            onError={handleError}
            placeholder="Enter search value..."
            maxCriteria={5}
            defaultCriteria={[
              {
                field: { key: 'name' },
                operator: SearchOperator.CONTAINS,
                value: 'laptop',
              },
            ]}
          />
        </div>

        {/* Simple Fields Example */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            User Search (Limited Fields)
          </h3>
          <p className="text-sm text-gray-600">
            Simpler search interface with fewer field options for user
            management.
          </p>
          <ElasticSearch
            fields={USER_FIELDS}
            onSearch={handleSearch}
            onError={handleError}
            placeholder="Search users..."
            maxCriteria={3}
          />
        </div>

        {/* Error Display */}
        {errors.length > 0 && (
          <div className="rounded-md border border-red-200 bg-red-50 p-4">
            <h4 className="mb-2 text-sm font-medium text-red-800">
              Validation Errors:
            </h4>
            <ul className="space-y-1 text-sm text-red-700">
              {errors.map((error, index) => (
                <li key={index}>• {error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Search Results Display */}
        {searchResults.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-700">
                Recent Search Queries
              </h3>
              <Button onClick={clearResults} variant="outline" size="sm">
                Clear Results
              </Button>
            </div>
            <div className="space-y-3">
              {searchResults.map((query, index) => (
                <div key={index} className="rounded-md border p-4">
                  <div className="mb-2 text-xs text-gray-500">
                    Query #{searchResults.length - index}
                  </div>
                  <pre className="max-h-40 overflow-auto rounded p-3 text-sm">
                    {JSON.stringify(query, null, 2)}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Feature List */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            ElasticSearch Component Features
          </h3>
          <div className="rounded-md p-4 text-sm">
            <div className="grid grid-cols-1 gap-x-4 gap-y-1 md:grid-cols-2">
              <div className="col-span-full mb-2 font-medium">Field Types:</div>
              <div>• TEXT (with fuzziness support)</div>
              <div>• KEYWORD (exact matching)</div>
              <div>• NUMBER (with range support)</div>
              <div>• DATE (with date ranges)</div>
              <div>• UUID (with validation)</div>
              <div>• BOOLEAN (with custom options)</div>

              <div className="col-span-full mt-4 mb-2 font-medium">
                Operators:
              </div>
              <div>• EQUALS, CONTAINS, STARTS_WITH</div>
              <div>• GREATER_THAN, LESS_THAN, BETWEEN</div>
              <div>• IN (for multiple values)</div>
              <div>• Field-specific operator support</div>

              <div className="col-span-full mt-4 mb-2 font-medium">
                Features:
              </div>
              <div>• Multiple search criteria</div>
              <div>• Responsive mobile layout</div>
              <div>• UUID validation with error handling</div>
              <div>• Fuzzy text search configuration</div>
              <div>• Type-safe with TypeScript enums</div>
              <div>• Accessible keyboard navigation</div>
            </div>
          </div>
        </div>

        {/* UUID Examples */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium">UUID Testing</h3>
          <p className="text-sm">
            Try entering these examples in the Product ID field above:
          </p>
          <div className="space-y-2 rounded-md p-4 text-sm">
            <div>
              <span className="font-medium text-green-600">Valid UUID:</span>{' '}
              <code className="rounded px-2 py-1 text-xs">
                550e8400-e29b-41d4-a716-446655440000
              </code>
            </div>
            <div>
              <span className="font-medium text-red-600">Invalid UUID:</span>{' '}
              <code className="rounded px-2 py-1 text-xs">
                not-a-valid-uuid
              </code>
            </div>
            <div className="mt-2 text-xs text-gray-600">
              Invalid UUIDs will trigger validation errors that appear above.
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
