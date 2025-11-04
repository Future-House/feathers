import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "type", "error"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { cn } from "../../lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
function Input(t0) {
  var $ = _c(13);
  var className;
  var error;
  var props;
  var type;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    type = _t.type;
    error = _t.error;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = error;
    $[3] = props;
    $[4] = type;
  } else {
    className = $[1];
    error = $[2];
    props = $[3];
    type = $[4];
  }
  var t1 = error && "ring-destructive/20 dark:ring-destructive/40 border-destructive";
  var t2;
  if ($[5] !== className || $[6] !== t1) {
    t2 = cn("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-border flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", t1, className);
    $[5] = className;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  var t3;
  if ($[8] !== error || $[9] !== props || $[10] !== t2 || $[11] !== type) {
    t3 = /*#__PURE__*/_jsx("input", _objectSpread({
      type: type,
      "data-slot": "input",
      "aria-invalid": error,
      className: t2
    }, props));
    $[8] = error;
    $[9] = props;
    $[10] = t2;
    $[11] = type;
    $[12] = t3;
  } else {
    t3 = $[12];
  }
  return t3;
}
export { Input };

//# sourceMappingURL=input.js.map