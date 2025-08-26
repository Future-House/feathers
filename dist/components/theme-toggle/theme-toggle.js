import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["variant"],
  _excluded2 = ["variant", "DropdownMenuContentProps", "buttonProps", "asChild", "children"],
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
  var $ = _c(89);
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
    var children;
    var dropdownProps;
    var _t0;
    var _t1;
    var _t10;
    if ($[30] !== _t9) {
      var _variant_0 = _t9.variant,
        _t11 = _t9.DropdownMenuContentProps,
        _t12 = _t9.buttonProps,
        _t13 = _t9.asChild,
        _t14 = _t9.children,
        _t15 = _objectWithoutProperties(_t9, _excluded2);
      _t0 = _t11;
      _t1 = _t12;
      _t10 = _t13;
      children = _t14;
      dropdownProps = _t15;
      $[30] = _t9;
      $[31] = children;
      $[32] = dropdownProps;
      $[33] = _t0;
      $[34] = _t1;
      $[35] = _t10;
    } else {
      children = $[31];
      dropdownProps = $[32];
      _t0 = $[33];
      _t1 = $[34];
      _t10 = $[35];
    }
    var _t16;
    if ($[36] !== _t0) {
      _t16 = _t0 === undefined ? {} : _t0;
      $[36] = _t0;
      $[37] = _t16;
    } else {
      _t16 = $[37];
    }
    var DropdownMenuContentProps = _t16;
    var _t17;
    if ($[38] !== _t1) {
      _t17 = _t1 === undefined ? {} : _t1;
      $[38] = _t1;
      $[39] = _t17;
    } else {
      _t17 = $[39];
    }
    var buttonProps = _t17;
    var asChild = _t10 === undefined ? false : _t10;
    var _t18;
    if ($[40] !== getIcon) {
      _t18 = getIcon();
      $[40] = getIcon;
      $[41] = _t18;
    } else {
      _t18 = $[41];
    }
    var _t19;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
      _t19 = /*#__PURE__*/_jsx("span", {
        className: "sr-only",
        children: "Open theme selector"
      });
      $[42] = _t19;
    } else {
      _t19 = $[42];
    }
    var _t20;
    if ($[43] !== _t18) {
      _t20 = /*#__PURE__*/_jsxs(_Fragment, {
        children: [_t18, _t19]
      });
      $[43] = _t18;
      $[44] = _t20;
    } else {
      _t20 = $[44];
    }
    var iconContent = _t20;
    var _t21;
    if ($[45] !== asChild || $[46] !== buttonProps || $[47] !== children || $[48] !== iconContent) {
      _t21 = asChild && /*#__PURE__*/React.isValidElement(children) ? /*#__PURE__*/React.cloneElement(children, {
        children: /*#__PURE__*/_jsxs(_Fragment, {
          children: [iconContent, children.props.children]
        })
      }) : /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({
        variant: "outline",
        size: "icon",
        className: "h-9 w-9"
      }, buttonProps), {}, {
        children: iconContent
      }));
      $[45] = asChild;
      $[46] = buttonProps;
      $[47] = children;
      $[48] = iconContent;
      $[49] = _t21;
    } else {
      _t21 = $[49];
    }
    var _t22;
    if ($[50] !== _t21) {
      _t22 = /*#__PURE__*/_jsx(DropdownMenuTrigger, {
        asChild: true,
        children: _t21
      });
      $[50] = _t21;
      $[51] = _t22;
    } else {
      _t22 = $[51];
    }
    var _t23;
    if ($[52] !== setTheme) {
      _t23 = function _t23(value) {
        return setTheme(value);
      };
      $[52] = setTheme;
      $[53] = _t23;
    } else {
      _t23 = $[53];
    }
    var t15;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
      t15 = /*#__PURE__*/_jsxs(DropdownMenuRadioItem, {
        value: "light",
        children: [/*#__PURE__*/_jsx(Sun, {
          className: "mr-2 h-4 w-4"
        }), "Light"]
      });
      $[54] = t15;
    } else {
      t15 = $[54];
    }
    var t16;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
      t16 = /*#__PURE__*/_jsxs(DropdownMenuRadioItem, {
        value: "dark",
        children: [/*#__PURE__*/_jsx(Moon, {
          className: "mr-2 h-4 w-4"
        }), "Dark"]
      });
      $[55] = t16;
    } else {
      t16 = $[55];
    }
    var t17;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
      t17 = /*#__PURE__*/_jsxs(DropdownMenuRadioItem, {
        value: "system",
        children: [/*#__PURE__*/_jsx(Laptop, {
          className: "mr-2 h-4 w-4"
        }), "System"]
      });
      $[56] = t17;
    } else {
      t17 = $[56];
    }
    var t18;
    if ($[57] !== _t23 || $[58] !== theme) {
      t18 = /*#__PURE__*/_jsxs(DropdownMenuRadioGroup, {
        value: theme,
        onValueChange: _t23,
        children: [t15, t16, t17]
      });
      $[57] = _t23;
      $[58] = theme;
      $[59] = t18;
    } else {
      t18 = $[59];
    }
    var t19;
    if ($[60] !== DropdownMenuContentProps || $[61] !== t18) {
      t19 = /*#__PURE__*/_jsx(DropdownMenuContent, _objectSpread(_objectSpread({
        align: "end"
      }, DropdownMenuContentProps), {}, {
        children: t18
      }));
      $[60] = DropdownMenuContentProps;
      $[61] = t18;
      $[62] = t19;
    } else {
      t19 = $[62];
    }
    var t20;
    if ($[63] !== dropdownProps || $[64] !== _t22 || $[65] !== t19) {
      t20 = /*#__PURE__*/_jsxs(DropdownMenu, _objectSpread(_objectSpread({}, dropdownProps), {}, {
        children: [_t22, t19]
      }));
      $[63] = dropdownProps;
      $[64] = _t22;
      $[65] = t19;
      $[66] = t20;
    } else {
      t20 = $[66];
    }
    return t20;
  }
  var t3 = props;
  var buttonProps_0;
  var children_0;
  var t4;
  if ($[67] !== t3) {
    var _variant_1 = t3.variant,
      _t24 = t3.asChild,
      _t25 = t3.children,
      _t26 = _objectWithoutProperties(t3, _excluded3);
    t4 = _t24;
    children_0 = _t25;
    buttonProps_0 = _t26;
    $[67] = t3;
    $[68] = buttonProps_0;
    $[69] = children_0;
    $[70] = t4;
  } else {
    buttonProps_0 = $[68];
    children_0 = $[69];
    t4 = $[70];
  }
  var asChild_0 = t4 === undefined ? false : t4;
  var t5;
  if ($[71] !== getIcon) {
    t5 = getIcon();
    $[71] = getIcon;
    $[72] = t5;
  } else {
    t5 = $[72];
  }
  var t6;
  if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /*#__PURE__*/_jsx("span", {
      className: "sr-only",
      children: "Toggle theme"
    });
    $[73] = t6;
  } else {
    t6 = $[73];
  }
  var t7;
  if ($[74] !== t5) {
    t7 = /*#__PURE__*/_jsxs(_Fragment, {
      children: [t5, t6]
    });
    $[74] = t5;
    $[75] = t7;
  } else {
    t7 = $[75];
  }
  var themeToggleContent = t7;
  if (asChild_0) {
    var _t27 = getTitle();
    var _t28;
    if ($[76] !== children_0 || $[77] !== themeToggleContent) {
      _t28 = /*#__PURE__*/React.isValidElement(children_0) ? /*#__PURE__*/React.cloneElement(children_0, {
        children: themeToggleContent
      }) : children_0;
      $[76] = children_0;
      $[77] = themeToggleContent;
      $[78] = _t28;
    } else {
      _t28 = $[78];
    }
    var _t29;
    if ($[79] !== buttonProps_0 || $[80] !== _t27 || $[81] !== _t28 || $[82] !== toggleTheme) {
      _t29 = /*#__PURE__*/_jsx(Slot, _objectSpread(_objectSpread({}, buttonProps_0), {}, {
        onClick: toggleTheme,
        title: _t27,
        children: _t28
      }));
      $[79] = buttonProps_0;
      $[80] = _t27;
      $[81] = _t28;
      $[82] = toggleTheme;
      $[83] = _t29;
    } else {
      _t29 = $[83];
    }
    return _t29;
  }
  var t8 = getTitle();
  var t9;
  if ($[84] !== buttonProps_0 || $[85] !== t8 || $[86] !== themeToggleContent || $[87] !== toggleTheme) {
    t9 = /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({
      variant: "outline",
      size: "icon",
      className: "h-9 w-9"
    }, buttonProps_0), {}, {
      onClick: toggleTheme,
      title: t8,
      children: themeToggleContent
    }));
    $[84] = buttonProps_0;
    $[85] = t8;
    $[86] = themeToggleContent;
    $[87] = toggleTheme;
    $[88] = t9;
  } else {
    t9 = $[88];
  }
  return t9;
}

//# sourceMappingURL=theme-toggle.js.map