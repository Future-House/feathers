import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { toast, Toaster as Sonner } from 'sonner';
import { jsx as _jsx } from "react/jsx-runtime";
var Toaster = /*#__PURE__*/React.forwardRef(function (t0, ref) {
  var $ = _c(6);
  var props;
  if ($[0] !== t0) {
    var _t = t0;
    _objectDestructuringEmpty(_t);
    props = _extends({}, (_objectDestructuringEmpty(_t), _t));
    _t;
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  var t1;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      "--normal-bg": "var(--popover)",
      "--normal-text": "var(--popover-foreground)",
      "--normal-border": "var(--border)"
    };
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  var t2;
  if ($[3] !== props || $[4] !== ref) {
    t2 = /*#__PURE__*/_jsx(Sonner, _objectSpread({
      ref: ref,
      className: "toaster group",
      style: t1
    }, props));
    $[3] = props;
    $[4] = ref;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  return t2;
});
Toaster.displayName = 'Toaster';
export { Toaster, toast };

//# sourceMappingURL=sonner.js.map