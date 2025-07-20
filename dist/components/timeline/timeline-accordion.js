import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className", "number", "children"],
  _excluded4 = ["className", "title", "subtitle"],
  _excluded5 = ["className", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';
import { cn } from "../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var TimelineAccordion = /*#__PURE__*/React.forwardRef(function (t0, ref) {
  var $ = _c(9);
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
    t1 = cn("w-full space-y-4", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== ref || $[7] !== t1) {
    t2 = /*#__PURE__*/_jsx(AccordionPrimitive.Root, _objectSpread({
      ref: ref,
      className: t1
    }, props));
    $[5] = props;
    $[6] = ref;
    $[7] = t1;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  return t2;
});
TimelineAccordion.displayName = 'TimelineAccordion';
var TimelineHeader = /*#__PURE__*/React.forwardRef(function (t0, ref) {
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
  var t1;
  if ($[3] !== className) {
    t1 = cn("mb-6 space-y-2", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== ref || $[7] !== t1) {
    t2 = /*#__PURE__*/_jsx("div", _objectSpread({
      ref: ref,
      className: t1
    }, props));
    $[5] = props;
    $[6] = ref;
    $[7] = t1;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  return t2;
});
TimelineHeader.displayName = 'TimelineHeader';
var TimelineItem = /*#__PURE__*/React.forwardRef(function (t0, ref) {
  var $ = _c(15);
  var children;
  var className;
  var number;
  var props;
  if ($[0] !== t0) {
    var _t3 = t0;
    className = _t3.className;
    number = _t3.number;
    children = _t3.children;
    props = _objectWithoutProperties(_t3, _excluded3);
    _t3;
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = number;
    $[4] = props;
  } else {
    children = $[1];
    className = $[2];
    number = $[3];
    props = $[4];
  }
  var t1;
  if ($[5] !== className) {
    t1 = cn("relative border-l-2 border-gray-200 pb-8 pl-8 dark:border-gray-700", className);
    $[5] = className;
    $[6] = t1;
  } else {
    t1 = $[6];
  }
  var t2;
  if ($[7] !== number) {
    t2 = number && /*#__PURE__*/_jsx("div", {
      className: "absolute top-[6px] left-[-13px] flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-medium text-white dark:bg-blue-600",
      children: number
    });
    $[7] = number;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  var t3;
  if ($[9] !== children || $[10] !== props || $[11] !== ref || $[12] !== t1 || $[13] !== t2) {
    t3 = /*#__PURE__*/_jsxs(AccordionPrimitive.Item, _objectSpread(_objectSpread({
      ref: ref,
      className: t1
    }, props), {}, {
      children: [t2, children]
    }));
    $[9] = children;
    $[10] = props;
    $[11] = ref;
    $[12] = t1;
    $[13] = t2;
    $[14] = t3;
  } else {
    t3 = $[14];
  }
  return t3;
});
TimelineItem.displayName = 'TimelineItem';
var TimelineTrigger = /*#__PURE__*/React.forwardRef(function (t0, ref) {
  var $ = _c(20);
  var className;
  var props;
  var subtitle;
  var title;
  if ($[0] !== t0) {
    var _t4 = t0;
    className = _t4.className;
    title = _t4.title;
    subtitle = _t4.subtitle;
    props = _objectWithoutProperties(_t4, _excluded4);
    _t4;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = subtitle;
    $[4] = title;
  } else {
    className = $[1];
    props = $[2];
    subtitle = $[3];
    title = $[4];
  }
  var t1;
  if ($[5] !== className) {
    t1 = cn("flex flex-1 items-start justify-between gap-4 rounded-md p-2 text-left transition-all outline-none hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:focus-visible:ring-blue-400 [&[data-state=open]>svg]:rotate-180", className);
    $[5] = className;
    $[6] = t1;
  } else {
    t1 = $[6];
  }
  var t2;
  if ($[7] !== title) {
    t2 = /*#__PURE__*/_jsx("h3", {
      className: "text-sm font-medium text-gray-900 dark:text-gray-100",
      children: title
    });
    $[7] = title;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  var t3;
  if ($[9] !== subtitle) {
    t3 = subtitle && /*#__PURE__*/_jsx("p", {
      className: "text-xs text-gray-500 dark:text-gray-400",
      children: subtitle
    });
    $[9] = subtitle;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  var t4;
  if ($[11] !== t2 || $[12] !== t3) {
    t4 = /*#__PURE__*/_jsxs("div", {
      className: "space-y-1",
      children: [t2, t3]
    });
    $[11] = t2;
    $[12] = t3;
    $[13] = t4;
  } else {
    t4 = $[13];
  }
  var t5;
  if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /*#__PURE__*/_jsx(ChevronDownIcon, {
      className: "h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 dark:text-gray-400"
    });
    $[14] = t5;
  } else {
    t5 = $[14];
  }
  var t6;
  if ($[15] !== props || $[16] !== ref || $[17] !== t1 || $[18] !== t4) {
    t6 = /*#__PURE__*/_jsx(AccordionPrimitive.Header, {
      className: "flex",
      children: /*#__PURE__*/_jsxs(AccordionPrimitive.Trigger, _objectSpread(_objectSpread({
        ref: ref,
        className: t1
      }, props), {}, {
        children: [t4, t5]
      }))
    });
    $[15] = props;
    $[16] = ref;
    $[17] = t1;
    $[18] = t4;
    $[19] = t6;
  } else {
    t6 = $[19];
  }
  return t6;
});
TimelineTrigger.displayName = 'TimelineTrigger';
var TimelineContent = /*#__PURE__*/React.forwardRef(function (t0, ref) {
  var $ = _c(13);
  var children;
  var className;
  var props;
  if ($[0] !== t0) {
    var _t5 = t0;
    className = _t5.className;
    children = _t5.children;
    props = _objectWithoutProperties(_t5, _excluded5);
    _t5;
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
    t1 = cn("pt-2 pb-4", className);
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
  if ($[9] !== props || $[10] !== ref || $[11] !== t2) {
    t3 = /*#__PURE__*/_jsx(AccordionPrimitive.Content, _objectSpread(_objectSpread({
      ref: ref,
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    }, props), {}, {
      children: t2
    }));
    $[9] = props;
    $[10] = ref;
    $[11] = t2;
    $[12] = t3;
  } else {
    t3 = $[12];
  }
  return t3;
});
TimelineContent.displayName = 'TimelineContent';
export { TimelineAccordion, TimelineHeader, TimelineItem, TimelineTrigger, TimelineContent };

//# sourceMappingURL=timeline-accordion.js.map