import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND, UNDO_COMMAND, REDO_COMMAND, CAN_UNDO_COMMAND, CAN_REDO_COMMAND, $createParagraphNode } from 'lexical';
import { $setBlocksType } from '@lexical/selection';
import { $createHeadingNode, $createQuoteNode, $isHeadingNode } from '@lexical/rich-text';
import { $createCodeNode } from '@lexical/code';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND, $isListNode } from '@lexical/list';
import { Bold, Italic, Underline, Code, Link, Undo, Redo, ChevronDown, Strikethrough } from 'lucide-react';
import { cn } from "../../lib/utils";
import { Toggle } from "../toggle";
import { Button } from "../button";
import { Separator } from "../separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../dropdown-menu";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var blockTypeToBlockName = {
  paragraph: 'Paragraph',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  quote: 'Quote',
  code: 'Code Block',
  bullet: 'Bulleted List',
  number: 'Numbered List'
};
export function EditorToolbar(t0) {
  var $ = _c(83);
  var className = t0.className;
  var _useLexicalComposerCo = useLexicalComposerContext(),
    _useLexicalComposerCo2 = _slicedToArray(_useLexicalComposerCo, 1),
    editor = _useLexicalComposerCo2[0];
  var _React$useState = React.useState("paragraph"),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    blockType = _React$useState2[0],
    setBlockType = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    isBold = _React$useState4[0],
    setIsBold = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    isItalic = _React$useState6[0],
    setIsItalic = _React$useState6[1];
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    isUnderline = _React$useState8[0],
    setIsUnderline = _React$useState8[1];
  var _React$useState9 = React.useState(false),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    isStrikethrough = _React$useState0[0],
    setIsStrikethrough = _React$useState0[1];
  var _React$useState1 = React.useState(false),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    isCode = _React$useState10[0],
    setIsCode = _React$useState10[1];
  var _React$useState11 = React.useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    isLink = _React$useState12[0],
    setIsLink = _React$useState12[1];
  var _React$useState13 = React.useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    canUndo = _React$useState14[0],
    setCanUndo = _React$useState14[1];
  var _React$useState15 = React.useState(false),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    canRedo = _React$useState16[0],
    setCanRedo = _React$useState16[1];
  var t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = function t1() {
      var selection = $getSelection();
      if ($isRangeSelection(selection)) {
        setIsBold(selection.hasFormat("bold"));
        setIsItalic(selection.hasFormat("italic"));
        setIsUnderline(selection.hasFormat("underline"));
        setIsStrikethrough(selection.hasFormat("strikethrough"));
        setIsCode(selection.hasFormat("code"));
        var node = selection.anchor.getNode();
        var parent = node.getParent();
        setIsLink($isLinkNode(parent) || $isLinkNode(node));
        var anchorNode = selection.anchor.getNode();
        var element = anchorNode.getTopLevelElementOrThrow();
        if ($isListNode(element)) {
          var type = element.getListType();
          setBlockType(type);
        } else {
          var type_0 = $isHeadingNode(element) ? element.getTag() : element.getType();
          if (type_0 in blockTypeToBlockName) {
            setBlockType(type_0);
          }
        }
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
  var formatBlockType;
  var insertLink;
  if ($[6] !== editor || $[7] !== isLink) {
    formatBlockType = function formatBlockType(blockType_0) {
      if (blockType_0 === "paragraph") {
        editor.update(_temp2);
      } else {
        if (blockType_0 === "h1" || blockType_0 === "h2" || blockType_0 === "h3") {
          editor.update(function () {
            var selection_1 = $getSelection();
            if ($isRangeSelection(selection_1)) {
              $setBlocksType(selection_1, function () {
                return $createHeadingNode(blockType_0);
              });
            }
          });
        } else {
          if (blockType_0 === "quote") {
            formatQuote();
          } else {
            if (blockType_0 === "code") {
              formatCodeBlock();
            } else {
              if (blockType_0 === "bullet") {
                editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
              } else {
                if (blockType_0 === "number") {
                  editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
                }
              }
            }
          }
        }
      }
    };
    insertLink = function insertLink() {
      if (!isLink) {
        var url = prompt("Enter URL:");
        if (url) {
          editor.dispatchCommand(TOGGLE_LINK_COMMAND, url);
        }
      } else {
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
      }
    };
    var formatQuote = function formatQuote() {
      editor.update(_temp4);
    };
    var formatCodeBlock = function formatCodeBlock() {
      editor.update(_temp6);
    };
    $[6] = editor;
    $[7] = isLink;
    $[8] = formatBlockType;
    $[9] = insertLink;
  } else {
    formatBlockType = $[8];
    insertLink = $[9];
  }
  var t5;
  if ($[10] !== className) {
    t5 = cn("border-input bg-background flex w-full flex-wrap items-center gap-1 border-b py-1", className);
    $[10] = className;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  var t6;
  if ($[12] !== editor) {
    t6 = function t6() {
      return editor.dispatchCommand(UNDO_COMMAND, undefined);
    };
    $[12] = editor;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  var t7 = !canUndo;
  var t8;
  if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /*#__PURE__*/_jsx(Undo, {
      className: "size-4"
    });
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  var t9;
  if ($[15] !== t6 || $[16] !== t7) {
    t9 = /*#__PURE__*/_jsx(Button, {
      variant: "outline",
      size: "icon",
      onClick: t6,
      disabled: t7,
      title: "Undo",
      children: t8
    });
    $[15] = t6;
    $[16] = t7;
    $[17] = t9;
  } else {
    t9 = $[17];
  }
  var t10;
  if ($[18] !== editor) {
    t10 = function t10() {
      return editor.dispatchCommand(REDO_COMMAND, undefined);
    };
    $[18] = editor;
    $[19] = t10;
  } else {
    t10 = $[19];
  }
  var t11 = !canRedo;
  var t12;
  if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = /*#__PURE__*/_jsx(Redo, {
      className: "size-4"
    });
    $[20] = t12;
  } else {
    t12 = $[20];
  }
  var t13;
  if ($[21] !== t10 || $[22] !== t11) {
    t13 = /*#__PURE__*/_jsx(Button, {
      variant: "outline",
      size: "icon",
      onClick: t10,
      disabled: t11,
      title: "Redo",
      children: t12
    });
    $[21] = t10;
    $[22] = t11;
    $[23] = t13;
  } else {
    t13 = $[23];
  }
  var t14;
  if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
    t14 = /*#__PURE__*/_jsx(Separator, {
      orientation: "vertical",
      className: "mx-1 h-6!"
    });
    $[24] = t14;
  } else {
    t14 = $[24];
  }
  var t15 = blockTypeToBlockName[blockType] || "Paragraph";
  var t16;
  if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
    t16 = /*#__PURE__*/_jsx(ChevronDown, {
      className: "ml-1 size-3"
    });
    $[25] = t16;
  } else {
    t16 = $[25];
  }
  var t17;
  if ($[26] !== t15) {
    t17 = /*#__PURE__*/_jsx(DropdownMenuTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsxs(Button, {
        variant: "outline",
        size: "sm",
        className: "w-auto px-2",
        children: [t15, t16]
      })
    });
    $[26] = t15;
    $[27] = t17;
  } else {
    t17 = $[27];
  }
  var t18;
  if ($[28] !== blockType || $[29] !== formatBlockType) {
    t18 = Object.entries(blockTypeToBlockName).map(function (t19) {
      var _t = _slicedToArray(t19, 2),
        key = _t[0],
        name = _t[1];
      return /*#__PURE__*/_jsx(DropdownMenuItem, {
        onClick: function onClick() {
          return formatBlockType(key);
        },
        className: cn(blockType === key && "bg-accent"),
        children: name
      }, key);
    });
    $[28] = blockType;
    $[29] = formatBlockType;
    $[30] = t18;
  } else {
    t18 = $[30];
  }
  var t19;
  if ($[31] !== t18) {
    t19 = /*#__PURE__*/_jsx(DropdownMenuContent, {
      children: t18
    });
    $[31] = t18;
    $[32] = t19;
  } else {
    t19 = $[32];
  }
  var t20;
  if ($[33] !== t17 || $[34] !== t19) {
    t20 = /*#__PURE__*/_jsxs(DropdownMenu, {
      children: [t17, t19]
    });
    $[33] = t17;
    $[34] = t19;
    $[35] = t20;
  } else {
    t20 = $[35];
  }
  var t21;
  if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
    t21 = /*#__PURE__*/_jsx(Separator, {
      orientation: "vertical",
      className: "mx-1 h-6!"
    });
    $[36] = t21;
  } else {
    t21 = $[36];
  }
  var t22;
  if ($[37] !== formatText) {
    t22 = function t22() {
      return formatText("bold");
    };
    $[37] = formatText;
    $[38] = t22;
  } else {
    t22 = $[38];
  }
  var t23;
  if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
    t23 = /*#__PURE__*/_jsx(Bold, {
      className: "size-4"
    });
    $[39] = t23;
  } else {
    t23 = $[39];
  }
  var t24;
  if ($[40] !== isBold || $[41] !== t22) {
    t24 = /*#__PURE__*/_jsx(Toggle, {
      variant: "outline",
      pressed: isBold,
      onPressedChange: t22,
      "aria-label": "Bold",
      title: "Bold",
      size: "sm",
      children: t23
    });
    $[40] = isBold;
    $[41] = t22;
    $[42] = t24;
  } else {
    t24 = $[42];
  }
  var t25;
  if ($[43] !== formatText) {
    t25 = function t25() {
      return formatText("italic");
    };
    $[43] = formatText;
    $[44] = t25;
  } else {
    t25 = $[44];
  }
  var t26;
  if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
    t26 = /*#__PURE__*/_jsx(Italic, {
      className: "size-4"
    });
    $[45] = t26;
  } else {
    t26 = $[45];
  }
  var t27;
  if ($[46] !== isItalic || $[47] !== t25) {
    t27 = /*#__PURE__*/_jsx(Toggle, {
      variant: "outline",
      pressed: isItalic,
      onPressedChange: t25,
      "aria-label": "Italic",
      title: "Italic",
      size: "sm",
      children: t26
    });
    $[46] = isItalic;
    $[47] = t25;
    $[48] = t27;
  } else {
    t27 = $[48];
  }
  var t28;
  if ($[49] !== formatText) {
    t28 = function t28() {
      return formatText("underline");
    };
    $[49] = formatText;
    $[50] = t28;
  } else {
    t28 = $[50];
  }
  var t29;
  if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
    t29 = /*#__PURE__*/_jsx(Underline, {
      className: "size-4"
    });
    $[51] = t29;
  } else {
    t29 = $[51];
  }
  var t30;
  if ($[52] !== isUnderline || $[53] !== t28) {
    t30 = /*#__PURE__*/_jsx(Toggle, {
      variant: "outline",
      pressed: isUnderline,
      onPressedChange: t28,
      "aria-label": "Underline",
      title: "Underline",
      size: "sm",
      children: t29
    });
    $[52] = isUnderline;
    $[53] = t28;
    $[54] = t30;
  } else {
    t30 = $[54];
  }
  var t31;
  if ($[55] !== formatText) {
    t31 = function t31() {
      return formatText("strikethrough");
    };
    $[55] = formatText;
    $[56] = t31;
  } else {
    t31 = $[56];
  }
  var t32;
  if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
    t32 = /*#__PURE__*/_jsx(Strikethrough, {
      className: "size-4"
    });
    $[57] = t32;
  } else {
    t32 = $[57];
  }
  var t33;
  if ($[58] !== isStrikethrough || $[59] !== t31) {
    t33 = /*#__PURE__*/_jsx(Toggle, {
      variant: "outline",
      pressed: isStrikethrough,
      onPressedChange: t31,
      "aria-label": "Strikethrough",
      title: "Strikethrough",
      size: "sm",
      children: t32
    });
    $[58] = isStrikethrough;
    $[59] = t31;
    $[60] = t33;
  } else {
    t33 = $[60];
  }
  var t34;
  if ($[61] !== formatText) {
    t34 = function t34() {
      return formatText("code");
    };
    $[61] = formatText;
    $[62] = t34;
  } else {
    t34 = $[62];
  }
  var t35;
  if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
    t35 = /*#__PURE__*/_jsx(Code, {
      className: "size-4"
    });
    $[63] = t35;
  } else {
    t35 = $[63];
  }
  var t36;
  if ($[64] !== isCode || $[65] !== t34) {
    t36 = /*#__PURE__*/_jsx(Toggle, {
      variant: "outline",
      pressed: isCode,
      onPressedChange: t34,
      "aria-label": "Code",
      title: "Inline Code",
      size: "sm",
      children: t35
    });
    $[64] = isCode;
    $[65] = t34;
    $[66] = t36;
  } else {
    t36 = $[66];
  }
  var t37;
  if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
    t37 = /*#__PURE__*/_jsx(Separator, {
      orientation: "vertical",
      className: "mx-1 h-6!"
    });
    $[67] = t37;
  } else {
    t37 = $[67];
  }
  var t38;
  if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
    t38 = /*#__PURE__*/_jsx(Link, {
      className: "size-4"
    });
    $[68] = t38;
  } else {
    t38 = $[68];
  }
  var t39;
  if ($[69] !== insertLink || $[70] !== isLink) {
    t39 = /*#__PURE__*/_jsx(Toggle, {
      variant: "outline",
      pressed: isLink,
      onPressedChange: insertLink,
      "aria-label": "Link",
      title: "Insert Link",
      size: "sm",
      children: t38
    });
    $[69] = insertLink;
    $[70] = isLink;
    $[71] = t39;
  } else {
    t39 = $[71];
  }
  var t40;
  if ($[72] !== t13 || $[73] !== t20 || $[74] !== t24 || $[75] !== t27 || $[76] !== t30 || $[77] !== t33 || $[78] !== t36 || $[79] !== t39 || $[80] !== t5 || $[81] !== t9) {
    t40 = /*#__PURE__*/_jsxs("div", {
      className: t5,
      role: "toolbar",
      "aria-label": "Editor toolbar",
      children: [t9, t13, t14, t20, t21, t24, t27, t30, t33, t36, t37, t39]
    });
    $[72] = t13;
    $[73] = t20;
    $[74] = t24;
    $[75] = t27;
    $[76] = t30;
    $[77] = t33;
    $[78] = t36;
    $[79] = t39;
    $[80] = t5;
    $[81] = t9;
    $[82] = t40;
  } else {
    t40 = $[82];
  }
  return t40;
}
function _temp6() {
  var selection_3 = $getSelection();
  if ($isRangeSelection(selection_3)) {
    $setBlocksType(selection_3, _temp5);
  }
}
function _temp5() {
  return $createCodeNode();
}
function _temp4() {
  var selection_2 = $getSelection();
  if ($isRangeSelection(selection_2)) {
    $setBlocksType(selection_2, _temp3);
  }
}
function _temp3() {
  return $createQuoteNode();
}
function _temp2() {
  var selection_0 = $getSelection();
  if ($isRangeSelection(selection_0)) {
    $setBlocksType(selection_0, _temp);
  }
}
function _temp() {
  return $createParagraphNode();
}

//# sourceMappingURL=editor-toolbar.js.map