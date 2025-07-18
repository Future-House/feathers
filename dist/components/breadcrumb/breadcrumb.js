import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["asChild", "className"],
  _excluded4 = ["className"],
  _excluded5 = ["children", "className"],
  _excluded6 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from "../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Breadcrumb(t0) {
  var $ = _c(4);
  var props;
  if ($[0] !== t0) {
    var _t = t0;
    _objectDestructuringEmpty(_t);
    props = _extends({}, (_objectDestructuringEmpty(_t), _t));
    _t;
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  var t1;
  if ($[2] !== props) {
    t1 = /*#__PURE__*/_jsx("nav", _objectSpread({
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function BreadcrumbList(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t2 = t0;
    className = _t2.className;
    props = _objectWithoutProperties(_t2, _excluded);
    _t2;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("ol", _objectSpread({
      "data-slot": "breadcrumb-list",
      className: t1
    }, props));
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function BreadcrumbItem(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t3 = t0;
    className = _t3.className;
    props = _objectWithoutProperties(_t3, _excluded2);
    _t3;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("inline-flex items-center gap-1.5", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("li", _objectSpread({
      "data-slot": "breadcrumb-item",
      className: t1
    }, props));
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function BreadcrumbLink(t0) {
  var $ = _c(10);
  var asChild;
  var className;
  var props;
  if ($[0] !== t0) {
    var _t4 = t0;
    asChild = _t4.asChild;
    className = _t4.className;
    props = _objectWithoutProperties(_t4, _excluded3);
    _t4;
    $[0] = t0;
    $[1] = asChild;
    $[2] = className;
    $[3] = props;
  } else {
    asChild = $[1];
    className = $[2];
    props = $[3];
  }
  var Comp = asChild ? Slot : "a";
  var t1;
  if ($[4] !== className) {
    t1 = cn("hover:text-foreground transition-colors", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var t2;
  if ($[6] !== Comp || $[7] !== props || $[8] !== t1) {
    t2 = /*#__PURE__*/_jsx(Comp, _objectSpread({
      "data-slot": "breadcrumb-link",
      className: t1
    }, props));
    $[6] = Comp;
    $[7] = props;
    $[8] = t1;
    $[9] = t2;
  } else {
    t2 = $[9];
  }
  return t2;
}
function BreadcrumbPage(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t5 = t0;
    className = _t5.className;
    props = _objectWithoutProperties(_t5, _excluded4);
    _t5;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("text-foreground font-normal", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("span", _objectSpread({
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: t1
    }, props));
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function BreadcrumbSeparator(t0) {
  var $ = _c(12);
  var children;
  var className;
  var props;
  if ($[0] !== t0) {
    var _t6 = t0;
    children = _t6.children;
    className = _t6.className;
    props = _objectWithoutProperties(_t6, _excluded5);
    _t6;
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
  }
  var t1;
  if ($[4] !== className) {
    t1 = cn("[&>svg]:size-3.5", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var t2;
  if ($[6] !== children) {
    t2 = children !== null && children !== void 0 ? children : /*#__PURE__*/_jsx(ChevronRight, {});
    $[6] = children;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  var t3;
  if ($[8] !== props || $[9] !== t1 || $[10] !== t2) {
    t3 = /*#__PURE__*/_jsx("li", _objectSpread(_objectSpread({
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: t1
    }, props), {}, {
      children: t2
    }));
    $[8] = props;
    $[9] = t1;
    $[10] = t2;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  return t3;
}
function BreadcrumbEllipsis(t0) {
  var $ = _c(10);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t7 = t0;
    className = _t7.className;
    props = _objectWithoutProperties(_t7, _excluded6);
    _t7;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("flex size-9 items-center justify-center", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  var t3;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx(MoreHorizontal, {
      className: "size-4"
    });
    t3 = /*#__PURE__*/_jsx("span", {
      className: "sr-only",
      children: "More"
    });
    $[5] = t2;
    $[6] = t3;
  } else {
    t2 = $[5];
    t3 = $[6];
  }
  var t4;
  if ($[7] !== props || $[8] !== t1) {
    t4 = /*#__PURE__*/_jsxs("span", _objectSpread(_objectSpread({
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: t1
    }, props), {}, {
      children: [t2, t3]
    }));
    $[7] = props;
    $[8] = t1;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  return t4;
}
export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis };

//# sourceMappingURL=breadcrumb.js.map