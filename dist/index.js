'use strict';

var React = require('react');
var react = require('@chakra-ui/react');
var jsxRuntime = require('react/jsx-runtime');
var nextThemes = require('next-themes');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) {
      _defineProperty$1(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties$1(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose$1(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose$1(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive$1(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var AbsoluteCenter = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.AbsoluteCenter, _objectSpread2({
    ref: ref
  }, props));
});
AbsoluteCenter.displayName = 'AbsoluteCenter';
var Center = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Center, _objectSpread2({
    ref: ref
  }, props));
});
Center.displayName = 'Center';
var Circle = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Circle, _objectSpread2({
    ref: ref
  }, props));
});
Circle.displayName = 'Circle';
var Square = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Square, _objectSpread2({
    ref: ref
  }, props));
});
Square.displayName = 'Square';

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && /*#__PURE__*/React.createContext(DefaultContext);

var _excluded$I = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/React.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/React.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded$I);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/React.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/React.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function LuCheck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M20 6 9 17l-5-5"},"child":[]}]})(props);
}function LuChevronDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"m6 9 6 6 6-6"},"child":[]}]})(props);
}function LuChevronRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"m9 18 6-6-6-6"},"child":[]}]})(props);
}function LuClipboard (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"rect","attr":{"width":"8","height":"4","x":"8","y":"2","rx":"1","ry":"1"},"child":[]},{"tag":"path","attr":{"d":"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},"child":[]}]})(props);
}function LuEyeOff (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"},"child":[]},{"tag":"path","attr":{"d":"M14.084 14.158a3 3 0 0 1-4.242-4.242"},"child":[]},{"tag":"path","attr":{"d":"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"},"child":[]},{"tag":"path","attr":{"d":"m2 2 20 20"},"child":[]}]})(props);
}function LuEye (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"3"},"child":[]}]})(props);
}function LuFile (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"},"child":[]},{"tag":"path","attr":{"d":"M14 2v4a2 2 0 0 0 2 2h4"},"child":[]}]})(props);
}function LuLink (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},"child":[]},{"tag":"path","attr":{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},"child":[]}]})(props);
}function LuMinus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M5 12h14"},"child":[]}]})(props);
}function LuMoon (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"},"child":[]}]})(props);
}function LuPipette (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"m2 22 1-1h3l9-9"},"child":[]},{"tag":"path","attr":{"d":"M3 21v-3l9-9"},"child":[]},{"tag":"path","attr":{"d":"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"},"child":[]}]})(props);
}function LuPlus (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M5 12h14"},"child":[]},{"tag":"path","attr":{"d":"M12 5v14"},"child":[]}]})(props);
}function LuSun (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"4"},"child":[]},{"tag":"path","attr":{"d":"M12 2v2"},"child":[]},{"tag":"path","attr":{"d":"M12 20v2"},"child":[]},{"tag":"path","attr":{"d":"m4.93 4.93 1.41 1.41"},"child":[]},{"tag":"path","attr":{"d":"m17.66 17.66 1.41 1.41"},"child":[]},{"tag":"path","attr":{"d":"M2 12h2"},"child":[]},{"tag":"path","attr":{"d":"M20 12h2"},"child":[]},{"tag":"path","attr":{"d":"m6.34 17.66-1.41 1.41"},"child":[]},{"tag":"path","attr":{"d":"m19.07 4.93-1.41 1.41"},"child":[]}]})(props);
}function LuUpload (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},"child":[]},{"tag":"polyline","attr":{"points":"17 8 12 3 7 8"},"child":[]},{"tag":"line","attr":{"x1":"12","x2":"12","y1":"3","y2":"15"},"child":[]}]})(props);
}function LuX (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M18 6 6 18"},"child":[]},{"tag":"path","attr":{"d":"m6 6 12 12"},"child":[]}]})(props);
}

var _excluded$H = ["children", "indicatorPlacement"];
var AccordionItemTrigger = /*#__PURE__*/React__namespace.forwardRef(function AccordionItemTrigger(props, ref) {
  var children = props.children,
    _props$indicatorPlace = props.indicatorPlacement,
    indicatorPlacement = _props$indicatorPlace === void 0 ? 'end' : _props$indicatorPlace,
    rest = _objectWithoutProperties$1(props, _excluded$H);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Accordion.ItemTrigger, _objectSpread2(_objectSpread2({}, rest), {}, {
    ref: ref,
    children: [indicatorPlacement === 'start' && /*#__PURE__*/jsxRuntime.jsx(react.Accordion.ItemIndicator, {
      rotate: {
        base: '-90deg',
        _open: '0deg'
      },
      children: /*#__PURE__*/jsxRuntime.jsx(LuChevronDown, {})
    }), /*#__PURE__*/jsxRuntime.jsx(react.HStack, {
      gap: "4",
      flex: "1",
      textAlign: "start",
      width: "full",
      children: children
    }), indicatorPlacement === 'end' && /*#__PURE__*/jsxRuntime.jsx(react.Accordion.ItemIndicator, {
      children: /*#__PURE__*/jsxRuntime.jsx(LuChevronDown, {})
    })]
  }));
});
var AccordionItemContent = /*#__PURE__*/React__namespace.forwardRef(function AccordionItemContent(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Accordion.ItemContent, {
    children: /*#__PURE__*/jsxRuntime.jsx(react.Accordion.ItemBody, _objectSpread2(_objectSpread2({}, props), {}, {
      ref: ref
    }))
  });
});
var AccordionRoot = react.Accordion.Root;
var AccordionItem = react.Accordion.Item;

function _nullishCoalesce$3(lhs, rhsFn) {
  if (lhs != null) {
    return lhs;
  } else {
    return rhsFn();
  }
}
var CloseButton = /*#__PURE__*/React__namespace.forwardRef(function CloseButton(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.IconButton, _objectSpread2(_objectSpread2({
    variant: "ghost",
    "aria-label": "Close",
    ref: ref
  }, props), {}, {
    children: _nullishCoalesce$3(props.children, function () {
      return /*#__PURE__*/jsxRuntime.jsx(LuX, {});
    })
  }));
});

var _excluded$G = ["children", "portalled", "portalRef"];
var ActionBarContent = /*#__PURE__*/React__namespace.forwardRef(function ActionBarContent(props, ref) {
  var children = props.children,
    _props$portalled = props.portalled,
    portalled = _props$portalled === void 0 ? true : _props$portalled,
    portalRef = props.portalRef,
    rest = _objectWithoutProperties$1(props, _excluded$G);
  return /*#__PURE__*/jsxRuntime.jsx(react.Portal, {
    disabled: !portalled,
    container: portalRef,
    children: /*#__PURE__*/jsxRuntime.jsx(react.ActionBar.Positioner, {
      children: /*#__PURE__*/jsxRuntime.jsx(react.ActionBar.Content, _objectSpread2(_objectSpread2({
        ref: ref
      }, rest), {}, {
        asChild: false,
        children: children
      }))
    })
  });
});
var ActionBarCloseTrigger = /*#__PURE__*/React__namespace.forwardRef(function ActionBarCloseTrigger(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.ActionBar.CloseTrigger, _objectSpread2(_objectSpread2({}, props), {}, {
    asChild: true,
    ref: ref,
    children: /*#__PURE__*/jsxRuntime.jsx(CloseButton, {
      size: "sm"
    })
  }));
});
var ActionBarRoot = react.ActionBar.Root;
var ActionBarSelectionTrigger = react.ActionBar.SelectionTrigger;
var ActionBarSeparator = react.ActionBar.Separator;

var _excluded$F = ["title", "children", "icon", "closable", "onClose", "startElement", "endElement"];
var Alert = /*#__PURE__*/React__namespace.forwardRef(function Alert(props, ref) {
  var title = props.title,
    children = props.children,
    icon = props.icon,
    closable = props.closable,
    onClose = props.onClose,
    startElement = props.startElement,
    endElement = props.endElement,
    rest = _objectWithoutProperties$1(props, _excluded$F);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Alert.Root, _objectSpread2(_objectSpread2({
    ref: ref
  }, rest), {}, {
    children: [startElement || /*#__PURE__*/jsxRuntime.jsx(react.Alert.Indicator, {
      children: icon
    }), children ? /*#__PURE__*/jsxRuntime.jsxs(react.Alert.Content, {
      children: [/*#__PURE__*/jsxRuntime.jsx(react.Alert.Title, {
        children: title
      }), /*#__PURE__*/jsxRuntime.jsx(react.Alert.Description, {
        children: children
      })]
    }) : /*#__PURE__*/jsxRuntime.jsx(react.Alert.Title, {
      flex: "1",
      children: title
    }), endElement, closable && /*#__PURE__*/jsxRuntime.jsx(CloseButton, {
      size: "sm",
      pos: "relative",
      top: "-2",
      insetEnd: "-2",
      alignSelf: "flex-start",
      onClick: onClose
    })]
  }));
});

var AspectRatio = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.AspectRatio, _objectSpread2({
    ref: ref
  }, props));
});
AspectRatio.displayName = "AspectRatio";

var _excluded$E = ["name", "src", "srcSet", "loading", "icon", "fallback", "children"],
  _excluded2$b = ["name", "icon", "children"],
  _excluded3$4 = ["size", "variant", "borderless"];
var Avatar = /*#__PURE__*/React__namespace.forwardRef(function Avatar(props, ref) {
  var name = props.name,
    src = props.src,
    srcSet = props.srcSet,
    loading = props.loading,
    icon = props.icon,
    fallback = props.fallback,
    children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded$E);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Avatar.Root, _objectSpread2(_objectSpread2({
    ref: ref
  }, rest), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsx(AvatarFallback, {
      name: name,
      icon: icon,
      children: fallback
    }), /*#__PURE__*/jsxRuntime.jsx(react.Avatar.Image, {
      src: src,
      srcSet: srcSet,
      loading: loading
    }), children]
  }));
});
var AvatarFallback = /*#__PURE__*/React__namespace.forwardRef(function AvatarFallback(props, ref) {
  var name = props.name,
    icon = props.icon,
    children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded2$b);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Avatar.Fallback, _objectSpread2(_objectSpread2({
    ref: ref
  }, rest), {}, {
    children: [children, name != null && children == null && /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
      children: getInitials(name)
    }), name == null && children == null && /*#__PURE__*/jsxRuntime.jsx(react.Avatar.Icon, {
      asChild: !!icon,
      children: icon
    })]
  }));
});
function getInitials(name) {
  var names = name.trim().split(' ');
  var firstName = names[0] != null ? names[0] : '';
  var lastName = names.length > 1 ? names[names.length - 1] : '';
  return firstName && lastName ? "".concat(firstName.charAt(0)).concat(lastName.charAt(0)) : firstName.charAt(0);
}
var AvatarGroup = /*#__PURE__*/React__namespace.forwardRef(function AvatarGroup(props, ref) {
  var size = props.size,
    variant = props.variant,
    borderless = props.borderless,
    rest = _objectWithoutProperties$1(props, _excluded3$4);
  return /*#__PURE__*/jsxRuntime.jsx(react.Avatar.PropsProvider, {
    value: {
      size: size,
      variant: variant,
      borderless: borderless
    },
    children: /*#__PURE__*/jsxRuntime.jsx(react.Group, _objectSpread2({
      gap: "0",
      spaceX: "-3",
      ref: ref
    }, rest))
  });
});

var Badge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Badge, _objectSpread2({
    ref: ref
  }, props));
});
Badge.displayName = "Badge";

var Bleed = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Bleed, _objectSpread2({
    ref: ref
  }, props));
});
Bleed.displayName = "Bleed";

var _excluded$D = ["children", "cite", "citeUrl", "showDash", "icon"];
var Blockquote = /*#__PURE__*/React__namespace.forwardRef(function Blockquote(props, ref) {
  var children = props.children,
    cite = props.cite,
    citeUrl = props.citeUrl,
    showDash = props.showDash,
    icon = props.icon,
    rest = _objectWithoutProperties$1(props, _excluded$D);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Blockquote.Root, _objectSpread2(_objectSpread2({
    ref: ref
  }, rest), {}, {
    children: [icon, /*#__PURE__*/jsxRuntime.jsx(react.Blockquote.Content, {
      cite: citeUrl,
      children: children
    }), cite && /*#__PURE__*/jsxRuntime.jsxs(react.Blockquote.Caption, {
      children: [showDash ? /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
        children: "\u2014"
      }) : null, " ", /*#__PURE__*/jsxRuntime.jsx("cite", {
        children: cite
      })]
    })]
  }));
});
var BlockquoteIcon = react.Blockquote.Icon;

var Box = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Box, _objectSpread2({
    ref: ref
  }, props));
});
Box.displayName = "Box";

var _excluded$C = ["separator", "separatorGap", "children"];
var BreadcrumbRoot = /*#__PURE__*/React__namespace.forwardRef(function BreadcrumbRoot(props, ref) {
  var separator = props.separator,
    separatorGap = props.separatorGap,
    children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded$C);
  var validChildren = React__namespace.Children.toArray(children).filter(React__namespace.isValidElement);
  return /*#__PURE__*/jsxRuntime.jsx(react.Breadcrumb.Root, _objectSpread2(_objectSpread2({
    ref: ref
  }, rest), {}, {
    children: /*#__PURE__*/jsxRuntime.jsx(react.Breadcrumb.List, {
      gap: separatorGap,
      children: validChildren.map(function (child, index) {
        var last = index === validChildren.length - 1;
        return /*#__PURE__*/jsxRuntime.jsxs(React__namespace.Fragment, {
          children: [/*#__PURE__*/jsxRuntime.jsx(react.Breadcrumb.Item, {
            children: child
          }), !last && /*#__PURE__*/jsxRuntime.jsx(react.Breadcrumb.Separator, {
            children: separator
          })]
        }, index);
      })
    })
  }));
});
var BreadcrumbLink = react.Breadcrumb.Link;
var BreadcrumbCurrentLink = react.Breadcrumb.CurrentLink;
var BreadcrumbEllipsis = react.Breadcrumb.Ellipsis;

var _excluded$B = ["loading", "disabled", "loadingText", "children"];
var Button = /*#__PURE__*/React__namespace.forwardRef(function Button(props, ref) {
  var loading = props.loading,
    disabled = props.disabled,
    loadingText = props.loadingText,
    children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded$B);
  return /*#__PURE__*/jsxRuntime.jsx(react.Button, _objectSpread2(_objectSpread2({
    disabled: loading || disabled,
    ref: ref
  }, rest), {}, {
    children: loading && !loadingText ? /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(react.AbsoluteCenter, {
        display: "inline-flex",
        children: /*#__PURE__*/jsxRuntime.jsx(react.Spinner, {
          size: "inherit",
          color: "inherit"
        })
      }), /*#__PURE__*/jsxRuntime.jsx(react.Span, {
        opacity: 0,
        children: children
      })]
    }) : loading && loadingText ? /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(react.Spinner, {
        size: "inherit",
        color: "inherit"
      }), loadingText]
    }) : children
  }));
});

var Card = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Card, _objectSpread2({
    ref: ref
  }, props));
});
Card.displayName = "Card";

var _excluded$A = ["icon", "children", "inputProps", "rootRef"];
var Checkbox = /*#__PURE__*/React__namespace.forwardRef(function Checkbox(props, ref) {
  var icon = props.icon,
    children = props.children,
    inputProps = props.inputProps,
    rootRef = props.rootRef,
    rest = _objectWithoutProperties$1(props, _excluded$A);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Checkbox.Root, _objectSpread2(_objectSpread2({
    ref: rootRef
  }, rest), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsx(react.Checkbox.HiddenInput, _objectSpread2({
      ref: ref
    }, inputProps)), /*#__PURE__*/jsxRuntime.jsx(react.Checkbox.Control, {
      children: icon || /*#__PURE__*/jsxRuntime.jsx(react.Checkbox.Indicator, {})
    }), children != null && /*#__PURE__*/jsxRuntime.jsx(react.Checkbox.Label, {
      children: children
    })]
  }));
});

