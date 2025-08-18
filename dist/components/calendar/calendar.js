import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _templateObject, _templateObject2;
var _excluded = ["className", "classNames", "showOutsideDays", "captionLayout", "buttonVariant", "formatters", "components"],
  _excluded2 = ["className", "rootRef"],
  _excluded3 = ["className", "orientation"],
  _excluded4 = ["children"],
  _excluded5 = ["className", "day", "modifiers"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from "../../icons";
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import { cn } from "../../lib/utils";
import { Button, buttonVariants } from "../button";
import { jsx as _jsx } from "react/jsx-runtime";
function Calendar(_ref) {
  var className = _ref.className,
    classNames = _ref.classNames,
    _ref$showOutsideDays = _ref.showOutsideDays,
    showOutsideDays = _ref$showOutsideDays === void 0 ? true : _ref$showOutsideDays,
    _ref$captionLayout = _ref.captionLayout,
    captionLayout = _ref$captionLayout === void 0 ? 'label' : _ref$captionLayout,
    _ref$buttonVariant = _ref.buttonVariant,
    buttonVariant = _ref$buttonVariant === void 0 ? 'ghost' : _ref$buttonVariant,
    formatters = _ref.formatters,
    components = _ref.components,
    props = _objectWithoutProperties(_ref, _excluded);
  var defaultClassNames = getDefaultClassNames();
  return /*#__PURE__*/_jsx(DayPicker, _objectSpread({
    showOutsideDays: showOutsideDays,
    className: cn('bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent', String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["rtl:**:[.rdp-button_next>svg]:rotate-180"], ["rtl:**:[.rdp-button\\_next>svg]:rotate-180"]))), String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["rtl:**:[.rdp-button_previous>svg]:rotate-180"], ["rtl:**:[.rdp-button\\_previous>svg]:rotate-180"]))), className),
    captionLayout: captionLayout,
    formatters: _objectSpread({
      formatMonthDropdown: function formatMonthDropdown(date) {
        return date.toLocaleString('default', {
          month: 'short'
        });
      }
    }, formatters),
    classNames: _objectSpread({
      root: cn('w-fit', defaultClassNames.root),
      months: cn('flex gap-4 flex-col md:flex-row relative', defaultClassNames.months),
      month: cn('flex flex-col w-full gap-4', defaultClassNames.month),
      nav: cn('flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between', defaultClassNames.nav),
      button_previous: cn(buttonVariants({
        variant: buttonVariant
      }), 'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none', defaultClassNames.button_previous),
      button_next: cn(buttonVariants({
        variant: buttonVariant
      }), 'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none', defaultClassNames.button_next),
      month_caption: cn('flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)', defaultClassNames.month_caption),
      dropdowns: cn('w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5', defaultClassNames.dropdowns),
      dropdown_root: cn('relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md', defaultClassNames.dropdown_root),
      dropdown: cn('absolute inset-0 opacity-0', defaultClassNames.dropdown),
      caption_label: cn('select-none font-medium', captionLayout === 'label' ? 'text-sm' : 'rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5', defaultClassNames.caption_label),
      table: 'w-full border-collapse',
      weekdays: cn('flex', defaultClassNames.weekdays),
      weekday: cn('text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none', defaultClassNames.weekday),
      week: cn('flex w-full mt-2', defaultClassNames.week),
      week_number_header: cn('select-none w-(--cell-size)', defaultClassNames.week_number_header),
      week_number: cn('text-[0.8rem] select-none text-muted-foreground', defaultClassNames.week_number),
      day: cn('relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none', defaultClassNames.day),
      range_start: cn('rounded-l-md bg-accent', defaultClassNames.range_start),
      range_middle: cn('rounded-none', defaultClassNames.range_middle),
      range_end: cn('rounded-r-md bg-accent', defaultClassNames.range_end),
      today: cn('bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none', defaultClassNames.today),
      outside: cn('text-muted-foreground aria-selected:text-muted-foreground', defaultClassNames.outside),
      disabled: cn('text-muted-foreground opacity-50', defaultClassNames.disabled),
      hidden: cn('invisible', defaultClassNames.hidden)
    }, classNames),
    components: _objectSpread({
      Root: function Root(_ref2) {
        var className_0 = _ref2.className,
          rootRef = _ref2.rootRef,
          props_0 = _objectWithoutProperties(_ref2, _excluded2);
        return /*#__PURE__*/_jsx("div", _objectSpread({
          "data-slot": "calendar",
          ref: rootRef,
          className: cn(className_0)
        }, props_0));
      },
      Chevron: function Chevron(_ref3) {
        var className_1 = _ref3.className,
          orientation = _ref3.orientation,
          props_1 = _objectWithoutProperties(_ref3, _excluded3);
        if (orientation === 'left') {
          return /*#__PURE__*/_jsx(ChevronLeft, _objectSpread({
            className: cn('size-4', className_1)
          }, props_1));
        }
        if (orientation === 'right') {
          return /*#__PURE__*/_jsx(ChevronRight, _objectSpread({
            className: cn('size-4', className_1)
          }, props_1));
        }
        return /*#__PURE__*/_jsx(ChevronDown, _objectSpread({
          className: cn('size-4', className_1)
        }, props_1));
      },
      DayButton: CalendarDayButton,
      WeekNumber: function WeekNumber(_ref4) {
        var children = _ref4.children,
          props_2 = _objectWithoutProperties(_ref4, _excluded4);
        return /*#__PURE__*/_jsx("td", _objectSpread(_objectSpread({}, props_2), {}, {
          children: /*#__PURE__*/_jsx("div", {
            className: "flex size-(--cell-size) items-center justify-center text-center",
            children: children
          })
        }));
      }
    }, components)
  }, props));
}
function CalendarDayButton(t0) {
  var $ = _c(19);
  var className;
  var day;
  var modifiers;
  var props;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    day = _t.day;
    modifiers = _t.modifiers;
    props = _objectWithoutProperties(_t, _excluded5);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = day;
    $[3] = modifiers;
    $[4] = props;
  } else {
    className = $[1];
    day = $[2];
    modifiers = $[3];
    props = $[4];
  }
  var defaultClassNames = getDefaultClassNames();
  var ref = React.useRef(null);
  var t1;
  var t2;
  if ($[5] !== modifiers.focused) {
    t1 = function t1() {
      if (modifiers.focused) {
        var _ref$current;
        (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.focus();
      }
    };
    t2 = [modifiers.focused];
    $[5] = modifiers.focused;
    $[6] = t1;
    $[7] = t2;
  } else {
    t1 = $[6];
    t2 = $[7];
  }
  React.useEffect(t1, t2);
  var T0 = Button;
  var t3 = "ghost";
  var t4 = "icon";
  var t5;
  if ($[8] !== day.date) {
    t5 = day.date.toLocaleDateString();
    $[8] = day.date;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  var t6 = modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle;
  var t7 = modifiers.range_start;
  var t8 = modifiers.range_end;
  var t9 = modifiers.range_middle;
  var t10 = cn("data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className);
  var t11;
  if ($[10] !== T0 || $[11] !== modifiers.range_end || $[12] !== modifiers.range_middle || $[13] !== modifiers.range_start || $[14] !== props || $[15] !== t10 || $[16] !== t5 || $[17] !== t6) {
    t11 = /*#__PURE__*/_jsx(T0, _objectSpread({
      ref: ref,
      variant: t3,
      size: t4,
      "data-day": t5,
      "data-selected-single": t6,
      "data-range-start": t7,
      "data-range-end": t8,
      "data-range-middle": t9,
      className: t10
    }, props));
    $[10] = T0;
    $[11] = modifiers.range_end;
    $[12] = modifiers.range_middle;
    $[13] = modifiers.range_start;
    $[14] = props;
    $[15] = t10;
    $[16] = t5;
    $[17] = t6;
    $[18] = t11;
  } else {
    t11 = $[18];
  }
  return t11;
}
export { Calendar, CalendarDayButton };

//# sourceMappingURL=calendar.js.map