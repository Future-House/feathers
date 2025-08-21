import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "orientation", "decorative"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from "../../lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
function Separator(t0) {
  var $ = _c(12);
  var className;
  var props;
  var t1;
  var t2;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    t1 = _t.orientation;
    t2 = _t.decorative;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
  }
  var orientation = t1 === undefined ? "horizontal" : t1;
  var decorative = t2 === undefined ? true : t2;
  var t3;
  if ($[5] !== className) {
    t3 = cn("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className);
    $[5] = className;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  var t4;
  if ($[7] !== decorative || $[8] !== orientation || $[9] !== props || $[10] !== t3) {
    t4 = /*#__PURE__*/_jsx(SeparatorPrimitive.Root, _objectSpread({
      "data-slot": "separator",
      decorative: decorative,
      orientation: orientation,
      className: t3
    }, props));
    $[7] = decorative;
    $[8] = orientation;
    $[9] = props;
    $[10] = t3;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  return t4;
}
export { Separator };

//# sourceMappingURL=separator.js.map