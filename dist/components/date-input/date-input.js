import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Calendar as CalendarIcon } from "../../icons";
import { cn } from "../../lib/utils";
import { Button } from "../button";
import { Calendar } from "../calendar";
import { Input } from "../input";
import { Label } from "../label";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function formatDate(date) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  };
  if (!date) {
    return '';
  }
  return date.toLocaleDateString('en-US', options);
}
function isValidDate(date) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}
function DateInput(t0) {
  var $ = _c(53);
  var id = t0.id,
    label = t0.label,
    selected = t0.selected,
    onSelect = t0.onSelect,
    t1 = t0.disabled,
    t2 = t0.placeholder,
    className = t0.className,
    inputClassName = t0.inputClassName,
    calendarClassName = t0.calendarClassName,
    formatOptions = t0.formatOptions,
    t3 = t0.align,
    t4 = t0.side,
    t5 = t0.alignOffset,
    t6 = t0.sideOffset,
    t7 = t0.captionLayout;
  var disabled = t1 === undefined ? false : t1;
  var placeholder = t2 === undefined ? "Select date" : t2;
  var align = t3 === undefined ? "end" : t3;
  var side = t4 === undefined ? "bottom" : t4;
  var alignOffset = t5 === undefined ? -8 : t5;
  var sideOffset = t6 === undefined ? 10 : t6;
  var captionLayout = t7 === undefined ? "label" : t7;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = React.useState(selected),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    date = _React$useState4[0],
    setDate = _React$useState4[1];
  var _React$useState5 = React.useState(selected),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    month = _React$useState6[0],
    setMonth = _React$useState6[1];
  var t8;
  if ($[0] !== formatOptions || $[1] !== selected) {
    t8 = formatDate(selected, formatOptions);
    $[0] = formatOptions;
    $[1] = selected;
    $[2] = t8;
  } else {
    t8 = $[2];
  }
  var _React$useState7 = React.useState(t8),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    value = _React$useState8[0],
    setValue = _React$useState8[1];
  var t10;
  var t9;
  if ($[3] !== formatOptions || $[4] !== selected) {
    t9 = function t9() {
      setDate(selected);
      setMonth(selected);
      setValue(formatDate(selected, formatOptions));
    };
    t10 = [selected, formatOptions];
    $[3] = formatOptions;
    $[4] = selected;
    $[5] = t10;
    $[6] = t9;
  } else {
    t10 = $[5];
    t9 = $[6];
  }
  React.useEffect(t9, t10);
  var t11;
  if ($[7] !== onSelect) {
    t11 = function t11(e) {
      var inputValue = e.target.value;
      setValue(inputValue);
      var parsedDate = new Date(inputValue);
      if (isValidDate(parsedDate)) {
        setDate(parsedDate);
        setMonth(parsedDate);
        onSelect === null || onSelect === void 0 || onSelect(parsedDate);
      }
    };
    $[7] = onSelect;
    $[8] = t11;
  } else {
    t11 = $[8];
  }
  var handleInputChange = t11;
  var t12;
  if ($[9] !== formatOptions || $[10] !== onSelect) {
    t12 = function t12(selectedDate) {
      setDate(selectedDate);
      setValue(formatDate(selectedDate, formatOptions));
      onSelect === null || onSelect === void 0 || onSelect(selectedDate);
      setOpen(false);
    };
    $[9] = formatOptions;
    $[10] = onSelect;
    $[11] = t12;
  } else {
    t12 = $[11];
  }
  var handleCalendarSelect = t12;
  var t13;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = function t13(e_0) {
      if (e_0.key === "ArrowDown") {
        e_0.preventDefault();
        setOpen(true);
      }
    };
    $[12] = t13;
  } else {
    t13 = $[12];
  }
  var handleKeyDown = t13;
  var inputId = id || "date-input";
  var t14;
  if ($[13] !== className) {
    t14 = cn("flex flex-col gap-3", className);
    $[13] = className;
    $[14] = t14;
  } else {
    t14 = $[14];
  }
  var t15;
  if ($[15] !== inputId || $[16] !== label) {
    t15 = label && /*#__PURE__*/_jsx(Label, {
      htmlFor: inputId,
      className: "px-1",
      children: label
    });
    $[15] = inputId;
    $[16] = label;
    $[17] = t15;
  } else {
    t15 = $[17];
  }
  var t16;
  if ($[18] !== inputClassName) {
    t16 = cn("bg-background pr-10", inputClassName);
    $[18] = inputClassName;
    $[19] = t16;
  } else {
    t16 = $[19];
  }
  var t17;
  if ($[20] !== disabled || $[21] !== handleInputChange || $[22] !== inputId || $[23] !== placeholder || $[24] !== t16 || $[25] !== value) {
    t17 = /*#__PURE__*/_jsx(Input, {
      id: inputId,
      value: value,
      placeholder: placeholder,
      className: t16,
      onChange: handleInputChange,
      onKeyDown: handleKeyDown,
      disabled: disabled
    });
    $[20] = disabled;
    $[21] = handleInputChange;
    $[22] = inputId;
    $[23] = placeholder;
    $[24] = t16;
    $[25] = value;
    $[26] = t17;
  } else {
    t17 = $[26];
  }
  var t18;
  if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
    t18 = /*#__PURE__*/_jsx(CalendarIcon, {
      className: "size-3.5"
    });
    $[27] = t18;
  } else {
    t18 = $[27];
  }
  var t19;
  if ($[28] !== disabled) {
    t19 = /*#__PURE__*/_jsx(PopoverTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsx(Button, {
        variant: "ghost",
        size: "icon",
        className: "absolute top-1/2 right-2 size-6 -translate-y-1/2",
        disabled: disabled,
        "aria-label": "Select date from calendar",
        children: t18
      })
    });
    $[28] = disabled;
    $[29] = t19;
  } else {
    t19 = $[29];
  }
  var t20;
  if ($[30] !== calendarClassName || $[31] !== captionLayout || $[32] !== date || $[33] !== handleCalendarSelect || $[34] !== month) {
    t20 = /*#__PURE__*/_jsx(Calendar, {
      mode: "single",
      selected: date,
      captionLayout: captionLayout,
      month: month,
      onMonthChange: setMonth,
      onSelect: handleCalendarSelect,
      className: calendarClassName,
      autoFocus: true
    });
    $[30] = calendarClassName;
    $[31] = captionLayout;
    $[32] = date;
    $[33] = handleCalendarSelect;
    $[34] = month;
    $[35] = t20;
  } else {
    t20 = $[35];
  }
  var t21;
  if ($[36] !== align || $[37] !== alignOffset || $[38] !== side || $[39] !== sideOffset || $[40] !== t20) {
    t21 = /*#__PURE__*/_jsx(PopoverContent, {
      className: "w-auto overflow-hidden p-0",
      align: align,
      side: side,
      alignOffset: alignOffset,
      sideOffset: sideOffset,
      children: t20
    });
    $[36] = align;
    $[37] = alignOffset;
    $[38] = side;
    $[39] = sideOffset;
    $[40] = t20;
    $[41] = t21;
  } else {
    t21 = $[41];
  }
  var t22;
  if ($[42] !== open || $[43] !== t19 || $[44] !== t21) {
    t22 = /*#__PURE__*/_jsxs(Popover, {
      open: open,
      onOpenChange: setOpen,
      children: [t19, t21]
    });
    $[42] = open;
    $[43] = t19;
    $[44] = t21;
    $[45] = t22;
  } else {
    t22 = $[45];
  }
  var t23;
  if ($[46] !== t17 || $[47] !== t22) {
    t23 = /*#__PURE__*/_jsxs("div", {
      className: "relative flex gap-2",
      children: [t17, t22]
    });
    $[46] = t17;
    $[47] = t22;
    $[48] = t23;
  } else {
    t23 = $[48];
  }
  var t24;
  if ($[49] !== t14 || $[50] !== t15 || $[51] !== t23) {
    t24 = /*#__PURE__*/_jsxs("div", {
      className: t14,
      children: [t15, t23]
    });
    $[49] = t14;
    $[50] = t15;
    $[51] = t23;
    $[52] = t24;
  } else {
    t24 = $[52];
  }
  return t24;
}
DateInput.displayName = 'DateInput';
export { DateInput, formatDate, isValidDate };

//# sourceMappingURL=date-input.js.map