export enum SearchOperator {
  EQUALS = 'equals',
  CONTAINS = 'contains',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
  GREATER_THAN = 'greater_than',
  LESS_THAN = 'less_than',
  BETWEEN = 'between',
  IN = 'in',
}

export enum SearchFieldType {
  TEXT = 'text',
  KEYWORD = 'keyword',
  BOOLEAN = 'boolean',
  DATE = 'date',
  NUMBER = 'number',
  UUID = 'uuid',
}

export interface SearchField {
  key: string;
  label: string;
  type: SearchFieldType;
  operators?: SearchOperator[];
  options?: Array<{ value: string | number | boolean; label: string }>;
  fuzziness?: string | number;
}

interface QueryClause {
  [key: string]: unknown;
}

interface Query {
  bool: {
    must: QueryClause[];
    filter?: QueryClause[];
  };
}

export interface SearchCriteria {
  id: string;
  field: SearchField;
  operator: SearchOperator;
  value: string | number | boolean | string[] | number[] | undefined;
}

export interface SearchQuery {
  criteria: SearchCriteria[];
}

export default class SearchQueryBuilder {
  static buildQuery(query: SearchQuery): Query {
    const mustClauses: QueryClause[] = [];
    const filterClauses: QueryClause[] = [];

    query.criteria.forEach(criterion => {
      const clause = this.buildClauseForCriterion(criterion);
      if (clause) {
        if (this.shouldUseFilter(criterion)) {
          filterClauses.push(clause);
        } else {
          mustClauses.push(clause);
        }
      }
    });

    const Query: Query = {
      bool: {
        must: mustClauses.length > 0 ? mustClauses : [{ match_all: {} }],
      },
    };

    if (filterClauses.length > 0) {
      Query.bool.filter = filterClauses;
    }

    return Query;
  }

  private static shouldUseFilter(criterion: SearchCriteria): boolean {
    const { field, operator } = criterion;

    if (field.type === 'keyword' && operator === 'equals') {
      return true;
    }

    if (field.type === 'boolean') {
      return true;
    }

    if (
      (field.type === 'date' || field.type === 'number') &&
      ['greater_than', 'less_than', 'between'].includes(operator)
    ) {
      return true;
    }

    return false;
  }

  private static buildClauseForCriterion(
    criterion: SearchCriteria
  ): QueryClause | null {
    const { field, operator, value } = criterion;

    if (this.isEmptyValue(value)) {
      return null;
    }

    switch (field.type) {
      case SearchFieldType.TEXT:
        return this.buildTextClause(
          field.key,
          operator,
          value as string,
          field.fuzziness
        );

      case SearchFieldType.KEYWORD:
        return this.buildKeywordClause(
          field.key,
          operator,
          value as string | number | boolean | string[] | number[]
        );

      case SearchFieldType.BOOLEAN:
        return this.buildBooleanClause(field.key, value as boolean);

      case SearchFieldType.DATE:
        return this.buildDateClause(
          field.key,
          operator,
          value as string | string[]
        );

      case SearchFieldType.NUMBER:
        return this.buildNumberClause(
          field.key,
          operator,
          value as number | number[]
        );

      case SearchFieldType.UUID:
        return this.buildUUIDClause(
          field.key,
          operator,
          value as string | string[]
        );

      default:
        return null;
    }
  }

  private static buildTextClause(
    fieldKey: string,
    operator: SearchOperator,
    value: string,
    fuzziness?: string | number
  ): QueryClause {
    switch (operator) {
      case SearchOperator.EQUALS:
        return {
          match_phrase: {
            [fieldKey]: value,
          },
        };

      case SearchOperator.CONTAINS:
        return {
          match: {
            [fieldKey]: {
              query: value,
              fuzziness: fuzziness || 'AUTO',
            },
          },
        };

      case SearchOperator.STARTS_WITH:
        return {
          prefix: {
            [`${fieldKey}.keyword`]: value,
          },
        };

      case SearchOperator.ENDS_WITH:
        return {
          wildcard: {
            [`${fieldKey}.keyword`]: `*${value}`,
          },
        };

      default:
        return {
          match: {
            [fieldKey]: value,
          },
        };
    }
  }

