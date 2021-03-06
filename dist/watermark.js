(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["watermark"] = factory();
	else
		root["watermark"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/register */ \"./node_modules/@babel/register/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./lib/index */ \"./lib/index.js\").default;\n\n\n//# sourceURL=webpack://watermark/./index.js?");

/***/ }),

/***/ "./lib/blob/index.js":
/*!***************************!*\
  !*** ./lib/blob/index.js ***!
  \***************************/
/*! exports provided: split, decode, uint8, blob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"split\", function() { return split; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decode\", function() { return decode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uint8\", function() { return uint8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blob\", function() { return blob; });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ \"./lib/functions/index.js\");\n\nvar url = /^data:([^;]+);base64,(.*)$/;\n/**\n * Split a data url into a content type and raw data\n *\n * @param {String} dataUrl\n * @return {Array}\n */\n\nfunction split(dataUrl) {\n  return url.exec(dataUrl).slice(1);\n}\n/**\n * Decode a base64 string\n *\n * @param {String} base64\n * @return {String}\n */\n\nfunction decode(base64) {\n  return window.atob(base64);\n}\n/**\n * Return a string of raw data as a Uint8Array\n *\n * @param {String} data\n * @return {UInt8Array}\n */\n\nfunction uint8(data) {\n  var length = data.length;\n  var uints = new Uint8Array(length);\n\n  for (var i = 0; i < length; i++) {\n    uints[i] = data.charCodeAt(i);\n  }\n\n  return uints;\n}\n/**\n * Turns a data url into a blob object\n *\n * @param {String} dataUrl\n * @return {Blob}\n */\n\nvar blob = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"sequence\"])(split, function (parts) {\n  return [decode(parts[1]), parts[0]];\n}, function (blob) {\n  return new Blob([uint8(blob[0])], {\n    type: blob[1]\n  });\n});\n\n//# sourceURL=webpack://watermark/./lib/blob/index.js?");

/***/ }),

/***/ "./lib/canvas/index.js":
/*!*****************************!*\
  !*** ./lib/canvas/index.js ***!
  \*****************************/
/*! exports provided: dataUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataUrl\", function() { return dataUrl; });\n/**\n * Get the data url of a canvas\n *\n * @param {HTMLCanvasElement}\n * @return {String}\n */\nfunction dataUrl(canvas) {\n  return canvas.toDataURL();\n}\n\n//# sourceURL=webpack://watermark/./lib/canvas/index.js?");

/***/ }),

/***/ "./lib/canvas/pool.js":
/*!****************************!*\
  !*** ./lib/canvas/pool.js ***!
  \****************************/
/*! exports provided: CanvasPool, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CanvasPool\", function() { return CanvasPool; });\n/**\n * An immutable canvas pool allowing more efficient use of canvas resources\n *\n * @typedef {Object} CanvasPool\n * @property {Function} pop - return a promise that will evaluate to a canvas\n * @property {Number} length - the number of available canvas elements\n * @property {HTMLCanvasElement[]} elements - the canvas elements used by the pool\n * @property {Function} clear - empty the pool of canvas elements\n * @property {Function} release - free a pool up for release and return the data url\n */\n\n/**\n * Create a CanvasPool with the given size\n *\n * @param {Number} size\n * @param {HTMLCanvasElement[]} elements\n * @param {EventEmitter} eventEmitter\n * @return {CanvasPool}\n */\nfunction CanvasPool() {\n  var canvases = [];\n  return {\n    /**\n     * Get the next available canvas from the pool\n     *\n     * @return {HTMLCanvasElement}\n     */\n    pop: function pop() {\n      if (this.length === 0) {\n        canvases.push(document.createElement('canvas'));\n      }\n\n      return canvases.pop();\n    },\n\n    /**\n     * Return the number of available canvas elements in the pool\n     *\n     * @return {Number}\n     */\n    get length() {\n      return canvases.length;\n    },\n\n    /**\n     * Return a canvas to the pool. This function will clear the canvas for reuse\n     *\n     * @param {HTMLCanvasElement} canvas\n     * @return {String}\n     */\n    release: function release(canvas) {\n      var context = canvas.getContext('2d');\n      context.clearRect(0, 0, canvas.width, canvas.height);\n      canvases.push(canvas);\n    },\n\n    /**\n     * Empty the pool, destroying any references to canvas objects\n     */\n    clear: function clear() {\n      canvases.splice(0, canvases.length);\n    },\n\n    /**\n     * Return the collection of canvases in the pool\n     *\n     * @return {HTMLCanvasElement[]}\n     */\n    get elements() {\n      return canvases;\n    }\n\n  };\n}\nvar shared = CanvasPool();\n/* harmony default export */ __webpack_exports__[\"default\"] = (shared);\n\n//# sourceURL=webpack://watermark/./lib/canvas/pool.js?");

