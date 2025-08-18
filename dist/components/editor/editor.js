import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "placeholder", "value", "onChange", "onValueChange", "slashCommands", "showToolbar", "showMarkdownToggle", "autoFocus", "disabled", "aria-invalid"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { $getRoot } from 'lexical';
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
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';
import { TablePlugin } from '@lexical/react/LexicalTablePlugin';
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin';
import { HashtagPlugin } from '@lexical/react/LexicalHashtagPlugin';
import { AutoLinkPlugin } from '@lexical/react/LexicalAutoLinkPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { $convertFromMarkdownString } from '@lexical/markdown';

// Node imports
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeNode, CodeHighlightNode } from '@lexical/code';
import { LinkNode, AutoLinkNode } from '@lexical/link';
import { TableNode, TableCellNode, TableRowNode } from '@lexical/table';
import { HashtagNode } from '@lexical/hashtag';
import { cva } from 'class-variance-authority';
import { cn } from "../../lib/utils";
import { EditorToolbar } from "./editor-toolbar";
import { SlashCommandPlugin } from "./plugins/slash-command-plugin";
import { MarkdownTogglePlugin } from "./plugins/markdown-toggle-plugin";
import { CodeHighlightPlugin } from "./plugins/code-highlight-plugin";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var editorVariants = cva('relative w-full bg-background text-base shadow-xs transition-colors placeholder:text-muted-foreground aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 disabled:cursor-not-allowed disabled:opacity-50 min-h-32 p-3');
var nodes = [HeadingNode, ListNode, ListItemNode, QuoteNode, CodeNode, CodeHighlightNode, LinkNode, AutoLinkNode, TableNode, TableCellNode, TableRowNode, HashtagNode];
var theme = {
  ltr: 'ltr',
  rtl: 'rtl',
  placeholder: 'text-muted-foreground relative pointer-events-none inline-block',
  paragraph: 'mb-1 relative',
  quote: 'border-l-4 border-muted-foreground/20 pl-4 italic my-2',
  heading: {
    h1: 'scroll-m-20 text-4xl lg:text-5xl',
    h2: 'scroll-m-20 text-3xl',
    h3: 'scroll-m-20 text-2xl',
    h4: 'scroll-m-20 text-xl',
    h5: 'scroll-m-20 text-lg',
    h6: 'scroll-m-20 text-base'
  },
  list: {
    nested: {
      listitem: 'list-none'
    },
    ol: 'list-decimal list-inside',
    ul: 'list-disc list-inside',
    listitem: 'mb-1',
    listitemChecked: 'line-through text-muted-foreground',
    listitemUnchecked: '',
    checklist: 'list-none'
  },
  hashtag: 'text-blue-600 hover:text-blue-800 cursor-pointer',
  link: 'text-blue-600 underline hover:text-blue-800 cursor-pointer',
  text: {
    bold: 'font-bold',
    italic: 'italic',
    underline: 'underline',
    strikethrough: 'line-through',
    underlineStrikethrough: 'underline line-through',
    code: 'bg-muted px-1 py-0.5 rounded font-mono ',
    // inline code
    highlight: 'bg-yellow-200 dark:bg-yellow-800',
    subscript: 'text-xs align-sub',
    superscript: 'text-xs align-super'
  },
  code: 'Editor-code block bg-card overflow-x-auto',
  // code block
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
  },
  table: 'border-collapse border border-border my-4',
  tableCell: 'border border-border px-3 py-2 min-w-16',
  tableCellHeader: 'border border-border px-3 py-2 bg-muted font-bold text-left',
  hr: 'border-none bg-border h-px my-4'
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

/**
 * TODO:
 * - Add keyboard shortcuts
 */
