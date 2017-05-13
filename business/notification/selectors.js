'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = undefined;

var _reducer = require('./reducer');

var get = exports.get = function get(state) {
  return state[_reducer.name];
};