var _excluded$z = ["inputProps", "label", "description", "icon", "addon", "indicator", "indicatorPlacement"];
var CheckboxCard = /*#__PURE__*/React__namespace.forwardRef(function CheckboxCard(props, ref) {
  var inputProps = props.inputProps,
    label = props.label,
    description = props.description,
    icon = props.icon,
    addon = props.addon,
    _props$indicator = props.indicator,
    indicator = _props$indicator === void 0 ? /*#__PURE__*/jsxRuntime.jsx(react.CheckboxCard.Indicator, {}) : _props$indicator,
    _props$indicatorPlace = props.indicatorPlacement,
    indicatorPlacement = _props$indicatorPlace === void 0 ? 'end' : _props$indicatorPlace,
    rest = _objectWithoutProperties$1(props, _excluded$z);
  var hasContent = label || description || icon;
  var ContentWrapper = indicator ? react.CheckboxCard.Content : React__namespace.Fragment;
  return /*#__PURE__*/jsxRuntime.jsxs(react.CheckboxCard.Root, _objectSpread2(_objectSpread2({}, rest), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsx(react.CheckboxCard.HiddenInput, _objectSpread2({
      ref: ref
    }, inputProps)), /*#__PURE__*/jsxRuntime.jsxs(react.CheckboxCard.Control, {
      children: [indicatorPlacement === 'start' && indicator, hasContent && /*#__PURE__*/jsxRuntime.jsxs(ContentWrapper, {
        children: [icon, label && /*#__PURE__*/jsxRuntime.jsx(react.CheckboxCard.Label, {
          children: label
        }), description && /*#__PURE__*/jsxRuntime.jsx(react.CheckboxCard.Description, {
          children: description
        }), indicatorPlacement === 'inside' && indicator]
      }), indicatorPlacement === 'end' && indicator]
    }), addon && /*#__PURE__*/jsxRuntime.jsx(react.CheckboxCard.Addon, {
      children: addon
    })]
  }));
});
var CheckboxCardIndicator = react.CheckboxCard.Indicator;

var ClientOnly = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.ClientOnly, _objectSpread2({
    ref: ref
  }, props));
});
ClientOnly.displayName = "ClientOnly";

var ClipboardIcon = /*#__PURE__*/React__namespace.forwardRef(function ClipboardIcon(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Clipboard.Indicator, _objectSpread2(_objectSpread2({
    copied: /*#__PURE__*/jsxRuntime.jsx(LuCheck, {})
  }, props), {}, {
    ref: ref,
    children: /*#__PURE__*/jsxRuntime.jsx(LuClipboard, {})
  }));
});
var ClipboardCopyText = /*#__PURE__*/React__namespace.forwardRef(function ClipboardCopyText(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Clipboard.Indicator, _objectSpread2(_objectSpread2({
    copied: "Copied"
  }, props), {}, {
    ref: ref,
    children: "Copy"
  }));
});
var ClipboardLabel = /*#__PURE__*/React__namespace.forwardRef(function ClipboardLabel(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Clipboard.Label, _objectSpread2(_objectSpread2({
    textStyle: "sm",
    fontWeight: "medium",
    display: "inline-block",
    mb: "1"
  }, props), {}, {
    ref: ref
  }));
});
var ClipboardButton = /*#__PURE__*/React__namespace.forwardRef(function ClipboardButton(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Clipboard.Trigger, {
    asChild: true,
    children: /*#__PURE__*/jsxRuntime.jsxs(react.Button, _objectSpread2(_objectSpread2({
      ref: ref,
      size: "sm",
      variant: "surface"
    }, props), {}, {
      children: [/*#__PURE__*/jsxRuntime.jsx(ClipboardIcon, {}), /*#__PURE__*/jsxRuntime.jsx(ClipboardCopyText, {})]
    }))
  });
});
var ClipboardLink = /*#__PURE__*/React__namespace.forwardRef(function ClipboardLink(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Clipboard.Trigger, {
    asChild: true,
    children: /*#__PURE__*/jsxRuntime.jsxs(react.Button, _objectSpread2(_objectSpread2({
      unstyled: true,
      variant: "plain",
      size: "xs",
      display: "inline-flex",
      alignItems: "center",
      gap: "2",
      ref: ref
    }, props), {}, {
      children: [/*#__PURE__*/jsxRuntime.jsx(LuLink, {}), /*#__PURE__*/jsxRuntime.jsx(ClipboardCopyText, {})]
    }))
  });
});
var ClipboardIconButton = /*#__PURE__*/React__namespace.forwardRef(function ClipboardIconButton(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Clipboard.Trigger, {
    asChild: true,
    children: /*#__PURE__*/jsxRuntime.jsxs(react.IconButton, _objectSpread2(_objectSpread2({
      ref: ref,
      size: "xs",
      variant: "subtle"
    }, props), {}, {
      children: [/*#__PURE__*/jsxRuntime.jsx(ClipboardIcon, {}), /*#__PURE__*/jsxRuntime.jsx(ClipboardCopyText, {
        srOnly: true
      })]
    }))
  });
});
var ClipboardInput = /*#__PURE__*/React__namespace.forwardRef(function ClipboardInputElement(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Clipboard.Input, {
    asChild: true,
    children: /*#__PURE__*/jsxRuntime.jsx(react.Input, _objectSpread2({
      ref: ref
    }, props))
  });
});
var ClipboardRoot = react.Clipboard.Root;

var Code = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Code, _objectSpread2({
    ref: ref
  }, props));
});
Code.displayName = "Code";

var Collapsible = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Collapsible, _objectSpread2({
    ref: ref
  }, props));
});
Collapsible.displayName = "Collapsible";

function ColorModeProvider(props) {
  return /*#__PURE__*/jsxRuntime.jsx(nextThemes.ThemeProvider, _objectSpread2({
    attribute: "class",
    defaultTheme: "light",
    value: {
      light: 'light',
      dark: 'dark'
    },
    disableTransitionOnChange: false
  }, props));
}
function useColorMode() {
  var _useTheme = nextThemes.useTheme(),
    resolvedTheme = _useTheme.resolvedTheme,
    setTheme = _useTheme.setTheme;
  var toggleColorMode = function toggleColorMode() {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };
  return {
    colorMode: resolvedTheme,
    setColorMode: setTheme,
    toggleColorMode: toggleColorMode
  };
}
function useColorModeValue(light, dark) {
  var _useColorMode = useColorMode(),
    colorMode = _useColorMode.colorMode;
  return colorMode === 'light' ? light : dark;
}
function ColorModeIcon() {
  var _useColorMode2 = useColorMode(),
    colorMode = _useColorMode2.colorMode;
  return colorMode === 'light' ? /*#__PURE__*/jsxRuntime.jsx(LuSun, {}) : /*#__PURE__*/jsxRuntime.jsx(LuMoon, {});
}
var ColorModeButton = /*#__PURE__*/React__namespace.forwardRef(function ColorModeButton(props, ref) {
  var _useColorMode3 = useColorMode(),
    toggleColorMode = _useColorMode3.toggleColorMode;
  return /*#__PURE__*/jsxRuntime.jsx(react.ClientOnly, {
    fallback: /*#__PURE__*/jsxRuntime.jsx(react.Skeleton, {
      boxSize: "8"
    }),
    children: /*#__PURE__*/jsxRuntime.jsx(react.IconButton, _objectSpread2(_objectSpread2({
      onClick: toggleColorMode,
      variant: "ghost",
      "aria-label": "Toggle color mode",
      size: "sm",
      ref: ref
    }, props), {}, {
      css: {
        _icon: {
          width: '5',
          height: '5'
        }
      },
      children: /*#__PURE__*/jsxRuntime.jsx(ColorModeIcon, {})
    }))
  });
});

var _excluded$y = ["fitContent"],
  _excluded2$a = ["portalled", "portalRef"],
  _excluded3$3 = ["swatchSize", "children"];
var ColorPickerTrigger = /*#__PURE__*/React.forwardRef(function ColorPickerTrigger(props, ref) {
  var fitContent = props.fitContent,
    rest = _objectWithoutProperties$1(props, _excluded$y);
  return /*#__PURE__*/jsxRuntime.jsx(react.ColorPicker.Trigger, _objectSpread2(_objectSpread2({
    "data-fit-content": fitContent || undefined,
    ref: ref
  }, rest), {}, {
    children: props.children || /*#__PURE__*/jsxRuntime.jsx(react.ColorPicker.ValueSwatch, {})
  }));
});
var ColorPickerInput = /*#__PURE__*/React.forwardRef(function ColorHexInput(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.ColorPicker.ChannelInput, _objectSpread2({
    channel: "hex",
    ref: ref
  }, props));
});
var ColorPickerContent = /*#__PURE__*/React.forwardRef(function ColorPickerContent(props, ref) {
  var _props$portalled = props.portalled,
    portalled = _props$portalled === void 0 ? true : _props$portalled,
    portalRef = props.portalRef,
    rest = _objectWithoutProperties$1(props, _excluded2$a);
  return /*#__PURE__*/jsxRuntime.jsx(react.Portal, {
    disabled: !portalled,
    container: portalRef,
    children: /*#__PURE__*/jsxRuntime.jsx(react.ColorPicker.Positioner, {
      children: /*#__PURE__*/jsxRuntime.jsx(react.ColorPicker.Content, _objectSpread2({
        ref: ref
      }, rest))
    })
  });
});
var ColorPickerInlineContent = /*#__PURE__*/React.forwardRef(function ColorPickerInlineContent(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.ColorPicker.Content, _objectSpread2({
    animation: "none",
    shadow: "none",
    padding: "0",
    ref: ref
  }, props));
});
var ColorPickerSliders = /*#__PURE__*/React.forwardRef(function ColorPickerSliders(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsxs(react.Stack, _objectSpread2(_objectSpread2({
    gap: "1",
    flex: "1",
    px: "1",
    ref: ref
  }, props), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsx(ColorPickerChannelSlider, {
      channel: "hue"
    }), /*#__PURE__*/jsxRuntime.jsx(ColorPickerChannelSlider, {
      channel: "alpha"
    })]
  }));
});
var ColorPickerArea = /*#__PURE__*/React.forwardRef(function ColorPickerArea(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsxs(react.ColorPicker.Area, _objectSpread2(_objectSpread2({
    ref: ref
  }, props), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsx(react.ColorPicker.AreaBackground, {}), /*#__PURE__*/jsxRuntime.jsx(react.ColorPicker.AreaThumb, {})]
  }));
});
var ColorPickerEyeDropper = /*#__PURE__*/React.forwardRef(function ColorPickerEyeDropper(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.ColorPicker.EyeDropperTrigger, {
    asChild: true,
    children: /*#__PURE__*/jsxRuntime.jsx(react.IconButton, _objectSpread2(_objectSpread2({
      size: "xs",
      variant: "outline",
      ref: ref
    }, props), {}, {
      children: /*#__PURE__*/jsxRuntime.jsx(LuPipette, {})
    }))
  });
});
var ColorPickerChannelSlider = /*#__PURE__*/React.forwardRef(function ColorPickerSlider(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsxs(react.ColorPicker.ChannelSlider, _objectSpread2(_objectSpread2({
    ref: ref
  }, props), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsx(react.ColorPicker.TransparencyGrid, {
      size: "0.6rem"
    }), /*#__PURE__*/jsxRuntime.jsx(react.ColorPicker.ChannelSliderTrack, {}), /*#__PURE__*/jsxRuntime.jsx(react.ColorPicker.ChannelSliderThumb, {})]
  }));
});
var ColorPickerSwatchTrigger = /*#__PURE__*/React.forwardRef(function ColorPickerSwatchTrigger(props, ref) {
  var swatchSize = props.swatchSize,
    children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded3$3);
  return /*#__PURE__*/jsxRuntime.jsx(react.ColorPicker.SwatchTrigger, _objectSpread2(_objectSpread2({
    ref: ref,
    style: _defineProperty$1({}, '--color', props.value)
  }, rest), {}, {
    children: children || /*#__PURE__*/jsxRuntime.jsx(react.ColorPicker.Swatch, {
      boxSize: swatchSize,
      value: props.value,
      children: /*#__PURE__*/jsxRuntime.jsx(react.ColorPicker.SwatchIndicator, {
        children: /*#__PURE__*/jsxRuntime.jsx(LuCheck, {})
      })
    })
  }));
});
var ColorPickerRoot = /*#__PURE__*/React.forwardRef(function ColorPickerRoot(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsxs(react.ColorPicker.Root, _objectSpread2(_objectSpread2({
    ref: ref
  }, props), {}, {
    children: [props.children, /*#__PURE__*/jsxRuntime.jsx(react.ColorPicker.HiddenInput, {
      tabIndex: -1
    })]
  }));
});
var formatMap = {
  rgba: ['red', 'green', 'blue', 'alpha'],
  hsla: ['hue', 'saturation', 'lightness', 'alpha'],
  hsba: ['hue', 'saturation', 'brightness', 'alpha'],
  hexa: ['hex', 'alpha']
};
var ColorPickerChannelInputs = /*#__PURE__*/React.forwardRef(function ColorPickerChannelInputs(props, ref) {
  var channels = formatMap[props.format];
  return /*#__PURE__*/jsxRuntime.jsx(react.ColorPicker.View, _objectSpread2(_objectSpread2({
    flexDirection: "row",
    ref: ref
  }, props), {}, {
    children: channels.map(function (channel) {
      return /*#__PURE__*/jsxRuntime.jsxs(react.VStack, {
        gap: "1",
        flex: "1",
        children: [/*#__PURE__*/jsxRuntime.jsx(ColorPickerChannelInput, {
          channel: channel,
          px: "0",
          height: "7",
          textStyle: "xs",
          textAlign: "center"
        }), /*#__PURE__*/jsxRuntime.jsx(react.Text, {
          textStyle: "xs",
          color: "fg.muted",
          fontWeight: "medium",
          children: channel.charAt(0).toUpperCase()
        })]
      }, channel);
    })
  }));
});
var ColorPickerChannelSliders = /*#__PURE__*/React.forwardRef(function ColorPickerChannelSliders(props, ref) {
  var channels = formatMap[props.format];
  return /*#__PURE__*/jsxRuntime.jsx(react.ColorPicker.View, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: ref,
    children: /*#__PURE__*/jsxRuntime.jsx(react.For, {
      each: channels,
      children: function children(channel) {
        return /*#__PURE__*/jsxRuntime.jsxs(react.Stack, {
          gap: "1",
          children: [/*#__PURE__*/jsxRuntime.jsx(react.Span, {
            textStyle: "xs",
            minW: "5ch",
            textTransform: "capitalize",
            fontWeight: "medium",
            children: channel
          }), /*#__PURE__*/jsxRuntime.jsx(ColorPickerChannelSlider, {
            channel: channel
          })]
        }, channel);
      }
    })
  }));
});
var ColorPickerLabel = react.ColorPicker.Label;
var ColorPickerControl = react.ColorPicker.Control;
var ColorPickerValueText = react.ColorPicker.ValueText;
var ColorPickerValueSwatch = react.ColorPicker.ValueSwatch;
var ColorPickerChannelInput = react.ColorPicker.ChannelInput;
var ColorPickerSwatchGroup = react.ColorPicker.SwatchGroup;

var ColorSwatch = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.ColorSwatch, _objectSpread2({
    ref: ref
  }, props));
});
ColorSwatch.displayName = "ColorSwatch";

var Container = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Container, _objectSpread2({
    ref: ref
  }, props));
});
Container.displayName = "Container";

// THIS FILE IS AUTO GENERATED
function HiOutlineInformationCircle (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
}

var _excluded$x = ["showArrow", "children", "portalled", "content", "portalRef"],
  _excluded2$9 = ["children"];
var ToggleTip = /*#__PURE__*/React__namespace.forwardRef(function ToggleTip(props, ref) {
  var showArrow = props.showArrow,
    children = props.children,
    _props$portalled = props.portalled,
    portalled = _props$portalled === void 0 ? true : _props$portalled,
    content = props.content,
    portalRef = props.portalRef,
    rest = _objectWithoutProperties$1(props, _excluded$x);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Popover.Root, _objectSpread2(_objectSpread2({}, rest), {}, {
    positioning: _objectSpread2(_objectSpread2({}, rest.positioning), {}, {
      gutter: 4
    }),
    children: [/*#__PURE__*/jsxRuntime.jsx(react.Popover.Trigger, {
      asChild: true,
      children: children
    }), /*#__PURE__*/jsxRuntime.jsx(react.Portal, {
      disabled: !portalled,
      container: portalRef,
      children: /*#__PURE__*/jsxRuntime.jsx(react.Popover.Positioner, {
        children: /*#__PURE__*/jsxRuntime.jsxs(react.Popover.Content, {
          width: "auto",
          px: "2",
          py: "1",
          textStyle: "xs",
          rounded: "sm",
          ref: ref,
          children: [showArrow && /*#__PURE__*/jsxRuntime.jsx(react.Popover.Arrow, {
            children: /*#__PURE__*/jsxRuntime.jsx(react.Popover.ArrowTip, {})
          }), content]
        })
      })
    })]
  }));
});
var InfoTip = /*#__PURE__*/React__namespace.forwardRef(function InfoTip(props, ref) {
  var children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded2$9);
  return /*#__PURE__*/jsxRuntime.jsx(ToggleTip, _objectSpread2(_objectSpread2({
    content: children
  }, rest), {}, {
    ref: ref,
    children: /*#__PURE__*/jsxRuntime.jsx(react.IconButton, {
      variant: "ghost",
      "aria-label": "info",
      size: "2xs",
      colorPalette: "gray",
      children: /*#__PURE__*/jsxRuntime.jsx(HiOutlineInformationCircle, {})
    })
  }));
});

