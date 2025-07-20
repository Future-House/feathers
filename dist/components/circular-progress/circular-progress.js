import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "size", "variant", "value", "thickness", "indeterminate"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from "../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var circularProgressVariants = cva('inline-block relative', {
  variants: {
    size: {
      sm: 'size-4',
      default: 'size-6',
      lg: 'size-8',
      xl: 'size-12'
    },
    variant: {
      default: 'text-primary',
      secondary: 'text-secondary',
      muted: 'text-muted-foreground'
    }
  },
  defaultVariants: {
    size: 'default',
    variant: 'default'
  }
});
function CircularProgress(t0) {
  var $ = _c(28);
  var className;
  var props;
  var size;
  var t1;
  var t2;
  var t3;
  var variant;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    size = _t.size;
    variant = _t.variant;
    t1 = _t.value;
    t2 = _t.thickness;
    t3 = _t.indeterminate;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = size;
    $[4] = t1;
    $[5] = t2;
    $[6] = t3;
    $[7] = variant;
  } else {
    className = $[1];
    props = $[2];
    size = $[3];
    t1 = $[4];
    t2 = $[5];
    t3 = $[6];
    variant = $[7];
  }
  var value = t1 === undefined ? 0 : t1;
  var thickness = t2 === undefined ? 3.6 : t2;
  var indeterminate = t3 === undefined ? false : t3;
  var normalizedValue = Math.min(Math.max(value, 0), 100);
  var circumference = 2 * Math.PI * 16;
  var strokeDasharray = "".concat(circumference, " ").concat(circumference);
  var strokeDashoffset = circumference - normalizedValue / 100 * circumference;
  var t4;
  if ($[8] !== className || $[9] !== size || $[10] !== variant) {
    t4 = cn(circularProgressVariants({
      size: size,
      variant: variant,
      className: className
    }));
    $[8] = className;
    $[9] = size;
    $[10] = variant;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  var t5 = indeterminate ? undefined : normalizedValue;
  var t6;
  if ($[12] !== thickness) {
    t6 = /*#__PURE__*/_jsx("circle", {
      cx: "20",
      cy: "20",
      r: "16",
      stroke: "currentColor",
      strokeWidth: thickness,
      className: "opacity-20",
      fill: "none"
    });
    $[12] = thickness;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  var t7 = indeterminate ? 0 : strokeDashoffset;
  var t8 = indeterminate && "circular-progress-indeterminate";
  var t9;
  if ($[14] !== t8) {
    t9 = cn("transition-all duration-300 ease-in-out", t8);
    $[14] = t8;
    $[15] = t9;
  } else {
    t9 = $[15];
  }
  var t10;
  if ($[16] !== t7 || $[17] !== t9 || $[18] !== thickness) {
    t10 = /*#__PURE__*/_jsx("circle", {
      cx: "20",
      cy: "20",
      r: "16",
      stroke: "currentColor",
      strokeWidth: thickness,
      fill: "none",
      strokeLinecap: "round",
      strokeDasharray: strokeDasharray,
      strokeDashoffset: t7,
      className: t9
    });
    $[16] = t7;
    $[17] = t9;
    $[18] = thickness;
    $[19] = t10;
  } else {
    t10 = $[19];
  }
  var t11;
  if ($[20] !== t10 || $[21] !== t6) {
    t11 = /*#__PURE__*/_jsxs("svg", {
      className: "size-full -rotate-90 transform",
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [t6, t10]
    });
    $[20] = t10;
    $[21] = t6;
    $[22] = t11;
  } else {
    t11 = $[22];
  }
  var t12;
  if ($[23] !== props || $[24] !== t11 || $[25] !== t4 || $[26] !== t5) {
    t12 = /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
      "data-slot": "circular-progress",
      className: t4,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": t5
    }, props), {}, {
      children: t11
    }));
    $[23] = props;
    $[24] = t11;
    $[25] = t4;
    $[26] = t5;
    $[27] = t12;
  } else {
    t12 = $[27];
  }
  return t12;
}
export { CircularProgress, circularProgressVariants };

//# sourceMappingURL=circular-progress.js.map