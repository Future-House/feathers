import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "size", "value", "determinate", "color", "children", "style"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from "../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var circularProgressVariants = cva('relative inline-flex items-center justify-center', {
  variants: {
    color: {
      primary: 'text-primary',
      success: 'text-success',
      warning: 'text-warning',
      info: 'text-info',
      destructive: 'text-destructive'
    }
  },
  defaultVariants: {
    color: 'primary'
  }
});
function CircularProgress(t0) {
  var $ = _c(45);
  var children;
  var className;
  var props;
  var style;
  var t1;
  var t2;
  var t3;
  var t4;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    t1 = _t.size;
    t2 = _t.value;
    t3 = _t.determinate;
    t4 = _t.color;
    children = _t.children;
    style = _t.style;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = style;
    $[5] = t1;
    $[6] = t2;
    $[7] = t3;
    $[8] = t4;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    style = $[4];
    t1 = $[5];
    t2 = $[6];
    t3 = $[7];
    t4 = $[8];
  }
  var size = t1 === undefined ? "md" : t1;
  var value = t2 === undefined ? 0 : t2;
  var determinate = t3 === undefined ? false : t3;
  var color = t4 === undefined ? "primary" : t4;
  var normalizedValue = Math.min(Math.max(value || 0, 0), 100);
  var t5;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = {
      sm: 24,
      md: 40,
      lg: 64
    };
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  var sizeMap = t5;
  var pixelSize = sizeMap[size];
  var radius = (pixelSize - 6) / 2;
  var circumference = 2 * Math.PI * radius;
  var strokeDashoffset = determinate ? circumference - normalizedValue / 100 * circumference : circumference * 0.75;
  var viewBox = "0 0 ".concat(pixelSize, " ").concat(pixelSize);
  var t6;
  if ($[10] !== pixelSize || $[11] !== style) {
    t6 = _objectSpread({
      width: pixelSize,
      height: pixelSize
    }, style);
    $[10] = pixelSize;
    $[11] = style;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  var combinedStyle = t6;
  var t7;
  if ($[13] !== className || $[14] !== color) {
    t7 = cn(circularProgressVariants({
      color: color
    }), className);
    $[13] = className;
    $[14] = color;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  var t8 = determinate ? normalizedValue : undefined;
  var t9;
  if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = {
      transform: "rotate(-90deg)"
    };
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  var t10 = pixelSize / 2;
  var t11 = pixelSize / 2;
  var t12;
  if ($[17] !== circumference || $[18] !== radius || $[19] !== t10 || $[20] !== t11) {
    t12 = /*#__PURE__*/_jsx("circle", {
      r: radius,
      cx: t10,
      cy: t11,
      fill: "transparent",
      strokeWidth: 6,
      strokeDasharray: circumference,
      strokeDashoffset: "0",
      className: "stroke-current opacity-20"
    });
    $[17] = circumference;
    $[18] = radius;
    $[19] = t10;
    $[20] = t11;
    $[21] = t12;
  } else {
    t12 = $[21];
  }
  var t13 = pixelSize / 2;
  var t14 = pixelSize / 2;
  var t15 = !determinate && "circular-progress-indeterminate";
  var t16;
  if ($[22] !== t15) {
    t16 = cn("stroke-current transition-all duration-300 ease-in-out", t15);
    $[22] = t15;
    $[23] = t16;
  } else {
    t16 = $[23];
  }
  var t17;
  if ($[24] !== circumference || $[25] !== radius || $[26] !== strokeDashoffset || $[27] !== t13 || $[28] !== t14 || $[29] !== t16) {
    t17 = /*#__PURE__*/_jsx("circle", {
      r: radius,
      cx: t13,
      cy: t14,
      strokeWidth: 6,
      strokeLinecap: "round",
      strokeDasharray: circumference,
      strokeDashoffset: strokeDashoffset,
      fill: "transparent",
      className: t16
    });
    $[24] = circumference;
    $[25] = radius;
    $[26] = strokeDashoffset;
    $[27] = t13;
    $[28] = t14;
    $[29] = t16;
    $[30] = t17;
  } else {
    t17 = $[30];
  }
  var t18;
  if ($[31] !== pixelSize || $[32] !== t12 || $[33] !== t17 || $[34] !== viewBox) {
    t18 = /*#__PURE__*/_jsxs("svg", {
      width: pixelSize,
      height: pixelSize,
      viewBox: viewBox,
      style: t9,
      className: "relative",
      children: [t12, t17]
    });
    $[31] = pixelSize;
    $[32] = t12;
    $[33] = t17;
    $[34] = viewBox;
    $[35] = t18;
  } else {
    t18 = $[35];
  }
  var t19;
  if ($[36] !== children) {
    t19 = children && /*#__PURE__*/_jsx("div", {
      className: "absolute inset-0 flex items-center justify-center",
      children: children
    });
    $[36] = children;
    $[37] = t19;
  } else {
    t19 = $[37];
  }
  var t20;
  if ($[38] !== combinedStyle || $[39] !== props || $[40] !== t18 || $[41] !== t19 || $[42] !== t7 || $[43] !== t8) {
    t20 = /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({
      "data-slot": "circular-progress",
      className: t7,
      style: combinedStyle,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": t8
    }, props), {}, {
      children: [t18, t19]
    }));
    $[38] = combinedStyle;
    $[39] = props;
    $[40] = t18;
    $[41] = t19;
    $[42] = t7;
    $[43] = t8;
    $[44] = t20;
  } else {
    t20 = $[44];
  }
  return t20;
}
export { CircularProgress, circularProgressVariants };

//# sourceMappingURL=circular-progress.js.map