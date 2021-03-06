'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _deepFreeze = require('deep-freeze');

var _deepFreeze2 = _interopRequireDefault(_deepFreeze);

var _dotPropImmutable = require('dot-prop-immutable');

var _dotPropImmutable2 = _interopRequireDefault(_dotPropImmutable);

var _reduxActions = require('redux-actions');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var name = exports.name = 'Initial';

var initialState = (0, _deepFreeze2.default)({
  data: {},
  initializing: false
});

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _actions.clear, function () {
  return initialState;
}), _defineProperty(_handleActions, _actions.set, function (state, action) {
  var payload = action.payload;

  var nextState = _dotPropImmutable2.default.set(state, 'data', function (data) {
    return _extends({}, data, payload);
  });
  return (0, _deepFreeze2.default)(nextState);
}), _defineProperty(_handleActions, _actions.startRequest, function (state, action) {
  return (0, _deepFreeze2.default)(_extends({}, state, {
    initializing: true
  }));
}), _defineProperty(_handleActions, _actions.stopRequest, function (state, action) {
  return (0, _deepFreeze2.default)(_extends({}, state, {
    initializing: false
  }));
}), _handleActions), initialState);