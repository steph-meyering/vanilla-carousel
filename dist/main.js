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

/***/ "./src/carousel-control.js":
/*!*********************************!*\
  !*** ./src/carousel-control.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CarouselControls {\n  constructor() {\n    this.photos = document.querySelectorAll(\".photo\");\n    this.stepperButtons = [];\n    this.active = 0;\n    const nextButton = document.getElementById(\"next\");\n    const prevButton = document.getElementById(\"prev\");\n    const imageContainer = document.getElementById(\"image-container\");\n    nextButton.addEventListener(\"click\", () => this.toggleNext());\n    prevButton.addEventListener(\"click\", () => this.togglePrev());\n    imageContainer.addEventListener(\"mouseover\", () => this.handleMouseOver());\n    imageContainer.addEventListener(\"mouseout\", () => this.handleMouseOut());\n    this.initStepper();\n    this.mouseOver = false;\n    this.interval = 3500;\n    this.timers = new Set()\n    this.startAutoPlay();\n    document.addEventListener('keydown', (e) => this.handleKeyPress(e));\n  }\n\n  startAutoPlay() {\n    this.timers.add(setInterval(() => this.toggleNext(), this.interval));\n  }\n\n  stopAutoPlay(){\n    this.timers.forEach((timer) => clearInterval(timer));\n    this.timers = new Set();\n  }\n  \n  resetInterval(){\n    this.stopAutoPlay();\n    this.startAutoPlay();\n  }\n  \n  handleMouseOut(){\n    this.mouseOver = false;\n    this.startAutoPlay();\n  }\n\n  handleMouseOver() {\n    this.mouseOver = true;\n    this.stopAutoPlay();\n  }\n\n  handleKeyPress(event){\n    switch (event.key) {\n      case \"ArrowLeft\":\n        if (!this.mouseOver) {\n          this.resetInterval()\n        }\n        return this.togglePrev()\n      case \"ArrowRight\":\n        if (!this.mouseOver) {\n          this.resetInterval();\n        }\n        return this.toggleNext()\n      default:\n        break;\n    }    \n  }\n\n  displayPhoto(nextID) {\n    const prevID = this.active;\n    [this.photos[prevID], this.photos[nextID]].forEach((el) =>\n      el.classList.toggle(\"photo--active\")\n    );\n    this.active = nextID;\n    this.updateStepper(prevID, nextID);\n  }\n\n  toggleNext() {\n    let nextID = (this.active + 1) % this.photos.length;\n    this.displayPhoto(nextID);\n  }\n\n  togglePrev() {\n    let nextID =\n      this.active - 1 >= 0 ? this.active - 1 : this.photos.length - 1;\n    this.displayPhoto(nextID);\n  }\n\n  updateStepper(prevID, nextID) {\n    const prev = this.stepperButtons[prevID];\n    const next = this.stepperButtons[nextID];\n    [prev, next].forEach((el) => el.classList.toggle(\"stepper-button--active\"));\n  }\n\n  initStepper() {\n    const stepper = document.getElementById(\"stepper-root\");\n    this.photos.forEach((_, i) => {\n      const stepperButton = document.createElement(\"div\");\n      stepperButton.classList.add(\"button\", \"stepper-button\");\n      i === this.active\n        ? stepperButton.classList.add(\"stepper-button--active\")\n        : null;\n      stepperButton.id = \"stepper\" + i;\n      stepperButton.onclick = () => this.displayPhoto(i);\n      stepper.appendChild(stepperButton);\n      this.stepperButtons.push(stepperButton);\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselControls);\n\n\n//# sourceURL=webpack:///./src/carousel-control.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _carousel_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel-control */ \"./src/carousel-control.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const controls = new _carousel_control__WEBPACK_IMPORTED_MODULE_0__.default;\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

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