'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateFailure = exports.updateSuccess = exports.updateRequest = exports.createFailure = exports.createSuccess = exports.createRequest = exports.set = exports.clear = exports.UPDATE_FAILURE = exports.UPDATE_SUCCESS = exports.UPDATE_REQUEST = exports.CREATE_FAILURE = exports.CREATE_SUCCESS = exports.CREATE_REQUEST = exports.SET = exports.CLEAR = undefined;

var _reduxActions = require('redux-actions');

var CLEAR = exports.CLEAR = 'ironlake/item/CLEAR';
var SET = exports.SET = 'ironlake/item/SET';

var CREATE_REQUEST = exports.CREATE_REQUEST = 'ironlake/item/CREATE_REQUEST';
var CREATE_SUCCESS = exports.CREATE_SUCCESS = 'ironlake/item/CREATE_SUCCESS';
var CREATE_FAILURE = exports.CREATE_FAILURE = 'ironlake/item/CREATE_FAILURE';

var UPDATE_REQUEST = exports.UPDATE_REQUEST = 'ironlake/item/UPDATE_REQUEST';
var UPDATE_SUCCESS = exports.UPDATE_SUCCESS = 'ironlake/item/UPDATE_SUCCESS';
var UPDATE_FAILURE = exports.UPDATE_FAILURE = 'ironlake/item/UPDATE_FAILURE';

var clear = exports.clear = (0, _reduxActions.createAction)(CLEAR);
var set = exports.set = (0, _reduxActions.createAction)(SET);

var createRequest = exports.createRequest = (0, _reduxActions.createAction)(CREATE_REQUEST);
var createSuccess = exports.createSuccess = (0, _reduxActions.createAction)(CREATE_SUCCESS);
var createFailure = exports.createFailure = (0, _reduxActions.createAction)(CREATE_FAILURE);

var updateRequest = exports.updateRequest = (0, _reduxActions.createAction)(UPDATE_REQUEST);
var updateSuccess = exports.updateSuccess = (0, _reduxActions.createAction)(UPDATE_SUCCESS);
var updateFailure = exports.updateFailure = (0, _reduxActions.createAction)(UPDATE_FAILURE);