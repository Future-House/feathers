import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["delayDuration"],
  _excluded2 = ["className", "sideOffset", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from "../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function TooltipProvider(t0) {
  var $ = _c(6);
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    t1 = _t.delayDuration;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = props;
    $[2] = t1;
  } else {
    props = $[1];
    t1 = $[2];
  }
  var delayDuration = t1 === undefined ? 500 : t1;
  var t2;
  if ($[3] !== delayDuration || $[4] !== props) {
    t2 = /*#__PURE__*/_jsx(TooltipPrimitive.Provider, _objectSpread({
      "data-slot": "tooltip-provider",
      delayDuration: delayDuration
    }, props));
    $[3] = delayDuration;
    $[4] = props;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  return t2;
}
function Tooltip(t0) {
  var $ = _c(4);
  var props;
  if ($[0] !== t0) {
    var _t2 = t0;
    _objectDestructuringEmpty(_t2);
    props = _extends({}, (_objectDestructuringEmpty(_t2), _t2));
    _t2;
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  var t1;
  if ($[2] !== props) {
    t1 = /*#__PURE__*/_jsx(TooltipProvider, {
      children: /*#__PURE__*/_jsx(TooltipPrimitive.Root, _objectSpread({
        "data-slot": "tooltip"
      }, props))
    });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function TooltipTrigger(t0) {
  var $ = _c(4);
  var props;
  if ($[0] !== t0) {
    var _t3 = t0;
    _objectDestructuringEmpty(_t3);
    props = _extends({}, (_objectDestructuringEmpty(_t3), _t3));
    _t3;
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  var t1;
  if ($[2] !== props) {
    t1 = /*#__PURE__*/_jsx(TooltipPrimitive.Trigger, _objectSpread({
      "data-slot": "tooltip-trigger"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function TooltipContent(t0) {
  var $ = _c(13);
  var children;
  var className;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t4 = t0;
    className = _t4.className;
    t1 = _t4.sideOffset;
    children = _t4.children;
    props = _objectWithoutProperties(_t4, _excluded2);
    _t4;
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = t1;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    t1 = $[4];
  }
  var sideOffset = t1 === undefined ? 0 : t1;
  var t2;
  if ($[5] !== className) {
    t2 = cn("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className);
    $[5] = className;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  var t3;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/_jsx(TooltipPrimitive.Arrow, {
      className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
    });
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  var t4;
  if ($[8] !== children || $[9] !== props || $[10] !== sideOffset || $[11] !== t2) {
    t4 = /*#__PURE__*/_jsx(TooltipPrimitive.Portal, {
      children: /*#__PURE__*/_jsxs(TooltipPrimitive.Content, _objectSpread(_objectSpread({
        "data-slot": "tooltip-content",
        sideOffset: sideOffset,
        className: t2
      }, props), {}, {
        children: [children, t3]
      }))
    });
    $[8] = children;
    $[9] = props;
    $[10] = sideOffset;
    $[11] = t2;
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  return t4;
}
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

//# sourceMappingURL=tooltip.js.map