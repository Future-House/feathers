import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "variant", "size", "asChild", "fullWidth", "loading", "children", "disabled"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { Renew as Loader } from "../../icons";
import { cn } from "../../lib/utils";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 dark:bg-primary dark:hover:bg-primary/90 dark:active:bg-primary/80',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/80 dark:bg-secondary dark:hover:bg-secondary/90 dark:active:bg-secondary/80',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive dark:hover:bg-destructive/90 dark:active:bg-destructive/80',
      outline: 'border border-input bg-transparent text-text-secondary hover:bg-accent hover:text-accent-foreground active:bg-accent/80 dark:border-input dark:hover:bg-accent dark:active:bg-accent/80',
      ghost: 'text-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent/80 dark:hover:bg-accent dark:active:bg-accent/80',
      link: 'text-primary underline-offset-4 hover:underline',
      success: 'bg-success text-success-foreground hover:bg-success/90 active:bg-success/80 focus-visible:ring-success/20 dark:focus-visible:ring-success/40 dark:bg-success dark:hover:bg-success/90 dark:active:bg-success/80',
      warning: 'bg-warning text-warning-foreground hover:bg-warning/90 active:bg-warning/80 focus-visible:ring-warning/20 dark:focus-visible:ring-warning/40 dark:bg-warning dark:hover:bg-warning/90 dark:active:bg-warning/80',
      info: 'bg-info text-info-foreground hover:bg-info/90 active:bg-info/80 focus-visible:ring-info/20 dark:focus-visible:ring-info/40 dark:bg-info dark:hover:bg-info/90 dark:active:bg-info/80',
      error: 'bg-error text-error-foreground hover:bg-error/90 active:bg-error/80 focus-visible:ring-error/20 dark:focus-visible:ring-error/40 dark:bg-error dark:hover:bg-error/90 dark:active:bg-error/80',
      brand: 'bg-brand text-primary hover:bg-brand/90 active:bg-brand/80 dark:bg-brand dark:text-secondary dark:hover:bg-brand/90 dark:active:bg-brand/80'
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
  var $ = _c(28);
  var children;
  var className;
  var disabled;
  var props;
  var size;
  var t1;
  var t2;
  var t3;
  var variant;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    variant = _t.variant;
    size = _t.size;
    t1 = _t.asChild;
    t2 = _t.fullWidth;
    t3 = _t.loading;
    children = _t.children;
    disabled = _t.disabled;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = disabled;
    $[4] = props;
    $[5] = size;
    $[6] = t1;
    $[7] = t2;
    $[8] = t3;
    $[9] = variant;
  } else {
    children = $[1];
    className = $[2];
    disabled = $[3];
    props = $[4];
    size = $[5];
    t1 = $[6];
    t2 = $[7];
    t3 = $[8];
    variant = $[9];
  }
  var asChild = t1 === undefined ? false : t1;
  var fullWidth = t2 === undefined ? false : t2;
  var loading = t3 === undefined ? false : t3;
  var Comp = asChild ? Slot : "button";
  if (asChild && loading) {
    console.warn("Loading state is not supported when asChild is true");
  }
  var t4;
  if ($[10] !== asChild || $[11] !== loading) {
    t4 = !asChild && loading && /*#__PURE__*/_jsx(Loader, {
      className: "animate-spin"
    });
    $[10] = asChild;
    $[11] = loading;
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  var t5;
  if ($[13] !== children || $[14] !== t4) {
    t5 = /*#__PURE__*/_jsxs(_Fragment, {
      children: [t4, children]
    });
    $[13] = children;
    $[14] = t4;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  var buttonContent = t5;
  var t6;
  if ($[16] !== className || $[17] !== fullWidth || $[18] !== size || $[19] !== variant) {
    t6 = cn(buttonVariants({
      variant: variant,
      size: size,
      className: className,
      fullWidth: fullWidth
    }));
    $[16] = className;
    $[17] = fullWidth;
    $[18] = size;
    $[19] = variant;
    $[20] = t6;
  } else {
    t6 = $[20];
  }
  var t7 = disabled || loading;
  var t8 = asChild ? children : buttonContent;
  var t9;
  if ($[21] !== Comp || $[22] !== loading || $[23] !== props || $[24] !== t6 || $[25] !== t7 || $[26] !== t8) {
    t9 = /*#__PURE__*/_jsx(Comp, _objectSpread(_objectSpread({
      "data-slot": "button",
      className: t6,
      disabled: t7,
      "aria-busy": loading
    }, props), {}, {
      children: t8
    }));
    $[21] = Comp;
    $[22] = loading;
    $[23] = props;
    $[24] = t6;
    $[25] = t7;
    $[26] = t8;
    $[27] = t9;
  } else {
    t9 = $[27];
  }
  return t9;
}
export { Button, buttonVariants };

//# sourceMappingURL=button.js.map