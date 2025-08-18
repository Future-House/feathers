import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["className"],
  _excluded2 = ["className", "children"],
  _excluded3 = ["className", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from "../../icons";
import { cn } from "../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Accordion(t0) {
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
    t1 = /*#__PURE__*/_jsx(AccordionPrimitive.Root, _objectSpread({
      "data-slot": "accordion"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function AccordionItem(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t2 = t0;
    className = _t2.className;
    props = _objectWithoutProperties(_t2, _excluded);
    _t2;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("border-b last:border-b-0", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(AccordionPrimitive.Item, _objectSpread({
      "data-slot": "accordion-item",
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
function AccordionTrigger(t0) {
  var $ = _c(11);
  var children;
  var className;
  var props;
  if ($[0] !== t0) {
    var _t3 = t0;
    className = _t3.className;
    children = _t3.children;
    props = _objectWithoutProperties(_t3, _excluded2);
    _t3;
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
    t1 = cn("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md px-2 py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var t2;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx(ChevronDown, {
      className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
    });
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  var t3;
  if ($[7] !== children || $[8] !== props || $[9] !== t1) {
    t3 = /*#__PURE__*/_jsx(AccordionPrimitive.Header, {
      className: "flex",
      children: /*#__PURE__*/_jsxs(AccordionPrimitive.Trigger, _objectSpread(_objectSpread({
        "data-slot": "accordion-trigger",
        className: t1
      }, props), {}, {
        children: [children, t2]
      }))
    });
    $[7] = children;
    $[8] = props;
    $[9] = t1;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  return t3;
}
function AccordionContent(t0) {
  var $ = _c(12);
  var children;
  var className;
  var props;
  if ($[0] !== t0) {
    var _t4 = t0;
    className = _t4.className;
    children = _t4.children;
    props = _objectWithoutProperties(_t4, _excluded3);
    _t4;
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
    t1 = cn("pt-0 pb-4", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var t2;
  if ($[6] !== children || $[7] !== t1) {
    t2 = /*#__PURE__*/_jsx("div", {
      className: t1,
      children: children
    });
    $[6] = children;
    $[7] = t1;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  var t3;
  if ($[9] !== props || $[10] !== t2) {
    t3 = /*#__PURE__*/_jsx(AccordionPrimitive.Content, _objectSpread(_objectSpread({
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    }, props), {}, {
      children: t2
    }));
    $[9] = props;
    $[10] = t2;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  return t3;
}
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

//# sourceMappingURL=accordion.js.map