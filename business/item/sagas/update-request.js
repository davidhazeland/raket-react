'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handle = handle;
exports.default = _callee;

var _effects = require('redux-saga/effects');

var _reduxForm = require('redux-form');

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _notification = require('../../notification');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = [handle, _callee].map(regeneratorRuntime.mark);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function handle(_ref) {
  var payload = _ref.payload;
  var id, data, endpoint, form, extra, updatedItem;
  return regeneratorRuntime.wrap(function handle$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = payload.id, data = payload.data, endpoint = payload.endpoint, form = payload.form, extra = _objectWithoutProperties(payload, ['id', 'data', 'endpoint', 'form']);
          _context.prev = 1;
          _context.next = 4;
          return (0, _effects.put)((0, _reduxForm.startSubmit)(form));

        case 4:
          _context.next = 6;
          return (0, _effects.call)(endpoint, id, data, extra);

        case 6:
          updatedItem = _context.sent;
          _context.next = 9;
          return (0, _effects.put)(actions.set({
            data: updatedItem
          }));

        case 9:
          _context.next = 11;
          return (0, _effects.put)(_notification.actions.notifySuccess({
            text: 'item.edited_successfully'
          }));

        case 11:
          _context.next = 13;
          return (0, _effects.put)(actions.updateSuccess({
            id: id,
            form: form
          }));

        case 13:
          _context.next = 21;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context['catch'](1);
          _context.next = 19;
          return (0, _effects.put)(_notification.actions.notifyError({
            text: _context.t0.message
          }));

        case 19:
          _context.next = 21;
          return (0, _effects.put)(actions.updateFailure({
            id: id,
            form: form
          }));

        case 21:
          _context.prev = 21;
          _context.next = 24;
          return (0, _effects.put)((0, _reduxForm.stopSubmit)(form));

        case 24:
          return _context.finish(21);

        case 25:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[1, 15, 21, 25]]);
}

function _callee() {
  var action;
  return regeneratorRuntime.wrap(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!true) {
            _context2.next = 8;
            break;
          }

          _context2.next = 3;
          return (0, _effects.take)(actions.updateRequest);

        case 3:
          action = _context2.sent;
          _context2.next = 6;
          return (0, _effects.fork)(handle, action);

        case 6:
          _context2.next = 0;
          break;

        case 8:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}