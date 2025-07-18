import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children"],
  _excluded2 = ["className", "orientation"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { cn } from "../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function ScrollArea(t0) {
  var $ = _c(14);
  var children;
  var className;
  var props;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    children = _t.children;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
  }
  var t1;
  if ($[4] !== className) {
    t1 = cn("relative", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var t2;
  if ($[6] !== children) {
    t2 = /*#__PURE__*/_jsx(ScrollAreaPrimitive.Viewport, {
      "data-slot": "scroll-area-viewport",
      className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
      children: children
    });
    $[6] = children;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  var t3;
  var t4;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/_jsx(ScrollBar, {});
    t4 = /*#__PURE__*/_jsx(ScrollAreaPrimitive.Corner, {});
    $[8] = t3;
    $[9] = t4;
  } else {
    t3 = $[8];
    t4 = $[9];
  }
  var t5;
  if ($[10] !== props || $[11] !== t1 || $[12] !== t2) {
    t5 = /*#__PURE__*/_jsxs(ScrollAreaPrimitive.Root, _objectSpread(_objectSpread({
      "data-slot": "scroll-area",
      className: t1
    }, props), {}, {
      children: [t2, t3, t4]
    }));
    $[10] = props;
    $[11] = t1;
    $[12] = t2;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  return t5;
}
function ScrollBar(t0) {
  var $ = _c(13);
  var className;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t2 = t0;
    className = _t2.className;
    t1 = _t2.orientation;
    props = _objectWithoutProperties(_t2, _excluded2);
    _t2;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
  }
  var orientation = t1 === undefined ? "vertical" : t1;
  var t2 = orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent";
  var t3 = orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent";
  var t4;
  if ($[4] !== className || $[5] !== t2 || $[6] !== t3) {
    t4 = cn("flex touch-none p-px transition-colors select-none", t2, t3, className);
    $[4] = className;
    $[5] = t2;
    $[6] = t3;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  var t5;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /*#__PURE__*/_jsx(ScrollAreaPrimitive.ScrollAreaThumb, {
      "data-slot": "scroll-area-thumb",
      className: "bg-border relative flex-1 rounded-full"
    });
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  var t6;
  if ($[9] !== orientation || $[10] !== props || $[11] !== t4) {
    t6 = /*#__PURE__*/_jsx(ScrollAreaPrimitive.ScrollAreaScrollbar, _objectSpread(_objectSpread({
      "data-slot": "scroll-area-scrollbar",
      orientation: orientation,
      className: t4
    }, props), {}, {
      children: t5
    }));
    $[9] = orientation;
    $[10] = props;
    $[11] = t4;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  return t6;
}
export { ScrollArea, ScrollBar };

//# sourceMappingURL=scroll-area.js.map