import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "error"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check, Minus } from "../../icons";
import { cn } from "../../lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
// TODO: add indeterminate state support
// example: https://www.shadcnui-blocks.com/components/checkbox
function Checkbox(t0) {
  var $ = _c(15);
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
  var t1 = error && "ring-destructive/20 dark:ring-destructive/40 border-destructive";
  var t2;
  if ($[4] !== className || $[5] !== t1) {
    t2 = cn("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", t1, className);
    $[4] = className;
    $[5] = t1;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  var t3;
  if ($[7] !== props.checked || $[8] !== props.defaultChecked) {
    t3 = /*#__PURE__*/_jsx(CheckboxPrimitive.Indicator, {
      "data-slot": "checkbox-indicator",
      className: "flex items-center justify-center text-current transition-none",
      children: props.defaultChecked === "indeterminate" || props.checked === "indeterminate" ? /*#__PURE__*/_jsx(Minus, {
        className: "size-3.5"
      }) : /*#__PURE__*/_jsx(Check, {
        className: "size-3.5"
      })
    });
    $[7] = props.checked;
    $[8] = props.defaultChecked;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  var t4;
  if ($[10] !== error || $[11] !== props || $[12] !== t2 || $[13] !== t3) {
    t4 = /*#__PURE__*/_jsx(CheckboxPrimitive.Root, _objectSpread(_objectSpread({
      "data-slot": "checkbox",
      "data-state": "indeterminate",
      "aria-invalid": error,
      className: t2
    }, props), {}, {
      children: t3
    }));
    $[10] = error;
    $[11] = props;
    $[12] = t2;
    $[13] = t3;
    $[14] = t4;
  } else {
    t4 = $[14];
  }
  return t4;
}
export { Checkbox };

//# sourceMappingURL=checkbox.js.map