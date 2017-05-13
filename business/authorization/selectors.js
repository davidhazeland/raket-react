'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthorized = exports.me = exports.get = undefined;

var _reducer = require('./reducer');

var get = exports.get = function get(state) {
  return state[_reducer.name];
};

var me = exports.me = function me(state) {
  return state[_reducer.name].me;
};
var isAuthorized = exports.isAuthorized = function isAuthorized(state) {
  return state[_reducer.name].isAuthorized;
};