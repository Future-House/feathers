import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["logo", "title", "children", "preferences", "actionButton", "showCloseButton", "currentStep", "totalSteps"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Close as XIcon } from "../../icons";
import { Checkbox } from "../checkbox";
import { cn } from "../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function FtueModal(t0) {
  var $ = _c(36);
  var actionButton;
  var children;
  var currentStep;
  var logo;
  var preferences;
  var props;
  var t1;
  var title;
  var totalSteps;
  if ($[0] !== t0) {
    var _t = t0;
    logo = _t.logo;
    title = _t.title;
    children = _t.children;
    preferences = _t.preferences;
    actionButton = _t.actionButton;
    t1 = _t.showCloseButton;
    currentStep = _t.currentStep;
    totalSteps = _t.totalSteps;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = actionButton;
    $[2] = children;
    $[3] = currentStep;
    $[4] = logo;
    $[5] = preferences;
    $[6] = props;
    $[7] = t1;
    $[8] = title;
    $[9] = totalSteps;
  } else {
    actionButton = $[1];
    children = $[2];
    currentStep = $[3];
    logo = $[4];
    preferences = $[5];
    props = $[6];
    t1 = $[7];
    title = $[8];
    totalSteps = $[9];
  }
  var showCloseButton = t1 === undefined ? false : t1;
  var t2;
  if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx(DialogPrimitive.Overlay, {
      "data-slot": "ftue-modal-overlay",
      className: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50"
    });
    $[10] = t2;
  } else {
    t2 = $[10];
  }
  var t3;
  if ($[11] !== logo) {
    t3 = logo && /*#__PURE__*/_jsx("div", {
      "data-slot": "ftue-modal-logo",
      className: "flex justify-start",
      children: logo
    });
    $[11] = logo;
    $[12] = t3;
  } else {
    t3 = $[12];
  }
  var t4;
  if ($[13] !== title) {
    t4 = title && /*#__PURE__*/_jsx(DialogPrimitive.Title, {
      "data-slot": "ftue-modal-title",
      className: "text-left font-bold text-gray-800 dark:text-white",
      style: {
        fontSize: "21px"
      },
      children: title
    });
    $[13] = title;
    $[14] = t4;
  } else {
    t4 = $[14];
  }
  var t5;
  if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = {
      lineHeight: "24px",
      fontSize: "12px"
    };
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  var t6;
  if ($[16] !== children) {
    t6 = /*#__PURE__*/_jsx("div", {
      "data-slot": "ftue-modal-body",
      className: "-mt-3 font-mono text-xs font-normal text-gray-800 dark:text-[var(--ftue-modal-body-text)] [&_p]:!text-[12px] [&_p]:!leading-[24px] [&>*]:!text-[12px] [&>*]:!leading-[24px]",
      style: t5,
      children: children
    });
    $[16] = children;
    $[17] = t6;
  } else {
    t6 = $[17];
  }
  var t7;
  if ($[18] !== preferences) {
    t7 = preferences && preferences.length > 0 && /*#__PURE__*/_jsx("div", {
      "data-slot": "ftue-modal-preferences",
      className: "-mx-6 bg-[var(--ftue-modal-preferences-bg)] px-6 py-6",
      children: preferences.map(_temp)
    });
    $[18] = preferences;
    $[19] = t7;
  } else {
    t7 = $[19];
  }
  var t8;
  if ($[20] !== actionButton || $[21] !== currentStep || $[22] !== totalSteps) {
    t8 = (actionButton || currentStep && totalSteps) && /*#__PURE__*/_jsxs("div", {
      "data-slot": "ftue-modal-action",
      className: cn("flex items-center [&_button]:!px-3 [&_button]:!py-2 [&_button]:!text-sm [&_button]:!font-medium [&_button[class*=\"bg-\"]:not([class*=\"bg-transparent\"])]:dark:!text-black [&_button[class*=\"outline\"]]:dark:!text-white", currentStep && totalSteps ? "justify-between" : "justify-end"),
      children: [currentStep && totalSteps && /*#__PURE__*/_jsx("div", {
        "data-slot": "ftue-modal-step-tracker",
        className: "flex items-center gap-1.5",
        children: Array.from({
          length: totalSteps
        }, function (_, index) {
          var step = index + 1;
          var isActive = step === currentStep;
          var isCompleted = step < currentStep;
          return /*#__PURE__*/_jsx("div", {
            className: cn("h-1.5 w-1.5 rounded-full transition-colors", isActive ? "bg-gray-800 dark:bg-white" : isCompleted ? "bg-gray-400 dark:bg-gray-500" : "bg-gray-300 dark:bg-gray-600"),
            "aria-label": "Step ".concat(step, " of ").concat(totalSteps)
          }, step);
        })
      }), actionButton]
    });
    $[20] = actionButton;
    $[21] = currentStep;
    $[22] = totalSteps;
    $[23] = t8;
  } else {
    t8 = $[23];
  }
  var t9;
  if ($[24] !== showCloseButton) {
    t9 = showCloseButton && /*#__PURE__*/_jsxs(DialogPrimitive.Close, {
      "data-slot": "ftue-modal-close",
      className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      children: [/*#__PURE__*/_jsx(XIcon, {}), /*#__PURE__*/_jsx("span", {
        className: "sr-only",
        children: "Close"
      })]
    });
    $[24] = showCloseButton;
    $[25] = t9;
  } else {
    t9 = $[25];
  }
  var t10;
  if ($[26] !== t3 || $[27] !== t4 || $[28] !== t6 || $[29] !== t7 || $[30] !== t8 || $[31] !== t9) {
    t10 = /*#__PURE__*/_jsxs(DialogPrimitive.Portal, {
      "data-slot": "ftue-modal-portal",
      children: [t2, /*#__PURE__*/_jsxs(DialogPrimitive.Content, {
        "data-slot": "ftue-modal-content",
        className: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-6 rounded-[8px] border !border-[var(--ftue-modal-border)] bg-[var(--ftue-modal-bg)] p-6 shadow-lg duration-200 sm:max-w-lg",
        children: [t3, t4, t6, t7, t8, t9]
      })]
    });
    $[26] = t3;
    $[27] = t4;
    $[28] = t6;
    $[29] = t7;
    $[30] = t8;
    $[31] = t9;
    $[32] = t10;
  } else {
    t10 = $[32];
  }
  var t11;
  if ($[33] !== props || $[34] !== t10) {
    t11 = /*#__PURE__*/_jsx(DialogPrimitive.Root, _objectSpread(_objectSpread({
      "data-slot": "ftue-modal"
    }, props), {}, {
      children: t10
    }));
    $[33] = props;
    $[34] = t10;
    $[35] = t11;
  } else {
    t11 = $[35];
  }
  return t11;
}
function _temp(preference) {
  return /*#__PURE__*/_jsxs("div", {
    "data-slot": "ftue-modal-preference-item",
    className: "flex items-center gap-3 pt-[12px] pb-[12px] first:pt-0 last:pb-0",
    children: [/*#__PURE__*/_jsx(Checkbox, {
      id: preference.id,
      checked: preference.checked,
      onCheckedChange: function onCheckedChange(checked) {
        var _preference$onChecked;
        return (_preference$onChecked = preference.onCheckedChange) === null || _preference$onChecked === void 0 ? void 0 : _preference$onChecked.call(preference, checked === true);
      },
      className: "!border-gray-800 dark:!border-white"
    }), /*#__PURE__*/_jsxs("div", {
      className: "flex-1",
      children: [/*#__PURE__*/_jsx("label", {
        htmlFor: preference.id,
        className: "mb-0 block cursor-pointer font-sans text-sm text-gray-800 dark:text-white",
        style: {
          fontSize: "14px"
        },
        children: preference.label
      }), /*#__PURE__*/_jsx("p", {
        className: "font-mono text-gray-600 dark:text-[var(--ftue-modal-body-text)]",
        style: {
          fontSize: "12px"
        },
        children: preference.description
      })]
    })]
  }, preference.id);
}
export { FtueModal };

//# sourceMappingURL=ftue-modal.js.map