var _excluded$w = ["label", "info", "value", "children", "grow"];
var DataListRoot = react.DataList.Root;
var DataListItem = /*#__PURE__*/React__namespace.forwardRef(function DataListItem(props, ref) {
  var label = props.label,
    info = props.info,
    value = props.value,
    children = props.children,
    grow = props.grow,
    rest = _objectWithoutProperties$1(props, _excluded$w);
  return /*#__PURE__*/jsxRuntime.jsxs(react.DataList.Item, _objectSpread2(_objectSpread2({
    ref: ref
  }, rest), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsxs(react.DataList.ItemLabel, {
      flex: grow ? '1' : undefined,
      children: [label, info && /*#__PURE__*/jsxRuntime.jsx(InfoTip, {
        children: info
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(react.DataList.ItemValue, {
      flex: grow ? '1' : undefined,
      children: value
    }), children]
  }));
});

var _excluded$v = ["children", "portalled", "portalRef", "backdrop"];
var DialogContent = /*#__PURE__*/React__namespace.forwardRef(function DialogContent(props, ref) {
  var children = props.children,
    _props$portalled = props.portalled,
    portalled = _props$portalled === void 0 ? true : _props$portalled,
    portalRef = props.portalRef,
    _props$backdrop = props.backdrop,
    backdrop = _props$backdrop === void 0 ? true : _props$backdrop,
    rest = _objectWithoutProperties$1(props, _excluded$v);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Portal, {
    disabled: !portalled,
    container: portalRef,
    children: [backdrop && /*#__PURE__*/jsxRuntime.jsx(react.Dialog.Backdrop, {}), /*#__PURE__*/jsxRuntime.jsx(react.Dialog.Positioner, {
      children: /*#__PURE__*/jsxRuntime.jsx(react.Dialog.Content, _objectSpread2(_objectSpread2({
        ref: ref
      }, rest), {}, {
        asChild: false,
        children: children
      }))
    })]
  });
});
var DialogCloseTrigger = /*#__PURE__*/React__namespace.forwardRef(function DialogCloseTrigger(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Dialog.CloseTrigger, _objectSpread2(_objectSpread2({
    position: "absolute",
    top: "2",
    insetEnd: "2"
  }, props), {}, {
    asChild: true,
    children: /*#__PURE__*/jsxRuntime.jsx(CloseButton, {
      size: "sm",
      ref: ref,
      children: props.children
    })
  }));
});
var DialogRoot = react.Dialog.Root;
var DialogFooter = react.Dialog.Footer;
var DialogHeader = react.Dialog.Header;
var DialogBody = react.Dialog.Body;
var DialogBackdrop = react.Dialog.Backdrop;
var DialogTitle = react.Dialog.Title;
var DialogDescription = react.Dialog.Description;
var DialogTrigger = react.Dialog.Trigger;
var DialogActionTrigger = react.Dialog.ActionTrigger;

var _excluded$u = ["children", "portalled", "portalRef", "offset"];
var DrawerContent = /*#__PURE__*/React__namespace.forwardRef(function DrawerContent(props, ref) {
  var children = props.children,
    _props$portalled = props.portalled,
    portalled = _props$portalled === void 0 ? true : _props$portalled,
    portalRef = props.portalRef,
    offset = props.offset,
    rest = _objectWithoutProperties$1(props, _excluded$u);
  return /*#__PURE__*/jsxRuntime.jsx(react.Portal, {
    disabled: !portalled,
    container: portalRef,
    children: /*#__PURE__*/jsxRuntime.jsx(react.Drawer.Positioner, {
      padding: offset,
      children: /*#__PURE__*/jsxRuntime.jsx(react.Drawer.Content, _objectSpread2(_objectSpread2({
        ref: ref
      }, rest), {}, {
        asChild: false,
        children: children
      }))
    })
  });
});
var DrawerCloseTrigger = /*#__PURE__*/React__namespace.forwardRef(function DrawerCloseTrigger(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Drawer.CloseTrigger, _objectSpread2(_objectSpread2({
    position: "absolute",
    top: "2",
    insetEnd: "2"
  }, props), {}, {
    asChild: true,
    children: /*#__PURE__*/jsxRuntime.jsx(CloseButton, {
      size: "sm",
      ref: ref
    })
  }));
});
var DrawerTrigger = react.Drawer.Trigger;
var DrawerRoot = react.Drawer.Root;
var DrawerFooter = react.Drawer.Footer;
var DrawerHeader = react.Drawer.Header;
var DrawerBody = react.Drawer.Body;
var DrawerBackdrop = react.Drawer.Backdrop;
var DrawerDescription = react.Drawer.Description;
var DrawerTitle = react.Drawer.Title;
var DrawerActionTrigger = react.Drawer.ActionTrigger;

var Editable = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Editable, _objectSpread2({
    ref: ref
  }, props));
});
Editable.displayName = "Editable";

var Em = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Em, _objectSpread2({
    ref: ref
  }, props));
});
Em.displayName = "Em";

var _excluded$t = ["title", "description", "icon", "children"];
var EmptyState = /*#__PURE__*/React__namespace.forwardRef(function EmptyState(props, ref) {
  var title = props.title,
    description = props.description,
    icon = props.icon,
    children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded$t);
  return /*#__PURE__*/jsxRuntime.jsx(react.EmptyState.Root, _objectSpread2(_objectSpread2({
    ref: ref
  }, rest), {}, {
    children: /*#__PURE__*/jsxRuntime.jsxs(react.EmptyState.Content, {
      children: [icon && /*#__PURE__*/jsxRuntime.jsx(react.EmptyState.Indicator, {
        children: icon
      }), description ? /*#__PURE__*/jsxRuntime.jsxs(react.VStack, {
        textAlign: "center",
        children: [/*#__PURE__*/jsxRuntime.jsx(react.EmptyState.Title, {
          children: title
        }), /*#__PURE__*/jsxRuntime.jsx(react.EmptyState.Description, {
          children: description
        })]
      }) : /*#__PURE__*/jsxRuntime.jsx(react.EmptyState.Title, {
        children: title
      }), children]
    })
  }));
});

var EnvironmentProvider = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.EnvironmentProvider, _objectSpread2({
    ref: ref
  }, props));
});
EnvironmentProvider.displayName = "EnvironmentProvider";

var _excluded$s = ["label", "children", "helperText", "errorText", "optionalText"];
var Field = /*#__PURE__*/React__namespace.forwardRef(function Field(props, ref) {
  var label = props.label,
    children = props.children,
    helperText = props.helperText,
    errorText = props.errorText,
    optionalText = props.optionalText,
    rest = _objectWithoutProperties$1(props, _excluded$s);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Field.Root, _objectSpread2(_objectSpread2({
    ref: ref
  }, rest), {}, {
    children: [label && /*#__PURE__*/jsxRuntime.jsxs(react.Field.Label, {
      children: [label, /*#__PURE__*/jsxRuntime.jsx(react.Field.RequiredIndicator, {
        fallback: optionalText
      })]
    }), children, helperText && /*#__PURE__*/jsxRuntime.jsx(react.Field.HelperText, {
      children: helperText
    }), errorText && /*#__PURE__*/jsxRuntime.jsx(react.Field.ErrorText, {
      children: errorText
    })]
  }));
});

var Fieldset = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Fieldset, _objectSpread2({
    ref: ref
  }, props));
});
Fieldset.displayName = "Fieldset";

var _excluded$r = ["children", "inputProps"],
  _excluded2$8 = ["children", "label", "description"],
  _excluded3$2 = ["showSize", "clearable", "files"],
  _excluded4$2 = ["placeholder"];
function _nullishCoalesce$2(lhs, rhsFn) {
  if (lhs != null) {
    return lhs;
  } else {
    return rhsFn();
  }
}
var FileUploadRoot = /*#__PURE__*/React__namespace.forwardRef(function FileUploadRoot(props, ref) {
  var children = props.children,
    inputProps = props.inputProps,
    rest = _objectWithoutProperties$1(props, _excluded$r);
  return /*#__PURE__*/jsxRuntime.jsxs(react.FileUpload.Root, _objectSpread2(_objectSpread2({}, rest), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsx(react.FileUpload.HiddenInput, _objectSpread2({
      ref: ref
    }, inputProps)), children]
  }));
});
var FileUploadDropzone = /*#__PURE__*/React__namespace.forwardRef(function FileUploadDropzone(props, ref) {
  var children = props.children,
    label = props.label,
    description = props.description,
    rest = _objectWithoutProperties$1(props, _excluded2$8);
  return /*#__PURE__*/jsxRuntime.jsxs(react.FileUpload.Dropzone, _objectSpread2(_objectSpread2({
    ref: ref
  }, rest), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsx(react.Icon, {
      fontSize: "xl",
      color: "fg.muted",
      children: /*#__PURE__*/jsxRuntime.jsx(LuUpload, {})
    }), /*#__PURE__*/jsxRuntime.jsxs(react.FileUpload.DropzoneContent, {
      children: [/*#__PURE__*/jsxRuntime.jsx("div", {
        children: label
      }), description && /*#__PURE__*/jsxRuntime.jsx(react.Text, {
        color: "fg.muted",
        children: description
      })]
    }), children]
  }));
});
var FileUploadItem = /*#__PURE__*/React__namespace.forwardRef(function FileUploadItem(props, ref) {
  var file = props.file,
    showSize = props.showSize,
    clearable = props.clearable;
  return /*#__PURE__*/jsxRuntime.jsxs(react.FileUpload.Item, {
    file: file,
    ref: ref,
    children: [/*#__PURE__*/jsxRuntime.jsx(react.FileUpload.ItemPreview, {
      asChild: true,
      children: /*#__PURE__*/jsxRuntime.jsx(react.Icon, {
        fontSize: "lg",
        color: "fg.muted",
        children: /*#__PURE__*/jsxRuntime.jsx(LuFile, {})
      })
    }), showSize ? /*#__PURE__*/jsxRuntime.jsxs(react.FileUpload.ItemContent, {
      children: [/*#__PURE__*/jsxRuntime.jsx(react.FileUpload.ItemName, {}), /*#__PURE__*/jsxRuntime.jsx(react.FileUpload.ItemSizeText, {})]
    }) : /*#__PURE__*/jsxRuntime.jsx(react.FileUpload.ItemName, {
      flex: "1"
    }), clearable && /*#__PURE__*/jsxRuntime.jsx(react.FileUpload.ItemDeleteTrigger, {
      asChild: true,
      children: /*#__PURE__*/jsxRuntime.jsx(react.IconButton, {
        variant: "ghost",
        color: "fg.muted",
        size: "xs",
        children: /*#__PURE__*/jsxRuntime.jsx(LuX, {})
      })
    })]
  });
});
var FileUploadList = /*#__PURE__*/React__namespace.forwardRef(function FileUploadList(props, ref) {
  var showSize = props.showSize,
    clearable = props.clearable,
    files = props.files,
    rest = _objectWithoutProperties$1(props, _excluded3$2);
  var fileUpload = react.useFileUploadContext();
  var acceptedFiles = _nullishCoalesce$2(files, function () {
    return fileUpload.acceptedFiles;
  });
  if (acceptedFiles.length === 0) return null;
  return /*#__PURE__*/jsxRuntime.jsx(react.FileUpload.ItemGroup, _objectSpread2(_objectSpread2({
    ref: ref
  }, rest), {}, {
    children: acceptedFiles.map(function (file) {
      return /*#__PURE__*/jsxRuntime.jsx(FileUploadItem, {
        file: file,
        showSize: showSize,
        clearable: clearable
      }, file.name);
    })
  }));
});
var FileInput = /*#__PURE__*/React__namespace.forwardRef(function FileInput(props, ref) {
  var inputRecipe = react.useRecipe({
    key: 'input'
  });
  var _inputRecipe$splitVar = inputRecipe.splitVariantProps(props),
    _inputRecipe$splitVar2 = _slicedToArray(_inputRecipe$splitVar, 2),
    recipeProps = _inputRecipe$splitVar2[0],
    restProps = _inputRecipe$splitVar2[1];
  var _restProps$placeholde = restProps.placeholder,
    placeholder = _restProps$placeholde === void 0 ? 'Select file(s)' : _restProps$placeholde,
    rest = _objectWithoutProperties$1(restProps, _excluded4$2);
  return /*#__PURE__*/jsxRuntime.jsx(react.FileUpload.Trigger, {
    asChild: true,
    children: /*#__PURE__*/jsxRuntime.jsx(react.Button, _objectSpread2(_objectSpread2({
      unstyled: true,
      py: "0",
      ref: ref
    }, rest), {}, {
      css: [inputRecipe(recipeProps), props.css],
      children: /*#__PURE__*/jsxRuntime.jsx(react.FileUpload.Context, {
        children: function children(_ref) {
          var acceptedFiles = _ref.acceptedFiles;
          if (acceptedFiles.length === 1) {
            return /*#__PURE__*/jsxRuntime.jsx("span", {
              children: acceptedFiles[0].name
            });
          }
          if (acceptedFiles.length > 1) {
            return /*#__PURE__*/jsxRuntime.jsxs("span", {
              children: [acceptedFiles.length, " files"]
            });
          }
          return /*#__PURE__*/jsxRuntime.jsx(react.Span, {
            color: "fg.subtle",
            children: placeholder
          });
        }
      })
    }))
  });
});
var FileUploadLabel = react.FileUpload.Label;
var FileUploadClearTrigger = react.FileUpload.ClearTrigger;
var FileUploadTrigger = react.FileUpload.Trigger;

var Flex = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Flex, _objectSpread2({
    ref: ref
  }, props));
});
Flex.displayName = "Flex";

var Float = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Float, _objectSpread2({
    ref: ref
  }, props));
});
Float.displayName = "Float";

var For = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.For, _objectSpread2({
    ref: ref
  }, props));
});
For.displayName = "For";

var FormatByte = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.FormatByte, _objectSpread2({
    ref: ref
  }, props));
});
FormatByte.displayName = "FormatByte";

var FormatNumber = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.FormatNumber, _objectSpread2({
    ref: ref
  }, props));
});
FormatNumber.displayName = "FormatNumber";

function Provider(props) {
  return /*#__PURE__*/jsxRuntime.jsx(react.ChakraProvider, {
    value: react.defaultSystem,
    children: /*#__PURE__*/jsxRuntime.jsx(ColorModeProvider, _objectSpread2({}, props))
  });
}

var customTheme = react.defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: "Noto Sans, sans-serif"
        },
        body: {
          value: "Noto Sans, sans-serif"
        },
        caption: {
          value: "Space Mono, sans-serif"
        }
      },
      colors: {
        background: {
          dark: {
            value: "#27272a"
          }
        }
      }
    },
    styles: {
      global: {
        body: {
          _dark: {
            bg: '{colors.background.dark}'
          }
        }
      }
    }
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  }
});
var config = react.mergeConfigs(react.defaultConfig, customTheme);
var system = react.createSystem(config);

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs.exports = requireReactIs_production_min();
	} else {
	  reactIs.exports = requireReactIs_development();
	}
	return reactIs.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var propTypesExports = propTypes.exports;
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@font-face{font-display:swap;font-family:Noto Sans;font-stretch:75% 125%;font-weight:100 900;src:url(fonts/NotoSans-VariableFont_wdth,wght.ttf) format(\"truetype\")}@font-face{font-display:swap;font-family:Noto Sans;font-stretch:75% 125%;font-style:italic;font-weight:100 900;src:url(fonts/NotoSans-Italic-VariableFont_wdth,wght.ttf) format(\"truetype\")}@font-face{font-family:Space Mono;font-style:normal;font-weight:400;src:url(fonts/SpaceMono-Regular.ttf) format(\"truetype\")}@font-face{font-family:Space Mono;font-style:italic;font-weight:400;src:url(fonts/SpaceMono-Italic.ttf) format(\"truetype\")}@font-face{font-family:Space Mono;font-style:normal;font-weight:700;src:url(fonts/SpaceMono-Bold.ttf) format(\"truetype\")}@font-face{font-family:Space Mono;font-style:italic;font-weight:700;src:url(fonts/SpaceMono-BoldItalic.ttf) format(\"truetype\")}@font-face{font-family:Courier Prime;font-style:normal;font-weight:400;src:url(fonts/CourierPrime-Regular.ttf) format(\"truetype\")}@font-face{font-family:Courier Prime;font-style:italic;font-weight:400;src:url(fonts/CourierPrime-Italic.ttf) format(\"truetype\")}@font-face{font-family:Courier Prime;font-style:normal;font-weight:700;src:url(fonts/CourierPrime-Bold.ttf) format(\"truetype\")}@font-face{font-family:Courier Prime;font-style:italic;font-weight:700;src:url(fonts/CourierPrime-BoldItalic.ttf) format(\"truetype\")}";
styleInject(css_248z);

function FutureHouseApp(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/jsxRuntime.jsx(Provider, {
    value: system,
    children: /*#__PURE__*/jsxRuntime.jsx(ColorModeProvider, {
      defaultTheme: "dark",
      children: children
    })
  });
}
FutureHouseApp.propTypes = {
  children: PropTypes.node.isRequired
};

var Grid = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Grid, _objectSpread2({
    ref: ref
  }, props));
});
Grid.displayName = "Grid";
var GridItem = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.GridItem, _objectSpread2({
    ref: ref
  }, props));
});
GridItem.displayName = "GridItem";

