import type { FC } from 'react';
import type { SearchField, SearchQuery } from './internals/query-builder';
import { SearchOperator } from './internals/query-builder';
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
        field?: {
            key: string;
        };
        operator?: SearchOperator;
        value?: string | number | boolean | string[] | number[];
    }>;
}
export declare const ElasticSearch: FC<ElasticSearchProps>;
//# sourceMappingURL=elastic-search.d.ts.map