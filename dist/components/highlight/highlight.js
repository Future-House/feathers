import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "variant", "spread", "spreadX", "spreadY", "spreadTop", "spreadBottom", "spreadLeft", "spreadRight", "className", "style"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { cn } from "../../lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
var spreadValues = {
  none: '0',
  sm: '-4px',
  md: '-8px',
  lg: '-12px',
  xl: '-16px'
};
var Highlight = /*#__PURE__*/React.forwardRef(function (t0, ref) {
  var $ = _c(44);
  var children;
  var className;
  var props;
  var spread;
  var spreadBottom;
  var spreadLeft;
  var spreadRight;
  var spreadTop;
  var spreadX;
  var spreadY;
  var style;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    children = _t.children;
    t1 = _t.variant;
    spread = _t.spread;
    spreadX = _t.spreadX;
    spreadY = _t.spreadY;
    spreadTop = _t.spreadTop;
    spreadBottom = _t.spreadBottom;
    spreadLeft = _t.spreadLeft;
    spreadRight = _t.spreadRight;
    className = _t.className;
    style = _t.style;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = spread;
    $[5] = spreadBottom;
    $[6] = spreadLeft;
    $[7] = spreadRight;
    $[8] = spreadTop;
    $[9] = spreadX;
    $[10] = spreadY;
    $[11] = style;
    $[12] = t1;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    spread = $[4];
    spreadBottom = $[5];
    spreadLeft = $[6];
    spreadRight = $[7];
    spreadTop = $[8];
    spreadX = $[9];
    spreadY = $[10];
    style = $[11];
    t1 = $[12];
  }
  var variant = t1 === undefined ? 1 : t1;
  var variantPath = "/src/components/highlight/variants/".concat(variant, ".svg");
  var t2;
  if ($[13] !== spread || $[14] !== spreadBottom || $[15] !== spreadLeft || $[16] !== spreadRight || $[17] !== spreadTop || $[18] !== spreadX || $[19] !== spreadY) {
    t2 = function t2(direction) {
      if (direction === "top" && spreadTop) {
        return spreadValues[spreadTop] || "0";
      }
      if (direction === "bottom" && spreadBottom) {
        return spreadValues[spreadBottom] || "0";
      }
      if (direction === "left" && spreadLeft) {
        return spreadValues[spreadLeft] || "0";
      }
      if (direction === "right" && spreadRight) {
        return spreadValues[spreadRight] || "0";
      }
      if ((direction === "left" || direction === "right") && spreadX) {
        return spreadValues[spreadX] || "0";
      }
      if ((direction === "top" || direction === "bottom") && spreadY) {
        return spreadValues[spreadY] || "0";
      }
      if (spread) {
        return spreadValues[spread] || "0";
      }
      return "0";
    };
    $[13] = spread;
    $[14] = spreadBottom;
    $[15] = spreadLeft;
    $[16] = spreadRight;
    $[17] = spreadTop;
    $[18] = spreadX;
    $[19] = spreadY;
    $[20] = t2;
  } else {
    t2 = $[20];
  }
  var getSpreadValue = t2;
  var t3;
  if ($[21] !== getSpreadValue) {
    t3 = getSpreadValue("top");
    $[21] = getSpreadValue;
    $[22] = t3;
  } else {
    t3 = $[22];
  }
  var spreadTopValue = t3;
  var t4;
  if ($[23] !== getSpreadValue) {
    t4 = getSpreadValue("bottom");
    $[23] = getSpreadValue;
    $[24] = t4;
  } else {
    t4 = $[24];
  }
  var spreadBottomValue = t4;
  var t5;
  if ($[25] !== getSpreadValue) {
    t5 = getSpreadValue("left");
    $[25] = getSpreadValue;
    $[26] = t5;
  } else {
    t5 = $[26];
  }
  var spreadLeftValue = t5;
  var t6;
  if ($[27] !== getSpreadValue) {
    t6 = getSpreadValue("right");
    $[27] = getSpreadValue;
    $[28] = t6;
  } else {
    t6 = $[28];
  }
  var spreadRightValue = t6;
  var t7 = "url(".concat(variantPath, ")");
  var t8;
  if ($[29] !== spreadBottomValue || $[30] !== spreadLeftValue || $[31] !== spreadRightValue || $[32] !== spreadTopValue || $[33] !== style || $[34] !== t7) {
    t8 = _objectSpread(_objectSpread({}, style), {}, {
      "--highlight-variant": t7,
      "--highlight-spread-top": spreadTopValue,
      "--highlight-spread-bottom": spreadBottomValue,
      "--highlight-spread-left": spreadLeftValue,
      "--highlight-spread-right": spreadRightValue
    });
    $[29] = spreadBottomValue;
    $[30] = spreadLeftValue;
    $[31] = spreadRightValue;
    $[32] = spreadTopValue;
    $[33] = style;
    $[34] = t7;
    $[35] = t8;
  } else {
    t8 = $[35];
  }
  var inlineStyle = t8;
  var t9;
  if ($[36] !== className) {
    t9 = cn("highlight", className);
    $[36] = className;
    $[37] = t9;
  } else {
    t9 = $[37];
  }
  var t10;
  if ($[38] !== children || $[39] !== inlineStyle || $[40] !== props || $[41] !== ref || $[42] !== t9) {
    t10 = /*#__PURE__*/_jsx("span", _objectSpread(_objectSpread({
      ref: ref,
      className: t9,
      style: inlineStyle
    }, props), {}, {
      children: children
    }));
    $[38] = children;
    $[39] = inlineStyle;
    $[40] = props;
    $[41] = ref;
    $[42] = t9;
    $[43] = t10;
  } else {
    t10 = $[43];
  }
  return t10;
});
Highlight.displayName = 'Highlight';
export { Highlight };

//# sourceMappingURL=highlight.js.map