var Group = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Group, _objectSpread2({
    ref: ref
  }, props));
});
Group.displayName = "Group";

var Stack = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Stack, _objectSpread2({
    ref: ref
  }, props));
});
Stack.displayName = "Stack";
var HStack = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.HStack, _objectSpread2({
    ref: ref
  }, props));
});
HStack.displayName = "HStack";
var VStack = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.VStack, _objectSpread2({
    ref: ref
  }, props));
});
VStack.displayName = "VStack";

var Highlight = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Highlight, _objectSpread2({
    ref: ref
  }, props));
});
Highlight.displayName = "Highlight";

var _excluded$q = ["portalled", "portalRef"];
var HoverCardContent = /*#__PURE__*/React__namespace.forwardRef(function HoverCardContent(props, ref) {
  var _props$portalled = props.portalled,
    portalled = _props$portalled === void 0 ? true : _props$portalled,
    portalRef = props.portalRef,
    rest = _objectWithoutProperties$1(props, _excluded$q);
  return /*#__PURE__*/jsxRuntime.jsx(react.Portal, {
    disabled: !portalled,
    container: portalRef,
    children: /*#__PURE__*/jsxRuntime.jsx(react.HoverCard.Positioner, {
      children: /*#__PURE__*/jsxRuntime.jsx(react.HoverCard.Content, _objectSpread2({
        ref: ref
      }, rest))
    })
  });
});
var HoverCardArrow = /*#__PURE__*/React__namespace.forwardRef(function HoverCardArrow(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.HoverCard.Arrow, _objectSpread2(_objectSpread2({
    ref: ref
  }, props), {}, {
    children: /*#__PURE__*/jsxRuntime.jsx(react.HoverCard.ArrowTip, {})
  }));
});
var HoverCardRoot = react.HoverCard.Root;
var HoverCardTrigger = react.HoverCard.Trigger;

var Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Icon, _objectSpread2({
    ref: ref
  }, props));
});
Icon.displayName = "Icon";

var IconButton = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.IconButton, _objectSpread2({
    ref: ref
  }, props));
});
IconButton.displayName = "IconButton";

var Image = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Image, _objectSpread2({
    ref: ref
  }, props));
});
Image.displayName = "Image";

var Input = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Input, _objectSpread2({
    ref: ref
  }, props));
});
Input.displayName = "Input";

var _excluded$p = ["startElement", "startElementProps", "endElement", "endElementProps", "children", "startOffset", "endOffset"];
var InputGroup = /*#__PURE__*/React__namespace.forwardRef(function InputGroup(props, ref) {
  var startElement = props.startElement,
    startElementProps = props.startElementProps,
    endElement = props.endElement,
    endElementProps = props.endElementProps,
    children = props.children,
    _props$startOffset = props.startOffset,
    startOffset = _props$startOffset === void 0 ? '6px' : _props$startOffset,
    _props$endOffset = props.endOffset,
    endOffset = _props$endOffset === void 0 ? '6px' : _props$endOffset,
    rest = _objectWithoutProperties$1(props, _excluded$p);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Group, _objectSpread2(_objectSpread2({
    ref: ref
  }, rest), {}, {
    children: [startElement && /*#__PURE__*/jsxRuntime.jsx(react.InputElement, _objectSpread2(_objectSpread2({
      pointerEvents: "none"
    }, startElementProps), {}, {
      children: startElement
    })), /*#__PURE__*/React__namespace.cloneElement(children, _objectSpread2(_objectSpread2(_objectSpread2({}, startElement && {
      ps: "calc(var(--input-height) - ".concat(startOffset, ")")
    }), endElement && {
      pe: "calc(var(--input-height) - ".concat(endOffset, ")")
    }), children.props)), endElement && /*#__PURE__*/jsxRuntime.jsx(react.InputElement, _objectSpread2(_objectSpread2({
      placement: "end"
    }, endElementProps), {}, {
      children: endElement
    }))]
  }));
});

var Kbd = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Kbd, _objectSpread2({
    ref: ref
  }, props));
});
Kbd.displayName = "Kbd";

var Link = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Link, _objectSpread2({
    ref: ref
  }, props));
});
Link.displayName = "Link";
var LinkOverlay = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.LinkOverlay, _objectSpread2({
    ref: ref
  }, props));
});
LinkOverlay.displayName = "LinkOverlay";
var LinkBox = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.LinkBox, _objectSpread2({
    ref: ref
  }, props));
});
LinkBox.displayName = "LinkBox";

var _createRecipeContext = react.createRecipeContext({
    key: 'button'
  }),
  withContext = _createRecipeContext.withContext;

// Replace "a" with your framework's link component
var LinkButton = withContext('a');

var List = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.List, _objectSpread2({
    ref: ref
  }, props));
});
List.displayName = "List";

var LocaleProvider = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.LocaleProvider, _objectSpread2({
    ref: ref
  }, props));
});
LocaleProvider.displayName = "LocaleProvider";

var Mark = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Mark, _objectSpread2({
    ref: ref
  }, props));
});
Mark.displayName = "Mark";

var _excluded$o = ["portalled", "portalRef"],
  _excluded2$7 = ["children"],
  _excluded3$1 = ["title", "children"],
  _excluded4$1 = ["startIcon", "children"];
var MenuContent = /*#__PURE__*/React__namespace.forwardRef(function MenuContent(props, ref) {
  var _props$portalled = props.portalled,
    portalled = _props$portalled === void 0 ? true : _props$portalled,
    portalRef = props.portalRef,
    rest = _objectWithoutProperties$1(props, _excluded$o);
  return /*#__PURE__*/jsxRuntime.jsx(react.Portal, {
    disabled: !portalled,
    container: portalRef,
    children: /*#__PURE__*/jsxRuntime.jsx(react.Menu.Positioner, {
      children: /*#__PURE__*/jsxRuntime.jsx(react.Menu.Content, _objectSpread2({
        ref: ref
      }, rest))
    })
  });
});
var MenuArrow = /*#__PURE__*/React__namespace.forwardRef(function MenuArrow(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Menu.Arrow, _objectSpread2(_objectSpread2({
    ref: ref
  }, props), {}, {
    children: /*#__PURE__*/jsxRuntime.jsx(react.Menu.ArrowTip, {})
  }));
});
var MenuCheckboxItem = /*#__PURE__*/React__namespace.forwardRef(function MenuCheckboxItem(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsxs(react.Menu.CheckboxItem, _objectSpread2(_objectSpread2({
    ref: ref
  }, props), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsx(react.Menu.ItemIndicator, {
      hidden: false,
      children: /*#__PURE__*/jsxRuntime.jsx(LuCheck, {})
    }), props.children]
  }));
});
var MenuRadioItem = /*#__PURE__*/React__namespace.forwardRef(function MenuRadioItem(props, ref) {
  var children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded2$7);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Menu.RadioItem, _objectSpread2(_objectSpread2({
    ps: "8",
    ref: ref
  }, rest), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsx(react.AbsoluteCenter, {
      axis: "horizontal",
      left: "4",
      asChild: true,
      children: /*#__PURE__*/jsxRuntime.jsx(react.Menu.ItemIndicator, {
        children: /*#__PURE__*/jsxRuntime.jsx(LuCheck, {})
      })
    }), /*#__PURE__*/jsxRuntime.jsx(react.Menu.ItemText, {
      children: children
    })]
  }));
});
var MenuItemGroup = /*#__PURE__*/React__namespace.forwardRef(function MenuItemGroup(props, ref) {
  var title = props.title,
    children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded3$1);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Menu.ItemGroup, _objectSpread2(_objectSpread2({
    ref: ref
  }, rest), {}, {
    children: [title && /*#__PURE__*/jsxRuntime.jsx(react.Menu.ItemGroupLabel, {
      userSelect: "none",
      children: title
    }), children]
  }));
});
var MenuTriggerItem = /*#__PURE__*/React__namespace.forwardRef(function MenuTriggerItem(props, ref) {
  var startIcon = props.startIcon,
    children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded4$1);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Menu.TriggerItem, _objectSpread2(_objectSpread2({
    ref: ref
  }, rest), {}, {
    children: [startIcon, children, /*#__PURE__*/jsxRuntime.jsx(LuChevronRight, {})]
  }));
});
var MenuRadioItemGroup = react.Menu.RadioItemGroup;
var MenuContextTrigger = react.Menu.ContextTrigger;
var MenuRoot = react.Menu.Root;
var MenuSeparator = react.Menu.Separator;
var MenuItem = react.Menu.Item;
var MenuItemText = react.Menu.ItemText;
var MenuItemCommand = react.Menu.ItemCommand;
var MenuTrigger = react.Menu.Trigger;

var _excluded$n = ["icon", "children"],
  _excluded2$6 = ["items", "children"];
function _optionalChain$3(ops) {
  var lastAccessLHS = undefined;
  var value = ops[0];
  var i = 1;
  while (i < ops.length) {
    var op = ops[i];
    var fn = ops[i + 1];
    i += 2;
    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined;
    }
    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn(function () {
        var _value;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_value = value).call.apply(_value, [lastAccessLHS].concat(args));
      });
      lastAccessLHS = undefined;
    }
  }
  return value;
}
var NativeSelectRoot = /*#__PURE__*/React__namespace.forwardRef(function NativeSelect(props, ref) {
  var icon = props.icon,
    children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded$n);
  return /*#__PURE__*/jsxRuntime.jsxs(react.NativeSelect.Root, _objectSpread2(_objectSpread2({
    ref: ref
  }, rest), {}, {
    children: [children, /*#__PURE__*/jsxRuntime.jsx(react.NativeSelect.Indicator, {
      children: icon
    })]
  }));
});
var NativeSelectField = /*#__PURE__*/React__namespace.forwardRef(function NativeSelectField(props, ref) {
  var itemsProp = props.items,
    children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded2$6);
  var items = React__namespace.useMemo(function () {
    return _optionalChain$3([itemsProp, 'optionalAccess', function (_) {
      return _.map;
    }, 'call', function (_2) {
      return _2(function (item) {
        return typeof item === 'string' ? {
          label: item,
          value: item
        } : item;
      });
    }]);
  }, [itemsProp]);
  return /*#__PURE__*/jsxRuntime.jsxs(react.NativeSelect.Field, _objectSpread2(_objectSpread2({
    ref: ref
  }, rest), {}, {
    children: [children, _optionalChain$3([items, 'optionalAccess', function (_3) {
      return _3.map;
    }, 'call', function (_4) {
      return _4(function (item) {
        return /*#__PURE__*/jsxRuntime.jsx("option", {
          value: item.value,
          disabled: item.disabled,
          children: item.label
        }, item.value);
      });
    }])]
  }));
});

var _excluded$m = ["children"];
var NumberInputRoot = /*#__PURE__*/React__namespace.forwardRef(function NumberInput(props, ref) {
  var children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded$m);
  return /*#__PURE__*/jsxRuntime.jsxs(react.NumberInput.Root, _objectSpread2(_objectSpread2({
    ref: ref,
    variant: "outline"
  }, rest), {}, {
    children: [children, /*#__PURE__*/jsxRuntime.jsxs(react.NumberInput.Control, {
      children: [/*#__PURE__*/jsxRuntime.jsx(react.NumberInput.IncrementTrigger, {}), /*#__PURE__*/jsxRuntime.jsx(react.NumberInput.DecrementTrigger, {})]
    })]
  }));
});
var NumberInputField = react.NumberInput.Input;
var NumberInputScruber = react.NumberInput.Scrubber;
var NumberInputLabel = react.NumberInput.Label;

// THIS FILE IS AUTO GENERATED
function HiChevronLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiChevronRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z","clipRule":"evenodd"},"child":[]}]})(props);
}function HiMiniEllipsisHorizontal (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM8.5 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM15.5 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"},"child":[]}]})(props);
}

var _excluded$l = ["size", "variant", "getHref"],
  _excluded2$5 = ["format"];
var _createContext = react.createContext({
    name: 'RootPropsProvider'
  }),
  _createContext2 = _slicedToArray(_createContext, 2),
  RootPropsProvider = _createContext2[0],
  useRootProps = _createContext2[1];
