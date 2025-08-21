import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "variant", "color", "asChild"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from "../../lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
var badgeVariants = cva('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
  variants: {
    variant: {
      default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
      secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
      destructive: 'border-transparent bg-destructive text-white! [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
      outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
    },
    color: {
      success: 'border-success/30 bg-success/10 text-success [a&]:hover:bg-success/15 focus-visible:ring-success/20 shadow-none',
      warning: 'border-warning/30 bg-warning/10 text-warning [a&]:hover:bg-warning/15 focus-visible:ring-warning/20 shadow-none',
      info: 'border-info/30 bg-info/10 text-info [a&]:hover:bg-info/15 focus-visible:ring-info/20 shadow-none',
      error: 'border-error/30 bg-error/10 text-error [a&]:hover:bg-error/15 focus-visible:ring-error/20 shadow-none',
      purple: 'border-purple-600/30 bg-purple-500/10 text-purple-600 [a&]:hover:bg-purple-500/15 focus-visible:ring-purple-500/20 shadow-none dark:text-purple-400 dark:border-purple-400/30',
      fuchsia: 'border-fuchsia-600/30 bg-fuchsia-500/10 text-fuchsia-600 [a&]:hover:bg-fuchsia-500/15 focus-visible:ring-fuchsia-500/20 shadow-none dark:text-fuchsia-400 dark:border-fuchsia-400/30',
      teal: 'border-teal-600/30 bg-teal-500/10 text-teal-600 [a&]:hover:bg-teal-500/15 focus-visible:ring-teal-500/20 shadow-none dark:text-teal-400 dark:border-teal-400/30',
      lime: 'border-lime-600/30 bg-lime-500/10 text-lime-600 [a&]:hover:bg-lime-500/15 focus-visible:ring-lime-500/20 shadow-none dark:text-lime-400 dark:border-lime-400/30',
      orange: 'border-orange-600/30 bg-orange-500/10 text-orange-600 [a&]:hover:bg-orange-500/15 focus-visible:ring-orange-500/20 shadow-none dark:text-orange-400 dark:border-orange-400/30',
      rose: 'border-rose-600/30 bg-rose-500/10 text-rose-600 [a&]:hover:bg-rose-500/15 focus-visible:ring-rose-500/20 shadow-none dark:text-rose-400 dark:border-rose-400/30'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});
function Badge(t0) {
  var $ = _c(14);
  var className;
  var color;
  var props;
  var t1;
  var variant;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    variant = _t.variant;
    color = _t.color;
    t1 = _t.asChild;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = color;
    $[3] = props;
    $[4] = t1;
    $[5] = variant;
  } else {
    className = $[1];
    color = $[2];
    props = $[3];
    t1 = $[4];
    variant = $[5];
  }
  var asChild = t1 === undefined ? false : t1;
  var Comp = asChild ? Slot : "span";
  var effectiveColor = color || (variant === "destructive" ? "error" : undefined);
  var t2 = color ? "default" : variant;
  var t3;
  if ($[6] !== className || $[7] !== effectiveColor || $[8] !== t2) {
    t3 = cn(badgeVariants({
      variant: t2,
      color: effectiveColor
    }), className);
    $[6] = className;
    $[7] = effectiveColor;
    $[8] = t2;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  var t4;
  if ($[10] !== Comp || $[11] !== props || $[12] !== t3) {
    t4 = /*#__PURE__*/_jsx(Comp, _objectSpread({
      "data-slot": "badge",
      className: t3
    }, props));
    $[10] = Comp;
    $[11] = props;
    $[12] = t3;
    $[13] = t4;
  } else {
    t4 = $[13];
  }
  return t4;
}
export { Badge, badgeVariants };

//# sourceMappingURL=badge.js.map