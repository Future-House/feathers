import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Checkmark as Check, ChevronSort as ChevronsUpDown } from "../../icons";
import { cn } from "../../lib/utils";
import { Button } from "../button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../command";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Combobox(t0) {
  var $ = _c(46);
  var options = t0.options,
    value = t0.value,
    onValueChange = t0.onValueChange,
    t1 = t0.placeholder,
    t2 = t0.searchPlaceholder,
    t3 = t0.emptyMessage,
    className = t0.className,
    t4 = t0.disabled,
    t5 = t0.width;
  var placeholder = t1 === undefined ? "Select option..." : t1;
  var searchPlaceholder = t2 === undefined ? "Search..." : t2;
  var emptyMessage = t3 === undefined ? "No option found." : t3;
  var disabled = t4 === undefined ? false : t4;
  var width = t5 === undefined ? "w-[200px]" : t5;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = React.useState(""),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    internalValue = _React$useState4[0],
    setInternalValue = _React$useState4[1];
  var currentValue = value !== undefined ? value : internalValue;
  var t6;
  if ($[0] !== currentValue || $[1] !== onValueChange || $[2] !== value) {
    t6 = function t6(newValue) {
      var finalValue = currentValue === newValue ? "" : newValue;
      if (value === undefined) {
        setInternalValue(finalValue);
      }
      onValueChange === null || onValueChange === void 0 || onValueChange(finalValue);
      setOpen(false);
    };
    $[0] = currentValue;
    $[1] = onValueChange;
    $[2] = value;
    $[3] = t6;
  } else {
    t6 = $[3];
  }
  var handleValueChange = t6;
  var t7;
  if ($[4] !== currentValue || $[5] !== options) {
    var _t;
    if ($[7] !== currentValue) {
      _t = function _t(option) {
        return option.value === currentValue;
      };
      $[7] = currentValue;
      $[8] = _t;
    } else {
      _t = $[8];
    }
    t7 = options.find(_t);
    $[4] = currentValue;
    $[5] = options;
    $[6] = t7;
  } else {
    t7 = $[6];
  }
  var selectedOption = t7;
  var t8;
  if ($[9] !== className || $[10] !== width) {
    t8 = cn(width, "justify-between", className);
    $[9] = className;
    $[10] = width;
    $[11] = t8;
  } else {
    t8 = $[11];
  }
  var t9 = selectedOption ? selectedOption.label : placeholder;
  var t10;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = /*#__PURE__*/_jsx(ChevronsUpDown, {
      className: "ml-2 h-4 w-4 shrink-0 opacity-50"
    });
    $[12] = t10;
  } else {
    t10 = $[12];
  }
  var t11;
  if ($[13] !== disabled || $[14] !== open || $[15] !== t8 || $[16] !== t9) {
    t11 = /*#__PURE__*/_jsx(PopoverTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsxs(Button, {
        variant: "outline",
        role: "combobox",
        "aria-expanded": open,
        className: t8,
        disabled: disabled,
        children: [t9, t10]
      })
    });
    $[13] = disabled;
    $[14] = open;
    $[15] = t8;
    $[16] = t9;
    $[17] = t11;
  } else {
    t11 = $[17];
  }
  var t12;
  if ($[18] !== width) {
    t12 = cn(width, "p-0");
    $[18] = width;
    $[19] = t12;
  } else {
    t12 = $[19];
  }
  var t13;
  if ($[20] !== searchPlaceholder) {
    t13 = /*#__PURE__*/_jsx(CommandInput, {
      placeholder: searchPlaceholder,
      className: "h-9"
    });
    $[20] = searchPlaceholder;
    $[21] = t13;
  } else {
    t13 = $[21];
  }
  var t14;
  if ($[22] !== emptyMessage) {
    t14 = /*#__PURE__*/_jsx(CommandEmpty, {
      children: emptyMessage
    });
    $[22] = emptyMessage;
    $[23] = t14;
  } else {
    t14 = $[23];
  }
  var t15;
  if ($[24] !== currentValue || $[25] !== handleValueChange || $[26] !== options) {
    var _t2;
    if ($[28] !== currentValue || $[29] !== handleValueChange) {
      _t2 = function _t2(option_0) {
        return /*#__PURE__*/_jsxs(CommandItem, {
          value: option_0.value,
          onSelect: handleValueChange,
          disabled: option_0.disabled,
          children: [/*#__PURE__*/_jsx(Check, {
            className: cn("mr-2 h-4 w-4", currentValue === option_0.value ? "opacity-100" : "opacity-0")
          }), option_0.label]
        }, option_0.value);
      };
      $[28] = currentValue;
      $[29] = handleValueChange;
      $[30] = _t2;
    } else {
      _t2 = $[30];
    }
    t15 = options.map(_t2);
    $[24] = currentValue;
    $[25] = handleValueChange;
    $[26] = options;
    $[27] = t15;
  } else {
    t15 = $[27];
  }
  var t16;
  if ($[31] !== t15) {
    t16 = /*#__PURE__*/_jsx(CommandGroup, {
      children: t15
    });
    $[31] = t15;
    $[32] = t16;
  } else {
    t16 = $[32];
  }
  var t17;
  if ($[33] !== t14 || $[34] !== t16) {
    t17 = /*#__PURE__*/_jsxs(CommandList, {
      children: [t14, t16]
    });
    $[33] = t14;
    $[34] = t16;
    $[35] = t17;
  } else {
    t17 = $[35];
  }
  var t18;
  if ($[36] !== t13 || $[37] !== t17) {
    t18 = /*#__PURE__*/_jsxs(Command, {
      children: [t13, t17]
    });
    $[36] = t13;
    $[37] = t17;
    $[38] = t18;
  } else {
    t18 = $[38];
  }
  var t19;
  if ($[39] !== t12 || $[40] !== t18) {
    t19 = /*#__PURE__*/_jsx(PopoverContent, {
      className: t12,
      children: t18
    });
    $[39] = t12;
    $[40] = t18;
    $[41] = t19;
  } else {
    t19 = $[41];
  }
  var t20;
  if ($[42] !== open || $[43] !== t11 || $[44] !== t19) {
    t20 = /*#__PURE__*/_jsxs(Popover, {
      open: open,
      onOpenChange: setOpen,
      children: [t11, t19]
    });
    $[42] = open;
    $[43] = t11;
    $[44] = t19;
    $[45] = t20;
  } else {
    t20 = $[45];
  }
  return t20;
}
export { Combobox };

//# sourceMappingURL=combobox.js.map