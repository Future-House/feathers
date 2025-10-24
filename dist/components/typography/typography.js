import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "variant", "asChild"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from "../../lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
var variantElementMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  lead: 'p',
  large: 'p',
  small: 'p',
  muted: 'p',
  label: 'label',
  code: 'code',
  blockquote: 'blockquote',
  list: 'ul',
  orderedList: 'ol'
};
var variantClassMap = {
  lead: 'large',
  large: 'large',
  small: 'small',
  muted: 'text-muted-foreground'
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
  var variantClass = variant ? variantClassMap[variant] : undefined;
  var t3;
  if ($[5] !== className || $[6] !== variantClass) {
    t3 = cn(variantClass, className);
    $[5] = className;
    $[6] = variantClass;
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
export { Typography };

//# sourceMappingURL=typography.js.map