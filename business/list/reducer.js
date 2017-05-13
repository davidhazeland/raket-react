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

var _dotPropImmutable = require('dot-prop-immutable');

var _dotPropImmutable2 = _interopRequireDefault(_dotPropImmutable);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var name = exports.name = 'List';

var initialState = (0, _deepFreeze2.default)({
  data: [],
  meta: {},

  query: {},
  isFetching: false
});

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, _actions.clear, function () {
  return initialState;
}), _defineProperty(_handleActions, _actions.fetchRequest, function (state, action) {
  return (0, _deepFreeze2.default)(_extends({}, state, {
    query: _extends({}, state.query, action.payload.query),
    isFetching: true
  }));
}), _defineProperty(_handleActions, _actions.fetchSuccess, function (state, action) {
  var payload = action.payload;

  return (0, _deepFreeze2.default)(_extends({}, state, {
    data: payload.data,
    meta: payload.meta,
    isFetching: false
  }));
}), _defineProperty(_handleActions, _actions.fetchFailure, function (state, action) {
  return (0, _deepFreeze2.default)(_extends({}, state, {
    isFetching: false
  }));
}), _defineProperty(_handleActions, _actions.deleteRequest, function (state, action) {
  var payload = action.payload;

  var index = state.data.findIndex(function (item) {
    return item.id === payload.id;
  });
  var nextState = _dotPropImmutable2.default.set(state, 'data.' + index, function (item) {
    return _extends({}, item, {
      isRemoving: true
    });
  });
  return (0, _deepFreeze2.default)(nextState);
}), _defineProperty(_handleActions, _actions.deleteSuccess, function (state, action) {
  var payload = action.payload;

  var index = state.data.findIndex(function (item) {
    return item.id === payload.id;
  });
  var nextState = _dotPropImmutable2.default.delete(state, 'data.' + index);
  return (0, _deepFreeze2.default)(nextState);
}), _defineProperty(_handleActions, _actions.deleteFailure, function (state, action) {
  var payload = action.payload;

  var index = state.data.findIndex(function (item) {
    return item.id === payload.id;
  });
  var nextState = _dotPropImmutable2.default.set(state, 'data.' + index, function (item) {
    return _extends({}, item, {
      isRemoving: false
    });
  });
  return (0, _deepFreeze2.default)(nextState);
}), _defineProperty(_handleActions, _actions.changeStatusRequest, function (state, action) {
  var payload = action.payload;

  var index = state.data.findIndex(function (item) {
    return item.id === payload.id;
  });
  var nextState = _dotPropImmutable2.default.set(state, 'data.' + index, function (item) {
    return _extends({}, item, {
      isChangingStatus: true
    });
  });
  return (0, _deepFreeze2.default)(nextState);
}), _defineProperty(_handleActions, _actions.changeStatusSuccess, function (state, action) {
  var payload = action.payload;

  var index = state.data.findIndex(function (item) {
    return item.id === payload.id;
  });
  var nextState = _dotPropImmutable2.default.set(state, 'data.' + index, function (item) {
    return _extends({}, item, {
      status: payload.status,
      isChangingStatus: false
    });
  });
  return (0, _deepFreeze2.default)(nextState);
}), _defineProperty(_handleActions, _actions.changeStatusFailure, function (state, action) {
  var payload = action.payload;

  var index = state.data.findIndex(function (item) {
    return item.id === payload.id;
  });
  var nextState = _dotPropImmutable2.default.set(state, 'data.' + index, function (item) {
    return _extends({}, item, {
      isChangingStatus: false
    });
  });
  return (0, _deepFreeze2.default)(nextState);
}), _handleActions), initialState);