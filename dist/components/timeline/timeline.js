import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className"],
  _excluded2 = ["className", "iconElement", "isCollapsible", "isCollapsed", "onToggle", "children"],
  _excluded3 = ["className", "level"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { ChevronDown } from "../../icons";
import { cn } from "../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Timeline = /*#__PURE__*/React.forwardRef(function (t0, ref) {
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
Timeline.displayName = 'Timeline';
var TimelineItem = /*#__PURE__*/React.forwardRef(function (t0, ref) {
  var $ = _c(30);
  var children;
  var className;
  var iconElement;
  var onToggle;
  var props;
  var t1;
  var t2;
  if ($[0] !== t0) {
    var _t2 = t0;
    className = _t2.className;
    iconElement = _t2.iconElement;
    t1 = _t2.isCollapsible;
    t2 = _t2.isCollapsed;
    onToggle = _t2.onToggle;
    children = _t2.children;
    props = _objectWithoutProperties(_t2, _excluded2);
    _t2;
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = iconElement;
    $[4] = onToggle;
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    children = $[1];
    className = $[2];
    iconElement = $[3];
    onToggle = $[4];
    props = $[5];
    t1 = $[6];
    t2 = $[7];
  }
  var isCollapsible = t1 === undefined ? false : t1;
  var isCollapsed = t2 === undefined ? false : t2;
  var t3;
  if ($[8] !== className) {
    t3 = cn("relative border-l-2 border-gray-200 pb-8 pl-8 dark:border-gray-700", className);
    $[8] = className;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  var t4;
  if ($[10] !== iconElement) {
    t4 = iconElement && /*#__PURE__*/_jsx("div", {
      className: "absolute top-4 left-[-13px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800",
      children: iconElement
    });
    $[10] = iconElement;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  var t5;
  if ($[12] !== children || $[13] !== isCollapsed || $[14] !== isCollapsible || $[15] !== onToggle) {
    t5 = isCollapsible && onToggle ? /*#__PURE__*/_jsxs("button", {
      onClick: onToggle,
      className: "-m-2 flex w-full items-center justify-between rounded-md p-2 text-left hover:bg-gray-50 dark:hover:bg-gray-800",
      children: [/*#__PURE__*/_jsx("div", {
        className: "flex-1",
        children: React.Children.map(children, _temp)
      }), /*#__PURE__*/_jsx(ChevronDown, {
        className: cn("h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 dark:text-gray-400", isCollapsed && "rotate-180")
      })]
    }) : React.Children.map(children, _temp2);
    $[12] = children;
    $[13] = isCollapsed;
    $[14] = isCollapsible;
    $[15] = onToggle;
    $[16] = t5;
  } else {
    t5 = $[16];
  }
  var t6;
  if ($[17] !== children || $[18] !== isCollapsed || $[19] !== isCollapsible) {
    t6 = (!isCollapsible || !isCollapsed) && /*#__PURE__*/_jsx("div", {
      className: "space-y-2",
      children: React.Children.map(children, _temp3)
    });
    $[17] = children;
    $[18] = isCollapsed;
    $[19] = isCollapsible;
    $[20] = t6;
  } else {
    t6 = $[20];
  }
  var t7;
  if ($[21] !== t5 || $[22] !== t6) {
    t7 = /*#__PURE__*/_jsxs("div", {
      className: "space-y-2",
      children: [t5, t6]
    });
    $[21] = t5;
    $[22] = t6;
    $[23] = t7;
  } else {
    t7 = $[23];
  }
  var t8;
  if ($[24] !== props || $[25] !== ref || $[26] !== t3 || $[27] !== t4 || $[28] !== t7) {
    t8 = /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({
      ref: ref,
      className: t3
    }, props), {}, {
      children: [t4, t7]
    }));
    $[24] = props;
    $[25] = ref;
    $[26] = t3;
    $[27] = t4;
    $[28] = t7;
    $[29] = t8;
  } else {
    t8 = $[29];
  }
  return t8;
});
TimelineItem.displayName = 'TimelineItem';
var TimelineHeading = /*#__PURE__*/React.forwardRef(function (t0, ref) {
  var $ = _c(11);
  var className;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t3 = t0;
    className = _t3.className;
    t1 = _t3.level;
    props = _objectWithoutProperties(_t3, _excluded3);
    _t3;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
  }
  var level = t1 === undefined ? 3 : t1;
  var Component = "h".concat(level);
  var t2;
  if ($[4] !== className) {
    t2 = cn("text-sm font-medium text-gray-900 dark:text-gray-100", className);
    $[4] = className;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var t3;
  if ($[6] !== Component || $[7] !== props || $[8] !== ref || $[9] !== t2) {
    t3 = /*#__PURE__*/_jsx(Component, _objectSpread({
      ref: ref,
      className: t2
    }, props));
    $[6] = Component;
    $[7] = props;
    $[8] = ref;
    $[9] = t2;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  return t3;
});
TimelineHeading.displayName = 'TimelineHeading';
export { Timeline, TimelineItem, TimelineHeading };
function _temp(child) {
  if (/*#__PURE__*/React.isValidElement(child) && child.type === TimelineHeading) {
    return child;
  }
  return null;
}
function _temp2(child_0) {
  if (/*#__PURE__*/React.isValidElement(child_0) && child_0.type === TimelineHeading) {
    return child_0;
  }
  return null;
}
function _temp3(child_1) {
  if (/*#__PURE__*/React.isValidElement(child_1) && child_1.type !== TimelineHeading) {
    return child_1;
  }
  return null;
}

//# sourceMappingURL=timeline.js.map