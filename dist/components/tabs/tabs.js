import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "variant"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva } from 'class-variance-authority';
import { cn } from "../../lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
var TabsContext = /*#__PURE__*/React.createContext({
  variant: 'default'
});
function Tabs(t0) {
  var $ = _c(14);
  var className;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    t1 = _t.variant;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
  }
  var variant = t1 === undefined ? "default" : t1;
  var t2;
  if ($[4] !== variant) {
    t2 = {
      variant: variant
    };
    $[4] = variant;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var t3;
  if ($[6] !== className) {
    t3 = cn("flex flex-col gap-2", className);
    $[6] = className;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  var t4;
  if ($[8] !== props || $[9] !== t3) {
    t4 = /*#__PURE__*/_jsx(TabsPrimitive.Root, _objectSpread({
      "data-slot": "tabs",
      className: t3
    }, props));
    $[8] = props;
    $[9] = t3;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  var t5;
  if ($[11] !== t2 || $[12] !== t4) {
    t5 = /*#__PURE__*/_jsx(TabsContext.Provider, {
      value: t2,
      children: t4
    });
    $[11] = t2;
    $[12] = t4;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  return t5;
}
var tabsListVariants = cva('inline-flex items-center text-muted-foreground', {
  variants: {
    variant: {
      default: 'bg-muted h-9 w-fit justify-center rounded-lg p-[3px]',
      underlined: 'w-full p-0 justify-start border-b rounded-none h-10'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});
function TabsList(t0) {
  var $ = _c(9);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t2 = t0;
    className = _t2.className;
    props = _objectWithoutProperties(_t2, _excluded2);
    _t2;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var _React$useContext = React.useContext(TabsContext),
    variant = _React$useContext.variant;
  var t1;
  if ($[3] !== className || $[4] !== variant) {
    t1 = cn(tabsListVariants({
      variant: variant
    }), className);
    $[3] = className;
    $[4] = variant;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var t2;
  if ($[6] !== props || $[7] !== t1) {
    t2 = /*#__PURE__*/_jsx(TabsPrimitive.List, _objectSpread({
      "data-slot": "tabs-list",
      className: t1
    }, props));
    $[6] = props;
    $[7] = t1;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  return t2;
}
var tabsTriggerVariants = cva("inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 rounded-sm", {
  variants: {
    variant: {
      default: 'data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:ring-ring/50 dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground h-[calc(100%-1px)] flex-1 rounded-md border border-transparent px-2 py-1 transition-[color,box-shadow] focus-visible:ring-[3px] data-[state=active]:shadow-sm',
      underlined: 'rounded-none rounded-t-xs bg-transparent h-full px-3 py-1.5 data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-b-foreground data-[state=active]:text-foreground text-muted-foreground hover:text-foreground/80 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});
function TabsTrigger(t0) {
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
  var _React$useContext2 = React.useContext(TabsContext),
    variant = _React$useContext2.variant;
  var t1;
  if ($[3] !== className || $[4] !== variant) {
    t1 = cn(tabsTriggerVariants({
      variant: variant
    }), className);
    $[3] = className;
    $[4] = variant;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var t2;
  if ($[6] !== props || $[7] !== t1) {
    t2 = /*#__PURE__*/_jsx(TabsPrimitive.Trigger, _objectSpread({
      "data-slot": "tabs-trigger",
      className: t1
    }, props));
    $[6] = props;
    $[7] = t1;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  return t2;
}
function TabsContent(t0) {
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
    t1 = cn("flex-1 outline-none", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(TabsPrimitive.Content, _objectSpread({
      "data-slot": "tabs-content",
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
export { Tabs, TabsList, TabsTrigger, TabsContent };

//# sourceMappingURL=tabs.js.map