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
  var $ = _c(14);
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
  var t1;
  if ($[4] !== className) {
    t1 = cn("bg-secondary relative h-4 w-full overflow-hidden rounded-full", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var t2 = "translateX(-".concat(100 - (value || 0), "%)");
  var t3;
  if ($[6] !== t2) {
    t3 = /*#__PURE__*/_jsx(ProgressPrimitive.Indicator, {
      className: "bg-primary h-full w-full flex-1 transition-all",
      style: {
        transform: t2
      }
    });
    $[6] = t2;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  var t4;
  if ($[8] !== props || $[9] !== ref || $[10] !== t1 || $[11] !== t3 || $[12] !== value) {
    t4 = /*#__PURE__*/_jsx(ProgressPrimitive.Root, _objectSpread(_objectSpread({
      ref: ref,
      value: value,
      className: t1
    }, props), {}, {
      children: t3
    }));
    $[8] = props;
    $[9] = ref;
    $[10] = t1;
    $[11] = t3;
    $[12] = value;
    $[13] = t4;
  } else {
    t4 = $[13];
  }
  return t4;
});
Progress.displayName = ProgressPrimitive.Root.displayName;
export { Progress };

//# sourceMappingURL=progress.js.map