var variantMap$1 = {
  outline: {
    "default": 'ghost',
    ellipsis: 'plain',
    current: 'outline'
  },
  solid: {
    "default": 'outline',
    ellipsis: 'outline',
    current: 'solid'
  },
  subtle: {
    "default": 'ghost',
    ellipsis: 'plain',
    current: 'subtle'
  }
};
var PaginationRoot = /*#__PURE__*/React__namespace.forwardRef(function PaginationRoot(props, ref) {
  var _props$size = props.size,
    size = _props$size === void 0 ? 'sm' : _props$size,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'outline' : _props$variant,
    getHref = props.getHref,
    rest = _objectWithoutProperties$1(props, _excluded$l);
  return /*#__PURE__*/jsxRuntime.jsx(RootPropsProvider, {
    value: {
      size: size,
      variantMap: variantMap$1[variant],
      getHref: getHref
    },
    children: /*#__PURE__*/jsxRuntime.jsx(react.Pagination.Root, _objectSpread2({
      ref: ref,
      type: getHref ? 'link' : 'button'
    }, rest))
  });
});
var PaginationEllipsis = /*#__PURE__*/React__namespace.forwardRef(function PaginationEllipsis(props, ref) {
  var _useRootProps = useRootProps(),
    size = _useRootProps.size,
    variantMap = _useRootProps.variantMap;
  return /*#__PURE__*/jsxRuntime.jsx(react.Pagination.Ellipsis, _objectSpread2(_objectSpread2({
    ref: ref
  }, props), {}, {
    asChild: true,
    children: /*#__PURE__*/jsxRuntime.jsx(react.Button, {
      as: "span",
      variant: variantMap.ellipsis,
      size: size,
      children: /*#__PURE__*/jsxRuntime.jsx(HiMiniEllipsisHorizontal, {})
    })
  }));
});
var PaginationItem = /*#__PURE__*/React__namespace.forwardRef(function PaginationItem(props, ref) {
  var _usePaginationContext = react.usePaginationContext(),
    page = _usePaginationContext.page;
  var _useRootProps2 = useRootProps(),
    size = _useRootProps2.size,
    variantMap = _useRootProps2.variantMap,
    getHref = _useRootProps2.getHref;
  var current = page === props.value;
  var variant = current ? variantMap.current : variantMap["default"];
  if (getHref) {
    return /*#__PURE__*/jsxRuntime.jsx(LinkButton, {
      href: getHref(props.value),
      variant: variant,
      size: size,
      children: props.value
    });
  }
  return /*#__PURE__*/jsxRuntime.jsx(react.Pagination.Item, _objectSpread2(_objectSpread2({
    ref: ref
  }, props), {}, {
    asChild: true,
    children: /*#__PURE__*/jsxRuntime.jsx(react.Button, {
      variant: variant,
      size: size,
      children: props.value
    })
  }));
});
var PaginationPrevTrigger = /*#__PURE__*/React__namespace.forwardRef(function PaginationPrevTrigger(props, ref) {
  var _useRootProps3 = useRootProps(),
    size = _useRootProps3.size,
    variantMap = _useRootProps3.variantMap,
    getHref = _useRootProps3.getHref;
  var _usePaginationContext2 = react.usePaginationContext(),
    previousPage = _usePaginationContext2.previousPage;
  if (getHref) {
    return /*#__PURE__*/jsxRuntime.jsx(LinkButton, {
      href: previousPage != null ? getHref(previousPage) : undefined,
      variant: variantMap["default"],
      size: size,
      children: /*#__PURE__*/jsxRuntime.jsx(HiChevronLeft, {})
    });
  }
  return /*#__PURE__*/jsxRuntime.jsx(react.Pagination.PrevTrigger, _objectSpread2(_objectSpread2({
    ref: ref,
    asChild: true
  }, props), {}, {
    children: /*#__PURE__*/jsxRuntime.jsx(react.IconButton, {
      variant: variantMap["default"],
      size: size,
      children: /*#__PURE__*/jsxRuntime.jsx(HiChevronLeft, {})
    })
  }));
});
var PaginationNextTrigger = /*#__PURE__*/React__namespace.forwardRef(function PaginationNextTrigger(props, ref) {
  var _useRootProps4 = useRootProps(),
    size = _useRootProps4.size,
    variantMap = _useRootProps4.variantMap,
    getHref = _useRootProps4.getHref;
  var _usePaginationContext3 = react.usePaginationContext(),
    nextPage = _usePaginationContext3.nextPage;
  if (getHref) {
    return /*#__PURE__*/jsxRuntime.jsx(LinkButton, {
      href: nextPage != null ? getHref(nextPage) : undefined,
      variant: variantMap["default"],
      size: size,
      children: /*#__PURE__*/jsxRuntime.jsx(HiChevronRight, {})
    });
  }
  return /*#__PURE__*/jsxRuntime.jsx(react.Pagination.NextTrigger, _objectSpread2(_objectSpread2({
    ref: ref,
    asChild: true
  }, props), {}, {
    children: /*#__PURE__*/jsxRuntime.jsx(react.IconButton, {
      variant: variantMap["default"],
      size: size,
      children: /*#__PURE__*/jsxRuntime.jsx(HiChevronRight, {})
    })
  }));
});
var PaginationItems = function PaginationItems(props) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Pagination.Context, {
    children: function children(_ref) {
      var pages = _ref.pages;
      return pages.map(function (page, index) {
        return page.type === 'ellipsis' ? /*#__PURE__*/jsxRuntime.jsx(PaginationEllipsis, _objectSpread2({
          index: index
        }, props), index) : /*#__PURE__*/jsxRuntime.jsx(PaginationItem, _objectSpread2({
          type: "page",
          value: page.value
        }, props), index);
      });
    }
  });
};
var PaginationPageText = /*#__PURE__*/React__namespace.forwardRef(function PaginationPageText(props, ref) {
  var _props$format = props.format,
    format = _props$format === void 0 ? 'compact' : _props$format,
    rest = _objectWithoutProperties$1(props, _excluded2$5);
  var _usePaginationContext4 = react.usePaginationContext(),
    page = _usePaginationContext4.page,
    totalPages = _usePaginationContext4.totalPages,
    pageRange = _usePaginationContext4.pageRange,
    count = _usePaginationContext4.count;
  var content = React__namespace.useMemo(function () {
    if (format === 'short') return "".concat(page, " / ").concat(totalPages);
    if (format === 'compact') return "".concat(page, " of ").concat(totalPages);
    return "".concat(pageRange.start + 1, " - ").concat(pageRange.end, " of ").concat(count);
  }, [format, page, totalPages, pageRange, count]);
  return /*#__PURE__*/jsxRuntime.jsx(react.Text, _objectSpread2(_objectSpread2({
    fontWeight: "medium",
    ref: ref
  }, rest), {}, {
    children: content
  }));
});

var _excluded$k = ["rootProps", "defaultVisible", "visible", "onVisibleChange", "visibilityIcon"],
  _excluded2$4 = ["max", "value"];
var PasswordInput = /*#__PURE__*/React__namespace.forwardRef(function PasswordInput(props, ref) {
  var rootProps = props.rootProps,
    defaultVisible = props.defaultVisible,
    visibleProp = props.visible,
    onVisibleChange = props.onVisibleChange,
    _props$visibilityIcon = props.visibilityIcon,
    visibilityIcon = _props$visibilityIcon === void 0 ? {
      on: /*#__PURE__*/jsxRuntime.jsx(LuEye, {}),
      off: /*#__PURE__*/jsxRuntime.jsx(LuEyeOff, {})
    } : _props$visibilityIcon,
    rest = _objectWithoutProperties$1(props, _excluded$k);
  var _useControllableState = react.useControllableState({
      value: visibleProp,
      defaultValue: defaultVisible || false,
      onChange: onVisibleChange
    }),
    _useControllableState2 = _slicedToArray(_useControllableState, 2),
    visible = _useControllableState2[0],
    setVisible = _useControllableState2[1];
  var inputRef = React__namespace.useRef(null);
  return /*#__PURE__*/jsxRuntime.jsx(InputGroup, _objectSpread2(_objectSpread2({
    width: "full",
    endElement: /*#__PURE__*/jsxRuntime.jsx(VisibilityTrigger, {
      disabled: rest.disabled,
      onPointerDown: function onPointerDown(e) {
        if (rest.disabled) return;
        if (e.button !== 0) return;
        e.preventDefault();
        setVisible(!visible);
      },
      children: visible ? visibilityIcon.off : visibilityIcon.on
    })
  }, rootProps), {}, {
    children: /*#__PURE__*/jsxRuntime.jsx(react.Input, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref: react.mergeRefs(ref, inputRef),
      type: visible ? 'text' : 'password'
    }))
  }));
});
var VisibilityTrigger = /*#__PURE__*/React__namespace.forwardRef(function VisibilityTrigger(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.IconButton, _objectSpread2({
    tabIndex: -1,
    ref: ref,
    me: "-2",
    aspectRatio: "square",
    size: "sm",
    variant: "ghost",
    height: "calc(100% - {spacing.2})",
    "aria-label": "Toggle password visibility"
  }, props));
});
var PasswordStrengthMeter = /*#__PURE__*/React__namespace.forwardRef(function PasswordStrengthMeter(props, ref) {
  var _props$max = props.max,
    max = _props$max === void 0 ? 4 : _props$max,
    value = props.value,
    rest = _objectWithoutProperties$1(props, _excluded2$4);
  var percent = value / max * 100;
  var _getColorPalette = getColorPalette(percent),
    label = _getColorPalette.label,
    colorPalette = _getColorPalette.colorPalette;
  return /*#__PURE__*/jsxRuntime.jsxs(react.Stack, _objectSpread2(_objectSpread2({
    align: "flex-end",
    gap: "1",
    ref: ref
  }, rest), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsx(react.HStack, _objectSpread2(_objectSpread2({
      width: "full",
      ref: ref
    }, rest), {}, {
      children: Array.from({
        length: max
      }).map(function (_, index) {
        return /*#__PURE__*/jsxRuntime.jsx(react.Box, {
          height: "1",
          flex: "1",
          rounded: "sm",
          "data-selected": index < value ? '' : undefined,
          layerStyle: "fill.subtle",
          colorPalette: "gray",
          _selected: {
            colorPalette: colorPalette,
            layerStyle: 'fill.solid'
          }
        }, index);
      })
    })), label && /*#__PURE__*/jsxRuntime.jsx(react.HStack, {
      textStyle: "xs",
      children: label
    })]
  }));
});
function getColorPalette(percent) {
  switch (true) {
    case percent < 33:
      return {
        label: 'Low',
        colorPalette: 'red'
      };
    case percent < 66:
      return {
        label: 'Medium',
        colorPalette: 'orange'
      };
    default:
      return {
        label: 'High',
        colorPalette: 'green'
      };
  }
}

var _excluded$j = ["count", "inputProps", "rootRef", "attached"];
var PinInput = /*#__PURE__*/React__namespace.forwardRef(function PinInput(props, ref) {
  var _props$count = props.count,
    count = _props$count === void 0 ? 4 : _props$count,
    inputProps = props.inputProps,
    rootRef = props.rootRef,
    attached = props.attached,
    rest = _objectWithoutProperties$1(props, _excluded$j);
  return /*#__PURE__*/jsxRuntime.jsxs(react.PinInput.Root, _objectSpread2(_objectSpread2({
    ref: rootRef
  }, rest), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsx(react.PinInput.HiddenInput, _objectSpread2({
      ref: ref
    }, inputProps)), /*#__PURE__*/jsxRuntime.jsx(react.PinInput.Control, {
      children: /*#__PURE__*/jsxRuntime.jsx(react.Group, {
        attached: attached,
        children: Array.from({
          length: count
        }).map(function (_, index) {
          return /*#__PURE__*/jsxRuntime.jsx(react.PinInput.Input, {
            index: index
          }, index);
        })
      })
    })]
  }));
});

var _excluded$i = ["portalled", "portalRef"];
var PopoverContent = /*#__PURE__*/React__namespace.forwardRef(function PopoverContent(props, ref) {
  var _props$portalled = props.portalled,
    portalled = _props$portalled === void 0 ? true : _props$portalled,
    portalRef = props.portalRef,
    rest = _objectWithoutProperties$1(props, _excluded$i);
  return /*#__PURE__*/jsxRuntime.jsx(react.Portal, {
    disabled: !portalled,
    container: portalRef,
    children: /*#__PURE__*/jsxRuntime.jsx(react.Popover.Positioner, {
      children: /*#__PURE__*/jsxRuntime.jsx(react.Popover.Content, _objectSpread2({
        ref: ref
      }, rest))
    })
  });
});
var PopoverArrow = /*#__PURE__*/React__namespace.forwardRef(function PopoverArrow(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Popover.Arrow, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: ref,
    children: /*#__PURE__*/jsxRuntime.jsx(react.Popover.ArrowTip, {})
  }));
});
var PopoverCloseTrigger = /*#__PURE__*/React__namespace.forwardRef(function PopoverCloseTrigger(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Popover.CloseTrigger, _objectSpread2(_objectSpread2({
    position: "absolute",
    top: "1",
    insetEnd: "1"
  }, props), {}, {
    asChild: true,
    ref: ref,
    children: /*#__PURE__*/jsxRuntime.jsx(CloseButton, {
      size: "sm"
    })
  }));
});
var PopoverTitle = react.Popover.Title;
var PopoverDescription = react.Popover.Description;
var PopoverFooter = react.Popover.Footer;
var PopoverHeader = react.Popover.Header;
var PopoverRoot = react.Popover.Root;
var PopoverBody = react.Popover.Body;
var PopoverTrigger = react.Popover.Trigger;

var Portal = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Portal, _objectSpread2({
    ref: ref
  }, props));
});
Portal.displayName = "Portal";

var _excluded$h = ["children", "info"];
var ProgressBar = /*#__PURE__*/React__namespace.forwardRef(function ProgressBar(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Progress.Track, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: ref,
    children: /*#__PURE__*/jsxRuntime.jsx(react.Progress.Range, {})
  }));
});
var ProgressLabel = /*#__PURE__*/React__namespace.forwardRef(function ProgressLabel(props, ref) {
  var children = props.children,
    info = props.info,
    rest = _objectWithoutProperties$1(props, _excluded$h);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Progress.Label, _objectSpread2(_objectSpread2({}, rest), {}, {
    ref: ref,
    children: [children, info && /*#__PURE__*/jsxRuntime.jsx(InfoTip, {
      children: info
    })]
  }));
});
var ProgressRoot = react.Progress.Root;
var ProgressValueText = react.Progress.ValueText;

var _excluded$g = ["trackColor", "cap", "color"];
var ProgressCircleRing = /*#__PURE__*/React__namespace.forwardRef(function ProgressCircleRing(props, ref) {
  var trackColor = props.trackColor,
    cap = props.cap,
    color = props.color,
    rest = _objectWithoutProperties$1(props, _excluded$g);
  return /*#__PURE__*/jsxRuntime.jsxs(react.ProgressCircle.Circle, _objectSpread2(_objectSpread2({}, rest), {}, {
    ref: ref,
    children: [/*#__PURE__*/jsxRuntime.jsx(react.ProgressCircle.Track, {
      stroke: trackColor
    }), /*#__PURE__*/jsxRuntime.jsx(react.ProgressCircle.Range, {
      stroke: color,
      strokeLinecap: cap
    })]
  }));
});
var ProgressCircleValueText = /*#__PURE__*/React__namespace.forwardRef(function ProgressCircleValueText(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.AbsoluteCenter, {
    children: /*#__PURE__*/jsxRuntime.jsx(react.ProgressCircle.ValueText, _objectSpread2(_objectSpread2({}, props), {}, {
      ref: ref
    }))
  });
});
var ProgressCircleRoot = react.ProgressCircle.Root;

