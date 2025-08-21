import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $convertFromMarkdownString, $convertToMarkdownString, TRANSFORMERS } from '@lexical/markdown';
import { $createCodeNode, $isCodeNode } from '@lexical/code';
import { $getRoot, $createTextNode } from 'lexical';
import { FileText } from "../../../icons";
import { cn } from "../../../lib/utils";
import { Button } from "../../button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../tooltip";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function MarkdownTogglePlugin(t0) {
  var $ = _c(11);
  var className = t0.className;
  var _useLexicalComposerCo = useLexicalComposerContext(),
    _useLexicalComposerCo2 = _slicedToArray(_useLexicalComposerCo, 1),
    editor = _useLexicalComposerCo2[0];
  var t1;
  if ($[0] !== editor) {
    t1 = function t1() {
      editor.update(_temp);
    };
    $[0] = editor;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  var handleMarkdownToggle = t1;
  var t2;
  if ($[2] !== className) {
    t2 = cn("px-2", className);
    $[2] = className;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  var t3;
  if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/_jsx(FileText, {
      className: "size-4"
    });
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  var t4;
  if ($[5] !== handleMarkdownToggle || $[6] !== t2) {
    t4 = /*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsx(Button, {
        variant: "ghost",
        size: "sm",
        onClick: handleMarkdownToggle,
        className: t2,
        "aria-label": "Toggle Markdown Editor",
        children: t3
      })
    });
    $[5] = handleMarkdownToggle;
    $[6] = t2;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  var t5;
  if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = /*#__PURE__*/_jsx(TooltipContent, {
      children: /*#__PURE__*/_jsx("p", {
        children: "Toggle Markdown Editor"
      })
    });
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  var t6;
  if ($[9] !== t4) {
    t6 = /*#__PURE__*/_jsxs(Tooltip, {
      children: [t4, t5]
    });
    $[9] = t4;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  return t6;
}
function _temp() {
  var root = $getRoot();
  var firstChild = root.getFirstChild();
  if ($isCodeNode(firstChild) && firstChild.getLanguage() === "markdown") {
    $convertFromMarkdownString(firstChild.getTextContent(), TRANSFORMERS);
  } else {
    var markdown = $convertToMarkdownString(TRANSFORMERS);
    root.clear();
    var codeNode = $createCodeNode("markdown");
    codeNode.append($createTextNode(markdown));
    root.append(codeNode);
  }
}

//# sourceMappingURL=markdown-toggle-plugin.js.map