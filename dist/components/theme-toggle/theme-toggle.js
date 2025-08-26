import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["variant"],
  _excluded2 = ["variant", "DropdownMenuContentProps", "buttonProps"],
  _excluded3 = ["variant", "asChild", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Moon, Sun, Laptop } from "../../icons";
import { Button } from "../button/button";
import { useTheme } from "../theme-provider/theme-provider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "../dropdown-menu/dropdown-menu";
import { Slot } from '@radix-ui/react-slot';

// TODO: add support for classname combination
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export function ThemeToggle(props) {
  var $ = _c(81);
  var _useTheme = useTheme(),
    theme = _useTheme.theme,
    setTheme = _useTheme.setTheme;
  var variant = props.variant || "button";
  var t0;
  if ($[0] !== setTheme || $[1] !== theme || $[2] !== variant) {
    t0 = function t0() {
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
    $[3] = t0;
  } else {
    t0 = $[3];
  }
  var toggleTheme = t0;
  var t1;
  if ($[4] !== theme) {
    t1 = function t1() {
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
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var getIcon = t1;
  var t2;
  if ($[6] !== theme || $[7] !== variant) {
    t2 = function t2() {
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
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  var getTitle = t2;
  if (variant === "switch") {
    var _t = props;
    var switchProps;
    if ($[9] !== _t) {
      var _variant = _t.variant,
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
    var _t7 = "text-foreground absolute inset-0 h-3 w-3 transition-opacity duration-300 ".concat(isDark ? "opacity-100" : "opacity-0");
    var _t8;
    if ($[13] !== _t7) {
      _t8 = /*#__PURE__*/_jsx(Moon, {
        className: _t7
      });
      $[13] = _t7;
      $[14] = _t8;
    } else {
      _t8 = $[14];
    }
    var t10;
    if ($[15] !== _t6 || $[16] !== _t8) {
      t10 = /*#__PURE__*/_jsxs("div", {
        className: "relative h-3 w-3",
        children: [_t6, _t8]
      });
      $[15] = _t6;
      $[16] = _t8;
      $[17] = t10;
    } else {
      t10 = $[17];
    }
    var t11;
    if ($[18] !== t10 || $[19] !== _t4) {
      t11 = /*#__PURE__*/_jsx("div", {
        className: _t4,
        children: t10
      });
      $[18] = t10;
      $[19] = _t4;
      $[20] = t11;
    } else {
      t11 = $[20];
    }
    var t12;
    if ($[21] !== isDark || $[22] !== switchProps || $[23] !== t11 || $[24] !== _t3 || $[25] !== toggleTheme) {
      t12 = /*#__PURE__*/_jsx("button", _objectSpread(_objectSpread({
        type: "button",
        role: "switch",
        "aria-checked": isDark,
        onClick: toggleTheme,
        title: _t3,
        className: "group bg-muted focus:ring-ring focus:ring-offset-background relative inline-flex h-[26px] w-[50px] items-center rounded-full transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
      }, switchProps), {}, {
        children: t11
      }));
      $[21] = isDark;
      $[22] = switchProps;
      $[23] = t11;
      $[24] = _t3;
      $[25] = toggleTheme;
      $[26] = t12;
    } else {
      t12 = $[26];
    }
    var t13;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
      t13 = /*#__PURE__*/_jsx("span", {
        className: "sr-only",
        children: "Toggle between light and dark theme"
      });
      $[27] = t13;
    } else {
      t13 = $[27];
    }
    var t14;
    if ($[28] !== t12) {
      t14 = /*#__PURE__*/_jsxs("div", {
        className: "relative inline-flex",
        children: [t12, t13]
      });
      $[28] = t12;
      $[29] = t14;
    } else {
      t14 = $[29];
    }
    return t14;
  }
  if (variant === "dropdown") {
    var _t9 = props;
    var dropdownProps;
    var _t0;
    var _t1;
    if ($[30] !== _t9) {
      var _variant_0 = _t9.variant,
        _t10 = _t9.DropdownMenuContentProps,
        _t11 = _t9.buttonProps,
        _t12 = _objectWithoutProperties(_t9, _excluded2);
      _t0 = _t10;
      _t1 = _t11;
      dropdownProps = _t12;
      $[30] = _t9;
      $[31] = dropdownProps;
      $[32] = _t0;
      $[33] = _t1;
    } else {
      dropdownProps = $[31];
      _t0 = $[32];
      _t1 = $[33];
    }
    var _t13;
    if ($[34] !== _t0) {
      _t13 = _t0 === undefined ? {} : _t0;
      $[34] = _t0;
      $[35] = _t13;
    } else {
      _t13 = $[35];
    }
    var DropdownMenuContentProps = _t13;
    var _t14;
    if ($[36] !== _t1) {
      _t14 = _t1 === undefined ? {} : _t1;
      $[36] = _t1;
      $[37] = _t14;
    } else {
      _t14 = $[37];
    }
    var buttonProps = _t14;
    var _t15;
    if ($[38] !== getIcon) {
      _t15 = getIcon();
      $[38] = getIcon;
      $[39] = _t15;
    } else {
      _t15 = $[39];
    }
    var _t16;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
      _t16 = /*#__PURE__*/_jsx("span", {
        className: "sr-only",
        children: "Open theme selector"
      });
      $[40] = _t16;
    } else {
      _t16 = $[40];
    }
    var _t17;
    if ($[41] !== buttonProps || $[42] !== _t15) {
      _t17 = /*#__PURE__*/_jsx(DropdownMenuTrigger, {
        asChild: true,
        children: /*#__PURE__*/_jsxs(Button, _objectSpread(_objectSpread({
          variant: "outline",
          size: "icon",
          className: "h-9 w-9"
        }, buttonProps), {}, {
          children: [_t15, _t16]
        }))
      });
      $[41] = buttonProps;
      $[42] = _t15;
      $[43] = _t17;
    } else {
      _t17 = $[43];
    }
    var _t18;
    if ($[44] !== setTheme) {
      _t18 = function _t18(value) {
        return setTheme(value);
      };
      $[44] = setTheme;
      $[45] = _t18;
    } else {
      _t18 = $[45];
    }
    var _t19;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
      _t19 = /*#__PURE__*/_jsxs(DropdownMenuRadioItem, {
        value: "light",
        children: [/*#__PURE__*/_jsx(Sun, {
          className: "mr-2 h-4 w-4"
        }), "Light"]
      });
      $[46] = _t19;
    } else {
      _t19 = $[46];
    }
    var _t20;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
      _t20 = /*#__PURE__*/_jsxs(DropdownMenuRadioItem, {
        value: "dark",
        children: [/*#__PURE__*/_jsx(Moon, {
          className: "mr-2 h-4 w-4"
        }), "Dark"]
      });
      $[47] = _t20;
    } else {
      _t20 = $[47];
    }
    var _t21;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
      _t21 = /*#__PURE__*/_jsxs(DropdownMenuRadioItem, {
        value: "system",
        children: [/*#__PURE__*/_jsx(Laptop, {
          className: "mr-2 h-4 w-4"
        }), "System"]
      });
      $[48] = _t21;
    } else {
      _t21 = $[48];
    }
    var t15;
    if ($[49] !== _t18 || $[50] !== theme) {
      t15 = /*#__PURE__*/_jsxs(DropdownMenuRadioGroup, {
        value: theme,
        onValueChange: _t18,
        children: [_t19, _t20, _t21]
      });
      $[49] = _t18;
      $[50] = theme;
      $[51] = t15;
    } else {
      t15 = $[51];
    }
    var t16;
    if ($[52] !== DropdownMenuContentProps || $[53] !== t15) {
      t16 = /*#__PURE__*/_jsx(DropdownMenuContent, _objectSpread(_objectSpread({
        align: "end"
      }, DropdownMenuContentProps), {}, {
        children: t15
      }));
      $[52] = DropdownMenuContentProps;
      $[53] = t15;
      $[54] = t16;
    } else {
      t16 = $[54];
    }
    var t17;
    if ($[55] !== dropdownProps || $[56] !== _t17 || $[57] !== t16) {
      t17 = /*#__PURE__*/_jsxs(DropdownMenu, _objectSpread(_objectSpread({}, dropdownProps), {}, {
        children: [_t17, t16]
      }));
      $[55] = dropdownProps;
      $[56] = _t17;
      $[57] = t16;
      $[58] = t17;
    } else {
      t17 = $[58];
    }
    return t17;
  }
  var t3 = props;
  var buttonProps_0;
  var children;
  var t4;
  if ($[59] !== t3) {
    var _variant_1 = t3.variant,
      _t22 = t3.asChild,
      _t23 = t3.children,
      _t24 = _objectWithoutProperties(t3, _excluded3);
    t4 = _t22;
    children = _t23;
    buttonProps_0 = _t24;
    $[59] = t3;
    $[60] = buttonProps_0;
    $[61] = children;
    $[62] = t4;
  } else {
    buttonProps_0 = $[60];
    children = $[61];
    t4 = $[62];
  }
  var asChild = t4 === undefined ? false : t4;
  var t5;
  if ($[63] !== getIcon) {
    t5 = getIcon();
    $[63] = getIcon;
    $[64] = t5;
  } else {
    t5 = $[64];
  }
  var t6;
  if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /*#__PURE__*/_jsx("span", {
      className: "sr-only",
      children: "Toggle theme"
    });
    $[65] = t6;
  } else {
    t6 = $[65];
  }
  var t7;
  if ($[66] !== t5) {
    t7 = /*#__PURE__*/_jsxs(_Fragment, {
      children: [t5, t6]
    });
    $[66] = t5;
    $[67] = t7;
  } else {
    t7 = $[67];
  }
  var themeToggleContent = t7;
  if (asChild) {
    var _t25 = getTitle();
    var _t26;
    if ($[68] !== children || $[69] !== themeToggleContent) {
      _t26 = /*#__PURE__*/React.isValidElement(children) ? /*#__PURE__*/React.cloneElement(children, {
        children: themeToggleContent
      }) : children;
      $[68] = children;
      $[69] = themeToggleContent;
      $[70] = _t26;
    } else {
      _t26 = $[70];
    }
    var _t27;
    if ($[71] !== buttonProps_0 || $[72] !== _t25 || $[73] !== _t26 || $[74] !== toggleTheme) {
      _t27 = /*#__PURE__*/_jsx(Slot, _objectSpread(_objectSpread({}, buttonProps_0), {}, {
        onClick: toggleTheme,
        title: _t25,
        children: _t26
      }));
      $[71] = buttonProps_0;
      $[72] = _t25;
      $[73] = _t26;
      $[74] = toggleTheme;
      $[75] = _t27;
    } else {
      _t27 = $[75];
    }
    return _t27;
  }
  var t8 = getTitle();
  var t9;
  if ($[76] !== buttonProps_0 || $[77] !== t8 || $[78] !== themeToggleContent || $[79] !== toggleTheme) {
    t9 = /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({
      variant: "outline",
      size: "icon",
      className: "h-9 w-9"
    }, buttonProps_0), {}, {
      onClick: toggleTheme,
      title: t8,
      children: themeToggleContent
    }));
    $[76] = buttonProps_0;
    $[77] = t8;
    $[78] = themeToggleContent;
    $[79] = toggleTheme;
    $[80] = t9;
  } else {
    t9 = $[80];
  }
  return t9;
}

//# sourceMappingURL=theme-toggle.js.map