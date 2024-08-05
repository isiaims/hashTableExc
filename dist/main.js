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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\nconst test = new _logic__WEBPACK_IMPORTED_MODULE_0__.HashMap();\ntest.set(\"apple\", \"red\");\ntest.set(\"banana\", \"yellow\");\ntest.set(\"carrot\", \"orange\");\ntest.set(\"dog\", \"brown\");\ntest.set(\"elephant\", \"gray\");\ntest.set(\"frog\", \"green\");\ntest.set(\"grape\", \"purple\");\ntest.set(\"hat\", \"black\");\ntest.set(\"ice cream\", \"white\");\ntest.set(\"jacket\", \"blue\");\ntest.set(\"kite\", \"pink\");\ntest.set(\"lion\", \"golden\");\ntest.set(\"moon\", \"silver\");\nconsole.log([...test.table]);\n\n//# sourceURL=webpack://hashtableExc/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HashMap: () => (/* binding */ HashMap)\n/* harmony export */ });\nclass HashMap {\n  constructor() {\n    let table = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Array(16);\n    this.table = table;\n    this.numItems = 0;\n  }\n  hash(key) {\n    let hashCode = 0;\n    const primeNumber = 31;\n    for (let i = 0; i < key.length; i++) {\n      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.table.length;\n    }\n    return hashCode;\n  }\n  resize() {\n    const newArray = this.table.concat(new Array(this.table.length));\n    return newArray;\n  }\n  set(key, value) {\n    const loadFactor = this.numItems / this.table.length;\n    if (loadFactor > 0.75) {\n      // resize\n      this.table = this.resize();\n    }\n    let index = this.hash(key, this.table.length);\n    if (!this.has(key)) {\n      this.numItems++;\n      this.table[index] = [[key, value]];\n    } else {\n      this.table[index].forEach(i => {\n        if (i[0] === key) {\n          i[1] = value;\n        } else {\n          this.table[index].push([key, value]);\n          this.numItems++;\n        }\n      });\n    }\n  }\n  get(key) {\n    if (this.has(key)) {\n      return this.table[index].find(i => i[0] === key)[1];\n    } else return null;\n  }\n  has(key) {\n    let index = this.hash(key);\n    return this.table[index] ? true : false;\n  }\n  remove(key) {\n    if (this.has(key)) {\n      delete this.table[index];\n      this.numItems--;\n      return true;\n    }\n    return false;\n  }\n  length() {\n    let count = 0;\n    for (let i = 0; i < this.table.length; i++) {\n      if (this.table[i]) count++;\n    }\n    return count;\n  }\n  clear() {\n    for (let i = 0; i < this.table.length; i++) {\n      if (this.table[i]) delete this.table[i];\n    }\n  }\n  keys() {\n    let el = [];\n    this.table.forEach(i => {\n      if (i) {\n        i.forEach(u => {\n          el.push(u[0]);\n        });\n      }\n    });\n    return el;\n  }\n  values() {\n    let el = [];\n    this.table.forEach(i => {\n      if (i) {\n        i.forEach(u => {\n          el.push(u[1]);\n        });\n      }\n    });\n    return el;\n  }\n  entries() {\n    let el = [];\n    this.table.forEach(i => {\n      if (i) {\n        i.forEach(u => {\n          el.push(u);\n        });\n      }\n    });\n    return el;\n  }\n}\nclass HashSet {\n  constructor() {\n    let table = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Array(16);\n    this.table = table;\n    this.numItems = 0;\n  }\n  hash(key) {\n    let hashCode = 0;\n    const primeNumber = 31;\n    for (let i = 0; i < key.length; i++) {\n      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.table.length;\n    }\n    return hashCode;\n  }\n  resize() {\n    const newArray = this.table.concat(new Array(this.table.length));\n    return newArray;\n  }\n  set(key) {\n    const loadFactor = this.numItems / this.table.length;\n    if (loadFactor > 0.75) {\n      // resize\n      this.table = this.resize();\n    }\n    let index = this.hash(key);\n    if (!this.table[index]) {\n      this.numItems++;\n      this.table[index] = [[key]];\n    } else {\n      this.table[index].push([key]);\n      this.numItems++;\n    }\n  }\n  get(key) {\n    let index = this.hash(key, this.table.length);\n    if (this.table[index]) {\n      return this.table[index].find(i => i[0] === key)[0];\n    } else return null;\n  }\n  has(key) {\n    let index = this.hash(key);\n    return this.table[index] ? true : false;\n  }\n  remove(key) {\n    if (this.has(key)) {\n      delete this.table[index];\n      this.numItems--;\n      return true;\n    }\n    return false;\n  }\n  length() {\n    let count = 0;\n    for (let i = 0; i < this.table.length; i++) {\n      if (this.table[i]) count++;\n    }\n    return count;\n  }\n  clear() {\n    for (let i = 0; i < this.table.length; i++) {\n      if (this.table[i]) delete this.table[i];\n    }\n  }\n  keys() {\n    let el = [];\n    this.table.forEach(i => {\n      if (i) {\n        i.forEach(u => {\n          el.push(u[0]);\n        });\n      }\n    });\n    return el;\n  }\n  entries() {\n    let el = [];\n    this.table.forEach(i => {\n      if (i) {\n        i.forEach(u => {\n          el.push(u);\n        });\n      }\n    });\n    return el;\n  }\n}\n\n//# sourceURL=webpack://hashtableExc/./src/logic.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;