import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "defaultTheme", "storageKey"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var ThemeProviderContext = /*#__PURE__*/React.createContext(undefined);
export function ThemeProvider(t0) {
  var $ = _c(20);
  var children;
  var props;
  var t1;
  var t2;
  if ($[0] !== t0) {
    var _t = t0;
    children = _t.children;
    t1 = _t.defaultTheme;
    t2 = _t.storageKey;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = children;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
  } else {
    children = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
  }
  var defaultTheme = t1 === undefined ? "system" : t1;
  var storageKey = t2 === undefined ? "feathers-ui-theme" : t2;
  var t3;
  if ($[5] !== defaultTheme || $[6] !== storageKey) {
    t3 = function t3() {
      if (typeof window !== "undefined") {
        return localStorage.getItem(storageKey) || defaultTheme;
      }
      return defaultTheme;
    };
    $[5] = defaultTheme;
    $[6] = storageKey;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  var _React$useState = React.useState(t3),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    theme = _React$useState2[0],
    setTheme = _React$useState2[1];
  var t4;
  var t5;
  if ($[8] !== theme) {
    t4 = function t4() {
      if (typeof window === "undefined") {
        return;
      }
      var root = window.document.documentElement;
      root.classList.remove("light", "dark");
      if (theme === "system") {
        var systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        root.classList.add(systemTheme);
        return;
      }
      root.classList.add(theme);
    };
    t5 = [theme];
    $[8] = theme;
    $[9] = t4;
    $[10] = t5;
  } else {
    t4 = $[9];
    t5 = $[10];
  }
  React.useEffect(t4, t5);
  var t6;
  if ($[11] !== storageKey) {
    t6 = function t6(newTheme) {
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, newTheme);
      }
      setTheme(newTheme);
    };
    $[11] = storageKey;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  var t7;
  if ($[13] !== t6 || $[14] !== theme) {
    t7 = {
      theme: theme,
      setTheme: t6
    };
    $[13] = t6;
    $[14] = theme;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  var value = t7;
  var t8;
  if ($[16] !== children || $[17] !== props || $[18] !== value) {
    t8 = /*#__PURE__*/_jsx(ThemeProviderContext.Provider, _objectSpread(_objectSpread({}, props), {}, {
      value: value,
      children: children
    }));
    $[16] = children;
    $[17] = props;
    $[18] = value;
    $[19] = t8;
  } else {
    t8 = $[19];
  }
  return t8;
}
export var useTheme = function useTheme() {
  var context = React.useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

//# sourceMappingURL=theme-provider.js.map