/***/ }),

/***/ "./lib/functions/index.js":
/*!********************************!*\
  !*** ./lib/functions/index.js ***!
  \********************************/
/*! exports provided: sequence, identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sequence\", function() { return sequence; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return identity; });\n/**\n * Return a function that executes a sequence of functions from left to right,\n * passing the result of a previous operation to the next\n *\n * @param {...funcs}\n * @return {Function}\n */\nfunction sequence() {\n  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {\n    funcs[_key] = arguments[_key];\n  }\n\n  return function (value) {\n    return funcs.reduce(function (val, fn) {\n      return fn.call(null, val);\n    }, value);\n  };\n}\n/**\n * Return the argument passed to it\n *\n * @param {Mixed} x\n * @return {Mixed}\n */\n\nfunction identity(x) {\n  return x;\n}\n\n//# sourceURL=webpack://watermark/./lib/functions/index.js?");

/***/ }),

/***/ "./lib/image/index.js":
/*!****************************!*\
  !*** ./lib/image/index.js ***!
  \****************************/
/*! exports provided: getLoader, load, loadUrl, loadFile, createImage, imageToCanvas, mapToCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLoader\", function() { return getLoader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load\", function() { return load; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadUrl\", function() { return loadUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadFile\", function() { return loadFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createImage\", function() { return createImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"imageToCanvas\", function() { return imageToCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapToCanvas\", function() { return mapToCanvas; });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ \"./lib/functions/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/**\n * Set the src of an image object and call the resolve function\n * once it has loaded\n *\n * @param {Image} img\n * @param {String} src\n * @param {Function} resolve\n */\n\nfunction setAndResolve(img, src, resolve) {\n  img.onload = function () {\n    return resolve(img);\n  };\n\n  img.src = src;\n}\n/**\n * Given a resource, return an appropriate loading function for it's type\n *\n * @param {String|File|Image} resource\n * @return {Function}\n */\n\n\nfunction getLoader(resource) {\n  var type = _typeof(resource);\n\n  if (type === 'string') {\n    return loadUrl;\n  }\n\n  if (resource instanceof Image) {\n    return _functions__WEBPACK_IMPORTED_MODULE_0__[\"identity\"];\n  }\n\n  return loadFile;\n}\n/**\n * Used for loading image resources asynchronously and maintaining\n * the supplied order of arguments\n *\n * @param {Array} resources - a mixed array of urls, File objects, or Image objects\n * @param {Function} init - called at the beginning of resource initialization\n * @return {Promise}\n */\n\nfunction load(resources, init) {\n  var promises = [];\n\n  for (var i = 0; i < resources.length; i++) {\n    var resource = resources[i];\n    var loader = getLoader(resource);\n    var promise = loader(resource, init);\n    promises.push(promise);\n  }\n\n  return Promise.all(promises);\n}\n/**\n * Load an image by its url\n *\n * @param {String} url\n * @param {Function} init - an optional image initializer\n * @return {Promise}\n */\n\nfunction loadUrl(url, init) {\n  var img = new Image();\n  typeof init === 'function' && init(img);\n  return new Promise(function (resolve) {\n    img.onload = function () {\n      return resolve(img);\n    };\n\n    img.src = url;\n  });\n}\n/**\n * Return a collection of images from an\n * array of File objects\n *\n * @param {File} file\n * @return {Promise}\n */\n\nfunction loadFile(file) {\n  var reader = new FileReader();\n  return new Promise(function (resolve) {\n    var img = new Image();\n\n    reader.onloadend = function () {\n      return setAndResolve(img, reader.result, resolve);\n    };\n\n    reader.readAsDataURL(file);\n  });\n}\n/**\n * Create a new image, optionally configuring it's onload behavior\n *\n * @param {String} url\n * @param {Function} onload\n * @return {Image}\n */\n\nfunction createImage(url, onload) {\n  var img = new Image();\n\n  if (typeof onload === 'function') {\n    img.onload = onload;\n  }\n\n  img.src = url;\n  return img;\n}\n/**\n * Draw an image to a canvas element\n *\n * @param {Image} img\n * @param {HTMLCanvasElement} canvas\n * @return {HTMLCanvasElement}\n */\n\nfunction drawImage(img, canvas) {\n  var ctx = canvas.getContext('2d');\n  canvas.width = img.width;\n  canvas.height = img.height;\n  ctx.drawImage(img, 0, 0);\n  return canvas;\n}\n/**\n * Convert an Image object to a canvas\n *\n * @param {Image} img\n * @param {CanvasPool} pool\n * @return {HTMLCanvasElement}\n */\n\n\nfunction imageToCanvas(img, pool) {\n  var canvas = pool.pop();\n  return drawImage(img, canvas);\n}\n/**\n * Convert an array of image objects\n * to canvas elements\n *\n * @param {Array} images\n * @param {CanvasPool} pool\n * @return {HTMLCanvasElement[]}\n */\n\nfunction mapToCanvas(images, pool) {\n  return images.map(function (img) {\n    return imageToCanvas(img, pool);\n  });\n}\n\n//# sourceURL=webpack://watermark/./lib/image/index.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return watermark; });\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image */ \"./lib/image/index.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ \"./lib/canvas/index.js\");\n/* harmony import */ var _blob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blob */ \"./lib/blob/index.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ \"./lib/style/index.js\");\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object */ \"./lib/object/index.js\");\n/* harmony import */ var _canvas_pool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./canvas/pool */ \"./lib/canvas/pool.js\");\n\n\n\n\n\n\n/**\n * A configuration type for the watermark function\n *\n * @typedef {Object} Options\n * @property {Function} init - an initialization function that is given Image objects before loading (only applies if resources is a collection of urls)\n * @property {Number} poolSize - number of canvas elements available for drawing,\n * @property {CanvasPool} pool - the pool used. If provided, poolSize will be ignored\n */\n\n/**\n * @constant\n * @type {Options}\n */\n\nvar defaults = {\n  init: function init() {}\n};\n/**\n * Merge the given options with the defaults\n *\n * @param {Options} options\n * @return {Options}\n */\n\nfunction mergeOptions(options) {\n  return Object(_object__WEBPACK_IMPORTED_MODULE_4__[\"extend\"])(Object(_object__WEBPACK_IMPORTED_MODULE_4__[\"clone\"])(defaults), options);\n}\n/**\n * Release canvases from a draw result for reuse. Returns\n * the dataURL from the result's canvas\n *\n * @param {DrawResult} result\n * @param {CanvasPool} pool\n * @return  {String}\n */\n\n\nfunction release(result, pool) {\n  var canvas = result.canvas,\n      sources = result.sources;\n  var dataURL = Object(_canvas__WEBPACK_IMPORTED_MODULE_1__[\"dataUrl\"])(canvas);\n  sources.forEach(pool.release);\n  return dataURL;\n}\n/**\n * Return a watermark object\n *\n *\n * @param {Array} resources - a collection of urls, File objects, or Image objects\n * @param {Options} options - a configuration object for watermark\n * @param {Promise} promise - optional\n * @return {Object}\n */\n\n\nfunction watermark(resources) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var promise = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  var opts = mergeOptions(options);\n  promise || (promise = Object(_image__WEBPACK_IMPORTED_MODULE_0__[\"load\"])(resources, opts.init));\n  return {\n    /**\n     * Convert the watermarked image into a dataUrl. The draw\n     * function is given all images as canvas elements in order\n     *\n     * @param {Function} draw\n     * @return {Object}\n     */\n    dataUrl: function dataUrl(draw) {\n      var promise = this.then(function (images) {\n        return Object(_image__WEBPACK_IMPORTED_MODULE_0__[\"mapToCanvas\"])(images, _canvas_pool__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n      }).then(function (canvases) {\n        return _style__WEBPACK_IMPORTED_MODULE_3__[\"result\"](draw, canvases);\n      }).then(function (result) {\n        return release(result, _canvas_pool__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n      });\n      return watermark(resources, opts, promise);\n    },\n\n    /**\n     * Load additional resources\n     *\n     * @param {Array} resources - a collection of urls, File objects, or Image objects\n     * @param {Function} init - an initialization function that is given Image objects before loading (only applies if resources is a collection of urls)\n     * @return {Object}\n     */\n    load: function load(resources, init) {\n      var promise = this.then(function (resource) {\n        return Object(_image__WEBPACK_IMPORTED_MODULE_0__[\"load\"])([resource].concat(resources), init);\n      });\n      return watermark(resources, opts, promise);\n    },\n\n    /**\n     * Render the current state of the watermarked image. Useful for performing\n     * actions after the watermark has been applied\n     *\n     * @return {Object}\n     */\n    render: function render() {\n      var promise = this.then(function (resource) {\n        return Object(_image__WEBPACK_IMPORTED_MODULE_0__[\"load\"])([resource]);\n      });\n      return watermark(resources, opts, promise);\n    },\n\n    /**\n     * Convert the watermark into a blob\n     *\n     * @param {Function} draw\n     * @return {Object}\n     */\n    blob: function blob(draw) {\n      var promise = this.dataUrl(draw).then(_blob__WEBPACK_IMPORTED_MODULE_2__[\"blob\"]);\n      return watermark(resources, opts, promise);\n    },\n\n    /**\n     * Convert the watermark into an image using the given draw function\n     *\n     * @param {Function} draw\n     * @return {Object}\n     */\n    image: function image(draw) {\n      var promise = this.dataUrl(draw).then(_image__WEBPACK_IMPORTED_MODULE_0__[\"createImage\"]);\n      return watermark(resources, opts, promise);\n    },\n\n    /**\n     * Delegate to the watermark promise\n     *\n     * @return {Promise}\n     */\n    then: function then() {\n      for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {\n        funcs[_key] = arguments[_key];\n      }\n\n      return promise.then.apply(promise, funcs);\n    }\n  };\n}\n;\n/**\n * Style functions\n */\n\nwatermark.image = _style__WEBPACK_IMPORTED_MODULE_3__[\"image\"];\nwatermark.text = _style__WEBPACK_IMPORTED_MODULE_3__[\"text\"];\n/**\n * Clean up all canvas references\n */\n\nwatermark.destroy = function () {\n  return _canvas_pool__WEBPACK_IMPORTED_MODULE_5__[\"default\"].clear();\n};\n\n//# sourceURL=webpack://watermark/./lib/index.js?");

/***/ }),

