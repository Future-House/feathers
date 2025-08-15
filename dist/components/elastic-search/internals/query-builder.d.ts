export declare enum SearchOperator {
    EQUALS = "equals",
    CONTAINS = "contains",
    STARTS_WITH = "starts_with",
    ENDS_WITH = "ends_with",
    GREATER_THAN = "greater_than",
    LESS_THAN = "less_than",
    BETWEEN = "between",
    IN = "in"
}
export declare enum SearchFieldType {
    TEXT = "text",
    KEYWORD = "keyword",
    BOOLEAN = "boolean",
    DATE = "date",
    NUMBER = "number",
    UUID = "uuid"
}
export interface SearchField {
    key: string;
    label: string;
    type: SearchFieldType;
    operators?: SearchOperator[];
    options?: Array<{
        value: string | number | boolean;
        label: string;
    }>;
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
    static buildQuery(query: SearchQuery): Query;
    private static shouldUseFilter;
    private static buildClauseForCriterion;
    private static buildTextClause;
    private static buildKeywordClause;
    private static buildBooleanClause;
    private static buildDateClause;
    private static buildNumberClause;
    private static buildUUIDClause;
    private static isEmptyValue;
    static toAPIQuery(query: SearchQuery): Record<string, unknown>;
}
export {};
//# sourceMappingURL=query-builder.d.ts.map