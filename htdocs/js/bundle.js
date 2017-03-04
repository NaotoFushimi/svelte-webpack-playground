/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** ./src/ts/App.ts ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction renderMainFragment(root, component) {\n\tvar text = createText(\"\\\"use strict\\\";\\nalert(100);\");\n\n\treturn {\n\t\tmount: function mount(target, anchor) {\n\t\t\tinsertNode(text, target, anchor);\n\t\t},\n\n\t\tupdate: noop,\n\n\t\tteardown: function teardown(detach) {\n\t\t\tif (detach) {\n\t\t\t\tdetachNode(text);\n\t\t\t}\n\t\t}\n\t};\n}\n\nfunction SvelteComponent(options) {\n\toptions = options || {};\n\tthis._state = options.data || {};\n\n\tthis._observers = {\n\t\tpre: Object.create(null),\n\t\tpost: Object.create(null)\n\t};\n\n\tthis._handlers = Object.create(null);\n\n\tthis._root = options._root;\n\tthis._yield = options._yield;\n\n\tthis._torndown = false;\n\n\tthis._fragment = renderMainFragment(this._state, this);\n\tif (options.target) this._fragment.mount(options.target, null);\n}\n\nSvelteComponent.prototype.get = function get(key) {\n\treturn key ? this._state[key] : this._state;\n};\n\nSvelteComponent.prototype.fire = function fire(eventName, data) {\n\tvar handlers = eventName in this._handlers && this._handlers[eventName].slice();\n\tif (!handlers) return;\n\n\tfor (var i = 0; i < handlers.length; i += 1) {\n\t\thandlers[i].call(this, data);\n\t}\n};\n\nSvelteComponent.prototype.observe = function observe(key, callback, options) {\n\tvar group = options && options.defer ? this._observers.pre : this._observers.post;\n\n\t(group[key] || (group[key] = [])).push(callback);\n\n\tif (!options || options.init !== false) {\n\t\tcallback.__calling = true;\n\t\tcallback.call(this, this._state[key]);\n\t\tcallback.__calling = false;\n\t}\n\n\treturn {\n\t\tcancel: function cancel() {\n\t\t\tvar index = group[key].indexOf(callback);\n\t\t\tif (~index) group[key].splice(index, 1);\n\t\t}\n\t};\n};\n\nSvelteComponent.prototype.on = function on(eventName, handler) {\n\tvar handlers = this._handlers[eventName] || (this._handlers[eventName] = []);\n\thandlers.push(handler);\n\n\treturn {\n\t\tcancel: function cancel() {\n\t\t\tvar index = handlers.indexOf(handler);\n\t\t\tif (~index) handlers.splice(index, 1);\n\t\t}\n\t};\n};\n\nSvelteComponent.prototype.set = function set(newState) {\n\tthis._set(newState);\n\t(this._root || this)._flush();\n};\n\nSvelteComponent.prototype._flush = function _flush() {\n\tif (!this._renderHooks) return;\n\n\twhile (this._renderHooks.length) {\n\t\tvar hook = this._renderHooks.pop();\n\t\thook.fn.call(hook.context);\n\t}\n};\n\nSvelteComponent.prototype._set = function _set(newState) {\n\tvar oldState = this._state;\n\tthis._state = Object.assign({}, oldState, newState);\n\n\tdispatchObservers(this, this._observers.pre, newState, oldState);\n\tif (this._fragment) this._fragment.update(newState, this._state);\n\tdispatchObservers(this, this._observers.post, newState, oldState);\n};\n\nSvelteComponent.prototype.teardown = SvelteComponent.prototype.destroy = function destroy(detach) {\n\tthis.fire('teardown');\n\n\tthis._fragment.teardown(detach !== false);\n\tthis._fragment = null;\n\n\tthis._state = {};\n\tthis._torndown = true;\n};\n\nvar dispatchObservers = function dispatchObservers(component, group, newState, oldState) {\n\tfor (var key in group) {\n\t\tif (!(key in newState)) continue;\n\n\t\tvar newValue = newState[key];\n\t\tvar oldValue = oldState[key];\n\n\t\tif (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;\n\n\t\tvar callbacks = group[key];\n\t\tif (!callbacks) continue;\n\n\t\tfor (var i = 0; i < callbacks.length; i += 1) {\n\t\t\tvar callback = callbacks[i];\n\t\t\tif (callback.__calling) continue;\n\n\t\t\tcallback.__calling = true;\n\t\t\tcallback.call(component, newValue, oldValue);\n\t\t\tcallback.__calling = false;\n\t\t}\n\t}\n};\n\nfunction createText(data) {\n\treturn document.createTextNode(data);\n}\n\nfunction insertNode(node, target, anchor) {\n\ttarget.insertBefore(node, anchor);\n}\n\nfunction detachNode(node) {\n\tnode.parentNode.removeChild(node);\n}\n\nfunction noop() {}\n\nfunction dispatchObservers(component, group, newState, oldState) {\n\tfor (var key in group) {\n\t\tif (!(key in newState)) continue;\n\n\t\tvar newValue = newState[key];\n\t\tvar oldValue = oldState[key];\n\n\t\tif (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;\n\n\t\tvar callbacks = group[key];\n\t\tif (!callbacks) continue;\n\n\t\tfor (var i = 0; i < callbacks.length; i += 1) {\n\t\t\tvar callback = callbacks[i];\n\t\t\tif (callback.__calling) continue;\n\n\t\t\tcallback.__calling = true;\n\t\t\tcallback.call(component, newValue, oldValue);\n\t\t\tcallback.__calling = false;\n\t\t}\n\t}\n}\n\nexports.default = SvelteComponent;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);