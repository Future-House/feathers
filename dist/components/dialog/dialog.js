import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["className"],
  _excluded2 = ["className", "children", "showCloseButton"],
  _excluded3 = ["className"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
  _excluded6 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Close as XIcon } from "../../icons";
import { cn } from "../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Dialog(t0) {
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
    t1 = /*#__PURE__*/_jsx(DialogPrimitive.Root, _objectSpread({
      "data-slot": "dialog"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DialogTrigger(t0) {
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
    t1 = /*#__PURE__*/_jsx(DialogPrimitive.Trigger, _objectSpread({
      "data-slot": "dialog-trigger"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DialogPortal(t0) {
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
    t1 = /*#__PURE__*/_jsx(DialogPrimitive.Portal, _objectSpread({
      "data-slot": "dialog-portal"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DialogClose(t0) {
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
    t1 = /*#__PURE__*/_jsx(DialogPrimitive.Close, _objectSpread({
      "data-slot": "dialog-close"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DialogOverlay(t0) {
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
    t2 = /*#__PURE__*/_jsx(DialogPrimitive.Overlay, _objectSpread({
      "data-slot": "dialog-overlay",
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
function DialogContent(t0) {
  var $ = _c(15);
  var children;
  var className;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t6 = t0;
    className = _t6.className;
    children = _t6.children;
    t1 = _t6.showCloseButton;
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
  var showCloseButton = t1 === undefined ? true : t1;
  var t2;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx(DialogOverlay, {});
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var t3;
  if ($[6] !== className) {
    t3 = cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className);
    $[6] = className;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  var t4;
  if ($[8] !== showCloseButton) {
    t4 = showCloseButton && /*#__PURE__*/_jsxs(DialogPrimitive.Close, {
      "data-slot": "dialog-close",
      className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      children: [/*#__PURE__*/_jsx(XIcon, {}), /*#__PURE__*/_jsx("span", {
        className: "sr-only",
        children: "Close"
      })]
    });
    $[8] = showCloseButton;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  var t5;
  if ($[10] !== children || $[11] !== props || $[12] !== t3 || $[13] !== t4) {
    t5 = /*#__PURE__*/_jsxs(DialogPortal, {
      "data-slot": "dialog-portal",
      children: [t2, /*#__PURE__*/_jsxs(DialogPrimitive.Content, _objectSpread(_objectSpread({
        "data-slot": "dialog-content",
        className: t3
      }, props), {}, {
        children: [children, t4]
      }))]
    });
    $[10] = children;
    $[11] = props;
    $[12] = t3;
    $[13] = t4;
    $[14] = t5;
  } else {
    t5 = $[14];
  }
  return t5;
}
function DialogHeader(t0) {
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
    t1 = cn("flex flex-col gap-2 text-center sm:text-left", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("div", _objectSpread({
      "data-slot": "dialog-header",
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
function DialogFooter(t0) {
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
    t1 = cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("div", _objectSpread({
      "data-slot": "dialog-footer",
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
function DialogTitle(t0) {
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
    t1 = cn("text-lg leading-none font-semibold", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(DialogPrimitive.Title, _objectSpread({
      "data-slot": "dialog-title",
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
function DialogDescription(t0) {
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
    t2 = /*#__PURE__*/_jsx(DialogPrimitive.Description, _objectSpread({
      "data-slot": "dialog-description",
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
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger };

//# sourceMappingURL=dialog.js.map