var Prose = react.chakra('div', {
  base: {
    color: 'fg.muted',
    maxWidth: '65ch',
    fontSize: 'sm',
    lineHeight: '1.7em',
    '& p': {
      marginTop: '1em',
      marginBottom: '1em'
    },
    '& blockquote': {
      marginTop: '1.285em',
      marginBottom: '1.285em',
      paddingInline: '1.285em',
      borderInlineStartWidth: '0.25em'
    },
    '& a': {
      color: 'fg',
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
      textDecorationThickness: '2px',
      textDecorationColor: 'border.muted',
      fontWeight: '500'
    },
    '& strong': {
      fontWeight: '600'
    },
    '& a strong': {
      color: 'inherit'
    },
    '& h1': {
      fontSize: '2.15em',
      letterSpacing: '-0.02em',
      marginTop: '0',
      marginBottom: '0.8em',
      lineHeight: '1.2em'
    },
    '& h2': {
      fontSize: '1.4em',
      letterSpacing: '-0.02em',
      marginTop: '1.6em',
      marginBottom: '0.8em',
      lineHeight: '1.4em'
    },
    '& h3': {
      fontSize: '1.285em',
      letterSpacing: '-0.01em',
      marginTop: '1.5em',
      marginBottom: '0.4em',
      lineHeight: '1.5em'
    },
    '& h4': {
      marginTop: '1.4em',
      marginBottom: '0.5em',
      letterSpacing: '-0.01em',
      lineHeight: '1.5em'
    },
    '& img': {
      marginTop: '1.7em',
      marginBottom: '1.7em',
      borderRadius: 'lg',
      boxShadow: 'inset'
    },
    '& picture': {
      marginTop: '1.7em',
      marginBottom: '1.7em'
    },
    '& picture > img': {
      marginTop: '0',
      marginBottom: '0'
    },
    '& video': {
      marginTop: '1.7em',
      marginBottom: '1.7em'
    },
    '& kbd': {
      fontSize: '0.85em',
      borderRadius: 'xs',
      paddingTop: '0.15em',
      paddingBottom: '0.15em',
      paddingInlineEnd: '0.35em',
      paddingInlineStart: '0.35em',
      fontFamily: 'inherit',
      color: 'fg.muted',
      '--shadow': 'colors.border',
      boxShadow: '0 0 0 1px var(--shadow),0 1px 0 1px var(--shadow)'
    },
    '& code': {
      fontSize: '0.925em',
      letterSpacing: '-0.01em',
      borderRadius: 'md',
      borderWidth: '1px',
      padding: '0.25em'
    },
    '& pre code': {
      fontSize: 'inherit',
      letterSpacing: 'inherit',
      borderWidth: 'inherit',
      padding: '0'
    },
    '& h2 code': {
      fontSize: '0.9em'
    },
    '& h3 code': {
      fontSize: '0.8em'
    },
    '& pre': {
      backgroundColor: 'bg.subtle',
      marginTop: '1.6em',
      marginBottom: '1.6em',
      borderRadius: 'md',
      fontSize: '0.9em',
      paddingTop: '0.65em',
      paddingBottom: '0.65em',
      paddingInlineEnd: '1em',
      paddingInlineStart: '1em',
      overflowX: 'auto',
      fontWeight: '400'
    },
    '& ol': {
      marginTop: '1em',
      marginBottom: '1em',
      paddingInlineStart: '1.5em'
    },
    '& ul': {
      marginTop: '1em',
      marginBottom: '1em',
      paddingInlineStart: '1.5em'
    },
    '& li': {
      marginTop: '0.285em',
      marginBottom: '0.285em'
    },
    '& ol > li': {
      paddingInlineStart: '0.4em',
      listStyleType: 'decimal',
      '&::marker': {
        color: 'fg.muted'
      }
    },
    '& ul > li': {
      paddingInlineStart: '0.4em',
      listStyleType: 'disc',
      '&::marker': {
        color: 'fg.muted'
      }
    },
    '& > ul > li p': {
      marginTop: '0.5em',
      marginBottom: '0.5em'
    },
    '& > ul > li > p:first-of-type': {
      marginTop: '1em'
    },
    '& > ul > li > p:last-of-type': {
      marginBottom: '1em'
    },
    '& > ol > li > p:first-of-type': {
      marginTop: '1em'
    },
    '& > ol > li > p:last-of-type': {
      marginBottom: '1em'
    },
    '& ul ul, ul ol, ol ul, ol ol': {
      marginTop: '0.5em',
      marginBottom: '0.5em'
    },
    '& dl': {
      marginTop: '1em',
      marginBottom: '1em'
    },
    '& dt': {
      fontWeight: '600',
      marginTop: '1em'
    },
    '& dd': {
      marginTop: '0.285em',
      paddingInlineStart: '1.5em'
    },
    '& hr': {
      marginTop: '2.25em',
      marginBottom: '2.25em'
    },
    '& :is(h1,h2,h3,h4,h5,hr) + *': {
      marginTop: '0'
    },
    '& table': {
      width: '100%',
      tableLayout: 'auto',
      textAlign: 'start',
      lineHeight: '1.5em',
      marginTop: '2em',
      marginBottom: '2em'
    },
    '& thead': {
      borderBottomWidth: '1px',
      color: 'fg'
    },
    '& tbody tr': {
      borderBottomWidth: '1px',
      borderBottomColor: 'border'
    },
    '& thead th': {
      paddingInlineEnd: '1em',
      paddingBottom: '0.65em',
      paddingInlineStart: '1em',
      fontWeight: 'medium',
      textAlign: 'start'
    },
    '& thead th:first-of-type': {
      paddingInlineStart: '0'
    },
    '& thead th:last-of-type': {
      paddingInlineEnd: '0'
    },
    '& tbody td, tfoot td': {
      paddingTop: '0.65em',
      paddingInlineEnd: '1em',
      paddingBottom: '0.65em',
      paddingInlineStart: '1em'
    },
    '& tbody td:first-of-type, tfoot td:first-of-type': {
      paddingInlineStart: '0'
    },
    '& tbody td:last-of-type, tfoot td:last-of-type': {
      paddingInlineEnd: '0'
    },
    '& figure': {
      marginTop: '1.625em',
      marginBottom: '1.625em'
    },
    '& figure > *': {
      marginTop: '0',
      marginBottom: '0'
    },
    '& figcaption': {
      fontSize: '0.85em',
      lineHeight: '1.25em',
      marginTop: '0.85em',
      color: 'fg.muted'
    },
    '& h1, h2, h3, h4': {
      color: 'fg',
      fontWeight: '600'
    }
  },
  variants: {
    size: {
      md: {
        fontSize: 'sm'
      },
      lg: {
        fontSize: 'md'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

var _excluded$f = ["children", "inputProps", "rootRef"];
var Radio = /*#__PURE__*/React__namespace.forwardRef(function Radio(props, ref) {
  var children = props.children,
    inputProps = props.inputProps,
    rootRef = props.rootRef,
    rest = _objectWithoutProperties$1(props, _excluded$f);
  return /*#__PURE__*/jsxRuntime.jsxs(react.RadioGroup.Item, _objectSpread2(_objectSpread2({
    ref: rootRef
  }, rest), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsx(react.RadioGroup.ItemHiddenInput, _objectSpread2({
      ref: ref
    }, inputProps)), /*#__PURE__*/jsxRuntime.jsx(react.RadioGroup.ItemIndicator, {}), children && /*#__PURE__*/jsxRuntime.jsx(react.RadioGroup.ItemText, {
      children: children
    })]
  }));
});
var RadioGroup = react.RadioGroup.Root;

var _excluded$e = ["inputProps", "label", "description", "addon", "icon", "indicator", "indicatorPlacement"];
var RadioCardItem = /*#__PURE__*/React__namespace.forwardRef(function RadioCardItem(props, ref) {
  var inputProps = props.inputProps,
    label = props.label,
    description = props.description,
    addon = props.addon,
    icon = props.icon,
    _props$indicator = props.indicator,
    indicator = _props$indicator === void 0 ? /*#__PURE__*/jsxRuntime.jsx(react.RadioCard.ItemIndicator, {}) : _props$indicator,
    _props$indicatorPlace = props.indicatorPlacement,
    indicatorPlacement = _props$indicatorPlace === void 0 ? 'end' : _props$indicatorPlace,
    rest = _objectWithoutProperties$1(props, _excluded$e);
  var hasContent = label || description || icon;
  var ContentWrapper = indicator ? react.RadioCard.ItemContent : React__namespace.Fragment;
  return /*#__PURE__*/jsxRuntime.jsxs(react.RadioCard.Item, _objectSpread2(_objectSpread2({}, rest), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsx(react.RadioCard.ItemHiddenInput, _objectSpread2({
      ref: ref
    }, inputProps)), /*#__PURE__*/jsxRuntime.jsxs(react.RadioCard.ItemControl, {
      children: [indicatorPlacement === 'start' && indicator, hasContent && /*#__PURE__*/jsxRuntime.jsxs(ContentWrapper, {
        children: [icon, label && /*#__PURE__*/jsxRuntime.jsx(react.RadioCard.ItemText, {
          children: label
        }), description && /*#__PURE__*/jsxRuntime.jsx(react.RadioCard.ItemDescription, {
          children: description
        }), indicatorPlacement === 'inside' && indicator]
      }), indicatorPlacement === 'end' && indicator]
    }), addon && /*#__PURE__*/jsxRuntime.jsx(react.RadioCard.ItemAddon, {
      children: addon
    })]
  }));
});
var RadioCardRoot = react.RadioCard.Root;
var RadioCardLabel = react.RadioCard.Label;
var RadioCardItemIndicator = react.RadioCard.ItemIndicator;

var _excluded$d = ["icon", "count", "label"];
var Rating = /*#__PURE__*/React__namespace.forwardRef(function Rating(props, ref) {
  var icon = props.icon,
    _props$count = props.count,
    count = _props$count === void 0 ? 5 : _props$count,
    label = props.label,
    rest = _objectWithoutProperties$1(props, _excluded$d);
  return /*#__PURE__*/jsxRuntime.jsxs(react.RatingGroup.Root, _objectSpread2(_objectSpread2({
    ref: ref,
    count: count
  }, rest), {}, {
    children: [label && /*#__PURE__*/jsxRuntime.jsx(react.RatingGroup.Label, {
      children: label
    }), /*#__PURE__*/jsxRuntime.jsx(react.RatingGroup.HiddenInput, {}), /*#__PURE__*/jsxRuntime.jsx(react.RatingGroup.Control, {
      children: Array.from({
        length: count
      }).map(function (_, index) {
        return /*#__PURE__*/jsxRuntime.jsx(react.RatingGroup.Item, {
          index: index + 1,
          children: /*#__PURE__*/jsxRuntime.jsx(react.RatingGroup.ItemIndicator, {
            icon: icon
          })
        }, index);
      })
    })]
  }));
});

var _excluded$c = ["items"];
function normalize(items) {
  return items.map(function (item) {
    if (typeof item === 'string') return {
      value: item,
      label: item
    };
    return item;
  });
}
var SegmentedControl = /*#__PURE__*/React__namespace.forwardRef(function SegmentedControl(props, ref) {
  var items = props.items,
    rest = _objectWithoutProperties$1(props, _excluded$c);
  var data = React__namespace.useMemo(function () {
    return normalize(items);
  }, [items]);
  return /*#__PURE__*/jsxRuntime.jsxs(react.SegmentGroup.Root, _objectSpread2(_objectSpread2({
    ref: ref
  }, rest), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsx(react.SegmentGroup.Indicator, {}), /*#__PURE__*/jsxRuntime.jsx(react.For, {
      each: data,
      children: function children(item) {
        return /*#__PURE__*/jsxRuntime.jsxs(react.SegmentGroup.Item, {
          value: item.value,
          disabled: item.disabled,
          children: [/*#__PURE__*/jsxRuntime.jsx(react.SegmentGroup.ItemText, {
            children: item.label
          }), /*#__PURE__*/jsxRuntime.jsx(react.SegmentGroup.ItemHiddenInput, {})]
        }, item.value);
      }
    })]
  }));
});

var _excluded$b = ["children", "clearable"],
  _excluded2$3 = ["portalled", "portalRef"],
  _excluded3 = ["item", "children"],
  _excluded4 = ["children"],
  _excluded5 = ["children", "label"];
var SelectTrigger = /*#__PURE__*/React__namespace.forwardRef(function SelectTrigger(props, ref) {
  var children = props.children,
    clearable = props.clearable,
    rest = _objectWithoutProperties$1(props, _excluded$b);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Select.Control, _objectSpread2(_objectSpread2({}, rest), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsx(react.Select.Trigger, {
      ref: ref,
      children: children
    }), /*#__PURE__*/jsxRuntime.jsxs(react.Select.IndicatorGroup, {
      children: [clearable && /*#__PURE__*/jsxRuntime.jsx(SelectClearTrigger, {}), /*#__PURE__*/jsxRuntime.jsx(react.Select.Indicator, {})]
    })]
  }));
});
var SelectClearTrigger = /*#__PURE__*/React__namespace.forwardRef(function SelectClearTrigger(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Select.ClearTrigger, _objectSpread2(_objectSpread2({
    asChild: true
  }, props), {}, {
    ref: ref,
    children: /*#__PURE__*/jsxRuntime.jsx(CloseButton, {
      size: "xs",
      variant: "plain",
      focusVisibleRing: "inside",
      focusRingWidth: "2px",
      pointerEvents: "auto"
    })
  }));
});
var SelectContent = /*#__PURE__*/React__namespace.forwardRef(function SelectContent(props, ref) {
  var _props$portalled = props.portalled,
    portalled = _props$portalled === void 0 ? true : _props$portalled,
    portalRef = props.portalRef,
    rest = _objectWithoutProperties$1(props, _excluded2$3);
  return /*#__PURE__*/jsxRuntime.jsx(react.Portal, {
    disabled: !portalled,
    container: portalRef,
    children: /*#__PURE__*/jsxRuntime.jsx(react.Select.Positioner, {
      children: /*#__PURE__*/jsxRuntime.jsx(react.Select.Content, _objectSpread2(_objectSpread2({}, rest), {}, {
        ref: ref
      }))
    })
  });
});
var SelectItem = /*#__PURE__*/React__namespace.forwardRef(function SelectItem(props, ref) {
  var item = props.item,
    children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded3);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Select.Item, _objectSpread2(_objectSpread2({
    item: item
  }, rest), {}, {
    ref: ref,
    children: [children, /*#__PURE__*/jsxRuntime.jsx(react.Select.ItemIndicator, {})]
  }), item.value);
});
var SelectValueText = /*#__PURE__*/React__namespace.forwardRef(function SelectValueText(props, ref) {
  var _children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded4);
  return /*#__PURE__*/jsxRuntime.jsx(react.Select.ValueText, _objectSpread2(_objectSpread2({}, rest), {}, {
    ref: ref,
    children: /*#__PURE__*/jsxRuntime.jsx(react.Select.Context, {
      children: function children(select) {
        var items = select.selectedItems;
        if (items.length === 0) return props.placeholder;
        if (_children) return _children(items);
        if (items.length === 1) return select.collection.stringifyItem(items[0]);
        return "".concat(items.length, " selected");
      }
    })
  }));
});
var SelectRoot = /*#__PURE__*/React__namespace.forwardRef(function SelectRoot(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Select.Root, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: ref,
    positioning: _objectSpread2({
      sameWidth: true
    }, props.positioning),
    children: props.asChild ? props.children : /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(react.Select.HiddenSelect, {}), props.children]
    })
  }));
});
var SelectItemGroup = /*#__PURE__*/React__namespace.forwardRef(function SelectItemGroup(props, ref) {
  var children = props.children,
    label = props.label,
    rest = _objectWithoutProperties$1(props, _excluded5);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Select.ItemGroup, _objectSpread2(_objectSpread2({}, rest), {}, {
    ref: ref,
    children: [/*#__PURE__*/jsxRuntime.jsx(react.Select.ItemGroupLabel, {
      children: label
    }), children]
  }));
});
var SelectLabel = react.Select.Label;
var SelectItemText = react.Select.ItemText;

var Separator = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Separator, _objectSpread2({
    ref: ref
  }, props));
});
Separator.displayName = "Separator";

var Show = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Show, _objectSpread2({
    ref: ref
  }, props));
});
Show.displayName = "Show";

var SimpleGrid = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.SimpleGrid, _objectSpread2({
    ref: ref
  }, props));
});
SimpleGrid.displayName = "SimpleGrid";

var _excluded$a = ["size"],
  _excluded2$2 = ["noOfLines", "gap"];
var SkeletonCircle = /*#__PURE__*/React__namespace.forwardRef(function SkeletonCircle(props, ref) {
  var size = props.size,
    rest = _objectWithoutProperties$1(props, _excluded$a);
  return /*#__PURE__*/jsxRuntime.jsx(react.Circle, {
    size: size,
    asChild: true,
    ref: ref,
    children: /*#__PURE__*/jsxRuntime.jsx(react.Skeleton, _objectSpread2({}, rest))
  });
});
var SkeletonText = /*#__PURE__*/React__namespace.forwardRef(function SkeletonText(props, ref) {
  var _props$noOfLines = props.noOfLines,
    noOfLines = _props$noOfLines === void 0 ? 3 : _props$noOfLines,
    gap = props.gap,
    rest = _objectWithoutProperties$1(props, _excluded2$2);
  return /*#__PURE__*/jsxRuntime.jsx(react.Stack, {
    gap: gap,
    width: "full",
    ref: ref,
    children: Array.from({
      length: noOfLines
    }).map(function (_, index) {
      return /*#__PURE__*/jsxRuntime.jsx(react.Skeleton, _objectSpread2(_objectSpread2({
        height: "4"
      }, props), {}, {
        _last: {
          maxW: '80%'
        }
      }, rest), index);
    })
  });
});
var Skeleton = react.Skeleton;

var _excluded$9 = ["marks", "label", "showValue"];
function _nullishCoalesce$1(lhs, rhsFn) {
  if (lhs != null) {
    return lhs;
  } else {
    return rhsFn();
  }
}
function _optionalChain$2(ops) {
  var lastAccessLHS = undefined;
  var value = ops[0];
  var i = 1;
  while (i < ops.length) {
    var op = ops[i];
    var fn = ops[i + 1];
    i += 2;
    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined;
    }
    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn(function () {
        var _value;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_value = value).call.apply(_value, [lastAccessLHS].concat(args));
      });
      lastAccessLHS = undefined;
    }
  }
  return value;
}
var Slider = /*#__PURE__*/React__namespace.forwardRef(function Slider(props, ref) {
  var marksProp = props.marks,
    label = props.label,
    showValue = props.showValue,
    rest = _objectWithoutProperties$1(props, _excluded$9);
  var value = _nullishCoalesce$1(props.defaultValue, function () {
    return props.value;
  });
  var marks = _optionalChain$2([marksProp, 'optionalAccess', function (_2) {
    return _2.map;
  }, 'call', function (_3) {
    return _3(function (mark) {
      if (typeof mark === 'number') return {
        value: mark,
        label: undefined
      };
      return mark;
    });
  }]);
  var hasMarkLabel = !!_optionalChain$2([marks, 'optionalAccess', function (_4) {
    return _4.some;
  }, 'call', function (_5) {
    return _5(function (mark) {
      return mark.label;
    });
  }]);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Slider.Root, _objectSpread2(_objectSpread2({
    ref: ref,
    thumbAlignment: "center"
  }, rest), {}, {
    children: [label && !showValue && /*#__PURE__*/jsxRuntime.jsx(react.Slider.Label, {
      children: label
    }), label && showValue && /*#__PURE__*/jsxRuntime.jsxs(react.HStack, {
      justify: "space-between",
      children: [/*#__PURE__*/jsxRuntime.jsx(react.Slider.Label, {
        children: label
      }), /*#__PURE__*/jsxRuntime.jsx(react.Slider.ValueText, {})]
    }), /*#__PURE__*/jsxRuntime.jsxs(react.Slider.Control, {
      "data-has-mark-label": hasMarkLabel || undefined,
      children: [/*#__PURE__*/jsxRuntime.jsx(react.Slider.Track, {
        children: /*#__PURE__*/jsxRuntime.jsx(react.Slider.Range, {})
      }), /*#__PURE__*/jsxRuntime.jsx(SliderThumbs, {
        value: value
      }), /*#__PURE__*/jsxRuntime.jsx(SliderMarks, {
        marks: marks
      })]
    })]
  }));
});
function SliderThumbs(props) {
  var value = props.value;
  return /*#__PURE__*/jsxRuntime.jsx(react.For, {
    each: value,
    children: function children(_, index) {
      return /*#__PURE__*/jsxRuntime.jsx(react.Slider.Thumb, {
        index: index,
        children: /*#__PURE__*/jsxRuntime.jsx(react.Slider.HiddenInput, {})
      }, index);
    }
  });
}
var SliderMarks = /*#__PURE__*/React__namespace.forwardRef(function SliderMarks(props, ref) {
  var marks = props.marks;
  if (!_optionalChain$2([marks, 'optionalAccess', function (_6) {
    return _6.length;
  }])) return null;
  return /*#__PURE__*/jsxRuntime.jsx(react.Slider.MarkerGroup, {
    ref: ref,
    children: marks.map(function (mark, index) {
      var value = typeof mark === 'number' ? mark : mark.value;
      var label = typeof mark === 'number' ? undefined : mark.label;
      return /*#__PURE__*/jsxRuntime.jsxs(react.Slider.Marker, {
        value: value,
        children: [/*#__PURE__*/jsxRuntime.jsx(react.Slider.MarkerIndicator, {}), label]
      }, index);
    })
  });
});

