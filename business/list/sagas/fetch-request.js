'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handle = handle;
exports.default = _callee;

var _effects = require('redux-saga/effects');

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _selectors = require('../selectors');

var selectors = _interopRequireWildcard(_selectors);

var _notification = require('../../notification');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = [handle, _callee].map(regeneratorRuntime.mark);

function handle(_ref) {
  var payload = _ref.payload;

  var endpoint, params, query, _ref2, data, meta;

  return regeneratorRuntime.wrap(function handle$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          endpoint = payload.endpoint, params = payload.params;
          _context.prev = 1;
          _context.next = 4;
          return (0, _effects.select)(selectors.getQuery);

        case 4:
          query = _context.sent;
          _context.next = 7;
          return (0, _effects.call)(endpoint, query, params);

        case 7:
          _ref2 = _context.sent;
          data = _ref2.data;
          meta = _ref2.meta;
          _context.next = 12;
          return (0, _effects.put)(actions.fetchSuccess({
            data: data,
            meta: meta
          }));

        case 12:
          _context.next = 20;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context['catch'](1);
          _context.next = 18;
          return (0, _effects.put)(_notification.actions.notifyError({
            text: _context.t0.message
          }));

        case 18:
          _context.next = 20;
          return (0, _effects.put)(actions.fetchFailure());

        case 20:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[1, 14]]);
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
          return (0, _effects.take)(actions.fetchRequest);

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