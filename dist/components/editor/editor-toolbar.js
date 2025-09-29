import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND, UNDO_COMMAND, REDO_COMMAND, CAN_UNDO_COMMAND, CAN_REDO_COMMAND, $createParagraphNode, $isTextNode } from 'lexical';
import { $isTableSelection } from '@lexical/table';
import { $isDecoratorBlockNode } from '@lexical/react/LexicalDecoratorBlockNode';
import { $getNearestBlockElementAncestorOrThrow } from '@lexical/utils';
import { $setBlocksType } from '@lexical/selection';
import { $createHeadingNode, $createQuoteNode, $isHeadingNode, $isQuoteNode } from '@lexical/rich-text';
import { $createCodeNode } from '@lexical/code';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND, $isListNode } from '@lexical/list';
import { INDENT_CONTENT_COMMAND, OUTDENT_CONTENT_COMMAND } from 'lexical';
import { TextBold as Bold, TextItalic as Italic, TextUnderline as Underline, Code, Link, Undo, Redo, ChevronDown, TextStrikethrough as Strikethrough, TextClearFormat as RemoveFormatting, TextIndentMore as IndentIncrease, TextIndentLess as IndentDecrease, Close as X, Checkmark as Check, List, ListNumbered as ListOrdered } from "../../icons";
import { cn } from "../../lib/utils";
import { Toggle } from "../toggle";
import { Button } from "../button";
import { Separator } from "../separator";
import { Input } from "../input";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip";
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
  var $ = _c(191);
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
  var _React$useState17 = React.useState(false),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    showLinkPopover = _React$useState18[0],
    setShowLinkPopover = _React$useState18[1];
  var _React$useState19 = React.useState(""),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    linkUrl = _React$useState20[0],
    setLinkUrl = _React$useState20[1];
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
      editor.focus();
    };
    $[4] = editor;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  var formatText = t4;
  var formatBlockType;
  var handleLinkCancel;
  var handleLinkClick;
  var handleLinkSubmit;
  if ($[6] !== editor || $[7] !== isLink || $[8] !== linkUrl) {
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
      editor.focus();
    };
    var _t;
    if ($[13] !== editor || $[14] !== isLink) {
      _t = function _t() {
        if (isLink) {
          editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
          editor.focus();
        } else {
          setShowLinkPopover(true);
          setLinkUrl("https://");
        }
      };
      $[13] = editor;
      $[14] = isLink;
      $[15] = _t;
    } else {
      _t = $[15];
    }
    handleLinkClick = _t;
    var _t2;
    if ($[16] !== editor || $[17] !== linkUrl) {
      _t2 = function _t2() {
        if (linkUrl.trim()) {
          editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkUrl.trim());
        }
        setShowLinkPopover(false);
        setLinkUrl("");
        editor.focus();
      };
      $[16] = editor;
      $[17] = linkUrl;
      $[18] = _t2;
    } else {
      _t2 = $[18];
    }
    handleLinkSubmit = _t2;
    var _t3;
    if ($[19] !== editor) {
      _t3 = function _t3() {
        setShowLinkPopover(false);
        setLinkUrl("");
        editor.focus();
      };
      $[19] = editor;
      $[20] = _t3;
    } else {
      _t3 = $[20];
    }
    handleLinkCancel = _t3;
    var formatQuote = function formatQuote() {
      editor.update(_temp4);
      editor.focus();
    };
    var formatCodeBlock = function formatCodeBlock() {
      editor.update(_temp6);
      editor.focus();
    };
    $[6] = editor;
    $[7] = isLink;
    $[8] = linkUrl;
    $[9] = formatBlockType;
    $[10] = handleLinkCancel;
    $[11] = handleLinkClick;
    $[12] = handleLinkSubmit;
  } else {
    formatBlockType = $[9];
    handleLinkCancel = $[10];
    handleLinkClick = $[11];
    handleLinkSubmit = $[12];
  }
  var t5;
  if ($[21] !== editor) {
    t5 = function t5() {
      editor.update(_temp7);
      editor.focus();
    };
    $[21] = editor;
    $[22] = t5;
  } else {
    t5 = $[22];
  }
  var clearFormatting = t5;
  var t6;
  if ($[23] !== editor) {
    t6 = function t6() {
      editor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined);
      editor.focus();
    };
    $[23] = editor;
    $[24] = t6;
  } else {
    t6 = $[24];
  }
  var handleIndent = t6;
  var t7;
  if ($[25] !== editor) {
    t7 = function t7() {
      editor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined);
      editor.focus();
    };
    $[25] = editor;
    $[26] = t7;
  } else {
    t7 = $[26];
  }
  var handleOutdent = t7;
  var t8;
  if ($[27] !== editor) {
    t8 = function t8() {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
      editor.focus();
    };
    $[27] = editor;
    $[28] = t8;
  } else {
    t8 = $[28];
  }
  var handleUnorderedList = t8;
  var t9;
  if ($[29] !== editor) {
    t9 = function t9() {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
      editor.focus();
    };
    $[29] = editor;
    $[30] = t9;
  } else {
    t9 = $[30];
  }
  var handleOrderedList = t9;
  var t10;
  if ($[31] !== className) {
    t10 = cn("border-input bg-background flex w-full flex-wrap items-center gap-1 border-b py-1", className);
    $[31] = className;
    $[32] = t10;
  } else {
    t10 = $[32];
  }
  var t11;
  if ($[33] !== editor) {
    t11 = function t11() {
      editor.dispatchCommand(UNDO_COMMAND, undefined);
      editor.focus();
    };
    $[33] = editor;
    $[34] = t11;
  } else {
    t11 = $[34];
  }
  var t12 = !canUndo;
  var t13;
  if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
    t13 = /*#__PURE__*/_jsx(Undo, {
      className: "size-4"
    });
    $[35] = t13;
  } else {
    t13 = $[35];
  }
  var t14;
  if ($[36] !== t11 || $[37] !== t12) {
    t14 = /*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsx(Button, {
        variant: "outline",
        size: "icon",
        onClick: t11,
        disabled: t12,
        children: t13
      })
    });
    $[36] = t11;
    $[37] = t12;
    $[38] = t14;
  } else {
    t14 = $[38];
  }
  var t15;
  if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
    t15 = /*#__PURE__*/_jsx(TooltipContent, {
      children: /*#__PURE__*/_jsx("p", {
        children: "Undo"
      })
    });
    $[39] = t15;
  } else {
    t15 = $[39];
  }
  var t16;
  if ($[40] !== t14) {
    t16 = /*#__PURE__*/_jsxs(Tooltip, {
      children: [t14, t15]
    });
    $[40] = t14;
    $[41] = t16;
  } else {
    t16 = $[41];
  }
  var t17;
  if ($[42] !== editor) {
    t17 = function t17() {
      editor.dispatchCommand(REDO_COMMAND, undefined);
      editor.focus();
    };
    $[42] = editor;
    $[43] = t17;
  } else {
    t17 = $[43];
  }
  var t18 = !canRedo;
  var t19;
  if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
    t19 = /*#__PURE__*/_jsx(Redo, {
      className: "size-4"
    });
    $[44] = t19;
  } else {
    t19 = $[44];
  }
  var t20;
  if ($[45] !== t17 || $[46] !== t18) {
    t20 = /*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsx(Button, {
        variant: "outline",
        size: "icon",
        onClick: t17,
        disabled: t18,
        children: t19
      })
    });
    $[45] = t17;
    $[46] = t18;
    $[47] = t20;
  } else {
    t20 = $[47];
  }
  var t21;
  if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
    t21 = /*#__PURE__*/_jsx(TooltipContent, {
      children: /*#__PURE__*/_jsx("p", {
        children: "Redo"
      })
    });
    $[48] = t21;
  } else {
    t21 = $[48];
  }
  var t22;
  if ($[49] !== t20) {
    t22 = /*#__PURE__*/_jsxs(Tooltip, {
      children: [t20, t21]
    });
    $[49] = t20;
    $[50] = t22;
  } else {
    t22 = $[50];
  }
  var t23;
  if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
    t23 = /*#__PURE__*/_jsx(Separator, {
      orientation: "vertical",
      className: "mx-1 h-6!"
    });
    $[51] = t23;
  } else {
    t23 = $[51];
  }
  var t24 = blockTypeToBlockName[blockType] || "Paragraph";
  var t25;
  if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
    t25 = /*#__PURE__*/_jsx(ChevronDown, {
      className: "ml-1 size-3"
    });
    $[52] = t25;
  } else {
    t25 = $[52];
  }
  var t26;
  if ($[53] !== t24) {
    t26 = /*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsx(DropdownMenuTrigger, {
        asChild: true,
        children: /*#__PURE__*/_jsxs(Button, {
          variant: "outline",
          size: "sm",
          className: "w-auto px-2",
          children: [t24, t25]
        })
      })
    });
    $[53] = t24;
    $[54] = t26;
  } else {
    t26 = $[54];
  }
  var t27;
  if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
    t27 = /*#__PURE__*/_jsx(TooltipContent, {
      children: /*#__PURE__*/_jsx("p", {
        children: "Text Format"
      })
    });
    $[55] = t27;
  } else {
    t27 = $[55];
  }
  var t28;
  if ($[56] !== t26) {
    t28 = /*#__PURE__*/_jsxs(Tooltip, {
      children: [t26, t27]
    });
    $[56] = t26;
    $[57] = t28;
  } else {
    t28 = $[57];
  }
  var t29;
  if ($[58] !== blockType || $[59] !== formatBlockType) {
    t29 = Object.entries(blockTypeToBlockName).map(function (t30) {
      var _t4 = _slicedToArray(t30, 2),
        key = _t4[0],
        name = _t4[1];
      return /*#__PURE__*/_jsx(DropdownMenuItem, {
        onClick: function onClick() {
          return formatBlockType(key);
        },
        className: cn(blockType === key && "bg-accent"),
        children: name
      }, key);
    });
    $[58] = blockType;
    $[59] = formatBlockType;
    $[60] = t29;
  } else {
    t29 = $[60];
  }
  var t30;
  if ($[61] !== t29) {
    t30 = /*#__PURE__*/_jsx(DropdownMenuContent, {
      children: t29
    });
    $[61] = t29;
    $[62] = t30;
  } else {
    t30 = $[62];
  }
  var t31;
  if ($[63] !== t28 || $[64] !== t30) {
    t31 = /*#__PURE__*/_jsxs(DropdownMenu, {
      children: [t28, t30]
    });
    $[63] = t28;
    $[64] = t30;
    $[65] = t31;
  } else {
    t31 = $[65];
  }
  var t32;
  if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
    t32 = /*#__PURE__*/_jsx(Separator, {
      orientation: "vertical",
      className: "mx-1 h-6!"
    });
    $[66] = t32;
  } else {
    t32 = $[66];
  }
  var t33;
  if ($[67] !== formatText) {
    t33 = function t33() {
      return formatText("bold");
    };
    $[67] = formatText;
    $[68] = t33;
  } else {
    t33 = $[68];
  }
  var t34;
  if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
    t34 = /*#__PURE__*/_jsx(Bold, {
      className: "size-4"
    });
    $[69] = t34;
  } else {
    t34 = $[69];
  }
  var t35;
  if ($[70] !== isBold || $[71] !== t33) {
    t35 = /*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsx(Toggle, {
        variant: "outline",
        pressed: isBold,
        onPressedChange: t33,
        "aria-label": "Bold",
        size: "sm",
        children: t34
      })
    });
    $[70] = isBold;
    $[71] = t33;
    $[72] = t35;
  } else {
    t35 = $[72];
  }
  var t36;
  if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
    t36 = /*#__PURE__*/_jsx(TooltipContent, {
      children: /*#__PURE__*/_jsx("p", {
        children: "Bold"
      })
    });
    $[73] = t36;
  } else {
    t36 = $[73];
  }
  var t37;
  if ($[74] !== t35) {
    t37 = /*#__PURE__*/_jsxs(Tooltip, {
      children: [t35, t36]
    });
    $[74] = t35;
    $[75] = t37;
  } else {
    t37 = $[75];
  }
  var t38;
  if ($[76] !== formatText) {
    t38 = function t38() {
      return formatText("italic");
    };
    $[76] = formatText;
    $[77] = t38;
  } else {
    t38 = $[77];
  }
  var t39;
  if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
    t39 = /*#__PURE__*/_jsx(Italic, {
      className: "size-4"
    });
    $[78] = t39;
  } else {
    t39 = $[78];
  }
  var t40;
  if ($[79] !== isItalic || $[80] !== t38) {
    t40 = /*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsx(Toggle, {
        variant: "outline",
        pressed: isItalic,
        onPressedChange: t38,
        "aria-label": "Italic",
        size: "sm",
        children: t39
      })
    });
    $[79] = isItalic;
    $[80] = t38;
    $[81] = t40;
  } else {
    t40 = $[81];
  }
  var t41;
  if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
    t41 = /*#__PURE__*/_jsx(TooltipContent, {
      children: /*#__PURE__*/_jsx("p", {
        children: "Italic"
      })
    });
    $[82] = t41;
  } else {
    t41 = $[82];
  }
  var t42;
  if ($[83] !== t40) {
    t42 = /*#__PURE__*/_jsxs(Tooltip, {
      children: [t40, t41]
    });
    $[83] = t40;
    $[84] = t42;
  } else {
    t42 = $[84];
  }
  var t43;
  if ($[85] !== formatText) {
    t43 = function t43() {
      return formatText("underline");
    };
    $[85] = formatText;
    $[86] = t43;
  } else {
    t43 = $[86];
  }
  var t44;
  if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
    t44 = /*#__PURE__*/_jsx(Underline, {
      className: "size-4"
    });
    $[87] = t44;
  } else {
    t44 = $[87];
  }
  var t45;
  if ($[88] !== isUnderline || $[89] !== t43) {
    t45 = /*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsx(Toggle, {
        variant: "outline",
        pressed: isUnderline,
        onPressedChange: t43,
        "aria-label": "Underline",
        size: "sm",
        children: t44
      })
    });
    $[88] = isUnderline;
    $[89] = t43;
    $[90] = t45;
  } else {
    t45 = $[90];
  }
  var t46;
  if ($[91] === Symbol.for("react.memo_cache_sentinel")) {
    t46 = /*#__PURE__*/_jsx(TooltipContent, {
      children: /*#__PURE__*/_jsx("p", {
        children: "Underline"
      })
    });
    $[91] = t46;
  } else {
    t46 = $[91];
  }
  var t47;
  if ($[92] !== t45) {
    t47 = /*#__PURE__*/_jsxs(Tooltip, {
      children: [t45, t46]
    });
    $[92] = t45;
    $[93] = t47;
  } else {
    t47 = $[93];
  }
  var t48;
  if ($[94] !== formatText) {
    t48 = function t48() {
      return formatText("strikethrough");
    };
    $[94] = formatText;
    $[95] = t48;
  } else {
    t48 = $[95];
  }
  var t49;
  if ($[96] === Symbol.for("react.memo_cache_sentinel")) {
    t49 = /*#__PURE__*/_jsx(Strikethrough, {
      className: "size-4"
    });
    $[96] = t49;
  } else {
    t49 = $[96];
  }
  var t50;
  if ($[97] !== isStrikethrough || $[98] !== t48) {
    t50 = /*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsx(Toggle, {
        variant: "outline",
        pressed: isStrikethrough,
        onPressedChange: t48,
        "aria-label": "Strikethrough",
        size: "sm",
        children: t49
      })
    });
    $[97] = isStrikethrough;
    $[98] = t48;
    $[99] = t50;
  } else {
    t50 = $[99];
  }
  var t51;
  if ($[100] === Symbol.for("react.memo_cache_sentinel")) {
    t51 = /*#__PURE__*/_jsx(TooltipContent, {
      children: /*#__PURE__*/_jsx("p", {
        children: "Strikethrough"
      })
    });
    $[100] = t51;
  } else {
    t51 = $[100];
  }
  var t52;
  if ($[101] !== t50) {
    t52 = /*#__PURE__*/_jsxs(Tooltip, {
      children: [t50, t51]
    });
    $[101] = t50;
    $[102] = t52;
  } else {
    t52 = $[102];
  }
  var t53;
  if ($[103] !== formatText) {
    t53 = function t53() {
      return formatText("code");
    };
    $[103] = formatText;
    $[104] = t53;
  } else {
    t53 = $[104];
  }
  var t54;
  if ($[105] === Symbol.for("react.memo_cache_sentinel")) {
    t54 = /*#__PURE__*/_jsx(Code, {
      className: "size-4"
    });
    $[105] = t54;
  } else {
    t54 = $[105];
  }
  var t55;
  if ($[106] !== isCode || $[107] !== t53) {
    t55 = /*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsx(Toggle, {
        variant: "outline",
        pressed: isCode,
        onPressedChange: t53,
        "aria-label": "Code",
        size: "sm",
        children: t54
      })
    });
    $[106] = isCode;
    $[107] = t53;
    $[108] = t55;
  } else {
    t55 = $[108];
  }
  var t56;
  if ($[109] === Symbol.for("react.memo_cache_sentinel")) {
    t56 = /*#__PURE__*/_jsx(TooltipContent, {
      children: /*#__PURE__*/_jsx("p", {
        children: "Inline Code"
      })
    });
    $[109] = t56;
  } else {
    t56 = $[109];
  }
  var t57;
  if ($[110] !== t55) {
    t57 = /*#__PURE__*/_jsxs(Tooltip, {
      children: [t55, t56]
    });
    $[110] = t55;
    $[111] = t57;
  } else {
    t57 = $[111];
  }
  var t58;
  if ($[112] === Symbol.for("react.memo_cache_sentinel")) {
    t58 = /*#__PURE__*/_jsx(Separator, {
      orientation: "vertical",
      className: "mx-1 h-6!"
    });
    $[112] = t58;
  } else {
    t58 = $[112];
  }
  var t59;
  if ($[113] === Symbol.for("react.memo_cache_sentinel")) {
    t59 = /*#__PURE__*/_jsx(Link, {
      className: "size-4"
    });
    $[113] = t59;
  } else {
    t59 = $[113];
  }
  var t60;
  if ($[114] !== handleLinkClick || $[115] !== isLink) {
    t60 = /*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsx(PopoverTrigger, {
        asChild: true,
        children: /*#__PURE__*/_jsx(Toggle, {
          variant: "outline",
          pressed: isLink,
          onPressedChange: handleLinkClick,
          "aria-label": "Link",
          size: "sm",
          children: t59
        })
      })
    });
    $[114] = handleLinkClick;
    $[115] = isLink;
    $[116] = t60;
  } else {
    t60 = $[116];
  }
  var t61 = isLink ? "Remove Link" : "Insert Link";
  var t62;
  if ($[117] !== t61) {
    t62 = /*#__PURE__*/_jsx(TooltipContent, {
      children: /*#__PURE__*/_jsx("p", {
        children: t61
      })
    });
    $[117] = t61;
    $[118] = t62;
  } else {
    t62 = $[118];
  }
  var t63;
  if ($[119] !== t60 || $[120] !== t62) {
    t63 = /*#__PURE__*/_jsxs(Tooltip, {
      children: [t60, t62]
    });
    $[119] = t60;
    $[120] = t62;
    $[121] = t63;
  } else {
    t63 = $[121];
  }
  var t64;
  if ($[122] === Symbol.for("react.memo_cache_sentinel")) {
    t64 = function t64(e) {
      return setLinkUrl(e.target.value);
    };
    $[122] = t64;
  } else {
    t64 = $[122];
  }
  var t65;
  if ($[123] !== handleLinkCancel || $[124] !== handleLinkSubmit) {
    t65 = function t65(e_0) {
      if (e_0.key === "Enter") {
        handleLinkSubmit();
      } else {
        if (e_0.key === "Escape") {
          handleLinkCancel();
        }
      }
    };
    $[123] = handleLinkCancel;
    $[124] = handleLinkSubmit;
    $[125] = t65;
  } else {
    t65 = $[125];
  }
  var t66;
  if ($[126] !== linkUrl || $[127] !== t65) {
    t66 = /*#__PURE__*/_jsx(Input, {
      placeholder: "https://",
      value: linkUrl,
      onChange: t64,
      onKeyDown: t65,
      className: "flex-1",
      autoFocus: true
    });
    $[126] = linkUrl;
    $[127] = t65;
    $[128] = t66;
  } else {
    t66 = $[128];
  }
  var t67;
  if ($[129] === Symbol.for("react.memo_cache_sentinel")) {
    t67 = /*#__PURE__*/_jsx(X, {
      className: "size-4"
    });
    $[129] = t67;
  } else {
    t67 = $[129];
  }
  var t68;
  if ($[130] !== handleLinkCancel) {
    t68 = /*#__PURE__*/_jsx(Button, {
      variant: "ghost",
      size: "sm",
      onClick: handleLinkCancel,
      className: "h-8 w-8 p-0",
      children: t67
    });
    $[130] = handleLinkCancel;
    $[131] = t68;
  } else {
    t68 = $[131];
  }
  var t69;
  if ($[132] === Symbol.for("react.memo_cache_sentinel")) {
    t69 = /*#__PURE__*/_jsx(Check, {
      className: "size-4"
    });
    $[132] = t69;
  } else {
    t69 = $[132];
  }
  var t70;
  if ($[133] !== handleLinkSubmit) {
    t70 = /*#__PURE__*/_jsx(Button, {
      variant: "ghost",
      size: "sm",
      onClick: handleLinkSubmit,
      className: "h-8 w-8 p-0",
      children: t69
    });
    $[133] = handleLinkSubmit;
    $[134] = t70;
  } else {
    t70 = $[134];
  }
  var t71;
  if ($[135] !== t66 || $[136] !== t68 || $[137] !== t70) {
    t71 = /*#__PURE__*/_jsx(PopoverContent, {
      className: "w-80",
      align: "start",
      children: /*#__PURE__*/_jsxs("div", {
        className: "flex items-center gap-2",
        children: [t66, t68, t70]
      })
    });
    $[135] = t66;
    $[136] = t68;
    $[137] = t70;
    $[138] = t71;
  } else {
    t71 = $[138];
  }
  var t72;
  if ($[139] !== showLinkPopover || $[140] !== t63 || $[141] !== t71) {
    t72 = /*#__PURE__*/_jsxs(Popover, {
      open: showLinkPopover,
      onOpenChange: setShowLinkPopover,
      children: [t63, t71]
    });
    $[139] = showLinkPopover;
    $[140] = t63;
    $[141] = t71;
    $[142] = t72;
  } else {
    t72 = $[142];
  }
  var t73;
  if ($[143] === Symbol.for("react.memo_cache_sentinel")) {
    t73 = /*#__PURE__*/_jsx(Separator, {
      orientation: "vertical",
      className: "mx-1 h-6!"
    });
    $[143] = t73;
  } else {
    t73 = $[143];
  }
  var t74;
  if ($[144] === Symbol.for("react.memo_cache_sentinel")) {
    t74 = /*#__PURE__*/_jsx(List, {
      className: "size-4"
    });
    $[144] = t74;
  } else {
    t74 = $[144];
  }
  var t75;
  if ($[145] !== handleUnorderedList) {
    t75 = /*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsx(Button, {
        variant: "outline",
        size: "sm",
        onClick: handleUnorderedList,
        "aria-label": "Bulleted List",
        className: "h-8 w-8 p-0",
        children: t74
      })
    });
    $[145] = handleUnorderedList;
    $[146] = t75;
  } else {
    t75 = $[146];
  }
  var t76;
  if ($[147] === Symbol.for("react.memo_cache_sentinel")) {
    t76 = /*#__PURE__*/_jsx(TooltipContent, {
      children: /*#__PURE__*/_jsx("p", {
        children: "Bulleted List"
      })
    });
    $[147] = t76;
  } else {
    t76 = $[147];
  }
  var t77;
  if ($[148] !== t75) {
    t77 = /*#__PURE__*/_jsxs(Tooltip, {
      children: [t75, t76]
    });
    $[148] = t75;
    $[149] = t77;
  } else {
    t77 = $[149];
  }
  var t78;
  if ($[150] === Symbol.for("react.memo_cache_sentinel")) {
    t78 = /*#__PURE__*/_jsx(ListOrdered, {
      className: "size-4"
    });
    $[150] = t78;
  } else {
    t78 = $[150];
  }
  var t79;
  if ($[151] !== handleOrderedList) {
    t79 = /*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsx(Button, {
        variant: "outline",
        size: "sm",
        onClick: handleOrderedList,
        "aria-label": "Numbered List",
        className: "h-8 w-8 p-0",
        children: t78
      })
    });
    $[151] = handleOrderedList;
    $[152] = t79;
  } else {
    t79 = $[152];
  }
  var t80;
  if ($[153] === Symbol.for("react.memo_cache_sentinel")) {
    t80 = /*#__PURE__*/_jsx(TooltipContent, {
      children: /*#__PURE__*/_jsx("p", {
        children: "Numbered List"
      })
    });
    $[153] = t80;
  } else {
    t80 = $[153];
  }
  var t81;
  if ($[154] !== t79) {
    t81 = /*#__PURE__*/_jsxs(Tooltip, {
      children: [t79, t80]
    });
    $[154] = t79;
    $[155] = t81;
  } else {
    t81 = $[155];
  }
  var t82;
  if ($[156] === Symbol.for("react.memo_cache_sentinel")) {
    t82 = /*#__PURE__*/_jsx(Separator, {
      orientation: "vertical",
      className: "mx-1 h-6!"
    });
    $[156] = t82;
  } else {
    t82 = $[156];
  }
  var t83;
  if ($[157] === Symbol.for("react.memo_cache_sentinel")) {
    t83 = /*#__PURE__*/_jsx(IndentDecrease, {
      className: "size-4"
    });
    $[157] = t83;
  } else {
    t83 = $[157];
  }
  var t84;
  if ($[158] !== handleOutdent) {
    t84 = /*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsx(Button, {
        variant: "outline",
        size: "sm",
        onClick: handleOutdent,
        "aria-label": "Decrease Indent",
        className: "h-8 w-8 p-0",
        children: t83
      })
    });
    $[158] = handleOutdent;
    $[159] = t84;
  } else {
    t84 = $[159];
  }
  var t85;
  if ($[160] === Symbol.for("react.memo_cache_sentinel")) {
    t85 = /*#__PURE__*/_jsx(TooltipContent, {
      children: /*#__PURE__*/_jsx("p", {
        children: "Decrease Indent"
      })
    });
    $[160] = t85;
  } else {
    t85 = $[160];
  }
  var t86;
  if ($[161] !== t84) {
    t86 = /*#__PURE__*/_jsxs(Tooltip, {
      children: [t84, t85]
    });
    $[161] = t84;
    $[162] = t86;
  } else {
    t86 = $[162];
  }
  var t87;
  if ($[163] === Symbol.for("react.memo_cache_sentinel")) {
    t87 = /*#__PURE__*/_jsx(IndentIncrease, {
      className: "size-4"
    });
    $[163] = t87;
  } else {
    t87 = $[163];
  }
  var t88;
  if ($[164] !== handleIndent) {
    t88 = /*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsx(Button, {
        variant: "outline",
        size: "sm",
        onClick: handleIndent,
        "aria-label": "Increase Indent",
        className: "h-8 w-8 p-0",
        children: t87
      })
    });
    $[164] = handleIndent;
    $[165] = t88;
  } else {
    t88 = $[165];
  }
  var t89;
  if ($[166] === Symbol.for("react.memo_cache_sentinel")) {
    t89 = /*#__PURE__*/_jsx(TooltipContent, {
      children: /*#__PURE__*/_jsx("p", {
        children: "Increase Indent"
      })
    });
    $[166] = t89;
  } else {
    t89 = $[166];
  }
  var t90;
  if ($[167] !== t88) {
    t90 = /*#__PURE__*/_jsxs(Tooltip, {
      children: [t88, t89]
    });
    $[167] = t88;
    $[168] = t90;
  } else {
    t90 = $[168];
  }
  var t91;
  if ($[169] === Symbol.for("react.memo_cache_sentinel")) {
    t91 = /*#__PURE__*/_jsx(RemoveFormatting, {
      className: "size-4"
    });
    $[169] = t91;
  } else {
    t91 = $[169];
  }
  var t92;
  if ($[170] !== clearFormatting) {
    t92 = /*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsx(Button, {
        variant: "outline",
        size: "sm",
        onClick: clearFormatting,
        "aria-label": "Clear Formatting",
        className: "h-8 w-8 p-0",
        children: t91
      })
    });
    $[170] = clearFormatting;
    $[171] = t92;
  } else {
    t92 = $[171];
  }
  var t93;
  if ($[172] === Symbol.for("react.memo_cache_sentinel")) {
    t93 = /*#__PURE__*/_jsx(TooltipContent, {
      children: /*#__PURE__*/_jsx("p", {
        children: "Clear Formatting"
      })
    });
    $[172] = t93;
  } else {
    t93 = $[172];
  }
  var t94;
  if ($[173] !== t92) {
    t94 = /*#__PURE__*/_jsxs(Tooltip, {
      children: [t92, t93]
    });
    $[173] = t92;
    $[174] = t94;
  } else {
    t94 = $[174];
  }
  var t95;
  if ($[175] !== t10 || $[176] !== t16 || $[177] !== t22 || $[178] !== t31 || $[179] !== t37 || $[180] !== t42 || $[181] !== t47 || $[182] !== t52 || $[183] !== t57 || $[184] !== t72 || $[185] !== t77 || $[186] !== t81 || $[187] !== t86 || $[188] !== t90 || $[189] !== t94) {
    t95 = /*#__PURE__*/_jsx(TooltipProvider, {
      children: /*#__PURE__*/_jsxs("div", {
        className: t10,
        role: "toolbar",
        "aria-label": "Editor toolbar",
        children: [t16, t22, t23, t31, t32, t37, t42, t47, t52, t57, t58, t72, t73, t77, t81, t82, t86, t90, t94]
      })
    });
    $[175] = t10;
    $[176] = t16;
    $[177] = t22;
    $[178] = t31;
    $[179] = t37;
    $[180] = t42;
    $[181] = t47;
    $[182] = t52;
    $[183] = t57;
    $[184] = t72;
    $[185] = t77;
    $[186] = t81;
    $[187] = t86;
    $[188] = t90;
    $[189] = t94;
    $[190] = t95;
  } else {
    t95 = $[190];
  }
  return t95;
}
function _temp7() {
  var selection_4 = $getSelection();
  if ($isRangeSelection(selection_4) || $isTableSelection(selection_4)) {
    var anchor = selection_4.anchor;
    var focus = selection_4.focus;
    var nodes = selection_4.getNodes();
    var extractedNodes = selection_4.extract();
    if (anchor.key === focus.key && anchor.offset === focus.offset) {
      return;
    }
    nodes.forEach(function (node_0, idx) {
      if ($isTextNode(node_0)) {
        var textNode = node_0;
        if (idx === 0 && anchor.offset !== 0) {
          textNode = textNode.splitText(anchor.offset)[1] || textNode;
        }
        if (idx === nodes.length - 1) {
          textNode = textNode.splitText(focus.offset)[0] || textNode;
        }
        var extractedTextNode = extractedNodes[0];
        if (nodes.length === 1 && $isTextNode(extractedTextNode)) {
          textNode = extractedTextNode;
        }
        if (textNode.__style !== "") {
          textNode.setStyle("");
        }
        if (textNode.__format !== 0) {
          textNode.setFormat(0);
        }
        var nearestBlockElement = $getNearestBlockElementAncestorOrThrow(textNode);
        if (nearestBlockElement.__format !== 0) {
          nearestBlockElement.setFormat("");
        }
        if (nearestBlockElement.__indent !== 0) {
          nearestBlockElement.setIndent(0);
        }
      } else {
        if ($isHeadingNode(node_0) || $isQuoteNode(node_0)) {
          node_0.replace($createParagraphNode(), true);
        } else {
          if ($isDecoratorBlockNode(node_0)) {
            node_0.setFormat("");
          }
        }
      }
    });
  }
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