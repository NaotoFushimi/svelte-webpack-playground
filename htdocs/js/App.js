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
eval("\n\nconsole.log(2000);\nvar P1 = __webpack_require__(/*! ../html/P1.html */ 1).default;\nconsole.log(P1);\nvar app = new P1({\n    target: document.getElementById(\"app\"),\n    data: {\n        name: 'world',\n        unko: 0\n    }\n});\n// change the data associated with the template\napp.set({ name: 'everybody' });\n// detach the component and clean everything up\n//app.teardown();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90cy9BcHAudHM/NjhjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygyMDAwKVxuXG5jb25zdCBQMSA9IHJlcXVpcmUoXCIuLi9odG1sL1AxLmh0bWxcIikuZGVmYXVsdFxuY29uc29sZS5sb2coUDEpXG5cbmNvbnN0IGFwcCA9IG5ldyBQMSh7XG4gICAgdGFyZ2V0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSxcbiAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6ICd3b3JsZCcgLFxuICAgICAgICB1bmtvIDogMFxuICAgIH1cbn0pO1xuXG4vLyBjaGFuZ2UgdGhlIGRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoZSB0ZW1wbGF0ZVxuYXBwLnNldCh7IG5hbWU6ICdldmVyeWJvZHknIH0pO1xuXG4vLyBkZXRhY2ggdGhlIGNvbXBvbmVudCBhbmQgY2xlYW4gZXZlcnl0aGluZyB1cFxuLy9hcHAudGVhcmRvd24oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdHMvQXBwLnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 1 */
/* exports provided: default */
/* all exports used */
/*!**************************!*\
  !*** ./src/html/P1.html ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\nfunction renderMainFragment ( root, component ) {\n\tvar h1 = createElement( 'h1' );\n\t\n\tappendNode( createText( \"Hello I am P1 \" ), h1 );\n\tvar last_text1 = root.name\n\tvar text1 = createText( last_text1 );\n\tappendNode( text1, h1 );\n\tappendNode( createText( \"!\" ), h1 );\n\tvar text3 = createText( \"\\n\" );\n\t\n\tvar div = createElement( 'div' );\n\t\n\tappendNode( createText( \"hoge \" ), div );\n\tvar last_text5 = root.unko\n\tvar text5 = createText( last_text5 );\n\tappendNode( text5, div );\n\tappendNode( createText( \"\\n    \" ), div );\n\t\n\tvar button = createElement( 'button' );\n\t\n\tfunction clickHandler ( event ) {\n\t\tvar root = this.__svelte.root;\n\t\t\n\t\tcomponent.set({ unko: root.unko + 1 });\n\t}\n\t\n\taddEventListener( button, 'click', clickHandler );\n\t\n\tbutton.__svelte = {\n\t\troot: root\n\t};\n\t\n\tappendNode( button, div );\n\tappendNode( createText( \"click\" ), button );\n\n\treturn {\n\t\tmount: function ( target, anchor ) {\n\t\t\tinsertNode( h1, target, anchor );\n\t\t\tinsertNode( text3, target, anchor );\n\t\t\tinsertNode( div, target, anchor );\n\t\t},\n\t\t\n\t\tupdate: function ( changed, root ) {\n\t\t\tvar __tmp;\n\t\t\n\t\t\tif ( ( __tmp = root.name ) !== last_text1 ) {\n\t\t\t\ttext1.data = last_text1 = __tmp;\n\t\t\t}\n\t\t\t\n\t\t\tif ( ( __tmp = root.unko ) !== last_text5 ) {\n\t\t\t\ttext5.data = last_text5 = __tmp;\n\t\t\t}\n\t\t\t\n\t\t\tbutton.__svelte.root = root;\n\t\t},\n\t\t\n\t\tteardown: function ( detach ) {\n\t\t\tremoveEventListener( button, 'click', clickHandler );\n\t\t\t\n\t\t\tif ( detach ) {\n\t\t\t\tdetachNode( h1 );\n\t\t\t\tdetachNode( text3 );\n\t\t\t\tdetachNode( div );\n\t\t\t}\n\t\t}\n\t};\n}\n\nfunction SvelteComponent ( options ) {\n\toptions = options || {};\n\tthis._state = options.data || {};\n\t\n\tthis._observers = {\n\t\tpre: Object.create( null ),\n\t\tpost: Object.create( null )\n\t};\n\t\n\tthis._handlers = Object.create( null );\n\t\n\tthis._root = options._root;\n\tthis._yield = options._yield;\n\t\n\tthis._torndown = false;\n\t\n\tthis._fragment = renderMainFragment( this._state, this );\n\tif ( options.target ) this._fragment.mount( options.target, null );\n}\n\nSvelteComponent.prototype.get = function get( key ) {\n \treturn key ? this._state[ key ] : this._state;\n };\n\nSvelteComponent.prototype.fire = function fire( eventName, data ) {\n \tvar handlers = eventName in this._handlers && this._handlers[ eventName ].slice();\n \tif ( !handlers ) return;\n \n \tfor ( var i = 0; i < handlers.length; i += 1 ) {\n \t\thandlers[i].call( this, data );\n \t}\n };\n\nSvelteComponent.prototype.observe = function observe( key, callback, options ) {\n \tvar group = ( options && options.defer ) ? this._observers.pre : this._observers.post;\n \n \t( group[ key ] || ( group[ key ] = [] ) ).push( callback );\n \n \tif ( !options || options.init !== false ) {\n \t\tcallback.__calling = true;\n \t\tcallback.call( this, this._state[ key ] );\n \t\tcallback.__calling = false;\n \t}\n \n \treturn {\n \t\tcancel: function () {\n \t\t\tvar index = group[ key ].indexOf( callback );\n \t\t\tif ( ~index ) group[ key ].splice( index, 1 );\n \t\t}\n \t};\n };\n\nSvelteComponent.prototype.on = function on( eventName, handler ) {\n \tvar handlers = this._handlers[ eventName ] || ( this._handlers[ eventName ] = [] );\n \thandlers.push( handler );\n \n \treturn {\n \t\tcancel: function () {\n \t\t\tvar index = handlers.indexOf( handler );\n \t\t\tif ( ~index ) handlers.splice( index, 1 );\n \t\t}\n \t};\n };\n\nSvelteComponent.prototype.set = function set( newState ) {\n \tthis._set( newState );\n \t( this._root || this )._flush();\n };\n\nSvelteComponent.prototype._flush = function _flush() {\n \tif ( !this._renderHooks ) return;\n \n \twhile ( this._renderHooks.length ) {\n \t\tvar hook = this._renderHooks.pop();\n \t\thook.fn.call( hook.context );\n \t}\n };\n\nSvelteComponent.prototype._set = function _set ( newState ) {\n\tvar oldState = this._state;\n\tthis._state = Object.assign( {}, oldState, newState );\n\t\n\tdispatchObservers( this, this._observers.pre, newState, oldState );\n\tif ( this._fragment ) this._fragment.update( newState, this._state );\n\tdispatchObservers( this, this._observers.post, newState, oldState );\n};\n\nSvelteComponent.prototype.teardown = SvelteComponent.prototype.destroy = function destroy ( detach ) {\n\tthis.fire( 'teardown' );\n\n\tthis._fragment.teardown( detach !== false );\n\tthis._fragment = null;\n\n\tthis._state = {};\n\tthis._torndown = true;\n};\n\nvar dispatchObservers = function dispatchObservers( component, group, newState, oldState ) {\n\tfor ( var key in group ) {\n\t\tif ( !( key in newState ) ) continue;\n\n\t\tvar newValue = newState[ key ];\n\t\tvar oldValue = oldState[ key ];\n\n\t\tif ( newValue === oldValue && typeof newValue !== 'object' ) continue;\n\n\t\tvar callbacks = group[ key ];\n\t\tif ( !callbacks ) continue;\n\n\t\tfor ( var i = 0; i < callbacks.length; i += 1 ) {\n\t\t\tvar callback = callbacks[i];\n\t\t\tif ( callback.__calling ) continue;\n\n\t\t\tcallback.__calling = true;\n\t\t\tcallback.call( component, newValue, oldValue );\n\t\t\tcallback.__calling = false;\n\t\t}\n\t}\n}\n\nfunction createElement( name ) {\n\treturn document.createElement( name );\n}\n\nfunction detachNode( node ) {\n\tnode.parentNode.removeChild( node );\n}\n\nfunction insertNode( node, target, anchor ) {\n\ttarget.insertBefore( node, anchor );\n}\n\nfunction createText( data ) {\n\treturn document.createTextNode( data );\n}\n\nfunction appendNode( node, target ) {\n\ttarget.appendChild( node );\n}\n\nfunction addEventListener( node, event, handler ) {\n\tnode.addEventListener ( event, handler, false );\n}\n\nfunction removeEventListener( node, event, handler ) {\n\tnode.removeEventListener ( event, handler, false );\n}\n\nfunction dispatchObservers( component, group, newState, oldState ) {\n\tfor ( var key in group ) {\n\t\tif ( !( key in newState ) ) continue;\n\n\t\tvar newValue = newState[ key ];\n\t\tvar oldValue = oldState[ key ];\n\n\t\tif ( newValue === oldValue && typeof newValue !== 'object' ) continue;\n\n\t\tvar callbacks = group[ key ];\n\t\tif ( !callbacks ) continue;\n\n\t\tfor ( var i = 0; i < callbacks.length; i += 1 ) {\n\t\t\tvar callback = callbacks[i];\n\t\t\tif ( callback.__calling ) continue;\n\n\t\t\tcallback.__calling = true;\n\t\t\tcallback.call( component, newValue, oldValue );\n\t\t\tcallback.__calling = false;\n\t\t}\n\t}\n}\n\n/* harmony default export */ exports[\"default\"] = SvelteComponent;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9odG1sL1AxLmh0bWw/NjdjMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8aDE+SGVsbG8gSSBhbSBQMSB7e25hbWV9fSE8L2gxPlxuPGRpdj5cbiAgICBob2dlIHt7dW5rb319XG4gICAgPGJ1dHRvbiBvbjpjbGljaz0nc2V0KHsgdW5rbzogdW5rbyArIDEgfSknPiBjbGljazwvYnV0dG9uPlxuPC9kaXY+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2h0bWwvUDEuaHRtbCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSEE7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);