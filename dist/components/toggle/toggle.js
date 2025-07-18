import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "variant", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva } from 'class-variance-authority';
import { cn } from "../../lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
var toggleVariants = cva("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap", {
  variants: {
    variant: {
      default: 'bg-transparent',
      outline: 'border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground'
    },
    size: {
      default: 'h-9 px-2 min-w-9',
      sm: 'h-8 px-1.5 min-w-8',
      lg: 'h-10 px-2.5 min-w-10'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});
function Toggle(t0) {
  var $ = _c(12);
  var className;
  var props;
  var size;
  var variant;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    variant = _t.variant;
    size = _t.size;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = size;
    $[4] = variant;
  } else {
    className = $[1];
    props = $[2];
    size = $[3];
    variant = $[4];
  }
  var t1;
  if ($[5] !== className || $[6] !== size || $[7] !== variant) {
    t1 = cn(toggleVariants({
      variant: variant,
      size: size,
      className: className
    }));
    $[5] = className;
    $[6] = size;
    $[7] = variant;
    $[8] = t1;
  } else {
    t1 = $[8];
  }
  var t2;
  if ($[9] !== props || $[10] !== t1) {
    t2 = /*#__PURE__*/_jsx(TogglePrimitive.Root, _objectSpread({
      "data-slot": "toggle",
      className: t1
    }, props));
    $[9] = props;
    $[10] = t1;
    $[11] = t2;
  } else {
    t2 = $[11];
  }
  return t2;
}
export { Toggle, toggleVariants };

//# sourceMappingURL=toggle.js.map