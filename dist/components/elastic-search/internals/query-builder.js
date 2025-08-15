import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
export var SearchOperator = /*#__PURE__*/function (SearchOperator) {
  SearchOperator["EQUALS"] = "equals";
  SearchOperator["CONTAINS"] = "contains";
  SearchOperator["STARTS_WITH"] = "starts_with";
  SearchOperator["ENDS_WITH"] = "ends_with";
  SearchOperator["GREATER_THAN"] = "greater_than";
  SearchOperator["LESS_THAN"] = "less_than";
  SearchOperator["BETWEEN"] = "between";
  SearchOperator["IN"] = "in";
  return SearchOperator;
}({});
export var SearchFieldType = /*#__PURE__*/function (SearchFieldType) {
  SearchFieldType["TEXT"] = "text";
  SearchFieldType["KEYWORD"] = "keyword";
  SearchFieldType["BOOLEAN"] = "boolean";
  SearchFieldType["DATE"] = "date";
  SearchFieldType["NUMBER"] = "number";
  SearchFieldType["UUID"] = "uuid";
  return SearchFieldType;
}({});
var SearchQueryBuilder = /*#__PURE__*/function () {
  function SearchQueryBuilder() {
    _classCallCheck(this, SearchQueryBuilder);
  }
  return _createClass(SearchQueryBuilder, null, [{
    key: "buildQuery",
    value: function buildQuery(query) {
      var _this = this;
      var mustClauses = [];
      var filterClauses = [];
      query.criteria.forEach(function (criterion) {
        var clause = _this.buildClauseForCriterion(criterion);
        if (clause) {
          if (_this.shouldUseFilter(criterion)) {
            filterClauses.push(clause);
          } else {
            mustClauses.push(clause);
          }
        }
      });
      var Query = {
        bool: {
          must: mustClauses.length > 0 ? mustClauses : [{
            match_all: {}
          }]
        }
      };
      if (filterClauses.length > 0) {
        Query.bool.filter = filterClauses;
      }
      return Query;
    }
  }, {
    key: "shouldUseFilter",
    value: function shouldUseFilter(criterion) {
      var field = criterion.field,
        operator = criterion.operator;
      if (field.type === 'keyword' && operator === 'equals') {
        return true;
      }
      if (field.type === 'boolean') {
        return true;
      }
      if ((field.type === 'date' || field.type === 'number') && ['greater_than', 'less_than', 'between'].includes(operator)) {
        return true;
      }
      return false;
    }
  }, {
    key: "buildClauseForCriterion",
    value: function buildClauseForCriterion(criterion) {
      var field = criterion.field,
        operator = criterion.operator,
        value = criterion.value;
      if (this.isEmptyValue(value)) {
        return null;
      }
      switch (field.type) {
        case SearchFieldType.TEXT:
          return this.buildTextClause(field.key, operator, value, field.fuzziness);
        case SearchFieldType.KEYWORD:
          return this.buildKeywordClause(field.key, operator, value);
        case SearchFieldType.BOOLEAN:
          return this.buildBooleanClause(field.key, value);
        case SearchFieldType.DATE:
          return this.buildDateClause(field.key, operator, value);
        case SearchFieldType.NUMBER:
          return this.buildNumberClause(field.key, operator, value);
        case SearchFieldType.UUID:
          return this.buildUUIDClause(field.key, operator, value);
        default:
          return null;
      }
    }
  }, {
    key: "buildTextClause",
    value: function buildTextClause(fieldKey, operator, value, fuzziness) {
      switch (operator) {
        case SearchOperator.EQUALS:
          return {
            match_phrase: _defineProperty({}, fieldKey, value)
          };
        case SearchOperator.CONTAINS:
          return {
            match: _defineProperty({}, fieldKey, {
              query: value,
              fuzziness: fuzziness || 'AUTO'
            })
          };
        case SearchOperator.STARTS_WITH:
          return {
            prefix: _defineProperty({}, "".concat(fieldKey, ".keyword"), value)
          };
        case SearchOperator.ENDS_WITH:
          return {
            wildcard: _defineProperty({}, "".concat(fieldKey, ".keyword"), "*".concat(value))
          };
        default:
          return {
            match: _defineProperty({}, fieldKey, value)
          };
      }
    }
  }, {
    key: "buildKeywordClause",
    value: function buildKeywordClause(fieldKey, operator, value) {
      switch (operator) {
        case SearchOperator.EQUALS:
          return {
            term: _defineProperty({}, fieldKey, value)
          };
        case SearchOperator.CONTAINS:
          return {
            wildcard: _defineProperty({}, fieldKey, "*".concat(value, "*"))
          };
        case SearchOperator.STARTS_WITH:
          return {
            prefix: _defineProperty({}, fieldKey, value)
          };
        case SearchOperator.ENDS_WITH:
          return {
            wildcard: _defineProperty({}, fieldKey, "*".concat(value))
          };
        case SearchOperator.IN:
          {
            var values = Array.isArray(value) ? value : [value];
            return {
              terms: _defineProperty({}, fieldKey, values)
            };
          }
        default:
          return {
            term: _defineProperty({}, fieldKey, value)
          };
      }
    }
  }, {
    key: "buildBooleanClause",
    value: function buildBooleanClause(fieldKey, value) {
      return {
        term: _defineProperty({}, fieldKey, value)
      };
    }
  }, {
    key: "buildDateClause",
    value: function buildDateClause(fieldKey, operator, value) {
      switch (operator) {
        case SearchOperator.EQUALS:
          return {
            term: _defineProperty({}, fieldKey, value)
          };
        case SearchOperator.GREATER_THAN:
          return {
            range: _defineProperty({}, fieldKey, {
              gt: value
            })
          };
        case SearchOperator.LESS_THAN:
          return {
            range: _defineProperty({}, fieldKey, {
              lt: value
            })
          };
        case SearchOperator.BETWEEN:
          {
            var values = Array.isArray(value) ? value : [value, value];
            return {
              range: _defineProperty({}, fieldKey, {
                gte: values[0],
                lte: values[1]
              })
            };
          }
        default:
          return {
            term: _defineProperty({}, fieldKey, value)
          };
      }
    }
  }, {
    key: "buildNumberClause",
    value: function buildNumberClause(fieldKey, operator, value) {
      switch (operator) {
        case SearchOperator.EQUALS:
          return {
            term: _defineProperty({}, fieldKey, value)
          };
        case SearchOperator.GREATER_THAN:
          return {
            range: _defineProperty({}, fieldKey, {
              gt: value
            })
          };
        case SearchOperator.LESS_THAN:
          return {
            range: _defineProperty({}, fieldKey, {
              lt: value
            })
          };
        case SearchOperator.BETWEEN:
          {
            var values = Array.isArray(value) ? value : [value, value];
            return {
              range: _defineProperty({}, fieldKey, {
                gte: values[0],
                lte: values[1]
              })
            };
          }
        default:
          return {
            term: _defineProperty({}, fieldKey, value)
          };
      }
    }
  }, {
    key: "buildUUIDClause",
    value: function buildUUIDClause(fieldKey, operator, value) {
      switch (operator) {
        case SearchOperator.EQUALS:
          return {
            term: _defineProperty({}, fieldKey, value)
          };
        case SearchOperator.IN:
          {
            var values = Array.isArray(value) ? value : [value];
            return {
              terms: _defineProperty({}, fieldKey, values)
            };
          }
        default:
          return {
            term: _defineProperty({}, fieldKey, value)
          };
      }
    }
  }, {
    key: "isEmptyValue",
    value: function isEmptyValue(value) {
      if (value === null || value === undefined || value === '') {
        return true;
      }
      if (Array.isArray(value)) {
        return value.length === 0 || value.every(function (v) {
          return v === '' || v === null || v === undefined;
        });
      }
      return false;
    }

    // utility to help structure the query into a menaingful api request
    // perhaps should be moved to the consuming app, pending
    // unknown because this varies based on consumer's design
  }, {
    key: "toAPIQuery",
    value: function toAPIQuery(query) {
      return {
        query: this.buildQuery(query),
        size: 50,
        sort: [{
          _score: {
            order: 'desc'
          }
        }, {
          created_at: {
            order: 'desc'
          }
        }]
      };
    }
  }]);
}();
export { SearchQueryBuilder as default };

//# sourceMappingURL=query-builder.js.map