import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["error"],
  _excluded2 = ["className", "children", "error"],
  _excluded3 = ["className", "children", "position"],
  _excluded4 = ["className"],
  _excluded5 = ["className", "children"],
  _excluded6 = ["className"],
  _excluded7 = ["className"],
  _excluded8 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check as CheckIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon } from "../../icons";
import { cn } from "../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Select(t0) {
  var $ = _c(6);
  var error;
  var props;
  if ($[0] !== t0) {
    var _t = t0;
    error = _t.error;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = error;
    $[2] = props;
  } else {
    error = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== error || $[4] !== props) {
    t1 = /*#__PURE__*/_jsx(SelectPrimitive.Root, _objectSpread({
      "data-slot": "select",
      "aria-invalid": error
    }, props));
    $[3] = error;
    $[4] = props;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  return t1;
}
function SelectGroup(t0) {
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
    t1 = /*#__PURE__*/_jsx(SelectPrimitive.Group, _objectSpread({
      "data-slot": "select-group"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function SelectValue(t0) {
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
    t1 = /*#__PURE__*/_jsx(SelectPrimitive.Value, _objectSpread({
      "data-slot": "select-value"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function SelectTrigger(t0) {
  var $ = _c(14);
  var children;
  var className;
  var error;
  var props;
  if ($[0] !== t0) {
    var _t4 = t0;
    className = _t4.className;
    children = _t4.children;
    error = _t4.error;
    props = _objectWithoutProperties(_t4, _excluded2);
    _t4;
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = error;
    $[4] = props;
  } else {
    children = $[1];
    className = $[2];
    error = $[3];
    props = $[4];
  }
  var t1 = error && "ring-destructive/20 dark:ring-destructive/40 border-destructive";
  var t2;
  if ($[5] !== className || $[6] !== t1) {
    t2 = cn("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t1, className);
    $[5] = className;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  var t3;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/_jsx(SelectPrimitive.Icon, {
      asChild: true,
      children: /*#__PURE__*/_jsx(ChevronDownIcon, {
        className: "size-4 opacity-50"
      })
    });
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  var t4;
  if ($[9] !== children || $[10] !== error || $[11] !== props || $[12] !== t2) {
    t4 = /*#__PURE__*/_jsxs(SelectPrimitive.Trigger, _objectSpread(_objectSpread({
      "data-slot": "select-trigger",
      "aria-invalid": error,
      className: t2
    }, props), {}, {
      children: [children, t3]
    }));
    $[9] = children;
    $[10] = error;
    $[11] = props;
    $[12] = t2;
    $[13] = t4;
  } else {
    t4 = $[13];
  }
  return t4;
}
function SelectContent(t0) {
  var $ = _c(20);
  var children;
  var className;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t5 = t0;
    className = _t5.className;
    children = _t5.children;
    t1 = _t5.position;
    props = _objectWithoutProperties(_t5, _excluded3);
    _t5;
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
  var position = t1 === undefined ? "popper" : t1;
  var t2 = position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1";
  var t3;
  if ($[5] !== className || $[6] !== t2) {
    t3 = cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", t2, className);
    $[5] = className;
    $[6] = t2;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  var t4;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /*#__PURE__*/_jsx(SelectScrollUpButton, {});
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  var t5 = position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1";
  var t6;
  if ($[9] !== t5) {
    t6 = cn("p-1", t5);
    $[9] = t5;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  var t7;
  if ($[11] !== children || $[12] !== t6) {
    t7 = /*#__PURE__*/_jsx(SelectPrimitive.Viewport, {
      className: t6,
      children: children
    });
    $[11] = children;
    $[12] = t6;
    $[13] = t7;
  } else {
    t7 = $[13];
  }
  var t8;
  if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /*#__PURE__*/_jsx(SelectScrollDownButton, {});
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  var t9;
  if ($[15] !== position || $[16] !== props || $[17] !== t3 || $[18] !== t7) {
    t9 = /*#__PURE__*/_jsx(SelectPrimitive.Portal, {
      children: /*#__PURE__*/_jsxs(SelectPrimitive.Content, _objectSpread(_objectSpread({
        "data-slot": "select-content",
        className: t3,
        position: position
      }, props), {}, {
        children: [t4, t7, t8]
      }))
    });
    $[15] = position;
    $[16] = props;
    $[17] = t3;
    $[18] = t7;
    $[19] = t9;
  } else {
    t9 = $[19];
  }
  return t9;
}
function SelectLabel(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t6 = t0;
    className = _t6.className;
    props = _objectWithoutProperties(_t6, _excluded4);
    _t6;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("text-muted-foreground px-2 py-1.5 text-xs", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(SelectPrimitive.Label, _objectSpread({
      "data-slot": "select-label",
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
function SelectItem(t0) {
  var $ = _c(13);
  var children;
  var className;
  var props;
  if ($[0] !== t0) {
    var _t7 = t0;
    className = _t7.className;
    children = _t7.children;
    props = _objectWithoutProperties(_t7, _excluded5);
    _t7;
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
    t1 = cn("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var t2;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx("span", {
      className: "absolute right-2 flex size-3.5 items-center justify-center",
      children: /*#__PURE__*/_jsx(SelectPrimitive.ItemIndicator, {
        children: /*#__PURE__*/_jsx(CheckIcon, {
          className: "size-4"
        })
      })
    });
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  var t3;
  if ($[7] !== children) {
    t3 = /*#__PURE__*/_jsx(SelectPrimitive.ItemText, {
      children: children
    });
    $[7] = children;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  var t4;
  if ($[9] !== props || $[10] !== t1 || $[11] !== t3) {
    t4 = /*#__PURE__*/_jsxs(SelectPrimitive.Item, _objectSpread(_objectSpread({
      "data-slot": "select-item",
      className: t1
    }, props), {}, {
      children: [t2, t3]
    }));
    $[9] = props;
    $[10] = t1;
    $[11] = t3;
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  return t4;
}
function SelectSeparator(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t8 = t0;
    className = _t8.className;
    props = _objectWithoutProperties(_t8, _excluded6);
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
    t1 = cn("bg-border pointer-events-none -mx-1 my-1 h-px", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(SelectPrimitive.Separator, _objectSpread({
      "data-slot": "select-separator",
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
function SelectScrollUpButton(t0) {
  var $ = _c(9);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t9 = t0;
    className = _t9.className;
    props = _objectWithoutProperties(_t9, _excluded7);
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
    t1 = cn("flex cursor-default items-center justify-center py-1", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx(ChevronUpIcon, {
      className: "size-4"
    });
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var t3;
  if ($[6] !== props || $[7] !== t1) {
    t3 = /*#__PURE__*/_jsx(SelectPrimitive.ScrollUpButton, _objectSpread(_objectSpread({
      "data-slot": "select-scroll-up-button",
      className: t1
    }, props), {}, {
      children: t2
    }));
    $[6] = props;
    $[7] = t1;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  return t3;
}
function SelectScrollDownButton(t0) {
  var $ = _c(9);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t0 = t0;
    className = _t0.className;
    props = _objectWithoutProperties(_t0, _excluded8);
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
    t1 = cn("flex cursor-default items-center justify-center py-1", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx(ChevronDownIcon, {
      className: "size-4"
    });
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var t3;
  if ($[6] !== props || $[7] !== t1) {
    t3 = /*#__PURE__*/_jsx(SelectPrimitive.ScrollDownButton, _objectSpread(_objectSpread({
      "data-slot": "select-scroll-down-button",
      className: t1
    }, props), {}, {
      children: t2
    }));
    $[6] = props;
    $[7] = t1;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  return t3;
}
export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue };

//# sourceMappingURL=select.js.map