var Spinner = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Spinner, _objectSpread2({
    ref: ref
  }, props));
});
Spinner.displayName = "Spinner";

var _excluded$8 = ["info", "children"],
  _excluded2$1 = ["value", "formatOptions", "children"];
var StatLabel = /*#__PURE__*/React__namespace.forwardRef(function StatLabel(props, ref) {
  var info = props.info,
    children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded$8);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Stat.Label, _objectSpread2(_objectSpread2({}, rest), {}, {
    ref: ref,
    children: [children, info && /*#__PURE__*/jsxRuntime.jsx(InfoTip, {
      children: info
    })]
  }));
});
var StatValueText = /*#__PURE__*/React__namespace.forwardRef(function StatValueText(props, ref) {
  var value = props.value,
    formatOptions = props.formatOptions,
    children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded2$1);
  return /*#__PURE__*/jsxRuntime.jsx(react.Stat.ValueText, _objectSpread2(_objectSpread2({}, rest), {}, {
    ref: ref,
    children: children || value != null && /*#__PURE__*/jsxRuntime.jsx(react.FormatNumber, _objectSpread2({
      value: value
    }, formatOptions))
  }));
});
var StatUpTrend = /*#__PURE__*/React__namespace.forwardRef(function StatUpTrend(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsxs(react.Badge, _objectSpread2(_objectSpread2({
    colorPalette: "green",
    gap: "0"
  }, props), {}, {
    ref: ref,
    children: [/*#__PURE__*/jsxRuntime.jsx(react.Stat.UpIndicator, {}), props.children]
  }));
});
var StatDownTrend = /*#__PURE__*/React__namespace.forwardRef(function StatDownTrend(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsxs(react.Badge, _objectSpread2(_objectSpread2({
    colorPalette: "red",
    gap: "0"
  }, props), {}, {
    ref: ref,
    children: [/*#__PURE__*/jsxRuntime.jsx(react.Stat.DownIndicator, {}), props.children]
  }));
});
var StatRoot = react.Stat.Root;
var StatHelpText = react.Stat.HelpText;
var StatValueUnit = react.Stat.ValueUnit;

var _excluded$7 = ["children", "value"];
function _nullishCoalesce(lhs, rhsFn) {
  if (lhs != null) {
    return lhs;
  } else {
    return rhsFn();
  }
}
var statusMap = {
  success: 'green',
  error: 'red',
  warning: 'orange',
  info: 'blue'
};
var Status = /*#__PURE__*/React__namespace.forwardRef(function Status(props, ref) {
  var children = props.children,
    _props$value = props.value,
    value = _props$value === void 0 ? 'info' : _props$value,
    rest = _objectWithoutProperties$1(props, _excluded$7);
  var colorPalette = _nullishCoalesce(rest.colorPalette, function () {
    return statusMap[value];
  });
  return /*#__PURE__*/jsxRuntime.jsxs(react.Status.Root, _objectSpread2(_objectSpread2({
    ref: ref
  }, rest), {}, {
    colorPalette: colorPalette,
    children: [/*#__PURE__*/jsxRuntime.jsx(react.Status.Indicator, {}), children]
  }));
});

var _excluded$6 = ["label"];
var StepperInput = /*#__PURE__*/React__namespace.forwardRef(function StepperInput(props, ref) {
  var label = props.label,
    rest = _objectWithoutProperties$1(props, _excluded$6);
  return /*#__PURE__*/jsxRuntime.jsxs(react.NumberInput.Root, _objectSpread2(_objectSpread2({}, rest), {}, {
    unstyled: true,
    ref: ref,
    children: [label && /*#__PURE__*/jsxRuntime.jsx(react.NumberInput.Label, {
      children: label
    }), /*#__PURE__*/jsxRuntime.jsxs(react.HStack, {
      gap: "2",
      children: [/*#__PURE__*/jsxRuntime.jsx(DecrementTrigger, {}), /*#__PURE__*/jsxRuntime.jsx(react.NumberInput.ValueText, {
        textAlign: "center",
        fontSize: "lg",
        minW: "3ch"
      }), /*#__PURE__*/jsxRuntime.jsx(IncrementTrigger, {})]
    })]
  }));
});
var DecrementTrigger = /*#__PURE__*/React__namespace.forwardRef(function DecrementTrigger(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.NumberInput.DecrementTrigger, _objectSpread2(_objectSpread2({}, props), {}, {
    asChild: true,
    ref: ref,
    children: /*#__PURE__*/jsxRuntime.jsx(react.IconButton, {
      variant: "outline",
      size: "sm",
      children: /*#__PURE__*/jsxRuntime.jsx(LuMinus, {})
    })
  }));
});
var IncrementTrigger = /*#__PURE__*/React__namespace.forwardRef(function IncrementTrigger(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.NumberInput.IncrementTrigger, _objectSpread2(_objectSpread2({}, props), {}, {
    asChild: true,
    ref: ref,
    children: /*#__PURE__*/jsxRuntime.jsx(react.IconButton, {
      variant: "outline",
      size: "sm",
      children: /*#__PURE__*/jsxRuntime.jsx(LuPlus, {})
    })
  }));
});

var _excluded$5 = ["title", "description", "completedIcon", "icon"];
var StepsItem = /*#__PURE__*/React__namespace.forwardRef(function StepsItem(props, ref) {
  var title = props.title,
    description = props.description,
    completedIcon = props.completedIcon,
    icon = props.icon,
    rest = _objectWithoutProperties$1(props, _excluded$5);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Steps.Item, _objectSpread2(_objectSpread2({}, rest), {}, {
    ref: ref,
    children: [/*#__PURE__*/jsxRuntime.jsxs(react.Steps.Trigger, {
      children: [/*#__PURE__*/jsxRuntime.jsx(react.Steps.Indicator, {
        children: /*#__PURE__*/jsxRuntime.jsx(react.Steps.Status, {
          complete: completedIcon || /*#__PURE__*/jsxRuntime.jsx(LuCheck, {}),
          incomplete: icon || /*#__PURE__*/jsxRuntime.jsx(react.Steps.Number, {})
        })
      }), /*#__PURE__*/jsxRuntime.jsx(StepInfo, {
        title: title,
        description: description
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(react.Steps.Separator, {})]
  }));
});
var StepInfo = function StepInfo(props) {
  var title = props.title,
    description = props.description;
  if (title && description) {
    return /*#__PURE__*/jsxRuntime.jsxs(react.Box, {
      children: [/*#__PURE__*/jsxRuntime.jsx(react.Steps.Title, {
        children: title
      }), /*#__PURE__*/jsxRuntime.jsx(react.Steps.Description, {
        children: description
      })]
    });
  }
  return /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [title && /*#__PURE__*/jsxRuntime.jsx(react.Steps.Title, {
      children: title
    }), description && /*#__PURE__*/jsxRuntime.jsx(react.Steps.Description, {
      children: description
    })]
  });
};
var StepsIndicator = /*#__PURE__*/React__namespace.forwardRef(function StepsIndicator(props, ref) {
  var _props$icon = props.icon,
    icon = _props$icon === void 0 ? /*#__PURE__*/jsxRuntime.jsx(react.Steps.Number, {}) : _props$icon,
    completedIcon = props.completedIcon;
  return /*#__PURE__*/jsxRuntime.jsx(react.Steps.Indicator, {
    ref: ref,
    children: /*#__PURE__*/jsxRuntime.jsx(react.Steps.Status, {
      complete: completedIcon,
      incomplete: icon
    })
  });
});
var StepsList = react.Steps.List;
var StepsRoot = react.Steps.Root;
var StepsContent = react.Steps.Content;
var StepsCompletedContent = react.Steps.CompletedContent;
var StepsNextTrigger = react.Steps.NextTrigger;
var StepsPrevTrigger = react.Steps.PrevTrigger;

var _excluded$4 = ["inputProps", "children", "rootRef", "trackLabel", "thumbLabel"];
function _optionalChain$1(ops) {
  var lastAccessLHS = undefined;
  var value = ops[0];
  var i = 1;
  while (i < ops.length) {
    var op = ops[i];
    var fn = ops[i + 1];
    i += 2;
    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined;
    }
    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn(function () {
        var _value;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_value = value).call.apply(_value, [lastAccessLHS].concat(args));
      });
      lastAccessLHS = undefined;
    }
  }
  return value;
}
var Switch = /*#__PURE__*/React__namespace.forwardRef(function Switch(props, ref) {
  var inputProps = props.inputProps,
    children = props.children,
    rootRef = props.rootRef,
    trackLabel = props.trackLabel,
    thumbLabel = props.thumbLabel,
    rest = _objectWithoutProperties$1(props, _excluded$4);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Switch.Root, _objectSpread2(_objectSpread2({
    ref: rootRef
  }, rest), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsx(react.Switch.HiddenInput, _objectSpread2({
      ref: ref
    }, inputProps)), /*#__PURE__*/jsxRuntime.jsxs(react.Switch.Control, {
      children: [/*#__PURE__*/jsxRuntime.jsx(react.Switch.Thumb, {
        children: thumbLabel && /*#__PURE__*/jsxRuntime.jsx(react.Switch.ThumbIndicator, {
          fallback: _optionalChain$1([thumbLabel, 'optionalAccess', function (_) {
            return _.off;
          }]),
          children: _optionalChain$1([thumbLabel, 'optionalAccess', function (_2) {
            return _2.on;
          }])
        })
      }), trackLabel && /*#__PURE__*/jsxRuntime.jsx(react.Switch.Indicator, {
        fallback: trackLabel.off,
        children: trackLabel.on
      })]
    }), children != null && /*#__PURE__*/jsxRuntime.jsx(react.Switch.Label, {
      children: children
    })]
  }));
});

var Table = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Table, _objectSpread2({
    ref: ref
  }, props));
});
Table.displayName = "Table";

var Tabs = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Tabs, _objectSpread2({
    ref: ref
  }, props));
});
Tabs.displayName = "Tabs";

var _excluded$3 = ["startElement", "endElement", "onClose", "closable", "children"];
var Tag = /*#__PURE__*/React__namespace.forwardRef(function Tag(props, ref) {
  var startElement = props.startElement,
    endElement = props.endElement,
    onClose = props.onClose,
    _props$closable = props.closable,
    closable = _props$closable === void 0 ? !!onClose : _props$closable,
    children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded$3);
  return /*#__PURE__*/jsxRuntime.jsxs(react.Tag.Root, _objectSpread2(_objectSpread2({
    ref: ref
  }, rest), {}, {
    children: [startElement && /*#__PURE__*/jsxRuntime.jsx(react.Tag.StartElement, {
      children: startElement
    }), /*#__PURE__*/jsxRuntime.jsx(react.Tag.Label, {
      children: children
    }), endElement && /*#__PURE__*/jsxRuntime.jsx(react.Tag.EndElement, {
      children: endElement
    }), closable && /*#__PURE__*/jsxRuntime.jsx(react.Tag.EndElement, {
      children: /*#__PURE__*/jsxRuntime.jsx(react.Tag.CloseTrigger, {
        onClick: onClose
      })
    })]
  }));
});

var _excluded$2 = ["variant"];
var textStyles = {
  h1: {
    fontSize: '3.25rem',
    fontWeight: 'normal',
    lineHeight: '115%',
    letterSpacing: '-0.04rem',
    fontFamily: 'Noto Sans'
  },
  h2: {
    fontSize: '2.5rem',
    fontWeight: 'normal',
    lineHeight: '115%',
    letterSpacing: '-0.04rem',
    fontFamily: 'Noto Sans'
  },
  h3: {
    fontSize: '1.875rem',
    fontWeight: 'normal',
    lineHeight: '125%',
    letterSpacing: '-0.04rem',
    fontFamily: 'Noto Sans'
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 'normal',
    lineHeight: '130%',
    letterSpacing: '-0.04rem',
    fontFamily: 'Noto Sans'
  },
  'p-large': {
    fontSize: '1.125rem',
    fontWeight: 'normal',
    lineHeight: '153%',
    letterSpacing: '-0.04rem',
    fontFamily: 'Noto Sans'
  },
  'p-medium': {
    fontSize: '1rem',
    fontWeight: 'normal',
    lineHeight: '160%',
    letterSpacing: '-0.032rem',
    fontFamily: 'Noto Sans'
  },
  'p-small': {
    fontSize: '0.9rem',
    fontWeight: 'normal',
    lineHeight: '160%',
    letterSpacing: '0',
    fontFamily: 'Noto Sans'
  },
  terminal1: {
    fontSize: '1.125rem',
    fontWeight: 'normal',
    lineHeight: '140%',
    letterSpacing: '-0.04rem',
    fontFamily: 'Space Mono'
  },
  terminal2: {
    fontSize: '1rem',
    fontWeight: 'normal',
    lineHeight: '140%',
    letterSpacing: '-0.04rem',
    fontFamily: 'Space Mono'
  },
  label1: {
    fontSize: '0.875rem',
    fontWeight: 'normal',
    lineHeight: '115%',
    letterSpacing: '0.04rem',
    fontFamily: 'Courier Prime'
  },
  label2: {
    fontSize: '0.9375rem',
    fontWeight: 'normal',
    lineHeight: '160%',
    letterSpacing: '0',
    fontFamily: 'Courier Prime'
  }
};
var Text = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'p-medium' : _ref$variant,
    props = _objectWithoutProperties$1(_ref, _excluded$2);
  return /*#__PURE__*/jsxRuntime.jsx(react.Text, _objectSpread2(_objectSpread2({
    ref: ref
  }, textStyles[variant]), props));
});
Text.displayName = 'Text';
Text.propTypes = {
  variant: PropTypes.oneOf(['p-large', 'p-medium', 'p-small', 'terminal1', 'terminal2', 'label1', 'label2', 'h1', 'h2', 'h3', 'h4']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

var Textarea = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Textarea, _objectSpread2({
    ref: ref
  }, props));
});
Textarea.displayName = "Textarea";

var Theme = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.Theme, _objectSpread2({
    ref: ref
  }, props));
});
Theme.displayName = "Theme";

var TimelineConnector = /*#__PURE__*/React__namespace.forwardRef(function TimelineConnector(props, ref) {
  return /*#__PURE__*/jsxRuntime.jsxs(react.Timeline.Connector, {
    ref: ref,
    children: [/*#__PURE__*/jsxRuntime.jsx(react.Timeline.Separator, {}), /*#__PURE__*/jsxRuntime.jsx(react.Timeline.Indicator, _objectSpread2({}, props))]
  });
});
var TimelineRoot = react.Timeline.Root;
var TimelineContent = react.Timeline.Content;
var TimelineItem = react.Timeline.Item;
var TimelineIndicator = react.Timeline.Indicator;
var TimelineTitle = react.Timeline.Title;
var TimelineDescription = react.Timeline.Description;

