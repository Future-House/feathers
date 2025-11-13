import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "headline", "children", "onNext", "isLast", "leftButton"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { cn } from "../../lib/utils";
import { ArrowRight } from "../../icons";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function FtueTooltip(t0) {
  var $ = _c(35);
  var children;
  var className;
  var headline;
  var leftButton;
  var onNext;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    headline = _t.headline;
    children = _t.children;
    onNext = _t.onNext;
    t1 = _t.isLast;
    leftButton = _t.leftButton;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = headline;
    $[4] = leftButton;
    $[5] = onNext;
    $[6] = props;
    $[7] = t1;
  } else {
    children = $[1];
    className = $[2];
    headline = $[3];
    leftButton = $[4];
    onNext = $[5];
    props = $[6];
    t1 = $[7];
  }
  var isLast = t1 === undefined ? false : t1;
  var t2;
  if ($[8] !== isLast || $[9] !== onNext) {
    t2 = function t2(e) {
      if (onNext && !isLast && !e.target.closest("[data-slot=\"ftue-tooltip-next\"]") && !e.target.closest("[data-slot=\"ftue-tooltip-left-button\"]")) {
        onNext();
      }
    };
    $[8] = isLast;
    $[9] = onNext;
    $[10] = t2;
  } else {
    t2 = $[10];
  }
  var handleContentClick = t2;
  var showArrow = onNext && !isLast;
  var showButtonRow = showArrow || leftButton;
  var t3;
  if ($[11] !== className) {
    t3 = cn("absolute z-50 w-[284px] rounded-[4px] bg-white p-4 shadow-lg", className);
    $[11] = className;
    $[12] = t3;
  } else {
    t3 = $[12];
  }
  var t4;
  if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /*#__PURE__*/_jsx("div", {
      "data-slot": "ftue-tooltip-arrow",
      className: "absolute -top-2 left-1/2 -translate-x-1/2",
      children: /*#__PURE__*/_jsx("div", {
        className: "h-0 w-0 border-x-[8px] border-b-[8px] border-x-transparent border-b-white"
      })
    });
    $[13] = t4;
  } else {
    t4 = $[13];
  }
  var t5 = showArrow && "cursor-pointer";
  var t6;
  if ($[14] !== t5) {
    t6 = cn("relative space-y-2", t5);
    $[14] = t5;
    $[15] = t6;
  } else {
    t6 = $[15];
  }
  var t7;
  if ($[16] !== headline) {
    t7 = headline && /*#__PURE__*/_jsx("div", {
      "data-slot": "ftue-tooltip-headline",
      className: "bg-brand inline-block py-1 text-sm font-bold text-black",
      children: headline
    });
    $[16] = headline;
    $[17] = t7;
  } else {
    t7 = $[17];
  }
  var t8;
  if ($[18] !== children) {
    t8 = /*#__PURE__*/_jsx("div", {
      children: children
    });
    $[18] = children;
    $[19] = t8;
  } else {
    t8 = $[19];
  }
  var t9;
  if ($[20] !== leftButton || $[21] !== onNext || $[22] !== showArrow || $[23] !== showButtonRow) {
    t9 = showButtonRow && /*#__PURE__*/_jsxs("div", {
      className: "flex items-center justify-between pt-2",
      children: [/*#__PURE__*/_jsx("div", {
        "data-slot": "ftue-tooltip-left-button",
        onClick: _temp,
        className: "[&_button]:border [&_button]:border-[1px] [&_button]:!border-black [&_button]:text-sm [&_button]:font-normal [&_button]:!text-black [&_button]:dark:!border-black [&_button]:dark:!text-black [&_button]:dark:hover:!text-white",
        children: leftButton
      }), showArrow && /*#__PURE__*/_jsx("button", {
        "data-slot": "ftue-tooltip-next",
        onClick: function onClick(e_1) {
          e_1.stopPropagation();
          onNext();
        },
        className: "flex items-center justify-center text-black transition-opacity hover:opacity-70",
        "aria-label": "Next",
        children: /*#__PURE__*/_jsx(ArrowRight, {
          size: 16
        })
      })]
    });
    $[20] = leftButton;
    $[21] = onNext;
    $[22] = showArrow;
    $[23] = showButtonRow;
    $[24] = t9;
  } else {
    t9 = $[24];
  }
  var t10;
  if ($[25] !== handleContentClick || $[26] !== t6 || $[27] !== t7 || $[28] !== t8 || $[29] !== t9) {
    t10 = /*#__PURE__*/_jsxs("div", {
      className: t6,
      onClick: handleContentClick,
      children: [t7, t8, t9]
    });
    $[25] = handleContentClick;
    $[26] = t6;
    $[27] = t7;
    $[28] = t8;
    $[29] = t9;
    $[30] = t10;
  } else {
    t10 = $[30];
  }
  var t11;
  if ($[31] !== props || $[32] !== t10 || $[33] !== t3) {
    t11 = /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({
      "data-slot": "ftue-tooltip",
      className: t3
    }, props), {}, {
      children: [t4, t10]
    }));
    $[31] = props;
    $[32] = t10;
    $[33] = t3;
    $[34] = t11;
  } else {
    t11 = $[34];
  }
  return t11;
}
function _temp(e_0) {
  return e_0.stopPropagation();
}
export { FtueTooltip };

//# sourceMappingURL=ftue-tooltip.js.map