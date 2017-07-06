/*! 1506F */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!***********************!*\
  !*** ./app/list.json ***!
  \***********************/
/***/ (function(module, exports) {

eval("module.exports = {\n\t\"arr\": [\n\t\t{\n\t\t\t\"name\": \"张三\",\n\t\t\t\"age\": 23\n\t\t}\n\t]\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9saXN0Lmpzb24/M2QzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcnJcIjogW1xuXHRcdHtcblx0XHRcdFwibmFtZVwiOiBcIuW8oOS4iVwiLFxuXHRcdFx0XCJhZ2VcIjogMjNcblx0XHR9XG5cdF1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvbGlzdC5qc29uXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!***********************!*\
  !*** ./app/style.css ***!
  \***********************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\nmodule.exports = {\"active\":\"_31ucMhHN_dT2uO21nQz87t\"};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9zdHlsZS5jc3M/YmIwMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJhY3RpdmVcIjpcIl8zMXVjTWhITl9kVDJ1TzIxblF6ODd0XCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */
/* no static exports found */
/* all exports used */
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

eval("var cssModel=__webpack_require__(/*! ./style.css */ 1)\r\nvar json=__webpack_require__(/*! ./list.json */ 0)\r\n console.log(cssModel)\r\nfunction create(){\r\n\tvar ele=document.createElement('div')\r\n\tele.id=\"active\"\r\n\tele.innerHTML=\"json.arr[0].name+json.arr[0].age\"\r\n\r\n\treturn ele\r\n}\r\ndocument.body.appendChild(create())//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9pbmRleC5qcz9kYWRjIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjc3NNb2RlbD1yZXF1aXJlKFwiLi9zdHlsZS5jc3NcIilcclxudmFyIGpzb249cmVxdWlyZShcIi4vbGlzdC5qc29uXCIpXHJcbiBjb25zb2xlLmxvZyhjc3NNb2RlbClcclxuZnVuY3Rpb24gY3JlYXRlKCl7XHJcblx0dmFyIGVsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdGVsZS5pZD1cImFjdGl2ZVwiXHJcblx0ZWxlLmlubmVySFRNTD1cImpzb24uYXJyWzBdLm5hbWUranNvbi5hcnJbMF0uYWdlXCJcclxuXHJcblx0cmV0dXJuIGVsZVxyXG59XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlKCkpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);