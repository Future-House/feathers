import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "containerClassName"],
  _excluded2 = ["className"],
  _excluded3 = ["index", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { OTPInput, OTPInputContext } from 'input-otp';
import { Subtract as Minus } from "../../icons";
import { cn } from "../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function InputOTP(t0) {
  var $ = _c(12);
  var className;
  var containerClassName;
  var props;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    containerClassName = _t.containerClassName;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = containerClassName;
    $[3] = props;
  } else {
    className = $[1];
    containerClassName = $[2];
    props = $[3];
  }
  var t1;
  if ($[4] !== containerClassName) {
    t1 = cn("flex items-center gap-2 has-disabled:opacity-50", containerClassName);
    $[4] = containerClassName;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var t2;
  if ($[6] !== className) {
    t2 = cn("disabled:cursor-not-allowed", className);
    $[6] = className;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  var t3;
  if ($[8] !== props || $[9] !== t1 || $[10] !== t2) {
    t3 = /*#__PURE__*/_jsx(OTPInput, _objectSpread({
      "data-slot": "input-otp",
      containerClassName: t1,
      className: t2
    }, props));
    $[8] = props;
    $[9] = t1;
    $[10] = t2;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  return t3;
}
function InputOTPGroup(t0) {
  var $ = _c(8);
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
    t1 = cn("flex items-center", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("div", _objectSpread({
      "data-slot": "input-otp-group",
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
function InputOTPSlot(t0) {
  var $ = _c(17);
  var className;
  var index;
  var props;
  if ($[0] !== t0) {
    var _t3 = t0;
    index = _t3.index;
    className = _t3.className;
    props = _objectWithoutProperties(_t3, _excluded3);
    _t3;
    $[0] = t0;
    $[1] = className;
    $[2] = index;
    $[3] = props;
  } else {
    className = $[1];
    index = $[2];
    props = $[3];
  }
  var inputOTPContext = React.useContext(OTPInputContext);
  var t1;
  if ($[4] !== index || $[5] !== (inputOTPContext === null || inputOTPContext === void 0 ? void 0 : inputOTPContext.slots)) {
    var _inputOTPContext$slot;
    t1 = (_inputOTPContext$slot = inputOTPContext === null || inputOTPContext === void 0 ? void 0 : inputOTPContext.slots[index]) !== null && _inputOTPContext$slot !== void 0 ? _inputOTPContext$slot : {};
    $[4] = index;
    $[5] = inputOTPContext === null || inputOTPContext === void 0 ? void 0 : inputOTPContext.slots;
    $[6] = t1;
  } else {
    t1 = $[6];
  }
  var _t4 = t1,
    char = _t4.char,
    hasFakeCaret = _t4.hasFakeCaret,
    isActive = _t4.isActive;
  var t2;
  if ($[7] !== className) {
    t2 = cn("data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]", className);
    $[7] = className;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  var t3;
  if ($[9] !== hasFakeCaret) {
    t3 = hasFakeCaret && /*#__PURE__*/_jsx("div", {
      className: "pointer-events-none absolute inset-0 flex items-center justify-center",
      children: /*#__PURE__*/_jsx("div", {
        className: "animate-caret-blink bg-foreground h-4 w-px duration-1000"
      })
    });
    $[9] = hasFakeCaret;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  var t4;
  if ($[11] !== char || $[12] !== isActive || $[13] !== props || $[14] !== t2 || $[15] !== t3) {
    t4 = /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({
      "data-slot": "input-otp-slot",
      "data-active": isActive,
      className: t2
    }, props), {}, {
      children: [char, t3]
    }));
    $[11] = char;
    $[12] = isActive;
    $[13] = props;
    $[14] = t2;
    $[15] = t3;
    $[16] = t4;
  } else {
    t4 = $[16];
  }
  return t4;
}
function InputOTPSeparator(t0) {
  var $ = _c(5);
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
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /*#__PURE__*/_jsx(Minus, {});
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  var t2;
  if ($[3] !== props) {
    t2 = /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
      "data-slot": "input-otp-separator",
      role: "separator"
    }, props), {}, {
      children: t1
    }));
    $[3] = props;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  return t2;
}
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

//# sourceMappingURL=input-otp.js.map