/***/ "./lib/object/index.js":
/*!*****************************!*\
  !*** ./lib/object/index.js ***!
  \*****************************/
/*! exports provided: extend, clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extend\", function() { return extend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone\", function() { return clone; });\n/**\n * Extend one object with the properties of another\n *\n * @param {Object} first\n * @param {Object} second\n * @return {Object}\n */\nfunction extend(first, second) {\n  var secondKeys = Object.keys(second);\n  secondKeys.forEach(function (key) {\n    return first[key] = second[key];\n  });\n  return first;\n}\n/**\n * Create a shallow copy of the object\n *\n * @param {Object} obj\n * @return {Object}\n */\n\nfunction clone(obj) {\n  return extend({}, obj);\n}\n\n//# sourceURL=webpack://watermark/./lib/object/index.js?");

/***/ }),

/***/ "./lib/style/image/index.js":
/*!**********************************!*\
  !*** ./lib/style/image/index.js ***!
  \**********************************/
/*! exports provided: atPos, lowerRight, upperRight, lowerLeft, upperLeft, center */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"atPos\", function() { return atPos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lowerRight\", function() { return lowerRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"upperRight\", function() { return upperRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lowerLeft\", function() { return lowerLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"upperLeft\", function() { return upperLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"center\", function() { return center; });\n/**\n * Return a function for positioning a watermark on a target canvas\n *\n * @param {Function} xFn - a function to determine an x value\n * @param {Function} yFn - a function to determine a y value\n * @param {Number} alpha\n * @return {Function}\n */\nfunction atPos(xFn, yFn, alpha) {\n  var scale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n  alpha || (alpha = 1.0);\n  return function (target, watermark) {\n    var context = target.getContext('2d');\n\n    var width = function width(target, watermark) {\n      if (scale.width) {\n        return scale.width(target, watermark);\n      }\n\n      return watermark.width;\n    };\n\n    var height = function height(target, watermark) {\n      if (scale.height) {\n        return scale.height(target, watermark);\n      }\n\n      return watermark.height;\n    };\n\n    context.save();\n    context.globalAlpha = alpha;\n    context.drawImage(watermark, xFn(target, watermark), yFn(target, watermark), width(target, watermark), height(target, watermark));\n    context.restore();\n    return target;\n  };\n}\n/**\n * Place the watermark in the lower right corner of the target\n * image\n *\n * @param {Number} alpha\n * @return {Function}\n */\n\nfunction lowerRight(alpha) {\n  return atPos(function (target, mark) {\n    return target.width - (mark.width + 10);\n  }, function (target, mark) {\n    return target.height - (mark.height + 10);\n  }, alpha);\n}\n/**\n * Place the watermark in the upper right corner of the target\n * image\n *\n * @param {Number} alpha\n * @return {Function}\n */\n\nfunction upperRight(alpha) {\n  return atPos(function (target, mark) {\n    return target.width - (mark.width + 10);\n  }, function (target, mark) {\n    return 10;\n  }, alpha);\n}\n/**\n * Place the watermark in the lower left corner of the target\n * image\n *\n * @param {Number} alpha\n * @return {Function}\n */\n\nfunction lowerLeft(alpha) {\n  return atPos(function (target, mark) {\n    return 10;\n  }, function (target, mark) {\n    return target.height - (mark.height + 10);\n  }, alpha);\n}\n/**\n * Place the watermark in the upper left corner of the target\n * image\n *\n * @param {Number} alpha\n * @return {Function}\n */\n\nfunction upperLeft(alpha) {\n  return atPos(function (target, mark) {\n    return 10;\n  }, function (target, mark) {\n    return 10;\n  }, alpha);\n}\n/**\n * Place the watermark in the center of the target\n * image\n *\n * @param {Number} alpha\n * @return {Function}\n */\n\nfunction center(alpha) {\n  return atPos(function (target, mark) {\n    return (target.width - mark.width) / 2;\n  }, function (target, mark) {\n    return (target.height - mark.height) / 2;\n  }, alpha);\n}\n\n//# sourceURL=webpack://watermark/./lib/style/image/index.js?");

