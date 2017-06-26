'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeStatusFailure = exports.changeStatusSuccess = exports.changeStatusRequest = exports.deleteFailure = exports.deleteSuccess = exports.deleteRequest = exports.search = exports.changePage = exports.fetchFailure = exports.fetchSuccess = exports.fetchRequest = exports.clear = exports.CHANGE_STATUS_FAILURE = exports.CHANGE_STATUS_SUCCESS = exports.CHANGE_STATUS_REQUEST = exports.DELETE_FAILURE = exports.DELETE_SUCCESS = exports.DELETE_REQUEST = exports.SEARCH = exports.CHANGE_PAGE = exports.FETCH_FAILURE = exports.FETCH_SUCCESS = exports.FETCH_REQUEST = exports.CLEAR = undefined;

var _reduxActions = require('redux-actions');

var CLEAR = exports.CLEAR = 'raket-react/list/CLEAR';

var FETCH_REQUEST = exports.FETCH_REQUEST = 'raket-react/list/FETCH_REQUEST';
var FETCH_SUCCESS = exports.FETCH_SUCCESS = 'raket-react/list/FETCH_SUCCESS';
var FETCH_FAILURE = exports.FETCH_FAILURE = 'raket-react/list/FETCH_FAILURE';

var CHANGE_PAGE = exports.CHANGE_PAGE = 'raket-react/list/CHANGE_PAGE';
var SEARCH = exports.SEARCH = 'raket-react/list/SEARCH';

var DELETE_REQUEST = exports.DELETE_REQUEST = 'raket-react/list/DELETE_REQUEST';
var DELETE_SUCCESS = exports.DELETE_SUCCESS = 'raket-react/list/DELETE_SUCCESS';
var DELETE_FAILURE = exports.DELETE_FAILURE = 'raket-react/list/DELETE_FAILURE';

var CHANGE_STATUS_REQUEST = exports.CHANGE_STATUS_REQUEST = 'raket-react/list/CHANGE_STATUS_REQUEST';
var CHANGE_STATUS_SUCCESS = exports.CHANGE_STATUS_SUCCESS = 'raket-react/list/CHANGE_STATUS_SUCCESS';
var CHANGE_STATUS_FAILURE = exports.CHANGE_STATUS_FAILURE = 'raket-react/list/CHANGE_STATUS_FAILURE';

var clear = exports.clear = (0, _reduxActions.createAction)(CLEAR);
var fetchRequest = exports.fetchRequest = (0, _reduxActions.createAction)(FETCH_REQUEST);
var fetchSuccess = exports.fetchSuccess = (0, _reduxActions.createAction)(FETCH_SUCCESS);
var fetchFailure = exports.fetchFailure = (0, _reduxActions.createAction)(FETCH_FAILURE);

var changePage = exports.changePage = (0, _reduxActions.createAction)(CHANGE_PAGE);
var search = exports.search = (0, _reduxActions.createAction)(SEARCH);

var deleteRequest = exports.deleteRequest = (0, _reduxActions.createAction)(DELETE_REQUEST);
var deleteSuccess = exports.deleteSuccess = (0, _reduxActions.createAction)(DELETE_SUCCESS);
var deleteFailure = exports.deleteFailure = (0, _reduxActions.createAction)(DELETE_FAILURE);

var changeStatusRequest = exports.changeStatusRequest = (0, _reduxActions.createAction)(CHANGE_STATUS_REQUEST);
var changeStatusSuccess = exports.changeStatusSuccess = (0, _reduxActions.createAction)(CHANGE_STATUS_SUCCESS);
var changeStatusFailure = exports.changeStatusFailure = (0, _reduxActions.createAction)(CHANGE_STATUS_FAILURE);