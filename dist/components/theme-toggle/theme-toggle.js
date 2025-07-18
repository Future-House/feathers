import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["variant", "DropdownMenuContentProps"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import { Moon, Sun, Laptop } from "../../icons";
import { Button } from "../button/button";
import { useTheme } from "../theme-provider/theme-provider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "../dropdown-menu/dropdown-menu";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ThemeToggle(t0) {
  var $ = _c(60);
  var rest;
  var t1;
  var t2;
  if ($[0] !== t0) {
    var _t = t0;
    t1 = _t.variant;
    t2 = _t.DropdownMenuContentProps;
    rest = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = rest;
    $[2] = t1;
    $[3] = t2;
  } else {
    rest = $[1];
    t1 = $[2];
    t2 = $[3];
  }
  var variant = t1 === undefined ? "button" : t1;
  var t3;
  if ($[4] !== t2) {
    t3 = t2 === undefined ? {} : t2;
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  var DropdownMenuContentProps = t3;
  var _useTheme = useTheme(),
    theme = _useTheme.theme,
    setTheme = _useTheme.setTheme;
  var t4;
  if ($[6] !== setTheme || $[7] !== theme || $[8] !== variant) {
    t4 = function t4() {
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
    $[6] = setTheme;
    $[7] = theme;
    $[8] = variant;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  var toggleTheme = t4;
  var t5;
  if ($[10] !== theme) {
    t5 = function t5() {
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
    $[10] = theme;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  var getIcon = t5;
  var t6;
  if ($[12] !== theme || $[13] !== variant) {
    t6 = function t6() {
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
    $[12] = theme;
    $[13] = variant;
    $[14] = t6;
  } else {
    t6 = $[14];
  }
  var getTitle = t6;
  if (variant === "switch") {
    var isDark = theme === "dark";
    var _t2 = getTitle();
    var _t3 = "bg-background relative z-10 flex h-[24px] w-[24px] items-center justify-center rounded-full shadow-md transition-transform duration-300 ease-in-out ".concat(isDark ? "translate-x-[24px]" : "translate-x-[2px]");
    var _t4 = "text-foreground absolute inset-0 h-3 w-3 transition-opacity duration-300 ".concat(!isDark ? "opacity-100" : "opacity-0");
    var _t5;
    if ($[15] !== _t4) {
      _t5 = /*#__PURE__*/_jsx(Sun, {
        className: _t4
      });
      $[15] = _t4;
      $[16] = _t5;
    } else {
      _t5 = $[16];
    }
    var t11 = "text-foreground absolute inset-0 h-3 w-3 transition-opacity duration-300 ".concat(isDark ? "opacity-100" : "opacity-0");
    var t12;
    if ($[17] !== t11) {
      t12 = /*#__PURE__*/_jsx(Moon, {
        className: t11
      });
      $[17] = t11;
      $[18] = t12;
    } else {
      t12 = $[18];
    }
    var t13;
    if ($[19] !== _t5 || $[20] !== t12) {
      t13 = /*#__PURE__*/_jsxs("div", {
        className: "relative h-3 w-3",
        children: [_t5, t12]
      });
      $[19] = _t5;
      $[20] = t12;
      $[21] = t13;
    } else {
      t13 = $[21];
    }
    var t14;
    if ($[22] !== t13 || $[23] !== _t3) {
      t14 = /*#__PURE__*/_jsx("div", {
        className: _t3,
        children: t13
      });
      $[22] = t13;
      $[23] = _t3;
      $[24] = t14;
    } else {
      t14 = $[24];
    }
    var t15;
    if ($[25] !== isDark || $[26] !== t14 || $[27] !== _t2 || $[28] !== toggleTheme) {
      t15 = /*#__PURE__*/_jsx("button", {
        type: "button",
        role: "switch",
        "aria-checked": isDark,
        onClick: toggleTheme,
        title: _t2,
        className: "group bg-muted focus:ring-ring focus:ring-offset-background relative inline-flex h-[26px] w-[50px] items-center rounded-full transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none",
        children: t14
      });
      $[25] = isDark;
      $[26] = t14;
      $[27] = _t2;
      $[28] = toggleTheme;
      $[29] = t15;
    } else {
      t15 = $[29];
    }
    var t16;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
      t16 = /*#__PURE__*/_jsx("span", {
        className: "sr-only",
        children: "Toggle between light and dark theme"
      });
      $[30] = t16;
    } else {
      t16 = $[30];
    }
    var t17;
    if ($[31] !== t15) {
      t17 = /*#__PURE__*/_jsxs("div", {
        className: "relative inline-flex",
        children: [t15, t16]
      });
      $[31] = t15;
      $[32] = t17;
    } else {
      t17 = $[32];
    }
    return t17;
  }
  if (variant === "dropdown") {
    var _t6;
    if ($[33] !== getIcon) {
      _t6 = getIcon();
      $[33] = getIcon;
      $[34] = _t6;
    } else {
      _t6 = $[34];
    }
    var _t7;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
      _t7 = /*#__PURE__*/_jsx("span", {
        className: "sr-only",
        children: "Open theme selector"
      });
      $[35] = _t7;
    } else {
      _t7 = $[35];
    }
    var _t8;
    if ($[36] !== _t6) {
      _t8 = /*#__PURE__*/_jsx(DropdownMenuTrigger, {
        asChild: true,
        children: /*#__PURE__*/_jsxs(Button, {
          variant: "outline",
          size: "icon",
          className: "h-9 w-9",
          children: [_t6, _t7]
        })
      });
      $[36] = _t6;
      $[37] = _t8;
    } else {
      _t8 = $[37];
    }
    var _t9;
    if ($[38] !== setTheme) {
      _t9 = function _t9(value) {
        return setTheme(value);
      };
      $[38] = setTheme;
      $[39] = _t9;
    } else {
      _t9 = $[39];
    }
    var _t0;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
      _t0 = /*#__PURE__*/_jsxs(DropdownMenuRadioItem, {
        value: "light",
        children: [/*#__PURE__*/_jsx(Sun, {
          className: "mr-2 h-4 w-4"
        }), "Light"]
      });
      $[40] = _t0;
    } else {
      _t0 = $[40];
    }
    var _t1;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
      _t1 = /*#__PURE__*/_jsxs(DropdownMenuRadioItem, {
        value: "dark",
        children: [/*#__PURE__*/_jsx(Moon, {
          className: "mr-2 h-4 w-4"
        }), "Dark"]
      });
      $[41] = _t1;
    } else {
      _t1 = $[41];
    }
    var _t10;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
      _t10 = /*#__PURE__*/_jsxs(DropdownMenuRadioItem, {
        value: "system",
        children: [/*#__PURE__*/_jsx(Laptop, {
          className: "mr-2 h-4 w-4"
        }), "System"]
      });
      $[42] = _t10;
    } else {
      _t10 = $[42];
    }
    var _t11;
    if ($[43] !== _t9 || $[44] !== theme) {
      _t11 = /*#__PURE__*/_jsxs(DropdownMenuRadioGroup, {
        value: theme,
        onValueChange: _t9,
        children: [_t0, _t1, _t10]
      });
      $[43] = _t9;
      $[44] = theme;
      $[45] = _t11;
    } else {
      _t11 = $[45];
    }
    var _t12;
    if ($[46] !== DropdownMenuContentProps || $[47] !== _t11) {
      _t12 = /*#__PURE__*/_jsx(DropdownMenuContent, _objectSpread(_objectSpread({
        align: "end"
      }, DropdownMenuContentProps), {}, {
        children: _t11
      }));
      $[46] = DropdownMenuContentProps;
      $[47] = _t11;
      $[48] = _t12;
    } else {
      _t12 = $[48];
    }
    var _t13;
    if ($[49] !== rest || $[50] !== _t12 || $[51] !== _t8) {
      _t13 = /*#__PURE__*/_jsxs(DropdownMenu, _objectSpread(_objectSpread({}, rest), {}, {
        children: [_t8, _t12]
      }));
      $[49] = rest;
      $[50] = _t12;
      $[51] = _t8;
      $[52] = _t13;
    } else {
      _t13 = $[52];
    }
    return _t13;
  }
  var t7 = getTitle();
  var t8;
  if ($[53] !== getIcon) {
    t8 = getIcon();
    $[53] = getIcon;
    $[54] = t8;
  } else {
    t8 = $[54];
  }
  var t9;
  if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = /*#__PURE__*/_jsx("span", {
      className: "sr-only",
      children: "Toggle theme"
    });
    $[55] = t9;
  } else {
    t9 = $[55];
  }
  var t10;
  if ($[56] !== t7 || $[57] !== t8 || $[58] !== toggleTheme) {
    t10 = /*#__PURE__*/_jsxs(Button, {
      variant: "outline",
      size: "icon",
      onClick: toggleTheme,
      title: t7,
      className: "h-9 w-9",
      children: [t8, t9]
    });
    $[56] = t7;
    $[57] = t8;
    $[58] = toggleTheme;
    $[59] = t10;
  } else {
    t10 = $[59];
  }
  return t10;
}

//# sourceMappingURL=theme-toggle.js.map