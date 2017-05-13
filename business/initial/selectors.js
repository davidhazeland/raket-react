'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reducer = require('./reducer');

var get = exports.get = function get(defaultData) {
  return function (state) {
    var _state$name = state[_reducer.name],
        data = _state$name.data,
        initializing = _state$name.initializing;


    return _extends({}, defaultData, data, {
      initializing: initializing
    });
  };
};