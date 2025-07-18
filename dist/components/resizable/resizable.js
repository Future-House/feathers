import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className"],
  _excluded2 = ["withHandle", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { GripVerticalIcon } from 'lucide-react';
import * as ResizablePrimitive from 'react-resizable-panels';
import { cn } from "../../lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
function ResizablePanelGroup(t0) {
  var $ = _c(8);
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
  var t1;
  if ($[3] !== className) {
    t1 = cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(ResizablePrimitive.PanelGroup, _objectSpread({
      "data-slot": "resizable-panel-group",
      className: t1
    }, props));
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function ResizablePanel(t0) {
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
    t1 = /*#__PURE__*/_jsx(ResizablePrimitive.Panel, _objectSpread({
      "data-slot": "resizable-panel"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function ResizableHandle(t0) {
  var $ = _c(12);
  var className;
  var props;
  var withHandle;
  if ($[0] !== t0) {
    var _t3 = t0;
    withHandle = _t3.withHandle;
    className = _t3.className;
    props = _objectWithoutProperties(_t3, _excluded2);
    _t3;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = withHandle;
  } else {
    className = $[1];
    props = $[2];
    withHandle = $[3];
  }
  var t1;
  if ($[4] !== className) {
    t1 = cn("bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var t2;
  if ($[6] !== withHandle) {
    t2 = withHandle && /*#__PURE__*/_jsx("div", {
      className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border",
      children: /*#__PURE__*/_jsx(GripVerticalIcon, {
        className: "size-2.5"
      })
    });
    $[6] = withHandle;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  var t3;
  if ($[8] !== props || $[9] !== t1 || $[10] !== t2) {
    t3 = /*#__PURE__*/_jsx(ResizablePrimitive.PanelResizeHandle, _objectSpread(_objectSpread({
      "data-slot": "resizable-handle",
      className: t1
    }, props), {}, {
      children: t2
    }));
    $[8] = props;
    $[9] = t1;
    $[10] = t2;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  return t3;
}
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };

//# sourceMappingURL=resizable.js.map