  private static buildKeywordClause(
    fieldKey: string,
    operator: SearchOperator,
    value: string | number | boolean | string[] | number[]
  ): QueryClause {
    switch (operator) {
      case SearchOperator.EQUALS:
        return {
          term: {
            [fieldKey]: value,
          },
        };

      case SearchOperator.CONTAINS:
        return {
          wildcard: {
            [fieldKey]: `*${value}*`,
          },
        };

      case SearchOperator.STARTS_WITH:
        return {
          prefix: {
            [fieldKey]: value,
          },
        };

      case SearchOperator.ENDS_WITH:
        return {
          wildcard: {
            [fieldKey]: `*${value}`,
          },
        };

      case SearchOperator.IN: {
        const values = Array.isArray(value) ? value : [value];
        return {
          terms: {
            [fieldKey]: values,
          },
        };
      }

      default:
        return {
          term: {
            [fieldKey]: value,
          },
        };
    }
  }

  private static buildBooleanClause(
    fieldKey: string,
    value: boolean
  ): QueryClause {
    return {
      term: {
        [fieldKey]: value,
      },
    };
  }

  private static buildDateClause(
    fieldKey: string,
    operator: SearchOperator,
    value: string | string[]
  ): QueryClause {
    switch (operator) {
      case SearchOperator.EQUALS:
        return {
          term: {
            [fieldKey]: value,
          },
        };

      case SearchOperator.GREATER_THAN:
        return {
          range: {
            [fieldKey]: {
              gt: value,
            },
          },
        };

      case SearchOperator.LESS_THAN:
        return {
          range: {
            [fieldKey]: {
              lt: value,
            },
          },
        };

      case SearchOperator.BETWEEN: {
        const values = Array.isArray(value) ? value : [value, value];
        return {
          range: {
            [fieldKey]: {
              gte: values[0],
              lte: values[1],
            },
          },
        };
      }

      default:
        return {
          term: {
            [fieldKey]: value,
          },
        };
    }
  }

  private static buildNumberClause(
    fieldKey: string,
    operator: SearchOperator,
    value: number | number[]
  ): QueryClause {
    switch (operator) {
      case SearchOperator.EQUALS:
        return {
          term: {
            [fieldKey]: value,
          },
        };

      case SearchOperator.GREATER_THAN:
        return {
          range: {
            [fieldKey]: {
              gt: value,
            },
          },
        };

      case SearchOperator.LESS_THAN:
        return {
          range: {
            [fieldKey]: {
              lt: value,
            },
          },
        };

      case SearchOperator.BETWEEN: {
        const values = Array.isArray(value) ? value : [value, value];
        return {
          range: {
            [fieldKey]: {
              gte: values[0],
              lte: values[1],
            },
          },
        };
      }

      default:
        return {
          term: {
            [fieldKey]: value,
          },
        };
    }
  }

  private static buildUUIDClause(
    fieldKey: string,
    operator: SearchOperator,
    value: string | string[]
  ): QueryClause {
    switch (operator) {
      case SearchOperator.EQUALS:
        return {
          term: {
            [fieldKey]: value,
          },
        };

      case SearchOperator.IN: {
        const values = Array.isArray(value) ? value : [value];
        return {
          terms: {
            [fieldKey]: values,
          },
        };
      }

      default:
        return {
          term: {
            [fieldKey]: value,
          },
        };
    }
  }

  private static isEmptyValue(
    value: string | number | boolean | string[] | number[] | undefined
  ): boolean {
    if (value === null || value === undefined || value === '') {
      return true;
    }

    if (Array.isArray(value)) {
      return (
        value.length === 0 ||
        value.every(v => v === '' || v === null || v === undefined)
      );
    }

    return false;
  }

  // utility to help structure the query into a menaingful api request
  // perhaps should be moved to the consuming app, pending
  // unknown because this varies based on consumer's design
  static toAPIQuery(query: SearchQuery): Record<string, unknown> {
    return {
      query: this.buildQuery(query),
      size: 50,
      sort: [{ _score: { order: 'desc' } }, { created_at: { order: 'desc' } }],
    };
  }
}
