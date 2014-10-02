ace.define("ace/theme/user",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-user";
exports.cssText = "\
.ace-user .ace_gutter {\
background: #7f8c8d;\
color: #AAA;\
}\
.ace-user  {\
background: #fff;\
color: #000;\
}\
.ace-user .ace_keyword {\
font-weight: bold;\
}\
.ace-user .ace_string {\
color: #D14;\
}\
.ace-user .ace_variable.ace_class {\
color: teal;\
}\
.ace-user .ace_constant.ace_numeric {\
color: #099;\
}\
.ace-user .ace_constant.ace_buildin {\
color: #0086B3;\
}\
.ace-user .ace_support.ace_function {\
color: #0086B3;\
}\
.ace-user .ace_comment {\
color: #998;\
font-style: italic;\
}\
.ace-user .ace_variable.ace_language  {\
color: #0086B3;\
}\
.ace-user .ace_paren {\
font-weight: bold;\
}\
.ace-user .ace_boolean {\
font-weight: bold;\
}\
.ace-user .ace_string.ace_regexp {\
color: #009926;\
font-weight: normal;\
}\
.ace-user .ace_variable.ace_instance {\
color: teal;\
}\
.ace-user .ace_constant.ace_language {\
font-weight: bold;\
}\
.ace-user .ace_cursor {\
color: black;\
}\
.ace-user .ace_marker-layer .ace_active-line {\
background: rgb(255, 255, 204);\
}\
.ace-user .ace_marker-layer .ace_selection {\
background: rgb(181, 213, 255);\
}\
.ace-user.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px white;\
border-radius: 2px;\
}\
.ace-user.ace_nobold .ace_line > span {\
font-weight: normal !important;\
}\
.ace-user .ace_marker-layer .ace_step {\
background: rgb(252, 255, 0);\
}\
.ace-user .ace_marker-layer .ace_stack {\
background: rgb(164, 229, 101);\
}\
.ace-user .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgb(192, 192, 192);\
}\
.ace-user .ace_gutter-active-line {\
background-color : rgba(0, 0, 0, 0.07);\
}\
.ace-user .ace_marker-layer .ace_selected-word {\
background: rgb(250, 250, 255);\
border: 1px solid rgb(200, 200, 250);\
}\
.ace-user .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-user .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\
}";

    var dom = require("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
});
