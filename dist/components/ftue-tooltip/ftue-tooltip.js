import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "headline", "children", "onNext", "isLast", "leftButton", "arrowPosition"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { cn } from "../../lib/utils";
import { ArrowRight } from "../../icons";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function FtueTooltip(t0) {
  var $ = _c(46);
  var children;
  var className;
  var headline;
  var leftButton;
  var onNext;
  var props;
  var t1;
  var t2;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    headline = _t.headline;
    children = _t.children;
    onNext = _t.onNext;
    t1 = _t.isLast;
    leftButton = _t.leftButton;
    t2 = _t.arrowPosition;
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
    $[8] = t2;
  } else {
    children = $[1];
    className = $[2];
    headline = $[3];
    leftButton = $[4];
    onNext = $[5];
    props = $[6];
    t1 = $[7];
    t2 = $[8];
  }
  var isLast = t1 === undefined ? false : t1;
  var arrowPosition = t2 === undefined ? "top" : t2;
  var t3;
  if ($[9] !== isLast || $[10] !== onNext) {
    t3 = function t3(e) {
      if (onNext && !isLast && !e.target.closest("[data-slot=\"ftue-tooltip-next\"]") && !e.target.closest("[data-slot=\"ftue-tooltip-left-button\"]")) {
        onNext();
      }
    };
    $[9] = isLast;
    $[10] = onNext;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  var handleContentClick = t3;
  var showArrow = onNext && !isLast;
  var showButtonRow = showArrow || leftButton;
  var t4;
  if ($[12] !== arrowPosition) {
    t4 = function t4() {
      switch (arrowPosition) {
        case "left":
          {
            return "absolute -left-2 top-1/2 -translate-y-1/2";
          }
        case "right":
          {
            return "absolute -right-2 top-1/2 -translate-y-1/2";
          }
        case "top":
          {}
        default:
          {
            return "absolute -top-2 left-1/2 -translate-x-1/2";
          }
      }
    };
    $[12] = arrowPosition;
    $[13] = t4;
  } else {
    t4 = $[13];
  }
  var getArrowClasses = t4;
  var t5;
  if ($[14] !== arrowPosition) {
    t5 = function t5() {
      switch (arrowPosition) {
        case "left":
          {
            return /*#__PURE__*/_jsx("div", {
              className: "h-0 w-0 border-y-[8px] border-r-[8px] border-y-transparent border-r-white"
            });
          }
        case "right":
          {
            return /*#__PURE__*/_jsx("div", {
              className: "h-0 w-0 border-y-[8px] border-l-[8px] border-y-transparent border-l-white"
            });
          }
        case "top":
          {}
        default:
          {
            return /*#__PURE__*/_jsx("div", {
              className: "h-0 w-0 border-x-[8px] border-b-[8px] border-x-transparent border-b-white"
            });
          }
      }
    };
    $[14] = arrowPosition;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  var getArrowShape = t5;
  var t6;
  if ($[16] !== className) {
    t6 = cn("absolute z-50 w-[284px] rounded-[4px] bg-white p-4 shadow-lg", className);
    $[16] = className;
    $[17] = t6;
  } else {
    t6 = $[17];
  }
  var t7 = getArrowClasses();
  var t8;
  if ($[18] !== getArrowShape) {
    t8 = getArrowShape();
    $[18] = getArrowShape;
    $[19] = t8;
  } else {
    t8 = $[19];
  }
  var t9;
  if ($[20] !== t7 || $[21] !== t8) {
    t9 = /*#__PURE__*/_jsx("div", {
      "data-slot": "ftue-tooltip-arrow",
      className: t7,
      children: t8
    });
    $[20] = t7;
    $[21] = t8;
    $[22] = t9;
  } else {
    t9 = $[22];
  }
  var t10 = showArrow && "cursor-pointer";
  var t11;
  if ($[23] !== t10) {
    t11 = cn("relative", t10);
    $[23] = t10;
    $[24] = t11;
  } else {
    t11 = $[24];
  }
  var t12;
  if ($[25] !== headline) {
    t12 = headline && /*#__PURE__*/_jsx("div", {
      "data-slot": "ftue-tooltip-headline",
      className: "mb-1 inline-block text-sm font-bold text-black",
      children: headline
    });
    $[25] = headline;
    $[26] = t12;
  } else {
    t12 = $[26];
  }
  var t13;
  if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = {
      fontSize: "12px"
    };
    $[27] = t13;
  } else {
    t13 = $[27];
  }
  var t14;
  if ($[28] !== children) {
    t14 = /*#__PURE__*/_jsx("div", {
      className: "mb-2 font-mono text-xs [&_p]:!text-[12px] [&>*]:!text-[12px]",
      style: t13,
      children: children
    });
    $[28] = children;
    $[29] = t14;
  } else {
    t14 = $[29];
  }
  var t15;
  if ($[30] !== leftButton || $[31] !== onNext || $[32] !== showArrow || $[33] !== showButtonRow) {
    t15 = showButtonRow && /*#__PURE__*/_jsxs("div", {
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
    $[30] = leftButton;
    $[31] = onNext;
    $[32] = showArrow;
    $[33] = showButtonRow;
    $[34] = t15;
  } else {
    t15 = $[34];
  }
  var t16;
  if ($[35] !== handleContentClick || $[36] !== t11 || $[37] !== t12 || $[38] !== t14 || $[39] !== t15) {
    t16 = /*#__PURE__*/_jsxs("div", {
      className: t11,
      onClick: handleContentClick,
      children: [t12, t14, t15]
    });
    $[35] = handleContentClick;
    $[36] = t11;
    $[37] = t12;
    $[38] = t14;
    $[39] = t15;
    $[40] = t16;
  } else {
    t16 = $[40];
  }
  var t17;
  if ($[41] !== props || $[42] !== t16 || $[43] !== t6 || $[44] !== t9) {
    t17 = /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({
      "data-slot": "ftue-tooltip",
      className: t6
    }, props), {}, {
      children: [t9, t16]
    }));
    $[41] = props;
    $[42] = t16;
    $[43] = t6;
    $[44] = t9;
    $[45] = t17;
  } else {
    t17 = $[45];
  }
  return t17;
}
function _temp(e_0) {
  return e_0.stopPropagation();
}
export { FtueTooltip };

//# sourceMappingURL=ftue-tooltip.js.map