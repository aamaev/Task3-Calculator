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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operations/operations.js */ \"./src/js/operations/operations.js\");\n/* harmony import */ var _src_css_calculator_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/css/calculator.css */ \"./src/css/calculator.css\");\n\n\nvar btns = document.querySelector('.buttons'),\n  outputString = document.querySelector('.input'),\n  history = document.querySelector('.history');\nvar firstOperand = '';\nvar secondOperand = '';\nvar result = null;\nvar operationName = '';\nvar lastOperation = '';\nvar dotCheck = false;\nvar errorCheck = false;\nvar memoryOperand = '';\nvar calc = new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.Calculator();\nvar memory = new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.Calculator();\nfunction clearAll() {\n  firstOperand = '';\n  secondOperand = '';\n  result = null;\n  operationName = '';\n  lastOperation = '';\n  dotCheck = false;\n  errorCheck = false;\n  calc = new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.Calculator();\n  memory = new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.Calculator();\n  outputString.textContent = '';\n  history.textContent = '';\n}\nbtns.addEventListener('click', function (event) {\n  var value = event.target;\n  if (value.classList.contains('digit')) {\n    if (errorCheck) {\n      clearAll();\n    }\n    firstOperand += value.textContent;\n    outputString.textContent = firstOperand;\n  }\n  if (value.classList.contains('change-sign')) {\n    if (!outputString.textContent) return;\n    outputString.textContent *= -1;\n    firstOperand = outputString.textContent;\n  }\n  if (value.classList.contains('dot') && !dotCheck) {\n    dotCheck = true;\n    firstOperand += value.textContent;\n    outputString.textContent = firstOperand;\n  }\n  if (value.classList.contains('operation')) {\n    if (calc.value != 0 && firstOperand && !secondOperand) {\n      calc.value = 0;\n    }\n    if (errorCheck) {\n      clearAll();\n    }\n    operationName = value.textContent;\n    if (!secondOperand) {\n      calc.executeCommand(new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.AddCommand(+firstOperand));\n    } else {\n      firstOperand = mathOperation(lastOperation);\n      outputString.textContent = calc.value;\n      history.textContent = '';\n    }\n    clearOperation(operationName);\n    lastOperation = operationName;\n    console.log(\"calc value: \" + calc.value);\n    dotCheck = false;\n  }\n  if (value.classList.contains('clear')) {\n    clearAll();\n  }\n  if (value.classList.contains('equals')) {\n    if (errorCheck) {\n      clearAll();\n    }\n    if (!firstOperand && !secondOperand) return;\n    calc.value = mathOperation();\n    clearOperation();\n    if (isFinite(calc.value)) {\n      outputString.textContent = calc.value;\n    } else {\n      outputString.textContent = 'Error, division by zero';\n      errorCheck = true;\n    }\n    history.textContent = '';\n    firstOperand = '';\n    secondOperand = '';\n    dotCheck = false;\n  }\n  if (value.classList.contains('MR')) {\n    if (!memory.value) return;\n    if (firstOperand || secondOperand) clearOperation();\n    outputString.textContent = memory.value;\n    firstOperand = memory.value;\n  }\n  if (value.classList.contains('MC')) {\n    firstOperand = '';\n    calc.value = 0;\n    if (!memory.value) return;\n    memory.value = 0;\n    outputString.textContent = '';\n    calc.value = 0;\n  }\n  if (value.classList.contains('M+')) {\n    firstOperand = '';\n    calc.value = 0;\n    memoryOperand = outputString.textContent;\n    memory.executeCommand(new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.AddCommand(+memoryOperand));\n    outputString.textContent = '';\n    memoryOperand = '';\n  }\n  if (value.classList.contains('M-')) {\n    firstOperand = '';\n    calc.value = 0;\n    memoryOperand = outputString.textContent;\n    memory.executeCommand(new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.SubtractCommand(+memoryOperand));\n    outputString.textContent = '';\n    memoryOperand = '';\n  }\n  if (value.classList.contains('theme')) {\n    document.querySelector('.calc').classList.toggle('light');\n    document.querySelector('.digit').classList.toggle('light');\n    document.querySelector('.btn').classList.toggle('light');\n    document.querySelector('.equals').classList.toggle('light');\n  }\n});\nfunction clearOperation() {\n  var operName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  if (!firstOperand) {\n    firstOperand = outputString.textContent;\n    outputString.textContent = '';\n  } else {\n    secondOperand = firstOperand;\n    outputString.textContent = '';\n  }\n  firstOperand += ' ' + operName;\n  secondOperand = firstOperand;\n  history.textContent = firstOperand;\n  firstOperand = '';\n}\nfunction mathOperation() {\n  switch (lastOperation) {\n    case '+':\n      calc.executeCommand(new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.AddCommand(+firstOperand));\n      break;\n    case '-':\n      calc.executeCommand(new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.SubtractCommand(+firstOperand));\n      break;\n    case '*':\n      calc.executeCommand(new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.MultiplyCommand(+firstOperand));\n      break;\n    case '/':\n      calc.executeCommand(new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.DivisionCommand(+firstOperand));\n      break;\n    case '%':\n      calc.executeCommand(new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.PercentCommand(+firstOperand));\n      break;\n    case '^2':\n      calc.executeCommand(new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.SquaredCommand(+firstOperand));\n      break;\n    case '^3':\n      calc.executeCommand(new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.CubicCommand(+firstOperand));\n      break;\n    case '^1/2':\n      calc.executeCommand(new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.SQRootCommand(+firstOperand));\n      break;\n    case '^1/3':\n      calc.executeCommand(new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.CBRootCommand(+firstOperand));\n      break;\n    case '^1/':\n      calc.executeCommand(new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.NRootCommand(+firstOperand));\n      break;\n    case '!':\n      calc.executeCommand(new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.FactorialCommand(+firstOperand));\n      break;\n    case '^':\n      calc.executeCommand(new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.PowerCommand(+firstOperand));\n      break;\n    case '10^':\n      calc.executeCommand(new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.PowerTenCommand(+firstOperand));\n      break;\n    case '1/':\n      calc.executeCommand(new _operations_operations_js__WEBPACK_IMPORTED_MODULE_0__.DivisionOneCommand(+firstOperand));\n      break;\n  }\n  result = calc.value;\n  return result;\n}\n\n//# sourceURL=webpack://calculator/./src/js/index.js?");