function Editor(t0) {
  var $ = _c(66);
  var _value;
  var ariaInvalid;
  var className;
  var onChange;
  var onValueChange;
  var props;
  var t1;
  var t2;
  var t3;
  var t4;
  var t5;
  var t6;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    t1 = _t.placeholder;
    _value = _t.value;
    onChange = _t.onChange;
    onValueChange = _t.onValueChange;
    t2 = _t.slashCommands;
    t3 = _t.showToolbar;
    t4 = _t.showMarkdownToggle;
    t5 = _t.autoFocus;
    t6 = _t.disabled;
    ariaInvalid = _t["aria-invalid"];
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = _value;
    $[2] = ariaInvalid;
    $[3] = className;
    $[4] = onChange;
    $[5] = onValueChange;
    $[6] = props;
    $[7] = t1;
    $[8] = t2;
    $[9] = t3;
    $[10] = t4;
    $[11] = t5;
    $[12] = t6;
  } else {
    _value = $[1];
    ariaInvalid = $[2];
    className = $[3];
    onChange = $[4];
    onValueChange = $[5];
    props = $[6];
    t1 = $[7];
    t2 = $[8];
    t3 = $[9];
    t4 = $[10];
    t5 = $[11];
    t6 = $[12];
  }
  var placeholder = t1 === undefined ? "Start typing..." : t1;
  var t7;
  if ($[13] !== t2) {
    t7 = t2 === undefined ? [] : t2;
    $[13] = t2;
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  var slashCommands = t7;
  var showToolbar = t3 === undefined ? true : t3;
  var showMarkdownToggle = t4 === undefined ? true : t4;
  var autoFocus = t5 === undefined ? false : t5;
  var disabled = t6 === undefined ? false : t6;
  var t8;
  var t9 = !disabled;
  var t10;
  if ($[15] !== _value) {
    t10 = _value ? function () {
      return $convertFromMarkdownString(_value, TRANSFORMERS);
    } : undefined;
    $[15] = _value;
    $[16] = t10;
  } else {
    t10 = $[16];
  }
  var t11;
  if ($[17] !== t10 || $[18] !== t9) {
    t11 = {
      namespace: "Editor",
      theme: theme,
      onError: _temp,
      nodes: nodes,
      editable: t9,
      editorState: t10
    };
    $[17] = t10;
    $[18] = t9;
    $[19] = t11;
  } else {
    t11 = $[19];
  }
  t8 = t11;
  var initialConfig = t8;
  var t12;
  if ($[20] !== onChange || $[21] !== onValueChange) {
    t12 = function t12(editorState) {
      var _onChange;
      (_onChange = onChange) === null || _onChange === void 0 || _onChange(editorState);
      if (onValueChange) {
        editorState.read(function () {
          var root = $getRoot();
          var textContent = root.getTextContent();
          onValueChange(textContent);
        });
      }
    };
    $[20] = onChange;
    $[21] = onValueChange;
    $[22] = t12;
  } else {
    t12 = $[22];
  }
  var handleEditorChange = t12;
  var t13;
  if ($[23] !== className) {
    t13 = cn("border-input bg-background flex flex-wrap items-center gap-1 rounded-md border p-1", className);
    $[23] = className;
    $[24] = t13;
  } else {
    t13 = $[24];
  }
  var t14;
  if ($[25] !== showToolbar) {
    t14 = showToolbar && /*#__PURE__*/_jsx(EditorToolbar, {});
    $[25] = showToolbar;
    $[26] = t14;
  } else {
    t14 = $[26];
  }
  var t15;
  if ($[27] !== disabled) {
    t15 = cn(editorVariants(), {
      "cursor-not-allowed opacity-50": disabled
    });
    $[27] = disabled;
    $[28] = t15;
  } else {
    t15 = $[28];
  }
  var t16;
  if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
    t16 = /*#__PURE__*/_jsx(ContentEditable, {
      className: "resize-none overflow-hidden outline-none",
      spellCheck: false
    });
    $[29] = t16;
  } else {
    t16 = $[29];
  }
  var t17;
  if ($[30] !== placeholder) {
    t17 = /*#__PURE__*/_jsx(RichTextPlugin, {
      contentEditable: t16,
      placeholder: /*#__PURE__*/_jsx(EditorPlaceholder, {
        children: placeholder
      }),
      ErrorBoundary: LexicalErrorBoundary
    });
    $[30] = placeholder;
    $[31] = t17;
  } else {
    t17 = $[31];
  }
  var t18;
  if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
    t18 = /*#__PURE__*/_jsx(HistoryPlugin, {});
    $[32] = t18;
  } else {
    t18 = $[32];
  }
  var t19;
  if ($[33] !== autoFocus) {
    t19 = autoFocus && /*#__PURE__*/_jsx(AutoFocusPlugin, {});
    $[33] = autoFocus;
    $[34] = t19;
  } else {
    t19 = $[34];
  }
  var t20;
  if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
    t20 = /*#__PURE__*/_jsx(LinkPlugin, {});
    $[35] = t20;
  } else {
    t20 = $[35];
  }
  var t21;
  var t22;
  var t23;
  var t24;
  var t25;
  var t26;
  var t27;
  if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
    t21 = /*#__PURE__*/_jsx(AutoLinkPlugin, {
      matchers: []
    });
    t22 = /*#__PURE__*/_jsx(ListPlugin, {});
    t23 = /*#__PURE__*/_jsx(CheckListPlugin, {});
    t24 = /*#__PURE__*/_jsx(TablePlugin, {
      hasCellMerge: true,
      hasCellBackgroundColor: true
    });
    t25 = /*#__PURE__*/_jsx(HashtagPlugin, {});
    t26 = /*#__PURE__*/_jsx(TabIndentationPlugin, {});
    t27 = /*#__PURE__*/_jsx(MarkdownShortcutPlugin, {
      transformers: TRANSFORMERS
    });
    $[36] = t21;
    $[37] = t22;
    $[38] = t23;
    $[39] = t24;
    $[40] = t25;
    $[41] = t26;
    $[42] = t27;
  } else {
    t21 = $[36];
    t22 = $[37];
    t23 = $[38];
    t24 = $[39];
    t25 = $[40];
    t26 = $[41];
    t27 = $[42];
  }
  var t28;
  if ($[43] !== handleEditorChange) {
    t28 = /*#__PURE__*/_jsx(OnChangePlugin, {
      onChange: handleEditorChange
    });
    $[43] = handleEditorChange;
    $[44] = t28;
  } else {
    t28 = $[44];
  }
  var t29;
  if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
    t29 = /*#__PURE__*/_jsx(CodeHighlightPlugin, {});
    $[45] = t29;
  } else {
    t29 = $[45];
  }
  var t30;
  if ($[46] !== slashCommands) {
    t30 = slashCommands.length > 0 && /*#__PURE__*/_jsx(SlashCommandPlugin, {
      commands: slashCommands
    });
    $[46] = slashCommands;
    $[47] = t30;
  } else {
    t30 = $[47];
  }
  var t31;
  if ($[48] !== ariaInvalid || $[49] !== t15 || $[50] !== t17 || $[51] !== t19 || $[52] !== t28 || $[53] !== t30) {
    t31 = /*#__PURE__*/_jsxs("div", {
      className: t15,
      "aria-invalid": ariaInvalid,
      children: [t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30]
    });
    $[48] = ariaInvalid;
    $[49] = t15;
    $[50] = t17;
    $[51] = t19;
    $[52] = t28;
    $[53] = t30;
    $[54] = t31;
  } else {
    t31 = $[54];
  }
  var t32;
  if ($[55] !== showMarkdownToggle) {
    t32 = showMarkdownToggle && /*#__PURE__*/_jsx("div", {
      "data-slot": "actions-bar",
      className: "border-input flex w-full justify-end border-t-1 py-1",
      children: /*#__PURE__*/_jsx(MarkdownTogglePlugin, {})
    });
    $[55] = showMarkdownToggle;
    $[56] = t32;
  } else {
    t32 = $[56];
  }
  var t33;
  if ($[57] !== initialConfig || $[58] !== t14 || $[59] !== t31 || $[60] !== t32) {
    t33 = /*#__PURE__*/_jsxs(LexicalComposer, {
      initialConfig: initialConfig,
      children: [t14, t31, t32]
    });
    $[57] = initialConfig;
    $[58] = t14;
    $[59] = t31;
    $[60] = t32;
    $[61] = t33;
  } else {
    t33 = $[61];
  }
  var t34;
  if ($[62] !== props || $[63] !== t13 || $[64] !== t33) {
    t34 = /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
      className: t13
    }, props), {}, {
      children: t33
    }));
    $[62] = props;
    $[63] = t13;
    $[64] = t33;
    $[65] = t34;
  } else {
    t34 = $[65];
  }
  return t34;
}
function _temp(error) {
  console.error("Lexical error:", error);
}
export { Editor, editorVariants };

//# sourceMappingURL=editor.js.map