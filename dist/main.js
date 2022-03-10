/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./check-list.png */ \"./src/check-list.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: \\\"Roboto\\\";\\n}\\n\\nhtml,\\nbody {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n#content {\\n  width: 100%;\\n  height: 100%;\\n  background-color: #eee;\\n}\\n\\n#nav {\\n  background-color: #222;\\n  height: 15%;\\n  width: 100%;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  display: flex;\\n  align-items: center;\\n  padding-left: 3%;\\n}\\n\\n#checked {\\n  height: 60%;\\n}\\n\\n#title {\\n  margin-left: 50px;\\n  color: white;\\n  font-size: 42px;\\n}\\n\\n#sidebar {\\n  width: 25%;\\n  height: 100%;\\n  background-color: #ccc;\\n  position: fixed;\\n  top: 15%;\\n  left: 0;\\n  padding-top: 30px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n#addProjectDiv {\\n  box-sizing: border-box;\\n  height: 40px;\\n  width: 80%;\\n  max-width: 80%;\\n  font-size: 20px;\\n  font-weight: lighter;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  border-radius: 5px;\\n  margin-top: 20px;\\n  padding-left: 15px;\\n}\\n\\n#addProjectDiv:hover {\\n  cursor: pointer;\\n  background-color: #bbb;\\n}\\n\\n#plus {\\n  height: 40%;\\n  margin-right: 15px;\\n}\\n\\nform {\\n  width: 80%;\\n  padding: 0;\\n  margin-top: 20px;\\n}\\n\\n#formText {\\n  font-size: 30px;\\n  font-weight: 300;\\n  max-width: 100%;\\n  height: 36px;\\n  margin: 0;\\n  margin-bottom: 20px;\\n  box-sizing: border-box;\\n}\\n\\n#buttons {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n#buttons > * {\\n  height: 36px;\\n  width: 46%;\\n  border: 1px solid #aaa;\\n  border-radius: 8px;\\n  font-size: 24px;\\n}\\n\\n#add {\\n  background-color: #7fffd4;\\n}\\n\\n#add:hover {\\n  cursor: pointer;\\n  background-color: #6fefc4;\\n}\\n\\n#cancel {\\n  background-color: #cf6c61;\\n}\\n\\n#cancel:hover {\\n  cursor: pointer;\\n  background-color: #bf5c51;\\n}\\n\\n#projectList {\\n  width: 80%;\\n}\\n\\n.projectItem {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  list-style: none;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-position-y: center;\\n  background-position-x: 10px;\\n  background-size: 20px;\\n  padding-left: 36px;\\n  font-size: 24px;\\n  font-weight: lighter;\\n  text-align: left;\\n  height: 40px;\\n  line-height: 40px;\\n  border-radius: 8px;\\n}\\n\\n.projectItem:hover {\\n  background-color: #bbb;\\n  cursor: pointer;\\n}\\n\\n.deleteButton {\\n  font-size: 24px;\\n  border: none;\\n  background-color: transparent;\\n  position: sticky;\\n  right: 0;\\n  color: transparent;\\n  margin-right: 15px;\\n}\\n\\n.projectItem:hover .deleteButton {\\n  color: #333;\\n  cursor: pointer;\\n}\\n\\n.selected {\\n  background-color: #bbb;\\n  font-weight: 500;\\n}\\n\\n#panel {\\n  display: flex;\\n  flex-direction: column;\\n  position: fixed;\\n  left: 25%;\\n  top: 15%;\\n  width: 75%;\\n  min-height: 85%;\\n  justify-content: left;\\n  padding-left: 10%;\\n  padding-right: 10%;\\n  padding-top: 3%;\\n}\\n\\n#projectTitle {\\n  font-size: 32px;\\n  font-weight: 500;\\n  color: #333;\\n  margin-bottom: 40px;\\n}\\n\\n.taskItem {\\n  display: flex;\\n  align-items: center;\\n  box-sizing: border-box;\\n  width: 70%;\\n  font-size: 24px;\\n  font-weight: 300;\\n  border-radius: 8px;\\n  padding: 5px 15px;\\n}\\n\\n.taskItem:hover {\\n  background-color: #ccc;\\n  cursor: default;\\n}\\n\\n.deleteTaskButton {\\n  width: 25px;\\n  height: 25px;\\n  border-radius: 50%;\\n  border: 2px solid #222;\\n  background-color: transparent;\\n  margin-right: 10px;\\n}\\n\\n.deleteTaskButton:hover {\\n  cursor: pointer;\\n}\\n\\n#addTaskDiv {\\n  box-sizing: border-box;\\n  width: 70%;\\n  font-size: 24px;\\n  font-weight: lighter;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  border-radius: 8px;\\n  margin-top: 20px;\\n  padding: 5px 0;\\n}\\n\\n#addTaskDiv:hover {\\n  cursor: pointer;\\n  background-color: #bbb;\\n}\\n\\n#plusTask {\\n  height: 15px;\\n  margin: 0 10px;\\n}\\n\\n#addTaskForm {\\n  width: 70%;\\n  box-sizing: border-box;\\n  padding-left: 15px;\\n}\\n\\n#addTaskForm #formText {\\n  width: 100%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"getProjectList\": () => (/* binding */ getProjectList),\n/* harmony export */   \"removeProject\": () => (/* binding */ removeProject),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel */ \"./src/panel.js\");\n\n\n\n\n\nvar projectList = {};\nif (localStorage.projectList != undefined)\n  projectList = JSON.parse(localStorage.projectList);\n\nconst updateLocalStorage = () => {\n  localStorage.projectList = JSON.stringify(projectList);\n};\n\nconst Project = (title) => {\n  let tasks = [];\n\n  return { title, tasks };\n};\n\nconst Task = (name) => {\n  return { name };\n};\n\nconst addProject = (title) => {\n  if (projectList[title] == undefined) {\n    projectList[title] = Project(title);\n    updateLocalStorage();\n  } else {\n    alert(\"Two projects can't have the same name\");\n  }\n};\n\nconst removeProject = (title) => {\n  if (projectList[title] != undefined) {\n    delete projectList[title];\n    updateLocalStorage();\n  }\n};\n\nconst addTask = (name, project) => {\n  if (projectList[project] == undefined) {\n    alert(\"The required project doesn't exist\");\n  } else if (\n    projectList[project].tasks.map((element) => element.name).indexOf(name) > -1\n  ) {\n    alert(\"There can't be two tasks with the same name in the same project\");\n  } else {\n    projectList[project].tasks.push(Task(name));\n    updateLocalStorage();\n  }\n};\n\nconst removeTask = (name, title) => {\n  let project = projectList[title];\n  if (project != undefined) {\n    let index = -1;\n    for (let i = 0; i < project.tasks.length; i++) {\n      if (project.tasks[i].name == name) {\n        index = i;\n        break;\n      }\n    }\n    if (index != -1) {\n      project.tasks.splice(index, 1);\n      updateLocalStorage();\n    }\n  }\n};\n\nconst getProjectList = () => projectList;\n\n(0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.sidebar)();\n(0,_panel__WEBPACK_IMPORTED_MODULE_3__.panel)();\n\n\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navbar\": () => (/* binding */ navbar)\n/* harmony export */ });\n/* harmony import */ var _checked_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checked.png */ \"./src/checked.png\");\n\n\nconst navbar = (() => {\n  let nav = document.createElement(\"div\");\n  nav.id = \"nav\";\n\n  let img = document.createElement(\"img\");\n  img.id = \"checked\";\n  img.src = _checked_png__WEBPACK_IMPORTED_MODULE_0__;\n\n  let title = document.createElement(\"h1\");\n  title.id = \"title\";\n  title.textContent = \"Todo List\";\n\n  nav.appendChild(img);\n  nav.appendChild(title);\n\n  content = document.getElementById(\"content\");\n  content.appendChild(nav);\n})();\n\n\n\n\n//# sourceURL=webpack://todolist/./src/navbar.js?");

