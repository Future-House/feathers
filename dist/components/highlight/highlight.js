import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "variant", "className", "style"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { cn } from "../../lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
var Highlight = /*#__PURE__*/React.forwardRef(function (t0, ref) {
  var $ = _c(17);
  var children;
  var className;
  var props;
  var style;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    children = _t.children;
    t1 = _t.variant;
    className = _t.className;
    style = _t.style;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = style;
    $[5] = t1;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    style = $[4];
    t1 = $[5];
  }
  var variant = t1 === undefined ? 1 : t1;
  var variantPath = "/highlights/".concat(variant, ".svg");
  var t2 = "url(".concat(variantPath, ")");
  var t3;
  if ($[6] !== style || $[7] !== t2) {
    t3 = _objectSpread(_objectSpread({}, style), {}, {
      "--highlight-variant": t2
    });
    $[6] = style;
    $[7] = t2;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  var inlineStyle = t3;
  var t4;
  if ($[9] !== className) {
    t4 = cn("highlight", className);
    $[9] = className;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  var t5;
  if ($[11] !== children || $[12] !== inlineStyle || $[13] !== props || $[14] !== ref || $[15] !== t4) {
    t5 = /*#__PURE__*/_jsx("span", _objectSpread(_objectSpread({
      ref: ref,
      className: t4,
      style: inlineStyle
    }, props), {}, {
      children: children
    }));
    $[11] = children;
    $[12] = inlineStyle;
    $[13] = props;
    $[14] = ref;
    $[15] = t4;
    $[16] = t5;
  } else {
    t5 = $[16];
  }
  return t5;
});
Highlight.displayName = 'Highlight';
export { Highlight };

//# sourceMappingURL=highlight.js.map