/***/ }),

/***/ "./src/js/operations/operations.js":
/*!*****************************************!*\
  !*** ./src/js/operations/operations.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddCommand\": () => (/* binding */ AddCommand),\n/* harmony export */   \"CBRootCommand\": () => (/* binding */ CBRootCommand),\n/* harmony export */   \"Calculator\": () => (/* binding */ Calculator),\n/* harmony export */   \"CubicCommand\": () => (/* binding */ CubicCommand),\n/* harmony export */   \"DivisionCommand\": () => (/* binding */ DivisionCommand),\n/* harmony export */   \"DivisionOneCommand\": () => (/* binding */ DivisionOneCommand),\n/* harmony export */   \"FactorialCommand\": () => (/* binding */ FactorialCommand),\n/* harmony export */   \"MultiplyCommand\": () => (/* binding */ MultiplyCommand),\n/* harmony export */   \"NRootCommand\": () => (/* binding */ NRootCommand),\n/* harmony export */   \"PercentCommand\": () => (/* binding */ PercentCommand),\n/* harmony export */   \"PowerCommand\": () => (/* binding */ PowerCommand),\n/* harmony export */   \"PowerTenCommand\": () => (/* binding */ PowerTenCommand),\n/* harmony export */   \"SQRootCommand\": () => (/* binding */ SQRootCommand),\n/* harmony export */   \"SquaredCommand\": () => (/* binding */ SquaredCommand),\n/* harmony export */   \"SubtractCommand\": () => (/* binding */ SubtractCommand)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Calculator = /*#__PURE__*/function () {\n  function Calculator() {\n    _classCallCheck(this, Calculator);\n    this.value = 0;\n  }\n  _createClass(Calculator, [{\n    key: \"executeCommand\",\n    value: function executeCommand(command) {\n      this.value = command.execute(this.value);\n    }\n  }]);\n  return Calculator;\n}();\nvar AddCommand = /*#__PURE__*/function () {\n  function AddCommand(valueToAdd) {\n    _classCallCheck(this, AddCommand);\n    this.valueToAdd = valueToAdd;\n  }\n  _createClass(AddCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return currentValue + this.valueToAdd;\n    }\n  }]);\n  return AddCommand;\n}();\nvar SubtractCommand = /*#__PURE__*/function () {\n  function SubtractCommand(valueToSubtract) {\n    _classCallCheck(this, SubtractCommand);\n    this.valueToSubtract = valueToSubtract;\n  }\n  _createClass(SubtractCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return currentValue - this.valueToSubtract;\n    }\n  }]);\n  return SubtractCommand;\n}();\nvar MultiplyCommand = /*#__PURE__*/function () {\n  function MultiplyCommand(valueToMultiply) {\n    _classCallCheck(this, MultiplyCommand);\n    this.valueToMultiply = valueToMultiply;\n  }\n  _createClass(MultiplyCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return currentValue * this.valueToMultiply;\n    }\n  }]);\n  return MultiplyCommand;\n}();\nvar DivisionCommand = /*#__PURE__*/function () {\n  function DivisionCommand(valueToDivision) {\n    _classCallCheck(this, DivisionCommand);\n    this.valueToDivision = valueToDivision;\n  }\n  _createClass(DivisionCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return currentValue / this.valueToDivision;\n    }\n  }]);\n  return DivisionCommand;\n}();\nvar PercentCommand = /*#__PURE__*/function () {\n  function PercentCommand(valueToPercent) {\n    _classCallCheck(this, PercentCommand);\n    this.valueToPercent = valueToPercent;\n  }\n  _createClass(PercentCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return currentValue / 100;\n    }\n  }]);\n  return PercentCommand;\n}();\nvar SquaredCommand = /*#__PURE__*/function () {\n  function SquaredCommand(valueToSquared) {\n    _classCallCheck(this, SquaredCommand);\n    this.valueToSquared = valueToSquared;\n  }\n  _createClass(SquaredCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return currentValue * currentValue;\n    }\n  }]);\n  return SquaredCommand;\n}();\nvar CubicCommand = /*#__PURE__*/function () {\n  function CubicCommand(valueToCubed) {\n    _classCallCheck(this, CubicCommand);\n    this.valueToCubed = valueToCubed;\n  }\n  _createClass(CubicCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return Math.pow(currentValue, 3);\n    }\n  }]);\n  return CubicCommand;\n}();\nvar SQRootCommand = /*#__PURE__*/function () {\n  function SQRootCommand(valueToSQRoot) {\n    _classCallCheck(this, SQRootCommand);\n    this.valueToSQRoot = valueToSQRoot;\n  }\n  _createClass(SQRootCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return Math.pow(currentValue, 0.5);\n    }\n  }]);\n  return SQRootCommand;\n}();\nvar CBRootCommand = /*#__PURE__*/function () {\n  function CBRootCommand(valueToCBRoot) {\n    _classCallCheck(this, CBRootCommand);\n    this.valueToCBRoot = valueToCBRoot;\n  }\n  _createClass(CBRootCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return Math.pow(currentValue, 1 / 3);\n    }\n  }]);\n  return CBRootCommand;\n}();\nvar NRootCommand = /*#__PURE__*/function () {\n  function NRootCommand(valueToNRoot) {\n    _classCallCheck(this, NRootCommand);\n    this.valueToNRoot = valueToNRoot;\n  }\n  _createClass(NRootCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return Math.pow(currentValue, 1 / this.valueToNRoot);\n    }\n  }]);\n  return NRootCommand;\n}();\nvar FactorialCommand = /*#__PURE__*/function () {\n  function FactorialCommand(valueToFactorial) {\n    _classCallCheck(this, FactorialCommand);\n    this.valueToFactorial = valueToFactorial;\n  }\n  _createClass(FactorialCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      var res = 1;\n      while (currentValue) {\n        res *= currentValue--;\n      }\n      return res;\n    }\n  }]);\n  return FactorialCommand;\n}();\nvar PowerCommand = /*#__PURE__*/function () {\n  function PowerCommand(valueToPower) {\n    _classCallCheck(this, PowerCommand);\n    this.valueToPower = valueToPower;\n  }\n  _createClass(PowerCommand, [{\n    key: \"execute\",\n    value: function execute(currentValue) {\n      return Math.pow(currentValue, this.valueToPower);\n    }\n  }]);\n  return PowerCommand;\n}();\nvar PowerTenCommand = /*#__PURE__*/function () {\n  function PowerTenCommand(valueToPowerTen) {\n    _classCallCheck(this, PowerTenCommand);\n    this.valueToPowerTen = valueToPowerTen;\n  }\n  _createClass(PowerTenCommand, [{\n    key: \"execute\",\n    value: function execute() {\n      return Math.pow(10, this.valueToPowerTen);\n    }\n  }]);\n  return PowerTenCommand;\n}();\nvar DivisionOneCommand = /*#__PURE__*/function () {\n  function DivisionOneCommand(valueToDivisonOne) {\n    _classCallCheck(this, DivisionOneCommand);\n    this.valueToDivisonOne = valueToDivisonOne;\n  }\n  _createClass(DivisionOneCommand, [{\n    key: \"execute\",\n    value: function execute() {\n      return 1 / this.valueToDivisonOne;\n    }\n  }]);\n  return DivisionOneCommand;\n}();\n\n\n//# sourceURL=webpack://calculator/./src/js/operations/operations.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/calculator.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/calculator.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n    margin: 0;\\n    padding: 0;\\n}\\n\\n.calc{\\n    background: rgb(0, 0, 0);\\n    height: 450px;\\n    width: 700px;\\n    border-radius: 15px;\\n    margin: 50px auto;\\n    color: white;\\n}\\n\\n.light{\\n    background: rgb(119 166 242);\\n}\\n\\n.calc__input{\\n    font-size: 50px;\\n    height: 90px;\\n}\\n\\n.history{\\n    font-size: 35px;\\n    filter: brightness(50%);\\n    height: 40px;\\n}\\n\\n.buttons{\\n    display: grid;\\n    grid-template-columns: repeat(8, 1fr);\\n    grid-template-rows: repeat(5, 1fr);\\n    grid-auto-rows: 100px;\\n}\\n\\n.buttons button:nth-child(25){\\n    grid-column-start: 1;\\n    grid-column-end: 5;\\n}\\n\\n.buttons button:nth-child(30){\\n    grid-column-start: 1;\\n    grid-column-end: 5;\\n}\\n\\n.buttons button:nth-child(31){\\n    grid-column-start: 5;\\n    grid-column-end: 7;\\n}\\n\\n.btn{\\n    height: 60px;\\n    background: gray;\\n    text-align: center;\\n    font-size: 1.5rem;\\n    border: 2px solid;\\n    cursor: pointer;\\n    user-select: none;\\n    text-decoration: none;\\n}\\n\\n.light .btn{\\n    background: rgb(123 145 201);\\n    border: 2px rgb(119 166 242) solid;\\n}\\n\\n.btn:hover{\\n    filter: brightness(150%);\\n}\\n\\n.btn:active{\\n    filter: brightness(50%);\\n}\\n\\n.digit{\\n    background: rgb(78, 76, 76);\\n}\\n\\n.light .digit{\\n    background: rgb(91 117 193);\\n}\\n\\n.equals{\\n    background: rgb(255, 37, 37);\\n}\\n\\n.light .equals{\\n    background: rgb(255, 0, 0);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calculator/./src/css/calculator.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://calculator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://calculator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/calculator.css":
/*!********************************!*\
  !*** ./src/css/calculator.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./calculator.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/calculator.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calculator/./src/css/calculator.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;