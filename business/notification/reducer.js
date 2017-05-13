'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = undefined;

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _deepFreeze = require('deep-freeze');

var _deepFreeze2 = _interopRequireDefault(_deepFreeze);

var _reduxActions = require('redux-actions');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var name = exports.name = 'Notification';

var initialState = (0, _deepFreeze2.default)({
  text: ''
});

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _actions.clear, function (state, action) {
  return initialState;
}), _defineProperty(_handleActions, _actions.notify, function (state, action) {
  var payload = action.payload;

  return (0, _deepFreeze2.default)(_extends({}, state, {
    format: payload.format,
    text: payload.text
  }));
}), _defineProperty(_handleActions, _actions.notifySuccess, function (state, action) {
  var payload = action.payload;

  return (0, _deepFreeze2.default)(_extends({}, state, {
    format: 'success',
    text: payload.text
  }));
}), _defineProperty(_handleActions, _actions.notifyError, function (state, action) {
  var payload = action.payload;

  return (0, _deepFreeze2.default)(_extends({}, state, {
    format: 'error',
    text: payload.text
  }));
}), _handleActions), initialState);