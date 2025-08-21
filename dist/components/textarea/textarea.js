import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "error"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { cn } from "../../lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
function Textarea(t0) {
  var $ = _c(11);
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
    t2 = cn("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t1, className);
    $[4] = className;
    $[5] = t1;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  var t3;
  if ($[7] !== error || $[8] !== props || $[9] !== t2) {
    t3 = /*#__PURE__*/_jsx("textarea", _objectSpread({
      "data-slot": "textarea",
      "aria-invalid": error,
      className: t2
    }, props));
    $[7] = error;
    $[8] = props;
    $[9] = t2;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  return t3;
}
export { Textarea };

//# sourceMappingURL=textarea.js.map