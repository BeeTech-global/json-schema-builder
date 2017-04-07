'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Keyword2 = require('./Keyword');

var _Keyword3 = _interopRequireDefault(_Keyword2);

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var Title = (function (_Keyword) {
  _inherits(Title, _Keyword);

  function Title(value) {
    _classCallCheck(this, Title);

    _get(Object.getPrototypeOf(Title.prototype), 'constructor', this).call(this);
    this.value = arguments.length > 1 ? Array.prototype.slice.call(arguments) : value;
  }

  _createClass(Title, [{
    key: 'json',
    value: function json(context) {
      context = context || {};
      context.title = this.value;
      return context;
    }
  }, {
    key: 'value',
    set: function set(value) {
      if (typeof value != 'string') {
        throw new Error('value must be a string');
      }
      this._value = value;
    },
    get: function get() {
      return this._value;
    }
  }]);

  return Title;
})(_Keyword3['default']);

exports['default'] = Title;
module.exports = exports['default'];
//# sourceMappingURL=Title.js.map
