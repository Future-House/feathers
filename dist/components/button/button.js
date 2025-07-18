import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "variant", "size", "asChild", "fullWidth"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from "../../lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
      destructive: 'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
      outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
      secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
      link: 'text-primary underline-offset-4 hover:underline'
    },
    size: {
      default: 'h-9 px-4 py-2 has-[>svg]:px-3',
      sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
      lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
      icon: 'size-9'
    },
    fullWidth: {
      true: 'w-full',
      false: ''
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    fullWidth: false
  }
});
function Button(t0) {
  var $ = _c(16);
  var className;
  var props;
  var size;
  var t1;
  var t2;
  var variant;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    variant = _t.variant;
    size = _t.size;
    t1 = _t.asChild;
    t2 = _t.fullWidth;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = size;
    $[4] = t1;
    $[5] = t2;
    $[6] = variant;
  } else {
    className = $[1];
    props = $[2];
    size = $[3];
    t1 = $[4];
    t2 = $[5];
    variant = $[6];
  }
  var asChild = t1 === undefined ? false : t1;
  var fullWidth = t2 === undefined ? false : t2;
  var Comp = asChild ? Slot : "button";
  var t3;
  if ($[7] !== className || $[8] !== fullWidth || $[9] !== size || $[10] !== variant) {
    t3 = cn(buttonVariants({
      variant: variant,
      size: size,
      className: className,
      fullWidth: fullWidth
    }));
    $[7] = className;
    $[8] = fullWidth;
    $[9] = size;
    $[10] = variant;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  var t4;
  if ($[12] !== Comp || $[13] !== props || $[14] !== t3) {
    t4 = /*#__PURE__*/_jsx(Comp, _objectSpread({
      "data-slot": "button",
      className: t3
    }, props));
    $[12] = Comp;
    $[13] = props;
    $[14] = t3;
    $[15] = t4;
  } else {
    t4 = $[15];
  }
  return t4;
}
export { Button, buttonVariants };

//# sourceMappingURL=button.js.map