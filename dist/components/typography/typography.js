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
var typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      list: 'my-6 ml-6 list-disc [&>li]:mt-2'
    }
  },
  defaultVariants: {
    variant: 'p'
  }
});
var variantElementMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  lead: 'p',
  large: 'div',
  small: 'small',
  muted: 'p',
  blockquote: 'blockquote',
  code: 'code',
  list: 'ul'
};
function Typography(t0) {
  var $ = _c(12);
  var className;
  var props;
  var t1;
  var t2;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    t1 = _t.variant;
    t2 = _t.asChild;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
  }
  var variant = t1 === undefined ? "p" : t1;
  var asChild = t2 === undefined ? false : t2;
  var Comp = asChild ? Slot : variantElementMap[variant || "p"];
  var t3;
  if ($[5] !== className || $[6] !== variant) {
    t3 = cn(typographyVariants({
      variant: variant,
      className: className
    }));
    $[5] = className;
    $[6] = variant;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  var t4 = props;
  var t5;
  if ($[8] !== Comp || $[9] !== t3 || $[10] !== t4) {
    t5 = /*#__PURE__*/_jsx(Comp, _objectSpread({
      className: t3
    }, t4));
    $[8] = Comp;
    $[9] = t3;
    $[10] = t4;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  return t5;
}
export { Typography, typographyVariants };

//# sourceMappingURL=typography.js.map