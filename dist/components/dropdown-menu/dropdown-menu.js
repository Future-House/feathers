import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["className", "sideOffset"],
  _excluded2 = ["className", "inset", "variant"],
  _excluded3 = ["className", "children", "checked"],
  _excluded4 = ["className", "children"],
  _excluded5 = ["className", "inset"],
  _excluded6 = ["className"],
  _excluded7 = ["className"],
  _excluded8 = ["className", "inset", "children"],
  _excluded9 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';
import { cn } from "../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function DropdownMenu(t0) {
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
    t1 = /*#__PURE__*/_jsx(DropdownMenuPrimitive.Root, _objectSpread({
      "data-slot": "dropdown-menu"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DropdownMenuPortal(t0) {
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
    t1 = /*#__PURE__*/_jsx(DropdownMenuPrimitive.Portal, _objectSpread({
      "data-slot": "dropdown-menu-portal"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DropdownMenuTrigger(t0) {
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
    t1 = /*#__PURE__*/_jsx(DropdownMenuPrimitive.Trigger, _objectSpread({
      "data-slot": "dropdown-menu-trigger"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DropdownMenuContent(t0) {
  var $ = _c(10);
  var className;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t4 = t0;
    className = _t4.className;
    t1 = _t4.sideOffset;
    props = _objectWithoutProperties(_t4, _excluded);
    _t4;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
  }
  var sideOffset = t1 === undefined ? 4 : t1;
  var t2;
  if ($[4] !== className) {
    t2 = cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className);
    $[4] = className;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var t3;
  if ($[6] !== props || $[7] !== sideOffset || $[8] !== t2) {
    t3 = /*#__PURE__*/_jsx(DropdownMenuPrimitive.Portal, {
      children: /*#__PURE__*/_jsx(DropdownMenuPrimitive.Content, _objectSpread({
        "data-slot": "dropdown-menu-content",
        sideOffset: sideOffset,
        className: t2
      }, props))
    });
    $[6] = props;
    $[7] = sideOffset;
    $[8] = t2;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  return t3;
}
function DropdownMenuGroup(t0) {
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
    t1 = /*#__PURE__*/_jsx(DropdownMenuPrimitive.Group, _objectSpread({
      "data-slot": "dropdown-menu-group"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DropdownMenuItem(t0) {
  var $ = _c(12);
  var className;
  var inset;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t6 = t0;
    className = _t6.className;
    inset = _t6.inset;
    t1 = _t6.variant;
    props = _objectWithoutProperties(_t6, _excluded2);
    _t6;
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
    t3 = /*#__PURE__*/_jsx(DropdownMenuPrimitive.Item, _objectSpread({
      "data-slot": "dropdown-menu-item",
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
function DropdownMenuCheckboxItem(t0) {
  var $ = _c(13);
  var checked;
  var children;
  var className;
  var props;
  if ($[0] !== t0) {
    var _t7 = t0;
    className = _t7.className;
    children = _t7.children;
    checked = _t7.checked;
    props = _objectWithoutProperties(_t7, _excluded3);
    _t7;
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
    t1 = cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
    $[5] = className;
    $[6] = t1;
  } else {
    t1 = $[6];
  }
  var t2;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx("span", {
      className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
      children: /*#__PURE__*/_jsx(DropdownMenuPrimitive.ItemIndicator, {
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
    t3 = /*#__PURE__*/_jsxs(DropdownMenuPrimitive.CheckboxItem, _objectSpread(_objectSpread({
      "data-slot": "dropdown-menu-checkbox-item",
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
function DropdownMenuRadioGroup(t0) {
  var $ = _c(4);
  var props;
  if ($[0] !== t0) {
    var _t8 = t0;
    _objectDestructuringEmpty(_t8);
    props = _extends({}, (_objectDestructuringEmpty(_t8), _t8));
    _t8;
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  var t1;
  if ($[2] !== props) {
    t1 = /*#__PURE__*/_jsx(DropdownMenuPrimitive.RadioGroup, _objectSpread({
      "data-slot": "dropdown-menu-radio-group"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DropdownMenuRadioItem(t0) {
  var $ = _c(11);
  var children;
  var className;
  var props;
  if ($[0] !== t0) {
    var _t9 = t0;
    className = _t9.className;
    children = _t9.children;
    props = _objectWithoutProperties(_t9, _excluded4);
    _t9;
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
    t1 = cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var t2;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx("span", {
      className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
      children: /*#__PURE__*/_jsx(DropdownMenuPrimitive.ItemIndicator, {
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
    t3 = /*#__PURE__*/_jsxs(DropdownMenuPrimitive.RadioItem, _objectSpread(_objectSpread({
      "data-slot": "dropdown-menu-radio-item",
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
function DropdownMenuLabel(t0) {
  var $ = _c(10);
  var className;
  var inset;
  var props;
  if ($[0] !== t0) {
    var _t0 = t0;
    className = _t0.className;
    inset = _t0.inset;
    props = _objectWithoutProperties(_t0, _excluded5);
    _t0;
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
    t2 = /*#__PURE__*/_jsx(DropdownMenuPrimitive.Label, _objectSpread({
      "data-slot": "dropdown-menu-label",
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
function DropdownMenuSeparator(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t1 = t0;
    className = _t1.className;
    props = _objectWithoutProperties(_t1, _excluded6);
    _t1;
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
    t2 = /*#__PURE__*/_jsx(DropdownMenuPrimitive.Separator, _objectSpread({
      "data-slot": "dropdown-menu-separator",
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
function DropdownMenuShortcut(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t10 = t0;
    className = _t10.className;
    props = _objectWithoutProperties(_t10, _excluded7);
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
    t1 = cn("text-muted-foreground ml-auto text-xs tracking-widest", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("span", _objectSpread({
      "data-slot": "dropdown-menu-shortcut",
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
function DropdownMenuSub(t0) {
  var $ = _c(4);
  var props;
  if ($[0] !== t0) {
    var _t11 = t0;
    _objectDestructuringEmpty(_t11);
    props = _extends({}, (_objectDestructuringEmpty(_t11), _t11));
    _t11;
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  var t1;
  if ($[2] !== props) {
    t1 = /*#__PURE__*/_jsx(DropdownMenuPrimitive.Sub, _objectSpread({
      "data-slot": "dropdown-menu-sub"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DropdownMenuSubTrigger(t0) {
  var $ = _c(13);
  var children;
  var className;
  var inset;
  var props;
  if ($[0] !== t0) {
    var _t12 = t0;
    className = _t12.className;
    inset = _t12.inset;
    children = _t12.children;
    props = _objectWithoutProperties(_t12, _excluded8);
    _t12;
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
    t1 = cn("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8", className);
    $[5] = className;
    $[6] = t1;
  } else {
    t1 = $[6];
  }
  var t2;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx(ChevronRightIcon, {
      className: "ml-auto size-4"
    });
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  var t3;
  if ($[8] !== children || $[9] !== inset || $[10] !== props || $[11] !== t1) {
    t3 = /*#__PURE__*/_jsxs(DropdownMenuPrimitive.SubTrigger, _objectSpread(_objectSpread({
      "data-slot": "dropdown-menu-sub-trigger",
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
function DropdownMenuSubContent(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t13 = t0;
    className = _t13.className;
    props = _objectWithoutProperties(_t13, _excluded9);
    _t13;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(DropdownMenuPrimitive.SubContent, _objectSpread({
      "data-slot": "dropdown-menu-sub-content",
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
export { DropdownMenu, DropdownMenuPortal, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent };

//# sourceMappingURL=dropdown-menu.js.map