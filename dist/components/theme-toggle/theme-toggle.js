import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["variant"],
  _excluded2 = ["variant", "DropdownMenuContentProps", "buttonProps"],
  _excluded3 = ["variant"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import { Moon, Sun, Laptop } from "../../icons";
import { Button } from "../button/button";
import { useTheme } from "../theme-provider/theme-provider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "../dropdown-menu/dropdown-menu";

// TODO: add support for classname combination
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ThemeToggle(props) {
  var $ = _c(69);
  var t0 = props.variant;
  var variant = t0 === undefined ? "button" : t0;
  var _useTheme = useTheme(),
    theme = _useTheme.theme,
    setTheme = _useTheme.setTheme;
  var t1;
  if ($[0] !== setTheme || $[1] !== theme || $[2] !== variant) {
    t1 = function t1() {
      if (variant === "switch" || variant === "button") {
        if (theme === "light" || theme === "system") {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      } else {
        if (theme === "light") {
          setTheme("dark");
        } else {
          if (theme === "dark") {
            setTheme("system");
          } else {
            setTheme("light");
          }
        }
      }
    };
    $[0] = setTheme;
    $[1] = theme;
    $[2] = variant;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  var toggleTheme = t1;
  var t2;
  if ($[4] !== theme) {
    t2 = function t2() {
      if (theme === "light") {
        return /*#__PURE__*/_jsx(Sun, {
          className: "h-4 w-4"
        });
      } else {
        if (theme === "dark") {
          return /*#__PURE__*/_jsx(Moon, {
            className: "h-4 w-4"
          });
        } else {
          return /*#__PURE__*/_jsx(Laptop, {
            className: "h-4 w-4"
          });
        }
      }
    };
    $[4] = theme;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var getIcon = t2;
  var t3;
  if ($[6] !== theme || $[7] !== variant) {
    t3 = function t3() {
      if (variant === "switch" || variant === "button") {
        return theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
      } else {
        if (theme === "light") {
          return "Switch to dark mode";
        } else {
          if (theme === "dark") {
            return "Switch to system mode";
          } else {
            return "Switch to light mode";
          }
        }
      }
    };
    $[6] = theme;
    $[7] = variant;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  var getTitle = t3;
  if (variant === "switch") {
    var _t = props;
    var switchProps;
    if ($[9] !== _t) {
      var _ = _t.variant,
        _t2 = _objectWithoutProperties(_t, _excluded);
      switchProps = _t2;
      $[9] = _t;
      $[10] = switchProps;
    } else {
      switchProps = $[10];
    }
    var isDark = theme === "dark";
    var _t3 = getTitle();
    var _t4 = "bg-background relative z-10 flex h-[24px] w-[24px] items-center justify-center rounded-full shadow-md transition-transform duration-300 ease-in-out ".concat(isDark ? "translate-x-[24px]" : "translate-x-[2px]");
    var _t5 = "text-foreground absolute inset-0 h-3 w-3 transition-opacity duration-300 ".concat(!isDark ? "opacity-100" : "opacity-0");
    var _t6;
    if ($[11] !== _t5) {
      _t6 = /*#__PURE__*/_jsx(Sun, {
        className: _t5
      });
      $[11] = _t5;
      $[12] = _t6;
    } else {
      _t6 = $[12];
    }
    var t9 = "text-foreground absolute inset-0 h-3 w-3 transition-opacity duration-300 ".concat(isDark ? "opacity-100" : "opacity-0");
    var t10;
    if ($[13] !== t9) {
      t10 = /*#__PURE__*/_jsx(Moon, {
        className: t9
      });
      $[13] = t9;
      $[14] = t10;
    } else {
      t10 = $[14];
    }
    var t11;
    if ($[15] !== t10 || $[16] !== _t6) {
      t11 = /*#__PURE__*/_jsxs("div", {
        className: "relative h-3 w-3",
        children: [_t6, t10]
      });
      $[15] = t10;
      $[16] = _t6;
      $[17] = t11;
    } else {
      t11 = $[17];
    }
    var t12;
    if ($[18] !== t11 || $[19] !== _t4) {
      t12 = /*#__PURE__*/_jsx("div", {
        className: _t4,
        children: t11
      });
      $[18] = t11;
      $[19] = _t4;
      $[20] = t12;
    } else {
      t12 = $[20];
    }
    var t13;
    if ($[21] !== isDark || $[22] !== switchProps || $[23] !== t12 || $[24] !== _t3 || $[25] !== toggleTheme) {
      t13 = /*#__PURE__*/_jsx("button", _objectSpread(_objectSpread({
        type: "button",
        role: "switch",
        "aria-checked": isDark,
        onClick: toggleTheme,
        title: _t3,
        className: "group bg-muted focus:ring-ring focus:ring-offset-background relative inline-flex h-[26px] w-[50px] items-center rounded-full transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
      }, switchProps), {}, {
        children: t12
      }));
      $[21] = isDark;
      $[22] = switchProps;
      $[23] = t12;
      $[24] = _t3;
      $[25] = toggleTheme;
      $[26] = t13;
    } else {
      t13 = $[26];
    }
    var t14;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
      t14 = /*#__PURE__*/_jsx("span", {
        className: "sr-only",
        children: "Toggle between light and dark theme"
      });
      $[27] = t14;
    } else {
      t14 = $[27];
    }
    var t15;
    if ($[28] !== t13) {
      t15 = /*#__PURE__*/_jsxs("div", {
        className: "relative inline-flex",
        children: [t13, t14]
      });
      $[28] = t13;
      $[29] = t15;
    } else {
      t15 = $[29];
    }
    return t15;
  }
  if (variant === "dropdown") {
    var _t7 = props;
    var dropdownProps;
    var _t8;
    var _t9;
    if ($[30] !== _t7) {
      var __0 = _t7.variant,
        _t0 = _t7.DropdownMenuContentProps,
        _t1 = _t7.buttonProps,
        _t10 = _objectWithoutProperties(_t7, _excluded2);
      _t8 = _t0;
      _t9 = _t1;
      dropdownProps = _t10;
      $[30] = _t7;
      $[31] = dropdownProps;
      $[32] = _t8;
      $[33] = _t9;
    } else {
      dropdownProps = $[31];
      _t8 = $[32];
      _t9 = $[33];
    }
    var _t11;
    if ($[34] !== _t8) {
      _t11 = _t8 === undefined ? {} : _t8;
      $[34] = _t8;
      $[35] = _t11;
    } else {
      _t11 = $[35];
    }
    var DropdownMenuContentProps = _t11;
    var _t12;
    if ($[36] !== _t9) {
      _t12 = _t9 === undefined ? {} : _t9;
      $[36] = _t9;
      $[37] = _t12;
    } else {
      _t12 = $[37];
    }
    var buttonProps = _t12;
    var _t13;
    if ($[38] !== getIcon) {
      _t13 = getIcon();
      $[38] = getIcon;
      $[39] = _t13;
    } else {
      _t13 = $[39];
    }
    var _t14;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
      _t14 = /*#__PURE__*/_jsx("span", {
        className: "sr-only",
        children: "Open theme selector"
      });
      $[40] = _t14;
    } else {
      _t14 = $[40];
    }
    var _t15;
    if ($[41] !== buttonProps || $[42] !== _t13) {
      _t15 = /*#__PURE__*/_jsx(DropdownMenuTrigger, {
        asChild: true,
        children: /*#__PURE__*/_jsxs(Button, _objectSpread(_objectSpread({
          variant: "outline",
          size: "icon",
          className: "h-9 w-9"
        }, buttonProps), {}, {
          children: [_t13, _t14]
        }))
      });
      $[41] = buttonProps;
      $[42] = _t13;
      $[43] = _t15;
    } else {
      _t15 = $[43];
    }
    var _t16;
    if ($[44] !== setTheme) {
      _t16 = function _t16(value) {
        return setTheme(value);
      };
      $[44] = setTheme;
      $[45] = _t16;
    } else {
      _t16 = $[45];
    }
    var _t17;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
      _t17 = /*#__PURE__*/_jsxs(DropdownMenuRadioItem, {
        value: "light",
        children: [/*#__PURE__*/_jsx(Sun, {
          className: "mr-2 h-4 w-4"
        }), "Light"]
      });
      $[46] = _t17;
    } else {
      _t17 = $[46];
    }
    var _t18;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
      _t18 = /*#__PURE__*/_jsxs(DropdownMenuRadioItem, {
        value: "dark",
        children: [/*#__PURE__*/_jsx(Moon, {
          className: "mr-2 h-4 w-4"
        }), "Dark"]
      });
      $[47] = _t18;
    } else {
      _t18 = $[47];
    }
    var _t19;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
      _t19 = /*#__PURE__*/_jsxs(DropdownMenuRadioItem, {
        value: "system",
        children: [/*#__PURE__*/_jsx(Laptop, {
          className: "mr-2 h-4 w-4"
        }), "System"]
      });
      $[48] = _t19;
    } else {
      _t19 = $[48];
    }
    var t16;
    if ($[49] !== _t16 || $[50] !== theme) {
      t16 = /*#__PURE__*/_jsxs(DropdownMenuRadioGroup, {
        value: theme,
        onValueChange: _t16,
        children: [_t17, _t18, _t19]
      });
      $[49] = _t16;
      $[50] = theme;
      $[51] = t16;
    } else {
      t16 = $[51];
    }
    var t17;
    if ($[52] !== DropdownMenuContentProps || $[53] !== t16) {
      t17 = /*#__PURE__*/_jsx(DropdownMenuContent, _objectSpread(_objectSpread({
        align: "end"
      }, DropdownMenuContentProps), {}, {
        children: t16
      }));
      $[52] = DropdownMenuContentProps;
      $[53] = t16;
      $[54] = t17;
    } else {
      t17 = $[54];
    }
    var t18;
    if ($[55] !== dropdownProps || $[56] !== _t15 || $[57] !== t17) {
      t18 = /*#__PURE__*/_jsxs(DropdownMenu, _objectSpread(_objectSpread({}, dropdownProps), {}, {
        children: [_t15, t17]
      }));
      $[55] = dropdownProps;
      $[56] = _t15;
      $[57] = t17;
      $[58] = t18;
    } else {
      t18 = $[58];
    }
    return t18;
  }
  var t4 = props;
  var buttonProps_0;
  if ($[59] !== t4) {
    var __1 = t4.variant,
      _t20 = _objectWithoutProperties(t4, _excluded3);
    buttonProps_0 = _t20;
    $[59] = t4;
    $[60] = buttonProps_0;
  } else {
    buttonProps_0 = $[60];
  }
  var t5 = getTitle();
  var t6;
  if ($[61] !== getIcon) {
    t6 = getIcon();
    $[61] = getIcon;
    $[62] = t6;
  } else {
    t6 = $[62];
  }
  var t7;
  if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
    t7 = /*#__PURE__*/_jsx("span", {
      className: "sr-only",
      children: "Toggle theme"
    });
    $[63] = t7;
  } else {
    t7 = $[63];
  }
  var t8;
  if ($[64] !== buttonProps_0 || $[65] !== t5 || $[66] !== t6 || $[67] !== toggleTheme) {
    t8 = /*#__PURE__*/_jsxs(Button, _objectSpread(_objectSpread({
      variant: "outline",
      size: "icon",
      className: "h-9 w-9"
    }, buttonProps_0), {}, {
      onClick: toggleTheme,
      title: t5,
      children: [t6, t7]
    }));
    $[64] = buttonProps_0;
    $[65] = t5;
    $[66] = t6;
    $[67] = toggleTheme;
    $[68] = t8;
  } else {
    t8 = $[68];
  }
  return t8;
}

//# sourceMappingURL=theme-toggle.js.map