import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "variant", "color"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from "../../lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
var alertVariants = cva('relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current', {
  variants: {
    variant: {
      default: 'bg-card text-card-foreground',
      destructive: 'text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90'
    },
    color: {
      success: 'text-green-600 bg-green-600/10 dark:bg-green-600/20 border-green-600/20 dark:border-green-600/30 [&>svg]:text-current *:data-[slot=alert-description]:text-green-600/90',
      warning: 'text-amber-600 bg-amber-600/10 dark:bg-amber-600/20 border-amber-600/20 dark:border-amber-600/30 [&>svg]:text-current *:data-[slot=alert-description]:text-amber-600/90',
      info: 'text-blue-600 bg-blue-600/10 dark:bg-blue-600/20 border-blue-600/20 dark:border-blue-600/30 [&>svg]:text-current *:data-[slot=alert-description]:text-blue-600/90',
      destructive: 'text-red-600 bg-red-600/10 dark:bg-red-600/20 border-red-600/20 dark:border-red-600/30 [&>svg]:text-current *:data-[slot=alert-description]:text-red-600/90'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});
function Alert(t0) {
  var $ = _c(12);
  var className;
  var color;
  var props;
  var variant;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    variant = _t.variant;
    color = _t.color;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = color;
    $[3] = props;
    $[4] = variant;
  } else {
    className = $[1];
    color = $[2];
    props = $[3];
    variant = $[4];
  }
  var effectiveColor = color || (variant === "destructive" ? "destructive" : undefined);
  var t1 = color ? "default" : variant;
  var t2;
  if ($[5] !== className || $[6] !== effectiveColor || $[7] !== t1) {
    t2 = cn(alertVariants({
      variant: t1,
      color: effectiveColor
    }), className);
    $[5] = className;
    $[6] = effectiveColor;
    $[7] = t1;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  var t3;
  if ($[9] !== props || $[10] !== t2) {
    t3 = /*#__PURE__*/_jsx("div", _objectSpread({
      "data-slot": "alert",
      role: "alert",
      className: t2
    }, props));
    $[9] = props;
    $[10] = t2;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  return t3;
}
function AlertTitle(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t2 = t0;
    className = _t2.className;
    props = _objectWithoutProperties(_t2, _excluded2);
    _t2;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("div", _objectSpread({
      "data-slot": "alert-title",
      className: t1
    }, props));
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function AlertDescription(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t3 = t0;
    className = _t3.className;
    props = _objectWithoutProperties(_t3, _excluded3);
    _t3;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("div", _objectSpread({
      "data-slot": "alert-description",
      className: t1
    }, props));
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
export { Alert, AlertTitle, AlertDescription };

//# sourceMappingURL=alert.js.map