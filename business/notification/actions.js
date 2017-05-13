'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notifyError = exports.notifySuccess = exports.notify = exports.clear = exports.NOTIFY_ERROR = exports.NOTIFY_SUCCESS = exports.NOTIFY = exports.CLEAR = undefined;

var _reduxActions = require('redux-actions');

var CLEAR = exports.CLEAR = 'ironlake/notification/CLEAR';
var NOTIFY = exports.NOTIFY = 'ironlake/notification/NOTIFY';
var NOTIFY_SUCCESS = exports.NOTIFY_SUCCESS = 'ironlake/notification/NOTIFY_SUCCESS';
var NOTIFY_ERROR = exports.NOTIFY_ERROR = 'ironlake/notification/NOTIFY_ERROR';

var clear = exports.clear = (0, _reduxActions.createAction)(CLEAR);
var notify = exports.notify = (0, _reduxActions.createAction)(NOTIFY);
var notifySuccess = exports.notifySuccess = (0, _reduxActions.createAction)(NOTIFY_SUCCESS);
var notifyError = exports.notifyError = (0, _reduxActions.createAction)(NOTIFY_ERROR);