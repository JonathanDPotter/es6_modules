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

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\n  constructor(id, make, model, year) {\n    this.id = id;\n    this.make = make;\n    this.model = model;\n    this.year = year;\n  }\n}\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\n\nconsole.log(\"Hello World\");\n\n// TODO\n\nconst form = document.forms[0];\nconst makeInput = document.getElementById(\"makeInput\");\nconst modelInput = document.getElementById(\"modelInput\");\nconst yearInput = document.getElementById(\"yearInput\");\nconst carMakeP = document.getElementById(\"car-make\");\nconst carModelP = document.getElementById(\"car-model\");\nconst carYearP = document.getElementById(\"car-year\");\nconst submitButton = document.getElementById(\"submitBtn\");\nconst removeButton = document.getElementsByClassName(\"removeBtn\")[0];\nconst wishlistUL = document.getElementsByTagName(\"ul\")[0];\n\nconst wishlist = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nconst showCarDetails = (car) => {\n  carMakeP.textContent = car.make;\n  carModelP.textContent = car.model;\n  carYearP.textContent = car.year;\n  removeButton.disabled = false;\n  removeButton.setAttribute(\"data-carId\", car.id);\n};\n\nconst updateDOMList = () => {\n  while (wishlistUL.firstChild) {\n    wishlistUL.removeChild(wishlistUL.lastElementChild);\n  }\n\n  wishlist.list.forEach((listItem) => {\n    const newLI = document.createElement(\"li\");\n\n    newLI.textContent = `${listItem.make}, ${listItem.model}`;\n    newLI.addEventListener(\"click\", () => showCarDetails(listItem));\n\n    wishlistUL.appendChild(newLI);\n  });\n};\n\nconst addCar = (event) => {\n  event.preventDefault();\n  wishlist.add(makeInput.value, modelInput.value, yearInput.value);\n  updateDOMList();\n  form.reset();\n};\n\nsubmitButton.addEventListener(\"click\", addCar);\n\nconst removeCar = () => {\n  const carId = Number(removeButton.getAttribute(\"data-carId\"));\n  wishlist.remove(carId);\n  updateDOMList();\n  form.reset();\n  [carMakeP, carModelP, carYearP].forEach(\n    (element) => (element.textContent = \"\")\n  );\n  removeButton.removeAttribute(\"data-carId\");\n  removeButton.disabled = true;\n};\n\nremoveButton.addEventListener(\"click\", removeCar);\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wishlist)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\n\nclass Wishlist {\n  constructor() {\n    this.list = [];\n    this.nextId = 0;\n  }\n\n  add(make, model, year) {\n    this.list.push(new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](++this.nextId, make, model, year));\n  }\n\n  remove(carId) {\n    this.list = this.list.filter((value) => value.id !== carId);\n  }\n}\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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