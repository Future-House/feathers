import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "size", "value", "thickness", "indeterminate", "showLabel", "labelClassName", "renderLabel"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from "../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var circularProgressVariants = cva('relative text-primary');
function CircularProgress(t0) {
  var $ = _c(51);
  var className;
  var labelClassName;
  var props;
  var renderLabel;
  var t1;
  var t2;
  var t3;
  var t4;
  var t5;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    t1 = _t.size;
    t2 = _t.value;
    t3 = _t.thickness;
    t4 = _t.indeterminate;
    t5 = _t.showLabel;
    labelClassName = _t.labelClassName;
    renderLabel = _t.renderLabel;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = labelClassName;
    $[3] = props;
    $[4] = renderLabel;
    $[5] = t1;
    $[6] = t2;
    $[7] = t3;
    $[8] = t4;
    $[9] = t5;
  } else {
    className = $[1];
    labelClassName = $[2];
    props = $[3];
    renderLabel = $[4];
    t1 = $[5];
    t2 = $[6];
    t3 = $[7];
    t4 = $[8];
    t5 = $[9];
  }
  var size = t1 === undefined ? "md" : t1;
  var value = t2 === undefined ? 0 : t2;
  var thickness = t3 === undefined ? 6 : t3;
  var indeterminate = t4 === undefined ? true : t4;
  var showLabel = t5 === undefined ? false : t5;
  var normalizedValue = Math.min(Math.max(value, 0), 100);
  var t6;
  if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = {
      sm: 24,
      md: 40,
      lg: 64
    };
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  var sizeMap = t6;
  var pixelSize = sizeMap[size];
  var radius = (pixelSize - thickness) / 2;
  var circumference = 2 * Math.PI * radius;
  var strokeDashoffset = circumference - normalizedValue / 100 * circumference;
  var viewBox = "0 0 ".concat(pixelSize, " ").concat(pixelSize);
  var t7;
  if ($[11] !== className) {
    t7 = cn(circularProgressVariants(), className);
    $[11] = className;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  var t8;
  if ($[13] !== pixelSize) {
    t8 = {
      width: pixelSize,
      height: pixelSize
    };
    $[13] = pixelSize;
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  var t9 = indeterminate ? undefined : normalizedValue;
  var t10;
  if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = {
      transform: "rotate(-90deg)"
    };
    $[15] = t10;
  } else {
    t10 = $[15];
  }
  var t11 = pixelSize / 2;
  var t12 = pixelSize / 2;
  var t13;
  if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = cn("stroke-current opacity-20");
    $[16] = t13;
  } else {
    t13 = $[16];
  }
  var t14;
  if ($[17] !== circumference || $[18] !== radius || $[19] !== t11 || $[20] !== t12 || $[21] !== thickness) {
    t14 = /*#__PURE__*/_jsx("circle", {
      r: radius,
      cx: t11,
      cy: t12,
      fill: "transparent",
      strokeWidth: thickness,
      strokeDasharray: circumference,
      strokeDashoffset: "0",
      className: t13
    });
    $[17] = circumference;
    $[18] = radius;
    $[19] = t11;
    $[20] = t12;
    $[21] = thickness;
    $[22] = t14;
  } else {
    t14 = $[22];
  }
  var t15 = pixelSize / 2;
  var t16 = pixelSize / 2;
  var t17 = indeterminate ? circumference * 0.75 : strokeDashoffset;
  var t18 = indeterminate ? "circular-progress-indeterminate" : "transition-all duration-300 ease-in-out";
  var t19;
  if ($[23] !== t18) {
    t19 = cn("stroke-current", t18);
    $[23] = t18;
    $[24] = t19;
  } else {
    t19 = $[24];
  }
  var t20;
  if ($[25] !== circumference || $[26] !== radius || $[27] !== t15 || $[28] !== t16 || $[29] !== t17 || $[30] !== t19 || $[31] !== thickness) {
    t20 = /*#__PURE__*/_jsx("circle", {
      r: radius,
      cx: t15,
      cy: t16,
      strokeWidth: thickness,
      strokeLinecap: "round",
      strokeDasharray: circumference,
      strokeDashoffset: t17,
      fill: "transparent",
      className: t19
    });
    $[25] = circumference;
    $[26] = radius;
    $[27] = t15;
    $[28] = t16;
    $[29] = t17;
    $[30] = t19;
    $[31] = thickness;
    $[32] = t20;
  } else {
    t20 = $[32];
  }
  var t21;
  if ($[33] !== pixelSize || $[34] !== t14 || $[35] !== t20 || $[36] !== viewBox) {
    t21 = /*#__PURE__*/_jsxs("svg", {
      width: pixelSize,
      height: pixelSize,
      viewBox: viewBox,
      style: t10,
      className: "relative",
      children: [t14, t20]
    });
    $[33] = pixelSize;
    $[34] = t14;
    $[35] = t20;
    $[36] = viewBox;
    $[37] = t21;
  } else {
    t21 = $[37];
  }
  var t22;
  if ($[38] !== indeterminate || $[39] !== labelClassName || $[40] !== normalizedValue || $[41] !== renderLabel || $[42] !== showLabel) {
    t22 = showLabel && !indeterminate && /*#__PURE__*/_jsx("div", {
      className: cn("absolute inset-0 flex items-center justify-center text-sm font-medium", labelClassName),
      children: renderLabel ? renderLabel(normalizedValue) : "".concat(normalizedValue, "%")
    });
    $[38] = indeterminate;
    $[39] = labelClassName;
    $[40] = normalizedValue;
    $[41] = renderLabel;
    $[42] = showLabel;
    $[43] = t22;
  } else {
    t22 = $[43];
  }
  var t23;
  if ($[44] !== props || $[45] !== t21 || $[46] !== t22 || $[47] !== t7 || $[48] !== t8 || $[49] !== t9) {
    t23 = /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({
      "data-slot": "circular-progress",
      className: t7,
      style: t8,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": t9
    }, props), {}, {
      children: [t21, t22]
    }));
    $[44] = props;
    $[45] = t21;
    $[46] = t22;
    $[47] = t7;
    $[48] = t8;
    $[49] = t9;
    $[50] = t23;
  } else {
    t23 = $[50];
  }
  return t23;
}
export { CircularProgress, circularProgressVariants };

//# sourceMappingURL=circular-progress.js.map