function _optionalChain(ops) {
  var lastAccessLHS = undefined;
  var value = ops[0];
  var i = 1;
  while (i < ops.length) {
    var op = ops[i];
    var fn = ops[i + 1];
    i += 2;
    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined;
    }
    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn(function () {
        var _value;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_value = value).call.apply(_value, [lastAccessLHS].concat(args));
      });
      lastAccessLHS = undefined;
    }
  }
  return value;
}
var toaster = react.createToaster({
  placement: 'bottom-end',
  pauseOnPageIdle: true
});
var Toaster = function Toaster() {
  return /*#__PURE__*/jsxRuntime.jsx(react.Portal, {
    children: /*#__PURE__*/jsxRuntime.jsx(react.Toaster, {
      toaster: toaster,
      insetInline: {
        mdDown: '4'
      },
      children: function children(toast) {
        return /*#__PURE__*/jsxRuntime.jsxs(react.Toast.Root, {
          width: {
            md: 'sm'
          },
          children: [toast.type === 'loading' ? /*#__PURE__*/jsxRuntime.jsx(react.Spinner, {
            size: "sm",
            color: "blue.solid"
          }) : /*#__PURE__*/jsxRuntime.jsx(react.Toast.Indicator, {}), /*#__PURE__*/jsxRuntime.jsxs(react.Stack, {
            gap: "1",
            flex: "1",
            maxWidth: "100%",
            children: [toast.title && /*#__PURE__*/jsxRuntime.jsx(react.Toast.Title, {
              children: toast.title
            }), toast.description && /*#__PURE__*/jsxRuntime.jsx(react.Toast.Description, {
              children: toast.description
            })]
          }), toast.action && /*#__PURE__*/jsxRuntime.jsx(react.Toast.ActionTrigger, {
            children: toast.action.label
          }), _optionalChain([toast, 'access', function (_) {
            return _.meta;
          }, 'optionalAccess', function (_2) {
            return _2.closable;
          }]) && /*#__PURE__*/jsxRuntime.jsx(react.Toast.CloseTrigger, {})]
        });
      }
    })
  });
};

var _excluded$1 = ["variant", "size", "children"],
  _excluded2 = ["variant"];
var variantMap = {
  solid: {
    on: 'solid',
    off: 'outline'
  },
  surface: {
    on: 'surface',
    off: 'outline'
  },
  subtle: {
    on: 'subtle',
    off: 'ghost'
  },
  ghost: {
    on: 'subtle',
    off: 'ghost'
  }
};
var Toggle = /*#__PURE__*/React__namespace.forwardRef(function Toggle(props, ref) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'subtle' : _props$variant,
    size = props.size,
    children = props.children,
    rest = _objectWithoutProperties$1(props, _excluded$1);
  var variantConfig = variantMap[variant];
  return /*#__PURE__*/jsxRuntime.jsx(react.Toggle.Root, _objectSpread2(_objectSpread2({
    asChild: true
  }, rest), {}, {
    children: /*#__PURE__*/jsxRuntime.jsx(ToggleBaseButton, {
      size: size,
      variant: variantConfig,
      ref: ref,
      children: children
    })
  }));
});
var ToggleBaseButton = /*#__PURE__*/React__namespace.forwardRef(function ToggleBaseButton(props, ref) {
  var toggle = react.useToggleContext();
  var variant = props.variant,
    rest = _objectWithoutProperties$1(props, _excluded2);
  return /*#__PURE__*/jsxRuntime.jsx(react.Button, _objectSpread2({
    variant: toggle.pressed ? variant.on : variant.off,
    ref: ref
  }, rest));
});
var ToggleIndicator = react.Toggle.Indicator;

var _excluded = ["showArrow", "children", "disabled", "portalled", "content", "contentProps", "portalRef"];
var Tooltip = /*#__PURE__*/React__namespace.forwardRef(function Tooltip(props, ref) {
  var showArrow = props.showArrow,
    children = props.children,
    disabled = props.disabled,
    portalled = props.portalled,
    content = props.content,
    contentProps = props.contentProps,
    portalRef = props.portalRef,
    rest = _objectWithoutProperties$1(props, _excluded);
  if (disabled) return children;
  return /*#__PURE__*/jsxRuntime.jsxs(react.Tooltip.Root, _objectSpread2(_objectSpread2({}, rest), {}, {
    children: [/*#__PURE__*/jsxRuntime.jsx(react.Tooltip.Trigger, {
      asChild: true,
      children: children
    }), /*#__PURE__*/jsxRuntime.jsx(react.Portal, {
      disabled: !portalled,
      container: portalRef,
      children: /*#__PURE__*/jsxRuntime.jsx(react.Tooltip.Positioner, {
        children: /*#__PURE__*/jsxRuntime.jsxs(react.Tooltip.Content, _objectSpread2(_objectSpread2({
          ref: ref
        }, contentProps), {}, {
          children: [showArrow && /*#__PURE__*/jsxRuntime.jsx(react.Tooltip.Arrow, {
            children: /*#__PURE__*/jsxRuntime.jsx(react.Tooltip.ArrowTip, {})
          }), content]
        }))
      })
    })]
  }));
});

var VisuallyHidden = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/jsxRuntime.jsx(react.VisuallyHidden, _objectSpread2({
    ref: ref
  }, props));
});
VisuallyHidden.displayName = "VisuallyHidden";

Object.defineProperty(exports, "defineAnimationStyles", {
  enumerable: true,
  get: function () { return react.defineAnimationStyles; }
});
Object.defineProperty(exports, "defineGlobalStyles", {
  enumerable: true,
  get: function () { return react.defineGlobalStyles; }
});
Object.defineProperty(exports, "defineLayerStyles", {
  enumerable: true,
  get: function () { return react.defineLayerStyles; }
});
Object.defineProperty(exports, "defineSemanticTokens", {
  enumerable: true,
  get: function () { return react.defineSemanticTokens; }
});
Object.defineProperty(exports, "defineTextStyles", {
  enumerable: true,
  get: function () { return react.defineTextStyles; }
});
Object.defineProperty(exports, "useLocaleContext", {
  enumerable: true,
  get: function () { return react.useLocaleContext; }
});
exports.AbsoluteCenter = AbsoluteCenter;
exports.AccordionItem = AccordionItem;
exports.AccordionItemContent = AccordionItemContent;
exports.AccordionItemTrigger = AccordionItemTrigger;
exports.AccordionRoot = AccordionRoot;
exports.ActionBarCloseTrigger = ActionBarCloseTrigger;
exports.ActionBarContent = ActionBarContent;
exports.ActionBarRoot = ActionBarRoot;
exports.ActionBarSelectionTrigger = ActionBarSelectionTrigger;
exports.ActionBarSeparator = ActionBarSeparator;
exports.Alert = Alert;
exports.AspectRatio = AspectRatio;
exports.Avatar = Avatar;
exports.AvatarGroup = AvatarGroup;
exports.Badge = Badge;
exports.Bleed = Bleed;
exports.Blockquote = Blockquote;
exports.BlockquoteIcon = BlockquoteIcon;
exports.Box = Box;
exports.BreadcrumbCurrentLink = BreadcrumbCurrentLink;
exports.BreadcrumbEllipsis = BreadcrumbEllipsis;
exports.BreadcrumbLink = BreadcrumbLink;
exports.BreadcrumbRoot = BreadcrumbRoot;
exports.Button = Button;
exports.Card = Card;
exports.Center = Center;
exports.Checkbox = Checkbox;
exports.CheckboxCard = CheckboxCard;
exports.CheckboxCardIndicator = CheckboxCardIndicator;
exports.Circle = Circle;
exports.ClientOnly = ClientOnly;
exports.ClipboardButton = ClipboardButton;
exports.ClipboardIconButton = ClipboardIconButton;
exports.ClipboardInput = ClipboardInput;
exports.ClipboardLabel = ClipboardLabel;
exports.ClipboardLink = ClipboardLink;
exports.ClipboardRoot = ClipboardRoot;
exports.CloseButton = CloseButton;
exports.Code = Code;
exports.Collapsible = Collapsible;
exports.ColorModeButton = ColorModeButton;
exports.ColorModeIcon = ColorModeIcon;
exports.ColorModeProvider = ColorModeProvider;
exports.ColorPickerArea = ColorPickerArea;
exports.ColorPickerChannelInput = ColorPickerChannelInput;
exports.ColorPickerChannelInputs = ColorPickerChannelInputs;
exports.ColorPickerChannelSlider = ColorPickerChannelSlider;
exports.ColorPickerChannelSliders = ColorPickerChannelSliders;
exports.ColorPickerContent = ColorPickerContent;
exports.ColorPickerControl = ColorPickerControl;
exports.ColorPickerEyeDropper = ColorPickerEyeDropper;
exports.ColorPickerInlineContent = ColorPickerInlineContent;
exports.ColorPickerInput = ColorPickerInput;
exports.ColorPickerLabel = ColorPickerLabel;
exports.ColorPickerRoot = ColorPickerRoot;
exports.ColorPickerSliders = ColorPickerSliders;
exports.ColorPickerSwatchGroup = ColorPickerSwatchGroup;
exports.ColorPickerSwatchTrigger = ColorPickerSwatchTrigger;
exports.ColorPickerTrigger = ColorPickerTrigger;
exports.ColorPickerValueSwatch = ColorPickerValueSwatch;
exports.ColorPickerValueText = ColorPickerValueText;
exports.ColorSwatch = ColorSwatch;
exports.Container = Container;
exports.DataListItem = DataListItem;
exports.DataListRoot = DataListRoot;
exports.DialogActionTrigger = DialogActionTrigger;
exports.DialogBackdrop = DialogBackdrop;
exports.DialogBody = DialogBody;
exports.DialogCloseTrigger = DialogCloseTrigger;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogRoot = DialogRoot;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.DrawerActionTrigger = DrawerActionTrigger;
exports.DrawerBackdrop = DrawerBackdrop;
exports.DrawerBody = DrawerBody;
exports.DrawerCloseTrigger = DrawerCloseTrigger;
exports.DrawerContent = DrawerContent;
exports.DrawerDescription = DrawerDescription;
exports.DrawerFooter = DrawerFooter;
exports.DrawerHeader = DrawerHeader;
exports.DrawerRoot = DrawerRoot;
exports.DrawerTitle = DrawerTitle;
exports.DrawerTrigger = DrawerTrigger;
exports.Editable = Editable;
exports.Em = Em;
exports.EmptyState = EmptyState;
exports.EnvironmentProvider = EnvironmentProvider;
exports.Field = Field;
exports.Fieldset = Fieldset;
exports.FileInput = FileInput;
exports.FileUploadClearTrigger = FileUploadClearTrigger;
exports.FileUploadDropzone = FileUploadDropzone;
exports.FileUploadLabel = FileUploadLabel;
exports.FileUploadList = FileUploadList;
exports.FileUploadRoot = FileUploadRoot;
exports.FileUploadTrigger = FileUploadTrigger;
exports.Flex = Flex;
exports.Float = Float;
exports.For = For;
exports.FormatByte = FormatByte;
exports.FormatNumber = FormatNumber;
exports.FutureHouseApp = FutureHouseApp;
exports.Grid = Grid;
exports.GridItem = GridItem;
exports.Group = Group;
exports.HStack = HStack;
exports.Highlight = Highlight;
exports.HoverCardArrow = HoverCardArrow;
exports.HoverCardContent = HoverCardContent;
exports.HoverCardRoot = HoverCardRoot;
exports.HoverCardTrigger = HoverCardTrigger;
exports.Icon = Icon;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoTip = InfoTip;
exports.Input = Input;
exports.InputGroup = InputGroup;
exports.Kbd = Kbd;
exports.Link = Link;
exports.LinkBox = LinkBox;
exports.LinkButton = LinkButton;
exports.LinkOverlay = LinkOverlay;
exports.List = List;
exports.LocaleProvider = LocaleProvider;
exports.Mark = Mark;
exports.MenuArrow = MenuArrow;
exports.MenuCheckboxItem = MenuCheckboxItem;
exports.MenuContent = MenuContent;
exports.MenuContextTrigger = MenuContextTrigger;
exports.MenuItem = MenuItem;
exports.MenuItemCommand = MenuItemCommand;
exports.MenuItemGroup = MenuItemGroup;
exports.MenuItemText = MenuItemText;
exports.MenuRadioItem = MenuRadioItem;
exports.MenuRadioItemGroup = MenuRadioItemGroup;
exports.MenuRoot = MenuRoot;
exports.MenuSeparator = MenuSeparator;
exports.MenuTrigger = MenuTrigger;
exports.MenuTriggerItem = MenuTriggerItem;
exports.NativeSelectField = NativeSelectField;
exports.NativeSelectRoot = NativeSelectRoot;
exports.NumberInputField = NumberInputField;
exports.NumberInputLabel = NumberInputLabel;
exports.NumberInputRoot = NumberInputRoot;
exports.NumberInputScruber = NumberInputScruber;
exports.PaginationEllipsis = PaginationEllipsis;
exports.PaginationItem = PaginationItem;
exports.PaginationItems = PaginationItems;
exports.PaginationNextTrigger = PaginationNextTrigger;
exports.PaginationPageText = PaginationPageText;
exports.PaginationPrevTrigger = PaginationPrevTrigger;
exports.PaginationRoot = PaginationRoot;
exports.PasswordInput = PasswordInput;
exports.PasswordStrengthMeter = PasswordStrengthMeter;
exports.PinInput = PinInput;
exports.PopoverArrow = PopoverArrow;
exports.PopoverBody = PopoverBody;
exports.PopoverCloseTrigger = PopoverCloseTrigger;
exports.PopoverContent = PopoverContent;
exports.PopoverDescription = PopoverDescription;
exports.PopoverFooter = PopoverFooter;
exports.PopoverHeader = PopoverHeader;
exports.PopoverRoot = PopoverRoot;
exports.PopoverTitle = PopoverTitle;
exports.PopoverTrigger = PopoverTrigger;
exports.Portal = Portal;
exports.ProgressBar = ProgressBar;
exports.ProgressCircleRing = ProgressCircleRing;
exports.ProgressCircleRoot = ProgressCircleRoot;
exports.ProgressCircleValueText = ProgressCircleValueText;
exports.ProgressLabel = ProgressLabel;
exports.ProgressRoot = ProgressRoot;
exports.ProgressValueText = ProgressValueText;
exports.Prose = Prose;
exports.Provider = Provider;
exports.Radio = Radio;
exports.RadioCardItem = RadioCardItem;
exports.RadioCardItemIndicator = RadioCardItemIndicator;
exports.RadioCardLabel = RadioCardLabel;
exports.RadioCardRoot = RadioCardRoot;
exports.RadioGroup = RadioGroup;
exports.Rating = Rating;
exports.SegmentedControl = SegmentedControl;
exports.SelectContent = SelectContent;
exports.SelectItem = SelectItem;
exports.SelectItemGroup = SelectItemGroup;
exports.SelectItemText = SelectItemText;
exports.SelectLabel = SelectLabel;
exports.SelectRoot = SelectRoot;
exports.SelectTrigger = SelectTrigger;
exports.SelectValueText = SelectValueText;
exports.Separator = Separator;
exports.Show = Show;
exports.SimpleGrid = SimpleGrid;
exports.Skeleton = Skeleton;
exports.SkeletonCircle = SkeletonCircle;
exports.SkeletonText = SkeletonText;
exports.Slider = Slider;
exports.Spinner = Spinner;
exports.Square = Square;
exports.Stack = Stack;
exports.StatDownTrend = StatDownTrend;
exports.StatHelpText = StatHelpText;
exports.StatLabel = StatLabel;
exports.StatRoot = StatRoot;
exports.StatUpTrend = StatUpTrend;
exports.StatValueText = StatValueText;
exports.StatValueUnit = StatValueUnit;
exports.Status = Status;
exports.StepperInput = StepperInput;
exports.StepsCompletedContent = StepsCompletedContent;
exports.StepsContent = StepsContent;
exports.StepsIndicator = StepsIndicator;
exports.StepsItem = StepsItem;
exports.StepsList = StepsList;
exports.StepsNextTrigger = StepsNextTrigger;
exports.StepsPrevTrigger = StepsPrevTrigger;
exports.StepsRoot = StepsRoot;
exports.Switch = Switch;
exports.Table = Table;
exports.Tabs = Tabs;
exports.Tag = Tag;
exports.Text = Text;
exports.Textarea = Textarea;
exports.Theme = Theme;
exports.TimelineConnector = TimelineConnector;
exports.TimelineContent = TimelineContent;
exports.TimelineDescription = TimelineDescription;
exports.TimelineIndicator = TimelineIndicator;
exports.TimelineItem = TimelineItem;
exports.TimelineRoot = TimelineRoot;
exports.TimelineTitle = TimelineTitle;
exports.Toaster = Toaster;
exports.Toggle = Toggle;
exports.ToggleIndicator = ToggleIndicator;
exports.ToggleTip = ToggleTip;
exports.Tooltip = Tooltip;
exports.VStack = VStack;
exports.VisuallyHidden = VisuallyHidden;
exports.system = system;
exports.textStyles = textStyles;
exports.toaster = toaster;
exports.useColorMode = useColorMode;
exports.useColorModeValue = useColorModeValue;
//# sourceMappingURL=index.js.map
