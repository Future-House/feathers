import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cn } from "../../lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
function Label(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(LabelPrimitive.Root, _objectSpread({
      "data-slot": "label",
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
export { Label };

//# sourceMappingURL=label.js.map