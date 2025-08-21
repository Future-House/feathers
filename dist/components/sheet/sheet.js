import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["className"],
  _excluded2 = ["className", "children", "side"],
  _excluded3 = ["className"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
  _excluded6 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { X as XIcon } from "../../icons";
import { cn } from "../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Sheet(t0) {
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
    t1 = /*#__PURE__*/_jsx(SheetPrimitive.Root, _objectSpread({
      "data-slot": "sheet"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function SheetTrigger(t0) {
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
    t1 = /*#__PURE__*/_jsx(SheetPrimitive.Trigger, _objectSpread({
      "data-slot": "sheet-trigger"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function SheetClose(t0) {
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
    t1 = /*#__PURE__*/_jsx(SheetPrimitive.Close, _objectSpread({
      "data-slot": "sheet-close"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function SheetPortal(t0) {
  var $ = _c(4);
  var props;
  if ($[0] !== t0) {
    var _t4 = t0;
    _objectDestructuringEmpty(_t4);
    props = _extends({}, (_objectDestructuringEmpty(_t4), _t4));
    _t4;
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  var t1;
  if ($[2] !== props) {
    t1 = /*#__PURE__*/_jsx(SheetPrimitive.Portal, _objectSpread({
      "data-slot": "sheet-portal"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function SheetOverlay(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t5 = t0;
    className = _t5.className;
    props = _objectWithoutProperties(_t5, _excluded);
    _t5;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(SheetPrimitive.Overlay, _objectSpread({
      "data-slot": "sheet-overlay",
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
function SheetContent(t0) {
  var $ = _c(17);
  var children;
  var className;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t6 = t0;
    className = _t6.className;
    children = _t6.children;
    t1 = _t6.side;
    props = _objectWithoutProperties(_t6, _excluded2);
    _t6;
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
  var side = t1 === undefined ? "right" : t1;
  var t2;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx(SheetOverlay, {});
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var t3 = side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm";
  var t4 = side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm";
  var t5 = side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b";
  var t6 = side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t";
  var t7;
  if ($[6] !== className || $[7] !== t3 || $[8] !== t4 || $[9] !== t5 || $[10] !== t6) {
    t7 = cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", t3, t4, t5, t6, className);
    $[6] = className;
    $[7] = t3;
    $[8] = t4;
    $[9] = t5;
    $[10] = t6;
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  var t8;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /*#__PURE__*/_jsxs(SheetPrimitive.Close, {
      className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
      children: [/*#__PURE__*/_jsx(XIcon, {
        className: "size-4"
      }), /*#__PURE__*/_jsx("span", {
        className: "sr-only",
        children: "Close"
      })]
    });
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  var t9;
  if ($[13] !== children || $[14] !== props || $[15] !== t7) {
    t9 = /*#__PURE__*/_jsxs(SheetPortal, {
      children: [t2, /*#__PURE__*/_jsxs(SheetPrimitive.Content, _objectSpread(_objectSpread({
        "data-slot": "sheet-content",
        className: t7
      }, props), {}, {
        children: [children, t8]
      }))]
    });
    $[13] = children;
    $[14] = props;
    $[15] = t7;
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  return t9;
}
function SheetHeader(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t7 = t0;
    className = _t7.className;
    props = _objectWithoutProperties(_t7, _excluded3);
    _t7;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("flex flex-col gap-1.5 p-4", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("div", _objectSpread({
      "data-slot": "sheet-header",
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
function SheetFooter(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t8 = t0;
    className = _t8.className;
    props = _objectWithoutProperties(_t8, _excluded4);
    _t8;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("mt-auto flex flex-col gap-2 p-4", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("div", _objectSpread({
      "data-slot": "sheet-footer",
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
function SheetTitle(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t9 = t0;
    className = _t9.className;
    props = _objectWithoutProperties(_t9, _excluded5);
    _t9;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("text-foreground font-semibold", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(SheetPrimitive.Title, _objectSpread({
      "data-slot": "sheet-title",
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
function SheetDescription(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t0 = t0;
    className = _t0.className;
    props = _objectWithoutProperties(_t0, _excluded6);
    _t0;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("text-muted-foreground text-sm", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(SheetPrimitive.Description, _objectSpread({
      "data-slot": "sheet-description",
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
export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription };

//# sourceMappingURL=sheet.js.map