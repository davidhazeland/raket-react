'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.meReady = exports.me = exports.set = exports.restore = exports.save = exports.clear = exports.ME_READY = exports.ME = exports.SET = exports.RESTORE = exports.SAVE = exports.CLEAR = undefined;

var _reduxActions = require('redux-actions');

var CLEAR = exports.CLEAR = 'raket-react/authorization/CLEAR';
var SAVE = exports.SAVE = 'raket-react/authorization/SAVE';
var RESTORE = exports.RESTORE = 'raket-react/authorization/RESTORE';
var SET = exports.SET = 'raket-react/authorization/SET';
var ME = exports.ME = 'raket-react/authorization/ME';
var ME_READY = exports.ME_READY = 'raket-react/authorization/ME_READY';

var clear = exports.clear = (0, _reduxActions.createAction)(CLEAR);
var save = exports.save = (0, _reduxActions.createAction)(SAVE);
var restore = exports.restore = (0, _reduxActions.createAction)(RESTORE);
var set = exports.set = (0, _reduxActions.createAction)(SET);
var me = exports.me = (0, _reduxActions.createAction)(ME);
var meReady = exports.meReady = (0, _reduxActions.createAction)(ME_READY);