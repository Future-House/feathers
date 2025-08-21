import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className", "align", "alignOffset", "sideOffset"],
  _excluded4 = ["className", "inset", "variant"],
  _excluded5 = ["className", "children", "checked"],
  _excluded6 = ["className", "children"],
  _excluded7 = ["className", "inset"],
  _excluded8 = ["className"],
  _excluded9 = ["className"],
  _excluded0 = ["className", "inset", "children"],
  _excluded1 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { Check as CheckIcon, ChevronRight as ChevronRightIcon, Circle as CircleIcon } from "../../icons";
import { cn } from "../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Menubar(t0) {
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
    t1 = cn("bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(MenubarPrimitive.Root, _objectSpread({
      "data-slot": "menubar",
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
function MenubarMenu(t0) {
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
    t1 = /*#__PURE__*/_jsx(MenubarPrimitive.Menu, _objectSpread({
      "data-slot": "menubar-menu"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function MenubarGroup(t0) {
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
    t1 = /*#__PURE__*/_jsx(MenubarPrimitive.Group, _objectSpread({
      "data-slot": "menubar-group"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function MenubarPortal(t0) {
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
    t1 = /*#__PURE__*/_jsx(MenubarPrimitive.Portal, _objectSpread({
      "data-slot": "menubar-portal"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function MenubarRadioGroup(t0) {
  var $ = _c(4);
  var props;
  if ($[0] !== t0) {
    var _t5 = t0;
    _objectDestructuringEmpty(_t5);
    props = _extends({}, (_objectDestructuringEmpty(_t5), _t5));
    _t5;
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  var t1;
  if ($[2] !== props) {
    t1 = /*#__PURE__*/_jsx(MenubarPrimitive.RadioGroup, _objectSpread({
      "data-slot": "menubar-radio-group"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function MenubarTrigger(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t6 = t0;
    className = _t6.className;
    props = _objectWithoutProperties(_t6, _excluded2);
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
    t1 = cn("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(MenubarPrimitive.Trigger, _objectSpread({
      "data-slot": "menubar-trigger",
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
function MenubarContent(t0) {
  var $ = _c(14);
  var className;
  var props;
  var t1;
  var t2;
  var t3;
  if ($[0] !== t0) {
    var _t7 = t0;
    className = _t7.className;
    t1 = _t7.align;
    t2 = _t7.alignOffset;
    t3 = _t7.sideOffset;
    props = _objectWithoutProperties(_t7, _excluded3);
    _t7;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
    $[5] = t3;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
    t3 = $[5];
  }
  var align = t1 === undefined ? "start" : t1;
  var alignOffset = t2 === undefined ? -4 : t2;
  var sideOffset = t3 === undefined ? 8 : t3;
  var t4;
  if ($[6] !== className) {
    t4 = cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md", className);
    $[6] = className;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  var t5;
  if ($[8] !== align || $[9] !== alignOffset || $[10] !== props || $[11] !== sideOffset || $[12] !== t4) {
    t5 = /*#__PURE__*/_jsx(MenubarPortal, {
      children: /*#__PURE__*/_jsx(MenubarPrimitive.Content, _objectSpread({
        "data-slot": "menubar-content",
        align: align,
        alignOffset: alignOffset,
        sideOffset: sideOffset,
        className: t4
      }, props))
    });
    $[8] = align;
    $[9] = alignOffset;
    $[10] = props;
    $[11] = sideOffset;
    $[12] = t4;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  return t5;
}
function MenubarItem(t0) {
  var $ = _c(12);
  var className;
  var inset;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t8 = t0;
    className = _t8.className;
    inset = _t8.inset;
    t1 = _t8.variant;
    props = _objectWithoutProperties(_t8, _excluded4);
    _t8;
    $[0] = t0;
    $[1] = className;
    $[2] = inset;
    $[3] = props;
    $[4] = t1;
  } else {
    className = $[1];
    inset = $[2];
    props = $[3];
    t1 = $[4];
  }
  var variant = t1 === undefined ? "default" : t1;
  var t2;
  if ($[5] !== className) {
    t2 = cn("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
    $[5] = className;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  var t3;
  if ($[7] !== inset || $[8] !== props || $[9] !== t2 || $[10] !== variant) {
    t3 = /*#__PURE__*/_jsx(MenubarPrimitive.Item, _objectSpread({
      "data-slot": "menubar-item",
      "data-inset": inset,
      "data-variant": variant,
      className: t2
    }, props));
    $[7] = inset;
    $[8] = props;
    $[9] = t2;
    $[10] = variant;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  return t3;
}
function MenubarCheckboxItem(t0) {
  var $ = _c(13);
  var checked;
  var children;
  var className;
  var props;
  if ($[0] !== t0) {
    var _t9 = t0;
    className = _t9.className;
    children = _t9.children;
    checked = _t9.checked;
    props = _objectWithoutProperties(_t9, _excluded5);
    _t9;
    $[0] = t0;
    $[1] = checked;
    $[2] = children;
    $[3] = className;
    $[4] = props;
  } else {
    checked = $[1];
    children = $[2];
    className = $[3];
    props = $[4];
  }
  var t1;
  if ($[5] !== className) {
    t1 = cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
    $[5] = className;
    $[6] = t1;
  } else {
    t1 = $[6];
  }
  var t2;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx("span", {
      className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
      children: /*#__PURE__*/_jsx(MenubarPrimitive.ItemIndicator, {
        children: /*#__PURE__*/_jsx(CheckIcon, {
          className: "size-4"
        })
      })
    });
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  var t3;
  if ($[8] !== checked || $[9] !== children || $[10] !== props || $[11] !== t1) {
    t3 = /*#__PURE__*/_jsxs(MenubarPrimitive.CheckboxItem, _objectSpread(_objectSpread({
      "data-slot": "menubar-checkbox-item",
      className: t1,
      checked: checked
    }, props), {}, {
      children: [t2, children]
    }));
    $[8] = checked;
    $[9] = children;
    $[10] = props;
    $[11] = t1;
    $[12] = t3;
  } else {
    t3 = $[12];
  }
  return t3;
}
function MenubarRadioItem(t0) {
  var $ = _c(11);
  var children;
  var className;
  var props;
  if ($[0] !== t0) {
    var _t0 = t0;
    className = _t0.className;
    children = _t0.children;
    props = _objectWithoutProperties(_t0, _excluded6);
    _t0;
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
    t1 = cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var t2;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx("span", {
      className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
      children: /*#__PURE__*/_jsx(MenubarPrimitive.ItemIndicator, {
        children: /*#__PURE__*/_jsx(CircleIcon, {
          className: "size-2 fill-current"
        })
      })
    });
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  var t3;
  if ($[7] !== children || $[8] !== props || $[9] !== t1) {
    t3 = /*#__PURE__*/_jsxs(MenubarPrimitive.RadioItem, _objectSpread(_objectSpread({
      "data-slot": "menubar-radio-item",
      className: t1
    }, props), {}, {
      children: [t2, children]
    }));
    $[7] = children;
    $[8] = props;
    $[9] = t1;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  return t3;
}
function MenubarLabel(t0) {
  var $ = _c(10);
  var className;
  var inset;
  var props;
  if ($[0] !== t0) {
    var _t1 = t0;
    className = _t1.className;
    inset = _t1.inset;
    props = _objectWithoutProperties(_t1, _excluded7);
    _t1;
    $[0] = t0;
    $[1] = className;
    $[2] = inset;
    $[3] = props;
  } else {
    className = $[1];
    inset = $[2];
    props = $[3];
  }
  var t1;
  if ($[4] !== className) {
    t1 = cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var t2;
  if ($[6] !== inset || $[7] !== props || $[8] !== t1) {
    t2 = /*#__PURE__*/_jsx(MenubarPrimitive.Label, _objectSpread({
      "data-slot": "menubar-label",
      "data-inset": inset,
      className: t1
    }, props));
    $[6] = inset;
    $[7] = props;
    $[8] = t1;
    $[9] = t2;
  } else {
    t2 = $[9];
  }
  return t2;
}
function MenubarSeparator(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t10 = t0;
    className = _t10.className;
    props = _objectWithoutProperties(_t10, _excluded8);
    _t10;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("bg-border -mx-1 my-1 h-px", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(MenubarPrimitive.Separator, _objectSpread({
      "data-slot": "menubar-separator",
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
function MenubarShortcut(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t11 = t0;
    className = _t11.className;
    props = _objectWithoutProperties(_t11, _excluded9);
    _t11;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("text-muted-foreground ml-auto text-xs tracking-widest", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("span", _objectSpread({
      "data-slot": "menubar-shortcut",
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
function MenubarSub(t0) {
  var $ = _c(4);
  var props;
  if ($[0] !== t0) {
    var _t12 = t0;
    _objectDestructuringEmpty(_t12);
    props = _extends({}, (_objectDestructuringEmpty(_t12), _t12));
    _t12;
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  var t1;
  if ($[2] !== props) {
    t1 = /*#__PURE__*/_jsx(MenubarPrimitive.Sub, _objectSpread({
      "data-slot": "menubar-sub"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function MenubarSubTrigger(t0) {
  var $ = _c(13);
  var children;
  var className;
  var inset;
  var props;
  if ($[0] !== t0) {
    var _t13 = t0;
    className = _t13.className;
    inset = _t13.inset;
    children = _t13.children;
    props = _objectWithoutProperties(_t13, _excluded0);
    _t13;
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = inset;
    $[4] = props;
  } else {
    children = $[1];
    className = $[2];
    inset = $[3];
    props = $[4];
  }
  var t1;
  if ($[5] !== className) {
    t1 = cn("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8", className);
    $[5] = className;
    $[6] = t1;
  } else {
    t1 = $[6];
  }
  var t2;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx(ChevronRightIcon, {
      className: "ml-auto h-4 w-4"
    });
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  var t3;
  if ($[8] !== children || $[9] !== inset || $[10] !== props || $[11] !== t1) {
    t3 = /*#__PURE__*/_jsxs(MenubarPrimitive.SubTrigger, _objectSpread(_objectSpread({
      "data-slot": "menubar-sub-trigger",
      "data-inset": inset,
      className: t1
    }, props), {}, {
      children: [children, t2]
    }));
    $[8] = children;
    $[9] = inset;
    $[10] = props;
    $[11] = t1;
    $[12] = t3;
  } else {
    t3 = $[12];
  }
  return t3;
}
function MenubarSubContent(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t14 = t0;
    className = _t14.className;
    props = _objectWithoutProperties(_t14, _excluded1);
    _t14;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(MenubarPrimitive.SubContent, _objectSpread({
      "data-slot": "menubar-sub-content",
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
export { Menubar, MenubarPortal, MenubarMenu, MenubarTrigger, MenubarContent, MenubarGroup, MenubarSeparator, MenubarLabel, MenubarItem, MenubarShortcut, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarSub, MenubarSubTrigger, MenubarSubContent };

//# sourceMappingURL=menubar.js.map