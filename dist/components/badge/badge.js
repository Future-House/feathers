import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "variant", "asChild"];
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
      destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
      outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});
function Badge(t0) {
  var $ = _c(12);
  var className;
  var props;
  var t1;
  var variant;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    variant = _t.variant;
    t1 = _t.asChild;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = variant;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    variant = $[4];
  }
  var asChild = t1 === undefined ? false : t1;
  var Comp = asChild ? Slot : "span";
  var t2;
  if ($[5] !== className || $[6] !== variant) {
    t2 = cn(badgeVariants({
      variant: variant
    }), className);
    $[5] = className;
    $[6] = variant;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  var t3;
  if ($[8] !== Comp || $[9] !== props || $[10] !== t2) {
    t3 = /*#__PURE__*/_jsx(Comp, _objectSpread({
      "data-slot": "badge",
      className: t2
    }, props));
    $[8] = Comp;
    $[9] = props;
    $[10] = t2;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  return t3;
}
export { Badge, badgeVariants };

//# sourceMappingURL=badge.js.map