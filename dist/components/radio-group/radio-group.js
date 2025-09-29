import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "error"],
  _excluded2 = ["className", "error"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { RadioButton as CircleIcon } from "../../icons";
import { cn } from "../../lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
function RadioGroup(t0) {
  var $ = _c(10);
  var className;
  var error;
  var props;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    error = _t.error;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = error;
    $[3] = props;
  } else {
    className = $[1];
    error = $[2];
    props = $[3];
  }
  var t1;
  if ($[4] !== className) {
    t1 = cn("grid gap-3", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var t2;
  if ($[6] !== error || $[7] !== props || $[8] !== t1) {
    t2 = /*#__PURE__*/_jsx(RadioGroupPrimitive.Root, _objectSpread({
      "data-slot": "radio-group",
      "aria-invalid": error,
      className: t1
    }, props));
    $[6] = error;
    $[7] = props;
    $[8] = t1;
    $[9] = t2;
  } else {
    t2 = $[9];
  }
  return t2;
}
function RadioGroupItem(t0) {
  var $ = _c(12);
  var className;
  var error;
  var props;
  if ($[0] !== t0) {
    var _t2 = t0;
    className = _t2.className;
    error = _t2.error;
    props = _objectWithoutProperties(_t2, _excluded2);
    _t2;
    $[0] = t0;
    $[1] = className;
    $[2] = error;
    $[3] = props;
  } else {
    className = $[1];
    error = $[2];
    props = $[3];
  }
  var t1 = error && "ring-destructive/20 dark:ring-destructive/40 border-destructive";
  var t2;
  if ($[4] !== className || $[5] !== t1) {
    t2 = cn("border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", t1, className);
    $[4] = className;
    $[5] = t1;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  var t3;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/_jsx(RadioGroupPrimitive.Indicator, {
      "data-slot": "radio-group-indicator",
      className: "relative flex items-center justify-center",
      children: /*#__PURE__*/_jsx(CircleIcon, {
        className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
      })
    });
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  var t4;
  if ($[8] !== error || $[9] !== props || $[10] !== t2) {
    t4 = /*#__PURE__*/_jsx(RadioGroupPrimitive.Item, _objectSpread(_objectSpread({
      "data-slot": "radio-group-item",
      "aria-invalid": error,
      className: t2
    }, props), {}, {
      children: t3
    }));
    $[8] = error;
    $[9] = props;
    $[10] = t2;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  return t4;
}
export { RadioGroup, RadioGroupItem };

//# sourceMappingURL=radio-group.js.map