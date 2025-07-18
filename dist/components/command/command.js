import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className"],
  _excluded2 = ["title", "description", "children", "className", "showCloseButton"],
  _excluded3 = ["className"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
  _excluded6 = ["className"],
  _excluded7 = ["className"],
  _excluded8 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';
import { cn } from "../../lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../dialog";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Command(t0) {
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
    t1 = cn("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(CommandPrimitive, _objectSpread({
      "data-slot": "command",
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
function CommandDialog(t0) {
  var $ = _c(26);
  var children;
  var className;
  var props;
  var t1;
  var t2;
  var t3;
  if ($[0] !== t0) {
    var _t2 = t0;
    t1 = _t2.title;
    t2 = _t2.description;
    children = _t2.children;
    className = _t2.className;
    t3 = _t2.showCloseButton;
    props = _objectWithoutProperties(_t2, _excluded2);
    _t2;
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = t1;
    $[5] = t2;
    $[6] = t3;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    t1 = $[4];
    t2 = $[5];
    t3 = $[6];
  }
  var title = t1 === undefined ? "Command Palette" : t1;
  var description = t2 === undefined ? "Search for a command to run..." : t2;
  var showCloseButton = t3 === undefined ? true : t3;
  var t4;
  if ($[7] !== title) {
    t4 = /*#__PURE__*/_jsx(DialogTitle, {
      children: title
    });
    $[7] = title;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  var t5;
  if ($[9] !== description) {
    t5 = /*#__PURE__*/_jsx(DialogDescription, {
      children: description
    });
    $[9] = description;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  var t6;
  if ($[11] !== t4 || $[12] !== t5) {
    t6 = /*#__PURE__*/_jsxs(DialogHeader, {
      className: "sr-only",
      children: [t4, t5]
    });
    $[11] = t4;
    $[12] = t5;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  var t7;
  if ($[14] !== className) {
    t7 = cn("overflow-hidden p-0", className);
    $[14] = className;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  var t8;
  if ($[16] !== children) {
    t8 = /*#__PURE__*/_jsx(Command, {
      className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
      children: children
    });
    $[16] = children;
    $[17] = t8;
  } else {
    t8 = $[17];
  }
  var t9;
  if ($[18] !== showCloseButton || $[19] !== t7 || $[20] !== t8) {
    t9 = /*#__PURE__*/_jsx(DialogContent, {
      className: t7,
      showCloseButton: showCloseButton,
      children: t8
    });
    $[18] = showCloseButton;
    $[19] = t7;
    $[20] = t8;
    $[21] = t9;
  } else {
    t9 = $[21];
  }
  var t10;
  if ($[22] !== props || $[23] !== t6 || $[24] !== t9) {
    t10 = /*#__PURE__*/_jsxs(Dialog, _objectSpread(_objectSpread({}, props), {}, {
      children: [t6, t9]
    }));
    $[22] = props;
    $[23] = t6;
    $[24] = t9;
    $[25] = t10;
  } else {
    t10 = $[25];
  }
  return t10;
}
function CommandInput(t0) {
  var $ = _c(9);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t3 = t0;
    className = _t3.className;
    props = _objectWithoutProperties(_t3, _excluded3);
    _t3;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /*#__PURE__*/_jsx(SearchIcon, {
      className: "size-4 shrink-0 opacity-50"
    });
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  var t2;
  if ($[4] !== className) {
    t2 = cn("placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", className);
    $[4] = className;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var t3;
  if ($[6] !== props || $[7] !== t2) {
    t3 = /*#__PURE__*/_jsxs("div", {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [t1, /*#__PURE__*/_jsx(CommandPrimitive.Input, _objectSpread({
        "data-slot": "command-input",
        className: t2
      }, props))]
    });
    $[6] = props;
    $[7] = t2;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  return t3;
}
function CommandList(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t4 = t0;
    className = _t4.className;
    props = _objectWithoutProperties(_t4, _excluded4);
    _t4;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(CommandPrimitive.List, _objectSpread({
      "data-slot": "command-list",
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
function CommandEmpty(t0) {
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
    t1 = /*#__PURE__*/_jsx(CommandPrimitive.Empty, _objectSpread({
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function CommandGroup(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t6 = t0;
    className = _t6.className;
    props = _objectWithoutProperties(_t6, _excluded5);
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
    t1 = cn("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(CommandPrimitive.Group, _objectSpread({
      "data-slot": "command-group",
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
function CommandSeparator(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t7 = t0;
    className = _t7.className;
    props = _objectWithoutProperties(_t7, _excluded6);
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
    t1 = cn("bg-border -mx-1 h-px", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(CommandPrimitive.Separator, _objectSpread({
      "data-slot": "command-separator",
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
function CommandItem(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t8 = t0;
    className = _t8.className;
    props = _objectWithoutProperties(_t8, _excluded7);
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
    t1 = cn("data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(CommandPrimitive.Item, _objectSpread({
      "data-slot": "command-item",
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
function CommandShortcut(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t9 = t0;
    className = _t9.className;
    props = _objectWithoutProperties(_t9, _excluded8);
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
    t1 = cn("text-muted-foreground ml-auto text-xs tracking-widest", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("span", _objectSpread({
      "data-slot": "command-shortcut",
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
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator };

//# sourceMappingURL=command.js.map