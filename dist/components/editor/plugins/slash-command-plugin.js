import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, $isRangeSelection, COMMAND_PRIORITY_LOW, KEY_DOWN_COMMAND, TextNode, $getNodeByKey } from 'lexical';
import { mergeRegister } from '@lexical/utils';
import { Portal } from '@radix-ui/react-portal';
import { cn } from "../../../lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function SlashCommandPlugin(t0) {
  var $ = _c(32);
  var commands = t0.commands;
  var _useLexicalComposerCo = useLexicalComposerContext(),
    _useLexicalComposerCo2 = _slicedToArray(_useLexicalComposerCo, 1),
    editor = _useLexicalComposerCo2[0];
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isOpen = _React$useState2[0],
    setIsOpen = _React$useState2[1];
  var _React$useState3 = React.useState(""),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    searchTerm = _React$useState4[0],
    setSearchTerm = _React$useState4[1];
  var _React$useState5 = React.useState(0),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    selectedIndex = _React$useState6[0],
    setSelectedIndex = _React$useState6[1];
  var t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      x: 0,
      y: 0
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  var _React$useState7 = React.useState(t1),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    position = _React$useState8[0],
    setPosition = _React$useState8[1];
  var _React$useState9 = React.useState(null),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    triggerNodeKey = _React$useState0[0],
    setTriggerNodeKey = _React$useState0[1];
  var t2;
  bb0: {
    if (!searchTerm) {
      t2 = commands;
      break bb0;
    }
    var _t;
    if ($[1] !== commands || $[2] !== searchTerm) {
      var _t2;
      if ($[4] !== searchTerm) {
        _t2 = function _t2(cmd) {
          return cmd.label.toLowerCase().includes(searchTerm.toLowerCase()) || cmd.key.toLowerCase().includes(searchTerm.toLowerCase());
        };
        $[4] = searchTerm;
        $[5] = _t2;
      } else {
        _t2 = $[5];
      }
      _t = commands.filter(_t2);
      $[1] = commands;
      $[2] = searchTerm;
      $[3] = _t;
    } else {
      _t = $[3];
    }
    t2 = _t;
  }
  var filteredCommands = t2;
  var t3;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = function t3() {
      setIsOpen(false);
      setSearchTerm("");
      setSelectedIndex(0);
      setTriggerNodeKey(null);
    };
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  var closeMenu = t3;
  var t4;
  if ($[7] !== editor || $[8] !== searchTerm || $[9] !== triggerNodeKey) {
    t4 = function t4(command) {
      editor.update(function () {
        if (triggerNodeKey) {
          var triggerNode = $getNodeByKey(triggerNodeKey);
          if (triggerNode && triggerNode instanceof TextNode) {
            var text = triggerNode.getTextContent();
            var slashIndex = text.lastIndexOf("/".concat(searchTerm));
            if (slashIndex !== -1) {
              var beforeSlash = text.substring(0, slashIndex);
              var afterSlash = text.substring(slashIndex + searchTerm.length + 1);
              if (beforeSlash || afterSlash) {
                triggerNode.setTextContent(beforeSlash + afterSlash);
              } else {
                triggerNode.remove();
              }
            }
          }
        }
        command.onSelect();
      });
      closeMenu();
    };
    $[7] = editor;
    $[8] = searchTerm;
    $[9] = triggerNodeKey;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  var executeCommand = t4;
  var t5;
  var t6;
  if ($[11] !== editor || $[12] !== executeCommand || $[13] !== filteredCommands || $[14] !== isOpen || $[15] !== selectedIndex) {
    t5 = function t5() {
      return mergeRegister(editor.registerCommand(KEY_DOWN_COMMAND, function (event) {
        if (!isOpen) {
          return false;
        }
        switch (event.key) {
          case "Escape":
            {
              event.preventDefault();
              closeMenu();
              return true;
            }
          case "ArrowDown":
            {
              event.preventDefault();
              setSelectedIndex(function (prev_0) {
                return prev_0 < filteredCommands.length - 1 ? prev_0 + 1 : 0;
              });
              return true;
            }
          case "ArrowUp":
            {
              event.preventDefault();
              setSelectedIndex(function (prev) {
                return prev > 0 ? prev - 1 : filteredCommands.length - 1;
              });
              return true;
            }
          case "Enter":
            {
              event.preventDefault();
              if (filteredCommands[selectedIndex]) {
                executeCommand(filteredCommands[selectedIndex]);
              }
              return true;
            }
          case "Tab":
            {
              event.preventDefault();
              if (filteredCommands[selectedIndex]) {
                executeCommand(filteredCommands[selectedIndex]);
              }
              return true;
            }
        }
        return false;
      }, COMMAND_PRIORITY_LOW), editor.registerUpdateListener(function (t7) {
        var editorState = t7.editorState;
        editorState.read(function () {
          var selection = $getSelection();
          if (!$isRangeSelection(selection) || !selection.isCollapsed()) {
            if (isOpen) {
              closeMenu();
            }
            return;
          }
          var anchorNode = selection.anchor.getNode();
          if (!(anchorNode instanceof TextNode)) {
            if (isOpen) {
              closeMenu();
            }
            return;
          }
          var text_0 = anchorNode.getTextContent();
          var anchorOffset = selection.anchor.offset;
          var beforeCursor = text_0.substring(0, anchorOffset);
          var slashMatch = beforeCursor.match(/\/(\w*)$/);
          if (slashMatch) {
            var _slashMatch = _slicedToArray(slashMatch, 2),
              term = _slashMatch[1];
            var slashPosition = beforeCursor.lastIndexOf("/");
            if (slashPosition === 0 || /\s/.test(beforeCursor[slashPosition - 1])) {
              setSearchTerm(term);
              setTriggerNodeKey(anchorNode.getKey());
              setSelectedIndex(0);
              var domSelection = window.getSelection();
              if (domSelection && domSelection.rangeCount > 0) {
                var range = domSelection.getRangeAt(0);
                var rect = range.getBoundingClientRect();
                setPosition({
                  x: rect.left,
                  y: rect.bottom + window.scrollY + 4
                });
              }
              setIsOpen(true);
            }
          } else {
            if (isOpen) {
              closeMenu();
            }
          }
        });
      }));
    };
    t6 = [editor, isOpen, closeMenu, filteredCommands, selectedIndex, executeCommand];
    $[11] = editor;
    $[12] = executeCommand;
    $[13] = filteredCommands;
    $[14] = isOpen;
    $[15] = selectedIndex;
    $[16] = t5;
    $[17] = t6;
  } else {
    t5 = $[16];
    t6 = $[17];
  }
  React.useEffect(t5, t6);
  if (!isOpen || filteredCommands.length === 0) {
    return null;
  }
  var t7;
  if ($[18] !== position.x || $[19] !== position.y) {
    t7 = {
      left: position.x,
      top: position.y
    };
    $[18] = position.x;
    $[19] = position.y;
    $[20] = t7;
  } else {
    t7 = $[20];
  }
  var t8;
  if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /*#__PURE__*/_jsx("div", {
      className: "text-muted-foreground px-2 py-1.5 text-xs",
      children: "Commands"
    });
    $[21] = t8;
  } else {
    t8 = $[21];
  }
  var t9;
  if ($[22] !== executeCommand || $[23] !== filteredCommands || $[24] !== selectedIndex) {
    var _t3;
    if ($[26] !== executeCommand || $[27] !== selectedIndex) {
      _t3 = function _t3(command_0, index) {
        return /*#__PURE__*/_jsx("button", {
          className: cn("hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full rounded-sm px-2 py-1.5 text-left text-sm transition-colors", {
            "bg-accent text-accent-foreground": index === selectedIndex
          }),
          onClick: function onClick() {
            return executeCommand(command_0);
          },
          onMouseEnter: function onMouseEnter() {
            return setSelectedIndex(index);
          },
          children: /*#__PURE__*/_jsxs("div", {
            className: "flex items-center gap-2",
            children: [command_0.icon && /*#__PURE__*/_jsx("span", {
              className: "text-muted-foreground flex-shrink-0",
              children: command_0.icon
            }), /*#__PURE__*/_jsxs("div", {
              className: "flex-1",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "font-medium",
                children: ["/", command_0.key]
              }), command_0.description && /*#__PURE__*/_jsx("div", {
                className: "text-muted-foreground text-xs",
                children: command_0.description
              })]
            })]
          })
        }, command_0.key);
      };
      $[26] = executeCommand;
      $[27] = selectedIndex;
      $[28] = _t3;
    } else {
      _t3 = $[28];
    }
    t9 = filteredCommands.map(_t3);
    $[22] = executeCommand;
    $[23] = filteredCommands;
    $[24] = selectedIndex;
    $[25] = t9;
  } else {
    t9 = $[25];
  }
  var t10;
  if ($[29] !== t7 || $[30] !== t9) {
    t10 = /*#__PURE__*/_jsx(Portal, {
      children: /*#__PURE__*/_jsxs("div", {
        className: "bg-popover text-popover-foreground fixed z-50 min-w-48 rounded-md border p-1 shadow-md",
        style: t7,
        children: [t8, t9]
      })
    });
    $[29] = t7;
    $[30] = t9;
    $[31] = t10;
  } else {
    t10 = $[31];
  }
  return t10;
}

//# sourceMappingURL=slash-command-plugin.js.map