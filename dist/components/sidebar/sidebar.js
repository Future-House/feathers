import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["defaultOpen", "open", "onOpenChange", "className", "style", "children"],
  _excluded2 = ["side", "variant", "collapsible", "className", "children"],
  _excluded3 = ["className", "onClick"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
  _excluded6 = ["className"],
  _excluded7 = ["className"],
  _excluded8 = ["className"],
  _excluded9 = ["className"],
  _excluded0 = ["className"],
  _excluded1 = ["className"],
  _excluded10 = ["className", "asChild"],
  _excluded11 = ["className", "asChild"],
  _excluded12 = ["className"],
  _excluded13 = ["className"],
  _excluded14 = ["className"],
  _excluded15 = ["asChild", "isActive", "variant", "size", "tooltip", "className"],
  _excluded16 = ["className", "asChild", "showOnHover"],
  _excluded17 = ["className"],
  _excluded18 = ["className", "showIcon"],
  _excluded19 = ["className"],
  _excluded20 = ["className"],
  _excluded21 = ["asChild", "size", "isActive", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { SidePanelOpen as PanelLeftOpenIcon, SidePanelClose as PanelLeftCloseIcon } from "../../icons";
import { useIsMobile } from "../../hooks/use-mobile";
import { cn } from "../../lib/utils";
import { Button } from "../button";
import { Input } from "../input";
import { Separator } from "../separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../sheet";
import { Skeleton } from "../skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var SIDEBAR_COOKIE_NAME = 'sidebar_state';
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = '16rem';
var SIDEBAR_WIDTH_MOBILE = '18rem';
var SIDEBAR_WIDTH_ICON = '3rem';
var SIDEBAR_KEYBOARD_SHORTCUT = 'b';
var SidebarContext = /*#__PURE__*/React.createContext(null);
function useSidebar() {
  var context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
function SidebarProvider(_ref) {
  var _ref$defaultOpen = _ref.defaultOpen,
    defaultOpen = _ref$defaultOpen === void 0 ? true : _ref$defaultOpen,
    openProp = _ref.open,
    setOpenProp = _ref.onOpenChange,
    className = _ref.className,
    style = _ref.style,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var isMobile = useIsMobile();
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    openMobile = _React$useState2[0],
    setOpenMobile = _React$useState2[1];

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  var _React$useState3 = React.useState(defaultOpen),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    _open = _React$useState4[0],
    _setOpen = _React$useState4[1];
  var open = openProp !== null && openProp !== void 0 ? openProp : _open;

  // Update internal state when defaultOpen changes (for testing)
  React.useEffect(function () {
    if (openProp === undefined) {
      _setOpen(defaultOpen);
    }
  }, [defaultOpen, openProp]);
  var setOpen = React.useCallback(function (value) {
    var openState = typeof value === 'function' ? value(open) : value;
    if (setOpenProp) {
      setOpenProp(openState);
    } else {
      _setOpen(openState);
    }

    // This sets the cookie to keep the sidebar state.
    document.cookie = "".concat(SIDEBAR_COOKIE_NAME, "=").concat(openState, "; path=/; max-age=").concat(SIDEBAR_COOKIE_MAX_AGE);
  }, [setOpenProp, open]);

  // Helper to toggle the sidebar.
  var toggleSidebar = React.useCallback(function () {
    return isMobile ? setOpenMobile(function (open_0) {
      return !open_0;
    }) : setOpen(function (open_1) {
      return !open_1;
    });
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(function () {
    var handleKeyDown = function handleKeyDown(event) {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      return window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  var state = open ? 'expanded' : 'collapsed';
  var contextValue = React.useMemo(function () {
    return {
      state: state,
      open: open,
      setOpen: setOpen,
      isMobile: isMobile,
      openMobile: openMobile,
      setOpenMobile: setOpenMobile,
      toggleSidebar: toggleSidebar
    };
  }, [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]);
  return /*#__PURE__*/_jsx(SidebarContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/_jsx(TooltipProvider, {
      delayDuration: 0,
      children: /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
        "data-slot": "sidebar-wrapper",
        style: _objectSpread({
          '--sidebar-width': SIDEBAR_WIDTH,
          '--sidebar-width-icon': SIDEBAR_WIDTH_ICON
        }, style),
        className: cn('group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full', className)
      }, props), {}, {
        children: children
      }))
    })
  });
}
function Sidebar(t0) {
  var $ = _c(46);
  var children;
  var className;
  var props;
  var t1;
  var t2;
  var t3;
  if ($[0] !== t0) {
    var _t = t0;
    t1 = _t.side;
    t2 = _t.variant;
    t3 = _t.collapsible;
    className = _t.className;
    children = _t.children;
    props = _objectWithoutProperties(_t, _excluded2);
    _t;
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = t1;
    $[5] = t2;
    $[6] = t3;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    t1 = $[4];
    t2 = $[5];
    t3 = $[6];
  }
  var side = t1 === undefined ? "left" : t1;
  var variant = t2 === undefined ? "sidebar" : t2;
  var collapsible = t3 === undefined ? "offcanvas" : t3;
  var _useSidebar = useSidebar(),
    isMobile = _useSidebar.isMobile,
    state = _useSidebar.state,
    openMobile = _useSidebar.openMobile,
    setOpenMobile = _useSidebar.setOpenMobile;
  if (collapsible === "none") {
    var _t2;
    if ($[7] !== className) {
      _t2 = cn("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", className);
      $[7] = className;
      $[8] = _t2;
    } else {
      _t2 = $[8];
    }
    var _t3;
    if ($[9] !== children || $[10] !== props || $[11] !== _t2) {
      _t3 = /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
        "data-slot": "sidebar",
        className: _t2
      }, props), {}, {
        children: children
      }));
      $[9] = children;
      $[10] = props;
      $[11] = _t2;
      $[12] = _t3;
    } else {
      _t3 = $[12];
    }
    return _t3;
  }
  if (isMobile) {
    var _t4;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
      _t4 = {
        "--sidebar-width": SIDEBAR_WIDTH_MOBILE
      };
      $[13] = _t4;
    } else {
      _t4 = $[13];
    }
    var _t5;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
      _t5 = /*#__PURE__*/_jsxs(SheetHeader, {
        className: "sr-only",
        children: [/*#__PURE__*/_jsx(SheetTitle, {
          children: "Sidebar"
        }), /*#__PURE__*/_jsx(SheetDescription, {
          children: "Displays the mobile sidebar."
        })]
      });
      $[14] = _t5;
    } else {
      _t5 = $[14];
    }
    var _t6;
    if ($[15] !== children) {
      _t6 = /*#__PURE__*/_jsx("div", {
        className: "flex h-full w-full flex-col",
        children: children
      });
      $[15] = children;
      $[16] = _t6;
    } else {
      _t6 = $[16];
    }
    var _t7;
    if ($[17] !== side || $[18] !== _t6) {
      _t7 = /*#__PURE__*/_jsxs(SheetContent, {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
        style: _t4,
        side: side,
        children: [_t5, _t6]
      });
      $[17] = side;
      $[18] = _t6;
      $[19] = _t7;
    } else {
      _t7 = $[19];
    }
    var _t8;
    if ($[20] !== openMobile || $[21] !== props || $[22] !== setOpenMobile || $[23] !== _t7) {
      _t8 = /*#__PURE__*/_jsx(Sheet, _objectSpread(_objectSpread({
        open: openMobile,
        onOpenChange: setOpenMobile
      }, props), {}, {
        children: _t7
      }));
      $[20] = openMobile;
      $[21] = props;
      $[22] = setOpenMobile;
      $[23] = _t7;
      $[24] = _t8;
    } else {
      _t8 = $[24];
    }
    return _t8;
  }
  var t4 = state === "collapsed" ? collapsible : "";
  var t5 = variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)";
  var t6;
  if ($[25] !== t5) {
    t6 = cn("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", t5);
    $[25] = t5;
    $[26] = t6;
  } else {
    t6 = $[26];
  }
  var t7;
  if ($[27] !== t6) {
    t7 = /*#__PURE__*/_jsx("div", {
      "data-slot": "sidebar-gap",
      className: t6
    });
    $[27] = t6;
    $[28] = t7;
  } else {
    t7 = $[28];
  }
  var t8 = side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]";
  var t9 = variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l";
  var t10;
  if ($[29] !== className || $[30] !== t8 || $[31] !== t9) {
    t10 = cn("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", t8, t9, className);
    $[29] = className;
    $[30] = t8;
    $[31] = t9;
    $[32] = t10;
  } else {
    t10 = $[32];
  }
  var t11;
  if ($[33] !== children) {
    t11 = /*#__PURE__*/_jsx("div", {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar-inner",
      className: "bg-sidebar flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
      children: children
    });
    $[33] = children;
    $[34] = t11;
  } else {
    t11 = $[34];
  }
  var t12;
  if ($[35] !== t10 || $[36] !== t11) {
    t12 = /*#__PURE__*/_jsx("div", {
      "data-slot": "sidebar-container",
      className: t10,
      children: t11
    });
    $[35] = t10;
    $[36] = t11;
    $[37] = t12;
  } else {
    t12 = $[37];
  }
  var t13;
  if ($[38] !== props || $[39] !== side || $[40] !== state || $[41] !== t12 || $[42] !== t4 || $[43] !== t7 || $[44] !== variant) {
    t13 = /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": state,
      "data-collapsible": t4,
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar"
    }, props), {}, {
      children: ["01", t7, t12]
    }));
    $[38] = props;
    $[39] = side;
    $[40] = state;
    $[41] = t12;
    $[42] = t4;
    $[43] = t7;
    $[44] = variant;
    $[45] = t13;
  } else {
    t13 = $[45];
  }
  return t13;
}
function SidebarTrigger(t0) {
  var $ = _c(17);
  var className;
  var onClick;
  var props;
  if ($[0] !== t0) {
    var _t9 = t0;
    className = _t9.className;
    onClick = _t9.onClick;
    props = _objectWithoutProperties(_t9, _excluded3);
    _t9;
    $[0] = t0;
    $[1] = className;
    $[2] = onClick;
    $[3] = props;
  } else {
    className = $[1];
    onClick = $[2];
    props = $[3];
  }
  var _useSidebar2 = useSidebar(),
    toggleSidebar = _useSidebar2.toggleSidebar,
    state = _useSidebar2.state;
  var t1;
  if ($[4] !== className) {
    t1 = cn("size-7", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  var t2;
  if ($[6] !== onClick || $[7] !== toggleSidebar) {
    t2 = function t2(event) {
      var _onClick;
      (_onClick = onClick) === null || _onClick === void 0 || _onClick(event);
      toggleSidebar();
    };
    $[6] = onClick;
    $[7] = toggleSidebar;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  var t3;
  if ($[9] !== state) {
    t3 = state === "expanded" ? /*#__PURE__*/_jsx(PanelLeftCloseIcon, {}) : /*#__PURE__*/_jsx(PanelLeftOpenIcon, {});
    $[9] = state;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  var t4;
  if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /*#__PURE__*/_jsx("span", {
      className: "sr-only",
      children: "Toggle Sidebar"
    });
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  var t5;
  if ($[12] !== props || $[13] !== t1 || $[14] !== t2 || $[15] !== t3) {
    t5 = /*#__PURE__*/_jsxs(Button, _objectSpread(_objectSpread({
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: t1,
      onClick: t2
    }, props), {}, {
      children: [t3, t4]
    }));
    $[12] = props;
    $[13] = t1;
    $[14] = t2;
    $[15] = t3;
    $[16] = t5;
  } else {
    t5 = $[16];
  }
  return t5;
}
function SidebarRail(t0) {
  var $ = _c(9);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t0 = t0;
    className = _t0.className;
    props = _objectWithoutProperties(_t0, _excluded4);
    _t0;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var _useSidebar3 = useSidebar(),
    toggleSidebar = _useSidebar3.toggleSidebar;
  var t1;
  if ($[3] !== className) {
    t1 = cn("hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1 || $[7] !== toggleSidebar) {
    t2 = /*#__PURE__*/_jsx("button", _objectSpread({
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: toggleSidebar,
      title: "Toggle Sidebar",
      className: t1
    }, props));
    $[5] = props;
    $[6] = t1;
    $[7] = toggleSidebar;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  return t2;
}
function SidebarInset(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t1 = t0;
    className = _t1.className;
    props = _objectWithoutProperties(_t1, _excluded5);
    _t1;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("bg-background relative flex w-full flex-1 flex-col", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("main", _objectSpread({
      "data-slot": "sidebar-inset",
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
function SidebarInput(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t10 = t0;
    className = _t10.className;
    props = _objectWithoutProperties(_t10, _excluded6);
    _t10;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("bg-background h-8 w-full shadow-none", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(Input, _objectSpread({
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
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
function SidebarHeader(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t11 = t0;
    className = _t11.className;
    props = _objectWithoutProperties(_t11, _excluded7);
    _t11;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("flex flex-col gap-2 p-2", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("div", _objectSpread({
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
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
function SidebarFooter(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t12 = t0;
    className = _t12.className;
    props = _objectWithoutProperties(_t12, _excluded8);
    _t12;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("flex flex-col gap-2 p-2", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("div", _objectSpread({
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
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
function SidebarSeparator(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t13 = t0;
    className = _t13.className;
    props = _objectWithoutProperties(_t13, _excluded9);
    _t13;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("bg-sidebar-border w-auto px-2", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx(Separator, _objectSpread({
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
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
function SidebarContent(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t14 = t0;
    className = _t14.className;
    props = _objectWithoutProperties(_t14, _excluded0);
    _t14;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("div", _objectSpread({
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
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
function SidebarGroup(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t15 = t0;
    className = _t15.className;
    props = _objectWithoutProperties(_t15, _excluded1);
    _t15;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("relative flex w-full min-w-0 flex-col p-2", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("div", _objectSpread({
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
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
function SidebarGroupLabel(t0) {
  var $ = _c(10);
  var className;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t16 = t0;
    className = _t16.className;
    t1 = _t16.asChild;
    props = _objectWithoutProperties(_t16, _excluded10);
    _t16;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
  }
  var asChild = t1 === undefined ? false : t1;
  var Comp = asChild ? Slot : "div";
  var t2;
  if ($[4] !== className) {
    t2 = cn("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className);
    $[4] = className;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var t3;
  if ($[6] !== Comp || $[7] !== props || $[8] !== t2) {
    t3 = /*#__PURE__*/_jsx(Comp, _objectSpread({
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: t2
    }, props));
    $[6] = Comp;
    $[7] = props;
    $[8] = t2;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  return t3;
}
function SidebarGroupAction(t0) {
  var $ = _c(10);
  var className;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t17 = t0;
    className = _t17.className;
    t1 = _t17.asChild;
    props = _objectWithoutProperties(_t17, _excluded11);
    _t17;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
  }
  var asChild = t1 === undefined ? false : t1;
  var Comp = asChild ? Slot : "button";
  var t2;
  if ($[4] !== className) {
    t2 = cn("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "group-data-[collapsible=icon]:hidden", className);
    $[4] = className;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  var t3;
  if ($[6] !== Comp || $[7] !== props || $[8] !== t2) {
    t3 = /*#__PURE__*/_jsx(Comp, _objectSpread({
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: t2
    }, props));
    $[6] = Comp;
    $[7] = props;
    $[8] = t2;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  return t3;
}
function SidebarGroupContent(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t18 = t0;
    className = _t18.className;
    props = _objectWithoutProperties(_t18, _excluded12);
    _t18;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("w-full text-sm", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("div", _objectSpread({
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
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
function SidebarMenu(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t19 = t0;
    className = _t19.className;
    props = _objectWithoutProperties(_t19, _excluded13);
    _t19;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("flex w-full min-w-0 flex-col gap-1", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("ul", _objectSpread({
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
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
function SidebarMenuItem(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t20 = t0;
    className = _t20.className;
    props = _objectWithoutProperties(_t20, _excluded14);
    _t20;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("group/menu-item relative", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("li", _objectSpread({
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
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
var sidebarMenuButtonVariants = cva('peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0', {
  variants: {
    variant: {
      default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
      outline: 'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]'
    },
    size: {
      default: 'h-8 text-sm',
      sm: 'h-7 text-xs',
      lg: 'h-12 text-sm group-data-[collapsible=icon]:p-0!'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});
function SidebarMenuButton(t0) {
  var $ = _c(28);
  var className;
  var props;
  var t1;
  var t2;
  var t3;
  var t4;
  var tooltip;
  if ($[0] !== t0) {
    var _t21 = t0;
    t1 = _t21.asChild;
    t2 = _t21.isActive;
    t3 = _t21.variant;
    t4 = _t21.size;
    tooltip = _t21.tooltip;
    className = _t21.className;
    props = _objectWithoutProperties(_t21, _excluded15);
    _t21;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
    $[5] = t3;
    $[6] = t4;
    $[7] = tooltip;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
    t3 = $[5];
    t4 = $[6];
    tooltip = $[7];
  }
  var asChild = t1 === undefined ? false : t1;
  var isActive = t2 === undefined ? false : t2;
  var variant = t3 === undefined ? "default" : t3;
  var size = t4 === undefined ? "default" : t4;
  var Comp = asChild ? Slot : "button";
  var _useSidebar4 = useSidebar(),
    isMobile = _useSidebar4.isMobile,
    state = _useSidebar4.state;
  var t5;
  if ($[8] !== className || $[9] !== size || $[10] !== variant) {
    t5 = cn(sidebarMenuButtonVariants({
      variant: variant,
      size: size
    }), className);
    $[8] = className;
    $[9] = size;
    $[10] = variant;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  var t6;
  if ($[12] !== Comp || $[13] !== isActive || $[14] !== props || $[15] !== size || $[16] !== t5) {
    t6 = /*#__PURE__*/_jsx(Comp, _objectSpread({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      className: t5
    }, props));
    $[12] = Comp;
    $[13] = isActive;
    $[14] = props;
    $[15] = size;
    $[16] = t5;
    $[17] = t6;
  } else {
    t6 = $[17];
  }
  var button = t6;
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    var _t22;
    if ($[18] !== tooltip) {
      _t22 = {
        children: tooltip
      };
      $[18] = tooltip;
      $[19] = _t22;
    } else {
      _t22 = $[19];
    }
    tooltip = _t22;
  }
  var t7;
  if ($[20] !== button) {
    t7 = /*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: button
    });
    $[20] = button;
    $[21] = t7;
  } else {
    t7 = $[21];
  }
  var t8 = state !== "collapsed" || isMobile;
  var t9;
  if ($[22] !== t8 || $[23] !== tooltip) {
    t9 = /*#__PURE__*/_jsx(TooltipContent, _objectSpread({
      side: "right",
      align: "center",
      hidden: t8
    }, tooltip));
    $[22] = t8;
    $[23] = tooltip;
    $[24] = t9;
  } else {
    t9 = $[24];
  }
  var t10;
  if ($[25] !== t7 || $[26] !== t9) {
    t10 = /*#__PURE__*/_jsxs(Tooltip, {
      children: [t7, t9]
    });
    $[25] = t7;
    $[26] = t9;
    $[27] = t10;
  } else {
    t10 = $[27];
  }
  return t10;
}
function SidebarMenuAction(t0) {
  var $ = _c(12);
  var className;
  var props;
  var t1;
  var t2;
  if ($[0] !== t0) {
    var _t23 = t0;
    className = _t23.className;
    t1 = _t23.asChild;
    t2 = _t23.showOnHover;
    props = _objectWithoutProperties(_t23, _excluded16);
    _t23;
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
  var asChild = t1 === undefined ? false : t1;
  var showOnHover = t2 === undefined ? false : t2;
  var Comp = asChild ? Slot : "button";
  var t3 = showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0";
  var t4;
  if ($[5] !== className || $[6] !== t3) {
    t4 = cn("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", t3, className);
    $[5] = className;
    $[6] = t3;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  var t5;
  if ($[8] !== Comp || $[9] !== props || $[10] !== t4) {
    t5 = /*#__PURE__*/_jsx(Comp, _objectSpread({
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: t4
    }, props));
    $[8] = Comp;
    $[9] = props;
    $[10] = t4;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  return t5;
}
function SidebarMenuBadge(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t24 = t0;
    className = _t24.className;
    props = _objectWithoutProperties(_t24, _excluded17);
    _t24;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("div", _objectSpread({
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
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
function SidebarMenuSkeleton(t0) {
  var $ = _c(14);
  var className;
  var props;
  var t1;
  if ($[0] !== t0) {
    var _t25 = t0;
    className = _t25.className;
    t1 = _t25.showIcon;
    props = _objectWithoutProperties(_t25, _excluded18);
    _t25;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
  }
  var showIcon = t1 === undefined ? false : t1;
  var t2;
  t2 = "".concat(Math.floor(Math.random() * 40) + 50, "%");
  var width = t2;
  var t3;
  if ($[4] !== className) {
    t3 = cn("flex h-8 items-center gap-2 rounded-md px-2", className);
    $[4] = className;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  var t4;
  if ($[6] !== showIcon) {
    t4 = showIcon && /*#__PURE__*/_jsx(Skeleton, {
      className: "size-4 rounded-md",
      "data-sidebar": "menu-skeleton-icon"
    });
    $[6] = showIcon;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  var t5;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = {
      "--skeleton-width": width
    };
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  var t6;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /*#__PURE__*/_jsx(Skeleton, {
      className: "h-4 max-w-(--skeleton-width) flex-1",
      "data-sidebar": "menu-skeleton-text",
      style: t5
    });
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  var t7;
  if ($[10] !== props || $[11] !== t3 || $[12] !== t4) {
    t7 = /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: t3
    }, props), {}, {
      children: [t4, t6]
    }));
    $[10] = props;
    $[11] = t3;
    $[12] = t4;
    $[13] = t7;
  } else {
    t7 = $[13];
  }
  return t7;
}
function SidebarMenuSub(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t26 = t0;
    className = _t26.className;
    props = _objectWithoutProperties(_t26, _excluded19);
    _t26;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("ul", _objectSpread({
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
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
function SidebarMenuSubItem(t0) {
  var $ = _c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t27 = t0;
    className = _t27.className;
    props = _objectWithoutProperties(_t27, _excluded20);
    _t27;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = cn("group/menu-sub-item relative", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/_jsx("li", _objectSpread({
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
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
function SidebarMenuSubButton(t0) {
  var $ = _c(16);
  var className;
  var props;
  var t1;
  var t2;
  var t3;
  if ($[0] !== t0) {
    var _t28 = t0;
    t1 = _t28.asChild;
    t2 = _t28.size;
    t3 = _t28.isActive;
    className = _t28.className;
    props = _objectWithoutProperties(_t28, _excluded21);
    _t28;
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
    $[5] = t3;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
    t3 = $[5];
  }
  var asChild = t1 === undefined ? false : t1;
  var size = t2 === undefined ? "md" : t2;
  var isActive = t3 === undefined ? false : t3;
  var Comp = asChild ? Slot : "a";
  var t4 = size === "sm" && "text-xs";
  var t5 = size === "md" && "text-sm";
  var t6;
  if ($[6] !== className || $[7] !== t4 || $[8] !== t5) {
    t6 = cn("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", t4, t5, "group-data-[collapsible=icon]:hidden", className);
    $[6] = className;
    $[7] = t4;
    $[8] = t5;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  var t7;
  if ($[10] !== Comp || $[11] !== isActive || $[12] !== props || $[13] !== size || $[14] !== t6) {
    t7 = /*#__PURE__*/_jsx(Comp, _objectSpread({
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: t6
    }, props));
    $[10] = Comp;
    $[11] = isActive;
    $[12] = props;
    $[13] = size;
    $[14] = t6;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  return t7;
}
export { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, useSidebar };

//# sourceMappingURL=sidebar.js.map