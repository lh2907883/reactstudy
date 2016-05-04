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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(84);


/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactDom = __webpack_require__(85);

	var _textbox = __webpack_require__(114);

	var _textbox2 = _interopRequireDefault(_textbox);

	var _button = __webpack_require__(115);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = React.createClass({
	  displayName: 'App',

	  componentDidMount: function componentDidMount() {
	    //拿到dom引用
	    var el = (0, _reactDom.findDOMNode)(this);
	  },
	  // render: function() {
	  //   return (
	  //       <div>
	  //           <Textbox {...this.props} />
	  //           {
	  //               [1,2,3,4].map((item) => {
	  //                   return <div key={item}>123</div>
	  //               })
	  //           }
	  //       </div>
	  //   );
	  // }
	  render: function render() {
	    var items = [];
	    for (var i = 1; i < 6; i++) {
	      items.push(React.createElement(
	        'div',
	        { key: i },
	        '1212121'
	      ));
	    }
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        _button2.default,
	        { type: 'primary', className: 'aaa' },
	        '主按钮'
	      ),
	      React.createElement(_textbox2.default, this.props),
	      items
	    );
	  }
	});
	// import { Button } from 'antd';
	// import ReactDOM from 'react-dom';
	// import React from 'react';

	var store = {
	  hehe: 'aaa',
	  ok: true,
	  n: 1234
	};
	ReactDOM.render(React.createElement(
	  Provider,
	  { store: store },
	  React.createElement(App, { value: '12311' })
	), document.getElementById('react-content'));

/***/ },

/***/ 85:
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },

/***/ 89:
/***/ function(module, exports) {

	module.exports = React;

/***/ },

/***/ 114:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Textbox = React.createClass({
	  displayName: "Textbox",

	  getDefaultProps: function getDefaultProps() {
	    return {
	      value: 'default value'
	    };
	  },
	  render: function render() {
	    return React.createElement("input", { type: "text", value: this.props.value });
	  }
	});

	exports.default = Textbox;

/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _button = __webpack_require__(116);

	var _button2 = _interopRequireDefault(_button);

	var _buttonGroup = __webpack_require__(118);

	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_button2.default.Group = _buttonGroup2.default;
	exports.default = _button2.default;
	module.exports = exports['default'];

/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(89);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(117);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactDom = __webpack_require__(85);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
	var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
	function isString(str) {
	  return typeof str === 'string';
	}

	var prefix = 'ant-btn-';

	// Insert one space between two chinese characters automatically.
	function insertSpace(child) {
	  if (isString(child) && isTwoCNChar(child)) {
	    return child.split('').join(' ');
	  }

	  if (isString(child.type) && isTwoCNChar(child.props.children)) {
	    return _react2.default.cloneElement(child, {}, child.props.children.split('').join(' '));
	  }

	  return child;
	}

	function clearButton(button) {
	  button.className = button.className.replace(' ' + prefix + 'clicked', '');
	}

	var Button = function (_React$Component) {
	  _inherits(Button, _React$Component);

	  function Button() {
	    _classCallCheck(this, Button);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
	  }

	  _createClass(Button, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var _props;

	      // Add click effect
	      var buttonNode = (0, _reactDom.findDOMNode)(this);
	      clearButton(buttonNode);
	      setTimeout(function () {
	        return buttonNode.className += ' ' + prefix + 'clicked';
	      }, 10);
	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        return clearButton(buttonNode);
	      }, 500);

	      (_props = this.props).onClick.apply(_props, arguments);
	    }
	    // Handle auto focus when click button in Chrome

	  }, {
	    key: 'handleMouseUp',
	    value: function handleMouseUp(e) {
	      (0, _reactDom.findDOMNode)(this).blur();
	      if (this.props.onMouseUp) {
	        this.props.onMouseUp(e);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classNames;

	      var props = this.props;
	      var type = props.type;
	      var shape = props.shape;
	      var size = props.size;
	      var className = props.className;
	      var htmlType = props.htmlType;
	      var children = props.children;

	      var others = _objectWithoutProperties(props, ['type', 'shape', 'size', 'className', 'htmlType', 'children']);

	      // large => lg
	      // small => sm


	      var sizeCls = {
	        large: 'lg',
	        small: 'sm'
	      }[size] || '';

	      var classes = (0, _classnames2.default)((_classNames = {
	        'ant-btn': true
	      }, _defineProperty(_classNames, prefix + type, type), _defineProperty(_classNames, prefix + shape, shape), _defineProperty(_classNames, prefix + sizeCls, sizeCls), _defineProperty(_classNames, prefix + 'loading', 'loading' in props && props.loading !== false), _defineProperty(_classNames, className, className), _classNames));

	      var kids = _react2.default.Children.map(children, insertSpace);

	      return _react2.default.createElement(
	        'button',
	        _extends({}, others, {
	          type: htmlType || 'button',
	          className: classes,
	          onMouseUp: this.handleMouseUp.bind(this),
	          onClick: this.handleClick.bind(this) }),
	        kids
	      );
	    }
	  }]);

	  return Button;
	}(_react2.default.Component);

	exports.default = Button;


	Button.propTypes = {
	  type: _react2.default.PropTypes.oneOf(['primary', 'ghost', 'dashed']),
	  shape: _react2.default.PropTypes.oneOf(['circle', 'circle-outline']),
	  size: _react2.default.PropTypes.oneOf(['large', 'default', 'small']),
	  htmlType: _react2.default.PropTypes.oneOf(['submit', 'button', 'reset']),
	  onClick: _react2.default.PropTypes.func,
	  loading: _react2.default.PropTypes.bool,
	  className: _react2.default.PropTypes.string
	};

	Button.defaultProps = {
	  onClick: function onClick() {}
	};
	module.exports = exports['default'];

/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(89);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(117);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var prefix = 'ant-btn-group-';

	var ButtonGroup = function (_React$Component) {
	  _inherits(ButtonGroup, _React$Component);

	  function ButtonGroup() {
	    _classCallCheck(this, ButtonGroup);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonGroup).apply(this, arguments));
	  }

	  _createClass(ButtonGroup, [{
	    key: 'render',
	    value: function render() {
	      var _classNames;

	      var _props = this.props;
	      var size = _props.size;
	      var className = _props.className;

	      var others = _objectWithoutProperties(_props, ['size', 'className']);

	      // large => lg
	      // small => sm


	      var sizeCls = {
	        large: 'lg',
	        small: 'sm'
	      }[size] || '';

	      var classes = (0, _classnames2.default)((_classNames = {
	        'ant-btn-group': true
	      }, _defineProperty(_classNames, prefix + sizeCls, sizeCls), _defineProperty(_classNames, className, className), _classNames));

	      return _react2.default.createElement('div', _extends({}, others, { className: classes }));
	    }
	  }]);

	  return ButtonGroup;
	}(_react2.default.Component);

	exports.default = ButtonGroup;

	ButtonGroup.propTypes = {
	  size: _react2.default.PropTypes.oneOf(['large', 'small'])
	};
	module.exports = exports['default'];

/***/ }

/******/ });