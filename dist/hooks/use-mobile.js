import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
var MOBILE_BREAKPOINT = 768;
export function useIsMobile() {
  var $ = _c(2);
  var _React$useState = React.useState(undefined),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isMobile = _React$useState2[0],
    setIsMobile = _React$useState2[1];
  var t0;
  var t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = function t0() {
      var mql = window.matchMedia("(max-width: ".concat(MOBILE_BREAKPOINT - 1, "px)"));
      var onChange = function onChange() {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      };
      mql.addEventListener("change", onChange);
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      return function () {
        return mql.removeEventListener("change", onChange);
      };
    };
    t1 = [];
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  React.useEffect(t0, t1);
  return !!isMobile;
}

//# sourceMappingURL=use-mobile.js.map