import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["className", "align", "sideOffset"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { cn } from "../../lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
function HoverCard(t0) {
  var $ = _c(4);
  var props;
  if ($[0] !== t0) {
    var _t = t0;
    _objectDestructuringEmpty(_t);
    props = _extends({}, (_objectDestructuringEmpty(_t), _t));
    _t;
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  var t1;
  if ($[2] !== props) {
    t1 = /*#__PURE__*/_jsx(HoverCardPrimitive.Root, _objectSpread({
      "data-slot": "hover-card"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function HoverCardTrigger(t0) {
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
    t1 = /*#__PURE__*/_jsx(HoverCardPrimitive.Trigger, _objectSpread({
      "data-slot": "hover-card-trigger"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function HoverCardContent(t0) {
  var $ = _c(12);
  var className;
  var props;
  var t1;
  var t2;
  if ($[0] !== t0) {
    var _t3 = t0;
    className = _t3.className;
    t1 = _t3.align;
    t2 = _t3.sideOffset;
    props = _objectWithoutProperties(_t3, _excluded);
    _t3;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
  }
  var align = t1 === undefined ? "center" : t1;
  var sideOffset = t2 === undefined ? 4 : t2;
  var t3;
  if ($[5] !== className) {
    t3 = cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", className);
    $[5] = className;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  var t4;
  if ($[7] !== align || $[8] !== props || $[9] !== sideOffset || $[10] !== t3) {
    t4 = /*#__PURE__*/_jsx(HoverCardPrimitive.Portal, {
      "data-slot": "hover-card-portal",
      children: /*#__PURE__*/_jsx(HoverCardPrimitive.Content, _objectSpread({
        "data-slot": "hover-card-content",
        align: align,
        sideOffset: sideOffset,
        className: t3
      }, props))
    });
    $[7] = align;
    $[8] = props;
    $[9] = sideOffset;
    $[10] = t3;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  return t4;
}
export { HoverCard, HoverCardTrigger, HoverCardContent };

//# sourceMappingURL=hover-card.js.map