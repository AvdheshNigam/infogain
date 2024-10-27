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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/********************Variables*************************/\n/*******************Main Section**************************/\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: \"Poppins\", sans-serif;\n  height: 100%;\n  background: linear-gradient(180deg, #ace0f9 100px, transparent calc(100% - 100px));\n  background-attachment: fixed;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nmain {\n  width: 100%;\n  margin: 0 auto;\n  padding: 15px;\n}\n@media (min-width: 1023px) {\n  main {\n    max-width: 80%;\n  }\n}\n\ni {\n  font-style: normal;\n}\n\nbutton {\n  border: none;\n  border-radius: 2px;\n  padding: 7px 18px;\n  font-size: 16px;\n  cursor: pointer;\n  color: #fff;\n  background-color: #2196f3;\n  outline: none;\n  background-position: center;\n  transition: background 0.8s;\n}\nbutton > span {\n  display: inline-block;\n  margin-right: 5px;\n}\nbutton:hover {\n  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;\n}\nbutton:active {\n  background-color: #6eb9f7;\n  background-size: 100%;\n  transition: background 0s;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 15px;\n  width: 100%;\n  margin: 0 auto;\n}\n@media (min-width: 1024px) {\n  .header {\n    max-width: 80%;\n  }\n}\n.header__logo {\n  display: block;\n}\n.header__logo > img {\n  width: 30px;\n}\n.header__title {\n  margin: 0;\n  padding: 0;\n  color: #000;\n}\n@media (max-width: 991px) {\n  .header__title {\n    display: none;\n  }\n}\n@media (max-width: 991px) {\n  .header > button {\n    background: transparent;\n  }\n}\n.header > button > span {\n  color: #ffffff;\n  font-size: 40px;\n}\n@media (min-width: 991px) {\n  .header > button > span {\n    display: none;\n  }\n}\n.header > button > i {\n  display: block;\n}\n@media (max-width: 991px) {\n  .header > button > i {\n    display: none;\n  }\n}\n\n.search {\n  display: flex;\n  justify-content: flex-start;\n  background: #4ebaed;\n  padding: 15px 15px;\n  margin-top: 15px;\n  gap: 10px;\n  border-top-right-radius: 30px;\n  border-top-left-radius: 30px;\n}\n@media (max-width: 991px) {\n  .search {\n    justify-content: space-between;\n  }\n}\n.search__input {\n  font-size: 20px;\n  padding: 7px 0px;\n  border: none;\n  border-bottom: 1px solid #ffffff;\n  background: transparent;\n  color: #ffffff;\n}\n@media (min-width: 1024px) {\n  .search__input {\n    width: 30%;\n  }\n}\n@media (max-width: 991px) {\n  .search__input {\n    width: 60%;\n  }\n}\n.search__input:focus {\n  outline: none;\n}\n.search__input::placeholder {\n  color: #ffffff;\n}\n.search__btn {\n  display: block;\n}\n\n.weather-container {\n  display: flex;\n  flex-direction: column;\n}\n.weather-container__current {\n  display: flex;\n  background: #4ebaed;\n  justify-content: space-between;\n  padding: 15px 15px;\n  border-bottom-left-radius: 30px;\n  border-bottom-right-radius: 30px;\n}\n@media (max-width: 671px) {\n  .weather-container__current {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n.weather-container__current__details {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (max-width: 990px) {\n  .weather-container__current__details {\n    flex-direction: column;\n  }\n}\n.weather-container__current__details > h2 {\n  font-size: 30px;\n  margin: 0;\n  padding: 0;\n}\n.weather-container__current__details > h2 > i {\n  display: block;\n  font-size: 17px;\n  font-weight: 200;\n}\n.weather-container__current__details > h2 > span {\n  display: block;\n  font-size: 17px;\n  font-weight: 200;\n}\n.weather-container__current__details > h2 > span > i {\n  font-size: 17px;\n  font-weight: 800;\n}\n.weather-container__current__details > h4 {\n  font-size: 30px;\n  margin: 0;\n  padding: 0;\n}\n.weather-container__current__details > h4 > span {\n  display: block;\n  font-size: 55px;\n  font-weight: 200;\n}\n.weather-container__current__details > h4 > span > img {\n  vertical-align: middle;\n  max-width: 100%;\n}\n.weather-container__current__details p {\n  font-size: 15px;\n  padding: 5px 15px;\n  margin: 0;\n  line-height: 1;\n}\n.weather-container__current__image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.weather-container__current__image > h4 {\n  text-transform: uppercase;\n  color: #68ceff;\n  margin: 0;\n  padding: 0;\n  line-height: 0.8;\n  text-align: right;\n  font-size: 50px;\n  padding: 15px 0;\n}\n@media (max-width: 990px) {\n  .weather-container__current__image > h4 {\n    text-align: center;\n  }\n}\n\n.forecast {\n  display: block;\n}\n.forecast > h1 {\n  margin: 0;\n  padding: 15px;\n}\n\n.weather-container__list {\n  margin: 0;\n  padding: 0;\n}\n.weather-container__list__item {\n  list-style: none;\n  display: inline-block;\n  padding: 15px 0;\n}\n@media (max-width: 500px) {\n  .weather-container__list__item {\n    width: 100%;\n  }\n}\n@media (min-width: 501px) and (max-width: 990px) {\n  .weather-container__list__item {\n    width: 50%;\n  }\n}\n@media (min-width: 991px) and (max-width: 1200px) {\n  .weather-container__list__item {\n    width: 33.333%;\n  }\n}\n@media (min-width: 1200px) {\n  .weather-container__list__item {\n    width: 33.333%;\n  }\n}\n@media (min-width: 1400px) {\n  .weather-container__list__item {\n    width: 20%;\n  }\n}\n.weather-container__list__item__card {\n  display: block;\n  padding: 15px 15px;\n  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);\n  border-radius: 5px;\n  border: 1px solid #ffffff;\n  box-shadow: 0px 3px 3px #dddddd;\n  margin: 10px;\n}\n.weather-container__list__item__card > h2 {\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  font-weight: 500;\n}\n.weather-container__list__item__card > h4 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 50px;\n  font-weight: 200;\n  margin: 0;\n  padding: 0;\n}\n.weather-container__list__item__card > h4 > img {\n  vertical-align: middle;\n  max-width: 100%;\n}\n.weather-container__list__item__card > p {\n  display: flex;\n  justify-content: space-between;\n  font-size: 17px;\n  font-weight: 400;\n}\n.weather-container__list__item__card > img {\n  display: block;\n  margin: 0 auto;\n}\n\n/*******************Loader CSS***********************/\n.js-loader {\n  display: block;\n  margin: 0 auto;\n  width: 120px;\n  height: 22px;\n  border-radius: 20px;\n  color: #2196f3;\n  border: 2px solid;\n  position: relative;\n}\n.js-loader:before {\n  content: \"\";\n  position: absolute;\n  margin: 2px;\n  inset: 0 100% 0 0;\n  border-radius: inherit;\n  background: currentColor;\n  animation: l6 2s infinite;\n}\n\n@keyframes l6 {\n  100% {\n    inset: 0;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://infogain_test/./src/css/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://infogain_test/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://infogain_test/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://infogain_test/./src/css/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://infogain_test/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://infogain_test/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://infogain_test/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://infogain_test/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://infogain_test/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://infogain_test/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ \"./src/css/index.scss\");\nconsole.log(\"running...\");\n\nvar cityInput = document.querySelector(\".search__input\");\nvar searchButton = document.querySelector(\".search__btn\");\nvar currentLoctionButton = document.querySelector(\".header__btn\");\nvar currentWeaherDiv = document.querySelector(\".weather-container__current\");\nvar loader = document.querySelector(\".js-loader\");\nvar weatherlist = document.querySelector(\".weather-container__list\");\nvar API_KEY = \"119dbed2cff683a9f6d4edf84d63836f\";\nvar createWeatherCard = function (cityName, country, weatherItem, index) {\n    var dayNames = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\n    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n    if (index === 0) {\n        return \"<div class=\\\"weather-container__current__details\\\">\\n      <h2> <span><i>Now </i> \".concat(monthNames[\"\".concat(new Date((weatherItem.dt_txt).split(\" \")[0]).getMonth())], \" \").concat(weatherItem.dt_txt.split(\" \")[0].split(\"-\")[2], \"</span>\").concat(cityName, \", \").concat(country, \" </h2>\\n        <h4> <span><img src=\\\"https://openweathermap.org/img/wn/\").concat(weatherItem.weather[0].icon, \"@2x.png\\\" alt=\\\"\\\" />\\n          \").concat((weatherItem.main.temp - 273.15).toFixed(0), \"&deg;C </span></h4>\\n            <p>\\n            <span><i>Temp: Min </i> \").concat((weatherItem.main.temp_min - 273.15).toFixed(0), \"&deg;C </span >\\n              <span><i>Max </i>: \").concat((weatherItem.main.temp_max - 273.15).toFixed(0), \"&deg;C</span >\\n              </p>\\n              <p>\\n              <span><i>Wind </i> \").concat(weatherItem.wind.speed, \" KM </span >\\n              <span><i>Humidity </i>: \").concat(weatherItem.main.humidity, \"%</span >\\n              </p>\\n              </div>\\n              <div div div class=\\\"weather-container__current__image\\\">\\n                  <h4>\").concat(weatherItem.weather[0].description, \" </h4>\\n                    </div>\");\n    }\n    else {\n        return \"<li class=\\\"weather-container__list__item\\\">\\n              <div class=\\\"weather-container__list__item__card\\\">\\n                <h2><span>\".concat(dayNames[\"\".concat(new Date((weatherItem.dt_txt).split(\" \")[0]).getDay())], \", \").concat(monthNames[\"\".concat(new Date((weatherItem.dt_txt).split(\" \")[0]).getMonth())], \", \").concat(weatherItem.dt_txt.split(\" \")[0].split(\"-\")[2], \"</span> </h2>\\n                <h4>\").concat((weatherItem.main.temp - 273.15).toFixed(0), \"&deg;C <img src=\\\"https://openweathermap.org/img/wn/\").concat(weatherItem.weather[0].icon, \"@2x.png\\\" alt=\\\"\\\"  /></h4>\\n                \\n                <p>\\n                  <span><i>Wind</i> \").concat(weatherItem.wind.speed, \" KM </span> \\n                  <span><i>Humidity</i>: \").concat(weatherItem.main.humidity, \"%</span>\\n                </p>\\n              </div>\\n          </li>\");\n    }\n};\nvar getWeatherDetails = function (cityName, country, lat, lon) {\n    var WEATHER_API_URL = \"https://api.openweathermap.org/data/2.5/forecast?lat=\".concat(lat, \"&lon=\").concat(lon, \"&appid=\").concat(API_KEY);\n    loader.style.display = \"block\";\n    fetch(WEATHER_API_URL).then(function (res) { return res.json(); }).then(function (data) {\n        loader.style.display = \"none\";\n        console.log(\"data\", data);\n        var qniqueForcastDays = [];\n        var fiveDaysForecast = data.list.filter(function (forecast) {\n            var forecastDate = new Date(forecast.dt_txt).getDate();\n            if (!qniqueForcastDays.includes(forecastDate)) {\n                return qniqueForcastDays.push(forecastDate);\n            }\n        });\n        cityInput.value = \"\";\n        weatherlist.innerHTML = \"\";\n        currentWeaherDiv.innerHTML = \"\";\n        console.log(fiveDaysForecast);\n        fiveDaysForecast.forEach(function (weatherItem, index) {\n            if (index === 0) {\n                currentWeaherDiv.insertAdjacentHTML(\"beforeend\", createWeatherCard(cityName, country, weatherItem, index));\n            }\n            else {\n                weatherlist.insertAdjacentHTML(\"beforeend\", createWeatherCard(cityName, country, weatherItem, index));\n            }\n        });\n    }).catch(function (error) {\n        alert(\"An Error occured while fetching the data \".concat(error));\n    });\n};\nvar getCityCoordinates = function () {\n    var cityName = cityInput.value.trim();\n    if (!cityName)\n        return;\n    console.log(cityName);\n    var GEOCODING_API_URL = \"http://api.openweathermap.org/geo/1.0/direct?q=\".concat(cityName, \"&limit=1&appid=\").concat(API_KEY);\n    fetch(GEOCODING_API_URL).then(function (res) { return res.json(); }).then(function (data) {\n        console.log(data);\n        if (!data.length) {\n            return alert(\"No coordinates found for \".concat(cityName));\n        }\n        var _a = data[0], name = _a.name, country = _a.country, lat = _a.lat, lon = _a.lon;\n        getWeatherDetails(name, country, lat, lon);\n    }).catch(function (error) {\n        return alert(\"An error occured while fetching the data \".concat(error));\n    });\n};\nvar getUserCoordinates = function () {\n    navigator.geolocation.getCurrentPosition(function (position) {\n        console.log(position);\n        var _a = position.coords, latitude = _a.latitude, longitude = _a.longitude;\n        var REVERSE_GEOCODING_URL = \"http://api.openweathermap.org/geo/1.0/reverse?lat=\".concat(latitude, \"&lon=\").concat(longitude, \"&limit=1&appid=\").concat(API_KEY);\n        fetch(REVERSE_GEOCODING_URL).then(function (res) { return res.json(); }).then(function (data) {\n            console.log(data);\n            var _a = data[0], name = _a.name, country = _a.country;\n            console.log(name, country);\n            getWeatherDetails(name, country, latitude, longitude);\n        }).catch(function (error) {\n            return alert(\"An error occured while fetching the data city!\");\n        });\n    }, function (error) {\n        console.log(error);\n        if (error.code === error.PERMISSION_DENIED) {\n            alert(\"Geolocation request denied. Please reset location permission to grant access again\");\n        }\n    });\n};\ncurrentLoctionButton.addEventListener(\"click\", getUserCoordinates);\nsearchButton.addEventListener(\"click\", getCityCoordinates);\ncityInput.addEventListener(\"keyup\", function (e) { return e.key === \"Enter\" && getCityCoordinates(); });\n(function () {\n    getUserCoordinates();\n})();\n\n\n//# sourceURL=webpack://infogain_test/./src/index.ts?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;