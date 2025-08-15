import { useState, useCallback } from 'react';
import { validate as isValidUUID, v4 as uuidv4 } from 'uuid';

import { Plus, X, Search } from '@/icons';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/select';

import type { FC, KeyboardEvent } from 'react';
import type {
  SearchField,
  SearchQuery,
  SearchCriteria,
} from './internals/query-builder';
import { SearchOperator, SearchFieldType } from './internals/query-builder';

export interface ValidationError {
  field: SearchField;
  message: string;
  value: unknown;
}

export interface ElasticSearchProps {
  fields: SearchField[];
  onSearch: (query: SearchQuery) => void;
  onError?: (errors: ValidationError[]) => void;
  placeholder?: string;
  maxCriteria?: number;
  defaultCriteria?: Array<{
    field?: { key: string };
    operator?: SearchOperator;
    value?: string | number | boolean | string[] | number[];
  }>;
}

const OPERATOR_LABELS: Record<SearchOperator, string> = {
  equals: 'Equals',
  contains: 'Contains',
  starts_with: 'Starts with',
  ends_with: 'Ends with',
  greater_than: 'Greater than',
  less_than: 'Less than',
  between: 'Between',
  in: 'In',
};

const generateId = () => uuidv4();

export const ElasticSearch: FC<ElasticSearchProps> = ({
  fields = [],
  onSearch,
  onError,
  placeholder = 'Search...',
  maxCriteria = 10,
  defaultCriteria = [],
}) => {
  const [criteria, setCriteria] = useState<SearchCriteria[]>(() => {
    if (fields.length === 0) {
      return [];
    }

    if (defaultCriteria.length > 0) {
      return defaultCriteria.map(partial => {
        const field =
          fields.find(f => f.key === partial.field?.key) || fields[0];
        return {
          id: generateId(),
          field,
          operator:
            partial.operator || field.operators?.[0] || SearchOperator.EQUALS,
          value: partial.value || '',
        };
      });
    }
    return [
      {
        id: generateId(),
        field: fields[0],
        operator: fields[0].operators?.[0] || SearchOperator.EQUALS,
        value: '',
      },
    ];
  });

  const addCriteria = useCallback(() => {
    if (criteria.length < maxCriteria && fields.length > 0) {
      setCriteria(prev => [
        ...prev,
        {
          id: generateId(),
          field: fields[0],
          operator: fields[0].operators?.[0] || SearchOperator.EQUALS,
          value: '',
        },
      ]);
    }
  }, [criteria.length, maxCriteria, fields]);

  const removeCriteria = useCallback((id: string) => {
    setCriteria(prev => prev.filter(c => c.id !== id));
  }, []);

  const updateCriteria = useCallback(
    (id: string, updates: Partial<SearchCriteria>) => {
      setCriteria(prev =>
        prev.map(c => {
          if (c.id === id) {
            const updatedCriteria = { ...c, ...updates };

            if (updates.field && updates.field !== c.field) {
              const validOperators = updates.field.operators || [
                SearchOperator.EQUALS,
              ];
              if (!validOperators.includes(c.operator)) {
                updatedCriteria.operator = validOperators[0];
              }
              updatedCriteria.value = '';
            }

            return updatedCriteria;
          }
          return c;
        })
      );
    },
    []
  );

  const validateCriterion = useCallback(
    (criterion: SearchCriteria): ValidationError | null => {
      const { field, value } = criterion;

      if (field.type === SearchFieldType.UUID) {
        if (Array.isArray(value)) {
          const invalidUUIDs = (value as string[]).filter(
            v => v && !isValidUUID(v)
          );
          if (invalidUUIDs.length > 0) {
            return {
              field,
              message: `Invalid UUID(s): ${invalidUUIDs.join(', ')}. Expected valid UUID format.`,
              value: invalidUUIDs,
            };
          }
        } else if (value && !isValidUUID(value as string)) {
          return {
            field,
            message: `Invalid entry for ${field.label}. Expected valid UUID format.`,
            value,
          };
        }
      }

      return null;
    },
    []
  );

  const defaultErrorHandler = useCallback((errors: ValidationError[]) => {
    const errorMessages = errors.map(err => err.message).join('\n');
    alert(`Validation Errors:\n\n${errorMessages}`);
  }, []);

  const handleSearch = useCallback(() => {
    const validCriteria = criteria.filter(c => {
      if (Array.isArray(c.value)) {
        return c.value.length > 0;
      }
      return c.value !== '' && c.value !== null && c.value !== undefined;
    });

    const errors: ValidationError[] = [];
    for (const criterion of validCriteria) {
      const error = validateCriterion(criterion);
      if (error) {
        errors.push(error);
      }
    }

    if (errors.length > 0) {
      const errorHandler = onError || defaultErrorHandler;
      errorHandler(errors);
      return;
    }

    const query: SearchQuery = { criteria: validCriteria };
    onSearch(query);
  }, [criteria, onSearch, onError, validateCriterion, defaultErrorHandler]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    },
    [handleSearch]
  );

  const renderValueInput = useCallback(
    (criterion: SearchCriteria) => {
      const { field, operator, value } = criterion;

      if (field.type === 'boolean' && field.options) {
        return (
          <Select
            value={String(value || '')}
            onValueChange={newValue =>
              updateCriteria(criterion.id, {
                value:
                  newValue === 'true'
                    ? true
                    : newValue === 'false'
                      ? false
                      : undefined,
              })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select..." className="truncate" />
            </SelectTrigger>
            <SelectContent>
              {field.options.map(option => (
                <SelectItem
                  key={String(option.value)}
                  value={String(option.value)}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      }

      if (field.type === 'date') {
        if (operator === SearchOperator.BETWEEN) {
          const values = Array.isArray(value) ? (value as string[]) : ['', ''];
          return (
            <div className="flex flex-1 space-x-2">
              <Input
                type="date"
                value={String(values[0] || '')}
                onChange={e => {
                  const newValues = Array.isArray(value)
                    ? [...(value as string[])]
                    : ['', ''];
                  newValues[0] = e.target.value;
                  updateCriteria(criterion.id, { value: newValues });
                }}
                onKeyDown={handleKeyDown}
                aria-label={`${field.label} start date`}
              />
              <Input
                type="date"
                value={String(values[1] || '')}
                onChange={e => {
                  const newValues = Array.isArray(value)
                    ? [...(value as string[])]
                    : ['', ''];
                  newValues[1] = e.target.value;
                  updateCriteria(criterion.id, { value: newValues });
                }}
                onKeyDown={handleKeyDown}
                aria-label={`${field.label} end date`}
              />
            </div>
          );
        }
        return (
          <Input
            type="date"
            value={String(value || '')}
            onChange={e =>
              updateCriteria(criterion.id, { value: e.target.value })
            }
            onKeyDown={handleKeyDown}
            aria-label={`${field.label} value`}
            className="w-full"
          />
        );
      }

      if (field.type === 'number') {
        if (operator === SearchOperator.BETWEEN) {
          const values = Array.isArray(value) ? (value as number[]) : [0, 0];
          return (
            <div className="flex flex-1 space-x-2">
              <Input
                type="number"
                value={String(values[0] || '')}
                onChange={e => {
                  const newValues = Array.isArray(value)
                    ? [...(value as number[])]
                    : [0, 0];
                  newValues[0] = parseFloat(e.target.value) || 0;
                  updateCriteria(criterion.id, { value: newValues });
                }}
                onKeyDown={handleKeyDown}
                aria-label={`${field.label} minimum value`}
              />
              <Input
                type="number"
                value={String(values[1] || '')}
                onChange={e => {
                  const newValues = Array.isArray(value)
                    ? [...(value as number[])]
                    : [0, 0];
                  newValues[1] = parseFloat(e.target.value) || 0;
                  updateCriteria(criterion.id, { value: newValues });
                }}
                onKeyDown={handleKeyDown}
                aria-label={`${field.label} maximum value`}
              />
            </div>
          );
        }
        return (
          <Input
            type="number"
            value={String(value || '')}
            onChange={e =>
              updateCriteria(criterion.id, {
                value: parseFloat(e.target.value) || 0,
              })
            }
            onKeyDown={handleKeyDown}
            placeholder="Enter number..."
            aria-label={`${field.label} value`}
            className="w-full"
          />
        );
      }

      if (field.type === SearchFieldType.UUID) {
        if (operator === SearchOperator.IN) {
          const values = Array.isArray(value)
            ? (value as string[]).join(', ')
            : String(value || '');
          return (
            <Input
              type="text"
              value={values}
              onChange={e => {
                const newValues = e.target.value
                  .split(',')
                  .map(v => v.trim())
                  .filter(v => v);
                updateCriteria(criterion.id, { value: newValues });
              }}
              onKeyDown={handleKeyDown}
              placeholder="Enter UUIDs separated by commas..."
              aria-label={`${field.label} value`}
              className="w-full"
            />
          );
        }
        return (
          <Input
            type="text"
            value={String(value || '')}
            onChange={e =>
              updateCriteria(criterion.id, { value: e.target.value })
            }
            onKeyDown={handleKeyDown}
            placeholder="Enter UUID..."
            aria-label={`${field.label} value`}
            className="w-full"
          />
        );
      }

      if (operator === SearchOperator.IN) {
        const values = Array.isArray(value)
          ? (value as string[]).join(', ')
          : String(value || '');
        return (
          <Input
            type="text"
            value={values}
            onChange={e => {
              const newValues = e.target.value
                .split(',')
                .map(v => v.trim())
                .filter(v => v);
              updateCriteria(criterion.id, { value: newValues });
            }}
            onKeyDown={handleKeyDown}
            placeholder="Enter values separated by commas..."
            aria-label={`${field.label} value`}
            className="w-full"
          />
        );
      }

      return (
        <Input
          type="text"
          value={String(value || '')}
          onChange={e =>
            updateCriteria(criterion.id, { value: e.target.value })
          }
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-label={`${field.label} value`}
          className="w-full"
        />
      );
    },
    [handleKeyDown, placeholder, updateCriteria]
  );

  if (fields.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No search fields configured
      </div>
    );
  }

  return (
    <div className="space-y-4" role="search" aria-label="Advanced search form">
      {criteria.map(criterion => (
        <div key={criterion.id} className="flex items-center space-x-3">
          <div className="w-44 shrink-0">
            <Label htmlFor={`field-${criterion.id}`} className="sr-only">
              Search field
            </Label>
            <Select
              value={criterion.field.key}
              onValueChange={value => {
                const newField = fields.find(f => f.key === value);
                if (newField) {
                  updateCriteria(criterion.id, { field: newField });
                }
              }}
            >
              <SelectTrigger
                id={`field-${criterion.id}`}
                aria-label="Select search field"
                className="w-full"
              >
                <SelectValue className="truncate" />
              </SelectTrigger>
              <SelectContent>
                {fields.map(field => (
                  <SelectItem key={field.key} value={field.key}>
                    {field.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-32 shrink-0">
            <Label htmlFor={`operator-${criterion.id}`} className="sr-only">
              Search operator
            </Label>
            <Select
              value={criterion.operator}
              onValueChange={value =>
                updateCriteria(criterion.id, {
                  operator: value as SearchOperator,
                })
              }
            >
              <SelectTrigger
                id={`operator-${criterion.id}`}
                aria-label="Select search operator"
                className="w-full"
              >
                <SelectValue className="truncate" />
              </SelectTrigger>
              <SelectContent>
                {(criterion.field.operators || [SearchOperator.EQUALS]).map(
                  operator => (
                    <SelectItem key={operator} value={operator}>
                      {OPERATOR_LABELS[operator]}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="min-w-0 flex-1">{renderValueInput(criterion)}</div>

          {criteria.length > 1 && (
            <div className="w-10 shrink-0">
              <Button
                onClick={() => removeCriteria(criterion.id)}
                aria-label={`Remove search criteria for ${criterion.field.label}`}
                variant="ghost"
                size="icon"
                className="w-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      ))}

      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          {criteria.length < maxCriteria && (
            <Button
              onClick={addCriteria}
              aria-label="Add search criteria"
              variant="outline"
              size="sm"
              className="flex items-center space-x-1"
            >
              <Plus className="h-4 w-4" />
              <span>Add criteria</span>
            </Button>
          )}
        </div>

        <Button
          onClick={handleSearch}
          aria-label="Execute search"
          className="flex items-center space-x-2"
        >
          <Search className="h-4 w-4" />
          <span>Search</span>
        </Button>
      </div>
    </div>
  );
};
