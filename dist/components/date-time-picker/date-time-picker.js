import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import * as React from 'react';
import { Calendar as CalendarIcon } from "../../icons";
import { cn } from "../../lib/utils";
import { Button } from "../button";
import { Calendar } from "../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { ScrollArea, ScrollBar } from "../scroll-area";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function formatDateTime(date) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  };
  if (!date) {
    return '';
  }
  return date.toLocaleString('en-US', options);
}
function DateTimePicker(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    placeholder = _ref.placeholder,
    className = _ref.className,
    buttonClassName = _ref.buttonClassName,
    calendarClassName = _ref.calendarClassName,
    formatOptions = _ref.formatOptions,
    _ref$showSeconds = _ref.showSeconds,
    showSeconds = _ref$showSeconds === void 0 ? false : _ref$showSeconds,
    _ref$minuteStep = _ref.minuteStep,
    minuteStep = _ref$minuteStep === void 0 ? 5 : _ref$minuteStep,
    _ref$use12HourFormat = _ref.use12HourFormat,
    use12HourFormat = _ref$use12HourFormat === void 0 ? true : _ref$use12HourFormat,
    _ref$align = _ref.align,
    align = _ref$align === void 0 ? 'start' : _ref$align,
    _ref$side = _ref.side,
    side = _ref$side === void 0 ? 'bottom' : _ref$side,
    _ref$alignOffset = _ref.alignOffset,
    alignOffset = _ref$alignOffset === void 0 ? 0 : _ref$alignOffset,
    _ref$sideOffset = _ref.sideOffset,
    sideOffset = _ref$sideOffset === void 0 ? 4 : _ref$sideOffset,
    _ref$captionLayout = _ref.captionLayout,
    captionLayout = _ref$captionLayout === void 0 ? 'label' : _ref$captionLayout,
    dateInputProps = _ref.dateInputProps,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? 'datetime' : _ref$mode;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = React.useState(value),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    date = _React$useState4[0],
    setDate = _React$useState4[1];
  var _React$useState5 = React.useState(value || new Date()),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    month = _React$useState6[0],
    setMonth = _React$useState6[1];
  React.useEffect(function () {
    setDate(value);
    if (value) {
      setMonth(value);
    }
  }, [value]);
  var hours = React.useMemo(function () {
    if (use12HourFormat) {
      return Array.from({
        length: 12
      }, function (_, i) {
        return i + 1;
      });
    }
    return Array.from({
      length: 24
    }, function (__0, i_0) {
      return i_0;
    });
  }, [use12HourFormat]);
  var minutes = React.useMemo(function () {
    var steps = Math.floor(60 / minuteStep);
    return Array.from({
      length: steps
    }, function (__1, i_1) {
      return i_1 * minuteStep;
    });
  }, [minuteStep]);
  var seconds = React.useMemo(function () {
    return Array.from({
      length: 60
    }, function (__2, i_2) {
      return i_2;
    });
  }, []);
  var handleDateSelect = function handleDateSelect(selectedDate) {
    if (selectedDate) {
      var newDate = new Date(selectedDate);
      if (date) {
        newDate.setHours(date.getHours());
        newDate.setMinutes(date.getMinutes());
        newDate.setSeconds(date.getSeconds());
      } else {
        newDate.setHours(0);
        newDate.setMinutes(0);
        newDate.setSeconds(0);
      }
      setDate(newDate);
      if (mode === 'date') {
        onChange === null || onChange === void 0 || onChange(newDate);
        setOpen(false);
      }
    } else {
      setDate(undefined);
      onChange === null || onChange === void 0 || onChange(undefined);
    }
  };
  var handleTimeChange = function handleTimeChange(type, value_0) {
    var newDate_0 = date ? new Date(date) : new Date();
    if (!date) {
      var today = new Date();
      newDate_0.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
    }
    if (type === 'hour') {
      var hour = parseInt(value_0);
      if (use12HourFormat) {
        var isPM = newDate_0.getHours() >= 12;
        newDate_0.setHours(hour % 12 + (isPM ? 12 : 0));
      } else {
        newDate_0.setHours(hour);
      }
    } else if (type === 'minute') {
      newDate_0.setMinutes(parseInt(value_0));
    } else if (type === 'second') {
      newDate_0.setSeconds(parseInt(value_0));
    } else if (type === 'ampm') {
      var currentHours = newDate_0.getHours();
      var isPM_0 = value_0 === 'PM';
      if (isPM_0 && currentHours < 12) {
        newDate_0.setHours(currentHours + 12);
      } else if (!isPM_0 && currentHours >= 12) {
        newDate_0.setHours(currentHours - 12);
      }
    }
    setDate(newDate_0);
    if (mode === 'time') {
      onChange === null || onChange === void 0 || onChange(newDate_0);
    }
  };
  var handleApply = function handleApply() {
    onChange === null || onChange === void 0 || onChange(date);
    setOpen(false);
  };
  var displayPlaceholder = React.useMemo(function () {
    if (placeholder) return placeholder;
    if (mode === 'date') return 'Select date';
    if (mode === 'time') return 'Select time';
    return 'Select date and time';
  }, [placeholder, mode]);
  var displayValue = React.useMemo(function () {
    if (!date) return displayPlaceholder;
    var defaultOptions = {
      year: mode !== 'time' ? 'numeric' : undefined,
      month: mode !== 'time' ? '2-digit' : undefined,
      day: mode !== 'time' ? '2-digit' : undefined,
      hour: mode !== 'date' ? '2-digit' : undefined,
      minute: mode !== 'date' ? '2-digit' : undefined,
      second: mode !== 'date' && showSeconds ? '2-digit' : undefined,
      hour12: use12HourFormat
    };
    var mergedOptions = _objectSpread(_objectSpread({}, defaultOptions), formatOptions);
    return formatDateTime(date, mergedOptions);
  }, [date, displayPlaceholder, formatOptions, mode, showSeconds, use12HourFormat]);
  var currentHour = date ? date.getHours() : 0;
  var currentMinute = date ? date.getMinutes() : 0;
  var currentSecond = date ? date.getSeconds() : 0;
  var isPM_1 = currentHour >= 12;
  var displayHour = use12HourFormat ? currentHour % 12 || 12 : currentHour;
  return /*#__PURE__*/_jsx("div", {
    className: cn('flex flex-col gap-3', className),
    children: /*#__PURE__*/_jsxs(Popover, {
      open: open,
      onOpenChange: setOpen,
      children: [/*#__PURE__*/_jsx(PopoverTrigger, {
        asChild: true,
        children: /*#__PURE__*/_jsxs(Button, {
          variant: "outline",
          className: cn('w-full justify-start text-left font-normal', !date && 'text-muted-foreground', buttonClassName),
          disabled: disabled,
          children: [/*#__PURE__*/_jsx(CalendarIcon, {
            className: "mr-2 h-4 w-4"
          }), displayValue]
        })
      }), /*#__PURE__*/_jsxs(PopoverContent, {
        className: "w-auto p-0",
        align: align,
        side: side,
        alignOffset: alignOffset,
        sideOffset: sideOffset,
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex flex-col sm:flex-row",
          children: [mode !== 'time' && /*#__PURE__*/_jsx(Calendar, _objectSpread({
            mode: "single",
            selected: date,
            onSelect: handleDateSelect,
            month: month,
            onMonthChange: setMonth,
            captionLayout: captionLayout,
            className: cn('p-3', calendarClassName),
            initialFocus: true
          }, dateInputProps)), mode !== 'date' && /*#__PURE__*/_jsxs("div", {
            className: cn('flex divide-x border-t sm:border-t-0 sm:border-l', mode === 'time' && 'border-t-0 sm:border-l-0'),
            children: [/*#__PURE__*/_jsxs(ScrollArea, {
              className: "h-[268px] w-[60px]",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "p-2",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "text-muted-foreground mb-1 text-center text-xs font-medium",
                  children: "Hour"
                }), hours.map(function (hour_0) {
                  return /*#__PURE__*/_jsx(Button, {
                    size: "sm",
                    variant: displayHour === hour_0 ? 'default' : 'ghost',
                    className: "h-8 w-full text-xs",
                    onClick: function onClick() {
                      return handleTimeChange('hour', hour_0.toString());
                    },
                    children: hour_0.toString().padStart(2, '0')
                  }, hour_0);
                })]
              }), /*#__PURE__*/_jsx(ScrollBar, {
                orientation: "vertical"
              })]
            }), /*#__PURE__*/_jsxs(ScrollArea, {
              className: "h-[268px] w-[60px]",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "p-2",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "text-muted-foreground mb-1 text-center text-xs font-medium",
                  children: "Min"
                }), minutes.map(function (minute) {
                  return /*#__PURE__*/_jsx(Button, {
                    size: "sm",
                    variant: currentMinute === minute ? 'default' : 'ghost',
                    className: "h-8 w-full text-xs",
                    onClick: function onClick() {
                      return handleTimeChange('minute', minute.toString());
                    },
                    children: minute.toString().padStart(2, '0')
                  }, minute);
                })]
              }), /*#__PURE__*/_jsx(ScrollBar, {
                orientation: "vertical"
              })]
            }), showSeconds && /*#__PURE__*/_jsxs(ScrollArea, {
              className: "h-[268px] w-[60px]",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "p-2",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "text-muted-foreground mb-1 text-center text-xs font-medium",
                  children: "Sec"
                }), seconds.map(function (second) {
                  return /*#__PURE__*/_jsx(Button, {
                    size: "sm",
                    variant: currentSecond === second ? 'default' : 'ghost',
                    className: "h-8 w-full text-xs",
                    onClick: function onClick() {
                      return handleTimeChange('second', second.toString());
                    },
                    children: second.toString().padStart(2, '0')
                  }, second);
                })]
              }), /*#__PURE__*/_jsx(ScrollBar, {
                orientation: "vertical"
              })]
            }), use12HourFormat && /*#__PURE__*/_jsxs("div", {
              className: "flex w-[60px] flex-col p-2",
              children: [/*#__PURE__*/_jsx("div", {
                className: "text-muted-foreground mb-1 text-center text-xs font-medium",
                children: "Period"
              }), ['AM', 'PM'].map(function (period) {
                return /*#__PURE__*/_jsx(Button, {
                  size: "sm",
                  variant: period === 'AM' && !isPM_1 || period === 'PM' && isPM_1 ? 'default' : 'ghost',
                  className: "mb-1 h-8 w-full text-xs",
                  onClick: function onClick() {
                    return handleTimeChange('ampm', period);
                  },
                  children: period
                }, period);
              })]
            })]
          })]
        }), mode === 'datetime' && /*#__PURE__*/_jsxs("div", {
          className: "flex items-center justify-end gap-2 border-t p-3",
          children: [/*#__PURE__*/_jsx(Button, {
            variant: "outline",
            size: "sm",
            onClick: function onClick() {
              return setOpen(false);
            },
            children: "Cancel"
          }), /*#__PURE__*/_jsx(Button, {
            size: "sm",
            onClick: handleApply,
            children: "Apply"
          })]
        })]
      })]
    })
  });
}
DateTimePicker.displayName = 'DateTimePicker';
export { DateTimePicker, formatDateTime };

//# sourceMappingURL=date-time-picker.js.map