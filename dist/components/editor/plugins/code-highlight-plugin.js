import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
import { c as _c } from "react/compiler-runtime";
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $isCodeNode, CodeNode } from '@lexical/code';
import { $getRoot } from 'lexical';
import { useEffect } from 'react';
function generateGutter(content) {
  var lines = content.split('\n');
  return lines.map(function (_, index) {
    return index + 1;
  }).join('\n');
}
export function CodeHighlightPlugin() {
  var $ = _c(3);
  var _useLexicalComposerCo = useLexicalComposerContext(),
    _useLexicalComposerCo2 = _slicedToArray(_useLexicalComposerCo, 1),
    editor = _useLexicalComposerCo2[0];
  var t0;
  var t1;
  if ($[0] !== editor) {
    t0 = function t0() {
      var updateCodeBlocks = function updateCodeBlocks() {
        var root = $getRoot();
        var codeNodes = [];
        root.getChildren().forEach(function (child) {
          if ($isCodeNode(child)) {
            codeNodes.push(child);
          }
        });
        codeNodes.forEach(function (codeNode) {
          var textContent = codeNode.getTextContent();
          var gutter = generateGutter(textContent);
          var domElement = editor.getElementByKey(codeNode.getKey());
          if (domElement && domElement instanceof HTMLElement) {
            domElement.setAttribute("data-gutter", gutter);
          }
        });
      };
      var unregisterListener = editor.registerUpdateListener(function (t2) {
        var editorState = t2.editorState;
        editorState.read(function () {
          updateCodeBlocks();
        });
      });
      var unregisterMutationListener = editor.registerMutationListener(CodeNode, function (mutatedNodes) {
        var _iterator = _createForOfIteratorHelper(mutatedNodes),
          _step;
        try {
          var _loop = function _loop() {
            var _step$value = _slicedToArray(_step.value, 2),
              nodeKey = _step$value[0],
              mutation = _step$value[1];
            if (mutation === "updated" || mutation === "created") {
              editor.getEditorState().read(function () {
                var node = editor.getEditorState()._nodeMap.get(nodeKey);
                if ($isCodeNode(node)) {
                  var textContent_0 = node.getTextContent();
                  var gutter_0 = generateGutter(textContent_0);
                  var domElement_0 = editor.getElementByKey(nodeKey);
                  if (domElement_0 && domElement_0 instanceof HTMLElement) {
                    domElement_0.setAttribute("data-gutter", gutter_0);
                  }
                }
              });
            }
          };
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      editor.getEditorState().read(function () {
        updateCodeBlocks();
      });
      return function () {
        unregisterListener();
        unregisterMutationListener();
      };
    };
    t1 = [editor];
    $[0] = editor;
    $[1] = t0;
    $[2] = t1;
  } else {
    t0 = $[1];
    t1 = $[2];
  }
  useEffect(t0, t1);
  return null;
}

//# sourceMappingURL=code-highlight-plugin.js.map