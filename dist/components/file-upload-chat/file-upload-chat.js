import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["onFilesUploaded", "onFileRemoved", "onSendMessage", "placeholder", "maxFiles", "acceptedFileTypes", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { c as _c } from "react/compiler-runtime";
import * as React from 'react';
import { Button } from "../button/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip/tooltip";
import { cn } from "../../lib/utils";
import { Upload, X, FileText, Image, FileX, Send, Paperclip } from 'lucide-react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function FileUploadChat(t0) {
  var $ = _c(76);
  var className;
  var onFileRemoved;
  var onFilesUploaded;
  var onSendMessage;
  var props;
  var t1;
  var t2;
  var t3;
  if ($[0] !== t0) {
    var _t = t0;
    onFilesUploaded = _t.onFilesUploaded;
    onFileRemoved = _t.onFileRemoved;
    onSendMessage = _t.onSendMessage;
    t1 = _t.placeholder;
    t2 = _t.maxFiles;
    t3 = _t.acceptedFileTypes;
    className = _t.className;
    props = _objectWithoutProperties(_t, _excluded);
    _t;
    $[0] = t0;
    $[1] = className;
    $[2] = onFileRemoved;
    $[3] = onFilesUploaded;
    $[4] = onSendMessage;
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
    $[8] = t3;
  } else {
    className = $[1];
    onFileRemoved = $[2];
    onFilesUploaded = $[3];
    onSendMessage = $[4];
    props = $[5];
    t1 = $[6];
    t2 = $[7];
    t3 = $[8];
  }
  var placeholder = t1 === undefined ? "Type your message..." : t1;
  var maxFiles = t2 === undefined ? 5 : t2;
  var acceptedFileTypes = t3 === undefined ? ".pdf, .doc, .docx, .txt, .jpg, .jpeg, .png, .gif, .svg" : t3;
  var _React$useState = React.useState(""),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    message = _React$useState2[0],
    setMessage = _React$useState2[1];
  var t4;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = [];
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  var _React$useState3 = React.useState(t4),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    files = _React$useState4[0],
    setFiles = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    isDragOver = _React$useState6[0],
    setIsDragOver = _React$useState6[1];
  var fileInputRef = React.useRef(null);
  var textareaRef = React.useRef(null);
  var getFileIcon = _temp;
  var formatFileSize = _temp2;
  var truncateFileName = _temp3;
  var t5;
  if ($[10] !== files || $[11] !== maxFiles || $[12] !== onFilesUploaded) {
    t5 = function t5(selectedFiles) {
      var _onFilesUploaded;
      if (!selectedFiles) {
        return;
      }
      var newFiles = [];
      for (var i_0 = 0; i_0 < selectedFiles.length && files.length + newFiles.length < maxFiles; i_0++) {
        var file = selectedFiles[i_0];
        var uploadedFile = {
          id: "".concat(Date.now(), "-").concat(i_0),
          name: file.name,
          type: file.type,
          size: file.size,
          file: file
        };
        newFiles.push(uploadedFile);
      }
      var updatedFiles = [].concat(_toConsumableArray(files), newFiles);
      setFiles(updatedFiles);
      (_onFilesUploaded = onFilesUploaded) === null || _onFilesUploaded === void 0 || _onFilesUploaded(updatedFiles);
    };
    $[10] = files;
    $[11] = maxFiles;
    $[12] = onFilesUploaded;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  var handleFileSelect = t5;
  var t6;
  if ($[14] !== files || $[15] !== onFileRemoved) {
    t6 = function t6(fileId) {
      var _onFileRemoved;
      var updatedFiles_0 = files.filter(function (f) {
        return f.id !== fileId;
      });
      setFiles(updatedFiles_0);
      (_onFileRemoved = onFileRemoved) === null || _onFileRemoved === void 0 || _onFileRemoved(fileId);
    };
    $[14] = files;
    $[15] = onFileRemoved;
    $[16] = t6;
  } else {
    t6 = $[16];
  }
  var handleFileRemove = t6;
  var t7;
  if ($[17] !== files || $[18] !== message || $[19] !== onSendMessage) {
    t7 = function t7() {
      if (message.trim() || files.length > 0) {
        var _onSendMessage;
        (_onSendMessage = onSendMessage) === null || _onSendMessage === void 0 || _onSendMessage(message, files);
        setMessage("");
        setFiles([]);
      }
    };
    $[17] = files;
    $[18] = message;
    $[19] = onSendMessage;
    $[20] = t7;
  } else {
    t7 = $[20];
  }
  var handleSend = t7;
  var t8;
  if ($[21] !== handleSend) {
    t8 = function t8(e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    };
    $[21] = handleSend;
    $[22] = t8;
  } else {
    t8 = $[22];
  }
  var handleKeyDown = t8;
  var t9;
  if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
    t9 = function t9(e_0) {
      e_0.preventDefault();
      setIsDragOver(true);
    };
    $[23] = t9;
  } else {
    t9 = $[23];
  }
  var handleDragOver = t9;
  var t10;
  if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
    t10 = function t10(e_1) {
      e_1.preventDefault();
      setIsDragOver(false);
    };
    $[24] = t10;
  } else {
    t10 = $[24];
  }
  var handleDragLeave = t10;
  var t11;
  if ($[25] !== handleFileSelect) {
    t11 = function t11(e_2) {
      e_2.preventDefault();
      setIsDragOver(false);
      handleFileSelect(e_2.dataTransfer.files);
    };
    $[25] = handleFileSelect;
    $[26] = t11;
  } else {
    t11 = $[26];
  }
  var handleDrop = t11;
  var t12;
  if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = function t12() {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
      }
    };
    $[27] = t12;
  } else {
    t12 = $[27];
  }
  var t13;
  if ($[28] !== message) {
    t13 = [message];
    $[28] = message;
    $[29] = t13;
  } else {
    t13 = $[29];
  }
  React.useEffect(t12, t13);
  var t14 = isDragOver && "border-primary/50 bg-primary/5";
  var t15;
  if ($[30] !== className || $[31] !== t14) {
    t15 = cn("bg-background relative w-full max-w-4xl rounded-2xl border shadow-sm transition-all", t14, className);
    $[30] = className;
    $[31] = t14;
    $[32] = t15;
  } else {
    t15 = $[32];
  }
  var t16;
  if ($[33] !== files || $[34] !== handleFileRemove) {
    t16 = files.length > 0 && /*#__PURE__*/_jsx("div", {
      className: "flex flex-wrap gap-2 p-4 pb-2",
      children: files.map(function (file_0) {
        return /*#__PURE__*/_jsxs("div", {
          className: "bg-muted/50 flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm",
          children: [getFileIcon(file_0.type), /*#__PURE__*/_jsx("span", {
            className: "text-foreground font-medium",
            children: truncateFileName(file_0.name)
          }), /*#__PURE__*/_jsxs("span", {
            className: "text-muted-foreground text-xs",
            children: ["(", formatFileSize(file_0.size), ")"]
          }), /*#__PURE__*/_jsx(Button, {
            size: "icon",
            variant: "ghost",
            className: "hover:bg-destructive/10 hover:text-destructive size-4",
            onClick: function onClick() {
              return handleFileRemove(file_0.id);
            },
            children: /*#__PURE__*/_jsx(X, {
              className: "size-3"
            })
          })]
        }, file_0.id);
      })
    });
    $[33] = files;
    $[34] = handleFileRemove;
    $[35] = t16;
  } else {
    t16 = $[35];
  }
  var t17;
  if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
    t17 = function t17(e_3) {
      return setMessage(e_3.target.value);
    };
    $[36] = t17;
  } else {
    t17 = $[36];
  }
  var t18;
  if ($[37] !== handleKeyDown || $[38] !== message || $[39] !== placeholder) {
    t18 = /*#__PURE__*/_jsx("div", {
      className: "relative min-w-200 flex-1",
      children: /*#__PURE__*/_jsx("textarea", {
        ref: textareaRef,
        value: message,
        onChange: t17,
        onKeyDown: handleKeyDown,
        placeholder: placeholder,
        className: "placeholder:text-muted-foreground max-h-32 min-h-[24px] w-full resize-none border-0 bg-transparent py-0 text-sm leading-relaxed outline-none",
        rows: 1
      })
    });
    $[37] = handleKeyDown;
    $[38] = message;
    $[39] = placeholder;
    $[40] = t18;
  } else {
    t18 = $[40];
  }
  var t19;
  if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
    t19 = function t19() {
      var _fileInputRef$current;
      return (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
    };
    $[41] = t19;
  } else {
    t19 = $[41];
  }
  var t20 = files.length >= maxFiles;
  var t21;
  if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
    t21 = /*#__PURE__*/_jsx(Paperclip, {});
    $[42] = t21;
  } else {
    t21 = $[42];
  }
  var t22;
  if ($[43] !== t20) {
    t22 = /*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsx(Button, {
        size: "icon",
        variant: "ghost",
        onClick: t19,
        disabled: t20,
        className: "hover:bg-muted/50",
        children: t21
      })
    });
    $[43] = t20;
    $[44] = t22;
  } else {
    t22 = $[44];
  }
  var t23;
  if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
    t23 = /*#__PURE__*/_jsx(TooltipContent, {
      children: /*#__PURE__*/_jsx("p", {
        children: "Upload file"
      })
    });
    $[45] = t23;
  } else {
    t23 = $[45];
  }
  var t24;
  if ($[46] !== t22) {
    t24 = /*#__PURE__*/_jsxs(Tooltip, {
      children: [t22, t23]
    });
    $[46] = t22;
    $[47] = t24;
  } else {
    t24 = $[47];
  }
  var t25 = !message.trim() && files.length === 0;
  var t26;
  if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
    t26 = /*#__PURE__*/_jsx(Send, {});
    $[48] = t26;
  } else {
    t26 = $[48];
  }
  var t27;
  if ($[49] !== handleSend || $[50] !== t25) {
    t27 = /*#__PURE__*/_jsx(TooltipTrigger, {
      asChild: true,
      children: /*#__PURE__*/_jsx(Button, {
        size: "icon",
        onClick: handleSend,
        disabled: t25,
        className: "px-4",
        children: t26
      })
    });
    $[49] = handleSend;
    $[50] = t25;
    $[51] = t27;
  } else {
    t27 = $[51];
  }
  var t28;
  if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
    t28 = /*#__PURE__*/_jsx(TooltipContent, {
      children: /*#__PURE__*/_jsx("p", {
        children: "Send"
      })
    });
    $[52] = t28;
  } else {
    t28 = $[52];
  }
  var t29;
  if ($[53] !== t27) {
    t29 = /*#__PURE__*/_jsxs(Tooltip, {
      children: [t27, t28]
    });
    $[53] = t27;
    $[54] = t29;
  } else {
    t29 = $[54];
  }
  var t30;
  if ($[55] !== t24 || $[56] !== t29) {
    t30 = /*#__PURE__*/_jsxs("div", {
      className: "flex w-full items-center justify-between gap-1",
      children: [t24, t29]
    });
    $[55] = t24;
    $[56] = t29;
    $[57] = t30;
  } else {
    t30 = $[57];
  }
  var t31;
  if ($[58] !== t18 || $[59] !== t30) {
    t31 = /*#__PURE__*/_jsxs("div", {
      className: "flex flex-col gap-2 p-4",
      children: [t18, t30]
    });
    $[58] = t18;
    $[59] = t30;
    $[60] = t31;
  } else {
    t31 = $[60];
  }
  var t32;
  if ($[61] !== handleFileSelect) {
    t32 = function t32(e_4) {
      return handleFileSelect(e_4.target.files);
    };
    $[61] = handleFileSelect;
    $[62] = t32;
  } else {
    t32 = $[62];
  }
  var t33;
  if ($[63] !== acceptedFileTypes || $[64] !== t32) {
    t33 = /*#__PURE__*/_jsx("input", {
      ref: fileInputRef,
      type: "file",
      multiple: true,
      accept: acceptedFileTypes,
      onChange: t32,
      className: "hidden"
    });
    $[63] = acceptedFileTypes;
    $[64] = t32;
    $[65] = t33;
  } else {
    t33 = $[65];
  }
  var t34;
  if ($[66] !== isDragOver) {
    t34 = isDragOver && /*#__PURE__*/_jsx("div", {
      className: "bg-primary/5 border-primary/50 absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-dashed",
      children: /*#__PURE__*/_jsxs("div", {
        className: "text-center",
        children: [/*#__PURE__*/_jsx(Upload, {
          className: "text-primary mx-auto mb-2 size-8"
        }), /*#__PURE__*/_jsx("p", {
          className: "text-primary text-sm font-medium",
          children: "Drop files here to upload"
        })]
      })
    });
    $[66] = isDragOver;
    $[67] = t34;
  } else {
    t34 = $[67];
  }
  var t35;
  if ($[68] !== handleDrop || $[69] !== props || $[70] !== t15 || $[71] !== t16 || $[72] !== t31 || $[73] !== t33 || $[74] !== t34) {
    t35 = /*#__PURE__*/_jsx(TooltipProvider, {
      children: /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({
        className: t15,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop
      }, props), {}, {
        children: [t16, t31, t33, t34]
      }))
    });
    $[68] = handleDrop;
    $[69] = props;
    $[70] = t15;
    $[71] = t16;
    $[72] = t31;
    $[73] = t33;
    $[74] = t34;
    $[75] = t35;
  } else {
    t35 = $[75];
  }
  return t35;
}
function _temp3(name, t0) {
  var maxLength = t0 === undefined ? 20 : t0;
  if (name.length <= maxLength) {
    return name;
  }
  var ext = name.split(".").pop();
  var nameWithoutExt = name.substring(0, name.lastIndexOf("."));
  var truncated = nameWithoutExt.substring(0, maxLength - ext.length - 4) + "...";
  return truncated + "." + ext;
}
function _temp2(bytes) {
  if (bytes === 0) {
    return "0 Bytes";
  }
  var sizes = ["Bytes", "KB", "MB", "GB"];
  var i = Math.floor(Math.log(bytes) / Math.log(1024));
  return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + " " + sizes[i];
}
function _temp(fileType) {
  if (fileType.startsWith("image/")) {
    return /*#__PURE__*/_jsx(Image, {
      className: "size-4"
    });
  }
  if (fileType.includes("pdf") || fileType.includes("document") || fileType.includes("text")) {
    return /*#__PURE__*/_jsx(FileText, {
      className: "size-4"
    });
  }
  return /*#__PURE__*/_jsx(FileX, {
    className: "size-4"
  });
}
export { FileUploadChat };

//# sourceMappingURL=file-upload-chat.js.map