/***/ }),

/***/ "./src/panel.js":
/*!**********************!*\
  !*** ./src/panel.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"panel\": () => (/* binding */ panel)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.js */ \"./src/sidebar.js\");\n/* harmony import */ var _plus_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plus.png */ \"./src/plus.png\");\n\n\n\n\nconst panel = () => {\n  let panel = document.createElement(\"div\");\n  panel.id = \"panel\";\n  const updateTasks = () => {\n    panel.innerHTML = \"\";\n    let currentProjectTitle = document.createElement(\"h3\");\n    currentProjectTitle.id = \"projectTitle\";\n    currentProjectTitle.textContent = (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)();\n    panel.appendChild(currentProjectTitle);\n    if ((0,_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)() != \"\") {\n      let tasks = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getProjectList)()[(0,_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)()][\"tasks\"];\n      for (let task of tasks) {\n        let taskItem = document.createElement(\"div\");\n        taskItem.classList.add(\"taskItem\");\n\n        let deleteTaskButton = document.createElement(\"button\");\n        deleteTaskButton.classList.add(\"deleteTaskButton\");\n        taskItem.appendChild(deleteTaskButton);\n        deleteTaskButton.addEventListener(\"click\", deleteTask);\n\n        let taskName = document.createElement(\"p\");\n        taskName.textContent = task.name;\n        taskItem.appendChild(taskName);\n\n        panel.appendChild(taskItem);\n      }\n    }\n  };\n\n  const deleteTask = (e) => {\n    let project = (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)();\n    let name = e.target.parentNode.querySelector(\"p\").textContent;\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.removeTask)(name, project);\n    updateTasks();\n    createAddTaskDiv();\n  };\n\n  const createAddTaskDiv = () => {\n    let addTaskDiv = document.createElement(\"div\");\n    addTaskDiv.id = \"addTaskDiv\";\n    addTaskDiv.onclick = addTaskDivOnClick;\n\n    let img = document.createElement(\"img\");\n    img.src = _plus_png__WEBPACK_IMPORTED_MODULE_2__;\n    img.id = \"plusTask\";\n\n    let addTaskText = document.createElement(\"p\");\n    addTaskText.id = \"addTaskText\";\n    addTaskText.textContent = \"Add Task\";\n\n    addTaskDiv.appendChild(img);\n    addTaskDiv.appendChild(addTaskText);\n\n    panel.appendChild(addTaskDiv);\n  };\n\n  const addTaskDivOnClick = () => {\n    panel.removeChild(panel.lastChild);\n    createAddTaskForm();\n  };\n\n  const createAddTaskForm = () => {\n    let addTaskForm = document.createElement(\"form\");\n    addTaskForm.id = \"addTaskForm\";\n    addTaskForm.onsubmit = addTaskFormSubmit;\n\n    let formText = document.createElement(\"input\");\n    formText.type = \"text\";\n    formText.name = \"taskName\";\n    formText.id = \"formText\";\n    formText.autocomplete = \"off\";\n\n    let buttons = document.createElement(\"div\");\n    buttons.id = \"buttons\";\n\n    let addButton = document.createElement(\"input\");\n    addButton.type = \"submit\";\n    addButton.value = \"Add\";\n    addButton.id = \"add\";\n\n    let cancelButton = document.createElement(\"input\");\n    cancelButton.type = \"button\";\n    cancelButton.value = \"Cancel\";\n    cancelButton.id = \"cancel\";\n    cancelButton.onclick = cancelButtonOnClick;\n\n    buttons.appendChild(addButton);\n    buttons.appendChild(cancelButton);\n\n    addTaskForm.appendChild(formText);\n    addTaskForm.appendChild(buttons);\n\n    panel.appendChild(addTaskForm);\n  };\n\n  const addTaskFormSubmit = () => {\n    let formData = new FormData(document.getElementById(\"addTaskForm\"));\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addTask)(formData.get(\"taskName\"), (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)());\n    panel.removeChild(panel.lastChild);\n\n    panel.innerHTML = \"\";\n\n    updateTasks();\n    createAddTaskDiv();\n    e.preventDefault();\n  };\n\n  const cancelButtonOnClick = () => {\n    panel.removeChild(panel.lastChild);\n    createAddTaskDiv();\n  };\n\n  updateTasks();\n  if ((0,_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)() != \"\") createAddTaskDiv();\n  document.querySelector(\"#content\").appendChild(panel);\n};\n\n\n\n\n//# sourceURL=webpack://todolist/./src/panel.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCurrentProject\": () => (/* binding */ getCurrentProject),\n/* harmony export */   \"sidebar\": () => (/* binding */ sidebar)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _panel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel.js */ \"./src/panel.js\");\n/* harmony import */ var _plus_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plus.png */ \"./src/plus.png\");\n\n\n\n\nlet currentProject = \"\";\n\nconst sidebar = () => {\n  let sidebar = document.createElement(\"div\");\n  sidebar.id = \"sidebar\";\n\n  const createProjectDivs = () => {\n    let projectList = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getProjectList)();\n\n    let projectsTitle = document.createElement(\"h3\");\n    projectsTitle.textContent = \"Projects\";\n    projectsTitle.style.fontSize = \"30px\";\n    projectsTitle.style.marginBottom = \"20px\";\n    sidebar.appendChild(projectsTitle);\n\n    let unorderedList = document.createElement(\"ul\");\n    unorderedList.id = \"projectList\";\n\n    for (let name in projectList) {\n      let projectItem = document.createElement(\"li\");\n      projectItem.className = \"projectItem\";\n\n      let projectName = document.createElement(\"p\");\n      projectName.textContent = name;\n      projectItem.appendChild(projectName);\n\n      projectItem.addEventListener(\"click\", selectProject);\n\n      let deleteButton = document.createElement(\"button\");\n      deleteButton.classList.add(\"deleteButton\");\n      deleteButton.textContent = \"\\u00d7\";\n      deleteButton.onclick = deleteProjectButton;\n\n      projectItem.appendChild(deleteButton);\n      unorderedList.appendChild(projectItem);\n    }\n\n    sidebar.append(unorderedList);\n\n    let projectDivs = document.querySelectorAll(\".projectItem\");\n    for (let proj of projectDivs) {\n      if (proj.textContent == currentProject) {\n        proj.classList.add(\"selected\");\n      }\n    }\n  };\n\n  const selectProject = (e) => {\n    let name = e.currentTarget.querySelector(\"p\").textContent;\n    let projectDivs = document.querySelectorAll(\".projectItem\");\n    for (let proj of projectDivs) {\n      if (proj.textContent == currentProject) {\n        proj.classList.remove(\"selected\");\n      }\n    }\n    for (let proj of projectDivs) {\n      if (proj.textContent == name) {\n        proj.classList.add(\"selected\");\n      }\n    }\n    currentProject = name;\n\n    if (document.getElementById(\"panel\") != undefined)\n      document\n        .getElementById(\"content\")\n        .removeChild(document.getElementById(\"panel\"));\n\n    (0,_panel_js__WEBPACK_IMPORTED_MODULE_1__.panel)();\n  };\n\n  const deleteProjectButton = (e) => {\n    e.stopPropagation();\n    let name = e.target.parentNode.querySelector(\"p\").textContent;\n    if (name == currentProject) {\n      currentProject = \"\";\n      document\n        .querySelector(\"#content\")\n        .removeChild(document.querySelector(\"#panel\"));\n      (0,_panel_js__WEBPACK_IMPORTED_MODULE_1__.panel)();\n    }\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.removeProject)(name);\n    sidebar.innerHTML = \"\";\n    setup();\n  };\n\n  const createAddProjectDiv = () => {\n    let addProjectDiv = document.createElement(\"div\");\n    addProjectDiv.id = \"addProjectDiv\";\n    addProjectDiv.onclick = addProjectDivOnClick;\n\n    let img = document.createElement(\"img\");\n    img.src = _plus_png__WEBPACK_IMPORTED_MODULE_2__;\n    img.id = \"plus\";\n\n    let addProjectText = document.createElement(\"p\");\n    addProjectText.id = \"addProjectText\";\n    addProjectText.textContent = \"Add Project\";\n\n    addProjectDiv.appendChild(img);\n    addProjectDiv.appendChild(addProjectText);\n\n    sidebar.appendChild(addProjectDiv);\n\n    let content = document.getElementById(\"content\");\n    content.appendChild(sidebar);\n  };\n\n  const addProjectDivOnClick = (e) => {\n    e.preventDefault();\n    let sidebar = document.getElementById(\"sidebar\");\n    sidebar.removeChild(sidebar.lastChild);\n    createAddProjectForm();\n  };\n\n  const createAddProjectForm = () => {\n    let addProjectForm = document.createElement(\"form\");\n    addProjectForm.id = \"addProjectForm\";\n    addProjectForm.onsubmit = addProjectFormSubmit;\n\n    let formText = document.createElement(\"input\");\n    formText.type = \"text\";\n    formText.name = \"projectName\";\n    formText.id = \"formText\";\n    formText.autocomplete = \"off\";\n\n    let buttons = document.createElement(\"div\");\n    buttons.id = \"buttons\";\n\n    let addButton = document.createElement(\"input\");\n    addButton.type = \"submit\";\n    addButton.value = \"Add\";\n    addButton.id = \"add\";\n\n    let cancelButton = document.createElement(\"input\");\n    cancelButton.type = \"button\";\n    cancelButton.value = \"Cancel\";\n    cancelButton.id = \"cancel\";\n    cancelButton.onclick = cancelButtonOnClick;\n\n    buttons.appendChild(addButton);\n    buttons.appendChild(cancelButton);\n\n    addProjectForm.appendChild(formText);\n    addProjectForm.appendChild(buttons);\n\n    sidebar.appendChild(addProjectForm);\n  };\n\n  const addProjectFormSubmit = (e) => {\n    let formData = new FormData(document.getElementById(\"addProjectForm\"));\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(formData.get(\"projectName\"));\n    sidebar.removeChild(sidebar.lastChild);\n\n    sidebar.innerHTML = \"\";\n\n    createProjectDivs();\n    createAddProjectDiv();\n    e.preventDefault();\n  };\n\n  const cancelButtonOnClick = (e) => {\n    e.preventDefault();\n    sidebar.removeChild(sidebar.lastChild);\n    createAddProjectDiv();\n  };\n\n  const setup = () => {\n    createProjectDivs();\n    createAddProjectDiv();\n  };\n\n  setup();\n};\n\nconst getCurrentProject = () => currentProject;\n\n\n\n\n//# sourceURL=webpack://todolist/./src/sidebar.js?");

/***/ }),

/***/ "./src/check-list.png":
/*!****************************!*\
  !*** ./src/check-list.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d4561524dfbfe2e8588c.png\";\n\n//# sourceURL=webpack://todolist/./src/check-list.png?");

/***/ }),

/***/ "./src/checked.png":
/*!*************************!*\
  !*** ./src/checked.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f298cca57a5a8b36055.png\";\n\n//# sourceURL=webpack://todolist/./src/checked.png?");

/***/ }),

/***/ "./src/plus.png":
/*!**********************!*\
  !*** ./src/plus.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fbb9097de10183985ab4.png\";\n\n//# sourceURL=webpack://todolist/./src/plus.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;