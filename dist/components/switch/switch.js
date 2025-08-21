import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "error"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from "../../lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
function Switch(t0) {
  var $ = _c(12);
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
    t2 = cn("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", t1, className);
    $[4] = className;
    $[5] = t1;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  var t3;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/_jsx(SwitchPrimitive.Thumb, {
      "data-slot": "switch-thumb",
      className: cn("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")
    });
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  var t4;
  if ($[8] !== error || $[9] !== props || $[10] !== t2) {
    t4 = /*#__PURE__*/_jsx(SwitchPrimitive.Root, _objectSpread(_objectSpread({
      "data-slot": "switch",
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
export { Switch };

//# sourceMappingURL=switch.js.map