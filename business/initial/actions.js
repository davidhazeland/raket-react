'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopRequest = exports.startRequest = exports.set = exports.clear = exports.STOP_REQUEST = exports.START_REQUEST = exports.SET = exports.CLEAR = undefined;

var _reduxActions = require('redux-actions');

var CLEAR = exports.CLEAR = 'ironlake/initial/CLEAR';
var SET = exports.SET = 'ironlake/initial/SET';
var START_REQUEST = exports.START_REQUEST = 'ironlake/initial/START_REQUEST';
var STOP_REQUEST = exports.STOP_REQUEST = 'ironlake/initial/STOP_REQUEST';

var clear = exports.clear = (0, _reduxActions.createAction)(CLEAR);
var set = exports.set = (0, _reduxActions.createAction)(SET);
var startRequest = exports.startRequest = (0, _reduxActions.createAction)(START_REQUEST);
var stopRequest = exports.stopRequest = (0, _reduxActions.createAction)(STOP_REQUEST);