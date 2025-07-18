import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from "../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Slider = /*#__PURE__*/React.forwardRef(function (t0, ref) {
  var $ = _c(19);
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
  var _props = props,
    value = _props.value,
    defaultValue = _props.defaultValue,
    t1 = _props.min,
    t2 = _props.max;
  var min = t1 === undefined ? 0 : t1;
  var max = t2 === undefined ? 100 : t2;
  var t3;
  var t4;
  if ($[3] !== defaultValue || $[4] !== max || $[5] !== min || $[6] !== value) {
    t4 = Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max];
    $[3] = defaultValue;
    $[4] = max;
    $[5] = min;
    $[6] = value;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  t3 = t4;
  var _values = t3;
  var t5;
  if ($[8] !== className) {
    t5 = cn("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", className);
    $[8] = className;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  var t6;
  if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = cn("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5");
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  var t7;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /*#__PURE__*/_jsx(SliderPrimitive.Track, {
      "data-slot": "slider-track",
      className: t6,
      children: /*#__PURE__*/_jsx(SliderPrimitive.Range, {
        "data-slot": "slider-range",
        className: cn("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
      })
    });
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  var t8;
  if ($[12] !== _values.length) {
    t8 = Array.from({
      length: _values.length
    }, _temp);
    $[12] = _values.length;
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  var t9;
  if ($[14] !== props || $[15] !== ref || $[16] !== t5 || $[17] !== t8) {
    t9 = /*#__PURE__*/_jsxs(SliderPrimitive.Root, _objectSpread(_objectSpread({
      ref: ref,
      "data-slot": "slider",
      className: t5
    }, props), {}, {
      children: [t7, t8]
    }));
    $[14] = props;
    $[15] = ref;
    $[16] = t5;
    $[17] = t8;
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  return t9;
});
Slider.displayName = SliderPrimitive.Root.displayName;
export { Slider };
function _temp(_, index) {
  return /*#__PURE__*/_jsx(SliderPrimitive.Thumb, {
    "data-slot": "slider-thumb",
    className: "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
  }, index);
}

//# sourceMappingURL=slider.js.map