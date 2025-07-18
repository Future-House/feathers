import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["orientation", "opts", "setApi", "plugins", "className", "children"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className", "variant", "size"],
  _excluded5 = ["className", "variant", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from "../../lib/utils";
import { Button } from "../button/button";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var CarouselContext = /*#__PURE__*/React.createContext(null);
function useCarousel() {
  var context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
function Carousel(t0) {
  var _opts;
  var $ = _c(45);
  var children;
  var className;
  var opts;
  var plugins;
  var props;
  var setApi;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    t1 = _t.orientation;
    opts = _t.opts;
    setApi = _t.setApi;
    plugins = _t.plugins;
    className = _t.className;
    children = _t.children;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = opts;
    $[4] = plugins;
    $[5] = props;
    $[6] = setApi;
    $[7] = t1;
  } else {
    children = $[1];
    className = $[2];
    opts = $[3];
    plugins = $[4];
    props = $[5];
    setApi = $[6];
    t1 = $[7];
  }
  var orientation = t1 === undefined ? "horizontal" : t1;
  var t2 = orientation === "horizontal" ? "x" : "y";
  var t3;
  if ($[8] !== opts || $[9] !== t2) {
    t3 = _objectSpread(_objectSpread({}, opts), {}, {
      axis: t2
    });
    $[8] = opts;
    $[9] = t2;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  var _useEmblaCarousel = useEmblaCarousel(t3, plugins),
    _useEmblaCarousel2 = _slicedToArray(_useEmblaCarousel, 2),
    carouselRef = _useEmblaCarousel2[0],
    api = _useEmblaCarousel2[1];
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    canScrollPrev = _React$useState2[0],
    setCanScrollPrev = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    canScrollNext = _React$useState4[0],
    setCanScrollNext = _React$useState4[1];
  var t4;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = function t4(api_0) {
      if (!api_0) {
        return;
      }
      setCanScrollPrev(api_0.canScrollPrev());
      setCanScrollNext(api_0.canScrollNext());
    };
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  var onSelect = t4;
  var t5;
  if ($[12] !== api) {
    t5 = function t5() {
      api === null || api === void 0 || api.scrollPrev();
    };
    $[12] = api;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  var scrollPrev = t5;
  var t6;
  if ($[14] !== api) {
    t6 = function t6() {
      api === null || api === void 0 || api.scrollNext();
    };
    $[14] = api;
    $[15] = t6;
  } else {
    t6 = $[15];
  }
  var scrollNext = t6;
  var t7;
  if ($[16] !== scrollNext || $[17] !== scrollPrev) {
    t7 = function t7(event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      }
    };
    $[16] = scrollNext;
    $[17] = scrollPrev;
    $[18] = t7;
  } else {
    t7 = $[18];
  }
  var handleKeyDown = t7;
  var t8;
  var t9;
  if ($[19] !== api || $[20] !== setApi) {
    t8 = function t8() {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    };
    t9 = [api, setApi];
    $[19] = api;
    $[20] = setApi;
    $[21] = t8;
    $[22] = t9;
  } else {
    t8 = $[21];
    t9 = $[22];
  }
  React.useEffect(t8, t9);
  var t10;
  var t11;
  if ($[23] !== api) {
    t10 = function t10() {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return function () {
        api === null || api === void 0 || api.off("select", onSelect);
      };
    };
    t11 = [api, onSelect];
    $[23] = api;
    $[24] = t10;
    $[25] = t11;
  } else {
    t10 = $[24];
    t11 = $[25];
  }
  React.useEffect(t10, t11);
  var t12 = orientation || (((_opts = opts) === null || _opts === void 0 ? void 0 : _opts.axis) === "y" ? "vertical" : "horizontal");
  var t13;
  if ($[26] !== api || $[27] !== canScrollNext || $[28] !== canScrollPrev || $[29] !== carouselRef || $[30] !== opts || $[31] !== scrollNext || $[32] !== scrollPrev || $[33] !== t12) {
    t13 = {
      carouselRef: carouselRef,
      api: api,
      opts: opts,
      orientation: t12,
      scrollPrev: scrollPrev,
      scrollNext: scrollNext,
      canScrollPrev: canScrollPrev,
      canScrollNext: canScrollNext
    };
    $[26] = api;
    $[27] = canScrollNext;
    $[28] = canScrollPrev;
    $[29] = carouselRef;
    $[30] = opts;
    $[31] = scrollNext;
    $[32] = scrollPrev;
    $[33] = t12;
    $[34] = t13;
  } else {
    t13 = $[34];
  }
  var t14;
  if ($[35] !== className) {
    t14 = cn("relative", className);
    $[35] = className;
    $[36] = t14;
  } else {
    t14 = $[36];
  }
  var t15;
  if ($[37] !== children || $[38] !== handleKeyDown || $[39] !== props || $[40] !== t14) {
    t15 = /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
      onKeyDownCapture: handleKeyDown,
      className: t14,
      role: "region",
      "aria-roledescription": "carousel",
      "data-slot": "carousel"
    }, props), {}, {
      children: children
    }));
    $[37] = children;
    $[38] = handleKeyDown;
    $[39] = props;
    $[40] = t14;
    $[41] = t15;
  } else {
    t15 = $[41];
  }
  var t16;
  if ($[42] !== t13 || $[43] !== t15) {
    t16 = /*#__PURE__*/_jsx(CarouselContext.Provider, {
      value: t13,
      children: t15
    });
    $[42] = t13;
    $[43] = t15;
    $[44] = t16;
  } else {
    t16 = $[44];
  }
  return t16;
}
function CarouselContent(t0) {
  var $ = _c(12);
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
  var _useCarousel = useCarousel(),
    carouselRef = _useCarousel.carouselRef,
    orientation = _useCarousel.orientation;
  var t1 = orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col";
  var t2;
  if ($[3] !== className || $[4] !== t1) {
    t2 = cn("flex", t1, className);
    $[3] = className;
    $[4] = t1;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var t3;
  if ($[6] !== props || $[7] !== t2) {
    t3 = /*#__PURE__*/_jsx("div", _objectSpread({
      className: t2
    }, props));
    $[6] = props;
    $[7] = t2;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  var t4;
  if ($[9] !== carouselRef || $[10] !== t3) {
    t4 = /*#__PURE__*/_jsx("div", {
      ref: carouselRef,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: t3
    });
    $[9] = carouselRef;
    $[10] = t3;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  return t4;
}
function CarouselItem(t0) {
  var $ = _c(9);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t3 = t0;
    className = _t3.className;
    props = _objectWithoutProperties(_t3, _excluded3);
    _t3;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var _useCarousel2 = useCarousel(),
    orientation = _useCarousel2.orientation;
  var t1 = orientation === "horizontal" ? "pl-4" : "pt-4";
  var t2;
  if ($[3] !== className || $[4] !== t1) {
    t2 = cn("min-w-0 shrink-0 grow-0 basis-full", t1, className);
    $[3] = className;
    $[4] = t1;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var t3;
  if ($[6] !== props || $[7] !== t2) {
    t3 = /*#__PURE__*/_jsx("div", _objectSpread({
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: t2
    }, props));
    $[6] = props;
    $[7] = t2;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  return t3;
}
function CarouselPrevious(t0) {
  var $ = _c(17);
  var className;
  var props;
  var t1;
  var t2;
  if ($[0] !== t0) {
    var _t4 = t0;
    className = _t4.className;
    t1 = _t4.variant;
    t2 = _t4.size;
    props = _objectWithoutProperties(_t4, _excluded4);
    _t4;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
  }
  var variant = t1 === undefined ? "outline" : t1;
  var size = t2 === undefined ? "icon" : t2;
  var _useCarousel3 = useCarousel(),
    orientation = _useCarousel3.orientation,
    scrollPrev = _useCarousel3.scrollPrev,
    canScrollPrev = _useCarousel3.canScrollPrev;
  var t3 = orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90";
  var t4;
  if ($[5] !== className || $[6] !== t3) {
    t4 = cn("absolute size-8 rounded-full", t3, className);
    $[5] = className;
    $[6] = t3;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  var t5 = !canScrollPrev;
  var t6;
  var t7;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /*#__PURE__*/_jsx(ArrowLeft, {});
    t7 = /*#__PURE__*/_jsx("span", {
      className: "sr-only",
      children: "Previous slide"
    });
    $[8] = t6;
    $[9] = t7;
  } else {
    t6 = $[8];
    t7 = $[9];
  }
  var t8;
  if ($[10] !== props || $[11] !== scrollPrev || $[12] !== size || $[13] !== t4 || $[14] !== t5 || $[15] !== variant) {
    t8 = /*#__PURE__*/_jsxs(Button, _objectSpread(_objectSpread({
      "data-slot": "carousel-previous",
      variant: variant,
      size: size,
      className: t4,
      disabled: t5,
      onClick: scrollPrev
    }, props), {}, {
      children: [t6, t7]
    }));
    $[10] = props;
    $[11] = scrollPrev;
    $[12] = size;
    $[13] = t4;
    $[14] = t5;
    $[15] = variant;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  return t8;
}
function CarouselNext(t0) {
  var $ = _c(17);
  var className;
  var props;
  var t1;
  var t2;
  if ($[0] !== t0) {
    var _t5 = t0;
    className = _t5.className;
    t1 = _t5.variant;
    t2 = _t5.size;
    props = _objectWithoutProperties(_t5, _excluded5);
    _t5;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
  }
  var variant = t1 === undefined ? "outline" : t1;
  var size = t2 === undefined ? "icon" : t2;
  var _useCarousel4 = useCarousel(),
    orientation = _useCarousel4.orientation,
    scrollNext = _useCarousel4.scrollNext,
    canScrollNext = _useCarousel4.canScrollNext;
  var t3 = orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90";
  var t4;
  if ($[5] !== className || $[6] !== t3) {
    t4 = cn("absolute size-8 rounded-full", t3, className);
    $[5] = className;
    $[6] = t3;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  var t5 = !canScrollNext;
  var t6;
  var t7;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /*#__PURE__*/_jsx(ArrowRight, {});
    t7 = /*#__PURE__*/_jsx("span", {
      className: "sr-only",
      children: "Next slide"
    });
    $[8] = t6;
    $[9] = t7;
  } else {
    t6 = $[8];
    t7 = $[9];
  }
  var t8;
  if ($[10] !== props || $[11] !== scrollNext || $[12] !== size || $[13] !== t4 || $[14] !== t5 || $[15] !== variant) {
    t8 = /*#__PURE__*/_jsxs(Button, _objectSpread(_objectSpread({
      "data-slot": "carousel-next",
      variant: variant,
      size: size,
      className: t4,
      disabled: t5,
      onClick: scrollNext
    }, props), {}, {
      children: [t6, t7]
    }));
    $[10] = props;
    $[11] = scrollNext;
    $[12] = size;
    $[13] = t4;
    $[14] = t5;
    $[15] = variant;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  return t8;
}
export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };

//# sourceMappingURL=carousel.js.map