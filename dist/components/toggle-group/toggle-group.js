import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "variant", "size", "orientation", "children"],
  _excluded2 = ["className", "children", "variant", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { cn } from "../../lib/utils";
import { toggleVariants } from "../toggle";
import { jsx as _jsx } from "react/jsx-runtime";
var ToggleGroupContext = /*#__PURE__*/React.createContext({
  size: 'default',
  variant: 'default',
  orientation: 'horizontal'
});
function ToggleGroup(t0) {
  var $ = _c(24);
  var children;
  var className;
  var props;
  var size;
  var t1;
  var variant;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    variant = _t.variant;
    size = _t.size;
    t1 = _t.orientation;
    children = _t.children;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = size;
    $[5] = t1;
    $[6] = variant;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    size = $[4];
    t1 = $[5];
    variant = $[6];
  }
  var orientation = t1 === undefined ? "horizontal" : t1;
  var t2 = orientation === "horizontal" ? "items-center" : "flex-col items-start";
  var t3;
  if ($[7] !== className || $[8] !== t2) {
    t3 = cn("group/toggle-group flex w-fit rounded-md data-[variant=outline]:shadow-xs", t2, className);
    $[7] = className;
    $[8] = t2;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  var t4;
  if ($[10] !== orientation || $[11] !== size || $[12] !== variant) {
    t4 = {
      variant: variant,
      size: size,
      orientation: orientation
    };
    $[10] = orientation;
    $[11] = size;
    $[12] = variant;
    $[13] = t4;
  } else {
    t4 = $[13];
  }
  var t5;
  if ($[14] !== children || $[15] !== t4) {
    t5 = /*#__PURE__*/_jsx(ToggleGroupContext.Provider, {
      value: t4,
      children: children
    });
    $[14] = children;
    $[15] = t4;
    $[16] = t5;
  } else {
    t5 = $[16];
  }
  var t6;
  if ($[17] !== orientation || $[18] !== props || $[19] !== size || $[20] !== t3 || $[21] !== t5 || $[22] !== variant) {
    t6 = /*#__PURE__*/_jsx(ToggleGroupPrimitive.Root, _objectSpread(_objectSpread({
      "data-slot": "toggle-group",
      "data-variant": variant,
      "data-size": size,
      "data-orientation": orientation,
      className: t3,
      orientation: orientation
    }, props), {}, {
      children: t5
    }));
    $[17] = orientation;
    $[18] = props;
    $[19] = size;
    $[20] = t3;
    $[21] = t5;
    $[22] = variant;
    $[23] = t6;
  } else {
    t6 = $[23];
  }
  return t6;
}
function ToggleGroupItem(t0) {
  var $ = _c(18);
  var children;
  var className;
  var props;
  var size;
  var variant;
  if ($[0] !== t0) {
    var _t2 = t0;
    className = _t2.className;
    children = _t2.children;
    variant = _t2.variant;
    size = _t2.size;
    props = _objectWithoutProperties(_t2, _excluded2);
    _t2;
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = size;
    $[5] = variant;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    size = $[4];
    variant = $[5];
  }
  var context = React.useContext(ToggleGroupContext);
  var isVertical = context.orientation === "vertical";
  var t1 = context.variant || variant;
  var t2 = context.size || size;
  var t3 = context.orientation;
  var t4 = context.variant || variant;
  var t5 = context.size || size;
  var t6;
  if ($[6] !== className || $[7] !== isVertical || $[8] !== t4 || $[9] !== t5) {
    t6 = cn(toggleVariants({
      variant: t4,
      size: t5
    }), "min-w-0 flex-auto shrink-0 rounded-none shadow-none focus:z-10 focus-visible:z-10", !isVertical && ["first:rounded-s-md last:rounded-e-md", "data-[variant=outline]:border-s-0 data-[variant=outline]:first:border-s"], isVertical && ["w-full first:rounded-t-md last:rounded-b-md", "data-[variant=outline]:border-t-0 data-[variant=outline]:first:border-t"], className);
    $[6] = className;
    $[7] = isVertical;
    $[8] = t4;
    $[9] = t5;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  var t7;
  if ($[11] !== children || $[12] !== context.orientation || $[13] !== props || $[14] !== t1 || $[15] !== t2 || $[16] !== t6) {
    t7 = /*#__PURE__*/_jsx(ToggleGroupPrimitive.Item, _objectSpread(_objectSpread({
      "data-slot": "toggle-group-item",
      "data-variant": t1,
      "data-size": t2,
      "data-orientation": t3,
      className: t6
    }, props), {}, {
      children: children
    }));
    $[11] = children;
    $[12] = context.orientation;
    $[13] = props;
    $[14] = t1;
    $[15] = t2;
    $[16] = t6;
    $[17] = t7;
  } else {
    t7 = $[17];
  }
  return t7;
}
export { ToggleGroup, ToggleGroupItem };

//# sourceMappingURL=toggle-group.js.map