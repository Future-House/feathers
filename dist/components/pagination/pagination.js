import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className", "isActive", "size"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
  _excluded6 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Ellipsis as MoreHorizontalIcon } from "../../icons";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../button";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Pagination(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("mx-auto flex w-full justify-center", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("nav", _objectSpread({
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
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
function PaginationContent(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t2 = t0;
    className = _t2.className;
    props = _objectWithoutProperties(_t2, _excluded2);
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
    t1 = cn("flex flex-row items-center gap-1", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("ul", _objectSpread({
      "data-slot": "pagination-content",
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
function PaginationItem(t0) {
  var $ = _c(4);
  var props;
  if ($[0] !== t0) {
    var _t3 = t0;
    _objectDestructuringEmpty(_t3);
    props = _extends({}, (_objectDestructuringEmpty(_t3), _t3));
    _t3;
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  var t1;
  if ($[2] !== props) {
    t1 = /*#__PURE__*/_jsx("li", _objectSpread({
      "data-slot": "pagination-item"
    }, props));
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function PaginationLink(t0) {
  var $ = _c(14);
  var className;
  var isActive;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t4 = t0;
    className = _t4.className;
    isActive = _t4.isActive;
    t1 = _t4.size;
    props = _objectWithoutProperties(_t4, _excluded3);
    _t4;
    $[0] = t0;
    $[1] = className;
    $[2] = isActive;
    $[3] = props;
    $[4] = t1;
  } else {
    className = $[1];
    isActive = $[2];
    props = $[3];
    t1 = $[4];
  }
  var size = t1 === undefined ? "icon" : t1;
  var t2 = isActive ? "page" : undefined;
  var t3 = isActive ? "outline" : "ghost";
  var t4;
  if ($[5] !== className || $[6] !== size || $[7] !== t3) {
    t4 = cn(buttonVariants({
      variant: t3,
      size: size
    }), className);
    $[5] = className;
    $[6] = size;
    $[7] = t3;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  var t5;
  if ($[9] !== isActive || $[10] !== props || $[11] !== t2 || $[12] !== t4) {
    t5 = /*#__PURE__*/_jsx("a", _objectSpread({
      "aria-current": t2,
      "data-slot": "pagination-link",
      "data-active": isActive,
      className: t4
    }, props));
    $[9] = isActive;
    $[10] = props;
    $[11] = t2;
    $[12] = t4;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  return t5;
}
function PaginationPrevious(t0) {
  var $ = _c(10);
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
    t1 = cn("gap-1 px-2.5 sm:pl-2.5", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  var t3;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx(ChevronLeftIcon, {});
    t3 = /*#__PURE__*/_jsx("span", {
      className: "hidden sm:block",
      children: "Previous"
    });
    $[5] = t2;
    $[6] = t3;
  } else {
    t2 = $[5];
    t3 = $[6];
  }
  var t4;
  if ($[7] !== props || $[8] !== t1) {
    t4 = /*#__PURE__*/_jsxs(PaginationLink, _objectSpread(_objectSpread({
      "aria-label": "Go to previous page",
      size: "default",
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
function PaginationNext(t0) {
  var $ = _c(10);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t6 = t0;
    className = _t6.className;
    props = _objectWithoutProperties(_t6, _excluded5);
    _t6;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("gap-1 px-2.5 sm:pr-2.5", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  var t3;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx("span", {
      className: "hidden sm:block",
      children: "Next"
    });
    t3 = /*#__PURE__*/_jsx(ChevronRightIcon, {});
    $[5] = t2;
    $[6] = t3;
  } else {
    t2 = $[5];
    t3 = $[6];
  }
  var t4;
  if ($[7] !== props || $[8] !== t1) {
    t4 = /*#__PURE__*/_jsxs(PaginationLink, _objectSpread(_objectSpread({
      "aria-label": "Go to next page",
      size: "default",
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
function PaginationEllipsis(t0) {
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
    t2 = /*#__PURE__*/_jsx(MoreHorizontalIcon, {
      className: "size-4"
    });
    t3 = /*#__PURE__*/_jsx("span", {
      className: "sr-only",
      children: "More pages"
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
      "aria-hidden": true,
      "data-slot": "pagination-ellipsis",
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
export { Pagination, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis };

//# sourceMappingURL=pagination.js.map