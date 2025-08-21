import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "error", "showSeconds"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Clock } from "../../icons";
import { cn } from "../../lib/utils";
import { Input } from "../input";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function TimePicker(t0) {
  var $ = _c(15);
  var className;
  var error;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    error = _t.error;
    t1 = _t.showSeconds;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = error;
    $[3] = props;
    $[4] = t1;
  } else {
    className = $[1];
    error = $[2];
    props = $[3];
    t1 = $[4];
  }
  var showSeconds = t1 === undefined ? false : t1;
  var step = showSeconds ? 1 : 60;
  var t2;
  if ($[5] !== className) {
    t2 = cn("pr-10 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none", className);
    $[5] = className;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  var t3;
  if ($[7] !== error || $[8] !== props || $[9] !== step || $[10] !== t2) {
    t3 = /*#__PURE__*/_jsx(Input, _objectSpread({
      type: "time",
      step: step,
      error: error,
      className: t2
    }, props));
    $[7] = error;
    $[8] = props;
    $[9] = step;
    $[10] = t2;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  var t4;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /*#__PURE__*/_jsx(Clock, {
      className: "text-muted-foreground pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2"
    });
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  var t5;
  if ($[13] !== t3) {
    t5 = /*#__PURE__*/_jsxs("div", {
      className: "relative",
      children: [t3, t4]
    });
    $[13] = t3;
    $[14] = t5;
  } else {
    t5 = $[14];
  }
  return t5;
}
export { TimePicker };

//# sourceMappingURL=time-picker.js.map