import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "size", "placeholder", "value", "onChange", "onValueChange", "slashCommands", "showToolbar", "showMarkdownToggle", "autoFocus", "disabled", "aria-invalid"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { TRANSFORMERS } from '@lexical/markdown';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeNode, CodeHighlightNode } from '@lexical/code';
import { LinkNode, AutoLinkNode } from '@lexical/link';
import { cva } from 'class-variance-authority';
import { cn } from "../../lib/utils";
import { EditorToolbar } from "./editor-toolbar";
import { SlashCommandPlugin } from "./plugins/slash-command-plugin";
import { MarkdownTogglePlugin } from "./plugins/markdown-toggle-plugin";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var editorVariants = cva('relative w-full rounded-md border border-input bg-background text-base shadow-xs transition-colors placeholder:text-muted-foreground focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 disabled:cursor-not-allowed disabled:opacity-50', {
  variants: {
    size: {
      sm: 'min-h-20 p-2 text-sm',
      default: 'min-h-32 p-3',
      lg: 'min-h-40 p-4 text-lg'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});
var nodes = [HeadingNode, ListNode, ListItemNode, QuoteNode, CodeNode, CodeHighlightNode, LinkNode, AutoLinkNode];
var theme = {
  ltr: 'ltr',
  rtl: 'rtl',
  placeholder: 'text-muted-foreground',
  paragraph: 'mb-1',
  quote: 'border-l-4 border-muted-foreground/20 pl-4 italic',
  heading: {
    h1: 'text-3xl font-bold mb-2',
    h2: 'text-2xl font-bold mb-2',
    h3: 'text-xl font-bold mb-1',
    h4: 'text-lg font-bold mb-1',
    h5: 'text-base font-bold mb-1',
    h6: 'text-sm font-bold mb-1'
  },
  list: {
    nested: {
      listitem: 'list-none'
    },
    ol: 'list-decimal list-inside',
    ul: 'list-disc list-inside',
    listitem: 'mb-1'
  },
  link: 'text-blue-600 underline hover:text-blue-800',
  text: {
    bold: 'font-bold',
    italic: 'italic',
    underline: 'underline',
    strikethrough: 'line-through',
    code: 'bg-muted px-1.5 py-0.5 rounded text-sm font-mono'
  },
  code: 'bg-muted p-4 rounded-md font-mono text-sm block',
  codeHighlight: {
    atrule: 'text-purple-600',
    attr: 'text-blue-600',
    boolean: 'text-red-600',
    builtin: 'text-purple-600',
    cdata: 'text-gray-600',
    char: 'text-green-600',
    class: 'text-blue-600',
    'class-name': 'text-blue-600',
    comment: 'text-gray-600 italic',
    constant: 'text-red-600',
    deleted: 'text-red-600',
    doctype: 'text-gray-600',
    entity: 'text-red-600',
    function: 'text-purple-600',
    important: 'text-red-600',
    inserted: 'text-green-600',
    keyword: 'text-purple-600',
    namespace: 'text-blue-600',
    number: 'text-red-600',
    operator: 'text-gray-800',
    prolog: 'text-gray-600',
    property: 'text-blue-600',
    punctuation: 'text-gray-800',
    regex: 'text-green-600',
    selector: 'text-green-600',
    string: 'text-green-600',
    symbol: 'text-red-600',
    tag: 'text-blue-600',
    url: 'text-blue-600',
    variable: 'text-blue-600'
  }
};
function EditorPlaceholder(t0) {
  var $ = _c(2);
  var children = t0.children;
  var t1;
  if ($[0] !== children) {
    t1 = /*#__PURE__*/_jsx("div", {
      className: "text-muted-foreground pointer-events-none absolute top-3 left-3 select-none",
      children: children
    });
    $[0] = children;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
}
function Editor(t0) {
  var $ = _c(50);
  var ariaInvalid;
  var className;
  var props;
  var size;
  var t1;
  var t2;
  var t3;
  var t4;
  var t5;
  var t6;
  if ($[0] !== t0) {
    var _t = t0.className,
      _t2 = t0.size,
      _t3 = t0.placeholder,
      _value = t0.value,
      _onChange = t0.onChange,
      _onValueChange = t0.onValueChange,
      _t4 = t0.slashCommands,
      _t5 = t0.showToolbar,
      _t6 = t0.showMarkdownToggle,
      _t7 = t0.autoFocus,
      _t8 = t0.disabled,
      _t9 = t0["aria-invalid"],
      _t0 = _objectWithoutProperties(t0, _excluded);
    className = _t;
    size = _t2;
    t1 = _t3;
    t2 = _t4;
    t3 = _t5;
    t4 = _t6;
    t5 = _t7;
    t6 = _t8;
    ariaInvalid = _t9;
    props = _t0;
    $[0] = t0;
    $[1] = ariaInvalid;
    $[2] = className;
    $[3] = props;
    $[4] = size;
    $[5] = t1;
    $[6] = t2;
    $[7] = t3;
    $[8] = t4;
    $[9] = t5;
    $[10] = t6;
  } else {
    ariaInvalid = $[1];
    className = $[2];
    props = $[3];
    size = $[4];
    t1 = $[5];
    t2 = $[6];
    t3 = $[7];
    t4 = $[8];
    t5 = $[9];
    t6 = $[10];
  }
  var placeholder = t1 === undefined ? "Start typing..." : t1;
  var t7;
  if ($[11] !== t2) {
    t7 = t2 === undefined ? [] : t2;
    $[11] = t2;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  var slashCommands = t7;
  var showToolbar = t3 === undefined ? true : t3;
  var showMarkdownToggle = t4 === undefined ? true : t4;
  var autoFocus = t5 === undefined ? false : t5;
  var disabled = t6 === undefined ? false : t6;
  var t8;
  var t9 = !disabled;
  var t10;
  if ($[13] !== t9) {
    t10 = {
      namespace: "Editor",
      theme: theme,
      onError: _temp,
      nodes: nodes,
      editable: t9
    };
    $[13] = t9;
    $[14] = t10;
  } else {
    t10 = $[14];
  }
  t8 = t10;
  var initialConfig = t8;
  var t11;
  if ($[15] !== className) {
    t11 = cn("space-y-2", className);
    $[15] = className;
    $[16] = t11;
  } else {
    t11 = $[16];
  }
  var t12;
  if ($[17] !== showToolbar) {
    t12 = showToolbar && /*#__PURE__*/_jsx(EditorToolbar, {});
    $[17] = showToolbar;
    $[18] = t12;
  } else {
    t12 = $[18];
  }
  var t13;
  if ($[19] !== disabled || $[20] !== size) {
    t13 = cn(editorVariants({
      size: size
    }), {
      "cursor-not-allowed opacity-50": disabled
    });
    $[19] = disabled;
    $[20] = size;
    $[21] = t13;
  } else {
    t13 = $[21];
  }
  var t14;
  if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
    t14 = /*#__PURE__*/_jsx(ContentEditable, {
      className: "resize-none overflow-hidden outline-none",
      spellCheck: false
    });
    $[22] = t14;
  } else {
    t14 = $[22];
  }
  var t15;
  if ($[23] !== placeholder) {
    t15 = /*#__PURE__*/_jsx(RichTextPlugin, {
      contentEditable: t14,
      placeholder: /*#__PURE__*/_jsx(EditorPlaceholder, {
        children: placeholder
      }),
      ErrorBoundary: LexicalErrorBoundary
    });
    $[23] = placeholder;
    $[24] = t15;
  } else {
    t15 = $[24];
  }
  var t16;
  if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
    t16 = /*#__PURE__*/_jsx(HistoryPlugin, {});
    $[25] = t16;
  } else {
    t16 = $[25];
  }
  var t17;
  if ($[26] !== autoFocus) {
    t17 = autoFocus && /*#__PURE__*/_jsx(AutoFocusPlugin, {});
    $[26] = autoFocus;
    $[27] = t17;
  } else {
    t17 = $[27];
  }
  var t18;
  var t19;
  var t20;
  if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
    t18 = /*#__PURE__*/_jsx(LinkPlugin, {});
    t19 = /*#__PURE__*/_jsx(ListPlugin, {});
    t20 = /*#__PURE__*/_jsx(MarkdownShortcutPlugin, {
      transformers: TRANSFORMERS
    });
    $[28] = t18;
    $[29] = t19;
    $[30] = t20;
  } else {
    t18 = $[28];
    t19 = $[29];
    t20 = $[30];
  }
  var t21;
  if ($[31] !== slashCommands) {
    t21 = slashCommands.length > 0 && /*#__PURE__*/_jsx(SlashCommandPlugin, {
      commands: slashCommands
    });
    $[31] = slashCommands;
    $[32] = t21;
  } else {
    t21 = $[32];
  }
  var t22;
  if ($[33] !== showMarkdownToggle) {
    t22 = showMarkdownToggle && /*#__PURE__*/_jsx(MarkdownTogglePlugin, {});
    $[33] = showMarkdownToggle;
    $[34] = t22;
  } else {
    t22 = $[34];
  }
  var t23;
  if ($[35] !== ariaInvalid || $[36] !== t13 || $[37] !== t15 || $[38] !== t17 || $[39] !== t21 || $[40] !== t22) {
    t23 = /*#__PURE__*/_jsxs("div", {
      className: t13,
      "aria-invalid": ariaInvalid,
      children: [t15, t16, t17, t18, t19, t20, t21, t22]
    });
    $[35] = ariaInvalid;
    $[36] = t13;
    $[37] = t15;
    $[38] = t17;
    $[39] = t21;
    $[40] = t22;
    $[41] = t23;
  } else {
    t23 = $[41];
  }
  var t24;
  if ($[42] !== initialConfig || $[43] !== t12 || $[44] !== t23) {
    t24 = /*#__PURE__*/_jsxs(LexicalComposer, {
      initialConfig: initialConfig,
      children: [t12, t23]
    });
    $[42] = initialConfig;
    $[43] = t12;
    $[44] = t23;
    $[45] = t24;
  } else {
    t24 = $[45];
  }
  var t25;
  if ($[46] !== props || $[47] !== t11 || $[48] !== t24) {
    t25 = /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
      className: t11
    }, props), {}, {
      children: t24
    }));
    $[46] = props;
    $[47] = t11;
    $[48] = t24;
    $[49] = t25;
  } else {
    t25 = $[49];
  }
  return t25;
}
function _temp(error) {
  console.error("Lexical error:", error);
}
export { Editor, editorVariants };

//# sourceMappingURL=editor.js.map