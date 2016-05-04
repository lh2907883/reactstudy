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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Fuck = _react2.default.createClass({
	  displayName: 'Fuck',

	  contextTypes: {
	    store: _react2.default.PropTypes.object
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'span',
	      null,
	      this.context.store.name
	    );
	  }
	});

	var Button = _react2.default.createClass({
	  displayName: 'Button',

	  contextTypes: {
	    store: _react2.default.PropTypes.object.isRequired
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'button',
	      { style: { background: this.context.store.color } },
	      this.props.children
	    );
	  }
	});

	var Message = _react2.default.createClass({
	  displayName: 'Message',

	  childContextTypes: {
	    store: _react2.default.PropTypes.object
	  },
	  getChildContext: function getChildContext() {
	    return {
	      store: {
	        color: "red",
	        name: 'you111'
	      }
	    };
	  },
	  render: function render() {
	    debugger;
	    return _react2.default.createElement(
	      'div',
	      null,
	      '1231',
	      _react2.default.createElement(
	        Button,
	        null,
	        _react2.default.createElement(Fuck, null)
	      )
	    );
	  }
	});

	(0, _reactDom.render)(_react2.default.createElement(Message, null), document.querySelector("#root"));

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);