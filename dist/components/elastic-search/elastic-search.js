import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import { useState, useCallback } from 'react';
import { validate as isValidUUID, v4 as uuidv4 } from 'uuid';
import { format, isValid, parseISO } from 'date-fns';
import { Add as Plus, Close as X, Search } from "../../icons";
import { Button } from "../button";
import { DateInput } from "../date-input";
import { Input } from "../input";
import { Label } from "../label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../select";
import { SearchOperator, SearchFieldType } from "./internals/query-builder";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var OPERATOR_LABELS = {
  equals: 'Equals',
  contains: 'Contains',
  starts_with: 'Starts with',
  ends_with: 'Ends with',
  greater_than: 'Greater than',
  less_than: 'Less than',
  between: 'Between',
  in: 'In'
};
var generateId = function generateId() {
  return uuidv4();
};
export var ElasticSearch = function ElasticSearch(t0) {
  var $ = _c(48);
  var t1 = t0.fields,
    onSearch = t0.onSearch,
    onError = t0.onError,
    t2 = t0.placeholder,
    t3 = t0.maxCriteria,
    t4 = t0.defaultCriteria;
  var t5;
  if ($[0] !== t1) {
    t5 = t1 === undefined ? [] : t1;
    $[0] = t1;
    $[1] = t5;
  } else {
    t5 = $[1];
  }
  var fields = t5;
  var placeholder = t2 === undefined ? "Search..." : t2;
  var maxCriteria = t3 === undefined ? 10 : t3;
  var t6;
  if ($[2] !== t4) {
    t6 = t4 === undefined ? [] : t4;
    $[2] = t4;
    $[3] = t6;
  } else {
    t6 = $[3];
  }
  var defaultCriteria = t6;
  var t7;
  if ($[4] !== defaultCriteria || $[5] !== fields) {
    t7 = function t7() {
      var _fields$0$operators;
      if (fields.length === 0) {
        return [];
      }
      if (defaultCriteria.length > 0) {
        return defaultCriteria.map(function (partial) {
          var _field$operators;
          var field = fields.find(function (f) {
            var _partial$field;
            return f.key === ((_partial$field = partial.field) === null || _partial$field === void 0 ? void 0 : _partial$field.key);
          }) || fields[0];
          return {
            id: generateId(),
            field: field,
            operator: partial.operator || ((_field$operators = field.operators) === null || _field$operators === void 0 ? void 0 : _field$operators[0]) || SearchOperator.EQUALS,
            value: partial.value || ""
          };
        });
      }
      return [{
        id: generateId(),
        field: fields[0],
        operator: ((_fields$0$operators = fields[0].operators) === null || _fields$0$operators === void 0 ? void 0 : _fields$0$operators[0]) || SearchOperator.EQUALS,
        value: ""
      }];
    };
    $[4] = defaultCriteria;
    $[5] = fields;
    $[6] = t7;
  } else {
    t7 = $[6];
  }
  var _useState = useState(t7),
    _useState2 = _slicedToArray(_useState, 2),
    criteria = _useState2[0],
    setCriteria = _useState2[1];
  var t8;
  if ($[7] !== criteria.length || $[8] !== fields[0] || $[9] !== fields.length || $[10] !== maxCriteria) {
    t8 = function t8() {
      if (criteria.length < maxCriteria && fields.length > 0) {
        setCriteria(function (prev) {
          var _fields$0$operators2;
          return [].concat(_toConsumableArray(prev), [{
            id: generateId(),
            field: fields[0],
            operator: ((_fields$0$operators2 = fields[0].operators) === null || _fields$0$operators2 === void 0 ? void 0 : _fields$0$operators2[0]) || SearchOperator.EQUALS,
            value: ""
          }]);
        });
      }
    };
    $[7] = criteria.length;
    $[8] = fields[0];
    $[9] = fields.length;
    $[10] = maxCriteria;
    $[11] = t8;
  } else {
    t8 = $[11];
  }
  var addCriteria = t8;
  var t9;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = function t9(id) {
      setCriteria(function (prev_0) {
        return prev_0.filter(function (c) {
          return c.id !== id;
        });
      });
    };
    $[12] = t9;
  } else {
    t9 = $[12];
  }
  var removeCriteria = t9;
  var t10;
  if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = function t10(id_0, updates) {
      setCriteria(function (prev_1) {
        return prev_1.map(function (c_0) {
          if (c_0.id === id_0) {
            var updatedCriteria = _objectSpread(_objectSpread({}, c_0), updates);
            if (updates.field && updates.field !== c_0.field) {
              var validOperators = updates.field.operators || [SearchOperator.EQUALS];
              if (!validOperators.includes(c_0.operator)) {
                updatedCriteria.operator = validOperators[0];
              }
              updatedCriteria.value = "";
            }
            return updatedCriteria;
          }
          return c_0;
        });
      });
    };
    $[13] = t10;
  } else {
    t10 = $[13];
  }
  var updateCriteria = t10;
  var validateCriterion = _temp2;
  var defaultErrorHandler = _temp4;
  var t11;
  if ($[14] !== criteria || $[15] !== onError || $[16] !== onSearch) {
    t11 = function t11() {
      var validCriteria = criteria.filter(_temp5);
      var errors_0 = [];
      var _iterator = _createForOfIteratorHelper(validCriteria),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var criterion_0 = _step.value;
          var error = validateCriterion(criterion_0);
          if (error) {
            errors_0.push(error);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (errors_0.length > 0) {
        var errorHandler = onError || defaultErrorHandler;
        errorHandler(errors_0);
        return;
      }
      var query = {
        criteria: validCriteria
      };
      onSearch(query);
    };
    $[14] = criteria;
    $[15] = onError;
    $[16] = onSearch;
    $[17] = t11;
  } else {
    t11 = $[17];
  }
  var handleSearch = t11;
  var t12;
  if ($[18] !== handleSearch) {
    t12 = function t12(e) {
      if (e.key === "Enter") {
        handleSearch();
      }
    };
    $[18] = handleSearch;
    $[19] = t12;
  } else {
    t12 = $[19];
  }
  var handleKeyDown = t12;
  var t13;
  if ($[20] !== handleKeyDown || $[21] !== placeholder) {
    t13 = function t13(criterion_1) {
      var field_1 = criterion_1.field,
        operator = criterion_1.operator,
        value_0 = criterion_1.value;
      if (field_1.type === "boolean" && field_1.options) {
        return /*#__PURE__*/_jsxs(Select, {
          value: String(value_0 || ""),
          onValueChange: function onValueChange(newValue) {
            return updateCriteria(criterion_1.id, {
              value: newValue === "true" ? true : newValue === "false" ? false : undefined
            });
          },
          children: [/*#__PURE__*/_jsx(SelectTrigger, {
            className: "w-full",
            children: /*#__PURE__*/_jsx(SelectValue, {
              placeholder: "Select...",
              className: "truncate"
            })
          }), /*#__PURE__*/_jsx(SelectContent, {
            children: field_1.options.map(_temp6)
          })]
        });
      }
      if (field_1.type === "date") {
        if (operator === SearchOperator.BETWEEN) {
          var values = Array.isArray(value_0) ? value_0 : ["", ""];
          var startDate = values[0] && values[0] !== "" ? isValid(parseISO(values[0])) ? parseISO(values[0]) : undefined : undefined;
          var endDate = values[1] && values[1] !== "" ? isValid(parseISO(values[1])) ? parseISO(values[1]) : undefined : undefined;
          return /*#__PURE__*/_jsxs("div", {
            className: "flex flex-1 space-x-2",
            children: [/*#__PURE__*/_jsx(DateInput, {
              formatOptions: {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
              },
              selected: startDate,
              onSelect: function onSelect(date) {
                var newValues = Array.isArray(value_0) ? _toConsumableArray(value_0) : ["", ""];
                newValues[0] = date ? format(date, "yyyy-MM-dd") : "";
                updateCriteria(criterion_1.id, {
                  value: newValues
                });
              },
              InputProps: {
                "aria-label": "".concat(field_1.label, " Start date")
              },
              placeholder: "Start date (mm/dd/yyyy)",
              className: "w-full"
            }), /*#__PURE__*/_jsx(DateInput, {
              formatOptions: {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
              },
              selected: endDate,
              onSelect: function onSelect(date_0) {
                var newValues_0 = Array.isArray(value_0) ? _toConsumableArray(value_0) : ["", ""];
                newValues_0[1] = date_0 ? format(date_0, "yyyy-MM-dd") : "";
                updateCriteria(criterion_1.id, {
                  value: newValues_0
                });
              },
              InputProps: {
                "aria-label": "".concat(field_1.label, " End date")
              },
              placeholder: "End date (mm/dd/yyyy)",
              className: "w-full"
            })]
          });
        } else {
          var dateValue = value_0 && typeof value_0 === "string" && value_0 !== "" ? isValid(parseISO(value_0)) ? parseISO(value_0) : undefined : undefined;
          return /*#__PURE__*/_jsx(DateInput, {
            formatOptions: {
              day: "2-digit",
              month: "2-digit",
              year: "numeric"
            },
            selected: dateValue,
            onSelect: function onSelect(date_1) {
              return updateCriteria(criterion_1.id, {
                value: date_1 ? format(date_1, "yyyy-MM-dd") : ""
              });
            },
            InputProps: {
              "aria-label": "".concat(field_1.label)
            },
            placeholder: "mm/dd/yyyy",
            className: "w-full"
          });
        }
      }
      if (field_1.type === "number") {
        if (operator === SearchOperator.BETWEEN) {
          var values_0 = Array.isArray(value_0) ? value_0 : [0, 0];
          return /*#__PURE__*/_jsxs("div", {
            className: "flex flex-1 space-x-2",
            children: [/*#__PURE__*/_jsx(Input, {
              type: "number",
              value: String(values_0[0] || ""),
              onChange: function onChange(e_0) {
                var newValues_1 = Array.isArray(value_0) ? _toConsumableArray(value_0) : [0, 0];
                newValues_1[0] = parseFloat(e_0.target.value) || 0;
                updateCriteria(criterion_1.id, {
                  value: newValues_1
                });
              },
              onKeyDown: handleKeyDown,
              "aria-label": "".concat(field_1.label, " minimum value")
            }), /*#__PURE__*/_jsx(Input, {
              type: "number",
              value: String(values_0[1] || ""),
              onChange: function onChange(e_1) {
                var newValues_2 = Array.isArray(value_0) ? _toConsumableArray(value_0) : [0, 0];
                newValues_2[1] = parseFloat(e_1.target.value) || 0;
                updateCriteria(criterion_1.id, {
                  value: newValues_2
                });
              },
              onKeyDown: handleKeyDown,
              "aria-label": "".concat(field_1.label, " maximum value")
            })]
          });
        }
        return /*#__PURE__*/_jsx(Input, {
          type: "number",
          value: String(value_0 || ""),
          onChange: function onChange(e_2) {
            return updateCriteria(criterion_1.id, {
              value: parseFloat(e_2.target.value) || 0
            });
          },
          onKeyDown: handleKeyDown,
          placeholder: "Enter number...",
          "aria-label": "".concat(field_1.label, " value"),
          className: "w-full"
        });
      }
      if (field_1.type === SearchFieldType.UUID) {
        if (operator === SearchOperator.IN) {
          var values_1 = Array.isArray(value_0) ? value_0.join(", ") : String(value_0 || "");
          return /*#__PURE__*/_jsx(Input, {
            type: "text",
            value: values_1,
            onChange: function onChange(e_3) {
              var newValues_3 = e_3.target.value.split(",").map(_temp7).filter(_temp8);
              updateCriteria(criterion_1.id, {
                value: newValues_3
              });
            },
            onKeyDown: handleKeyDown,
            placeholder: "Enter UUIDs separated by commas...",
            "aria-label": "".concat(field_1.label, " value"),
            className: "w-full"
          });
        }
        return /*#__PURE__*/_jsx(Input, {
          type: "text",
          value: String(value_0 || ""),
          onChange: function onChange(e_4) {
            return updateCriteria(criterion_1.id, {
              value: e_4.target.value
            });
          },
          onKeyDown: handleKeyDown,
          placeholder: "Enter UUID...",
          "aria-label": "".concat(field_1.label, " value"),
          className: "w-full"
        });
      }
      if (operator === SearchOperator.IN) {
        var values_2 = Array.isArray(value_0) ? value_0.join(", ") : String(value_0 || "");
        return /*#__PURE__*/_jsx(Input, {
          type: "text",
          value: values_2,
          onChange: function onChange(e_5) {
            var newValues_4 = e_5.target.value.split(",").map(_temp9).filter(_temp0);
            updateCriteria(criterion_1.id, {
              value: newValues_4
            });
          },
          onKeyDown: handleKeyDown,
          placeholder: "Enter values separated by commas...",
          "aria-label": "".concat(field_1.label, " value"),
          className: "w-full"
        });
      }
      return /*#__PURE__*/_jsx(Input, {
        type: "text",
        value: String(value_0 || ""),
        onChange: function onChange(e_6) {
          return updateCriteria(criterion_1.id, {
            value: e_6.target.value
          });
        },
        onKeyDown: handleKeyDown,
        placeholder: placeholder,
        "aria-label": "".concat(field_1.label, " value"),
        className: "w-full"
      });
    };
    $[20] = handleKeyDown;
    $[21] = placeholder;
    $[22] = t13;
  } else {
    t13 = $[22];
  }
  var renderValueInput = t13;
  if (fields.length === 0) {
    var _t;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
      _t = /*#__PURE__*/_jsx("div", {
        className: "p-4 text-center text-gray-500",
        children: "No search fields configured"
      });
      $[23] = _t;
    } else {
      _t = $[23];
    }
    return _t;
  }
  var t14;
  if ($[24] !== criteria || $[25] !== fields || $[26] !== renderValueInput) {
    var _t2;
    if ($[28] !== criteria.length || $[29] !== fields || $[30] !== renderValueInput) {
      _t2 = function _t2(criterion_2) {
        return /*#__PURE__*/_jsxs("div", {
          className: "flex flex-col gap-3 sm:flex-row sm:items-center",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "grid grid-cols-2 gap-3 sm:flex sm:flex-shrink-0 sm:gap-3",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "sm:w-44",
              children: [/*#__PURE__*/_jsx(Label, {
                htmlFor: "field-".concat(criterion_2.id),
                className: "sr-only",
                children: "Search field"
              }), /*#__PURE__*/_jsxs(Select, {
                value: criterion_2.field.key,
                onValueChange: function onValueChange(value_1) {
                  var newField = fields.find(function (f_0) {
                    return f_0.key === value_1;
                  });
                  if (newField) {
                    updateCriteria(criterion_2.id, {
                      field: newField
                    });
                  }
                },
                children: [/*#__PURE__*/_jsx(SelectTrigger, {
                  id: "field-".concat(criterion_2.id),
                  "aria-label": "Select search field",
                  className: "w-full",
                  children: /*#__PURE__*/_jsx(SelectValue, {
                    className: "truncate"
                  })
                }), /*#__PURE__*/_jsx(SelectContent, {
                  children: fields.map(_temp1)
                })]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "sm:w-32",
              children: [/*#__PURE__*/_jsx(Label, {
                htmlFor: "operator-".concat(criterion_2.id),
                className: "sr-only",
                children: "Search operator"
              }), /*#__PURE__*/_jsxs(Select, {
                value: criterion_2.operator,
                onValueChange: function onValueChange(value_2) {
                  return updateCriteria(criterion_2.id, {
                    operator: value_2
                  });
                },
                children: [/*#__PURE__*/_jsx(SelectTrigger, {
                  id: "operator-".concat(criterion_2.id),
                  "aria-label": "Select search operator",
                  className: "w-full",
                  children: /*#__PURE__*/_jsx(SelectValue, {
                    className: "truncate"
                  })
                }), /*#__PURE__*/_jsx(SelectContent, {
                  children: (criterion_2.field.operators || [SearchOperator.EQUALS]).map(_temp10)
                })]
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex flex-1 gap-3",
            children: [/*#__PURE__*/_jsx("div", {
              className: "min-w-0 flex-1",
              children: renderValueInput(criterion_2)
            }), criteria.length > 1 && /*#__PURE__*/_jsx("div", {
              className: "flex-shrink-0",
              children: /*#__PURE__*/_jsx(Button, {
                onClick: function onClick() {
                  return removeCriteria(criterion_2.id);
                },
                "aria-label": "Remove search criteria for ".concat(criterion_2.field.label),
                variant: "ghost",
                size: "icon",
                className: "h-10 w-10",
                children: /*#__PURE__*/_jsx(X, {
                  className: "h-4 w-4"
                })
              })
            })]
          })]
        }, criterion_2.id);
      };
      $[28] = criteria.length;
      $[29] = fields;
      $[30] = renderValueInput;
      $[31] = _t2;
    } else {
      _t2 = $[31];
    }
    t14 = criteria.map(_t2);
    $[24] = criteria;
    $[25] = fields;
    $[26] = renderValueInput;
    $[27] = t14;
  } else {
    t14 = $[27];
  }
  var t15;
  if ($[32] !== addCriteria || $[33] !== criteria.length || $[34] !== maxCriteria) {
    t15 = criteria.length < maxCriteria && /*#__PURE__*/_jsxs(Button, {
      onClick: addCriteria,
      "aria-label": "Add search criteria",
      variant: "outline",
      size: "sm",
      className: "flex items-center space-x-1",
      children: [/*#__PURE__*/_jsx(Plus, {
        className: "h-4 w-4"
      }), /*#__PURE__*/_jsx("span", {
        children: "Add criteria"
      })]
    });
    $[32] = addCriteria;
    $[33] = criteria.length;
    $[34] = maxCriteria;
    $[35] = t15;
  } else {
    t15 = $[35];
  }
  var t16;
  if ($[36] !== t15) {
    t16 = /*#__PURE__*/_jsx("div", {
      className: "flex space-x-2",
      children: t15
    });
    $[36] = t15;
    $[37] = t16;
  } else {
    t16 = $[37];
  }
  var t17;
  var t18;
  if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
    t17 = /*#__PURE__*/_jsx(Search, {
      className: "h-4 w-4"
    });
    t18 = /*#__PURE__*/_jsx("span", {
      children: "Search"
    });
    $[38] = t17;
    $[39] = t18;
  } else {
    t17 = $[38];
    t18 = $[39];
  }
  var t19;
  if ($[40] !== handleSearch) {
    t19 = /*#__PURE__*/_jsxs(Button, {
      onClick: handleSearch,
      "aria-label": "Execute search",
      className: "flex w-full items-center justify-center space-x-2 sm:w-auto",
      children: [t17, t18]
    });
    $[40] = handleSearch;
    $[41] = t19;
  } else {
    t19 = $[41];
  }
  var t20;
  if ($[42] !== t16 || $[43] !== t19) {
    t20 = /*#__PURE__*/_jsxs("div", {
      className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
      children: [t16, t19]
    });
    $[42] = t16;
    $[43] = t19;
    $[44] = t20;
  } else {
    t20 = $[44];
  }
  var t21;
  if ($[45] !== t14 || $[46] !== t20) {
    t21 = /*#__PURE__*/_jsxs("div", {
      className: "space-y-4",
      role: "search",
      "aria-label": "Advanced search form",
      children: [t14, t20]
    });
    $[45] = t14;
    $[46] = t20;
    $[47] = t21;
  } else {
    t21 = $[47];
  }
  return t21;
};
function _temp(v) {
  return v && !isValidUUID(v);
}
function _temp2(criterion) {
  var field_0 = criterion.field,
    value = criterion.value;
  if (field_0.type === SearchFieldType.UUID) {
    if (Array.isArray(value)) {
      var invalidUUIDs = value.filter(_temp);
      if (invalidUUIDs.length > 0) {
        return {
          field: field_0,
          message: "Invalid UUID(s): ".concat(invalidUUIDs.join(", "), ". Expected valid UUID format."),
          value: invalidUUIDs
        };
      }
    } else {
      if (value && !isValidUUID(value)) {
        return {
          field: field_0,
          message: "Invalid entry for ".concat(field_0.label, ". Expected valid UUID format."),
          value: value
        };
      }
    }
  }
  return null;
}
function _temp3(err) {
  return err.message;
}
function _temp4(errors) {
  var errorMessages = errors.map(_temp3).join("\n");
  alert("Validation Errors:\n\n".concat(errorMessages));
}
function _temp5(c_1) {
  if (Array.isArray(c_1.value)) {
    return c_1.value.length > 0;
  }
  return c_1.value !== "" && c_1.value !== null && c_1.value !== undefined;
}
function _temp6(option) {
  return /*#__PURE__*/_jsx(SelectItem, {
    value: String(option.value),
    children: option.label
  }, String(option.value));
}
function _temp7(v_0) {
  return v_0.trim();
}
function _temp8(v_1) {
  return v_1;
}
function _temp9(v_2) {
  return v_2.trim();
}
function _temp0(v_3) {
  return v_3;
}
function _temp1(field_2) {
  return /*#__PURE__*/_jsx(SelectItem, {
    value: field_2.key,
    children: field_2.label
  }, field_2.key);
}
function _temp10(operator_0) {
  return /*#__PURE__*/_jsx(SelectItem, {
    value: operator_0,
    children: OPERATOR_LABELS[operator_0]
  }, operator_0);
}

//# sourceMappingURL=elastic-search.js.map