import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND, UNDO_COMMAND, REDO_COMMAND, CAN_UNDO_COMMAND, CAN_REDO_COMMAND } from 'lexical';
import { $setBlocksType } from '@lexical/selection';
import { $createHeadingNode, $createQuoteNode } from '@lexical/rich-text';
import { $createCodeNode } from '@lexical/code';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { Bold, Italic, Underline, Code, Link, Undo, Redo, Heading1, Heading2, Heading3, Quote } from 'lucide-react';
import { cn } from "../../lib/utils";
import { Toggle } from "../toggle";
import { Button } from "../button";
import { Separator } from "../separator";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function EditorToolbar(t0) {
  var $ = _c(95);
  var className = t0.className;
  var _useLexicalComposerCo = useLexicalComposerContext(),
    _useLexicalComposerCo2 = _slicedToArray(_useLexicalComposerCo, 1),
    editor = _useLexicalComposerCo2[0];
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isBold = _React$useState2[0],
    setIsBold = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    isItalic = _React$useState4[0],
    setIsItalic = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    isUnderline = _React$useState6[0],
    setIsUnderline = _React$useState6[1];
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    isCode = _React$useState8[0],
    setIsCode = _React$useState8[1];
  var _React$useState9 = React.useState(false),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    isLink = _React$useState0[0],
    setIsLink = _React$useState0[1];
  var _React$useState1 = React.useState(false),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    canUndo = _React$useState10[0],
    setCanUndo = _React$useState10[1];
  var _React$useState11 = React.useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    canRedo = _React$useState12[0],
    setCanRedo = _React$useState12[1];
  var t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = function t1() {
      var selection = $getSelection();
      if ($isRangeSelection(selection)) {
        setIsBold(selection.hasFormat("bold"));
        setIsItalic(selection.hasFormat("italic"));
        setIsUnderline(selection.hasFormat("underline"));
        setIsCode(selection.hasFormat("code"));
        var node = selection.anchor.getNode();
        var parent = node.getParent();
        setIsLink($isLinkNode(parent) || $isLinkNode(node));
      }
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  var updateToolbar = t1;
  var t2;
  var t3;
  if ($[1] !== editor) {
    t2 = function t2() {
      var unregisterListener = editor.registerUpdateListener(function (t4) {
        var editorState = t4.editorState;
        editorState.read(function () {
          updateToolbar();
        });
      });
      var unregisterCommandUndo = editor.registerCommand(CAN_UNDO_COMMAND, function (payload) {
        setCanUndo(payload);
        return false;
      }, 1);
      var unregisterCommandRedo = editor.registerCommand(CAN_REDO_COMMAND, function (payload_0) {
        setCanRedo(payload_0);
        return false;
      }, 1);
      return function () {
        unregisterListener();
        unregisterCommandUndo();
        unregisterCommandRedo();
      };
    };
    t3 = [editor, updateToolbar];
    $[1] = editor;
    $[2] = t2;
    $[3] = t3;
  } else {
    t2 = $[2];
    t3 = $[3];
  }
  React.useEffect(t2, t3);
  var t4;
  if ($[4] !== editor) {
    t4 = function t4(format) {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
    };
    $[4] = editor;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  var formatText = t4;
  var t5;
  if ($[6] !== editor || $[7] !== isLink) {
    t5 = function t5() {
      if (!isLink) {
        var url = prompt("Enter URL:");
        if (url) {
          editor.dispatchCommand(TOGGLE_LINK_COMMAND, url);
        }
      } else {
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
      }
    };
    $[6] = editor;
    $[7] = isLink;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  var insertLink = t5;
  var t6;
  if ($[9] !== editor) {
    t6 = function t6(headingSize) {
      editor.update(function () {
        var selection_0 = $getSelection();
        if ($isRangeSelection(selection_0)) {
          $setBlocksType(selection_0, function () {
            return $createHeadingNode(headingSize);
          });
        }
      });
    };
    $[9] = editor;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  var formatHeading = t6;
  var t7;
  if ($[11] !== editor) {
    t7 = function t7() {
      editor.update(_temp2);
    };
    $[11] = editor;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  var formatQuote = t7;
  var t8;
  if ($[13] !== editor) {
    t8 = function t8() {
      editor.update(_temp4);
    };
    $[13] = editor;
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  var formatCodeBlock = t8;
  var t9;
  if ($[15] !== className) {
    t9 = cn("border-input bg-background flex flex-wrap items-center gap-1 rounded-md border p-1", className);
    $[15] = className;
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  var t10;
  if ($[17] !== editor) {
    t10 = function t10() {
      return editor.dispatchCommand(UNDO_COMMAND, undefined);
    };
    $[17] = editor;
    $[18] = t10;
  } else {
    t10 = $[18];
  }
  var t11 = !canUndo;
  var t12;
  if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = /*#__PURE__*/_jsx(Undo, {
      className: "size-4"
    });
    $[19] = t12;
  } else {
    t12 = $[19];
  }
  var t13;
  if ($[20] !== t10 || $[21] !== t11) {
    t13 = /*#__PURE__*/_jsx(Button, {
      variant: "ghost",
      size: "icon",
      onClick: t10,
      disabled: t11,
      title: "Undo",
      children: t12
    });
    $[20] = t10;
    $[21] = t11;
    $[22] = t13;
  } else {
    t13 = $[22];
  }
  var t14;
  if ($[23] !== editor) {
    t14 = function t14() {
      return editor.dispatchCommand(REDO_COMMAND, undefined);
    };
    $[23] = editor;
    $[24] = t14;
  } else {
    t14 = $[24];
  }
  var t15 = !canRedo;
  var t16;
  if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
    t16 = /*#__PURE__*/_jsx(Redo, {
      className: "size-4"
    });
    $[25] = t16;
  } else {
    t16 = $[25];
  }
  var t17;
  if ($[26] !== t14 || $[27] !== t15) {
    t17 = /*#__PURE__*/_jsx(Button, {
      variant: "ghost",
      size: "icon",
      onClick: t14,
      disabled: t15,
      title: "Redo",
      children: t16
    });
    $[26] = t14;
    $[27] = t15;
    $[28] = t17;
  } else {
    t17 = $[28];
  }
  var t18;
  if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
    t18 = /*#__PURE__*/_jsx(Separator, {
      orientation: "vertical",
      className: "mx-1 h-6"
    });
    $[29] = t18;
  } else {
    t18 = $[29];
  }
  var t19;
  if ($[30] !== formatText) {
    t19 = function t19() {
      return formatText("bold");
    };
    $[30] = formatText;
    $[31] = t19;
  } else {
    t19 = $[31];
  }
  var t20;
  if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
    t20 = /*#__PURE__*/_jsx(Bold, {
      className: "size-4"
    });
    $[32] = t20;
  } else {
    t20 = $[32];
  }
  var t21;
  if ($[33] !== isBold || $[34] !== t19) {
    t21 = /*#__PURE__*/_jsx(Toggle, {
      pressed: isBold,
      onPressedChange: t19,
      "aria-label": "Bold",
      title: "Bold",
      size: "sm",
      children: t20
    });
    $[33] = isBold;
    $[34] = t19;
    $[35] = t21;
  } else {
    t21 = $[35];
  }
  var t22;
  if ($[36] !== formatText) {
    t22 = function t22() {
      return formatText("italic");
    };
    $[36] = formatText;
    $[37] = t22;
  } else {
    t22 = $[37];
  }
  var t23;
  if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
    t23 = /*#__PURE__*/_jsx(Italic, {
      className: "size-4"
    });
    $[38] = t23;
  } else {
    t23 = $[38];
  }
  var t24;
  if ($[39] !== isItalic || $[40] !== t22) {
    t24 = /*#__PURE__*/_jsx(Toggle, {
      pressed: isItalic,
      onPressedChange: t22,
      "aria-label": "Italic",
      title: "Italic",
      size: "sm",
      children: t23
    });
    $[39] = isItalic;
    $[40] = t22;
    $[41] = t24;
  } else {
    t24 = $[41];
  }
  var t25;
  if ($[42] !== formatText) {
    t25 = function t25() {
      return formatText("underline");
    };
    $[42] = formatText;
    $[43] = t25;
  } else {
    t25 = $[43];
  }
  var t26;
  if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
    t26 = /*#__PURE__*/_jsx(Underline, {
      className: "size-4"
    });
    $[44] = t26;
  } else {
    t26 = $[44];
  }
  var t27;
  if ($[45] !== isUnderline || $[46] !== t25) {
    t27 = /*#__PURE__*/_jsx(Toggle, {
      pressed: isUnderline,
      onPressedChange: t25,
      "aria-label": "Underline",
      title: "Underline",
      size: "sm",
      children: t26
    });
    $[45] = isUnderline;
    $[46] = t25;
    $[47] = t27;
  } else {
    t27 = $[47];
  }
  var t28;
  if ($[48] !== formatText) {
    t28 = function t28() {
      return formatText("code");
    };
    $[48] = formatText;
    $[49] = t28;
  } else {
    t28 = $[49];
  }
  var t29;
  if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
    t29 = /*#__PURE__*/_jsx(Code, {
      className: "size-4"
    });
    $[50] = t29;
  } else {
    t29 = $[50];
  }
  var t30;
  if ($[51] !== isCode || $[52] !== t28) {
    t30 = /*#__PURE__*/_jsx(Toggle, {
      pressed: isCode,
      onPressedChange: t28,
      "aria-label": "Code",
      title: "Inline Code",
      size: "sm",
      children: t29
    });
    $[51] = isCode;
    $[52] = t28;
    $[53] = t30;
  } else {
    t30 = $[53];
  }
  var t31;
  if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
    t31 = /*#__PURE__*/_jsx(Separator, {
      orientation: "vertical",
      className: "mx-1 h-6"
    });
    $[54] = t31;
  } else {
    t31 = $[54];
  }
  var t32;
  if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
    t32 = /*#__PURE__*/_jsx(Link, {
      className: "size-4"
    });
    $[55] = t32;
  } else {
    t32 = $[55];
  }
  var t33;
  if ($[56] !== insertLink || $[57] !== isLink) {
    t33 = /*#__PURE__*/_jsx(Toggle, {
      pressed: isLink,
      onPressedChange: insertLink,
      "aria-label": "Link",
      title: "Insert Link",
      size: "sm",
      children: t32
    });
    $[56] = insertLink;
    $[57] = isLink;
    $[58] = t33;
  } else {
    t33 = $[58];
  }
  var t34;
  if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
    t34 = /*#__PURE__*/_jsx(Separator, {
      orientation: "vertical",
      className: "mx-1 h-6"
    });
    $[59] = t34;
  } else {
    t34 = $[59];
  }
  var t35;
  if ($[60] !== formatHeading) {
    t35 = function t35() {
      return formatHeading("h1");
    };
    $[60] = formatHeading;
    $[61] = t35;
  } else {
    t35 = $[61];
  }
  var t36;
  if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
    t36 = /*#__PURE__*/_jsx(Heading1, {
      className: "size-4"
    });
    $[62] = t36;
  } else {
    t36 = $[62];
  }
  var t37;
  if ($[63] !== t35) {
    t37 = /*#__PURE__*/_jsx(Button, {
      variant: "ghost",
      size: "icon",
      onClick: t35,
      title: "Heading 1",
      children: t36
    });
    $[63] = t35;
    $[64] = t37;
  } else {
    t37 = $[64];
  }
  var t38;
  if ($[65] !== formatHeading) {
    t38 = function t38() {
      return formatHeading("h2");
    };
    $[65] = formatHeading;
    $[66] = t38;
  } else {
    t38 = $[66];
  }
  var t39;
  if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
    t39 = /*#__PURE__*/_jsx(Heading2, {
      className: "size-4"
    });
    $[67] = t39;
  } else {
    t39 = $[67];
  }
  var t40;
  if ($[68] !== t38) {
    t40 = /*#__PURE__*/_jsx(Button, {
      variant: "ghost",
      size: "icon",
      onClick: t38,
      title: "Heading 2",
      children: t39
    });
    $[68] = t38;
    $[69] = t40;
  } else {
    t40 = $[69];
  }
  var t41;
  if ($[70] !== formatHeading) {
    t41 = function t41() {
      return formatHeading("h3");
    };
    $[70] = formatHeading;
    $[71] = t41;
  } else {
    t41 = $[71];
  }
  var t42;
  if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
    t42 = /*#__PURE__*/_jsx(Heading3, {
      className: "size-4"
    });
    $[72] = t42;
  } else {
    t42 = $[72];
  }
  var t43;
  if ($[73] !== t41) {
    t43 = /*#__PURE__*/_jsx(Button, {
      variant: "ghost",
      size: "icon",
      onClick: t41,
      title: "Heading 3",
      children: t42
    });
    $[73] = t41;
    $[74] = t43;
  } else {
    t43 = $[74];
  }
  var t44;
  if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
    t44 = /*#__PURE__*/_jsx(Quote, {
      className: "size-4"
    });
    $[75] = t44;
  } else {
    t44 = $[75];
  }
  var t45;
  if ($[76] !== formatQuote) {
    t45 = /*#__PURE__*/_jsx(Button, {
      variant: "ghost",
      size: "icon",
      onClick: formatQuote,
      title: "Quote",
      children: t44
    });
    $[76] = formatQuote;
    $[77] = t45;
  } else {
    t45 = $[77];
  }
  var t46;
  if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
    t46 = /*#__PURE__*/_jsx(Code, {
      className: "size-4"
    });
    $[78] = t46;
  } else {
    t46 = $[78];
  }
  var t47;
  if ($[79] !== formatCodeBlock) {
    t47 = /*#__PURE__*/_jsx(Button, {
      variant: "ghost",
      size: "icon",
      onClick: formatCodeBlock,
      title: "Code Block",
      children: t46
    });
    $[79] = formatCodeBlock;
    $[80] = t47;
  } else {
    t47 = $[80];
  }
  var t48;
  if ($[81] !== t13 || $[82] !== t17 || $[83] !== t21 || $[84] !== t24 || $[85] !== t27 || $[86] !== t30 || $[87] !== t33 || $[88] !== t37 || $[89] !== t40 || $[90] !== t43 || $[91] !== t45 || $[92] !== t47 || $[93] !== t9) {
    t48 = /*#__PURE__*/_jsxs("div", {
      className: t9,
      role: "toolbar",
      "aria-label": "Editor toolbar",
      children: [t13, t17, t18, t21, t24, t27, t30, t31, t33, t34, t37, t40, t43, t45, t47]
    });
    $[81] = t13;
    $[82] = t17;
    $[83] = t21;
    $[84] = t24;
    $[85] = t27;
    $[86] = t30;
    $[87] = t33;
    $[88] = t37;
    $[89] = t40;
    $[90] = t43;
    $[91] = t45;
    $[92] = t47;
    $[93] = t9;
    $[94] = t48;
  } else {
    t48 = $[94];
  }
  return t48;
}
function _temp4() {
  var selection_2 = $getSelection();
  if ($isRangeSelection(selection_2)) {
    $setBlocksType(selection_2, _temp3);
  }
}
function _temp3() {
  return $createCodeNode();
}
function _temp2() {
  var selection_1 = $getSelection();
  if ($isRangeSelection(selection_1)) {
    $setBlocksType(selection_1, _temp);
  }
}
function _temp() {
  return $createQuoteNode();
}

//# sourceMappingURL=editor-toolbar.js.map