/***/ }),

/***/ "./lib/style/index.js":
/*!****************************!*\
  !*** ./lib/style/index.js ***!
  \****************************/
/*! exports provided: image, text, result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"image\", function() { return image; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"text\", function() { return text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"result\", function() { return result; });\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image */ \"./lib/style/image/index.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ \"./lib/style/text/index.js\");\n\n\n/**\n * @typedef {Object} DrawResult\n * @property {HTMLCanvasElement} canvas - the end result of a draw\n * @property {HTMLCanvasElement[]} sources - the sources used in the draw\n */\n\nvar image = _image__WEBPACK_IMPORTED_MODULE_0__;\nvar text = _text__WEBPACK_IMPORTED_MODULE_1__;\n/**\n * Create a DrawResult by apply a list of canvas elements to a draw function\n *\n * @param {Function} draw - the draw function used to create a DrawResult\n * @param {HTMLCanvasElement} sources - the canvases used by the draw function\n * @return {DrawResult}\n */\n\nfunction result(draw, sources) {\n  var canvas = draw.apply(null, sources);\n  return {\n    canvas: canvas,\n    sources: sources\n  };\n}\n\n//# sourceURL=webpack://watermark/./lib/style/index.js?");

/***/ }),

/***/ "./lib/style/text/index.js":
/*!*********************************!*\
  !*** ./lib/style/text/index.js ***!
  \*********************************/
