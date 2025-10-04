import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "value"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from "../../lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
var Progress = /*#__PURE__*/React.forwardRef(function (t0, ref) {
  var $ = _c(20);
  var className;
  var props;
  var value;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    value = _t.value;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = value;
  } else {
    className = $[1];
    props = $[2];
    value = $[3];
  }
  var isIndeterminate = value === null || value === undefined;
  var t1 = isIndeterminate ? undefined : value;
  var t2;
  if ($[4] !== className) {
    t2 = cn("bg-secondary relative h-4 w-full overflow-hidden rounded-full", className);
    $[4] = className;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var t3 = isIndeterminate ? "w-[40%] animate-[progress-indeterminate_1.5s_ease-in-out_infinite]" : "w-full";
  var t4;
  if ($[6] !== t3) {
    t4 = cn("bg-primary h-full flex-1 transition-all", t3);
    $[6] = t3;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  var t5;
  if ($[8] !== isIndeterminate || $[9] !== value) {
    t5 = isIndeterminate ? undefined : {
      transform: "translateX(-".concat(100 - (value || 0), "%)")
    };
    $[8] = isIndeterminate;
    $[9] = value;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  var t6;
  if ($[11] !== t4 || $[12] !== t5) {
    t6 = /*#__PURE__*/_jsx(ProgressPrimitive.Indicator, {
      className: t4,
      style: t5
    });
    $[11] = t4;
    $[12] = t5;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  var t7;
  if ($[14] !== props || $[15] !== ref || $[16] !== t1 || $[17] !== t2 || $[18] !== t6) {
    t7 = /*#__PURE__*/_jsx(ProgressPrimitive.Root, _objectSpread(_objectSpread({
      ref: ref,
      value: t1,
      className: t2
    }, props), {}, {
      children: t6
    }));
    $[14] = props;
    $[15] = ref;
    $[16] = t1;
    $[17] = t2;
    $[18] = t6;
    $[19] = t7;
  } else {
    t7 = $[19];
  }
  return t7;
});
Progress.displayName = ProgressPrimitive.Root.displayName;
export { Progress };

//# sourceMappingURL=progress.js.map