/*! exports provided: atPos, lowerRight, lowerLeft, upperRight, upperLeft, center */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"atPos\", function() { return atPos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lowerRight\", function() { return lowerRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lowerLeft\", function() { return lowerLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"upperRight\", function() { return upperRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"upperLeft\", function() { return upperLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"center\", function() { return center; });\n/**\n * Return a function for positioning a watermark on a target canvas\n *\n * @param {Function} xFn - a function to determine an x value\n * @param {Function} yFn - a function to determine a y value\n * @param {String} text - the text to write\n * @param {String} font - same as the CSS font property\n * @param {String} fillStyle\n * @param {Number} alpha\n * @return {Function}\n */\nfunction atPos(xFn, yFn, text, font, fillStyle, alpha) {\n  alpha || (alpha = 1.0);\n  return function (target) {\n    var context = target.getContext('2d');\n    context.save();\n    context.globalAlpha = alpha;\n    context.fillStyle = fillStyle;\n    context.font = font;\n    var metrics = context.measureText(text);\n    context.fillText(text, xFn(target, metrics, context), yFn(target, metrics, context));\n    context.restore();\n    return target;\n  };\n}\n/**\n * Write text to the lower right corner of the target canvas\n *\n * @param {String} text - the text to write\n * @param {String} font - same as the CSS font property\n * @param {String} fillStyle\n * @param {Number} alpha - control text transparency\n * @param {Number} y - height in text metrics is not very well supported. This is a manual value\n * @return {Function}\n */\n\nfunction lowerRight(text, font, fillStyle, alpha, y) {\n  return atPos(function (target, metrics) {\n    return target.width - (metrics.width + 10);\n  }, function (target) {\n    return y || target.height - 10;\n  }, text, font, fillStyle, alpha);\n}\n/**\n * Write text to the lower left corner of the target canvas\n *\n * @param {String} text - the text to write\n * @param {String} font - same as the CSS font property\n * @param {String} fillStyle\n * @param {Number} alpha - control text transparency\n * @param {Number} y - height in text metrics is not very well supported. This is a manual value\n * @return {Function}\n */\n\nfunction lowerLeft(text, font, fillStyle, alpha, y) {\n  return atPos(function () {\n    return 10;\n  }, function (target) {\n    return y || target.height - 10;\n  }, text, font, fillStyle, alpha);\n}\n/**\n * Write text to the upper right corner of the target canvas\n *\n * @param {String} text - the text to write\n * @param {String} font - same as the CSS font property\n * @param {String} fillStyle\n * @param {Number} alpha - control text transparency\n * @param {Number} y - height in text metrics is not very well supported. This is a manual value\n * @return {Function}\n */\n\nfunction upperRight(text, font, fillStyle, alpha, y) {\n  return atPos(function (target, metrics) {\n    return target.width - (metrics.width + 10);\n  }, function () {\n    return y || 20;\n  }, text, font, fillStyle, alpha);\n}\n/**\n * Write text to the upper left corner of the target canvas\n *\n * @param {String} text - the text to write\n * @param {String} font - same as the CSS font property\n * @param {String} fillStyle\n * @param {Number} alpha - control text transparency\n * @param {Number} y - height in text metrics is not very well supported. This is a manual value\n * @return {Function}\n */\n\nfunction upperLeft(text, font, fillStyle, alpha, y) {\n  return atPos(function () {\n    return 10;\n  }, function () {\n    return y || 20;\n  }, text, font, fillStyle, alpha);\n}\n/**\n * Write text to the center of the target canvas\n *\n * @param {String} text - the text to write\n * @param {String} font - same as the CSS font property\n * @param {String} fillStyle\n * @param {Number} alpha - control text transparency\n * @param {Number} y - height in text metrics is not very well supported. This is a manual value\n * @return {Function}\n */\n\nfunction center(text, font, fillStyle, alpha, y) {\n  return atPos(function (target, metrics, ctx) {\n    ctx.textAlign = 'center';\n    return target.width / 2;\n  }, function (target, metrics, ctx) {\n    ctx.textBaseline = 'middle';\n    return target.height / 2;\n  }, text, font, fillStyle, alpha);\n}\n\n//# sourceURL=webpack://watermark/./lib/style/text/index.js?");

/***/ }),

/***/ "./node_modules/@babel/register/lib/browser.js":
/*!*****************************************************!*\
  !*** ./node_modules/@babel/register/lib/browser.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = register;\nexports.revert = revert;\n\nfunction register() {}\n\nfunction revert() {}\n\n//# sourceURL=webpack://watermark/./node_modules/@babel/register/lib/browser.js?");

/***/ }),

/***/ "./node_modules/@babel/register/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@babel/register/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = function (...args) {\n  return register(...args);\n};\n\nexports.__esModule = true;\n\nconst node = __webpack_require__(/*! ./node */ \"./node_modules/@babel/register/lib/browser.js\");\n\nconst register = node.default;\nObject.assign(exports, node);\n\n//# sourceURL=webpack://watermark/./node_modules/@babel/register/lib/index.js?");

/***/ })

/******/ });
});